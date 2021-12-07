import React, { Component } from "react";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link,
    useNavigate,
} from "react-router-dom";
import Dropdown from 'react-dropdown';
import "./GuestReg.css";

const GuestReg = () => {
    /** All of the setters */

    const allClasses = [
        { name: "CSCI102", checked: false },
        { name: "CSCI103", checked: false },
        { name: "CSCI104", checked: false },
        { name: "CSCI170", checked: false },
        { name: "CSCI201", checked: false },
        { name: "CSCI270", checked: false },
    ];


    const [message, setMessage] = React.useState("");
    const navigate = useNavigate() //used to go to swipes page

    // ----- HANDLERS -----
    const handleClassChange = (event) => {
        var currClass = event.target.value;
        for (var i = 0; i < allClasses.length; i++) {
            var className = allClasses[i].name;
            if (className === currClass) {
                allClasses[i].checked = !allClasses[i].checked;
            }
        }
    }
    // ----- END OF HANDLERS -----


    //makes toInput object and sends to logFunc
    const handleSubmit = (event) => {
        event.preventDefault();

        // Classes
        var classes = "";
        for (var i = 0; i < allClasses.length; i++) {
            if (allClasses[i].checked) {
                classes += "1";
            }
            else {
                classes += "0";
            }
        }

        console.log("from reg " + classes)

        navigate("/GuestSwipe", {state : {classes : classes}})        
        //reset inputs
    };

    return (
        <div>
            <h1 id="title">Studdy</h1>
            <div id="top-box">
                <div id="login-link">
                    <a href="/">Already have an account? Login!</a>
                </div>
                <p style={{ margin: 7 }} id="error-message">
                    {message}
                </p>
            </div>

            <div className="questions-box">
                <h3 className="questions">Questions: </h3>
                <form onSubmit={handleSubmit}>
                    <div className="eachQ">
                        <p className="questions">
                            Please select the classes you are currently taking:
                        </p>
                        <div className="class-choice">
                            <label htmlFor="CSCI102" className="inputQ">
                                CSCI102
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="CSCI102"
                                    className="inputRadio"
                                    onChange={handleClassChange}
                                />
                            </label>
                        </div>
                        <div className="class-choice">
                            <label htmlFor="CSCI103" className="inputQ">
                                CSCI103
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="CSCI103"
                                    className="inputRadio"
                                    onChange={handleClassChange}
                                />
                            </label>
                        </div>
                        <div className="class-choice">
                            <label htmlFor="CSCI104" className="inputQ">
                                CSCI104
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="CSCI104"
                                    className="inputRadio"
                                    onChange={handleClassChange}
                                />
                            </label>
                        </div>
                        <div className="class-choice">
                            <label htmlFor="CSCI170" className="inputQ">
                                CSCI170
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="CSCI170"
                                    className="inputRadio"
                                    onChange={handleClassChange}
                                />
                            </label>
                        </div>
                        <div className="class-choice">
                            <label htmlFor="CSCI201" className="inputQ">
                                CSCI201
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="CSCI201"
                                    className="inputRadio"
                                    onChange={handleClassChange}
                                />
                            </label>
                        </div>
                        <div className="class-choice">
                            <label htmlFor="CSCI270" className="inputQ">
                                CSCI270
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="CSCI270"
                                    className="inputRadio"
                                    onChange={handleClassChange}
                                />
                            </label>
                        </div>
                    </div>
 
                    <label htmlFor="submitButton">
                        <button type="submit" onClick={handleSubmit} id="submit-button">
                            Register
                        </button>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default GuestReg;