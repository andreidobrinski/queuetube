import{w as u}from"./index.68c3df23.js";import{a as v}from"./paths.7904b2f0.js";const m="1703224750624",R="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1},_=location.origin;function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function T(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function O(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||w(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===_&&e.hasAttribute("download");return{url:n,external:r,target:s,download:l}}function U(e){let t=null,n=null,s=null,r=null,l=null,a=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=c(o,"preload-code")),r===null&&(r=c(o,"preload-data")),t===null&&(t=c(o,"keepfocus")),n===null&&(n=c(o,"noscroll")),l===null&&(l=c(o,"reload")),a===null&&(a=c(o,"replacestate")),o=h(o);function i(b){switch(b){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[s??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(a)}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function l(a){let o;return t.subscribe(i=>{(o===void 0||n&&i!==o)&&a(o=i)})}return{notify:s,set:r,subscribe:l}}function k(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);try{const r=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==m;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:s}}function w(e,t){return e.origin!==_||!e.pathname.startsWith(t)}let g;function L(e){g=e.client}function N(e){return(...t)=>g[e](...t)}const P={url:p({}),page:p({}),navigating:u(null),updated:k()};export{I,f as P,y as S,R as a,O as b,U as c,P as d,L as e,x as f,S as g,N as h,w as i,_ as o,T as s};
