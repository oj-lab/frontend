import{b as r,j as t}from"./index-s-isWPjn.js";import{b as d}from"./judge-K9rATMXa.js";import{J as n}from"./JudgeTable-kWaxQx0e.js";import{M as a}from"./MarkdownRender-25TQHGav.js";function c(e,s){e=e||"text",e=e.toLowerCase();let o=`\`\`\`${e}
${s}
\`\`\``;return console.log(o),o}const b=()=>{const e=r().uid,{getJudge:s}=d(e),o=s();return o&&t.jsxs("div",{className:"grid gap-4 overflow-x-auto",children:[t.jsx("div",{className:"h-fit rounded border border-base-content/10 bg-base-100",children:t.jsx(n,{data:[o]})}),t.jsx(a,{content:c(o.language,o.code)})]})};export{b as default};
