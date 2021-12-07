import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Mutuals from "./Components/Mutuals";
import GuestReg from "./Components/GuestReg";
import GuestSwipe from "./Components/GuestSwipe";
import Swipe from "./Components/Swipe";

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/" className="nav-link">Login</Link>
            <Link to="/Register" className="nav-link">Register</Link>
            <Link to="/mutuals" className="nav-link">Mutuals</Link>
            <Link to="/view" className="nav-link">Database</Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
          <Route exact path="/mutuals" element={<Mutuals/>}></Route>
          <Route exact path="/view" element={<Table/>}></Route>
          <Route exact path="/GuestReg" element={<GuestReg/>}></Route>
          <Route exact path="/GuestSwipe" element={<GuestSwipe/>}></Route>
          <Route exact path="/Swipe" element={<Swipe/>}></Route>

        </Routes>
      </Router>
      
    );
  }
}

export default App;