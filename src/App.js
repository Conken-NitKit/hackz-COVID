import React, {useState} from 'react';
import styled from 'styled-components';
import COLOR from './styles/color';
import Home from './pages/Home'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

const App = () => {
  const [mode,setMode] = useState("LIGHTMODE") // LIGHTMODE or DARKMODE
  const switchMode = () => {
    setMode(mode === "DARKMODE" ? "LIGHTMODE" : "DARKMODE")
  }
  return (
    <Container>
      <Home mode={mode} switchMode={switchMode} />
    </Container>
  );
}

export default App;
