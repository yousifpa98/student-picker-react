// NameContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the NameContext
const NameContext = createContext();

// Custom hook for consuming NameContext
export const useNames = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useNames must be used within a NameProvider");
  }
  return context;
};

const getStoredNames = () => {
  const storedNames = localStorage.getItem("names");
  return storedNames ? JSON.parse(storedNames) : [];
};

export const NameProvider = ({ children }) => {
  const [names, setNames] = useState(() => getStoredNames());

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const addNames = (newNames) => {
    const nameArray = newNames
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name);
    setNames((prevNames) => [...prevNames, ...nameArray]);
  };

  const deleteName = (nameToDelete) => {
    setNames((prevNames) => prevNames.filter((name) => name !== nameToDelete));
  };

  const updateName = (oldName, newName) => {
    setNames((prevNames) =>
      prevNames.map((name) => (name === oldName ? newName.trim() : name))
    );
  };

  return (
    <NameContext.Provider value={{ names, addNames, deleteName, updateName }}>
      {children}
    </NameContext.Provider>
  );
};
