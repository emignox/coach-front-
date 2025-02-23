"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4900],{37765:function(e,n,t){t.d(n,{b:function(){return c}});var r=t(52322),s=t(74133),i=t(94951),a=t(17581);t(39515),t(62159),t(23171);var l=(0,t(46724).c)({defaultClassName:"_fsmm4n4 _1286nb12if _1286nb128f _1286nb1239 _1286nb12d9 _1286nb16os _1286nb18l _1286nb12t3 _1286nb12tb",variantClassNames:{type:{danger:"_1286nb1821",info:"_1286nb176j",success:"_1286nb17xj"}},defaultVariants:{},compoundVariants:[]});let c=e=>{let{onClose:n,button:t,children:c,icon:d,permanent:o,type:u}=e;return(0,r.jsxs)(s.x,{className:l({type:u}),children:[d&&(0,r.jsx)(s.x,{display:{default:"none",sm:"inline-block"},children:(0,r.jsx)(i.J,{as:d,marginRight:"10",display:"block"})}),(0,r.jsxs)(s.x,{flex:"1",display:{default:"block",sm:"flex"},alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(s.x,{as:"p",marginRight:{default:"0",sm:"15"},marginBottom:{default:"5",sm:"0"},children:c}),t]}),!o&&(0,r.jsx)(s.x,{as:"button",padding:"5",marginRight:"-5",color:"white",onClick:n||void 0,children:(0,r.jsx)(i.J,{as:a.Z,marginLeft:"10"})})]})}},66485:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(38912);let s="session/xhr/device-manager/identify",i=(()=>{let e=()=>{try{let e=localStorage.getItem(s);if(!e)return null;return r.h.parse(JSON.parse(e))}catch(e){return null}};return{get:e,set:e=>localStorage.setItem(s,JSON.stringify(e)),remove:()=>localStorage.removeItem(s),isDeviceBlocked:()=>{var n;return null===(n=e())||void 0===n?void 0:n.disabled}}})()},80050:function(e,n,t){t.d(n,{en:function(){return _},Il:function(){return w},qx:function(){return m}});var r=t(52322),s=t(40291),i=t(37765),a=t(3785),l=t(7415),c=t(33570),d=t(53476),o=t(66485);let u=(0,d.cn)({key:"deviceIdentifyState",default:void 0,effects:[e=>{let{onSet:n}=e;n(e=>{if(!e){o.Z.remove();return}o.Z.set(e)})}]}),b=(0,d.cn)({key:"deviceBlockedModalState",default:!1}),f=(0,d.nZ)({key:"isDeviceBlocked",get:e=>{let{get:n}=e,t=n(u);return!!t&&t.disabled}}),m=()=>{let[e,n]=(0,d.FV)(b),t=(0,d.sJ)(f);return{isDeviceBlocked:(0,c.Aw)("DEVICE_LIMIT_BLOCK")&&t,isOpenDeviceBlockedModal:e,showDeviceBlockedModal:()=>n(!0),hideDeviceBlockedModal:()=>n(!1)}};var g=t(74133),h=t(94951),x=t(86903);t(39515),t(62159);let v=()=>{let{t:e}=(0,l.$G)("detail"),{isOpenDeviceBlockedModal:n,hideDeviceBlockedModal:t}=m();return(0,r.jsx)(x.u,{size:"sm",open:n,onOpenChange:t,children:(0,r.jsxs)(g.x,{textAlign:"center",children:[(0,r.jsxs)("div",{className:"_1286nb12nf _1286nb12r3 _1286nb18l _1286nb12t9 _1286nb12tx _1286nb16ea",children:[(0,r.jsx)(h.J,{as:a.Z,size:"2xl",className:"_1286nb11h9 _1286nb168s"}),e("deviceBlocked.title")]}),(0,r.jsx)("p",{className:"_1286nb11af _1286nb11p3 _1286nb12nr _1286nb16ea _1286nb12s3",children:e("deviceBlocked.description")}),(0,r.jsx)(s.gg,{as:"a",href:"/user/device-manager",children:e("deviceBlocked.button")})]})})},_=()=>{let{t:e}=(0,l.$G)("common"),n="danger",{isDeviceBlocked:t}=m();if(!t)return null;let c=(0,r.jsx)(s.gg,{size:"sm",color:n,href:"/user/device-manager",children:e("downloadsDisabled.button")});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.b,{type:n,button:c,icon:a.Z,permanent:!0,children:[(0,r.jsx)("strong",{children:e("downloadsDisabled.title")})," ",e("downloadsDisabled.description")]}),(0,r.jsx)(v,{})]})};var p=t(21805),j=t(2784),k=t(38912);let y=async()=>{let e=await fetch("/user/device-manager/identify",{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":p.Z.get("csrf_freepik")||"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!e.ok)throw Error("Error checking user device data.");let n=await e.json();return k.I.parse(n)},w=e=>{let{children:n}=e,t=(0,d.Zl)(u);return(0,j.useEffect)(()=>{let e=async()=>{let e=new Date().getTime(),n={disabled:!1,expiry:e+18e5},t=o.Z.get();if(t&&t.expiry>e)return t;try{let e=await y();n.disabled=e.success&&e.disabled}catch(e){console.error("Error getting device manager status",e)}finally{o.Z.set(n)}return n};p.Z.get("GRID")&&e().then(t)},[t]),(0,r.jsx)(r.Fragment,{children:n})}},38912:function(e,n,t){t.d(n,{I:function(){return s},h:function(){return i}});var r=t(30195);let s=r.z.object({csrfToken:r.z.string().optional(),success:r.z.boolean(),disabled:r.z.boolean()}),i=r.z.object({disabled:r.z.boolean(),expiry:r.z.number()})}}]);