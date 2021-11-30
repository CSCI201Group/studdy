import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AddStudent from "./Components/AddStudent";
import Table from "./Components/Table";
import Register from "./Components/Register";
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/view">Database</Link>
            </li>
            
          </ul>
        </div>
        <Routes>
          <Route exact path="/create-account" element={<AddStudent/>}></Route>
          <Route exact path="/view" element={<Table/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
        </Routes>
      </Router>
      
    );
  }
}

export default App;