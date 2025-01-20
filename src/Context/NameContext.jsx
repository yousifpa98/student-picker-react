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
      .filter((name) => name)
      .map((name) => ({ name, timesPicked: 0 })); // Store as objects
    setNames((prevNames) => [...prevNames, ...nameArray]);
  };

  const deleteName = (nameToDelete) => {
    setNames((prevNames) => prevNames.filter((obj) => obj.name !== nameToDelete));
  };

  const updateName = (oldName, newName) => {
    setNames((prevNames) =>
      prevNames.map((obj) =>
        obj.name === oldName ? { ...obj, name: newName.trim() } : obj
      )
    );
  };

  const incrementTimesPicked = (nameToIncrement) => {
    setNames((prevNames) =>
      prevNames.map((obj) =>
        obj.name === nameToIncrement
          ? { ...obj, timesPicked: obj.timesPicked + 1 }
          : obj
      )
    );
  };

  return (
    <NameContext.Provider
      value={{ names, addNames, deleteName, updateName, incrementTimesPicked }}
    >
      {children}
    </NameContext.Provider>
  );
};
