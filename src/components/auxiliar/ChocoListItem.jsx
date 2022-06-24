import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function ChocoListItem(props) {

    let content = props.content;
    let scrolling = false;
    const [open, setOpen] = React.useState(false);
    const buttonWidth = (props.content.text.length * 9.5) + 20;
    const lftMargin = (content.list) ? (props.marginLft - 2) : (props.marginLft);
    const nextMargin = props.marginLft + 4;

    // open = props.expanded;

    const OpenClose = () => {
        if (scrolling) {
            scrolling = false;
        }
        else {
            if (!content.list) {
                if (content.link) {
                    var element = document.getElementById(content.link);
                    if (element) {
                        document.getElementById(content.link).scrollIntoView();
                    }
                }
            }
            else {
                setOpen(!open);
            }
        }
    }

    const handleClick = () => {
        if (content.link) {
            var element = document.getElementById(content.link);
            if (element) {
                document.getElementById(content.link).scrollIntoView();
            }
        }
        scrolling = true;
    };

    return (
        <React.Fragment>
            <ListItemButton onClick={OpenClose} sx={{ borderRadius: 1, pl: lftMargin }}>
                {(content.list) ? (
                    <React.Fragment>
                        <ListItemButton onClick={handleClick} sx={{ borderRadius: 1, maxWidth: buttonWidth }}>
                            <ListItemText primary={content.text} />
                        </ListItemButton>
                        <ListItemText />
                    </React.Fragment>
                ) : (
                    <ListItemText primary={content.text} />
                )}
                {(content.list) ? (open ? <ExpandLess /> : <ExpandMore />) : ('')}
            </ListItemButton>
            {(content.list) ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {(content.list.map(function (newContent, i) {
                            return (
                                <ChocoListItem marginLft={nextMargin} expanded={props.expanded} content={newContent} key={i}/>
                            );
                        }))}
                    </List>
                </Collapse>
            ) : ('')}
        </React.Fragment>
    );
}

export default ChocoListItem;