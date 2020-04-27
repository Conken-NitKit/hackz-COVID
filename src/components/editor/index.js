import React, {useState} from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import slug from 'remark-slug'
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

const Editor = () => {
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
  return (<div>
    <textarea value={content} onChange={handleChange} />
    <div style={{textAlign: 'left', padding: '24px' }} dangerouslySetInnerHTML={{ __html: contents}}></div>
  </div>);
}

export default Editor;
