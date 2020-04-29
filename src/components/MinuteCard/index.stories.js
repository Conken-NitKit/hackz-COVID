import React from 'react';
import MinuteCard from './index';
import COLOR from '../../styles/color'
import styled from 'styled-components';

export default {
  title: 'MinuteCard',
  component: MinuteCard,
};

const StoryWrapper = styled.div`
  height: 90vh;
  width: 90vw;
  background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

const data = {
    title: "Hackzハッカソン議事録1",
    editor: "にば",
    lastEditDate: "2019-04-01T03:15:45.000Z",
    markdown: "内容です"
}

export const DarkMinute = () => <StoryWrapper mode="DARKMODE"><MinuteCard mode="DARKMODE" data={data}/></StoryWrapper>
export const LightMinute = () => <StoryWrapper mode="LIGHTMODE"><MinuteCard mode="LIGHTMODE" data={data}/></StoryWrapper>