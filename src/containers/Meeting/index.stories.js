import React from 'react';
import Meeting from './index';
import COLOR from '../../styles/color'
import styled from 'styled-components';

export default {
  title: 'Meeting',
  component: Meeting,
};

const StoryWrapper = styled.div`
  height: 90vh;
  width: 90vw;
  background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

const data = {
    title: 'Hackzハッカソンミーティング',
    discription: '詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳\n細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細',
    black_list: ['キーワード2'],
    keywords: ['キーワード1', 'キーワード2'],
    owner: {
        id: 'USER_ID_NIBA',
        name: 'にば'
    },
    members: [{
        id: 'USER_ID_FUKKE',
        name: 'ふっけ'
    }],
    records: {
        USER_ID_NIBA: {
            title: "Hackzハッカソン議事録1",
            editor: "にば",
            lastEditDate: "2019-04-01T03:15:45.000Z",
            markdown: "内容です"
        },
        USER_ID_FUKKE: {
            title: "Hackzハッカソン議事録2",
            editor: "ふっけ",
            lastEditDate: "2019-04-01T03:15:45.000Z",
            markdown: "内容です"
        }
    }
}


export const DarkMeeting = () => <StoryWrapper mode="DARKMODE"><Meeting mode="DARKMODE" data={data}/></StoryWrapper>
export const LightMeeting = () => <StoryWrapper mode="LIGHTMODE"><Meeting mode="LIGHTMODE" data={data}/></StoryWrapper>