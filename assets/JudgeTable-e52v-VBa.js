import{j as e,D as v,g,b as f,u as w,d as N,f as p,U as M}from"./index-5gPbFPLR.js";const k=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M18 12h4"}),e.jsx("path",{d:"M20 10v4"}),e.jsx("path",{d:"M11 12h4"}),e.jsx("path",{d:"M13 10v4"}),e.jsx("path",{d:"M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"})]}),L=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:v,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"}),e.jsx("path",{d:"M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"}),e.jsx("path",{d:"M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"}),e.jsx("path",{d:"M11 6l0 .01"}),e.jsx("path",{d:"M13 18l0 .01"})]});function C(s,r,i,t){if(t=i?!0:t||!1,s.length<=r)return s;let a=r,l=0;i&&(a=Math.ceil(r/2),l=r-a);let n=s.slice(0,a);return t||(n+="..."),i&&(n+=s.slice(-l)),n}const D=s=>{const{t:r}=g(),i=f(),t=w(N);return e.jsx("div",{className:s.className,children:e.jsxs("table",{className:"table","aria-label":"Problem Table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-base-content/10",children:[e.jsx("th",{children:r("UID")},"uid"),e.jsx("th",{children:r("Problem Title")},"problemTitle"),e.jsx("th",{children:r("User")},"user"),e.jsx("th",{children:r("Language")},"language"),e.jsx("th",{children:r("Submit Time")},"submitTime"),e.jsx("th",{children:r("Status")},"status")]})}),e.jsx("tbody",{children:s.data.map((a,l)=>{var n,c,o,h,d,x,m;return e.jsxs("tr",{className:p(s.data.length>1?"border-base-content/10":"border-0",(s.enableRouting&&((n=t==null?void 0:t.roles)==null?void 0:n.includes("admin"))||((c=t==null?void 0:t.roles)==null?void 0:c.includes("super"))||(t==null?void 0:t.account)===((o=a.user)==null?void 0:o.account))&&"hover cursor-pointer"),onClick:()=>{var u,b,j;(s.enableRouting&&((u=t==null?void 0:t.roles)!=null&&u.includes("admin"))||(b=t==null?void 0:t.roles)!=null&&b.includes("super")||(t==null?void 0:t.account)===((j=a.user)==null?void 0:j.account))&&i(`/judges/${a.UID}`)},children:[e.jsx("th",{children:C(a.UID,8,!1)}),e.jsx("td",{children:(h=a.problem)==null?void 0:h.title}),e.jsxs("td",{className:"flex items-center gap-3 py-2",children:[e.jsx("div",{className:"avatar",children:e.jsx(M,{alt:(d=a.user)==null?void 0:d.name,avatarUrl:(x=a.user)==null?void 0:x.avatarUrl})}),e.jsx("span",{children:(m=a.user)==null?void 0:m.name})]}),e.jsx("td",{children:e.jsx("div",{className:"badge min-w-10 border-0 bg-base-300",children:e.jsx(U,{language:a.language})})}),e.jsx("td",{children:new Date(a.createAt).toLocaleString()}),e.jsx("td",{children:e.jsx("div",{className:p("badge border-0 font-semibold",y(a.status,a.verdict)),children:a.status==="finished"?a.verdict:a.status})})]},l)})})]})})},U=({language:s})=>s.toLowerCase()==="cpp"?e.jsx(k,{className:"h-4 w-4 stroke-base-content"}):s.toLowerCase()==="python"?e.jsx(L,{className:"h-4 w-4 stroke-base-content"}):e.jsx("span",{className:"text-[10px] font-semibold",children:s.toUpperCase()});function y(s,r){return s==="finished"&&r==="Accepted"?"bg-success/10 text-success":s==="finished"&&r==="WrongAnswer"?"bg-error/10 text-error":s==="finished"&&r==="CompileError"?"bg-warning/10 text-warning":s==="pending"?"bg-primary/10 text-primary":s==="running"?"bg-secondary/10 text-secondary":""}export{D as J};
