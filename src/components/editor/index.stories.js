import React from 'react';
import Editor from './index';

export default {
  title: 'Editor',
  component: Editor,
};
export const DarkEditor1 = () => <Editor mode="DARKMODE" view="VIEW"/>
export const DarkEditor2 = () => <Editor mode="DARKMODE" view="HALF"/>
export const DarkEditor3 = () => <Editor mode="DARKMODE" view="EDIT"/>
export const LightEditor1 = () => <Editor mode="LIGHTMODE" view="VIEW"/>
export const LightEditor2 = () => <Editor mode="LIGHTMODE" view="HALF"/>
export const LightEditor3 = () => <Editor mode="LIGHTMODE" view="EDIT"/>