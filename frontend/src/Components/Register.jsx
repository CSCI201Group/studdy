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
  const allClasses = [
    { name: "CSCI102", checked: false },
    { name: "CSCI103", checked: false },
    { name: "CSCI104", checked: false },
    { name: "CSCI170", checked: false },
    { name: "CSCI201", checked: false },
    { name: "CSCI270", checked: false },
  ];
  const allLocations = [
    { name: "Leavey", checked: false },
    { name: "Doheny", checked: false },
    { name: "StudyRoom", checked: false },
    { name: "Outdoors", checked: false },
    { name: "Other", checked: false },
  ];
  const allSubjects = [
    { name: "Exams", checked: false },
    { name: "Homework", checked: false },
    { name: "Labs", checked: false },
    { name: "Projects", checked: false },
    { name: "Other", checked: false },
  ];

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleClassChange = (event) => {
    var currClass = event.target.value;
    for(var i = 0; i < allClasses.length; i++){
      var className = allClasses[i].name;
      if(className === currClass){
        allClasses[i].checked = !allClasses[i].checked;
      }
    }
  }
  const handleLocationChange = (event) => {
    var currLocation = event.target.value;
    for(var i = 0; i < allLocations.length; i++){
      var locName = allLocations[i].name;
      if(locName === currLocation){
        allLocations[i].checked = !allLocations[i].checked;
      }
    }
  }
  const handleSubjectChange = (event) => {
    var currSubject = event.target.value;
    for(var i = 0; i < allSubjects.length; i++){
      var subjectName = allSubjects[i].name;
      if(subjectName === currSubject){
        allSubjects[i].checked = !allSubjects[i].checked;
      }
    }
  }

  const [message, setMessage] = React.useState("");

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
    // TODO: if successfully logged in, redirect to next page
  }

  //makes toInput object and sends to logFunc
  const handleSubmit = (event) => {
    event.preventDefault();
    // Classes
    var classes = "";
    for(var i = 0; i < allClasses.length; i++){
      if(allClasses[i].checked){
        classes += "1";
      }
      else{
        classes += "0";
      }
    }
    // Locations
    var locations = "";
    for(var i = 0; i < allLocations.length; i++){
      if(allLocations[i].checked){
        locations += "1";
      }
      else{
        locations += "0";
      }
    }
    // Subjects
    var subjects = "";
    for(var i = 0; i < allSubjects.length; i++){
      if(allSubjects[i].checked){
        subjects += "1";
      }
      else{
        subjects += "0";
      }
    }

    // Password requirement
    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

    // DO VERIFICATION HERE
    // if any required fields is empty
    if(email === "" || password === "" || firstName === "" || lastName === ""){
      setMessage("All required fields can not be empty.");
      window.scrollTo(0,0);
    }
    // if email isn't valid
    else if(email.length < 7){
      setMessage("Invalid email.");
      window.scrollTo(0,0);
    }
    // if email's end isn't @usc.edu
    else if(email.substr(email.length-7, email.length-1) != "usc.edu"){
      setMessage("Must be a USC email.");
      window.scrollTo(0,0);
    }
    // if password isn't 8 chars
    else if(password.length < 8){
      setMessage("Password must be longer than 8 characters.");
      window.scrollTo(0,0);
    }
    // password doesn't meet security reqs
    else if(!pattern.test(password)){
      setMessage("Password does not fulfill requirements.");
      window.scrollTo(0,0);
    }
    else{
      const toInput = { email, password, firstName, lastName, classes, locations, subjects };
      logFunc(toInput);
      //reset inputs
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div>
      <h1 id="title">Studdy</h1>
      <div id="top-box">
        {/* <div id="left-box">
          <input type="file" accept="image/*" name="image" className="file" />
          <br />
          <label for="file" className="file">
            Upload Image for Profile. You can change this later in settings.
          </label>
        </div> */}
        <p style={{ margin: 7 }} id="error-message">
          {message}
        </p>
        <div id="right-box">
          <div className="formgroup">
            <label htmlFor="email">Email<span class="required">*</span>: </label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="ttrojan@usc.edu"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="password">Password<span class="required">*</span>: </label>
            <p id="password-req"><strong>Must have at least one:</strong><br/>
              Uppercase and lowercase letter (A, z) <br/>
              Numeric character (0-9) <br/>
              Special character (!, %, @, #, etc.)
            </p>
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
            <label htmlFor="fname">First Name<span class="required">*</span>: </label>
            <br/>
            <input
              type="text"
              name="fname"
              id="fname"
              value={firstName}
              minLength="1"
              placeholder="Tommy"
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="lname">Last Name<span class="required">*</span>: </label>
            <br/>
            <input
              type="text"
              name="lname"
              id="lname"
              minLength="1"
              placeholder="Trojan"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <br/>
          <span id="required-note"><span class="required">*</span> = Required fields</span>
        </div>
      </div>
      <div className="clearFloat"></div>
      <div className="questions-box">
        <h3 className="questions">Questions: </h3>
        <form onSubmit={handleSubmit}>
          <div className="eachQ">
            <p className="questions">
              Please select the classes you are currently taking:
            </p>
            <div className="class-choice">
              <label htmlFor="CSCI102" className="inputQ">
                CSCI102
                <input
                  type="checkbox"
                  name="courses"
                  value="CSCI102"
                  className="inputRadio"
                  onChange={handleClassChange}
                />
              </label>
            </div>
            <div className="class-choice">
              <label htmlFor="CSCI103" className="inputQ">
                CSCI103
                <input
                  type="checkbox"
                  name="courses"
                  value="CSCI103"
                  className="inputRadio"
                  onChange={handleClassChange}
                />
              </label>
            </div>
            <div className="class-choice">
              <label htmlFor="CSCI104" className="inputQ">
                CSCI104
                <input
                  type="checkbox"
                  name="courses"
                  value="CSCI104"
                  className="inputRadio"
                  onChange={handleClassChange}
                />
              </label>
            </div>
            <div className="class-choice">
              <label htmlFor="CSCI170" className="inputQ">
                CSCI170
                <input
                  type="checkbox"
                  name="courses"
                  value="CSCI170"
                  className="inputRadio"
                  onChange={handleClassChange}
                />
              </label>
            </div>
            <div className="class-choice">
              <label htmlFor="CSCI201" className="inputQ">
                CSCI201
                <input
                  type="checkbox"
                  name="courses"
                  value="CSCI201"
                  className="inputRadio"
                  onChange={handleClassChange}
                />
              </label>
            </div>
            <div className="class-choice">
              <label htmlFor="CSCI270" className="inputQ">
                CSCI270
                <input
                  type="checkbox"
                  name="courses"
                  value="CSCI270"
                  className="inputRadio"
                  onChange={handleClassChange}
                />
              </label>
            </div>
          </div>
          <div className="clearFloat"></div>
          <div className="eachQ">
            <p className="questions">
              Please select the study locations you prefer:
            </p>
            <div className="choice">
              <label htmlFor="Leavey" className="inputQ">
                Leavey Library
                <input
                  type="checkbox"
                  name="locations"
                  value="Leavey"
                  className="inputRadio"
                  onChange={handleLocationChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Doheny" className="inputQ">
                Doheny Library
                <input
                  type="checkbox"
                  name="locations"
                  value="Doheny"
                  className="inputRadio"
                  onChange={handleLocationChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="StudyRoom" className="inputQ">
                Study rooms
                <input
                  type="checkbox"
                  name="locations"
                  value="StudyRoom"
                  className="inputRadio"
                  onChange={handleLocationChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Outdoors" className="inputQ">
                Outdoors
                <input
                  type="checkbox"
                  name="locations"
                  value="Outdoors"
                  className="inputRadio"
                  onChange={handleLocationChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Other" className="inputQ">
                Other
                <input
                  type="checkbox"
                  name="locations"
                  value="Other"
                  className="inputRadio"
                  onChange={handleLocationChange}
                />
              </label>
            </div>
          </div>

          <div className="clearFloat"></div>
          <div className="eachQ">
            <p className="questions">
              Please select what you're studying for:
            </p>
            <div className="choice">
              <label htmlFor="Exams" className="inputQ">
                Exams
                <input
                  type="checkbox"
                  name="subjects"
                  value="Exams"
                  className="inputRadio"
                  onChange={handleSubjectChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Homework" className="inputQ">
                Homework
                <input
                  type="checkbox"
                  name="subjects"
                  value="Homework"
                  className="inputRadio"
                  onChange={handleSubjectChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Labs" className="inputQ">
                Labs
                <input
                  type="checkbox"
                  name="subjects"
                  value="Labs"
                  className="inputRadio"
                  onChange={handleSubjectChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Projects" className="inputQ">
                Projects
                <input
                  type="checkbox"
                  name="subjects"
                  value="Projects"
                  className="inputRadio"
                  onChange={handleSubjectChange}
                />
              </label>
            </div>
            <div className="choice">
              <label htmlFor="Other" className="inputQ">
                Other
                <input
                  type="checkbox"
                  name="subjects"
                  value="Other"
                  className="inputRadio"
                  onChange={handleSubjectChange}
                />
              </label>
            </div>
          </div>
          <label htmlFor="submitButton">
            <button type="submit" onClick={handleSubmit} id="submit-button">
              Register
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
