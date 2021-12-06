import React, { Component } from "react";
import { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";
import "./Login.scss";

const Login = () => {

  const [message, setMessage] = React.useState("");
  const [valid, setValid] = React.useState(false);

  let invalid = false;

  const [firstLoad, setLoad] = React.useState(true);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUserChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
 
  async function sampleFunc() {
    let response = await fetch(`/api/student/${username}/${password}`);
    let body = await response.json();
   
    if(body === true){
      setValid(true);
      //console.log("GOTTTTINNN")
    }
    else{
      setValid(false);
    }
    //console.log("valid = " + valid);
  }

  React.useEffect(() => { //only happens once valid changes, since it takes a bit for valid to change

    if(valid === true){ //if false then set correct error message
      navigate("/Register")
      setMessage("");
    }
    }, [valid])


  const navigate = useNavigate() //used to go to register page


  const handleSubmit = (event) => {
    event.preventDefault();
    const toInput = {username, password};
    sampleFunc(toInput);
    setUsername("");
    setPassword("");

    if(valid === false){
      invalid = true;
      setMessage("Invalid Username or Password"); //display in return
    }
  };

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  return (
    <div>
      <h1 id="Studdy">Studdy</h1>
      <div id="box">
        <form name="loginForm" action="Validate">
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="email"
              name="username"
              id="username"
              pattern=".+@usc\.edu"
              placeholder="ttrojan@usc.edu"
              minLength="8"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              minLength="8"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <br />          
          <button type="button" onClick={handleSubmit} id="login" className="submitButton">
            Login
          </button>
          {<p style={{ margin: 7 }} id="error-message"> {message}</p>}

        </form>
        <br />
        <div id="DNE">
          <Link to={"/Register"}>Don't have an account? Sign Up now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;