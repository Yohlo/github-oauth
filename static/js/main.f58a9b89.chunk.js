(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){e.exports=n(77)},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(30),r=n(9),i=n(11),l=n(80);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(33),s=n.n(u),p=function(e){return function(t){return function(n){t(n);var a=e.getState(),c=function(e){return function(t,n){return s.a.get(t,{headers:{"Content-Type":"application/json"}}).then(function(t){e({type:"".concat(n,"_RECEIVED"),data:t.data})},function(t){return console.log(t),e({type:"".concat(n,"_ERROR"),err:t})})}}(t);switch(n.type){case"GET_USER":c("https://api.github.com/user?access_token=".concat(a.oauth.access_token),n.type)}}}},m=n(78),E=n(7),g=n(12),h=n(13),d=n(14),b=n(17),f=n(15),v=n(18),O=n(6),j=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).target=e.target,n.componentDidMount=n.componentDidMount.bind(Object(O.a)(Object(O.a)(n))),n.componentWillReceiveProps=n.componentWillReceiveProps.bind(Object(O.a)(Object(O.a)(n))),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.location.replace(this.target)}},{key:"componentWillReceiveProps",value:function(e){this.target&&this.props.target===e.target||window.location.replace(e.target)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("span",null,"Redirecting to ",this.target))}}]),t}(a.Component),_=Object(r.b)(function(e,t){return Object(E.a)({},t,{access_token:e.oauth.access_token,login:e.oauth.login})})(function(e){var t=e.Component,n=e.access_token,a=(e.login,Object(g.a)(e,["Component","access_token","login"]));return n?c.a.createElement(t,a):c.a.createElement(j,Object.assign({},a,{target:"".concat("https://api.yohlo.me/","/auth/login?app=github-oauth")}))}),k=n(81),R=n(82),w=n(63),y=Object(r.b)(null,function(e,t){return Object(E.a)({},t,{storeAccessToken:function(t){return e(function(e){return{type:"STORE_ACCESS_TOKEN",access_token:e}}(t))},getUser:function(){return e({type:"GET_USER"})}})})(function(e){var t=e.storeAccessToken,n=e.getUser,a=Object(g.a)(e,["storeAccessToken","getUser"]);return t(w.parse(a.location.search).access_token),n(),c.a.createElement(k.a,{to:"/"})}),S=n(34),T=n.n(S),A=(n(71),function(e){var t=e.children;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:T.a,className:"App-logo",alt:"logo"}),t))}),C=(n(73),Object(r.b)(function(e,t){return Object(E.a)({},t,{login:e.oauth.login,name:e.oauth.name,avatar_url:e.oauth.avatar_url})})(function(e){var t=e.login,n=e.avatar_url,a=e.name;Object(g.a)(e,["login","avatar_url","name"]);return c.a.createElement("div",{class:"user-card"},c.a.createElement("img",{src:n,alt:"GitHub Avatar"}),c.a.createElement("div",{class:"user-card-body"},c.a.createElement("p",{class:"name"},a),c.a.createElement("p",{class:"login"},t)))})),U=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement("p",null,"Welcome to the home page. You are successfully logged in!"))}}]),t}(a.Component),G=c.a.createElement(A,null,c.a.createElement(m.a,{exact:!0,path:"/",component:function(e){return c.a.createElement(_,Object.assign({Component:U},e))}}),c.a.createElement(m.a,{exact:!0,path:"/OAuth",component:function(e){return c.a.createElement("div",null,c.a.createElement("p",null,"Login via GitHub by clicking the link below."),c.a.createElement(R.a,{className:"App-link",to:"/Login"},"Login"))}}),c.a.createElement(m.a,{exact:!0,path:"/OAuth/Error",component:function(e){return c.a.createElement("p",null,"Erorr!")}}),c.a.createElement(m.a,{exact:!0,path:"/OAuth/Success",component:y})),x=(n(75),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_ACCESS_TOKEN":return Object(E.a)({access_token:t.access_token},e);case"GET_USER_RECEIVED":return Object(E.a)({login:t.data.login,avatar_url:t.data.avatar_url,name:t.data.name},e);default:return e}}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_USER":return!0;case"GET_USER_RECEIVED":case"GET_USER_ERROR":return!1;default:return e}},N=Object(i.c)({loading:D,oauth:x}),W=Object(i.d)(N,{},Object(i.a)(p));Object(o.render)(c.a.createElement(r.a,{store:W},W.getState().loading?c.a.createElement("p",null,"loading..."):c.a.createElement(l.a,{children:G})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.f58a9b89.chunk.js.map