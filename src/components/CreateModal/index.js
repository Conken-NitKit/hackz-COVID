import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import COLOR from '../../styles/color';
import {AuthContext} from '../../App'

//############################################################
//  コンポーネント
//############################################################

//背景
const BackGround = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.6);
`;

//メイン コンポーネント(この中に項目を入れる)
const Main = styled.div`
    position: absolute;
    width: 900px;
    height: 750px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: ${(props)=>COLOR.BACKGROUND[props.mode]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

//タイトル
const Title = styled.div`
    width: 395px;
    height: 70px;
    margin: 36px 55px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    display: flex;
    align-items: center;

    color: ${(props)=>COLOR.TEXT[props.mode]};
`;

//項目ごとのコンテナ
const Container = styled.div`
    width: 798px;
    margin-left: 55px;
    margin-bottom: 35px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
`;

//参加者の追加用コンテナ
const Participants = styled.div`
    display: inline-flex;
    width: 100%;
    height: 60px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;

    background: ${(props)=>COLOR.EDITOR.BACKGROUND[props.mode]};
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
`;

//テキスト
const Text = styled.div`
    height: 31px;
    margin-bottom: 13px;

    font-size: 24px;
    line-height: 28px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
`;

//テキストフィールド
const TextField = styled.input`
    width: 100%;
    height: 60px;

    font-size: 22px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
    background: ${(props)=>COLOR.EDITOR.BACKGROUND[props.mode]};
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    box-sizing: border-box;
`;

//テキストエリア
const TextArea = styled.textarea`
    width: 100%;
    height: 149px;

    font-size: 22px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
    background: ${(props)=>COLOR.EDITOR.BACKGROUND[props.mode]};
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    box-sizing: border-box;
`;

//参加者の追加用テキストフィールド
//(プログラム内からのみ変更可能、ここに参加者のデータが入る)
const ParticipantsTextField = styled.input`
    width: 100%;
    height: 58px;

    font-size: 22px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
    background: ${(props)=>COLOR.EDITOR.BACKGROUND[props.mode]};
    border: none;
`;

//参加者の追加用ボタン
const ParticipantsButton = styled.button`
    width: 90px;
    height: 45px;
    margin: 7px;

    font-size: 22px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
    background: ${(props)=>COLOR.BUTTON[props.mode]};
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    border-radius: 5%;
`;

//キャンセルボタン
const CancelButton = styled.button`
    float: right;
    width: 140px;
    height: 45px;

    font-size: 22px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
    background: ${(props)=>COLOR.BACKGROUND[props.mode]};
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    border-radius: 5%;
`;

//決定ボタン
const SubmitButton = styled.button`
    float: right;
    width: 140px;
    height: 45px;
    margin-left: 15px;

    font-size: 22px;

    color: ${(props)=>COLOR.TEXT[props.mode]};
    background: ${(props)=>COLOR.BUTTON[props.mode]};
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    border-radius: 5%;
`;


//############################################################
//  メインメソッド
//############################################################
const CreateModal = (props) => {
    const [data, setData] = useState({})
    const {mode, setModalShow, handleNewMeeting} = props; // モード(LIGHTMODE or DARKMODE)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [userId, setUserId] = useContext(AuthContext)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    return(
    <BackGround>
        <Main mode={mode}>
            <Title mode={mode}>新規ミーティング作成</Title>

            <Container>
                <Text mode={mode}>ミーティング名</Text>
                <TextField mode={mode} onChange={handleTitle}/>
            </Container>

            <Container>
                <Text mode={mode}>説明(オプション)</Text>
                <TextArea mode={mode} onChange={handleDescription}/>
            </Container>

            <Container>
                <Text mode={mode}>参加者の追加</Text>
                <Participants mode={mode}>
                    <ParticipantsTextField mode={mode} readOnly/>
                    <ParticipantsButton mode={mode}>追加</ParticipantsButton>
                </Participants>
            </Container>

            <Container>
                <SubmitButton mode={mode} onClick={() => {
                    handleNewMeeting({
                        title: title,
                        description: description,
                        'owner_id': userId,
                    })
                    setModalShow(false)
                }}>新規作成</SubmitButton>
                <CancelButton mode={mode} onClick={() => setModalShow(false)}>キャンセル</CancelButton>
            </Container>
        </Main>
    </BackGround>
    );
}

export default CreateModal;