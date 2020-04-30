import React from 'react';
import UserCard from './index';
import COLOR from '../../styles/color'
import styled from 'styled-components';

export default {
  title: 'UserCard',
  component: UserCard,
};

const StoryWrapper = styled.div`
  height: 90vh;
  width: 90vw;
  padding: 1%;
  background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

export const DarkUser = () => <StoryWrapper mode="DARKMODE"><UserCard mode="DARKMODE" name={"にっば"} role={"管理者"} isAdmin={false}/></StoryWrapper>
export const LightUser = () => <StoryWrapper mode="LIGHTMODE"><UserCard mode="LIGHTMODE" name={"ふけー"} role={"メンバー"} isAdmin={true}/></StoryWrapper>