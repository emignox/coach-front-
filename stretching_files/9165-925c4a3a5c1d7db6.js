"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9165],{72909:function(n,l,e){e.d(l,{j:function(){return j}});var a={};e.r(a),e.d(a,{button:function(){return s},inline:function(){return i},span:function(){return c}});var t=e(52322),o=e(7415);e(39515),e(62159),e(79062);var r=e(46724),s=(0,r.c)({defaultClassName:"_bglng83 _1286nb12il _1286nb128l _1286nb1239 _1286nb12d9 _1286nb14k3 _1286nb14lf _1286nb14mr _1286nb14o3 _1286nb12r3 _1286nb12nr _1286nb13p9 _1286nb119",variantClassNames:{mode:{follow:"_1286nb16ea _1286nb17os _1286nb17up",following:"_1286nb16ea _1286nb16ly _1286nb17os _1286nb182g"}},defaultVariants:{mode:"follow"},compoundVariants:[]}),i=(0,r.c)({defaultClassName:"_bglng8a _bglng87 _1286nb119",variantClassNames:{mode:{follow:"_1286nb16ea",following:"_1286nb16ea _1286nb16ly"}},defaultVariants:{mode:"follow"},compoundVariants:[]}),c="_bglng8d",u=e(27674),f=e(8429),b=e(49382),w=e(15605),d=e(2784),_=e(53476),h=e(63727);let g=async()=>{let n=await fetch("/api/social/follow");if(!n.ok)throw Error();return await n.json()},m=(0,_.cn)({key:"userFollowsState",default:[],effects:[n=>{let{setSelf:l}=n;(async()=>{let n=async()=>await g();l(await n())})()}]}),p=(0,_.CG)({key:"authorUserFollow",get:n=>{let{id:l}=n;return n=>{let{get:e}=n;return!!e(h.UA)&&e(m).includes(l)}},set:n=>{let{id:l}=n;return(n,e)=>{let{get:a,set:t}=n,o=a(m);t(m,e?o.filter(n=>n!==l):[...o,l])}}});var v=e(85074);let C=async(n,l)=>{if(!(await fetch("/api/social/follow?id=".concat(l),{method:n?"DELETE":"PUT"})).ok)throw Error("There was a problem toggling the follow")};var k=e(9691);let N=(n,l)=>{let e=(0,k.PN)(),a={event:"ga4event",event_name:"follow_author",action:"follow_author",author_name:n,location:l,category:"follow-contributor"};return()=>e(a)},y=(n,l,e)=>{let[a,t]=(0,d.useState)(!0),{setToast:o}=(0,v.p)(),r=(0,b.d)(),s=(0,w.aw)(),[i,c]=(0,_.FV)(p({id:n})),h=(0,f.A)(),g=N(l,e),m=(0,d.useCallback)(()=>{if(!r){h(),window.location.href="".concat(u.YC.href,"?").concat(s);return}t(!1),C(i,n).then(()=>c(i)).then(()=>!i&&g()).catch(()=>o()).finally(()=>t(!0))},[r,i,n,h,s,c,o,g]);return{following:i,disabled:!a,onClick:m}},j=n=>{let{id:l,name:e,location:r,buttonStyle:s="button"}=n,{t:i}=(0,o.$G)("common"),{following:u,onClick:f,disabled:b}=y(l,e,r),w="inline"===s?"inline":"button";return u?(0,t.jsxs)("button",{className:a[w]({mode:"following"}),onClick:f,disabled:b,children:[(0,t.jsx)("span",{className:c,children:i("following")}),(0,t.jsx)("span",{className:c,children:i("unfollow")})]}):(0,t.jsx)("button",{className:a[w](),onClick:f,disabled:b,children:i("follow")})}},52084:function(n,l,e){var a=e(52322);l.Z=n=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...n,children:(0,a.jsx)("path",{d:"M462.998 325.742c0-75.526-59.998-149.797-148.419-149.797-38.906 0-75.989 13.503-104.409 39.715a153 153 0 0 0-3.17 3.009 155 155 0 0 0-3.17-3.009c-28.42-26.212-65.503-39.715-104.409-39.715-88.421 0-148.419 74.271-148.419 149.797 0 40.557 15.467 78.684 44.143 107.36l-.002-.002L161.01 599.011c12.276 12.28 28.6 19.043 45.964 19.044h.005l.022-.001.022.001h.005c17.364-.001 33.688-6.765 45.964-19.044l165.867-165.912-.002.002c28.674-28.675 44.141-66.803 44.141-107.359M383.5 397.746l-.002.002L217.63 563.66a14.9 14.9 0 0 1-10.607 4.395h-.001l-.022-.001-.022.001h-.001a14.9 14.9 0 0 1-10.607-4.395L30.503 397.749l-.002-.002C11.337 378.583 1.002 353.104 1.002 326c0-54.451 44.665-100.246 100.747-100.246 24.43 0 48.756 9.003 68.184 26.66 15.735 14.301 17.818 30.356 37.068 30.356s21.333-16.055 37.068-30.356c19.427-17.658 43.753-26.66 68.184-26.66C368.335 225.754 413 271.549 413 326c-.001 27.104-10.337 52.583-29.5 71.746"})})}}]);