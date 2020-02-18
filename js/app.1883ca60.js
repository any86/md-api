(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6f9d4d7a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("4eb5"),a=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),l={},s=Object(i["a"])(l,c,u,!1,null,null,null),p=s.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"p-2 d-flex"},[n("section",{staticClass:"flex-1"},[n("h1",[e._v("录入")]),n("table",{staticClass:"table table--border table--striped mt-1"},[e._m(0),e._l(e.table,(function(t,r){return n("tr",{key:r},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"row.key"}],attrs:{placeholder:"请输入键值"},domProps:{value:t.key},on:{input:function(n){n.target.composing||e.$set(t,"key",n.target.value)}}})]),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"row.type"}],attrs:{placeholder:"请输入数据类型"},on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"type",n.target.multiple?r:r[0])}}},[n("option",[e._v("String")]),n("option",[e._v("Number")]),n("option",[e._v("Array")]),n("option",[e._v("Object")])])]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"row.desc"}],attrs:{placeholder:"请输入说明"},domProps:{value:t.desc},on:{input:function(n){n.target.composing||e.$set(t,"desc",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.example,expression:"row.example"}],attrs:{placeholder:"请输入举例"},domProps:{value:t.example},on:{input:function(n){n.target.composing||e.$set(t,"example",n.target.value)}}})]),n("td",[r==e.table.length-1?n("button",{staticClass:"a-button a-button--primary",on:{click:e.createRow}},[e._v("继续添加")]):e._e()])])}))],2)]),n("section",{staticClass:"preview ml-2"},[n("h1",[e._v("预览")]),n("div",{staticClass:"preview__content mt-1"},[n("button",{staticClass:"mb-2 a-button a-button--success",on:{click:function(t){return e.$copy(e.markdown)}}},[e._v("复制")]),n("pre",[e._v(e._s(e.markdown))])])])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("键值")]),n("th",[e._v("数据类型")]),n("th",[e._v("说明")]),n("th",[e._v("举例")]),n("th",[e._v("操作")])])}],v=(n("99af"),n("a15b"),n("d81d"),{name:"Home",data:function(){return{mdHeader:"|键值|数据类型|说明|举例|\r\n|-|-|-|-|",table:[{key:"",type:"",desc:"",example:""}]}},computed:{markdown:function(){return this.mdHeader+this.table.map((function(e){return"\r\n|".concat(e.key,"|`").concat(e.type,"`|").concat(e.desc,"|").concat(e.example,"|")})).join(",")}},methods:{createRow:function(){this.table.push({key:"",type:"",desc:"",example:""})}}}),b=v,h=(n("b89c"),Object(i["a"])(b,f,m,!1,null,"1ce18334",null)),y=h.exports;r["a"].use(d["a"]);var _=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],g=new d["a"]({base:"",routes:_}),w=g;n("b7b3");r["a"].config.productionTip=!1,r["a"].use(a.a),r["a"].prototype.$copy=function(e){r["a"].prototype.$copyText(e).then((function(e){alert("复制成功!")}))},new r["a"]({router:w,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"78e9":function(e,t,n){},"9c0c":function(e,t,n){},b89c:function(e,t,n){"use strict";var r=n("78e9"),o=n.n(r);o.a}});
//# sourceMappingURL=app.1883ca60.js.map