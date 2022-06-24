import React from 'react';
import Class from './class/codes/Class'
import Labs from './labs/codes/Labs';
import Tools from './tools/codes/Tools';
import TabButton from '../../auxiliar/TabButton';
import { Routes, Route, Navigate } from "react-router-dom";

function Redes() {

  return (

    <div>
      <div style={{ width: '75%', height: '50px', position: 'fixed', top: '64px', left: '0', zIndex: '2', margin: '0 12.40%' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'white' }}>
          <TabButton to="theory" text="Teoría" />
          <TabButton to="labs" text="Laboratorios" />
          <TabButton to="tools" text="Herramientas" />
        </div>
      </div>
      <div style={{ margin: '50px 0 20px 0', }}>
        <Routes>
          <Route path="/"       element={ <Navigate to="/subjects/redes/theory" /> } />
          <Route path="theory"  element={ <Class /> } />
          <Route path="labs"    element={ <Labs /> } />
          <Route path="tools/*" element={ <Tools /> } />
        </Routes>
      </div>
    </div>
  );
}

export default Redes;

