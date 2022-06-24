import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Link, useLocation } from "react-router-dom";

function TabButton(props) {
    const location = useLocation()

    const [btnVariant, setBtnVariant] = useState(location.pathname.includes(props.to) ? 'contained' : 'outlined');

    React.useEffect(() => {
        setBtnVariant(location.pathname.includes(props.to) ? 'contained' : 'outlined');
    }, [location])

    return (
        <Link to={props.to} style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
            <Button variant={ btnVariant } style={{ marginRight: 10, width: '100%' }}>{props.text}</Button>
        </Link>
    );
}

export default TabButton;