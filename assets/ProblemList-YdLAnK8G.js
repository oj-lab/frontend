import{b as P,R as s,r as h,j as e}from"./index-r4e2lJ-r.js";import{P as x,a as p}from"./ProblemSearch-pHZvwcGg.js";import{a as j}from"./problem-g-wHD_Ug.js";import{P as S}from"./PlusIcon-EPza6o5L.js";import{P as N}from"./Pagination-_UuZB7lz.js";import"./problem-poYpEBPP.js";import"./ConfirmDialog-WX1bvAuA.js";import"./CircleCheckIcon-j00T70wd.js";const n=[10,25,50],L=()=>{const i=P(),{getProblemInfoList:r,getPageCount:c,setPagenation:l}=j(),[t,m]=s.useState(n[0]),[a,u]=s.useState(0),[b,f]=s.useState(""),[d,g]=s.useState("all");return h.useEffect(()=>{l(t,a*t)},[t,a]),e.jsxs("div",{className:"card card-bordered flex w-full flex-col rounded border-base-content/10 bg-base-100",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(x,{onChangeTitle:o=>{f(o)},onChangeDifficulty:o=>{g(o)},onSearch:()=>{},title:b,difficulty:d}),e.jsxs("button",{className:"btn btn-ghost m-2 h-8 min-h-8 rounded border border-base-content/10",onClick:()=>{i("/admin/problems/create")},children:[e.jsx(S,{className:"h-4 w-4"}),"New Problem"]})]}),e.jsx(p,{data:r(),showActions:!0,className:r().length===1?"":"border-b border-base-content/10"}),e.jsx(N,{page:a,pageCount:c(t),setCountPerPage:m,countPerPage:t,countPerPageSelections:n,setPage:u})]})};export{L as default};