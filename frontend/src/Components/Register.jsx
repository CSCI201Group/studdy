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
  const [firstLoad, setLoad] = React.useState(true);

  /** All of the setters */
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  /**Sends and links to db to enter this student */
  async function logFunc(toInput) {
    console.log(toInput);
    const response = await fetch("/api/student", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput), // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    // TODO: IF SUCCESSFULLY CREATED ACCOUNT, PROMPT LOG IN BUTTON
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  //makes toInput object and sends to logFunc
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const toInput = { email, password, firstName, lastName };
    sampleFunc(toInput);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  //tester to display checked boxes
  var checkBoxes = "";
  function displayVals() {
    $("input[name='courses']:checked").each(function () {
      checkBoxes += $(this).val() + " ";
    });
    checkBoxes = "";
  }
  $("input").change(displayVals);
  displayVals();

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

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
              name="email"
              value={email}
              pattern=".+@usc\.edu"
              placeholder="ttrojan@usc.edu"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              name="password"
              minLength="8"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="fname">First Name: </label>
            <br />
            <input
              type="text"
              name="fname"
              id="fname"
              value={firstName}
              minLength="1"
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="lname">Last Name: </label>
            <br />
            <input
              type="text"
              name="lname"
              id="lname"
              minLength="1"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="clearFloat"></div>
      <div className="questions-box">
        <h3 className="questions">Questions: </h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="eachQ">
            <p className="questions">
              Please select the classes you are currently taking:
            </p>
            <label htmlFor="CSCI102" className="inputQ">
              CSCI102
              <input
                type="checkbox"
                name="courses"
                value="CSCI102"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI103" className="inputQ">
              CSCI103
              <input
                type="checkbox"
                name="courses"
                value="CSCI103"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI104" className="inputQ">
              CSCI104
              <input
                type="checkbox"
                name="courses"
                value="CSCI104"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI170" className="inputQ">
              CSCI170
              <input
                type="checkbox"
                name="courses"
                value="CSCI170"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI201" className="inputQ">
              CSCI201
              <input
                type="checkbox"
                name="courses"
                value="CSCI201"
                className="inputRadio"
              />
            </label>
            <label htmlFor="CSCI270" className="inputQ">
              CSCI270
              <input
                type="checkbox"
                name="courses"
                value="CSCI270"
                className="inputRadio"
              />
            </label>
          </div>
          <div className="clearFloat"></div>
          <div className="eachQ">
            <p className="questions">
              Please select the study locations you prefer:
            </p>
            <br />
            <label htmlFor="Leavey" className="inputQ">
              Leavey Library
              <input
                type="checkbox"
                name="locations"
                value="Leavey"
                className="inputRadio"
              />
            </label>
            <label htmlFor="Doheny" className="inputQ">
              Doheny Library
              <input
                type="checkbox"
                name="locations"
                value="Doheny"
                className="inputRadio"
              />
            </label>
            <label htmlFor="StudyRoom" className="inputQ">
              Study rooms and/or Lounges
              <input
                type="checkbox"
                name="locations"
                value="StudyRoom"
                className="inputRadio"
              />
            </label>
            <label htmlFor="Outdoors" className="inputQ">
              Outdoors
              <input
                type="checkbox"
                name="locations"
                value="Outdoors"
                className="inputRadio"
              />
            </label>
            <label htmlFor="Other" className="inputQ">
              Other/Not specified
              <input
                type="checkbox"
                name="locations"
                value="Other"
                className="inputRadio"
              />
            </label>
          </div>
          <label htmlFor="submitButton">
            Register!
            <input type="submit" value="Submit"></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
