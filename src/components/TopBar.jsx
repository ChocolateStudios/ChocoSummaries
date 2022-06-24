import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            ChocoSummaries
                        </Typography>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            <Button color="inherit">Inicio</Button>
                        </Link>
                        <Button color="inherit" href='https://drchocolate-tutorials.web.app/' target='_blank' rel="noopener">Tutoriales</Button>
                    </Toolbar>
                </AppBar>
                <Offset />
            </ThemeProvider>
        </Box>
    );
}

export default TopBar;