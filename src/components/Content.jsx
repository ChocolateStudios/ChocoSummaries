import Subjects from './subjects/Subjects';
import Paper from '@mui/material/Paper';
import "./Content.css"

function Content(props) {
  return (
    <div className='content-container'>
        <Paper elevation={3}>
            <Subjects selectedOption={props.selectedOption} selectNothing={props.selectNothing} selectRedes={props.selectRedes}></Subjects>
        </Paper>
    </div>
  );
}

export default Content;