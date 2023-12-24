"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,r,t){t.r(r);var n=t(439),a=t(791),s=t(689),c=t(87),i=t(882),u=t(184);r.default=function(){var e=(0,s.UO)().id,r=(0,a.useState)(null),t=(0,n.Z)(r,2),o=t[0],l=t[1],p=(0,s.TH)().state;if((0,a.useEffect)((function(){(0,i.PI)(e).then((function(e){l(e)}))}),[e]),o){var h=o.poster_path,f=o.title,v=o.vote_average,d=o.overview;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.rU,{className:"buttons",to:p?p.from:"/",children:"Back"}),(0,u.jsxs)("div",{className:"det-wrapper",children:[(0,u.jsx)("div",{className:"det-img-wrapper",children:(0,u.jsx)("img",{src:h?"https://image.tmdb.org/t/p/w500/".concat(h):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:f})}),(0,u.jsxs)("div",{className:"det-info-wrapper",children:[(0,u.jsx)("h1",{children:f}),(0,u.jsxs)("h2",{children:["User average score: ",v]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:d})]})]}),(0,u.jsxs)("ul",{className:"more-list",children:[(0,u.jsx)("li",{className:"more-item",children:(0,u.jsx)(c.rU,{to:"cast",state:p,children:"Cast"})}),(0,u.jsx)("li",{className:"more-item",children:(0,u.jsx)(c.rU,{to:"reviews",state:p,children:"Reviews"})})]}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("span",{className:"loader"}),children:(0,u.jsx)(s.j3,{})})]})}}},882:function(e,r,t){t.d(r,{PI:function(){return h},eF:function(){return l},k7:function(){return f},pn:function(){return p},pz:function(){return o}});var n=t(861),a=t(683),s=t(757),c=t.n(s),i=t(294),u=function(e,r){return{method:"GET",url:"".concat("https://api.themoviedb.org/3","/").concat(e),params:(0,a.Z)({language:"en-US"},r),headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM")}}},o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u("movie/".concat(r,"/credits"),{}),e.prev=1,e.next=4,i.Z.request(t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.cast);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error with getting cast",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u("search/movie",{query:"".concat(r),include_adult:"false",page:"1"}),e.prev=1,e.next=4,i.Z.request(t);case 4:return n=e.sent,a=n.data.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error with getting query films",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u("movie/".concat(r,"/reviews"),{}),e.prev=1,e.next=4,i.Z.request(t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error with getting review",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u("movie/".concat(r),{}),e.prev=1,e.next=4,i.Z.request(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("Error with getting single film",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u("trending/movie/day",{}),e.prev=1,e.next=4,i.Z.request(r);case 4:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error with getting trend films",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.1d4a542a.chunk.js.map