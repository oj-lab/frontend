import{r as t,f as d,A as y}from"./index-4Qbihd6j.js";import{g as L,b as E}from"./problem-TmshBE3v.js";const x=(n,s)=>{const[i,a]=t.useState(null),o=t.useRef(s),f=d();t.useEffect(()=>{o.current=s},[s]),t.useEffect(()=>{L(n).then(r=>{a(r)}).catch(r=>{var c;f({type:y,payload:{id:"problem-fetch-error",content:"Failed to fetch problem",duration:3e3,err:r.toString()}}),(c=o.current)==null||c.call(o)})},[n]);function u(){return i}return{getProblem:u}},A=()=>{const[n,s]=t.useState([]),[i,a]=t.useState(0),[o,f]=t.useState(10),[u,r]=t.useState(0),[c,m]=t.useState(""),[g,P]=t.useState("");t.useEffect(()=>{E(o,u).then(e=>{s(e.list),a(e.total)}).catch(e=>{console.log(e)})},[o,u,c,g]);function b(){return n}function p(e){return Math.ceil(i/e)}function h(e,l){f(e),r(l)}function S(e,l){m(e),P(l)}return{getProblemInfoList:b,getPageCount:p,setPagenation:h,setSearch:S}};export{A as a,x as u};
