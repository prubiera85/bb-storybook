import{j as z}from"./jsx-runtime-51fbd9b8.js";import"./iframe-27acf551.js";import"./index-49a9e72c.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d8326a38-f108-409c-9da3-f9aa194aff56",e._sentryDebugIdIdentifier="sentry-dbid-d8326a38-f108-409c-9da3-f9aa194aff56")}catch{}})();const w=({label:e,outline:r,type:c,size:m})=>z.jsx("div",{className:`test-component ${r?"test-component--outline":""} ${c?"test-component--"+c:"test-component--primary"} ${m?"test-component--"+m:"test-component--medium"}`,children:e}),D=w;w.__docgenInfo={description:"",methods:[],displayName:"TestComponent"};const k={title:"bbui-components/TestComponent",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto del botón",table:{defaultValue:{summary:"Click Me!"}}},type:{control:"radio",options:["primary","secondary"],description:"Tipo de botón",table:{defaultValue:{summary:"primary"}}},size:{control:"radio",options:["small","medium","large"],description:"Tamaño del botón",table:{defaultValue:{summary:"medium"}}},outline:{control:"boolean",description:"Añade un borde negro",table:{defaultValue:{summary:"false"}}}},args:{label:"Click me!",type:"primary",size:"medium",outline:!1}},o={args:{}},a={args:{type:"secondary"}},t={args:{size:"small"}},s={args:{size:"large"}},n={args:{outline:!0}};var d,i,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'secondary'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,T,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var C,x,I;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const E=["Primary","Secondary","Small","Large","Outline"];export{s as Large,n as Outline,o as Primary,a as Secondary,t as Small,E as __namedExportsOrder,k as default};
