import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Picker from "./Components/Picker";
import Names from "./Components/Names";
import Stats from "./Components/Stats";
import Settings from "./Components/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Picker />} />
      <Route path="/names" element={<Names />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
