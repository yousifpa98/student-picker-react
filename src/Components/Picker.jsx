import React, { useState } from "react";
import "./css/Picker.css";
import { useNames } from "../Context/NameContext";

const Picker = () => {
  const { names, incrementTimesPicked } = useNames();
  const [selectedNames, setSelectedNames] = useState(() =>
    names.map((nameObj) => ({ ...nameObj, isSelected: true }))
  );
  const [resultName, setResultName] = useState(""); // State to display the picked name
  const [fadeClass, setFadeClass] = useState(""); // Class to trigger animation

  const toggleName = (name) => {
    setSelectedNames((prevSelectedNames) =>
      prevSelectedNames.map((nameObj) =>
        nameObj.name === name
          ? { ...nameObj, isSelected: !nameObj.isSelected }
          : nameObj
      )
    );
  };

  const pickRandomName = () => {
    const availableNames = selectedNames.filter((nameObj) => nameObj.isSelected);
    if (availableNames.length === 0) {
      setResultName("No names selected!");
      setFadeClass(""); // Reset animation class
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const pickedName = availableNames[randomIndex].name;

    incrementTimesPicked(pickedName);

    // Trigger animation restart
    setFadeClass(""); // Remove the fade-in class
    setTimeout(() => {
      setResultName(pickedName); // Update the picked name
      setFadeClass("fade-in"); // Reapply the fade-in class
    }, 10); // Small delay to ensure class reapplication
  };

  return (
    <section className="picker container">
      <div className="name-picker">
        <div className={`resName ${fadeClass}`}>{resultName}</div>
        <button className="pickName" onClick={pickRandomName}>
          Pick Name
        </button>
      </div>
      <div className="names2pick">
        <ul className="nameList">
          {selectedNames.map((nameObj) => (
            <li key={nameObj.name}>
              <label>
                <input
                  type="checkbox"
                  checked={nameObj.isSelected}
                  onChange={() => toggleName(nameObj.name)}
                />
                {nameObj.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Picker;
