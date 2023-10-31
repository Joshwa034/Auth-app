import React, { useState} from "react";
import InputControl from "../inputControl/InputControl";
import { Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../auth";
import styles from "./Login.module.css";

function Login(){

  
  const navigate =useNavigate();

  const [values, setValues] = useState({
    email:"",
    pass:"",
  });

  const [errMsg, setErrorMsg] = useState("");

  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const handleSubmission =()=>{
    if(!values.email || !values.pass ){
      setErrorMsg("Please fill all the feilds");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
    .then(async(res)=>{
      setSubmitButtonDisable(false);
      
      navigate("/");

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
          Login
        </h1>

        <InputControl label ="Email" placeholder="Enter your Email" onChange={(event) =>setValues((prev) =>({...prev, email: event.target.value}))}/>
        <InputControl label ="Password" placeholder="Enter your Password" onChange={(event)=>setValues((prev)=>({...prev, pass: event.target.value}))}/>

        <div className={styles.footer}>
          <b className={styles.eror}>{errMsg}</b>
            <button disabled={submitButtonDisable} onClick={handleSubmission}>
              Login
            </button>
      
            <p>Already have an account? <span><Link to="/signup">Signup</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login;