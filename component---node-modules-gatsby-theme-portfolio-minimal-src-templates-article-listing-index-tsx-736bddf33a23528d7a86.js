(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[226],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},1223:function(e,t,n){var r=n(5112),o=n(30),i=n(3070).f,a=r("unscopables"),l=Array.prototype;null==l[a]&&i(l,a,{configurable:!0,value:o(null)}),e.exports=function(e){l[a][e]=!0}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var l,c=r(t),u=i(c),s=o(a,u);if(e&&n!=n){for(;u>s;)if((l=c[s++])!=l)return!0}else for(;u>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),l=i.process,c=i.Deno,u=l&&l.versions||c&&c.version,s=u&&u.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,l=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?l(e,""):a(e)}:a},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),l=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,l(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},8631:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},30:function(e,t,n){var r,o=n(9670),i=n(6048),a=n(748),l=n(3501),c=n(490),u=n(317),s=n(6200),f="prototype",d="script",p=s("IE_PROTO"),m=function(){},v=function(e){return"<"+d+">"+e+"</"+d+">"},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t,n;b="undefined"!=typeof document?document.domain&&r?y(r):(t=u("iframe"),n="java"+d+":",t.style.display="none",c.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):y(r);for(var o=a.length;o--;)delete b[f][a[o]];return b()};l[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[p]=e):n=b(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),l=n(5656),c=n(1956);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=l(t),o=c(t),u=o.length,s=0;u>s;)i.f(e,n=o[s++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),l=n(4948),c=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";t.f=r?i?function(e,t,n){if(a(e),t=l(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=s(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=l(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,l=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,s=[];for(n in r)!o(l,n)&&o(r,n)&&c(s,n);for(;t.length>u;)o(r,n=t[u++])&&(~a(s,n)||c(s,n));return s}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;e.exports=function(e,t){var n,l;if("string"===t&&o(n=e.toString)&&!i(l=r(n,e)))return l;if(o(n=e.valueOf)&&!i(l=r(n,e)))return l;if("string"!==t&&o(n=e.toString)&&!i(l=r(n,e)))return l;throw a("Can't convert object to primitive value")}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(8631);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),l=n(2140),c=n(5112),u=TypeError,s=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=a(e,s);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),l=n(6293),c=n(3307),u=r.Symbol,s=o("wks"),f=c?u.for||u:u&&u.withoutSetter||a;e.exports=function(e){return i(s,e)||(s[e]=l&&i(u,e)?u[e]:f("Symbol."+e)),s[e]}},3792:function(e,t,n){n(1223)("flat")},4088:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(7294),o=n(1883),i=n(8032);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var a=n(5400);function l(e){const{globalState:t}=(0,a.j1)(),n=t.theme===a.Q2.Dark,l=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),c=r.createElement("article",{className:"style-module--Card--c661d",style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:"style-module--Banner--d401d"},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:"style-module--ImageWrapper--50300",imgClassName:"style-module--Image--43f10",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:"style-module--DescriptionWrapper--5f867"},r.createElement("span",{className:"style-module--Category--eeb92"},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:"style-module--Title--de70d"},e.data.title),r.createElement("div",{className:"style-module--Details--5ba4b"},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(u=e.data.publishedAt).getMonth()]+" "+u.getDate()+", "+u.getFullYear(),e.data.readingTime&&r.createElement("span",{className:"style-module--ReadingTime--a0392"},e.data.readingTime))));var u;return l?r.createElement("a",{href:e.data.link,target:"_blank",rel:"nofollow noopener noreferrer",title:e.data.title},c):r.createElement(o.Link,{to:e.data.link,title:e.data.title},c)}},2311:function(e,t,n){"use strict";n.d(t,{z:function(){return l},L:function(){return a}});var r=n(7294),o=n(1883),i="style-module--Button--82b1f";let a;function l(e){if(e.type===a.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(o.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===a.BUTTON||e.type===a.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return r.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(a||(a={}))},1187:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(7294),o="style-module--ContentWrapper --36dde";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("section",{id:e.anchor,className:"style-module--Section--1d871"},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:"style-module--Heading--2c002"},e.heading),e.children))}},8768:function(e,t,n){"use strict";n.d(t,{i:function(){return i}});var r=n(7294),o="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("div",{className:t,style:e.style},e.children)}},974:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});n(3792);var r=n(5785),o=n(7294),i=n(947),a=n(1187),l=n(533),c=n(8768),u=n(4088),s=n(2311),f="style-module--Option--83bb9";function d(e){const t=e.pageContext.articles,[n,d]=o.useState(function(e){const t=[],n=[];return e.forEach((e=>{e.categories.forEach((r=>{if(n.includes(r)){const n=t.map((e=>e.label)).indexOf(r);t[n].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(t)),[p,m]=o.useState(9);let v=[];const y=-1!==n.map((e=>e.selected)).indexOf(!0);return y&&(v=n.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,n)=>n.indexOf(e)===t))),o.createElement(o.Fragment,null,o.createElement(l.p,{title:"All Articles",useTitleTemplate:!0}),o.createElement(i.T,null,o.createElement(a.$,{anchor:"articleListing",heading:"Articles"},o.createElement("div",{className:"style-module--Filter--31377"},"Select categories to filter articles",o.createElement(c.i,{additionalClasses:["style-module--Options--3515b"]},n.map(((e,t)=>o.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,r.Z)(n),o=t.map((e=>e.label)).indexOf(e);t[o].selected=!t[o].selected,d(t)}(e.label),className:[f,!0===e.selected?"style-module--Selected--f3165":null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),o.createElement("div",{className:"style-module--Listing--52eca"},t.filter((e=>!y||v.includes(e.id))).slice(0,p).map(((e,t)=>o.createElement(u.T,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),y&&v.length>p||!y&&t.length>p?o.createElement("div",{className:"style-module--LoadMore--8b4c0"},o.createElement(s.z,{type:s.L.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const n=p+3;(t&&t>=n||!t&&e>=n)&&m(n)}(t.length,y?v.length:void 0)})):null)))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-736bddf33a23528d7a86.js.map