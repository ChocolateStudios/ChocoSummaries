import React from "react";
import { Button } from "@mui/material";
import copyTextToClipboard from "./copy-functions.js";

function CopyCodeBtn() {
    const copyTextContainer = (e) => {
        const textToCopy = e.target.parentElement.children[0].outerText;
        copyTextToClipboard(textToCopy);
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={copyTextContainer}>Copiar</Button>
        </React.Fragment>
    );
}

export default CopyCodeBtn;