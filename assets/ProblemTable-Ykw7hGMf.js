import{j as e,D as l,R as r,u as c,a as i}from"./index-zEAeJJ1u.js";import{P as d}from"./problem-bmGlvjrK.js";const m=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 7l16 0"}),e.jsx("path",{d:"M10 11l0 6"}),e.jsx("path",{d:"M14 11l0 6"}),e.jsx("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),e.jsx("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]}),h=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}),e.jsx("path",{d:"M13.5 6.5l4 4"})]}),x=[{name:"Title",uid:"title"},{name:"Tags",uid:"tags"},{name:"Actions",uid:"actions"}],v=s=>{const[a,n]=r.useState(""),o=c();return e.jsxs("div",{className:s.className,children:[e.jsxs("table",{className:"table","aria-label":"Problem Table",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-base-content/10",children:x.map(t=>t.uid==="actions"&&!s.showActions?null:e.jsx("th",{children:t.name},t.uid))})}),e.jsx("tbody",{children:s.data.map(t=>e.jsxs("tr",{className:i("border-base-content/10",s.enableRouting?"hover cursor-pointer":""),onClick:()=>{s.enableRouting&&o(t.slug)},children:[e.jsx("th",{className:"w-1/3",children:t.title}),e.jsx("td",{className:"w-1/3",children:e.jsx(j,{tags:t.tags})}),s.showActions&&e.jsx("td",{className:"w-1/3 p-2",children:e.jsx(u,{onClickDelete:()=>n(t.slug)})})]},t.slug))})]}),e.jsxs("dialog",{id:"delete_confirm_modal",className:"modal",children:[e.jsxs("div",{className:"modal-box",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Confirm"}),e.jsx("p",{className:"py-4",children:"Are you sure to delete this problem"}),e.jsxs("div",{className:"modal-action",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm",children:"cancel"})}),e.jsx("button",{className:"btn btn-error btn-sm",onClick:()=>{d.deleteProblem(a).then(b=>{window.location.reload()});const t=document.getElementById("delete_confirm_modal");t==null||t.close()},children:"delete"})]})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{children:"close"})})]})]})},j=s=>e.jsx("div",{className:"space-x-2",children:s.tags.map(a=>e.jsx("div",{className:"badge border-0 bg-base-300 font-semibold text-base-content/80",children:a.name},a.name))}),u=s=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{className:"btn btn-square btn-ghost btn-sm rounded hover:bg-primary/20",children:e.jsx(h,{className:"h-5 w-5 text-primary"})}),e.jsx("button",{className:"btn btn-square btn-ghost btn-sm rounded hover:bg-error/20",onClick:a=>{a.preventDefault(),a.stopPropagation(),s.onClickDelete();const n=document.getElementById("delete_confirm_modal");n==null||n.showModal()},children:e.jsx(m,{className:"h-5 w-5 text-error"})})]})});export{v as P};
