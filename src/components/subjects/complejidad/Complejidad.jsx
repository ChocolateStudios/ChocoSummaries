import React from 'react';
import Button from '@mui/material/Button'
import Theories from './theories/codes/Theories'
import Codes from './codes/codes/Codes';
import { Routes, Route, Link } from "react-router-dom";

function Complejidad() {

  return (
    <div style={{ marginTop: 10, marginBottom: 20 }}>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <Link to="teoria" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined" style={{ marginRight: 10 }}>Teoría</Button>
            </Link>
            <Link to="codes" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined">Códigos</Button>
            </Link>
          </React.Fragment>
        } />
        <Route path="teoria" element={
          <React.Fragment>
            <Link to="/subjects/complejidad" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined" style={{ position: 'absolute', left: 20, top: 83 }}>Volver</Button>
            </Link>
            <Theories />
          </React.Fragment>
        } />
        <Route path="codes" element={
          <React.Fragment>
            <Link to="/subjects/complejidad" style={{ color: 'white', textDecoration: 'none' }}>
              <Button variant="outlined" style={{ position: 'absolute', left: 20, top: 83 }}>Volver</Button>
            </Link>
            <Codes />
          </React.Fragment>
        } />
      </Routes>
    </div>

  );
}

export default Complejidad;


{/* <div style={{marginTop: 10, marginBottom: 20 }}>
{
  (selectedOption == '0') ? (
    <div>
      <Button variant="outlined" style={{marginRight: 10}} onClick={selectTheories}>Teoría</Button>
      <Button variant="outlined" onClick={selectCodes}>Códigos</Button>
    </div>
  ) : (selectedOption == '1') ? (
    <div>
      <Button variant="outlined" onClick={selectNothing}>Volver</Button>
      <Theories></Theories>
    </div>
  ) : (
    <div>
      <Button variant="outlined" onClick={selectNothing}>Volver</Button>
      <Codes></Codes>
    </div>
  )
}
</div> */}