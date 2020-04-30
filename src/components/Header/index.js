import React, {useState} from 'react';
import styled from 'styled-components';
import COLOR from '../../styles/color';

//############################################################
//コンポーネント
//############################################################

//ヘッダー全体
const Main = styled.div`
    position:relative;
    width: 100vw;
    height: 9vh;

    background: ${(props) => (props.isHome && props.mode === "LIGHTMODE" ? "#202020" : COLOR.MAIN[props.mode])};
`;

//タイトル 
const Title = styled.div`
    position:absolute;
    width: 150px;
    height: 40px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`;

//############################################################
//メインメソッド
//############################################################
const Header = (props) => {
    const {
        mode, // モード(LIGHTMODE or DARKMODE)
        isHome //ホーム画面が表示されているか否か
    } = props;

    return (
        <Main mode={mode} isHome={isHome}>
            <Title>タイトル</Title>
        </Main>
    );
}

export default Header;