import{a as r,j as t}from"./index-uJhDaQWx.js";import{b as d}from"./judge-IwAaOxFN.js";import{J as n}from"./JudgeTable-En5x7AdJ.js";import{M as a}from"./MarkdownRender-E-EOETXY.js";function c(e,s){e=e||"text",e=e.toLowerCase();let o=`\`\`\`${e}
${s}
\`\`\``;return console.log(o),o}const f=()=>{const e=r().uid,{getJudge:s}=d(e),o=s();return o&&t.jsxs("div",{className:"grid gap-4 overflow-x-auto",children:[t.jsx("div",{className:"h-fit rounded border border-base-content/10 bg-base-100",children:t.jsx(n,{data:[o]})}),t.jsx(a,{content:c(o.language,o.code)})]})};export{f as default};
