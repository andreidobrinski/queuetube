var f=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var n=(s,t,e)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,r=(s,t)=>{for(var e in t||(t={}))m.call(t,e)&&n(s,e,t[e]);if(a)for(var e of a(t))_.call(t,e)&&n(s,e,t[e]);return s},i=(s,t)=>p(s,h(t));import{S as d,i as g,s as v}from"../chunks/index-1a788869.js";import{a as b}from"../chunks/authStore-30b5ead7.js";import{c as o,b as k}from"../chunks/singletons-1b661bce.js";import"../chunks/index-ec931ad3.js";o.disable_scroll_handling;const S=o.goto;o.invalidate;o.prefetch;o.prefetch_routes;o.before_navigate;o.after_navigate;function $(s){const{access_token:t}=location.hash.split("#")[1].split("&").reduce((e,l)=>{const[c,u]=l.split("=");return i(r({},e),{[c]:u})},{});return t&&(b.set({token:t,isLoggedIn:!0}),S(`${k}/`)),[]}class I extends d{constructor(t){super(),g(this,t,$,null,v,{})}}export{I as default};