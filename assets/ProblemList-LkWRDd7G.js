import{R as a,r as b,j as e}from"./index-OoiXYNtJ.js";import{P as d,a as x}from"./ProblemSearch-qBINCzVe.js";import{a as h}from"./problem-FA3HB79P.js";import{P as p}from"./Pagination-iVXYTEb8.js";import"./problem-8Y9hzH0w.js";import"./CircleCheckIcon-k1fp_Rq_.js";const l=[10,25,50],R=()=>{const{getProblemInfoList:r,getPageCount:n,setPagenation:i}=h(),[t,c]=a.useState(l[0]),[s,f]=a.useState(0),[u,g]=a.useState(""),[m,P]=a.useState("all");return b.useEffect(()=>{i(t,s*t)},[t,s]),e.jsx("div",{className:"flex w-full flex-auto flex-col gap-8 sm:flex-row",children:e.jsx("div",{className:"flex w-full flex-col gap-2",children:e.jsxs("div",{className:"h-fit w-full rounded border border-base-content/10 bg-base-100",children:[e.jsx(d,{onChangeTitle:o=>{g(o)},onChangeDifficulty:o=>{P(o)},onSearch:()=>{},title:u,difficulty:m}),e.jsx(x,{data:r(),showAccepted:!0,enableRouting:!0,className:r().length===1?"":"border-b border-base-content/10"}),e.jsx(p,{page:s,pageCount:n(t),setCountPerPage:c,countPerPage:t,countPerPageSelections:l,setPage:f})]})})})};export{R as default};
