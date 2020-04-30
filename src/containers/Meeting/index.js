import React, {useState} from 'react'
import styled from 'styled-components'
import { MdBook, MdSettings } from  'react-icons/md'
import { FaUser } from 'react-icons/fa'

import MinuteCard from '../../components/MinuteCard'
import UserCard from '../../components/UserCard'
import COLOR from '../../styles/color'

const Meeting = (props) => {
    const [screen,setScreen] = useState("MINUTE");

    //以下仮データ(要らなくなったら消してください)
    props.data.title="Re:actから(ry";
    props.data.owner={
        name:"me",
        ref: "/Users/JDHYxfvgvYEvgyeQUXV"
    }
    props.data.members=[
        {
            name:"you",
            ref: "/Users/VUNhdaBKUXNBIKSJHn"
        }
    ];
    props.data.discription="";
    props.data.records= [
        {
            editor:"me",
            lastEditDate: "2020年4月28日 0:00:00 UTC+9",
            markdown: "内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です"
        },
        {
            editor:"you",
            lastEditDate: "2020年4月28日 0:00:00 UTC+9",
            markdown: "内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です"
        }
    ];
    props.data.keywords=["内容","です"];
    //ここまで仮データ

    return (
        <React.Fragment>
            <Title mode={props.mode}>{props.data.title}</Title>
            <Owner mode={props.mode}>作成者: {props.data.owner.name}</Owner>
            <Discription mode={props.mode}>{props.data.discription}</Discription>
            <Menu mode={props.mode}>
                <MenuItem mode={props.mode} isSelected={screen === "MINUTE"} onClick={()=>{setScreen("MINUTE")}}>
                    <MdBook />  議事録
                </MenuItem>
                <MenuItem mode={props.mode} isSelected={screen === "USERS"} onClick={()=>{setScreen("USERS")}}>
                    <FaUser />  参加者
                </MenuItem>
                <MenuItem mode={props.mode} isSelected={screen === "SETTING"} onClick={()=>{setScreen("SETTING")}}>
                    <MdSettings />  設定
                </MenuItem>
            </Menu>
            <div>
                <MinuteList>
                    {screen === "MINUTE" && Object.keys(props.data.records).map(
                        key => <MinuteCard mode={props.mode} data={props.data.records[key]}/>
                    )}
                    {screen === "USERS" && <UserCard mode={props.mode} name={props.data.owner.name} role={"管理者"} isAdmin={false}/>}
                    {screen === "USERS" && props.data.members.map(
                        member => <UserCard mode={props.mode} name={member.name} role={"参加者"} isAdmin={props.data.owner.name === "me"}/>
                    )}
                </MinuteList>
                <RightItems>
                    <CreateButton mode={props.mode}>{(props.data.owner.name === "me" ? "自分の議事録を開く" : "新規作成") /*必要に応じて"me"は変更してください */}</CreateButton>
                    <KeywordList mode={props.mode}>
                        <Typography mode={props.mode}>重要だと思われるキーワード</Typography>
                            {props.data.keywords.map((keyword,i) => <Keyword mode={props.mode}>{i+1}. {keyword}</Keyword>)}
                        <KeywordButton mode={props.mode}>さらに詳しく</KeywordButton>
                    </KeywordList>
                </RightItems>
            </div>
        </React.Fragment>
    );
}
export default Meeting;

const Title = styled.h1`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 2em;
    font-weight: bold;
    padding: 3%;
    padding-bottom: 0;
    margin: 0;
`;

const Owner = styled.p`
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 1em;
    margin: 1%;
    margin-left: 4%;
`;

const Discription = styled.p`
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 1em;
    margin: 1% 4%;
    white-space: pre;
`;

const Menu = styled.div`
    margin: 1% 3%;
    padding: 1% 2%;
    border-bottom: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
`;

const MenuItem = styled.div`
    cursor: pointer;
    display: inline-block;
    margin-right: 3%;
    font-size: 1.2em;
    font-weight: ${(props) => props.isSelected?"bold":"normal"};
    color: ${(props) => COLOR[props.isSelected?"TEXT":"SUBTEXT"][props.mode]};
`;

const MinuteList = styled.div`
    display: inline-block;
    width: 75%;
`;

const RightItems = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 20%;
`;

const CreateButton = styled.button`
    font-size: 1.2em;
    width: 100%;
    padding: 3% 5%;
    margin: 2% auto;
    border: 0.3px solid ${(props)=>COLOR.ACCENT[props.mode]};
    outline: none;
    font-weight: bold;
    border-radius: 7px;
    color: ${(props) => COLOR.TEXT[props.mode]};
    background: ${(props) => COLOR.BUTTON[props.mode]};
    cursor: pointer;
    &:active {
        transform: translate(0.5px,1px);
        transition: 0.1s;
    }
`;

const KeywordList = styled.div`
    width: 80%;
    margin: 3%;
    padding: 0 6%;
    padding-bottom: 3%;
    border-radius: 1em;
    background: ${(props)=>COLOR.VIEWER.BACKGROUND[props.mode]};
    border: 2px solid ${(props)=>COLOR.BORDER[props.mode]};
`;

const Typography = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    padding-bottom: 3%;
`;

const Keyword = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 0.9em;
    font-weight: bold;
`;

const KeywordButton = styled.button`
    font-size: 1em;
    width: 100%;
    padding: 3% 0;
    margin: 3% auto;
    border: 0.3px solid ${(props)=>COLOR.ACCENT[props.mode]};
    outline: none;
    font-weight: bold;
    border-radius: 7px;
    color: ${(props) => COLOR.TEXT[props.mode]};
    background: ${(props) => COLOR.BUTTON[props.mode]};
    cursor: pointer;
    &:active {
        transform: translate(0.5px,1px);
        transition: 0.1s;
    }
`;