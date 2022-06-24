import Button from '@mui/material/Button'
import { Link } from "react-router-dom";

function BackButton(props) {
    return (
        <Link to={props.to} style={{ color: 'white', textDecoration: 'none' }}>
            <Button variant="outlined" style={{ position: 'fixed', left: 20, top: 83 }}>Volver</Button>
        </Link>
    );
}

export default BackButton;