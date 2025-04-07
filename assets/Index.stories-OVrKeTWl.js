import{d as j,b as m,e as x,o as f,f as t,g as z,t as I,n as A}from"./vue.esm-bundler-DT2SLsD0.js";const F={class:"card m-auto bg-dark text-white",style:{width:"18rem"}},N={class:"card-body d-flex justify-content-between gap-3"},O={class:"card-text m-0"},M={class:"d-flex justify-content-center flex-column gap-2"},U=j({__name:"Index",props:{initialValue:{}},setup(n){const l=n,e=m(l.initialValue?l.initialValue:0),a=m(""),s=m("primary");function B(){e.value++,e.value===10&&(s.value="primary",v("Bom trabalho!"))}function E(){e.value<1?(s.value="danger",v(`Valor mínimo: ${e.value}`)):e.value--}function v(d){a.value!==d&&(a.value=d,setTimeout(()=>{a.value=""},3e3))}return(d,o)=>(f(),x("section",null,[t("div",F,[t("div",N,[t("div",null,[o[2]||(o[2]=t("h3",{class:"card-title mb-2"},"Contador de tarefas",-1)),t("h5",O,"Tarefas: "+I(e.value),1)]),t("div",M,[t("button",{type:"button",class:"btn btn-outline-light",onClick:o[0]||(o[0]=$=>B())}," + "),t("button",{type:"button",class:"btn btn-outline-light",onClick:o[1]||(o[1]=$=>E())}," - ")])])]),a.value?(f(),x("div",{key:0,class:A(`alert alert-${s.value}`),role:"alert"},I(a.value),3)):z("",!0)]))}}),W=(n,l)=>{const e=n.__vccOpts||n;for(const[a,s]of l)e[a]=s;return e},r=W(U,[["__scopeId","data-v-2007f7b0"]]),q=`
### 📘 Contador de Tarefas

Este componente exibe um contador de tarefas com botões de incremento e decremento.

- 🧮 Usa a prop \`initialValue\` para iniciar o contador.
- 📢 Exibe alertas personalizados ao atingir certos valores.
- 🎛️ Integrado ao painel de controles do Storybook.
`,H={title:"Month-1/Week-1/Day-1: Contador",component:r,parameters:{docs:{description:{component:q}}},argTypes:{initialValue:{control:{type:"number"}}}},i=()=>({components:{Index:r},template:"<Index />"}),c=()=>({components:{Index:r},setup:()=>({value:5}),template:"<Index :initialValue='value'/>"}),u=()=>({components:{Index:r},setup:()=>({value:20}),template:"<Index :initialValue='value'/>"}),p=n=>({components:{Index:r},setup:()=>({args:n}),template:'<Index :initialValue="args.initialValue" />'});var g,b,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  components: {
    Index
  },
  template: "<Index />"
})`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,V,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => ({
  components: {
    Index
  },
  setup: () => ({
    value: 5
  }),
  template: "<Index :initialValue='value'/>"
})`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var k,T,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => ({
  components: {
    Index
  },
  setup: () => ({
    value: 20
  }),
  template: "<Index :initialValue='value'/>"
})`,...(h=(T=u.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var C,w,D;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`(args: ArgTypes) => ({
  components: {
    Index
  },
  setup: () => ({
    args
  }),
  template: \`<Index :initialValue="args.initialValue" />\`
})`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const J=["Default","StartInFive","StartInTwenty","Interactive"];export{i as Default,p as Interactive,c as StartInFive,u as StartInTwenty,J as __namedExportsOrder,H as default};
