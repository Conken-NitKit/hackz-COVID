import React, {useState} from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import slug from 'remark-slug'
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';
import styled from 'styled-components';
import COLOR from '../../styles/color';

const EditorSet = (props) => {
    const [content, setContent] = useState("");
    const { contents } =
        unified()
        .use(markdown)
        .use(slug)
        .use(remark2rehype)
        .use(html)
        .processSync(content)

    const handleChange = (e) => {
        setContent(e.target.value);
        console.log(content);
        console.log(contents);
    }
    return <Wrapper>
        <Editor value={content} onChange={handleChange} />
        <Viewer mode={props.mode} dangerouslySetInnerHTML={{ __html: contents}} />
    </Wrapper>;
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Editor = styled.textarea`
    display: inline-block;
    width: 43%;
    height: 98%;
    margin: 1%;
    resize: none;
    border: none;
    outline: none;
    font: 1.5rem bold;
    background: ${(props)=>COLOR.BACKGROUND[props.mode]};
`;

const Viewer = styled.div`
    display: inline-block;
    width: 45%;
    height: 100%;
    padding: 0.5%;
    overflow: scroll;
    text-align: left;
    background: ${(props)=>COLOR.BACKGROUND[props.mode]};
    color: ${(props)=>COLOR.TEXT[props.mode]};
    & h1,h2,h3,h4,h5 {
        color: ${(props)=>COLOR.ACCENT[props.mode]};
    }
    & strong {
        color: ${(props)=>COLOR.ACCENT[props.mode]};
    }
    & hr {
        height: 1.5px;
        background-color: ${(props)=>COLOR.BORDER[props.mode]};
        border: none;
    }
`;

export default EditorSet;
