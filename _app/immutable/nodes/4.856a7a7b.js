import{s as i}from"../chunks/scheduler.d90865a5.js";import{S as l,i as m}from"../chunks/index.ccda314a.js";import{a as u}from"../chunks/authStore.79b3fd25.js";import{g as c}from"../chunks/navigation.91f65963.js";import{b as p}from"../chunks/paths.cc5b2f44.js";function f(o){let t=null,e=null;return e=location.hash.split("#")[1].split("&").reduce((s,n)=>{const[r,a]=n.split("=");return{...s,[r]:a}},{}),t=e==null?void 0:e.access_token,t&&(u.set({token:t,isLoggedIn:!0}),c(`${p}/`)),[]}class _ extends l{constructor(t){super(),m(this,t,f,null,i,{})}}export{_ as component};
