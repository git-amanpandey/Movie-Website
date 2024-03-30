
import "../Xyz/Style.css";
import React, { useState } from "react";
import ModeSwitch from "../Xyz/ModeSwitch";
import { NavLink } from "react-router-dom";
import { FaFilm  } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Default = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };
  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
       <ModeSwitch toggleMode={toggleMode} darkMode={darkMode} />
      <div className="box">
        <nav className="navbar">
          <h1>The_Great_Aman</h1>
         
        </nav>
        <div className="content">
          <div className="text-box">
            <h2>Welcome to My React_Project!</h2>
            <p>
            <b>👋 Hi! Myself Aman, a dynamic web developer with a flair for creativity, crafting captivating digital experiences with code. 🚀</b></p>
<p>In my latest project, I'm building an exciting React.js-powered movie website, where users can explore a vast movie library, empowering users to search and discover any movie they desire. 🎥🔍
            </p>
            <button className="contact-button">⬇ Contact Me ⬇</button>
         
           
       
       <div className="social-links">
              <NavLink
                to="https://instagram.com/_amanpandey25?igshid=NGExMmI2YTkyZg=="
                className="social-link insta-color"
                title="Instagram"
              >
                <FaInstagram className="social-icon" />
                <span className="tooltip">Instagram</span>
              </NavLink>
              <NavLink
                to="https://github.com/git-amanpandey"
                className="social-link github-color"
                title="GitHub"
              >
                <FaGithub className="social-icon" />
                <span className="tooltip">GitHub</span>
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/aman-pandey-6275bb213"
                className="social-link linkedin-color"
                title="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
                <span className="tooltip">LinkedIn</span>
              </NavLink>
            </div>
          
        

      
            <NavLink to="/home" className="custom-button">
               Go & Explore Your Favorite Movie
              <FaFilm   className="error-icon" />
              <FaSearch className="error-icon"/>
            </NavLink>
          </div>
          
          <div className="image-box">
            <img
              src="../images/aman.jpg" 
              alt="Aman Pandey"
              className="thunder-effect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;