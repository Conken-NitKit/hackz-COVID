import React from 'react'
import styled from 'styled-components'
import Markdown from '../../components/editor';
import COLOR from '../../styles/color';

const  MinutePage = (props) => {
    const writter = "クボ太郎"
    const keywords = ["高専生","高専生","高専生","高専生","高専生","高専生","高専生"];
    return (
        <Wrapper mode={props.mode} >
            <Minute mode={props.mode}>
                <MinuteHeader>
                    <Title mode={props.mode}>Hackz-COVID</Title>
                    <Detail mode={props.mode}>
                        <Writter mode={props.mode}>製作者: {writter}</Writter>
                    </Detail>
                </MinuteHeader>
                <MarkdownWrapper mode={props.mode}>
                    <Markdown mode={props.mode} view={"HALF"}/>
                </MarkdownWrapper>
            </Minute>
            <KeywordList mode={props.mode}>
                <Typography mode={props.mode}>重要だと思われる<br/>キーワード</Typography>
                {keywords.map((keyword,i) => <Keyword mode={props.mode}>{i+1}. {keyword}</Keyword>)}
                <KeywordButton mode={props.mode}>さらに詳しく</KeywordButton>
            </KeywordList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

const Minute = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 85%;
    height: 100%;
`;

const MinuteHeader = styled.div`
    height: 14%;
`;

const Title = styled.h1`
    color: ${(props) => COLOR.ACCENT[props.mode]};
    font-size: 2em;
    font-weight: bold;
    margin: 3%;
    margin-bottom: 0.8%;
`

const Detail = styled.div`
    width: 93%;
    margin: 0 3%;
`

const Writter = styled.p`
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 1.2em;
    margin: 0;
`

const MarkdownWrapper = styled.div`
    height: 70%;
    width: 92%;
    margin: 1% 3%;
`

const KeywordList = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 10%;
    margin: 3% 1%;
    padding: 0 1%;
    padding-bottom: 1%;
    border-radius: 1em;
    background: ${(props)=>COLOR.VIEWER.BACKGROUND[props.mode]};
    border: 2px solid ${(props)=>COLOR.BORDER[props.mode]};
`;

const Typography = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 1em;
    font-weight: bold;
    text-align: center;
`

const Keyword = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 0.9em;
    font-weight: bold;
`
const KeywordButton = styled.button`
    font-size: 1em;
    width: 100%;
    padding: 3% 5%;
    margin: 0 auto;
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
export default MinutePage;