import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./Mutuals.css";

const Mutuals = () => {
  const [mutualList, updateMutualList] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const allClasses = ["CSCI102", "CSCI103", "CSCI104", "CSCI170", "CSCI201", "CSCI270"];
  const allLocations = ["Leavey Library", "Doheny Library", "Study rooms", "Outdoors", "Other"];
  const allSubjects = ["Exams", "Homework", "Labs", "Projects", "Other"];
  const [message, setMessage] = React.useState("");

  // Class parser
  function parseClass(classes){
    var result = "";
    for(var i = 0; i < classes.length; i++){
      if(classes[i] == "1"){
        result += allClasses[i] + ", ";
      }
    }
    return result.substr(0, result.length-2);
  }
  // Location parser
  function parseLocation(locations){
    var result = "";
    for(var i = 0; i < locations.length; i++){
      if(locations[i] == "1"){
        result += allLocations[i] + ", ";
      }
    }
    return result.substr(0, result.length-2);
  }
  // Subject parser
  function parseSubject(subjects){
    var result = "";
    for(var i = 0; i < subjects.length; i++){
      if(subjects[i] == "1"){
        result += allSubjects[i] + ", ";
      }
    }
    return result.substr(0, result.length-2);
  }

  // Request from DB
  async function load() {
    var email = "sthuynh@usc.edu";
    let response = await fetch(`/api/student/mutual/${email}`);
    console.log(response);
    let body = await response.json();
    updateMutualList(body);
  }

  if(firstLoad){
    load();
    setLoad(false);
  }

  if(mutualList.length <= 0){
    return(
      <div id="noMatches">
        <p>No matches here :( <br/>
        Head over to the swipes page to meet new study buddies!</p>
      </div>
    );
  }

  else{
    return (
      <div id="matchesContainer">
        {mutualList?.map(row=> (
          <div className="row" key={row.name}> 
            <div className="row-item name" key={row.firstName}>{row.firstName} {row.lastName}</div>
            <div className="row-item email" key={row.email}>{row.email}</div>
            <div className="row-item classes" key={row.classes}>{parseClass(row.classes)}</div>
            <div className="row-item locations" key={row.locations}>{parseLocation(row.locations)}</div>
            <div className="row-item subjects" key={row.subjects}>{parseSubject(row.subjects)}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default Mutuals;