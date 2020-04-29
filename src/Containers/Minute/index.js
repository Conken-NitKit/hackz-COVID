import React from 'react'
import styled from 'styled-components'
import COLOR from '../../styles/color';

const  MinutePage = (props) => {
    const keywords = ["高専生","高専生","高専生","高専生","高専生","高専生","高専生"];
    return (
        <Wrapper mode={props.mode} >
            <Minute mode={props.mode} />
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

const KeywordList = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 10%;
    padding: 0 1%;
    padding-bottom: 1%;
    margin: 1%;
    border-radius: 1em;
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
    border: none;
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