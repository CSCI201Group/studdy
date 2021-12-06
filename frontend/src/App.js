import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/" className="nav-link">Login</Link>
            <Link to="/Register" className="nav-link">Register</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/view" className="nav-link">Database</Link>
          </div>
        </div>
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/view" element={<Table/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
      
    );
  }
}

export default App;