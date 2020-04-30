import React, {useState} from 'react'
import styled from 'styled-components'
import COLOR from '../../styles/color'

const AuthCard = ({mode, isSignIn, handleAuthShow}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUseName] = useState('')

    const handleUserNameChange = (e) => {
        setUseName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        if (isSignIn) {
            // サインアップ処理

            // 画面遷移
        } else {
            // ログイン処理
            // 画面遷移
        }
    }

    return (
        <AuthContainer mode={mode} isSignIn={isSignIn}>
            {(!isSignIn) && (
                <InputContainer mode={mode}>
                    <label htmlFor="input-username">UserName</label>
                    <Input type="text" id='input-username' onChange={handleUserNameChange}/>
                </InputContainer>
            )}
            <InputContainer mode={mode}>
                <label htmlFor="input-email">Email</label>
                <Input type="email" id='input-email' onChange={handleEmailChange}/>
            </InputContainer>
            <InputContainer mode={mode}>
                <label htmlFor="input-password">Password</label>
                <Input type="password" id='input-password' onChange={handlePasswordChange}/>
            </InputContainer>
            <CancelButton onClick={handleAuthShow} mode={mode}>
                キャンセル
            </CancelButton>
            <SubmitButton onClick={handleSubmit} mode={mode}>
                {isSignIn ? 'サインイン' : 'サインアップ'}
            </SubmitButton>
        </AuthContainer>
    )
}

const AuthContainer = styled.form`
    position: relative;
    padding: 3em;
    height: ${(props) => props.isSignIn ? '300px' : '400px'};
    width: 400px;
    background-color: ${(props) => COLOR.BACKGROUND[props.mode]};
    position: absolute;
    top: 50vh;
    left: 50vw;
    margin-left: -200px;
    margin-top: -200px;
    z-index: 3;
`

const InputContainer = styled.div`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 1.5em;
    margin-top: 1em;
`

const Input = styled.input`
    width: 100%;
    padding: 1em 0;
`

const SubmitButton = styled.div`
    padding: .5em 2em;
    border-radius: 4px;
    width: 100px;
    background-color: ${(props) => COLOR.ACCENT[props.mode]};
    text-align: center;
    color: #fff;
    position: absolute;
    bottom: 2em;
    right: 2em;
`

const CancelButton = styled.div`
    padding: .5em 2em;
    border-radius: 4px;
    width: 100px;
    text-align: center;
    color: ${(props) => COLOR.TEXT[props.mode]};
    border: 1px solid ${(props) => COLOR.BORDER[props.mode]};
    background-color: ${(props) => COLOR.BACKGROUND[props.mode]};
    position: absolute;
    bottom: 2em;
    right: 15em;
`

export default AuthCard