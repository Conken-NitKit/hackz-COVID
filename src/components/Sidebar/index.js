import React, {useState} from 'react';
import styled from 'styled-components';
import COLOR from '../../styles/color';

import {IoMdAddCircle, IoMdSettings} from 'react-icons/io';
import {GiDiscussion} from 'react-icons/gi';

//############################################################
//コンポーネント
//############################################################

//サイドバー全体
const Container = styled.div`
    position: absolute;
    width: 10%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: #3B3A3A;
    mix-blend-mode: normal;
`;

//サイドバーの項目1つ1つ
const Item = styled.div`
    position: relative;
    width: 100%;
    height: 175px;

    background: ${(props)=>(props.selected ? COLOR.MAIN[props.mode] : "#3B3A3A")};
`;

//アイテムが選択されたときに表示される横の白いやつ
const SelectedMark = styled.div`
    position: absolute;
    width: 10px;
    height: 100%;

    background: #FFFFFF;
`;

//アイコンの位置取り用(この中にアイコンを入れる)
const Icon = styled.div`
    width: 75px;
    height: 75px;
    margin: auto;
    padding: 15px;
`;

//テキスト
const Text = styled.div`
    user-select:none;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 19px;
    text-align: center;
    padding: 6px;

    color: #FFFFFF;
`;

//############################################################
//メインメソッド
//############################################################

const SideBar = (props) => {
    /*
        サイドバーの各アイテムに割り当てたNo.とリンク先
        0:ミーティング新規作成 
        1:ミーティングリスト 
        2:設定
    */

    const {mode} = props; // モード(LIGHTMODE or DARKMODE)
    const[selectedState,setSelectedState]=useState([true,false,false]); //各アイテムがそれぞれ選択されているか(配列)

    //各アイテムがクリックされたときに呼び出されるイベント
    const itemOnClick = (selectedItemNo) => { 
        var selectedStateTmp=[];

        //選択されたアイテムNo.による分岐
        switch(selectedItemNo){
            case 0:
                alert("新規作成 got selected");
                break;

            case 1:
                alert("リスト got selected");
                break;

            case 2:
                alert("設定 got selected");
                break;
        }

        for(let i=0;i<selectedState.length;i++)selectedStateTmp[i]=(i===selectedItemNo);//各アイテムが選択されているか否かを配列に格納
        setSelectedState(selectedStateTmp);
    }

    return (
        <Container>
            <Item mode={mode} selected={selectedState[0]} onClick={()=>itemOnClick(0)}>
                <SelectedMark hidden={!selectedState[0]}/>
                <Icon>
                    <IoMdAddCircle size={75} color={"white"}/>
                </Icon>
                <Text>ミーティング</Text>
                <Text>新規作成</Text>
            </Item>

            <Item mode={mode} selected={selectedState[1]} onClick={()=>itemOnClick(1)}>
                <SelectedMark hidden={!selectedState[1]}/>
                <Icon>
                    <GiDiscussion size={75} color={"white"}/>
                </Icon>
                <Text>ミーティング</Text>
                <Text>リスト</Text>
            </Item>

            <Item mode={mode} selected={selectedState[2]} onClick={()=>itemOnClick(2)}>
                <SelectedMark hidden={!selectedState[2]}/>
                <Icon>
                    <IoMdSettings size={75} color={"white"}/>
                </Icon>
                <Text>設定</Text>
            </Item>
        </Container>
    );
}
export default SideBar;