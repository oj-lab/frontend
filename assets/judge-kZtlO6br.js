import{f as g,r}from"./index-4d2oAvQc.js";async function h(e,s,u){let t=JSON.stringify({code:s,language:u}),a=await g.post(`/api/v1/problem/${e}/judge`,t);if(a.status!==200)throw Error("failed to run judge");return a.data}async function c(){let e=await g.get("/api/v1/judge");if(e.status!==200)throw Error("failed to get judge list");return e.data}async function p(e){let s=await g.get(`/api/v1/judge/${e}`);if(s.status!==200)throw Error("failed to get judge detail");return s.data}const S=e=>{const[s,u]=r.useState();r.useEffect(()=>{p(e).then(t=>{u(t)}).catch(t=>{console.log(t)})},[e]);function n(){return s}return{getJudge:n}},j=e=>{const[s,u]=r.useState(""),[n,t]=r.useState(""),[a,i]=r.useState([]);function d(J){h(e,s,n).then(o=>{i(o),J()}).catch(o=>{console.log(o)})}function f(){return a}function l(){return n}return{runJudge:d,getVerdicts:f,setSrc:u,setSrcLanguage:t,getSrcLanguage:l}},w=()=>{const[e,s]=r.useState([]);r.useEffect(()=>{c().then(t=>{s(t.list)}).catch(t=>{console.log(t)})},[]);function u(){return e}function n(){c().then(t=>{s(t.list)}).catch(t=>{console.log(t)})}return{getJudgeList:u,refreshJudgeList:n}};export{w as a,S as b,j as u};