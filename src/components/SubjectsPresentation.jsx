import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import RedesFrontPage from './images/redesFrontPage.jpg'
import ComplejidadFrontPage from './images/complejidadFrontPage.png'
import EstadisticaFrontPage from './images/estadisticaFrontPage.jpg'
import { Link } from "react-router-dom";

const images = [
    {
        image: RedesFrontPage,
        title: 'Redes',
        path: 'subjects/redes'
    },
    // {
    //     image: ComplejidadFrontPage,
    //     title: 'Complejidad',
    //     path: 'subjects/complejidad'
    // },
    // {
    //     image: EstadisticaFrontPage,
    //     title: 'Estadística',
    //     path: 'subjects/estadistica'
    // },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

function SubjectsPresentation() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', flex: 1, justifyContent: 'space-around' }}>
            {images.map((image) => (
                <Link to={image.path} key={image.title} style={{
                    width: `${(100 / images.length) - 2}%`,
                    height: 260
                }}>
                    <ImageButton
                        focusRipple
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    >

                        <ImageSrc style={{ backgroundImage: `url(${image.image})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>

                    </ImageButton>
                </Link>
            ))}
        </Box>
    );
}

export default SubjectsPresentation;