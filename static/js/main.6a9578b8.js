(()=>{"use strict";var e={8443:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(2101),o=r(8951),a=r(3877),l=r(8372),f=r(806),s=r(5409);function i(){const[e,t]=(0,n.useState)(""),[r,l]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{fetch("https://raw.githubusercontent.com/hussain2125/json-db/main/db.json").then((e=>e.json())).then((e=>{t(e.name),l(!1)})).catch((e=>{console.error("Error fetching data:",e),l(!1)}))}),[]),r?(0,s.jsx)(a.default,{style:u.container,children:(0,s.jsx)(f.default,{size:"large",color:"#0000ff"})}):(0,s.jsx)(a.default,{style:u.container,children:(0,s.jsxs)(o.default,{style:u.nameText,children:["Hello, ",e,"!"]})})}const u=l.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0"},nameText:{fontSize:30,fontWeight:"bold",color:"#333"}})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],f=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(f=!1,a<l&&(l=a));if(f){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,f,s]=n,i=0;if(l.some((t=>0!==e[t]))){for(o in f)r.o(f,o)&&(r.m[o]=f[o]);if(s)var u=s(r)}for(t&&t(n);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[514],(()=>r(1671)));n=r.O(n)})();
//# sourceMappingURL=main.6a9578b8.js.map