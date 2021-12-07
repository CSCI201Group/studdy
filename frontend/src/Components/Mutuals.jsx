import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./Mutuals.css";

const Mutuals = () => {
  const [username, setEmail] = React.useState("");
  const { state } = useLocation();
  const tempString = state.email;
  const [mutualList, updateMutualList] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const allClasses = ["CSCI102", "CSCI103", "CSCI104", "CSCI170", "CSCI201", "CSCI270"];
  const allLocations = ["Leavey Library", "Doheny Library", "Study rooms", "Outdoors", "Other"];
  const allSubjects = ["Exams", "Homework", "Labs", "Projects", "Other"];
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  // Class parser
  function parseClass(classes){
    var result = "";
    for(var i = 0; i < classes.length; i++){
      if(classes[i] === "1"){
        result += allClasses[i] + ", ";
      }
    }
    return result.substr(0, result.length-2);
  }
  // Location parser
  function parseLocation(locations){
    var result = "";
    for(var i = 0; i < locations.length; i++){
      if(locations[i] === "1"){
        result += allLocations[i] + ", ";
      }
    }
    return result.substr(0, result.length-2);
  }
  // Subject parser
  function parseSubject(subjects){
    var result = "";
    for(var i = 0; i < subjects.length; i++){
      if(subjects[i] === "1"){
        result += allSubjects[i] + ", ";
      }
    }
    return result.substr(0, result.length-2);
  }
  // Schedule parser
  function parseSchedule(schedule){
    var result = "";
    for(var i = 0; i < schedule.length; i++){
      if(schedule[i] === ","){
        result += "\n";
      }
      else{
        result += schedule[i];
      }
    }
    return result;
  }

  React.useEffect(() => {
    load();
  }, [username])

  // Request from DB
  async function load() {
    let response = await fetch(`/api/student/mutual/${username}`);
    console.log(response);
    let body;
    if(response.ok){
      body = await response.json();
    }
    console.log(body);
    if(body !== undefined){
      updateMutualList(body);
    }
  }

  if(firstLoad){
    setEmail(tempString);
    load();
    setLoad(false);
  }

  if(mutualList.length <= 0){
    return(
      <div id="noMatches">
        <button id="mutualButton" onClick={() => {navigate("/Swipe", { state: { username: username } });}}>Find more buddies</button>
        <h1>Mutual Study Buddies</h1>
        <hr/>
        <p>No matches here :( <br/>
        Head over to the swipes page to meet new study buddies!</p>
      </div>
    );
  }

  else{
    return (
      <div id="matchesContainer">
        <button id="mutualButton" onClick={() => {navigate("/Swipe", { state: { username: username } });}}>Find more buddies</button>
        <h1>Mutual Study Buddies</h1>
        <hr/>
        {mutualList?.map(row=> (
          <div className="row" key={row.name}> 
            <div className="row-item name">{row.firstName} {row.lastName}</div>
            <div className="row-item email">{row.email}</div>
            <div className="row-item classes">{parseClass(row.classes)}</div>
            <div className="row-item locations">{parseLocation(row.locations)}</div>
            <div className="row-item subjects">{parseSubject(row.subjects)}</div>
            <div className="row-item schedule">{parseSchedule(row.schedule)}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default Mutuals;