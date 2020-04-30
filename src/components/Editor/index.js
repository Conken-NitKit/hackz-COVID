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
    const keywords = ["高校生","高専"];
    const replacer = ( str, word ) => {
        const formatStr = str.replace(/<h1 id="(.*?)">/g,'<h1>')
                             .replace(/<h2 id="(.*?)">/g,'<h2>')
                             .replace(/<h3 id="(.*?)">/g,'<h3>')
                             .replace(/<h4 id="(.*?)">/g,'<h4>')
                             .replace(/<h5 id="(.*?)">/g,'<h5>')
                             .replace(/<h6 id="(.*?)">/g,'<h6>')
        const searchString = '(' + word + ')';
        const regularExp = new RegExp( searchString, "g" );
        const replaceString = '<span style="background-color:#cb2431;color:white;">$1</span>';
        const resString = formatStr.replace( regularExp , replaceString );
        return resString;
    }

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
        console.log(replacer(contents,"高校生"));
    }

    return <Wrapper>
        {props.view !== "VIEW" && <Editor mode={props.mode} view={props.view} value={content} onChange={handleChange} />}
        {props.view !== "EDIT" && <Viewer
            mode={props.mode}
            view={props.view}
            dangerouslySetInnerHTML={{ __html: keywords.reduce((acc,keyword)=>replacer(acc,keyword),contents)}}
        />}
    </Wrapper>;
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Editor = styled.textarea`
    display: inline-block;
    width: ${(props)=>props.view==="EDIT"?95.1:46}%;
    height: 96%;
    resize: none;
    border: none;
    outline: none;
    padding: 1.5%;
    color: ${(props)=>COLOR.SUBTEXT[props.mode]};
    font: 1.3em bold;
    border: 2px solid ${(props)=>COLOR.BORDER[props.mode]};
    background: ${(props)=>COLOR.EDITOR.BACKGROUND[props.mode]};
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;

const Viewer = styled.div`
    display: inline-block;
    width:  ${(props)=>props.view==="VIEW"?95.1:46}%;
    height: 96%;
    overflow: scroll;
    text-align: left;
    padding: 1.5%;
    border: 2px solid ${(props)=>COLOR.BORDER[props.mode]};
    border-left: ${(props)=>props.view==="VIEW"?"2px solid "+COLOR.BORDER[props.mode]:"none"};
    background: ${(props)=>COLOR.VIEWER.BACKGROUND[props.mode]};
    color: ${(props)=>COLOR.VIEWER.TEXT[props.mode]};
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    & p {
        white-space: pre;
    }
    & h1,h2,h3,h4,h5,h6 {
        color: ${(props)=>COLOR.ACCENT[props.mode]};
        padding-bottom: 0.1em;
    }
    & h1,h2 {
        border-bottom: 1px solid ${(props)=>COLOR.VIEWER.BLOCLQUOTE.BORDER[props.mode]};
    }
    & a {
        color: ${(props)=>COLOR.VIEWER.ACCENT[props.mode]};
        font-size: 1.3em;
    }
    & strong {
        color: ${(props)=>COLOR.ACCENT[props.mode]};
        font-size: 1.3em;
    }
    & hr {
        height: 1.5px;
        background-color: ${(props)=>COLOR.VIEWER.BLOCLQUOTE.BORDER[props.mode]};
        border: none;
    }
    & blockquote {
        border-left: 5px solid ${(props)=>COLOR.VIEWER.BLOCLQUOTE.BORDER[props.mode]};
        color: ${(props)=>COLOR.VIEWER.BLOCLQUOTE.TEXT[props.mode]};
        padding: 1em;
        padding-right: 0;
        margin: 1.5em 0;
    }
    & code {
        background-color: ${(props)=>COLOR.VIEWER.CODE.BACKGROUND[props.mode]};
        color: ${(props)=>COLOR.VIEWER.CODE.TEXT[props.mode]};
        border-color: ${(props)=>COLOR.VIEWER.CODE.BORDER[props.mode]};
        padding: 0.1em 0.4em;
        font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
    }
    & table {
        display: block;
        overflow: auto;
        margin: 1.5em 0;
        border-left: 1px solid ${(props)=>COLOR.VIEWER.TABLE.OUTLINE[props.mode]};
        border-collapse: collapse;
    }
    & thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }
    & th {
        font-weight: bold;
        background-color: ${(props)=>COLOR.VIEWER.BACKGROUND[props.mode]};
        border-top: 1px solid ${(props)=>COLOR.VIEWER.TABLE.OUTLINE[props.mode]};
        border-bottom: 1px solid ${(props)=>COLOR.VIEWER.TABLE.INNER[props.mode]};
        border-right: 1px solid ${(props)=>COLOR.VIEWER.TABLE.INNER[props.mode]};
        padding: 8px 10px;
    }
    & tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    & tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    & td {
        border-bottom: 1px solid ${(props)=>COLOR.VIEWER.TABLE.INNER[props.mode]};
        border-right: 1px solid ${(props)=>COLOR.VIEWER.TABLE.INNER[props.mode]};
        padding: 8px 10px;
        max-width: 600px;
    }
    & tr:nth-child(odd) td {
        background-color: ${(props)=>COLOR.VIEWER.TABLE.ODD[props.mode]};
        border-bottom: 1px solid ${(props)=>COLOR.VIEWER.TABLE.INNER[props.mode]};
        border-right: 1px solid ${(props)=>COLOR.VIEWER.TABLE.INNER[props.mode]};
        padding: 8px 10px;
        max-width: 600px;
    }
    & pre {
        background-color: ${(props)=>COLOR.VIEWER.CODE.BACKGROUND[props.mode]};
        color: ${(props)=>COLOR.VIEWER.CODE.TEXT[props.mode]};
        border-color: ${(props)=>COLOR.VIEWER.CODE.BORDER[props.mode]};
        padding: 0.1em 0.4em;
    }
    & pre code {
        background-color: ${(props)=>COLOR.VIEWER.CODE.BACKGROUND[props.mode]};
        color: ${(props)=>COLOR.VIEWER.CODE.TEXT[props.mode]};
        border-color: ${(props)=>COLOR.VIEWER.CODE.BORDER[props.mode]};
        font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
    }
`;

export default EditorSet;
