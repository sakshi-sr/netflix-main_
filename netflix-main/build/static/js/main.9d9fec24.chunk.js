(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},48:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),r=n(19),i=n.n(r);n(28),n(29),n(30);var s=function(){return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("img",{className:"nav__logo",src:"https://www.xda-developers.com/files/2019/03/Netflix-Logo-810x298_c.png"}),Object(c.jsx)("img",{className:"nav__avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"})]})},l=n(4),h=n.n(l),d=n(6),u=n(5),j=n(20),f=n.n(j).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(48),n(7)),b=n(8),p=n.n(b);var m=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,r=Object(a.useState)([]),i=Object(u.a)(r,2),s=i[0],l=i[1],j=Object(a.useState)(""),b=Object(u.a)(j,2),m=b[0],g=b[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:t=e.sent,l(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return t=e.name||e.title||e.orginal_name,console.log(t),void(""!==m?g(""):p()(t).then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)})));var t},className:"row__poster ".concat(o&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),""!==m&&Object(c.jsx)(v.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="861e016d67f33ada307fe2a0d89b288c",O={fetchTrending:"trending/all/day?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(64);function _(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],l=i[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(O.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n);return Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url('".concat("https://image.tmdb.org/t/p/original/").concat(null===n||void 0===n?void 0:n.backdrop_path,"')"),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.orginal_name)}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",onClick:function(){return e=n.name||n.title||n.orginal_name,console.log(e),void(""!==s?l(""):p()(e).then((function(e){var t=new URLSearchParams(new URL(e).search);l(t.get("v"))})).catch((function(e){return console.log(e)})));var e},children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner__description",children:null===n||void 0===n?void 0:n.overview})]}),Object(c.jsx)("div",{className:"banner--fadeBottom"}),""!=s&&Object(c.jsx)(v.a,{videoId:s,opts:{hight:"500px",width:"100%",playerVars:{autoplay:1}}})]})}var x=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(s,{}),Object(c.jsx)(_,{}),Object(c.jsx)(m,{title:"NETFLIX ORIGINALS",fetchUrl:O.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(m,{title:"Trending Now",fetchUrl:O.fetchTrending}),Object(c.jsx)(m,{title:"Top Rated",fetchUrl:O.fetchTopRated}),Object(c.jsx)(m,{title:" Action Movies",fetchUrl:O.fetchActionMovies}),Object(c.jsx)(m,{title:" Comedy Movies",fetchUrl:O.fetchComedyMovies}),Object(c.jsx)(m,{title:" Horror Movies",fetchUrl:O.fetchHorrorMovies}),Object(c.jsx)(m,{title:" Romance Movies",fetchUrl:O.fetchRomanceMovies}),Object(c.jsx)(m,{title:" Documentaries",fetchUrl:O.fetchDocumentaries})]})};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9d9fec24.chunk.js.map