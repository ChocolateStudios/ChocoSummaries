import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Index from "./Index";
import DefinicionesBasicas2 from "../images/definiciones_basicas_2.PNG";
import Section1_DefinicionesBasicas from "./Section1_DefinicionesBasicas";
import Section8_VariablesAleatoriasDiscretas from "./Section8_VariablesAleatoriasDiscretas";

function Theories() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <React.Fragment>
                        <Index />
                        <Section1_DefinicionesBasicas />
                        <Section8_VariablesAleatoriasDiscretas />
                    </React.Fragment>
                }
                />
                <Route path="infografia" element={
                    <React.Fragment>
                        <Link to="/subjects/estadistica/teoria" style={{ color: 'white', textDecoration: 'none' }}>
                            <Button variant="outlined" style={{ position: 'absolute', left: 20, top: 83 }}>Volver</Button>
                        </Link>
                        <img src={DefinicionesBasicas2} />
                    </React.Fragment>
                }
                />
            </Routes>
        </div>
    );
}

export default Theories;