import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Subjects from "./components/subjects/Subjects.jsx"

function App() {

  return (
    <div style={{ height: '100%' }}>
      <TopBar ></TopBar>
      <Routes>
        <Route path="/" element={
          <Home />
        }
        />
        <Route path="subjects/*" element={
          <Subjects />}
        />
        <Route path="*" element={
          <div>
            <h1>Raios no hay nada :C</h1>
          </div>}
        />
      </Routes>
    </div>
  );
}

export default App;
