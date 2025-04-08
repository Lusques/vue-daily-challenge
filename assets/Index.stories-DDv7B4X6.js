import{v as D}from"./v4-CtRu48qb.js";import{d as S,e as A,o as B,f as c,t as P,b as C,w as L}from"./vue.esm-bundler-DT2SLsD0.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:K}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:b}=__STORYBOOK_MODULE_GLOBAL__;var M=Object.defineProperty,k=(t,e)=>{for(var n in e)M(t,n,{get:e[n],enumerable:!0})},Y="storybook/actions",W=`${Y}/action-event`,N={depth:10,clearOnStoryChange:!0,limit:50},x=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:x(n,e)},U=t=>!!(typeof t=="object"&&t&&x(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),F=t=>{if(U(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(r.constructor.prototype)}),e}return t},$=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?D():Date.now().toString(36)+Math.random().toString(36).substring(2);function u(t,e={}){let n={...N,...e},r=function(...s){var m,g;if(e.implicit){let O=(m="__STORYBOOK_PREVIEW__"in b?b.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(O){let l=!((g=globalThis==null?void 0:globalThis.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),f=new K({phase:O.phase,name:t,deprecated:l});if(l)console.warn(f);else throw f}}let o=V.getChannel(),a=$(),i=5,p=s.map(F),I=s.length>1?p:p[0],w={id:a,count:0,data:{name:t,args:I},options:{...n,maxDepth:i+(n.depth||3),allowFunction:n.allowFunction||!1}};o.emit(W,w)};return r.isAction=!0,r.implicit=e.implicit,r}const{definePreview:ae}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__;var z={};k(z,{argsEnhancers:()=>H,loaders:()=>Q});var R=(t,e)=>typeof e[t]>"u"&&!(t in e),G=t=>{let{initialArgs:e,argTypes:n,id:r,parameters:{actions:s}}=t;if(!s||s.disable||!s.argTypesRegex||!n)return{};let o=new RegExp(s.argTypesRegex);return Object.entries(n).filter(([a])=>!!o.test(a)).reduce((a,[i,p])=>(R(i,e)&&(a[i]=u(i,{implicit:!0,id:r})),a),{})},q=t=>{let{initialArgs:e,argTypes:n,parameters:{actions:r}}=t;return r!=null&&r.disable||!n?{}:Object.entries(n).filter(([s,o])=>!!o.action).reduce((s,[o,a])=>(R(o,e)&&(s[o]=u(typeof a.action=="string"?a.action:o)),s),{})},H=[q,G],h=!1,J=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!h&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in _&&typeof _.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=_.__STORYBOOK_TEST_ON_MOCK_CALL__;n((r,s)=>{let o=r.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>o.startsWith(a)))&&u(o)(s)}),h=!0}},Q=[J];const X={class:"card m-auto bg-dark text-white",style:{width:"18rem"}},Z={class:"card-body d-flex justify-content-between gap-3"},ee={class:"card-text m-0"},te={class:"d-flex justify-content-center flex-column gap-2"},ne=S({__name:"Index",props:{count:{}},emits:["increment","decrement"],setup(t,{emit:e}){const n=t,r=e;return(s,o)=>(B(),A("section",null,[c("div",X,[c("div",Z,[c("div",null,[o[2]||(o[2]=c("h3",{class:"card-title mb-2"},"Contador de tarefas",-1)),c("h5",ee,"Tarefas: "+P(n.count),1)]),c("div",te,[c("button",{"aria-label":"Botão de soma",type:"button",class:"btn btn-outline-light",onClick:o[0]||(o[0]=a=>r("increment"))}," + "),c("button",{"aria-label":"Botão de subtração",type:"button",class:"btn btn-outline-light",onClick:o[1]||(o[1]=a=>r("decrement"))}," - ")])])])]))}}),T=j(ne,[["__scopeId","data-v-b3e9f082"]]),ce={title:"Month-1/Week-1/Day-2: Contador com Props e Emits",component:T,argTypes:{count:{control:"number"}}},d=t=>({components:{Index:T},setup(){const e=C(t.count);return L(()=>t.count,s=>{e.value=s}),{args:{...t,count:e,onIncrement:()=>{e.value++,u("increment")()},onDecrement:()=>{e.value--,u("decrement")()}}}},template:`
  <h2 class="m-auto mb-4" style="width: fit-content;">V-bind</h2>
  <Index v-bind="args"/>
  <br/>
  <h2 class="m-auto mb-4" style="width: fit-content;">Props e Emit</h2>
  <Index :count="args.count" @increment="args.onIncrement" @decrement="args.onDecrement"/>`});d.args={count:0};var y,v,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`(args: any) => ({
  components: {
    Index
  },
  // setup: () => ({ args }),
  setup() {
    const count = ref(args.count);
    watch(() => args.count, currentValue => {
      count.value = currentValue;
    });
    const increment = () => {
      count.value++;
      action("increment")();
    };
    const decrement = () => {
      count.value--;
      action("decrement")();
    };
    return {
      args: {
        ...args,
        count,
        onIncrement: increment,
        onDecrement: decrement
      }
    };
  },
  template: \`
  <h2 class="m-auto mb-4" style="width: fit-content;">V-bind</h2>
  <Index v-bind="args"/>
  <br/>
  <h2 class="m-auto mb-4" style="width: fit-content;">Props e Emit</h2>
  <Index :count="args.count" @increment="args.onIncrement" @decrement="args.onDecrement"/>\`
})`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const ie=["Default"];export{d as Default,ie as __namedExportsOrder,ce as default};
