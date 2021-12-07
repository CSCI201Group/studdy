import React, { Component, useMemo, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

const Swipe = (props) => {
  //function that gets list of potential matches
  const [email, setEmail] = React.useState("");
  const { state } = useLocation();
  const tempString = state.username;
  console.log(email);

  const [firstLoad, setLoad] = React.useState(true);
  if (firstLoad) {
    setLoad(false);
    setEmail(tempString); //sets it once
    sampleFunc();
  }

  return (
    <div>
      <p>EMAIL = {email}</p>
    </div>
  );

  async function sampleFunc() {
    let response = await fetch(`api/student/potentialList/${email}`);
    let body = await response.json();
    console.log(body);
  }
};

export default Swipe;
