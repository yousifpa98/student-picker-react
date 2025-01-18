import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Picker from "./Components/Picker";
import Names from "./Components/Names";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Picker />} />
      <Route path="/names" element={<Names />} />
      <Route path="/stats" element={<div>Stats</div>} />
      <Route path="/settings" element={<div>Settings</div>} />
    </Routes>
  );
};

export default App;
