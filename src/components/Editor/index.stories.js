import React from 'react';
import Editor from './index';
import styled from 'styled-components';

export default {
  title: 'Editor',
  component: Editor,
};

const StoryWrapper = styled.div`
  height: 90vh;
  width: 90vw;
`;

export const DarkEditor1 = () => <StoryWrapper><Editor mode="DARKMODE" view="VIEW"/></StoryWrapper>
export const DarkEditor2 = () => <StoryWrapper><Editor mode="DARKMODE" view="HALF"/></StoryWrapper>
export const DarkEditor3 = () => <StoryWrapper><Editor mode="DARKMODE" view="EDIT"/></StoryWrapper>
export const LightEditor1 = () => <StoryWrapper><Editor mode="LIGHTMODE" view="VIEW"/></StoryWrapper>
export const LightEditor2 = () => <StoryWrapper><Editor mode="LIGHTMODE" view="HALF"/></StoryWrapper>
export const LightEditor3 = () => <StoryWrapper><Editor mode="LIGHTMODE" view="EDIT"/></StoryWrapper>