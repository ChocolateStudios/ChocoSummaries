import { Paper } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Redes from "./redes/Redes";
import Complejidad from "./complejidad/Complejidad";
import Estadistica from "./estadistica/Estadistica";
import "./Subjects.css";
import BackButton from "../auxiliar/BackButton";

function Subjects() {

    return (
        <div className="content-container">
            <Paper elevation={3}>
                <div className="subject-container">
                    <BackButton to="/" />
                    <Routes>
                        <Route path="redes/*" element={<Redes />} />
                        <Route path="complejidad/*" element={<Complejidad />} />
                        <Route path="estadistica/*" element={<Estadistica />} />
                    </Routes>
                </div>
            </Paper>
        </div>
    );
}

export default Subjects;


        // <div className="subject-container">
        //     <Paper elevation={3}>
        //         <Button variant="outlined" onClick={selectNothing} style={{ position: 'absolute', left: 20, top: 83 }}>Volver</Button>
        //         {(props.subject === 'redes') ? (
        //             <Redes />
        //         ) : (props.subject === 'complejidad') ? (
        //             <Complejidad />
        //         ) : (props.subject === 'estadistica') ? (
        //             <Estadistica />
        //         ) : (
        //             ''
        //         )}
        //     </Paper>
        // </div>
