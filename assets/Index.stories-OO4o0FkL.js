import{d as j,b as p,e as x,f as e,g as z,t as f,n as A,o as I}from"./vue.esm-bundler-DT2SLsD0.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N={class:"card m-auto bg-dark text-white",style:{width:"18rem"}},M={class:"card-body d-flex justify-content-between gap-3"},O={class:"card-text m-0"},U={class:"d-flex justify-content-center flex-column gap-2"},W=j({__name:"Index",props:{initialValue:{}},setup(c){const m=c,t=p(m.initialValue?m.initialValue:0),n=p(""),u=p("primary");function B(){t.value++,t.value===10&&(u.value="primary",v("Bom trabalho!"))}function E(){t.value<1?(u.value="danger",v(`Valor mínimo: ${t.value}`)):t.value--}function v(d){n.value!==d&&(n.value=d,setTimeout(()=>{n.value=""},3e3))}return(d,a)=>(I(),x("section",null,[e("div",N,[e("div",M,[e("div",null,[a[2]||(a[2]=e("h3",{class:"card-title mb-2"},"Contador de tarefas",-1)),e("h5",O,"Tarefas: "+f(t.value),1)]),e("div",U,[e("button",{type:"button",class:"btn btn-outline-light",onClick:a[0]||(a[0]=$=>B())}," + "),e("button",{type:"button",class:"btn btn-outline-light",onClick:a[1]||(a[1]=$=>E())}," - ")])])]),n.value?(I(),x("div",{key:0,class:A(`alert alert-${u.value}`),role:"alert"},f(n.value),3)):z("",!0)]))}}),o=F(W,[["__scopeId","data-v-c24d3a1d"]]),q=`
### 📘 Contador de Tarefas

Este componente exibe um contador de tarefas com botões de incremento e decremento.

- 🧮 Usa a prop \`initialValue\` para iniciar o contador.
- 📢 Exibe alertas personalizados ao atingir certos valores.
- 🎛️ Integrado ao painel de controles do Storybook.
`,J={title:"Month-1/Week-1/Day-1: Contador",component:o,parameters:{docs:{description:{component:q}}},argTypes:{initialValue:{control:{type:"number"}}}},s=()=>({components:{Index:o},template:"<Index />"}),r=()=>({components:{Index:o},setup:()=>({value:5}),template:"<Index :initialValue='value'/>"}),l=()=>({components:{Index:o},setup:()=>({value:20}),template:"<Index :initialValue='value'/>"}),i=c=>({components:{Index:o},setup:()=>({args:c}),template:'<Index :initialValue="args.initialValue" />'});var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  components: {
    Index
  },
  template: "<Index />"
})`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var V,_,S;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`() => ({
  components: {
    Index
  },
  setup: () => ({
    value: 5
  }),
  template: "<Index :initialValue='value'/>"
})`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var T,h,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => ({
  components: {
    Index
  },
  setup: () => ({
    value: 20
  }),
  template: "<Index :initialValue='value'/>"
})`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var C,w,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(args: ArgTypes) => ({
  components: {
    Index
  },
  setup: () => ({
    args
  }),
  template: \`<Index :initialValue="args.initialValue" />\`
})`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const K=["Default","StartInFive","StartInTwenty","Interactive"];export{s as Default,i as Interactive,r as StartInFive,l as StartInTwenty,K as __namedExportsOrder,J as default};
