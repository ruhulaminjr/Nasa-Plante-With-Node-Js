(this["webpackJsonpnasa-fe"]=this["webpackJsonpnasa-fe"]||[]).push([[0],{207:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(31),s=n.n(a),i=n(19),r=n(3),l=n(20),o=n(6),u=n(14),d=n(7),h=n.n(d),j="http://localhost:5000";function b(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/getplanets"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useCallback)(Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){s()}),[s]),console.log(n),n};var w=function(e,t,n){var a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],r=s[1],o=Object(c.useState)(!1),d=Object(l.a)(o,2),j=d[0],b=(d[1],Object(c.useCallback)(Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[]));Object(c.useEffect)((function(){b()}),[b]);var m=Object(c.useCallback)(function(){var e=Object(u.a)(h.a.mark((function e(t){var c,a,s,i,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=new FormData(t.target),a=new Date(c.get("launch-day")),s=c.get("mission-name"),i=c.get("rocket-name"),r=c.get("planets-selector"),e.next=8,O({launchDate:a,mission:s,rocket:i,target:r});case 8:e.sent,!1,n();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b,e,n]),x=Object(c.useCallback)(function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:e.sent,!1,n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b,t,n]);return{launches:i,isPendingLaunch:j,submitLaunch:m,abortLaunch:x}},k=n(17),N=n(23),S=n(0),L=["classes","className","children"],A=Object(r.withStyles)((function(){return{root:{margin:"0 auto",maxWidth:800},"@media (max-width: 800px)":{root:{margin:"0 12px"}}}}))((function(e){var t=e.classes,n=e.className,c=e.children,a=Object(N.a)(e,L);return Object(S.jsx)("div",Object(k.a)(Object(k.a)({className:"".concat(t.root," ").concat(n)},a),{},{children:c}))})),D=["children","sounds","onClick"],T=Object(r.withSounds)()((function(e){var t=e.children,n=e.sounds,c=e.onClick,a=Object(N.a)(e,D);return Object(S.jsx)("span",Object(k.a)(Object(k.a)({},a),{},{onClick:function(e){n.click&&n.click.play(),c&&c(e)},children:t}))})),C=["classes","onNav"],P=Object(r.withStyles)((function(e){return{root:{display:"flex",flexDirection:"row",lineHeight:"80px"},logo:{display:"inherit",marginTop:"15px"},nav:{display:"inherit"},banner:{display:"inherit",fontWeight:"bold",marginLeft:"10px",marginRight:"15px",fontSize:28},clickable:{fontSize:21,"& i":{marginRight:e.padding/2,fontSize:24}},link:{color:e.color.content,textDecoration:"none"},button:{padding:[0,e.padding/2]},"@media (max-width: 800px)":{logo:{display:"none"},img:{display:"none"},banner:{display:"none"},button:{padding:[0,8]},clickable:{fontSize:16}}}}))((function(e){var t=e.classes,n=e.onNav,c=Object(N.a)(e,C);return Object(S.jsx)(r.Header,{animate:!0,children:Object(S.jsxs)(A,Object(k.a)(Object(k.a)({className:t.root},c),{},{children:[Object(S.jsx)("img",{src:"/favicon.png",alt:"",className:t.img,style:{margin:"15px 10px 15px 0",height:"50px",width:"auto"}}),Object(S.jsx)(r.Logo,{animate:!0,size:50,className:t.logo,layer:"header"}),Object(S.jsx)(r.Words,{animate:!0,className:t.banner,children:"NASA Mission Control"}),Object(S.jsxs)("nav",{className:"".concat(t.nav),children:[Object(S.jsx)(T,{className:t.clickable,onClick:n,children:Object(S.jsx)(r.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(S.jsxs)(i.b,{className:t.link,to:"/launch",children:[Object(S.jsx)("i",{className:"material-icons",children:"check_circle_outline"}),"Launch"]})})}),Object(S.jsx)(T,{className:t.clickable,onClick:n,children:Object(S.jsx)(r.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(S.jsxs)(i.b,{className:t.link,to:"/upcoming",children:[Object(S.jsx)("i",{className:"material-icons",children:"update"}),"Upcoming"]})})}),Object(S.jsx)(T,{className:t.clickable,onClick:n,children:Object(S.jsx)(r.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(S.jsxs)(i.b,{className:t.link,to:"/history",children:[Object(S.jsx)("i",{className:"material-icons",children:"history"}),"History"]})})})]})]}))})})),E=function(){return Object(S.jsx)(r.Footer,{animate:!0,children:Object(S.jsx)(A,{children:Object(S.jsx)(r.Paragraph,{style:{fontSize:14,margin:"10px 0"},children:"This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only."})})})},F=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.planets)||void 0===t?void 0:t.map((function(e){return Object(S.jsx)("option",{value:e.kepler_name,children:e.kepler_name},e.kepler_name)}))}),[e.planets]),n=(new Date).toISOString().split("T")[0];return Object(S.jsxs)(r.Appear,{id:"launch",animate:!0,show:e.entered,children:[Object(S.jsx)(r.Paragraph,{children:"Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets."}),Object(S.jsx)(r.Paragraph,{children:"Only confirmed planets matching the following criteria are available for the earliest scheduled missions:"}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Planetary radius < 1.6 times Earth's radius"}),Object(S.jsx)("li",{children:"Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value"})]}),Object(S.jsxs)("form",{onSubmit:e.submitLaunch,style:{display:"inline-grid",gridTemplateColumns:"auto auto",gridGap:"10px 20px"},children:[Object(S.jsx)("label",{htmlFor:"launch-day",children:"Launch Date"}),Object(S.jsx)("input",{type:"date",id:"launch-day",name:"launch-day",min:n,max:"2040-12-31",defaultValue:n}),Object(S.jsx)("label",{htmlFor:"mission-name",children:"Mission Name"}),Object(S.jsx)("input",{type:"text",id:"mission-name",name:"mission-name"}),Object(S.jsx)("label",{htmlFor:"rocket-name",children:"Rocket Type"}),Object(S.jsx)("input",{type:"text",id:"rocket-name",name:"rocket-name",defaultValue:"Explorer IS1"}),Object(S.jsx)("label",{htmlFor:"planets-selector",children:"Destination Exoplanet"}),Object(S.jsx)("select",{id:"planets-selector",name:"planets-selector",children:t}),Object(S.jsx)(T,{children:Object(S.jsx)(r.Button,{animate:!0,show:e.entered,type:"submit",layer:"success",disabled:e.isPendingLaunch,children:"Launch Mission \u2714"})}),e.isPendingLaunch&&Object(S.jsx)(r.Loading,{animate:!0,small:!0})]})]})},M=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.launches)||void 0===t?void 0:t.filter((function(e){return!e.upcoming})).map((function(e){var t;return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(S.jsx)("span",{style:{color:e.success?"greenyellow":"red"},children:"\u2588"})}),Object(S.jsx)("td",{children:e.flightNumber}),Object(S.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(S.jsx)("td",{children:e.mission}),Object(S.jsx)("td",{children:e.rocket}),Object(S.jsx)("td",{children:null===(t=e.customers)||void 0===t?void 0:t.join(", ")})]},String(e.flightNumber))}))}),[e.launches]);return Object(S.jsx)("article",{id:"history",children:Object(S.jsxs)(r.Appear,{animate:!0,show:e.entered,children:[Object(S.jsx)(r.Paragraph,{children:"History of mission launches including SpaceX launches starting from the year 2006."}),Object(S.jsx)(r.Table,{animate:!0,children:Object(S.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{style:{width:"2rem"}}),Object(S.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(S.jsx)("th",{style:{width:"9rem"},children:"Date"}),Object(S.jsx)("th",{children:"Mission"}),Object(S.jsx)("th",{style:{width:"7rem"},children:"Rocket"}),Object(S.jsx)("th",{children:"Customers"})]})}),Object(S.jsx)("tbody",{children:t})]})})]})})},H=Object(r.withStyles)((function(){return{link:{color:"red",textDecoration:"none"}}}))((function(e){var t=e.entered,n=e.launches,a=e.classes,s=e.abortLaunch,i=Object(c.useMemo)((function(){return null===n||void 0===n?void 0:n.filter((function(e){return e.upcoming})).map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(S.jsx)(T,{style:{color:"red"},children:Object(S.jsx)(r.Link,{className:a.link,onClick:function(){return s(e.flightNumber)},children:"\u2716"})})}),Object(S.jsx)("td",{children:e.flightNumber}),Object(S.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(S.jsx)("td",{children:e.mission}),Object(S.jsx)("td",{children:e.rocket}),Object(S.jsx)("td",{children:e.target})]},String(e.flightNumber))}))}),[n,s,a.link]);return Object(S.jsxs)(r.Appear,{id:"upcoming",animate:!0,show:t,children:[Object(S.jsx)(r.Paragraph,{children:"Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets."}),Object(S.jsx)(r.Words,{animate:!0,children:"Warning! Clicking on the \u2716 aborts the mission."}),Object(S.jsx)(r.Table,{animate:!0,show:t,children:Object(S.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{style:{width:"3rem"}}),Object(S.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(S.jsx)("th",{style:{width:"10rem"},children:"Date"}),Object(S.jsx)("th",{style:{width:"11rem"},children:"Mission"}),Object(S.jsx)("th",{style:{width:"11rem"},children:"Rocket"}),Object(S.jsx)("th",{children:"Destination"})]})}),Object(S.jsx)("tbody",{children:i})]})})]})})),z=Object(r.withSounds)()(Object(r.withStyles)((function(){return{content:{display:"flex",flexDirection:"column",height:"100vh",margin:"auto"},centered:{flex:1,paddingTop:"20px",paddingBottom:"10px"}}}))((function(e){var t=e.sounds,n=e.classes,a=Object(c.useState)(!0),s=Object(l.a)(a,2),i=s[0],u=s[1],d=w((function(){return t.success&&t.success.play()}),(function(){return t.abort&&t.abort.play()}),(function(){return t.warning&&t.warning.play()})),h=d.launches,j=d.isPendingLaunch,b=d.submitLaunch,m=d.abortLaunch,p=v();return Object(S.jsxs)("div",{className:n.content,children:[Object(S.jsx)(P,{onNav:function(){u(!1),setTimeout((function(){u(!0)}),600)}}),Object(S.jsx)(A,{className:n.centered,children:Object(S.jsx)(r.Frame,{animate:!0,show:i,corners:4,style:{visibility:i?"visible":"hidden"},children:function(e){return Object(S.jsx)("div",{style:{padding:"20px"},children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",children:Object(S.jsx)(F,{entered:e.entered,planets:p,submitLaunch:b,isPendingLaunch:j})}),Object(S.jsx)(o.a,{exact:!0,path:"/launch",children:Object(S.jsx)(F,{entered:e.entered,planets:p,submitLaunch:b,isPendingLaunch:j})}),Object(S.jsx)(o.a,{exact:!0,path:"/upcoming",children:Object(S.jsx)(H,{entered:e.entered,launches:h,abortLaunch:m})}),Object(S.jsx)(o.a,{exact:!0,path:"/history",children:Object(S.jsx)(M,{entered:e.entered,launches:h})})]})})}})}),Object(S.jsx)(E,{})]})}))),W={small:"/img/background-small.jpg",medium:"/img/background-medium.jpg",large:"/img/background-large.jpg"},R="/img/glow.png",_={shared:{volume:.5},players:{click:{sound:{src:["/sound/click.mp3"]},settings:{oneAtATime:!0}},typing:{sound:{src:["/sound/typing.mp3"]},settings:{oneAtATime:!0}},deploy:{sound:{src:["/sound/deploy.mp3"]},settings:{oneAtATime:!0}},success:{sound:{src:["/sound/success.mp3"],volume:.2},settings:{oneAtATime:!0}},abort:{sound:{src:["/sound/abort.mp3"]},settings:{oneAtATime:!0}},warning:{sound:{src:["/sound/warning.mp3"]},settings:{oneAtATime:!0}}}},B={color:{content:"#a1ecfb"},padding:20,responsive:{small:600,medium:800,large:1200},typography:{headerFontFamily:'"Titillium Web", "sans-serif"'}},I=function(){return Object(S.jsx)(r.ThemeProvider,{theme:Object(r.createTheme)(B),children:Object(S.jsx)(r.SoundsProvider,{sounds:Object(r.createSounds)(_),children:Object(S.jsx)(r.Arwes,{animate:!0,background:W.large,pattern:R,children:function(e){return Object(S.jsx)(i.a,{children:Object(S.jsx)(z,{show:e.entered})})}})})})};s.a.render(Object(S.jsx)(I,{}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.2bb79bf7.chunk.js.map