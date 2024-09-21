import{c as r,j as t}from"./index-Ol6CJ05L.js";import{b as d}from"./judge-e5M9YHa9.js";import{J as n}from"./JudgeTable-uhK3Vq_g.js";import{M as a}from"./MarkdownRender-IOyaY6WV.js";function c(e,s){e=e||"text",e=e.toLowerCase();let o=`\`\`\`${e}
${s}
\`\`\``;return console.log(o),o}const f=()=>{const e=r().uid,{getJudge:s}=d(e),o=s();return o&&t.jsxs("div",{className:"grid gap-4 overflow-x-auto",children:[t.jsx("div",{className:"h-fit rounded border border-base-content/10 bg-base-100",children:t.jsx(n,{data:[o]})}),t.jsx(a,{content:c(o.language,o.code)})]})};export{f as default};
