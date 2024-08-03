import{e as r}from"./index-nbSHFovy.js";var p;(a=>{async function n(t){let e=await r.get(`/api/v1/problem/${t}`);if(e.status!==200)throw Error("failed to get problem info");return e.data}a.getProblem=n;async function s(t){let e=await r.put("/api/v1/problem",t);if(e.status!==200)throw Error("failed to put problem");return e.data}a.putProblem=s;async function i(t,e){t=t||10,e=e||0;let o=await r.get("/api/v1/problem",{params:{limit:t,offset:e}});if(o.status!==200)throw Error("failed to get problem list");return o.data}a.getProblemInfoList=i;async function u(t,e){let o=new FormData;o.append("file",e);let l=await r.put(`/api/v1/problem/${t}/package`,o);if(l.status!==200)throw Error("failed to put problem package");return l.data}a.putProblemPackage=u;async function m(t){return(await r.get(`/api/v1/problem/${t}/check`)).data}a.checkProblemSlug=m;async function b(t){if((await r.delete(`/api/v1/problem/${t}`)).status!==200)throw Error("failed to delete problem")}a.deleteProblem=b})(p||(p={}));export{p as P};
