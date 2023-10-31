import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import "./App.css"
import Signup from "./components/signup/Signup";
import { auth } from './auth';

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);

      }else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/" element = {<Home name={userName} />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
