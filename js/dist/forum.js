(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["forum/app"];var r=t.n(e);const n=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/IndexPage"];var c=t.n(a);function l(t,o){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},l(t,o)}const s=flarum.core.compat["common/Component"];var u=t.n(s);const p=flarum.core.compat["common/components/Separator"];var i=t.n(p);const f=flarum.core.compat["common/components/Link"];var d=t.n(f);const y=flarum.core.compat["tags/common/helpers/tagLabel"];var g=t.n(y),b=function(t){var o,e;function n(){return t.apply(this,arguments)||this}return e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,l(o,e),n.prototype.view=function(t){var o=r().store.all("tags").filter((function(t){return"follow"===t.subscription()||"lurk"===t.subscription()})),e=r().forum.attribute("my-tags.enable-placeholder");if(o.length||e)return m("[",null,m("div",{className:"MyTags"},m("p",null,r().translator.trans("acpl-my-tags.forum.index.my_tags")),!o.length&&e?m("span",null,r().translator.trans("acpl-my-tags.forum.index.placeholder",{a:m(d(),{href:r().route("tags")})})):m("div",{className:"MyTags__list"},o.map((function(t){return g()(t,{link:r().route.tag(t)})})))),m(i(),null))},n}(u());r().initializers.add("acpl/my-tags",(function(){(0,n.extend)(c().prototype,"navItems",(function(t){r().session.user&&t.add("my-tags",m(b,null),-13)}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map