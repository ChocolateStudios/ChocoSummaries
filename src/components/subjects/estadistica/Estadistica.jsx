import React from 'react';
import Button from '@mui/material/Button';
import Theories from "./theories/codes/Theories";
import Tutorials from "./tutorials/codes/Tutorials";
import { Routes, Route, Link } from "react-router-dom";

function Estadistica() {

  return (
    <div style={{ marginTop: 10, marginBottom: 20 }}>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <Link to="teoria" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined" style={{ marginRight: 10 }}>Teoría</Button>
            </Link>
            <Link to="tutoriales" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined">Tutoriales</Button>
            </Link>
          </React.Fragment>
        } />
        <Route path="teoria/*" element={
          <React.Fragment>
            <Link to="/subjects/estadistica" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined" style={{ position: 'absolute', left: 20, top: 83 }}>Volver</Button>
            </Link>
            <Theories />
          </React.Fragment>
        } />
        <Route path="tutoriales/*" element={
          <React.Fragment>
            <Link to="/subjects/estadistica" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined" style={{ position: 'absolute', left: 20, top: 83 }}>Volver</Button>
            </Link>
            <Tutorials />
          </React.Fragment>
        } />
      </Routes>
    </div>
  );
}

export default Estadistica;