import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import Register from "./Components/Register";
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Register" className="nav-link">Register</Link>
            <Link to="/view" className="nav-link">Database</Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/view" element={<Table/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
        </Routes>
      </Router>
      
    );
  }
}

export default App;