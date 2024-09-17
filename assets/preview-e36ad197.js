(function(){try{var e=typeof window<"u"?window:typeof o<"u"?o:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a4326834-6136-4e86-bc3c-31b97b4f3f0d",e._sentryDebugIdIdentifier="sentry-dbid-a4326834-6136-4e86-bc3c-31b97b4f3f0d")}catch{}})();const{STORY_CHANGED:a}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:g}=__STORYBOOK_MODULE_PREVIEW_API__,{global:o}=__STORYBOOK_MODULE_GLOBAL__;var s="storybook/highlight",l="storybookHighlight",b=`${s}/add`,y=`${s}/reset`,{document:_}=o,I=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,i=g.getChannel(),O=e=>{let t=l;r();let n=Array.from(new Set(e.elements)),d=_.createElement("style");d.setAttribute("id",t),d.innerHTML=n.map(h=>`${h}{
          ${I(e.color,e.style)}
         }`).join(" "),_.head.appendChild(d)},r=()=>{var n;let e=l,t=_.getElementById(e);t&&((n=t.parentNode)==null||n.removeChild(t))};i.on(a,r);i.on(y,r);i.on(b,O);
