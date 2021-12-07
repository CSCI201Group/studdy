import React, { Component } from "react";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";
import Dropdown from 'react-dropdown';
import "./Register.css";

const Register = () => {
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
  const userAvailability = [
    { name: "Mon", from: "", to: "" },
    { name: "Tues", from: "", to: "" },
    { name: "Wed", from: "", to: "" },
    { name: "Thur", from: "", to: "" },
    { name: "Fri", from: "", to: "" },
    { name: "Sat", from: "", to: "" },
    { name: "Sun", from: "", to: "" },
  ];
  const allTimes = [
    '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
  ];

  const [message, setMessage] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const navigate = useNavigate() //used to go to swipes page

  // ----- HANDLERS -----
  const handleEmailChange = (event) => setEmail(event.target.value);
  React.useEffect(() => {
    if(email !== ""){
      validate();
    }
  }, [email])

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
  // Monday
  const handleMondayFrom = (event) => {
    userAvailability[0].from = event.value;
  }
  const handleMondayTo = (event) => {
    userAvailability[0].to = event.value;
  }
  // Tuesday
  const handleTuesdayFrom = (event) => {
    userAvailability[1].from = event.value;
  }
  const handleTuesdayTo = (event) => {
    userAvailability[1].to = event.value;
  }
  // Wednesday
  const handleWednesdayFrom = (event) => {
    userAvailability[2].from = event.value;
  }
  const handleWednesdayTo = (event) => {
    userAvailability[2].to = event.value;
  }
  // Thursday
  const handleThursdayFrom = (event) => {
    userAvailability[3].from = event.value;
  }
  const handleThursdayTo = (event) => {
    userAvailability[3].to = event.value;
  }
  // Friday
  const handleFridayFrom = (event) => {
    userAvailability[4].from = event.value;
  }
  const handleFridayTo = (event) => {
    userAvailability[4].to = event.value;
  }
  // Saturday
  const handleSaturdayFrom = (event) => {
    userAvailability[5].from = event.value;
  }
  const handleSaturdayTo = (event) => {
    userAvailability[5].to = event.value;
  }
  // Sunday
  const handleSundayFrom = (event) => {
    userAvailability[6].from = event.value;
  }
  const handleSundayTo = (event) => {
    userAvailability[6].to = event.value;
  }
  // ----- END OF HANDLERS -----

  // Send to DB
  async function logFunc(toInput) {
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
    if(body){
      navigate("/");
    }
  }

  async function validate(){
    let response = await fetch(`/api/student/validate-email/${email}`);
    let body = await response.json();
    if(!body){
      setValid(true);
    }
    else{
      setValid(false);
    }
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
    for(var j = 0; j < allLocations.length; j++){
      if(allLocations[j].checked){
        locations += "1";
      }
      else{
        locations += "0";
      }
    }

    // Subjects
    var subjects = "";
    for(var k = 0; k < allSubjects.length; k++){
      if(allSubjects[k].checked){
        subjects += "1";
      }
      else{
        subjects += "0";
      }
    }

    // Schedule
    var schedule = "";
    var invalidSched = false;
    for(var l = 0; l < userAvailability.length; l++){
      var fromTime = userAvailability[l].from.substr(0, userAvailability[l].from.length-3);
      var toTime = userAvailability[l].to.substr(0, userAvailability[l].to.length-3);
      if(userAvailability[l].from === ""){
        fromTime = "0";
      }
      if(userAvailability[l].to === ""){
        toTime = "0";
      }
      if(parseInt(toTime) < parseInt(fromTime)){
        invalidSched = true;
      }
      schedule += userAvailability[l].name + fromTime + "-" + toTime + ",";
    }

    // Password requirement
    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

    // if any required fields is empty
    if(email === "" || password === "" || firstName === "" || lastName === ""){
      setMessage("All required fields cannot be empty.");
      window.scrollTo(0,0);
    }
    // if email isn't valid
    else if(email.length < 7){
      setMessage("Invalid email.");
      window.scrollTo(0,0);
    }
    // if email's end isn't @usc.edu
    else if(email.substr(email.length-8, email.length-1) !== "@usc.edu"){
      setMessage("Must be a USC email.");
      window.scrollTo(0,0);
    }
    //if email is taken
    else if(valid === false){
      setMessage("That email already has an account.");
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
      const toInput = { email, password, firstName, lastName, classes, locations, subjects, schedule };

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
        <div id="login-link">
          <a href="/">Already have an account? Login!</a>
        </div>
        <p style={{ margin: 7 }} id="error-message">
          {message}
        </p>
        <div id="right-box">
          <div className="formgroup">
            <label htmlFor="email">Email<span className="required">*</span>: </label>
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
            <label htmlFor="password">Password<span className="required">*</span>: </label>
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
            <label htmlFor="fname">First Name<span className="required">*</span>: </label>
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
            <label htmlFor="lname">Last Name<span className="required">*</span>: </label>
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
          <span id="required-note"><span className="required">*</span> = Required fields</span>
        </div>
      </div>

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
          <div className="clearFloat"></div>
          <div className="eachQ">
            <p className="questions">
              Please select a time range for you availability:
            </p>
            <div id="schedule">
              <div className="daysOfWeek">
                <div className="day">Monday:</div>
                <div className="day">Tuesday:</div>
                <div className="day">Wednesday:</div>
                <div className="day">Thursday:</div>
                <div className="day">Friday:</div>
                <div className="day">Saturday:</div>
                <div className="day">Sunday:</div>
              </div>
              <div className="dropdowns">
                {/* Monday */}
                <div className="eachDay" id="monday">
                  <div className="from">
                    From:
                    <Dropdown
                      className="fromDropdown"
                      htmlFor="MondayFrom"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleMondayFrom}
                    />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="MondayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleMondayTo}
                    />
                  </div>
                </div>
                {/* Tuesday */}
                <div className="eachDay" id="tuesday">
                  <div className="from">
                    From: 
                    <Dropdown
                      className="fromDropdown"
                      htmlFor="TuesdayFrom"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleTuesdayFrom}
                    />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="TuesdayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleTuesdayTo}
                    />
                  </div>
                </div>
                {/* Wednesday */}
                <div className="eachDay" id="wednesday">
                  <div className="from">
                    From:
                    <Dropdown
                      className="fromDropdown"
                      htmlFor="WednesdayFrom"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleWednesdayFrom}
                    />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="WednesdayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleWednesdayTo}
                    />
                  </div>
                </div>
                {/* Thursday */}
                <div className="eachDay" id="thursday">
                  <div className="from">
                    From:
                    <Dropdown
                      className="fromDropdown"
                      htmlFor="ThursdayFrom"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleThursdayFrom}
                    />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="ThursdayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleThursdayTo}
                    />
                  </div>
                </div>
                {/* Friday */}
                <div className="eachDay" id="friday">
                  <div className="from">
                    From:
                      <Dropdown
                        className="fromDropdown"
                        htmlFor="FridayFrom"
                        options={allTimes}
                        placeholder="Select"
                        onChange={handleFridayFrom}
                      />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="FridayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleFridayTo}
                    />
                  </div>
                </div>
                {/* Saturday */}
                <div className="eachDay" id="saturday">
                  <div className="from">
                    From:
                    <Dropdown
                      className="fromDropdown"
                      htmlFor="SaturdayFrom"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleSaturdayFrom}
                    />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="SaturdayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleSaturdayTo}
                    />
                  </div>
                </div>
                {/* Sunday */}
                <div className="eachDay" id="sunday">
                  <div className="from">
                    From:
                    <Dropdown
                      className="fromDropdown"
                      htmlFor="SundayFrom"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleSundayFrom}
                    />
                  </div>
                  <div className="to">
                    To:
                    <Dropdown
                      className="toDropdown"
                      htmlFor="SundayTo"
                      options={allTimes}
                      placeholder="Select"
                      onChange={handleSundayTo}
                    />
                  </div>
                </div>
              </div>
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