import React from "react";
import "./ErrorPage.css";
import "./Xyz/Style.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <div className="error-content">
      <img
          src="../images/error.png" 
          alt="Error"
          className="error-image"
        />
        <h1>404 Error</h1>
        <p>Oops! The page you're looking for could not be found.</p>
        <NavLink to="/home">
          <button className="home-button">Go Back</button>
        </NavLink>
       <span className="or-button"><b>👈 OR 👉</b></span>
        <NavLink to="/">
          <button className="home-button">Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;