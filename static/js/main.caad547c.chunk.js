(this["webpackJsonpepicore-frontend"]=this["webpackJsonpepicore-frontend"]||[]).push([[0],{45:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var c=t(27),a=t(3),i=t(2),r=t.n(i),s=t(31),o=t.n(s),u=(t(45),t(13)),d=t(20),l=t(59),j=t(64);function b(){var e=Object(d.a)(["\n  mutation {\n    createDiscount {\n      success\n      discount {\n        code\n      }\n    }\n  }\n"]);return b=function(){return e},e}var O=Object(l.a)(b()),v=function(){var e=Object(i.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(i.useState)(!1),s=Object(u.a)(r,2),o=s[0],d=s[1],l=Object(j.a)(O),b=Object(u.a)(l,2),v=b[0],h=b[1].loading;return Object(a.jsxs)("div",{className:"container",children:[h?Object(a.jsx)("p",{children:"loading..."}):t&&Object(a.jsx)("p",{className:"code",children:t}),Object(a.jsx)("button",{onClick:function(){v().then((function(e){var n,t,a,i,r;(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(t=n.createDiscount)||void 0===t?void 0:t.success)?c(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.createDiscount)||void 0===i||null===(r=i.discount)||void 0===r?void 0:r.code):d(!0)})).catch((function(){return d(!0)}))},children:Object(a.jsx)("span",{className:"text",children:"Generate Code"})}),o&&Object(a.jsx)("p",{className:"error",children:"an error occurred!"})]})},h=t(62);function f(){var e=Object(d.a)(["\n  query ($code: Int!) {\n    validateDiscount(code: $code) {\n      success\n      message\n      discount {\n        id\n        code\n        expirationDate\n      }\n    }\n  }\n"]);return f=function(){return e},e}var p=Object(l.a)(f()),x=function(){var e=Object(i.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(i.useState)(""),s=Object(u.a)(r,2),o=s[0],d=s[1],l=Object(i.useState)(!1),j=Object(u.a)(l,2),b=j[0],O=j[1],v=Object(h.a)(p),f=Object(u.a)(v,2),x=f[0],g=f[1],m=g.loading,N=g.data;Object(i.useEffect)((function(){var e,n;m||((null===N||void 0===N||null===(e=N.validateDiscount)||void 0===e?void 0:e.success)?O(!0):d(null===N||void 0===N||null===(n=N.validateDiscount)||void 0===n?void 0:n.message))}),[m,N]);return Object(a.jsx)("div",{className:"container",children:m?Object(a.jsx)("p",{children:"loading..."}):b?Object(a.jsx)("p",{className:"code",children:"Success, notification sent to user successfully"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){if(4!==t.length||!Number(t))return d("please enter a 4 digits code!");x({variables:{code:Number(t)}})},children:Object(a.jsx)("span",{children:"Validate"})}),o&&Object(a.jsx)("p",{className:"error",children:o})]})})},g=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{}),Object(a.jsx)(x,{})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),i(e),r(e)}))},N=t(36),D=t(60),S=t(61),C=t(58),k=t(35),F=Object(N.a)({uri:"https://epicore.herokuapp.com"}),w=Object(k.a)((function(e,n){var t=n.headers;return{headers:Object(c.a)(Object(c.a)({},t),{},{authorization:"supersecurepassword"})}})),y=new D.a({link:w.concat(F),cache:new S.a});o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C.a,{client:y,children:Object(a.jsx)(g,{})})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.caad547c.chunk.js.map