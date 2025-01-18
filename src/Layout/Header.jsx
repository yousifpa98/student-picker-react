import React from "react";
import "./Header.css";
import ThemeToggle from "../Components/ThemeToggle";
import Navigation from "../Components/Navigation";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          student picker <span>v0.1</span>
        </h1>
      </div>
      <Navigation />
      <ThemeToggle />
    </header>
  );
};

export default Header;
