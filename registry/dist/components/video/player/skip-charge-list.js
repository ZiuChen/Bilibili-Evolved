!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/skip-charge-list"]=t():e["video/player/skip-charge-list"]=t()}(self,(function(){return function(){var e,t,n={425:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,"body:not(.skip-charge-list-disable) .bilibili-player .bilibili-player-electric-panel {\n  display: none !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},816:function(e,t,n){var o=n(425);e.exports="string"==typeof o?o:o.toString()},156:function(e){"use strict";e.exports=coreApis.observer},569:function(e){"use strict";e.exports=coreApis.spinQuery}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return c}});var e=coreApis.componentApis.styledComponent,t=coreApis.utils.urls;const n="skip-charge-list-disable",o=(0,e.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,816,23))),(async()=>{const{videoChange:e}=await Promise.resolve().then(r.t.bind(r,156,23)),{select:t}=await Promise.resolve().then(r.t.bind(r,569,23));e((async()=>{(await t("video"))?.addEventListener("ended",(async()=>{if(document.body.classList.contains(n))return;(await t(".bilibili-player-electric-panel-jump"))?.click()}))}))})),c={name:"skipChargeList",displayName:"跳过充电鸣谢",tags:[componentsTags.video],entry:o,enabledByDefault:!0,description:{"zh-CN":"自动跳过视频结尾的充电鸣谢."},reload:()=>document.body.classList.remove(n),unload:()=>document.body.classList.add(n),urlInclude:t.playerUrls}}(),i=i.component}()}));