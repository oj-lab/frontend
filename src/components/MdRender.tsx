import React from 'react';


interface innerHTML {
  inline?: boolean,
  text: string
}

const MdRender: React.FC<innerHTML> = (props) => {
    const tm = require('markdown-it-texmath');
    const md = require('markdown-it')({html:true})
                    .use(tm, { engine: require('katex'),
                              delimiters: 'dollars',
                              katexOptions: { macros: {"\\RR": "\\mathbb{R}"} } });
    return (
        <div>
            <link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"></link>
            <span  dangerouslySetInnerHTML={ props.inline ? {
                __html: md.renderInline(props.text)
                } : {
                    __html: md.render(props.text)
                }}
            />
        </div>
    )
}


export default MdRender;