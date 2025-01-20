import React from "react";
import "./css/Settings.css";

const Settings = () => {
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="settings container">
      <button onClick={clearStorage}>Clear Picker</button>
    </div>
  );
};

export default Settings;
