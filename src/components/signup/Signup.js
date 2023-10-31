import React, { useState } from "react";
import styles from "./Signup.module.css"
import InputControl from "../inputControl/InputControl";
import { Link, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from "../../auth";


function Signup(){

  const navigate =useNavigate();

  const [values, setValues] = useState({
    name:"",
    email:"",
    pass:"",
  });

  const [errMsg, setErrorMsg] = useState("");

  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const handleSubmission =()=>{
    if(!values.name || !values.email || !values.pass ){
      setErrorMsg("Please fill all the feilds");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async(res)=>{
      setSubmitButtonDisable(false);
      const user = res.user;
      await updateProfile(user,{
        displayName: values.name,
      });
      navigate("/");
      window.location.reload();

      console.log(res);
    })
    .catch((err) => {
      setSubmitButtonDisable(false);
      setErrorMsg(err.message)
      console.log("Error: ", err.message);
    })

  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>
          Signup
        </h1>

        <InputControl label ="Name" placeholder="Enter your Name" onChange={(event) =>
        setValues((prev)=> ({ ...prev, name: event.target.value}))} />

        <InputControl label ="Email" placeholder="Enter your Email" onChange={(event) =>
        setValues((prev)=> ({ ...prev, email: event.target.value}))}/>
        <InputControl label ="Password" placeholder="Enter your Password" onChange={(event) =>
        setValues((prev)=> ({ ...prev, pass: event.target.value}))}/>

        <div className={styles.footer}>
          <b className={styles.errmsg}>{errMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisable}>
              Signup
            </button>
            <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;