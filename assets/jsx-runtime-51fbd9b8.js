import"./iframe-27acf551.js";import{r as _}from"./index-49a9e72c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="ff77abb6-1908-4257-b60b-4811de20a430",r._sentryDebugIdIdentifier="sentry-dbid-ff77abb6-1908-4257-b60b-4811de20a430")}catch{}})();var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=_,y=Symbol.for("react.element"),a=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,l=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,f){var t,o={},s=null,d=null;f!==void 0&&(s=""+f),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)b.call(e,t)&&!m.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:y,type:r,key:s,ref:d,props:o,_owner:l.current}}n.Fragment=a;n.jsx=p;n.jsxs=p;i.exports=n;var v=i.exports;export{v as j};
