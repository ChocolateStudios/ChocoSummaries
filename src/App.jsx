import React from "react";
import Content from "./components/Content";
import TopBar from "./components/TopBar";

function App() {
  const [selectedOption, setSelectedOption] = React.useState('0');
  
  const selectNothing = () => { setSelectedOption('0'); };
  const selectRedes = () => { setSelectedOption('1'); };

  return (
    <div>
      <TopBar selectNothing={selectNothing}></TopBar>
      <Content selectedOption={selectedOption} selectNothing={selectNothing} selectRedes={selectRedes}></Content>
    </div>
  );
}

export default App;
