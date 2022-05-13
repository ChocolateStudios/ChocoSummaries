import React from 'react';
import Button from '@mui/material/Button'
import Redes from "./redes/Redes";
import "./Subjects.css"

function Subjects(props) {

    return (
        (props.selectedOption == '0') ? (
            <div className='subject-container'>
                <Button variant="outlined" onClick={props.selectRedes} style={{marginTop: 10, marginBottom: 20}}>Redes</Button>
            </div>
        ) : (props.selectedOption == '1') ? (
            <div className='subject-container'>
                <Redes></Redes>
            </div>
        ) : ('')
    );
}

export default Subjects;