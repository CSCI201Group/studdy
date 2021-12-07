import React, { Component } from "react";
import { useState, useEffect } from 'react'

import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./GuestSwipe.css";


const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 600
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    width: "99%",
    marginTop: theme.spacing(7)
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)"
    }
  }
}));

const GuestSwipe = (props) => {
    //grabbing the string of classes
    const {state} = useLocation()
    const classes = state

    console.log(state)
    console.log(classes.classes)

  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;
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

  async function sampleFunc() {
    let response = await fetch(`api/student/potentialList/${classes.classes}`);    
    let body = await response.json();
    upDateData(body);
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if(data.length <= 0){
    return(
      <div id="noMatches">
        <p>No matches here :( <br/>
        Sign up to find more study buddies!</p>
      </div>
    );
  }

  else{
    return (
      <div id="matchesContainer">
        {data?.map(row=> (
          <div className="row" key={row.name}> 
            <div className="row-item name">{row.firstName} {row.lastName}</div>
            <div className="row-item email">{row.email}</div>
            <div className="row-item classes">{parseClass(row.classes)}</div>
            <div className="row-item locations">{parseLocation(row.locations)}</div>
            <div className="row-item subjects">{parseSubject(row.subjects)}</div>
            <div className="row-item schedule">{parseSchedule(row.schedule)}</div>
            <div className="row-item yes">Yes</div>
            <div className="row-item no">No</div>
          </div>
        ))}
      </div>
    );
  }

};

export default GuestSwipe;