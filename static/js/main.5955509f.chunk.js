(this["webpackJsonpanime-tv"]=this["webpackJsonpanime-tv"]||[]).push([[0],{736:function(e,t,n){},737:function(e,t,n){},759:function(e,t,n){},762:function(e,t,n){},781:function(e,t,n){},792:function(e,t){},794:function(e,t,n){},795:function(e,t,n){},796:function(e,t,n){},797:function(e,t,n){},798:function(e,t,n){},799:function(e,t,n){},800:function(e,t,n){},801:function(e,t,n){},802:function(e,t,n){},803:function(e,t,n){},804:function(e,t,n){},805:function(e,t,n){},807:function(e,t,n){"use strict";n.r(t);n(239),n(190),n(253),n(146),n(191),n(365),n(552),n(724);var c=n(0),a=n.n(c),i=n(118),r=n.n(i),s=(n(736),n(40)),o=n.n(s),u=n(71),l=n(19),j=(n(737),n(21)),d=n(362),b=n(106),f=n(15),h=n(87),p=n(139),m=n.n(p),O=m.a.create({baseURL:"https://animootv.herokuapp.com"}),g=Object(h.b)("user/userData",(function(e){var t;return(t=e,O.get("/users/".concat(t))).data})),x=Object(h.b)("user/watching",(function(e,t){t.dispatch(L(e)),function(e,t){O.post("/users/".concat(e,"/watching"),t)}(t.getState().user.googleId,e)})),v=Object(h.b)("user/watchlist",(function(e,t){t.dispatch(W(e)),function(e,t){O.post("/users/".concat(e,"/watchlist"),t)}(t.getState().user.googleId,e)})),w=Object(h.b)("user/removeFromWatchlist",(function(e,t){t.dispatch(F(e)),function(e,t){O.put("/users/".concat(e,"/watchlist"),t)}(t.getState().user.googleId,e)})),N={googleId:"",name:"",avatar:"",watching:{},watchlist:[]},I=Object(h.c)({name:"user",initialState:N,reducers:{login:function(e,t){return Object(f.a)(Object(f.a)({},e),t.payload)},logout:function(){return Object(f.a)({},N)},addToWatching:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{watching:Object(f.a)(Object(f.a)({},e.watching),{},Object(b.a)({},t.payload.animeId,t.payload.lastEpisode))})},addToWatchlist:function(e,t){return e.watchlist.find((function(e){return e.animeId===t.payload.animeId}))?e:Object(f.a)(Object(f.a)({},e),{},{watchlist:[].concat(Object(d.a)(e.watchlist),[t.payload])})},refreshWatchlist:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{watchlist:t.payload})},removeFromWatchlist:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.animeId!==t.payload.animeId}))})}},extraReducers:Object(b.a)({},g.fulfilled,(function(e,t){var n=t.payload.watching.reduce((function(e,t){return e[t.animeId]=t.lastEpisode,e}),{});return Object(f.a)(Object(f.a)({},e),{},{watchlist:t.payload.watchlist,watching:n})}))}),_=function(e){return!!e.user.googleId},y=function(e){return e.user},S=function(e){return e.user.watchlist},k=function(e){return e.user.watching},P=I.actions,C=P.login,E=P.logout,L=P.addToWatching,W=P.addToWatchlist,F=P.removeFromWatchlist,T=P.refreshWatchlist,R=I.reducer,D=n(173),q=n.n(D),B=n(174),A=n.n(B),U=(n(759),n(1)),z=function(e){var t=e.pageLimit,n=e.totalRecords,a=e.onPageChanged,i=Math.ceil(n/t),r=Object(c.useState)({currentPage:1,previousPage:1}),s=Object(l.a)(r,2),o=s[0],u=s[1],j=function(e,t){return{currentPage:t,previousPage:e.currentPage}};Object(c.useEffect)((function(){d(o.currentPage,o.previousPage)}),[o]);var d=function(e,n){e!==n&&a(e,(e-1)*t,(e-1)*t+t-1)};return Object(U.jsxs)("div",{className:"pagination",children:[Object(U.jsx)(q.a,{onClick:function(){u((function(e){var t=1!==e.currentPage?e.currentPage-1:e.currentPage;return j(e,t)}))}}),Object(U.jsxs)("span",{children:[o.currentPage," - ",i]}),Object(U.jsx)(A.a,{onClick:function(){u((function(e){var t=e.currentPage!==i?e.currentPage+1:e.currentPage;return j(e,t)}))}})]})},G=(n(762),n(86)),J=n.n(G),M=(n(170),function(e){var t=e.pageLimit,n=e.items,a=void 0===n?[]:n,i=function(){return a.slice(0,t)},r=Object(c.useState)(i()),s=Object(l.a)(r,2),o=s[0],u=s[1];Object(c.useEffect)((function(){u(i())}),[a]);var j=function(e,t,n){u(a.slice(t,n+1))};return a.length?Object(U.jsxs)("div",{className:"paginated_container",children:[Object(U.jsxs)("div",{className:"paginated_container__items",children:[o&&o.map((function(e,t){return Object(U.jsx)("div",{className:"paginated_container__item",children:e},t)})),0===o.length?Object(U.jsx)("div",{className:"paginated_container__err",children:"Aun no has marcado animes como visto"}):null]}),Object(U.jsx)("div",{className:"paginated_container__pagination",children:o.length>0?Object(U.jsx)(z,{pageLimit:t,totalRecords:a.length,onPageChanged:j}):null})]}):Object(U.jsx)("div",{className:"episode-list-loader",children:Object(U.jsx)(J.a,{type:"Puff",color:"#ffa800",height:100,width:100})})}),Q=(n(781),n(60)),H=n(350),K=n.n(H),V=n(175),X=n.n(V),Y=n(176),Z=n.n(Y),$=function(e){var t=e.action,n=e.icon,c=e.text;return Object(U.jsxs)("div",{className:"action-button",onClick:function(){return t()},children:[n," ",Object(U.jsx)("span",{children:c})]})},ee=function(e){var t=e.title,n=e.poster,c=e.url,a=e.episode,i=void 0===a?null:a,r=e.nextEpisodeDate,s=e.type,o=e.fn,u=Object(j.b)(),l=Object(j.c)(S),d=Object(j.c)(_),b={animeId:c,poster:n,title:t};return Object(U.jsxs)("div",{className:"card",children:[function(){if("watchlist"===s)return Object(U.jsx)(K.a,{onClick:function(){return o()}})}(),"search"===s&&d?Object(U.jsx)("div",{className:"card-watchlist",children:l.find((function(e){return e.animeId===c}))?Object(U.jsx)($,{icon:Object(U.jsx)(X.a,{}),text:"Watchlist",action:function(){return u(w({animeId:c}))}}):Object(U.jsx)($,{icon:Object(U.jsx)(Z.a,{}),text:"Watchlist",action:function(){return u(v(b))}})}):null,Object(U.jsxs)(Q.b,{to:r?"#":"watch"===s?"/watch/".concat(c):"/anime/".concat(c),children:[Object(U.jsx)("img",{src:n,alt:t}),Object(U.jsxs)("div",{className:"card-title",children:[Object(U.jsx)("p",{children:t}),r?Object(U.jsx)("span",{children:r}):i?Object(U.jsxs)("span",{children:["Episodio ",i]}):void 0]})]})]},c)},te=n.p+"static/media/logo.292e18a7.png",ne=function(){var e=Object(j.c)(y),t=Object(j.c)(_),n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],r=a[1],s=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c=e.googleId,O.get("/users/".concat(c,"/continue"));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}var c}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){e.googleId?s():r([])}),[e.googleId]);var d=function(){if(i.length)return i.map((function(e){return Object(U.jsx)(ee,{nextEpisodeDate:e.nextEpisodeDate,episode:e.nextEpisode,title:e.title,poster:e.poster,url:"".concat(e.animeId,"/").concat(e.nextEpisode),type:"watch"},e.animeId)}))};return t?Object(U.jsx)("div",{className:"home",children:Object(U.jsx)(M,{items:d(),pageLimit:12},i.length)}):Object(U.jsxs)("div",{className:"home-signed-out",children:[Object(U.jsx)("img",{src:te,alt:"Animoo Logo"}),Object(U.jsx)("p",{children:"Inicia sesi\xf3n para empezar a agregar contenido a tu lista de seguimiento."})]})},ce=m.a.create({baseURL:"https://animootv.herokuapp.com"}),ae=function(e){return ce.get("/animes",{params:{search:e.q,page:e.page}}).then((function(e){return e.data}),(function(e){return console.log(e)}))},ie=n(351),re=n.n(ie),se=(n(794),n(795),function(e){var t=e.getContent,n=e.renderItem,a=Object(c.useState)({page:1,items:{}}),i=Object(l.a)(a,2),r=i[0],s=i[1],j=Object(c.useState)(!1),d=Object(l.a)(j,2),h=d[0],p=d[1],m=function(){return g(r.page+1)},O=function(){var e=r.page>1?r.page-1:r.page;g(e)},g=function(){var e=Object(u.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.items[n]){e.next=4;break}s(Object(f.a)(Object(f.a)({},r),{},{page:n})),e.next=10;break;case 4:return p(!0),e.next=7,t(n);case 7:c=e.sent,p(!1),c&&c.length&&s(Object(f.a)(Object(f.a)({},r),{},{page:n,items:Object(f.a)(Object(f.a)({},r.items),{},Object(b.a)({},n,c))}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return g(1)}),[]);var x=function(e){return h?null:e()};return Object(U.jsxs)("div",{className:"paginated_container",children:[Object(U.jsx)("div",{className:"paginated_container__items",children:r.items[r.page]?r.items[r.page].map((function(e){return n(e)})):Object(U.jsx)("div",{className:"episode-list-loader",children:Object(U.jsx)(J.a,{type:"Puff",color:"#ffa800",height:100,width:100,timeout:2e3})})}),function(){if(r.items[r.page])return Object(U.jsxs)("div",{className:"paginated_container__pagination",children:[Object(U.jsxs)("button",{onClick:function(){return x(O)},children:[Object(U.jsx)(q.a,{}),"prev"]}),Object(U.jsxs)("button",{onClick:function(){return x(m)},children:["next ",Object(U.jsx)(A.a,{})]})]})}()]})}),oe=function(e){return Object(U.jsx)("div",{className:"search-results",children:Object(U.jsx)(se,{getContent:function(t){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=Object(f.a)(Object(f.a)({},re.a.parse(e.location.search,{ignoreQueryPrefix:!0})),{},{page:t});return ae(n)}(t)},renderItem:function(e){return Object(U.jsx)(ee,{poster:e.poster,title:e.title,url:e.id,type:"search"},e.id)}},e.location.search)})},ue=(n(796),n(797),n(352)),le=n.n(ue),je=function(e){var t=e.tabs,n=function(){return Object.entries(t).find((function(e){var t=Object(l.a)(e,2);t[0];return t[1].default}))[0]},a=Object(c.useState)(!0),i=Object(l.a)(a,2),r=i[0],s=i[1],o=Object(c.useState)(n),u=Object(l.a)(o,2),j=u[0],d=u[1],b=function(){return r?t[j||n()].items.reverse().slice(0,10):t[j||n()].items.slice(0,10)},f=Object(c.useState)(b()),h=Object(l.a)(f,2),p=h[0],m=h[1];Object(c.useEffect)((function(){m(b())}),[t,r]);return Object(U.jsxs)("div",{className:"movielist",children:[Object(U.jsxs)("div",{className:"movielist__header",children:[Object(U.jsx)("div",{className:"movielist__tabs",children:Object.entries(t).map((function(e){var t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(U.jsx)("span",{className:n===j?"activeTab":"",onClick:function(){return d(n)},children:c.tab},n)}))}),Object(U.jsxs)("div",{className:"movielist__pagination",children:[Object(U.jsx)(le.a,{onClick:function(e){return s(e)}}),Object(U.jsx)(z,{pageLimit:10,totalRecords:t[j].items.length,onPageChanged:function(e,n,c){m(t[j].items.slice(n,c+1))}},j)]})]}),Object(U.jsx)("div",{className:"movielist__items",children:p.length>0?p.map((function(e,t){return Object(U.jsxs)("div",{className:"movielist__item ".concat(t%2===0?"even":"odd"),children:[Object(U.jsx)(Q.b,{to:e.url,children:Object(U.jsx)("p",{children:e.title})}),Object(U.jsx)("div",{className:"movielist__actions",children:e.actions.map((function(e){return Object(U.jsx)($,{action:e.action,icon:e.icon})}))})]},"".concat(j,":").concat(e.id))})):Object(U.jsx)("div",{className:"movielist__empty",children:"No se han encontrado episodios para este anime."})})]})},de=n(354),be=n.n(de),fe=n(353),he=n.n(fe),pe=function(e){var t=Object(c.useState)({}),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(j.b)(),s=Object(j.c)(S),d=Object(j.c)(k),b=Object(j.c)(_),f=Array.from({length:a.episodeCount},(function(t,n){return{title:"".concat(a.title," - Episodio ").concat(n+1),id:n+1,url:"/watch/".concat(e.match.params.title,"/").concat(n+1),actions:[{icon:b?d[e.match.params.title]>=n+1?Object(U.jsx)(he.a,{}):Object(U.jsx)(be.a,{}):null,action:function(){r(x({animeId:e.match.params.title,lastEpisode:n+1}))}}]}})),h=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.match.params.title,t.next=3,a=n,ce.get("/anime/".concat(a)).then((function(e){return e.data}),(function(e){return console.log(e)}));case 3:c=t.sent,i(c);case 5:case"end":return t.stop()}var a}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){h()}),[e.match.params.title]);var p={episodes:{tab:a.title,items:f,default:!0}},m={animeId:e.match.params.title,poster:a.poster,title:a.title},O=function(){return b?s.find((function(t){return t.animeId===e.match.params.title}))?Object(U.jsx)($,{icon:Object(U.jsx)(X.a,{}),text:"Watchlist",action:function(){return r(w({animeId:e.match.params.title}))}}):Object(U.jsx)($,{icon:Object(U.jsx)(Z.a,{}),text:"Watchlist",action:function(){return r(v(m))}}):null};return Object(U.jsx)("div",{className:"episode-list",children:Object(U.jsx)("div",{className:"episode-list-anime",children:a.poster?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"episode-list-anime-info",children:[Object(U.jsxs)("div",{className:"episode-list-anime-info-poster",children:[Object(U.jsx)("img",{src:a.poster,alt:a.title}),O()]}),Object(U.jsxs)("ul",{className:"episode-list-anime-info-state",children:[Object(U.jsx)("li",{children:a.type}),Object(U.jsx)("li",{children:a.state})]}),Object(U.jsx)("p",{alt:a.overview,children:a.overview})]}),Object(U.jsx)("div",{className:"episode-list-pagination",children:Object(U.jsx)(je,{tabs:p})})]}):Object(U.jsx)("div",{className:"episode-list-loader",children:Object(U.jsx)(J.a,{type:"Puff",color:"#ffa800",height:100,width:100})})})})},me=n(26),Oe=(n(798),function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){i(e.videos&&e.videos[0].url)}),[e.videos]),Object(U.jsxs)("div",{className:"video-container",children:[Object(U.jsx)("div",{className:"video-button-list",children:e.videos?e.videos.map((function(e){return Object(U.jsx)("button",{className:"video-button-item",onClick:function(){return i(e.url)},children:e.option},e.url)})):null}),Object(U.jsx)("iframe",{title:"video player",src:a,scrolling:"no",frameBorder:"0",allowFullScreen:!0,controls:0})]})}),ge=(n(799),n(800),function(e){var t=e.btn;return Object(U.jsx)("div",{children:Object(U.jsx)(Q.b,{to:t.url,children:Object(U.jsxs)("button",{onClick:t.fn?t.fn:null,className:"btn".concat(t.greyed?"-greyed":""),children:[t.label,t.icon]})})})}),xe=n(356),ve=n.n(xe),we=n(355),Ne=n.n(we),Ie=n(357),_e=n.n(Ie),ye=function(e){var t=Object(j.b)(),n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],r=a[1],s={label:"Episodio anterior",url:e.match.params.episode>1?"/watch/".concat(e.match.params.title,"/").concat(parseInt(e.match.params.episode)-1):"#",icon:Object(U.jsx)(Ne.a,{style:{order:"-1"}}),greyed:1==e.match.params.episode},d={label:"Episodio siguiente",url:e.match.params.episode<i.episodesCount?"/watch/".concat(e.match.params.title,"/").concat(parseInt(e.match.params.episode)+1):"#",icon:Object(U.jsx)(ve.a,{}),greyed:e.match.params.episode==i.episodesCount},b={icon:Object(U.jsx)(_e.a,{}),url:"/anime/".concat(e.match.params.title,"/")};Object(c.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c={title:e.match.params.title,episode:e.match.params.episode},ce.get("/anime/".concat(c.title,"/").concat(c.episode)).then((function(e){return{episodesCount:e.data.episodes,videos:e.data.videos.filter((function(e){return"Nozomi"!==e.option}))}}),(function(e){return console.log(e)}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}var c}),t)})));return function(){return t.apply(this,arguments)}})()(),t(x({animeId:e.match.params.title,lastEpisode:e.match.params.episode}))}),[e.match.params.episode]);return Object(U.jsx)("div",{className:"watch",children:Object(U.jsx)("div",{className:"watch-main",children:function(){var e;return(null===(e=i.videos)||void 0===e?void 0:e.length)?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Oe,{videos:i.videos}),Object(U.jsxs)("div",{className:"watch-nav",children:[Object(U.jsx)(ge,{btn:s}),Object(U.jsx)(ge,{btn:b}),Object(U.jsx)(ge,{btn:d})]})]}):Object(U.jsx)(J.a,{type:"Puff",color:"#ffa800",height:100,width:100})}()})})},Se=(n(801),n(802),n(358)),ke=n.n(Se),Pe=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(U.jsx)("div",{className:"searchbar",children:Object(U.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.onSearch&&e.onSearch(a)}(t)},children:[Object(U.jsx)(ke.a,{}),Object(U.jsx)("input",{className:"searchbar-input",onChange:function(e){return i(e.target.value)},placeholder:"Search..."})]})})},Ce=(n(803),n(238)),Ee={clientId:"786275069032-32rglqn5le1p9nr8b8bptkr8q5c7f6if.apps.googleusercontent.com",cookiePolicy:"single_host_origin"},Le=(n(804),function(e,t){var n=e.items,c=e.active,a=e.blur;return Object(U.jsx)("div",{className:"menu".concat(c?"__active":""),onBlur:a,ref:t,tabIndex:0,children:n.map((function(e,t){return Object(U.jsxs)(Q.b,{onClick:e.action,className:"menu__item",to:"".concat(e.path?e.path:""),children:[e.icon,Object(U.jsx)("span",{children:e.value})]},t)}))})}),We=a.a.forwardRef(Le),Fe=n(361),Te=n.n(Fe),Re=n(360),De=n.n(Re),qe=n(359),Be=n.n(qe),Ae=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],r=a.a.createRef(),s=Object(j.c)(_),o=Object(j.c)(y),u=Object(j.b)(),d=function(e){u(C(function(e){return{name:e.profileObj.givenName,googleId:e.profileObj.googleId,avatar:e.profileObj.imageUrl}}(e))),u(g(e.googleId))},b=function(e){return console.log(e)},h=function(e){e.currentTarget.contains(e.relatedTarget)||i(!1)},p=Object(Ce.useGoogleLogout)(Object(f.a)(Object(f.a)({onFailure:b},Ee),{},{onLogoutSuccess:function(){u(E())}})).signOut,m=function(){p(),i(!1)};Object(c.useEffect)((function(){r.current&&r.current.focus()}),[n]);return Object(U.jsx)("div",{children:s?Object(U.jsxs)("div",{className:"user-container",onClick:function(){return i(!n)},children:[Object(U.jsx)("img",{src:o.avatar,alt:"avatar"}),Object(U.jsx)("p",{children:o.name}),Object(U.jsx)("div",{className:"user-container-menu",children:Object(U.jsx)(We,{ref:r,active:n,blur:h,items:[{value:"Watching",path:"/",icon:Object(U.jsx)(Be.a,{}),action:function(){return i(!1)}},{value:"Watchlist",path:"/watchlist",icon:Object(U.jsx)(De.a,{}),action:function(){return i(!1)}},{value:"Logout",icon:Object(U.jsx)(Te.a,{}),action:m}]})})]}):Object(U.jsx)(Ce.GoogleLogin,{clientId:Ee.clientId,cookiePolicy:Ee.cookiePolicy,buttonText:"Login",onSuccess:d,onFailure:b,isSignedIn:!0})})},Ue=function(){var e=Object(me.e)();return Object(U.jsxs)("div",{className:"navbar-main",children:[Object(U.jsx)(Pe,{onSearch:function(t){0!==t.length&&e.push("/search?q=".concat(t.replace(/\s+/g,"_")))}}),Object(U.jsx)(Ae,{})]})},ze=function(){var e=Object(j.b)(),t=Object(j.c)(S),n=Object(j.c)(y),a=function(){var t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=n.googleId,O.get("/users/".concat(a,"/watchlist")).then((function(e){return e.data}));case 2:c=t.sent,e(T(c));case 4:case"end":return t.stop()}var a}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){n.googleId&&a()}),[n.googleId]);return Object(U.jsx)("div",{children:Object(U.jsx)(M,{items:function(){if(t.length)return t.map((function(t){return Object(U.jsx)(ee,{poster:t.poster,url:t.animeId,title:t.title,type:"watchlist",fn:function(){return e(w({animeId:t.animeId}))}},t.animeId)}))}(),pageLimit:12},"a")})},Ge=(n(805),function(){return Object(U.jsx)("div",{className:"app-main",children:Object(U.jsx)("div",{className:"app-sec",children:Object(U.jsxs)(Q.a,{children:[Object(U.jsx)(Ue,{}),Object(U.jsx)(me.a,{path:"/",exact:!0,component:ne}),Object(U.jsx)(me.a,{path:"/watchlist",exact:!0,component:ze}),Object(U.jsx)(me.a,{path:"/search",exact:!0,component:oe}),Object(U.jsx)(me.a,{path:"/anime/:title",exact:!0,component:pe}),Object(U.jsx)(me.a,{path:"/watch/:title/:episode",exact:!0,component:ye})]})})})}),Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,819)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},Me=Object(h.a)({reducer:{user:R}});r.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(j.a,{store:Me,children:Object(U.jsx)(Ge,{})})}),document.getElementById("root")),Je()}},[[807,1,2]]]);
//# sourceMappingURL=main.5955509f.chunk.js.map