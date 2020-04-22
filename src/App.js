import React, {useState} from 'react';
import styled from 'styled-components';
import COLOR from './assets/color';
import './App.css';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

const App = () => {
  const [mode,setMode] = useState("DARKMODE") // LIGHTMODE or DARKMODE
  const switchMode = () => {
    setMode(mode == "DARKMODE" ? "LIGHTMODE" : "DARKMODE")
  }
  return (
    <Container mode={mode}/>
  );
}

export default App;
