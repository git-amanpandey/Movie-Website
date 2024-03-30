import React, { useState } from "react";
import "./ModeSwitch.css";

const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="mode-switch" onClick={toggleMode}>
      {darkMode ? (
        <img src="../images/sun.png" alt="Light Mode" />
      ) : (
        <img src="../images/moon.png" alt="Dark Mode" />
      )}
    </div>
  );
};

export default ModeSwitch;
