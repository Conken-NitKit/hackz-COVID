import React, {useState} from 'react'
import styled from 'styled-components'
import { FaPen, FaEye } from 'react-icons/fa'
import { BsSquareHalf } from 'react-icons/bs'
import { RiMarkPenLine } from 'react-icons/ri'

import Markdown from '../../components/Editor';
import COLOR from '../../styles/color';

const  MinutePage = (props) => {
    const {writter, MinuteData, loginUser} = props;
    console.log(props)
    const [viewMode,setViewMode] = useState(writter === loginUser ? "HALF" : 'VIEW')
    const [highlight,setHighlight] = useState(true)
    const keywords = ["高専生","高専生","高専生","高専生","高専生","高専生","高専生"];
    return (
        <Wrapper mode={props.mode} >
            <Minute mode={props.mode}>
                <MinuteHeader>
                    <Title mode={props.mode}>{MinuteData.title}</Title>
                    <Detail mode={props.mode}>
                        <Writter mode={props.mode}>製作者: {MinuteData.editor}</Writter>
                        <ButtonGroup mode={props.mode}>
                        {writter === loginUser && (
                            <>
                                <EditMode mode={props.mode} view={viewMode} onClick={()=>setViewMode("EDIT")}>
                                    <FaPen color={viewMode!=="EDIT"?"black":COLOR.TEXT[props.mode]}/>
                                </EditMode>
                                <HalfMode mode={props.mode} view={viewMode} onClick={()=>setViewMode("HALF")}>
                                    <BsSquareHalf color={viewMode!=="HALF"?"black":COLOR.TEXT[props.mode]}/>
                                </HalfMode>
                                <ViewMode mode={props.mode} view={viewMode} onClick={()=>setViewMode("VIEW")}>
                                    <FaEye color={viewMode!=="VIEW"?"black":COLOR.TEXT[props.mode]}/>
                                </ViewMode>
                            </>
                        )}
                        <HighlightButton mode={props.mode} highlight={highlight} onClick={()=>setHighlight(!highlight)}>
                            <RiMarkPenLine color={highlight?COLOR.TEXT[props.mode]:"black"}/>
                        </HighlightButton>
                        </ButtonGroup>
                    </Detail>
                </MinuteHeader>
                <MarkdownWrapper mode={props.mode}>
                    <Markdown mode={props.mode} view={viewMode} highlight={highlight} markdown={MinuteData.markdown}/>
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
    height: 90vh;
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
`;

const Detail = styled.div`
    position: relative;
    width: 93%;
    height: 30px;
`;

const Writter = styled.p`
    position: absolute;
    left: 3%;
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 1.2em;
    margin: 0;
`;

const ButtonGroup = styled.div`
    position: absolute;
    height: 30px;
    right: 0;
`;

const ViewMode = styled.button`
    display: inline-block;
    height: 30px;
    width: 30px;
    outline: none;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0.5px solid ${(props)=>COLOR.BORDER[props.mode]};
    background: ${(props)=>props.view==="VIEW"?COLOR.ACCENT[props.mode]:"white"};
`;

const HalfMode = styled.button`
    display: inline-block;
    height: 30px;
    width: 30px;
    outline: none;
    cursor: pointer;
    background: white;
    border-top: 0.5px solid ${(props)=>COLOR.BORDER[props.mode]};
    border-bottom: 0.5px solid ${(props)=>COLOR.BORDER[props.mode]};
    background: ${(props)=>props.view==="HALF"?COLOR.ACCENT[props.mode]:"white"};
`;

const EditMode = styled.button`
    display: inline-block;
    height: 30px;
    width: 30px;
    outline: none;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 0.5px solid ${(props)=>COLOR.BORDER[props.mode]};
    background: ${(props)=>props.view==="EDIT"?COLOR.ACCENT[props.mode]:"white"};
`;

const HighlightButton = styled.button`
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-left: 30px;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    border: 0.5px solid ${(props)=>COLOR.BORDER[props.mode]};
    background: ${(props)=>props.highlight?COLOR.ACCENT[props.mode]:"white"};
`;


const MarkdownWrapper = styled.div`
    height: 70%;
    width: 92%;
    margin: 1% 3%;
`;

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
`;

const Keyword = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 0.9em;
    font-weight: bold;
`;

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