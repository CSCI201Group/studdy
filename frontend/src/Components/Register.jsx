import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <h1 id="title">Studdy</h1>
      <div id="top-box">
        <div id="left-box">
          <input type="file" accept="image/*" name="image" className="file" />
          <br />
          <label for="file" className="file">
            Upload Image for Profile. You can change this later in settings.
          </label>
        </div>
        <div id="right-box">
          <div className="formgroup">
            <label htmlFor="username">Username: </label>
            <br />
            <input
              type="email"
              name="username"
              pattern=".+@usc\.edu"
              placeholder="ttrojan@usc.edu"
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="password">Password: </label>
            <br />
            <input type="password" name="password" minLength="8" required />
          </div>
          <div className="formgroup">
            <label htmlFor="fname">First Name: </label>
            <br />
            <input type="text" name="fname" id="fname" minLength="1" required />
          </div>
          <div className="formgroup">
            <label htmlFor="lname">Last Name: </label>
            <br />
            <input type="text" name="lname" id="lname" minLength="1" required />
          </div>
        </div>
      </div>
      <div className="clearFloat"></div>
      <div className="questions-box">
        <h3 className="questions">Questions: </h3>
        <br />
        <form>
          <div className="eachQ">
            <p className="questions">
              Please select the classes you are currently taking:
            </p>
            <br />
            <label htmlFor="CSCI102" className="inputQ">
              CSCI102
              <input
                type="radio"
                name="CSCI102"
                value="CSCI102"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI103" className="inputQ">
              CSCI103
              <input
                type="radio"
                name="CSCI103"
                value="CSCI103"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI104" className="inputQ">
              CSCI104
              <input
                type="radio"
                name="CSCI104"
                value="CSCI104"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI170" className="inputQ">
              CSCI170
              <input
                type="radio"
                name="CSCI170"
                value="CSCI170"
                className="inputRadio"
              />
            </label>
          </div>
          <div className="eachQ">
            <p className="questions">
              Please select the study locations you prefer:
            </p>
            <label htmlFor="Leavey" className="inputQ">
              Leavey Library
              <input
                type="radio"
                name="Leavey"
                value="Leavey"
                className="inputRadio"
              />
            </label>
            <label htmlFor="Doheny" className="inputQ">
              Doheny Library
              <input
                type="radio"
                name="Doheny"
                value="Doheny"
                className="inputRadio"
              />
            </label>
            <label htmlFor="StudyRoom" className="inputQ">
              Study rooms and/or Lounges
              <input
                type="radio"
                name="StudyRoom"
                value="StudyRoom"
                className="inputRadio"
              />
            </label>
            <label htmlFor="Outdoors" className="inputQ">
              Outdoors
              <input
                type="radio"
                name="Outdoors"
                value="Outdoors"
                className="inputRadio"
              />
            </label>
            <label htmlFor="Other" className="inputQ">
              Other/Not specified
              <input
                type="radio"
                name="Other"
                value="Other"
                className="inputRadio"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
