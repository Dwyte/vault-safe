(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),o=a.n(c),u=(a(51),a(52),a(20)),l=a(2),i=a.n(l),s=a(6),f=a(8),p=function(e){var t=e.todo,a=e.favoriteTodo,n=e.flipDoneTodo,c=e.removeTodo,o={textDecoration:t.completed?"line-through":"none"},u=t._id,l=t.title,i=t.completed,s=t.favorite;return r.a.createElement("div",{className:"todo mb"},r.a.createElement("span",{style:o},l),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return n(u)}},r.a.createElement("i",{className:i?"fas fa-undo-alt":"fas fa-check-square"}))," ",r.a.createElement("button",{onClick:function(){return a(u)}},r.a.createElement("i",{className:s?"fas fa-star":"far fa-star"}))," ",r.a.createElement("button",{onClick:function(){return c(u)}},r.a.createElement("i",{className:"fas fa-trash"}))))},m=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(f.a)(a,2),o=c[0],u=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&(t(o),u(""))}},r.a.createElement("input",{type:"text",className:"input",placeholder:"Enter anything, todos, notes, secrets, anything! (max 45)",maxLength:"45",autoFocus:!0,value:o,onChange:function(e){return u(e.target.value)}}))},v=a(11),d=a.n(v),h=a(18),b=a.n(h),g=a(19),E=a.n(g),x={get:E.a.get,put:E.a.put,post:E.a.post,delete:E.a.delete},S=a(43)["apiEndpoint-production"],w=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(S,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat(S,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat(S,"/get/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),n={headers:{"x-auth-token":a}},e.next=4,x.put(S,t,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),a={headers:{"x-auth-token":t}},e.next=4,x.delete(S,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=function(e){var t=e.className,a=e.onClick,n=e.href,c=e.label;return r.a.createElement("a",{className:t,onClick:a,href:n},r.a.createElement("small",null,c))},C=a(27),V=a.n(C),D=function(e){var t=e.className,a=e.onClick,n=e.fa;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:t,onClick:a},r.a.createElement("i",{className:n}))," ")},I=function(e){var t=e.filters,a=e.filterIndex,n=e.isAsc,c=e.setFilter,o=e.setSort;return r.a.createElement("div",{className:"nav"},t.map(function(e){return r.a.createElement(D,{key:t.indexOf(e),className:t[a]===e?"active":"",onClick:function(){return c(t.indexOf(e))},fa:e.fa})}),r.a.createElement(D,{className:"active",onClick:function(){return o(n?"desc":"asc")},fa:n?"fas fa-sort-alpha-down":"fas fa-sort-alpha-up"}))},A=d.a.AES,J=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(0),v=Object(f.a)(l,2),h=v[0],g=v[1],E=[{fa:"fas fa-globe-americas",filterMethod:null},{fa:"fas fa-star",filterMethod:function(e){return e.favorite}},{fa:"fa fa-th-list",filterMethod:function(e){return!e.completed}},{fa:"fas fa-check-square",filterMethod:function(e){return e.completed}}],x=Object(n.useState)("asc"),S=Object(f.a)(x,2),w=S[0],y=S[1];Object(n.useEffect)(function(){var e=C(),t=e.vault,a=e.vaultKey,n=JSON.parse(A.decrypt(t,a).toString(d.a.enc.Utf8));o(n)},[]);var O=function(){var e=Object(s.a)(i.a.mark(function e(t){var a,n,r,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(),n=a.auth,r=a.vault,c=a.vaultKey,r=A.encrypt(JSON.stringify(t),c).toString(),e.prev=2,e.next=5,k({auth:n,vault:r});case 5:localStorage.setItem("currentVault",JSON.stringify({auth:n,vault:r,vaultKey:c})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),C=function(){return JSON.parse(localStorage.getItem("currentVault"))},D=function(e){var t=Object(u.a)(c),a=t.find(function(t){return t._id===e});a.completed=!a.completed,o(t),O(t)},J=function(e){var t=Object(u.a)(c),a=t.find(function(t){return t._id===e});a.favorite=!a.favorite,o(t),O(t)},T=function(e){var t=Object(u.a)(c),a=t.find(function(t){return t._id===e});t.splice(t.indexOf(a),1),o(t),O(t)},F=function(){localStorage.clear()},_=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j();case 4:F(),alert("Vault succesfuly deleted from the database."),window.location="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),M=V.a.filter(c,E[h].filterMethod),B=V.a.orderBy(M,["title"],[w]),K="asc"===w;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{filters:E,filterIndex:h,isAsc:K,setFilter:g,setSort:y}),B.map(function(e,t){return r.a.createElement(p,{key:t,todo:e,flipDoneTodo:D,favoriteTodo:J,removeTodo:T})}),r.a.createElement(m,{addTodo:function(e){var t={_id:b()(8),title:e,completed:!1},a=[].concat(Object(u.a)(c),[t]);o(a),O(a)}}),r.a.createElement(N,{className:"float-right",onClick:_,href:"/login",label:"Delete Vault"}),r.a.createElement(N,{onClick:F,href:"/login",label:"Exit Vault"}))},T=a(12),F=d.a.SHA256,_=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),l=Object(f.a)(u,2),p=l[0],m=l[1],v=function(){var e=Object(s.a)(i.a.mark(function e(t){var a,n,r,o,u,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=F(c+p).toString(),n=F(a+p).toString(),e.prev=3,e.next=6,O(n);case 6:r=e.sent,o=r.data,u=o.token,l=o.vault,d({auth:n,vaultKey:a,vault:l}),localStorage.setItem("token",u),window.location.replace("/vault"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),alert("Vault not found");case 18:case"end":return e.stop()}},e,null,[[3,15]])}));return function(t){return e.apply(this,arguments)}}(),d=function(e){e=JSON.stringify(e),localStorage.setItem("currentVault",e)};return r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{type:"text",className:"input mb",placeholder:"Username",value:c,onChange:function(e){return o(e.target.value)},autoFocus:!0}),r.a.createElement("input",{type:"password",className:"input mb",placeholder:"Password",value:p,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{className:"submit",type:"submit",value:"Open Vault"}),r.a.createElement(N,{href:"/register",label:"Don't have a vault yet?"}))},M=d.a.SHA256,B=d.a.AES,K=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),l=Object(f.a)(u,2),p=l[0],m=l[1],v=function(){var t=Object(s.a)(i.a.mark(function t(a){var n,r,o,u,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=M(c).toString(),t.next=4,y(n);case 4:if(!t.sent.data){t.next=8;break}return t.abrupt("return",alert("Vault with username already exists."));case 8:return r=M(c+p).toString(),o=M(r+p).toString(),u=B.encrypt(JSON.stringify([{_id:b()(8),title:"Welcome to VaultSafe"},{_id:b()(8),title:"Your secrets are safe on the cloud!"}]),r).toString(),l={userHash:n,auth:o,vault:u},t.prev=12,t.next=15,w(l);case 15:alert("Vault created"),e.history.push("/login"),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(12),alert(t.t0);case 22:case"end":return t.stop()}},t,null,[[12,19]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{type:"text",className:"input mb",placeholder:"Username",value:c,onChange:function(e){return o(e.target.value)},autoFocus:!0}),r.a.createElement("input",{type:"password",className:"input mb",placeholder:"Password",value:p,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{className:"submit",type:"submit",value:"Create Vault"}),r.a.createElement(N,{href:"/login",label:"Already have a vault?"}))},H=function(){return r.a.createElement("footer",{className:"container"},r.a.createElement("small",null,"VaultSafe | ",r.a.createElement("a",{href:"https://github.com/Dwyte/vaultSafe"},"About")))},U=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},Boolean(localStorage.getItem("currentVault"))?r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/vault",component:J}),r.a.createElement(T.a,{from:"/",to:"/vault"})):r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/login",component:_}),r.a.createElement(T.b,{path:"/register",component:K}),r.a.createElement(T.a,{form:"/vault",exact:!0,to:"/login"}))),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(26);a(99);o.a.render(r.a.createElement(W.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e){e.exports={"apiEndpoint-production":"/api/vaults","apiEndpoint-development":"http://localhost:4200/api/vaults"}},46:function(e,t,a){e.exports=a(100)},51:function(e,t,a){},52:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.7b7567fb.chunk.js.map