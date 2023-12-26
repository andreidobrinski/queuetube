import{s as q,a as B,o as U,t as j,b as D}from"../chunks/scheduler.d90865a5.js";import{S as W,i as z,s as F,e as h,c as G,a as w,t as d,b as L,d as p,f as g,g as H,h as J,j as K,k as I,l as m,m as M,n as Q,o as X,p as P,q as E,r as v,u as O,v as R,w as y}from"../chunks/index.ccda314a.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},T={},k=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const l=e;d(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[12](null),e&&y(e,t)}}}function x(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const l=e;d(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[11](null),e&&y(e,t)}}}function ee(o){let e,n,i;var s=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){P();const l=e;d(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[10](null),e&&y(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){w(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function A(o){let e;return{c(){e=M(o[7])},l(n){e=Q(n,o[7])},m(n,i){w(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&g(e)}}}function te(o){let e,n,i,s,f;const t=[x,$],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),i=F(),c&&c.c(),s=h()},l(a){n.l(a),i=G(a),c&&c.l(a),s=h()},m(a,u){r[e].m(a,u),w(a,i,u),c&&c.m(a,u),w(a,s,u),f=!0},p(a,[u]){let b=e;e=l(a),e===b?r[e].p(a,u):(P(),d(r[b],1,1,()=>{r[b]=null}),L(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),p(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(a){f||(p(n),f=!0)},o(a){d(n),f=!1},d(a){a&&(g(i),g(s)),r[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;B(i.page.notify);let a=!1,u=!1,b=null;U(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),j().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){D[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,s=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,f,r,l,c,a,u,b,i,s,N,S,C]}class oe extends W{constructor(e){super(),z(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.e52c746f.js"),["../nodes/0.e52c746f.js","../chunks/scheduler.d90865a5.js","../chunks/index.ccda314a.js"],import.meta.url),()=>k(()=>import("../nodes/1.c4dd48dd.js"),["../nodes/1.c4dd48dd.js","../chunks/scheduler.d90865a5.js","../chunks/index.ccda314a.js","../chunks/singletons.87e63919.js","../chunks/index.68c3df23.js","../chunks/paths.7387b0ad.js"],import.meta.url),()=>k(()=>import("../nodes/2.a5e57a06.js"),["../nodes/2.a5e57a06.js","../chunks/scheduler.d90865a5.js","../chunks/index.ccda314a.js","../chunks/index.68c3df23.js","../chunks/authStore.79b3fd25.js","../chunks/paths.7387b0ad.js","../assets/2.27ab33f3.css"],import.meta.url),()=>k(()=>import("../nodes/3.c05dc228.js"),["../nodes/3.c05dc228.js","../chunks/scheduler.d90865a5.js","../chunks/index.ccda314a.js","../chunks/paths.7387b0ad.js"],import.meta.url),()=>k(()=>import("../nodes/4.687fe5e1.js"),["../nodes/4.687fe5e1.js","../chunks/scheduler.d90865a5.js","../chunks/index.ccda314a.js","../chunks/authStore.79b3fd25.js","../chunks/index.68c3df23.js","../chunks/navigation.b28ad461.js","../chunks/singletons.87e63919.js","../chunks/paths.7387b0ad.js"],import.meta.url),()=>k(()=>import("../nodes/5.7bfc0fb9.js"),["../nodes/5.7bfc0fb9.js","../chunks/scheduler.d90865a5.js","../chunks/index.ccda314a.js","../chunks/authStore.79b3fd25.js","../chunks/index.68c3df23.js","../chunks/navigation.b28ad461.js","../chunks/singletons.87e63919.js","../chunks/paths.7387b0ad.js"],import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/auth":[4],"/logout":[5]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
