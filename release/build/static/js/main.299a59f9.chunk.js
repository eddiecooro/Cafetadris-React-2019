(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),i=(n(70),n(6)),u=n(7),l=n(9),s=n(8),h=n(10),f=n(109),d=(n(71),n(25)),p=n(20),g=n(107),m=n(12);function v(){var e=Object(d.a)(["\n  padding: 15px;\n  &:hover {\n    cursor: pointer;\n    background-color: #131118;\n  }\n  & * {\n    color: white;\n  }\n  & a:link,\n  & a:active,\n  & a:visited {\n    text-decoration: none;\n  }\n"]);return v=function(){return e},e}var b=p.b.li(v());function O(){var e=Object(d.a)(["",""]);return O=function(){return e},e}function E(){var e=Object(d.a)(["\n          display: flex;\n          flex-direction: row;\n          list-style: none;\n          padding-left: 0px;\n          background-color: #09070e;\n          margin: 0px;\n        "]);return E=function(){return e},e}var y=function(e){var t=e.AuthComponent,n=e.UnauthComponent;return m.a.isUserLoggedIn()?t:n},j=function(e){return a.a.createElement("nav",null,a.a.createElement(w,{_css2:Object(p.a)(E())},a.a.createElement(b,null,a.a.createElement(y,{AuthComponent:a.a.createElement(g.a,{to:"/dashboard"},"Dashboard"),UnauthComponent:a.a.createElement(g.a,{to:"/login"},"Login")})),a.a.createElement(b,null,a.a.createElement(g.a,{to:"/categories"},"Categories"))))},w=Object(p.b)("ul")(O(),function(e){return e._css2}),k=(n(37),n(59)),L=n(16),S=(a.a.Component,n(108)),C=n(27),A=(r.Component,function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e){console.log("This is error",e)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("div",null,a.a.createElement("h2",null,"Oops! Error happened")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.Component)),I=n(39),z=n(23),P=n(14),x=n(62),T={categoriesList:[],error:null,isLoading:!1},_=Object(z.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return Object(x.a)(e,function(e){switch(t.type){case P.a:e.isLoading=!0;break;case P.c:e.isLoading=!1,e.categoriesList=e.categoriesList.concat(t.payload.categories);break;case P.b:e.isLoading=!1,e.error=t.payload.error}})},slider:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.d:return t.payload.value;default:return e}}}),D=Object(z.d)(_,Object(z.a)(function(e){return function(t){return function(n){return"function"===typeof n?n(e.dispatch,e.getState):t(n)}}})),R=n(28),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(S.a,{ref:R.b},a.a.createElement(C.a,{store:D},a.a.createElement("div",{className:"App"},a.a.createElement(j,null),a.a.createElement(A,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(f.a,null,Object(I.a)(I.b)))))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},12:function(e,t,n){"use strict";var r=n(18),a={isUserLoggedIn:function(){return!!localStorage.getItem("access-token")},getToken:function(){return localStorage.getItem("access-token")},login:function(e){return Object(r.c)(e),localStorage.setItem("access-token",e)},logout:function(){return Object(r.b)(),localStorage.removeItem("access-token")}};Object(r.c)(a.getToken()),t.a=a},14:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c});var r="LOAD_CATEGORIES",a="LOAD_CATEGORIES_SUCCESS",o="LOAD_CATEGORIES_FAIL",c="SET_SLIDER_VALUE"},18:function(e,t,n){"use strict";var r=n(56),a=n.n(r),o=n(28),c=n(12);n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l});var i=a.a.create({baseURL:"https://api.spotify.com/v1/"});t.a=i;i.interceptors.response.use(void 0,function(e){return 401===e.response.status&&(c.a.logout(),Object(o.a)("/login")),Promise.reject(e)});var u=function(e){i.defaults.headers.Authorization="Bearer ".concat(e)},l=function(){delete i.defaults.headers.Authorization}},28:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=null,a=function(e){r=e},o=function(e){r.history.push(e)}},37:function(e,t,n){"use strict";var r=n(32),a=n(0),o=n.n(a),c=n(93),i=n(106),u=n(12);t.a=function(e){var t=e.component,n=Object(r.a)(e,["component"]);return o.a.createElement(c.a,Object.assign({},n,{render:function(e){return u.a.isUserLoggedIn()?o.a.createElement(t,e):o.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}},39:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(93),c=n(37),i=n(6),u=n(7),l=n(9),s=n(8),h=n(10),f=n(107),d=n(34),p=n(18),g="".concat("https://api.spotify.com","/v1"),m={categories:function(){var e="".concat(g,"/browse/categories");return{getAll:function(){return{url:"".concat(e,"/"),method:"GET"}},getOne:function(t){return{url:"".concat(e,"/").concat(t),method:"GET"}},getPlaylists:function(t){return{url:"".concat(e,"/").concat(t,"/playlists"),method:"GET"}}}}()},v={getAll:{url:"/browse/categories",method:"GET"}},b=n(12);function O(e,t){var n=b.a.getToken();return fetch(e,Object(d.a)({headers:Object(d.a)({},t&&t.headers||{},{Authorization:"Bearer ".concat(n)})},t))}var E={getAll:function(){return p.a.get(v.getAll.url)},getOne:function(e){return O(m.categories.getOne(e).url).then(function(e){return e.json()})},getPlaylists:function(e){return O(m.categories.getPlaylists(e).url).then(function(e){return e.json()})}},y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!0,error:!1,icons:[],playlists:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.categoryId;Promise.all([E.getOne(t).then(function(t){e.setState({icons:t.icons})}),E.getPlaylists(t).then(function(t){return e.setState({playlists:t.playlists.items})})]).then(function(t){return e.setState({loading:!1})}).catch(function(t){return e.setState({err:t})})}},{key:"render",value:function(){if(this.state.err)return a.a.createElement("div",null,"Error!");if(this.state.loading)return a.a.createElement("div",null,a.a.createElement("p",null,"Loading"));var e=this.state.icons[0];return a.a.createElement("div",null,a.a.createElement("img",{style:{height:e.height,width:e.width},src:e.url}),a.a.createElement("ul",null,this.state.playlists.map(function(e){return a.a.createElement("div",{key:e.id},a.a.createElement(f.a,{to:"/playlists/".concat(e.id)},e.name," (",e.tracks.total,")"))})))}}]),t}(r.Component),j=n(32),w=function(e){return e.categories.categoriesList},k=function(e){return e.categories.isLoading},L=function(e){return e.categories.error},S=n(14),C=function(e){return{type:S.c,payload:{categories:e}}},A=function(e){return{type:S.b,payload:{error:e}}},I=n(27);var z=Object(I.b)(function(e){return{categories:w(e),isLoading:k(e),error:L(e)}},function(e){return{loadCategories:function(){return e(function(e,t){e({type:S.a}),E.getAll().then(function(t){return e(C(t.data.categories.items))}).catch(function(t){return e(A(t))})})}}})(function(e){var t=e.loadCategories,n=e.isLoading,r=e.error,o=e.categories,c=Object(j.a)(e,["loadCategories","isLoading","error","categories"]);if(a.a.useEffect(function(){t()},[]),r)throw r;if(n)return a.a.createElement("div",null,a.a.createElement("p",null,"Loading..."));var i=c.match.path;return a.a.createElement("ul",null,a.a.createElement("h1",null,"Categories"),o.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(f.a,{to:"".concat(i,"/").concat(e.id)},e.name))}))}),P=n(106),x=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(l.a)(this,Object(s.a)(t).call(this,e));var r=localStorage.getItem("referredRedirectPath");return localStorage.removeItem("referredRedirectPath"),n.redirectPath=r?JSON.parse(r):"/",n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.hash.slice(1)).get("access_token");b.a.login(e)}},{key:"render",value:function(){return a.a.createElement(P.a,{to:this.redirectPath})}}]),t}(r.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"404 not found"))}}]),t}(r.Component);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=a.a.createElement("path",{d:"M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z",fill:"currentColor"});n.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var U=a.a.createElement("path",{d:"M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z",fill:"currentColor"});n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=a.a.createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor",fillRule:"evenodd"}),G=(n.p,Object(r.lazy)(function(){return n.e(7).then(n.bind(null,354))})),J=Object(r.lazy)(function(){return n.e(8).then(n.bind(null,351))}),q=Object(r.lazy)(function(){return n.e(9).then(n.bind(null,352))}),N={path:"/dashboard",component:G,routes:[{path:"/dashboard/",exact:!0,component:J,name:"Home",icon:function(e){return a.a.createElement("svg",_({viewBox:"0 0 512 512",width:24,height:24},e),D)}},{path:"/dashboard/search",component:Object(r.lazy)(function(){return n.e(5).then(n.bind(null,358))}),name:"Search",icon:function(e){return a.a.createElement("svg",M({viewBox:"0 0 512 512",width:24,height:24},e),B)}},{path:"/dashboard/libraries",component:q,name:"Your Libraries",icon:function(e){return a.a.createElement("svg",R({viewBox:"0 0 512 512",width:24,height:24},e),U)}}]},F=n(45);n.d(t,"b",function(){return H}),n.d(t,"a",function(){return V});var W=Object(r.lazy)(function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,353))}),H=[{path:"/",exact:!0,component:Object(r.lazy)(function(){return n.e(6).then(n.bind(null,350))})},{path:"/categories/:categoryId",component:y,auth:!0},{path:"/categories",component:z,auth:!0},{path:"/personalization",component:function(e){var t=a.a.useState(null),n=Object(F.a)(t,2),r=n[0],o=n[1];return a.a.useEffect(function(){p.a.get("/me").then(function(e){return o(e.data)}).catch(function(e){return console.log(e)})},[]),r?a.a.createElement("pre",null,JSON.stringify(r)):"Loading..."},auth:!0},{path:"/callback",component:x},{path:"/login",component:W},N,{path:"/",component:T}],V=function(e){return e.map(function(e){return e.auth?a.a.createElement(c.a,e):a.a.createElement(o.a,Object.assign({},e,{component:void 0,render:function(t){return a.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}}))})}},65:function(e,t,n){e.exports=n(105)},70:function(e,t,n){},71:function(e,t,n){}},[[65,1,3]]]);
//# sourceMappingURL=main.299a59f9.chunk.js.map