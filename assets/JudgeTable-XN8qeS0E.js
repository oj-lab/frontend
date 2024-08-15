import{j as e,D as m,d as b,b as u,e as x,k as j}from"./index-4d2oAvQc.js";const f=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M18 12h4"}),e.jsx("path",{d:"M20 10v4"}),e.jsx("path",{d:"M11 12h4"}),e.jsx("path",{d:"M13 10v4"}),e.jsx("path",{d:"M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"})]}),v=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:m,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"}),e.jsx("path",{d:"M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"}),e.jsx("path",{d:"M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"}),e.jsx("path",{d:"M11 6l0 .01"}),e.jsx("path",{d:"M13 18l0 .01"})]});function p(s,a,n,t){if(t=n?!0:t||!1,s.length<=a)return s;let i=a,l=0;n&&(i=Math.ceil(a/2),l=a-i);let r=s.slice(0,i);return t||(r+="..."),n&&(r+=s.slice(-l)),r}const k=s=>{const{t:a}=b(),n=u();return e.jsx("div",{className:s.className,children:e.jsxs("table",{className:"table","aria-label":"Problem Table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-base-content/10",children:[e.jsx("th",{children:a("UID")},"uid"),e.jsx("th",{children:a("Problem Title")},"problemTitle"),e.jsx("th",{children:a("User")},"user"),e.jsx("th",{children:a("Language")},"language"),e.jsx("th",{children:a("Status")},"status"),e.jsx("th",{children:a("Submit Time")},"submitTime"),e.jsx("th",{children:a("Finished Time")},"finishedTime")]})}),e.jsx("tbody",{children:s.data.map((t,i)=>{var l,r,o,h,c,d;return e.jsxs("tr",{className:x(s.data.length>1?"border-base-content/10":"border-0",s.enableRouting&&"hover cursor-pointer"),onClick:()=>{s.enableRouting&&n(t.UID)},children:[e.jsx("th",{children:p(t.UID,8,!1)}),e.jsx("td",{children:(l=t.problem)==null?void 0:l.title}),e.jsxs("td",{className:"flex items-center gap-3 py-2",children:[e.jsx("div",{className:"avatar",children:e.jsx("div",{className:"w-8 rounded-full",children:e.jsx("img",{src:(r=t.user)!=null&&r.avatarUrl?(o=t.user)==null?void 0:o.avatarUrl:j((h=t.user)==null?void 0:h.name),alt:`avatar-${(c=t.user)==null?void 0:c.name}`})})}),e.jsx("span",{children:(d=t.user)==null?void 0:d.name})]}),e.jsx("td",{children:e.jsx("div",{className:"badge min-w-10 border-0 bg-base-300",children:e.jsx(g,{language:t.language})})}),e.jsx("td",{children:e.jsx("div",{className:x("badge border-0 font-semibold",w(t.status,t.verdict)),children:t.status==="finished"?t.verdict:t.status})}),e.jsx("td",{children:new Date(t.submitTime).toLocaleString()}),e.jsx("td",{children:new Date(t.finishedTime).toLocaleString()})]},i)})})]})})},g=({language:s})=>s.toLowerCase()==="cpp"?e.jsx(f,{className:"h-4 w-4 stroke-base-content"}):s.toLowerCase()==="python"?e.jsx(v,{className:"h-4 w-4 stroke-base-content"}):e.jsx("span",{className:"text-[10px] font-semibold",children:s.toUpperCase()});function w(s,a){return s==="finished"&&a==="Accepted"?"bg-success/10 text-success":s==="finished"&&a==="WrongAnswer"?"bg-error/10 text-error":s==="finished"&&a==="CompileError"?"bg-warning/10 text-warning":s==="pending"?"bg-primary/10 text-primary":s==="running"?"bg-secondary/10 text-secondary":""}export{k as J};