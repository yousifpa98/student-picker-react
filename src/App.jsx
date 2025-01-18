import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>App</div>} />
    </Routes>
  );
};

export default App;
