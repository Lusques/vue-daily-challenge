const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34--BzQ71Fa.js","assets/iframe-CER1D1A6.js","assets/index-CyK5KuzR.js","assets/index-Bx-go_-4.js","assets/index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-CER1D1A6.js";var s=Object.defineProperty,i=(e,r)=>{for(var t in r)s(e,t,{get:r[t],enumerable:!0})},_={};i(_,{parameters:()=>p});var d=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),p={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34--BzQ71Fa.js"),__vite__mapDeps([0,1,2,3,4]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>d[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{p as parameters};
