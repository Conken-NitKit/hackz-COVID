import React from 'react';
import Editor from './index';

export default {
  title: 'Editor',
  component: Editor,
};
export const DarkEditor = () => <Editor mode="DARKMODE"/>
export const LightEditor = () => <Editor mode="LIGHTMODE"/>