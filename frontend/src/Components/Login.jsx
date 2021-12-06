import React, { Component } from "react";
import { useState, useEffect } from 'react'

// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Register from "./Register";

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


  //const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
 

  const handleUserChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
 
 
 
  async function sampleFunc() {
    let response = await fetch(`/api/student/${username}/${password}`);
    let body = await response.json();
    //console.log("body = " +await body + typeof body);
   
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
    //console.log("useeffect" + valid)

    if(valid === true){ //if false then set correct error message
      navigate("/Register")
      setMessage("");
    }
    }, [valid])


  const navigate = useNavigate() //used to go to register page


  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event);
    const toInput = {username, password};
    sampleFunc(toInput);
    setUsername("");
    setPassword("");
    //setMessage("");

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