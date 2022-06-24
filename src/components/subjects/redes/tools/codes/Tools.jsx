import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import copyTextToClipboard from '../../../../auxiliar/copy-functions';
import Class from '../../class/codes/Class';
import Labs from '../../labs/codes/Labs';
import TabButton from '../../../../auxiliar/TabButton';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function Tools() {
    let navigate = useNavigate();
    const location = useLocation();

    const onDividerBtnPressed = () => {
        let paths = location.pathname.split('/');
        if (paths[paths.length - 1] == 'tools') {
            navigate(`/subjects/redes/tools/theory`);
        }
        else {
            navigate(`/subjects/redes/tools`);
        }
    }
    const copyTextContainer = (e) => {
        const textToCopy = document.getElementById("tools-textbox").value;
        copyTextToClipboard(textToCopy)
    }

    return (
        <React.Fragment>
            <Fab color="primary" aria-label="add" style={{ position: 'fixed', right: 20, bottom: 20 }} onClick={onDividerBtnPressed}>
                <MenuBookIcon />
            </Fab>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Routes>
                    <Route path="theory" element={
                        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                            <div style={{ width: '34%', position: 'fixed', zIndex: '2' }}>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'white' }}>
                                    <TabButton to="" text="Teoría" />
                                    <TabButton to="/subjects/redes/tools/labs" text="Laboratorios" />
                                </div>
                            </div>
                            <Class />
                        </div>
                    } />
                    <Route path="labs" element={
                        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                            <div style={{ width: '34%', position: 'fixed', zIndex: '2' }}>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'white' }}>
                                    <TabButton to="/subjects/redes/tools/theory" text="Teoría" />
                                    <TabButton to="" text="Laboratorios" />
                                </div>
                            </div>
                            <Labs />
                        </div>
                    } />
                </Routes>
                <div style={{ height: '70vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed' }}>
                        <TextareaAutosize
                            id="tools-textbox"
                            aria-label="empty textarea"
                            placeholder="Ingresar texto"
                            style={{ width: '100%' }}
                        />
                        <Button variant="outlined" onClick={copyTextContainer}>Copiar</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Tools;