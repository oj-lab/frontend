import{j as s,e as m,R as l,r as g}from"./index-b_Nou6eN.js";import{P as u}from"./ProblemTable-Ycxtizqr.js";import{a as d}from"./problem-A9bJyZgK.js";import"./problem-e0LAZcYD.js";import"./CircleCheckIcon-yUXzB8Uz.js";const b=t=>{const n=Array.from({length:t.pageCount},(e,a)=>a);return s.jsxs("div",{className:"flex flex-row-reverse gap-2 p-2",children:[s.jsx("select",{className:"select select-sm rounded bg-base-200 text-sm font-semibold",onChange:e=>{t.setCountPerPage(Number(e.target.value)),t.setPage(0)},children:t.countPerPageSelections.map(e=>s.jsx("option",{value:e,children:e},e))}),s.jsx("div",{className:"join rounded",children:t.pageCount>1&&n.map(e=>s.jsx("button",{className:m("btn join-item btn-sm",t.page===e?"btn-active":""),onClick:()=>{t.setPage(e)},children:e+1},e))})]})},r=[10,25,50],p=()=>{const{getProblemInfoList:t,getPageCount:n,setPagenation:e}=d(),[a,c]=l.useState(r[0]),[o,i]=l.useState(0);return g.useEffect(()=>{e(a,o*a)},[a,o]),s.jsx("div",{className:"flex w-full flex-auto flex-col gap-8 sm:flex-row",children:s.jsx("div",{className:"flex w-full flex-col gap-2",children:s.jsxs("div",{className:"h-fit w-full rounded border border-base-content/10 bg-base-100",children:[s.jsx(u,{data:t(),showActions:!1,enableRouting:!0,className:t().length===1?"":"border-b border-base-content/10"}),s.jsx(b,{page:o,pageCount:n(a),setCountPerPage:c,countPerPage:a,countPerPageSelections:r,setPage:i})]})})})};export{p as default};
