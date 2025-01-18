import React, { useContext } from "react";
import "./css/ThemeToggle.css";
import { useTheme } from "../Context/ThemeContext";
import Sun from "../assets/icons/sun.svg?react";
import Moon from "../assets/icons/moon.svg?react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={`toggle ${theme}`}>
      <div className="track-bar"></div>
      <div className="knob">
        {theme === "dark" ? (
          <Moon className="theme-icon moon" />
        ) : (
          <Sun className="theme-icon sun" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
