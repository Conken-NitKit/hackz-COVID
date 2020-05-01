import React, {useState, createContext} from 'react'
import styled from 'styled-components'
import COLOR from './styles/color'
import Home from './pages/Home'
import MeetingList from './containers/MeetingList'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: ${(props) => COLOR.BACKGROUND[props.mode]};
`

export const AuthContext = createContext([
    '',
    () => {},
])


const App = () => {
    const [userId, setUserId] = useState('')
    const [mode, setMode] = useState('LIGHTMODE') // LIGHTMODE or DARKMODE
    const switchMode = () => {
        setMode(mode === 'DARKMODE' ? 'LIGHTMODE' : 'DARKMODE')
    }

    return (
        <AuthContext.Provider value={[userId, setUserId]}>
            <Container mode={mode}>
                {userId === '' ?
                    <Home mode={mode} switchMode={switchMode}/> :
                    <MeetingList mode={mode} switchMode={switchMode}/>
                }
            </Container>
        </AuthContext.Provider>
    )
}

export default App
