import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <h1 id="Studdy">Studdy</h1>
      <div id="box">
        <form name="loginForm" action="Validate">
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="email"
              name="username"
              id="username"
              pattern=".+@usc\.edu"
              placeholder="ttrojan@usc.edu"
			  minLength="8"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              minLength="8"
              required
            />
          </div>
          <button type="button" className="submitButton">
            Login
          </button>
        </form>
        <div id="DNE">
          <Link to={"/Register"}>Don't have an account? Sign Up now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
