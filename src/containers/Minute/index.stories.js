import React from 'react';
import Minute from './index';
import styled from 'styled-components';

export default {
  title: 'Minute',
  component: Minute,
};

const StoryWrapper = styled.div`
  height: 90vh;
  width: 90vw;
`;

export const DarkEditor = () => <StoryWrapper><Minute mode="DARKMODE" /></StoryWrapper>
export const LightEditor = () => <StoryWrapper><Minute mode="LIGHTMODE" /></StoryWrapper>