import{s as ye,n as $}from"../chunks/scheduler.d90865a5.js";import{S as xe,i as ce,g as a,s as u,h as o,K as i,c as s,k as me,a as n,f as l}from"../chunks/index.ccda314a.js";import{b as Ce}from"../chunks/paths.075c7001.js";function we(be){let r,D="About QueueTube",M,h,E="What is it?",g,p,J=`It's an app to create YouTube playlists by grouping uploads from related channels into a queue. As
	videos are released, they are automatically added to the queues you've created.`,A,f,X="Why would I use it?",I,v,Z=`It beats having to scroll your YouTube feed and manually add videos to different playlists. It's
	also more organized than a single "Watch Later" playlist for all your videos.`,Y,m,ee=`For example, you may be subscribed to YouTube channels related to video games, gardening, and
	makeup. You can create 3 different queues and when a new gardening video is released, it will be
	added to your Gardening queue. You can then play your gardening queue to get caught up on any new
	videos!`,S,b,te="How does it work?",Q,y,ne=`<li>Sign in with your Google account</li> <li>Create a queue and give it a name</li> <li>Go to the Settings to select channels that fit the queue&#39;s theme. You can always add new
		channels or edit this later.</li> <li>Sit back and let QueueTube add new videos from those channels to your queue</li> <li>Press &quot;Play All&quot; to get a YouTube playlist link containing every video in your queue. This will
		open up in the YouTube app so you can watch from your device or cast to a TV.</li> <li>Press the checkmark button next to a video to remove it from the queue</li> <li>Repeat for as many queues as you like!</li>`,z,x,le=`I recommend using the app on your phone and adding the icon to your home screen on either your <a href="https://www.macrumors.com/how-to/add-a-web-link-to-home-screen-iphone-ipad/">iOS</a>
	or
	<a href="https://www.androidauthority.com/add-website-android-iphone-home-screen-3181682/">Android</a> device.`,G,c,ae="What about my data? How is it stored and used?",W,C,oe=`QueueTube uses your Google Auth token to communicate with the YouTube API on your behalf to get
	data such as your subscriptions and a given channel's videos. Anonymized Google Analytics is used
	to get a sense of the number of users.`,j,w,ie=`All data related to your queues/videos/channels is stored in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">local storage</a> and never leaves your device. No data is sent back to QueueTube. In fact, QueueTube is a client-side
	only app and doesn&#39;t have it&#39;s own servers. QueueTube does have an export feature where you can pull
	down all of your data as plain text.`,F,T,ue="This also means that <strong>clearing your browser&#39;s cache will remove all QueueTube data.</strong>",O,_,se='See for yourself! The QueueTube codebase is open source and can be found on <a href="https://github.com/andreidobrinski/queuetube" target="_blank" rel="noopener noreferrer">GitHub</a>.',B,k,re="Who are you and why did you make this?",K,H,de='Glad you asked! I&#39;m <a href="https://andreidobrinski.com" target="_blank" rel="noopener noreferrer">Andrei</a>, a frontend developer that loves the modern web.',N,q,he=`I made QueueTube as a thank-you for my fiancée. She managed a playlist for us manually in YouTube
	and this serves to make her life a bit easier. You're welcome to use it too!`,R,P,pe="Where can I go with my feedback?",U,L,fe=`Feel free to hit me up on Twitter, I&#39;m <a href="https://twitter.com/andreidobrinski" target="_blank" rel="noopener noreferrer">@andreidobrinski</a>. You can also file an issue on the
	<a href="https://github.com/andreidobrinski/queuetube">GitHub repo.</a>`,V,d,ve="Back to app";return{c(){r=a("h1"),r.textContent=D,M=u(),h=a("h2"),h.textContent=E,g=u(),p=a("p"),p.textContent=J,A=u(),f=a("h2"),f.textContent=X,I=u(),v=a("p"),v.textContent=Z,Y=u(),m=a("p"),m.textContent=ee,S=u(),b=a("h2"),b.textContent=te,Q=u(),y=a("ol"),y.innerHTML=ne,z=u(),x=a("p"),x.innerHTML=le,G=u(),c=a("h2"),c.textContent=ae,W=u(),C=a("p"),C.textContent=oe,j=u(),w=a("p"),w.innerHTML=ie,F=u(),T=a("p"),T.innerHTML=ue,O=u(),_=a("p"),_.innerHTML=se,B=u(),k=a("h2"),k.textContent=re,K=u(),H=a("p"),H.innerHTML=de,N=u(),q=a("p"),q.textContent=he,R=u(),P=a("h2"),P.textContent=pe,U=u(),L=a("p"),L.innerHTML=fe,V=u(),d=a("a"),d.textContent=ve,this.h()},l(e){r=o(e,"H1",{class:!0,"data-svelte-h":!0}),i(r)!=="svelte-1mhcq41"&&(r.textContent=D),M=s(e),h=o(e,"H2",{"data-svelte-h":!0}),i(h)!=="svelte-my3ztu"&&(h.textContent=E),g=s(e),p=o(e,"P",{"data-svelte-h":!0}),i(p)!=="svelte-7ow5ju"&&(p.textContent=J),A=s(e),f=o(e,"H2",{"data-svelte-h":!0}),i(f)!=="svelte-1eu1ind"&&(f.textContent=X),I=s(e),v=o(e,"P",{"data-svelte-h":!0}),i(v)!=="svelte-sfnmg5"&&(v.textContent=Z),Y=s(e),m=o(e,"P",{"data-svelte-h":!0}),i(m)!=="svelte-fx9ecs"&&(m.textContent=ee),S=s(e),b=o(e,"H2",{"data-svelte-h":!0}),i(b)!=="svelte-54bp3g"&&(b.textContent=te),Q=s(e),y=o(e,"OL",{"data-svelte-h":!0}),i(y)!=="svelte-enim77"&&(y.innerHTML=ne),z=s(e),x=o(e,"P",{"data-svelte-h":!0}),i(x)!=="svelte-s4e120"&&(x.innerHTML=le),G=s(e),c=o(e,"H2",{"data-svelte-h":!0}),i(c)!=="svelte-wex7xl"&&(c.textContent=ae),W=s(e),C=o(e,"P",{"data-svelte-h":!0}),i(C)!=="svelte-ben20g"&&(C.textContent=oe),j=s(e),w=o(e,"P",{"data-svelte-h":!0}),i(w)!=="svelte-ereanl"&&(w.innerHTML=ie),F=s(e),T=o(e,"P",{"data-svelte-h":!0}),i(T)!=="svelte-wnqszx"&&(T.innerHTML=ue),O=s(e),_=o(e,"P",{"data-svelte-h":!0}),i(_)!=="svelte-194biaz"&&(_.innerHTML=se),B=s(e),k=o(e,"H2",{"data-svelte-h":!0}),i(k)!=="svelte-1edzkz9"&&(k.textContent=re),K=s(e),H=o(e,"P",{"data-svelte-h":!0}),i(H)!=="svelte-hjmc3p"&&(H.innerHTML=de),N=s(e),q=o(e,"P",{"data-svelte-h":!0}),i(q)!=="svelte-e64y7h"&&(q.textContent=he),R=s(e),P=o(e,"H2",{"data-svelte-h":!0}),i(P)!=="svelte-8s145k"&&(P.textContent=pe),U=s(e),L=o(e,"P",{"data-svelte-h":!0}),i(L)!=="svelte-1rx2k4d"&&(L.innerHTML=fe),V=s(e),d=o(e,"A",{href:!0,"data-svelte-h":!0}),i(d)!=="svelte-111ekbl"&&(d.textContent=ve),this.h()},h(){me(r,"class","mdc-typography--headline2"),me(d,"href",`${Ce}/`)},m(e,t){n(e,r,t),n(e,M,t),n(e,h,t),n(e,g,t),n(e,p,t),n(e,A,t),n(e,f,t),n(e,I,t),n(e,v,t),n(e,Y,t),n(e,m,t),n(e,S,t),n(e,b,t),n(e,Q,t),n(e,y,t),n(e,z,t),n(e,x,t),n(e,G,t),n(e,c,t),n(e,W,t),n(e,C,t),n(e,j,t),n(e,w,t),n(e,F,t),n(e,T,t),n(e,O,t),n(e,_,t),n(e,B,t),n(e,k,t),n(e,K,t),n(e,H,t),n(e,N,t),n(e,q,t),n(e,R,t),n(e,P,t),n(e,U,t),n(e,L,t),n(e,V,t),n(e,d,t)},p:$,i:$,o:$,d(e){e&&(l(r),l(M),l(h),l(g),l(p),l(A),l(f),l(I),l(v),l(Y),l(m),l(S),l(b),l(Q),l(y),l(z),l(x),l(G),l(c),l(W),l(C),l(j),l(w),l(F),l(T),l(O),l(_),l(B),l(k),l(K),l(H),l(N),l(q),l(R),l(P),l(U),l(L),l(V),l(d))}}}class He extends xe{constructor(r){super(),ce(this,r,null,we,ye,{})}}export{He as component};
