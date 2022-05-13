import React from 'react';
import Button from '@mui/material/Button'
import Class from './class/codes/Class'
import Labs from './labs/codes/Labs';

function Redes() {
  const [selectedOption, setSelectedOption] = React.useState('0');
  const selectTeoria = () => { setSelectedOption('1'); };
  const selectLab = () => { setSelectedOption('2'); };
  const selectNothing = () => { setSelectedOption('0'); };

  return (
    <div style={{marginTop: 10, marginBottom: 20 }}>
      {
        (selectedOption == '0') ? (
          <div>
            <Button variant="outlined" style={{marginRight: 10}} onClick={selectTeoria}>Teoría</Button>
            <Button variant="outlined" onClick={selectLab}>Labs</Button>
          </div>
        ) : (selectedOption == '1') ? (
          <div>
            <Button variant="outlined" onClick={selectNothing}>Volver</Button>
            <Class></Class>
          </div>
        ) : (
          <div>
            <Button variant="outlined" onClick={selectNothing}>Volver</Button>
            <Labs></Labs>
          </div>
        )
      }
    </div>
  );
}

export default Redes;