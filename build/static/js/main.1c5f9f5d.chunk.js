(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{65:function(e,a,t){},67:function(e,a,t){},77:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),s=t.n(r),i=(t(65),t(20)),o=t.n(i),l=t(32),j=t(12),b=t(15),d=t(121),p=t(4),u=(t(67),t(129)),h=t(123),O=t(124),x=t(125),g=t(126),m=t(128),f=t(130),v=t(127),S=t(36),C=t(35),y=t(50),N=t.n(y),k=t(51),w=t.n(k),F=t(52),D=t.n(F),T=t(49),B=t.n(T),E=t(2),I=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:C.a[500]}}}));function L(e){var a=e.title,t=e.calories,n=e.image,r=e.ingredients,s=e.caution,i=I(),o=c.a.useState(!1),l=Object(j.a)(o,2),d=l[0],C=l[1];return Object(E.jsx)("div",{className:"mainDivcol-md-auto",children:Object(E.jsxs)(u.a,{className:i.root,children:[Object(E.jsx)(h.a,{avatar:Object(E.jsx)(f.a,{"aria-label":"recipe",className:i.avatar,children:"R"}),action:Object(E.jsx)(v.a,{"aria-label":"settings",children:Object(E.jsx)(B.a,{})}),title:a.toUpperCase(),subheader:(new Date).toString().split(" ").splice(1,3).join(" ")}),Object(E.jsx)(O.a,{className:i.media,image:n,title:"Paella dish"}),Object(E.jsx)(x.a,{children:Object(E.jsxs)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(E.jsx)("strong",{children:"Calories:"}),t,Object(E.jsx)("br",{}),Object(E.jsx)("strong",{children:"Caution:"}),s]})}),Object(E.jsxs)(g.a,{disableSpacing:!0,children:[Object(E.jsx)(v.a,{"aria-label":"add to favorites",children:Object(E.jsx)(N.a,{})}),Object(E.jsx)(v.a,{"aria-label":"share",children:Object(E.jsx)(w.a,{})}),Object(E.jsx)(v.a,{className:Object(p.a)(i.expand,Object(b.a)({},i.expandOpen,d)),onClick:function(){C(!d)},"aria-expanded":d,"aria-label":"show more",children:Object(E.jsx)(D.a,{})})]}),Object(E.jsx)(m.a,{in:d,timeout:"auto",unmountOnExit:!0,children:Object(E.jsxs)(x.a,{children:[Object(E.jsx)(S.a,{paragraph:!0,children:Object(E.jsx)("strong",{children:Object(E.jsx)("em",{children:"Ingredients:"})})}),r.map((function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(S.a,{paragraph:!0,children:e.text}),Object(E.jsx)(S.a,{paragraph:!0})]})}))]})})]})})}t(96),t(77);var P=t.p+"static/media/burger.ed59f72a.png",A=(t(55),Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})));var J=function(){var e=A(),a=Object(n.useState)([]),t=Object(j.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)(" "),i=Object(j.a)(s,2),b=i[0],d=i[1],p=Object(n.useState)("chicken"),u=Object(j.a)(p,2),h=u[0],O=u[1],x="https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("15c3a3ec","&app_key=").concat("d1abd6d091e5106805f2ea52f50c56e7");return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t.hits),console.log(t.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),Object(E.jsxs)("div",{className:e.root,children:[Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(E.jsxs)("div",{class:"container-fluid",children:[Object(E.jsx)("img",{className:"toresize",src:P}),Object(E.jsx)("a",{class:"navbar-brand",href:"#",children:Object(E.jsx)("strong",{children:"Recipe App"})}),Object(E.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(E.jsx)("span",{class:"navbar-toggler-icon"})}),Object(E.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(E.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(b),d("")},class:"d-flex",children:[Object(E.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search",value:b,onChange:function(e){d(e.target.value)},"aria-label":"Search"}),Object(E.jsx)("button",{class:"btn btn-outline-success",type:"search",children:"Search"})]})]})]})}),Object(E.jsx)("div",{className:"grid container",children:c.map((function(e){return Object(E.jsx)(L,{title:e.recipe.label,caution:e.recipe.cautions,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]}),Object(E.jsxs)("div",{className:"copy",children:["\xa9 Made By ",Object(E.jsx)("strong",{children:"Sridhu"})]})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,132)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(J,{})}),document.getElementById("root")),M()}},[[97,1,2]]]);
//# sourceMappingURL=main.1c5f9f5d.chunk.js.map