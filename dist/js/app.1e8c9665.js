(function(t){function e(e){for(var n,s,i=e[0],u=e[1],l=e[2],v=0,_=[];v<i.length;v++)s=i[v],a[s]&&_.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(_.length)_.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={0:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;o.push([0,1]),r()})({0:function(t,e,r){t.exports=r("Vtdi")},"A0++":function(t,e,r){"use strict";var n=r("BPUQ"),a=r.n(n);a.a},BPUQ:function(t,e,r){},P10E:function(t,e,r){"use strict";var n=r("kbE+"),a=r.n(n);a.a},Vtdi:function(t,e,r){"use strict";r.r(e);r("yt8O"),r("VRzm");var n=r("Kw5r"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:r("zwU1")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},l=u,c=(r("P10E"),r("KHd+")),v=Object(c["a"])(l,s,i,!1,null,"d6bec2f6",null),_=v.exports,f={name:"app",components:{HelloWorld:_}},h=f,p=(r("A0++"),Object(c["a"])(h,a,o,!1,null,null,null)),d=(p.exports,r("jE9Z")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",[t._l(t.movies,function(e){return[r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),r("td",[r("a",{attrs:{href:e.imdb_link,target:"_blank"}},[t._v(t._s(e.movie_title))])]),r("td",[t._v(t._s(e.title_year))]),r("td",[t._v(t._s(e.genres))]),r("td",[t._v(t._s(e.content_rating))]),r("td",[t._v(t._s(e.director))]),r("td",[t._v(t._s(e.actor_1))]),r("td",[t._v(t._s(e.imdb_score))])])]})],2)]),r("a",{staticClass:"button is-info"},[t._v("Add Movie")])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("ID")]),r("th",[t._v("Title")]),r("th",[t._v("Year")]),r("th",[t._v("Genres")]),r("th",[t._v("Rating")]),r("th",[t._v("Director")]),r("th",[t._v("Actors")]),r("th",[t._v("Score")])])])}],b=(r("ls82"),r("MECJ")),j=r("vDqi"),k=r.n(j),y={data:function(){return{movies:{}}},created:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("http://localhost:8000/movies");case 2:e=t.sent,this.movies=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},w=y,E=Object(c["a"])(w,g,m,!1,null,null,null),x=E.exports;n["a"].config.productionTip=!1,n["a"].use(d["a"]);var O=[{path:"/",component:x}],P=new d["a"]({mode:"history",routes:O});new n["a"]({router:P,render:function(t){return t(x)}}).$mount("#app")},"kbE+":function(t,e,r){},zwU1:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1e8c9665.js.map