"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{96588:function(e,t,n){n.d(t,{k:function(){return o}});var a=n(52322),r=n(2784),i=n(40427);let s={default:1,[i.BREAKPOINTS.xs]:2,[i.BREAKPOINTS.md]:3,[i.BREAKPOINTS.xl]:4},l=e=>{let t=e.default||1,[n,a]=(0,r.useState)(!1),i=(0,r.useMemo)(()=>Object.keys(e).filter(e=>"default"!==e).sort((e,t)=>Number(t)-Number(e)),[e]),s=(0,r.useCallback)(()=>e[Number(i.find(e=>window.matchMedia("(min-width: ".concat(e,"px)")).matches)||"default")]||t,[i,e,t]),l=(0,r.useCallback)(e=>(a(!0),i.forEach(t=>{let n=window.matchMedia("(min-width: ".concat(t,"px)"));"function"==typeof n.addEventListener?n.addEventListener("change",e):"function"==typeof n.addListener&&n.addListener(e)}),()=>{i.forEach(t=>{let n=window.matchMedia("(min-width: ".concat(t,"px)"));"function"==typeof n.removeEventListener?n.removeEventListener("change",e):"function"==typeof n.removeListener&&n.removeListener(e)})}),[i]),c=(0,r.useSyncExternalStore)(l,s,()=>t);return(0,r.useMemo)(()=>({hasBeenInitialized:n,columnsCount:c}),[c,n])};n(39515),n(62159),n(19430);var c=(0,n(46724).c)({defaultClassName:"_nkl6i52 _1286nb12y9 _1286nb1339 _1286nb18l",variantClassNames:{invisible:{true:"_nkl6i51"}},defaultVariants:{},compoundVariants:[]});let o=e=>{let{children:t,columns:n=s}=e,{hasBeenInitialized:i,columnsCount:o}=l(n),u=(0,r.useMemo)(()=>{let e=r.Children.toArray(t),n=Array.from({length:o},()=>[]);return e.forEach((e,t)=>{n[t%o].push(e)}),n.map((e,t)=>(0,a.jsx)("div",{className:"_1286nb1m",children:e},"".concat(o,"-").concat(t)))},[t,o]);return(0,a.jsx)("div",{className:c({invisible:!i}),children:u})}},84531:function(e,t,n){n.d(t,{O:function(){return l}});var a=n(52322),r=n(40489),i=n(74133);n(52040);var s="_d9qd7y1";let l={Rect:e=>{let{width:t="full",height:n="100",borderRadius:l="md",marginTop:c="0",marginRight:o="0",marginBottom:u="0",marginLeft:d="0",aspectRatio:m,style:f,className:h,...v}=e;return(0,a.jsx)(i.x,{...v,width:t,height:n,borderRadius:l,marginTop:c,marginRight:o,marginBottom:u,marginLeft:d,aspectRatio:m,style:f,className:(0,r.Z)(s,h)})},Circle:e=>{let{size:t="full",marginTop:n="0",marginRight:r="0",marginBottom:l="0",marginLeft:c="0",style:o,...u}=e;return(0,a.jsx)(i.x,{...u,width:t,height:t,borderRadius:"full",marginTop:n,marginRight:r,marginBottom:l,marginLeft:c,className:s,style:o})}}}}]);