import { RemoveFromQueueTwoTone } from "@material-ui/icons";
import React, { Component, useMemo, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./Swipe.css";

const Swipe = (props) => {
  //function that gets list of potential matches
  const [email, setEmail] = React.useState("");
  const [data, updateData] = React.useState([]);
  const { state } = useLocation();
  console.log(state);
  const tempString = state.username;
  console.log(email);
  const navigate = useNavigate();

  const [firstLoad, setLoad] = React.useState(true);
  const allClasses = ["CSCI102", "CSCI103", "CSCI104", "CSCI170", "CSCI201", "CSCI270"];
  const allLocations = ["Leavey Library", "Doheny Library", "Study rooms", "Outdoors", "Other"];
  const allSubjects = ["Exams", "Homework", "Labs", "Projects", "Other"];

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

  if (firstLoad) {
    setLoad(false);
    setEmail(tempString); //sets it once loaded
    sampleFunc();
  }

  React.useEffect(() => {
    sampleFunc();
  }, [email])
  
  async function sampleFunc() {
    let response = await fetch(`api/student/potential/${email}`);
    let body;
    if(response.ok){
      body = await response.json();
    }
    if(body !== undefined){
      updateData(body);
    }
  }

  if(data.length <= 0){
    return(
      <div id="noMatches">
        <button id="mutualButton" onClick={() => {navigate("/Mutuals", { state: { email: email } });}}>Mutual matches</button>
        <h1>Potential Study Buddies</h1>
        <hr/>
        <p>No matches here :( <br/>
        Come back when more students have joined!</p>
      </div>
    );
  }
  else{
    return (
      <div id="matchesContainer">
        <button id="mutualButton" onClick={() => {navigate("/Mutuals", { state: { email: email } });}}>Mutual matches</button>
        <h1>Potential Study Buddies</h1>
        <hr/>
        <div className="header">
          <div className="header-item">Name</div>
          <div className="header-item">Classes</div>
          <div className="header-item">Locations</div>
          <div className="header-item">Subjects</div>
          <div className="header-item">Swipe?</div>
        </div>
        {data?.map(row=> (
          <div className="row" key={row.name}> 
            <div className="row-item name">{row.firstName} {row.lastName}</div>
            <div className="row-item classes">{parseClass(row.classes)}</div>
            <div className="row-item locations">{parseLocation(row.locations)}</div>
            <div className="row-item subjects">{parseSubject(row.subjects)}</div>
            <button
              className="row-item yes"
              onClick= { () => {
                fetch(`api/student/add/${email}/${row.email}`);
              }
              }>
              Yes
            </button>
            <button className="row-item no" onClick={() => {fetch(`api/student/reject/${email}/${row.email}`)}}>No</button>
          </div>
        ))}
      </div>
    );
  }

};

export default Swipe;
