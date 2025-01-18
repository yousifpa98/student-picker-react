import React, { useState } from "react";
import "./css/Names.css";
import { useNames } from "../Context/NameContext";
import Pen from "../assets/icons/pen.svg?react";
import Delete from "../assets/icons/delete-left.svg?react";

const Names = () => {
  const { names, addNames, deleteName, updateName } = useNames();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      addNames(inputValue);
      setInputValue("");
    }
  };

  return (
    <section className="names container">
      <div className="enter-names">
        <div className="title">
          <h3>Add names:</h3>
          <p className="hint">(separated by comma)</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Enter a name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit-name" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      <div className="names-list">
        <h3>Names List:</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              <p>
                {index + 1 + "."} <span>{name}</span>
              </p>
              <div className="name-btns">
                <Pen
                  onClick={() => {
                    const newName = prompt("Edit name:", name);
                    if (newName && newName.trim()) {
                      updateName(name, newName);
                    }
                  }}
                  className="name-icon"
                />
                <Delete
                  onClick={() => deleteName(name)}
                  className="name-icon"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Names;
