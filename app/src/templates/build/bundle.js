var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function c(e){return e&&r(e.destroy)?e.destroy:t}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function m(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let v;function w(t){v=t}function x(){const t=function(){if(!v)throw new Error("Function called outside component initialization");return v}();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach(e=>{e.call(t,r)})}}}const y=[],k=[],b=[],z=[],E=Promise.resolve();let C=!1;function _(t){b.push(t)}let j=!1;const A=new Set;function N(){if(!j){j=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];w(e),O(e.$$)}for(y.length=0;k.length;)k.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];A.has(e)||(A.add(e),e())}b.length=0}while(y.length);for(;z.length;)z.pop()();C=!1,j=!1,A.clear()}}function O(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const B=new Set;let I;function S(){I={r:0,c:[],p:I}}function M(){I.r||s(I.c),I=I.p}function q(t,e){t&&t.i&&(B.delete(t),t.i(e))}function D(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),I.c.push(()=>{B.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function L(t){t&&t.c()}function R(t,n,o){const{fragment:i,on_mount:c,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,o),_(()=>{const n=c.map(e).filter(r);l?l.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(_)}function T(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(y.push(t),C||(C=!0,E.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,r,o,i,c,l,a=[-1]){const u=v;w(e);const f=r.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a};let p=!1;h.ctx=o?o(e,f,(t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),p&&H(e,t)),n}):[],h.update(),p=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),r.target&&(r.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):h.fragment&&h.fragment.c(),r.intro&&q(e.$$.fragment),R(e,r.target,r.anchor),N()),w(u)}class F{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const K=[];function P(t,e){return{subscribe:U(t,e).subscribe}}function U(e,n=t){let s;const r=[];function i(t){if(o(e,t)&&(e=t,s)){const t=!K.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),K.push(n,e)}if(t){for(let t=0;t<K.length;t+=2)K[t][0](K[t+1]);K.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,c=t){const l=[o,c];return r.push(l),1===r.length&&(s=n(i)||t),o(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function G(e,n,o){const c=!Array.isArray(e),l=c?[e]:e,a=n.length<2;return P(o,e=>{let o=!1;const u=[];let f=0,h=t;const p=()=>{if(f)return;h();const s=n(c?u[0]:u,e);a?e(s):h=r(s)?s:t},d=l.map((t,e)=>i(t,t=>{u[e]=t,f&=~(1<<e),o&&p()},()=>{f|=1<<e}));return o=!0,p(),function(){s(d),h()}})}function W(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,r,o,i=[],c="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(n=r[0])?(i.push("wild"),c+="/(.*)"):":"===n?(s=r.indexOf("?",1),o=r.indexOf(".",1),i.push(r.substring(1,~s?s:~o?o:r.length)),c+=~s&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(c+=(~s?"?":"")+"\\"+r.substring(o))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function Y(t){let e,n;var s=t[0];if(s)var r=new s({});return{c(){r&&L(r.$$.fragment),e=m()},m(t,s){r&&R(r,t,s),a(t,e,s),n=!0},p(t,n){if(s!==(s=t[0])){if(r){S();const t=r;D(t.$$.fragment,1,0,()=>{T(t,1)}),M()}s?(L((r=new s({})).$$.fragment),q(r.$$.fragment,1),R(r,e.parentNode,e)):r=null}},i(t){n||(r&&q(r.$$.fragment,t),n=!0)},o(t){r&&D(r.$$.fragment,t),n=!1},d(t){t&&u(e),r&&T(r,t)}}}function J(t){let e,n;var s=t[0];function r(t){return{props:{params:t[1]}}}if(s)var o=new s(r(t));return{c(){o&&L(o.$$.fragment),e=m()},m(t,s){o&&R(o,t,s),a(t,e,s),n=!0},p(t,n){const i={};if(2&n&&(i.params=t[1]),s!==(s=t[0])){if(o){S();const t=o;D(t.$$.fragment,1,0,()=>{T(t,1)}),M()}s?(L((o=new s(r(t))).$$.fragment),q(o.$$.fragment,1),R(o,e.parentNode,e)):o=null}else s&&o.$set(i)},i(t){n||(o&&q(o.$$.fragment,t),n=!0)},o(t){o&&D(o.$$.fragment,t),n=!1},d(t){t&&u(e),o&&T(o,t)}}}function Q(t){let e,n,s,r;const o=[J,Y],i=[];function c(t,e){return t[1]?0:1}return e=c(t),n=i[e]=o[e](t),{c(){n.c(),s=m()},m(t,n){i[e].m(t,n),a(t,s,n),r=!0},p(t,[r]){let l=e;e=c(t),e===l?i[e].p(t,r):(S(),D(i[l],1,1,()=>{i[l]=null}),M(),n=i[e],n||(n=i[e]=o[e](t),n.c()),q(n,1),n.m(s.parentNode,s))},i(t){r||(q(n),r=!0)},o(t){D(n),r=!1},d(t){i[e].d(t),t&&u(s)}}}function X(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const Z=P(X(),(function(t){const e=()=>{t(X())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));G(Z,t=>t.location),G(Z,t=>t.querystring);function tt(e,n,s){let r,o=t;!function(t,e,n){t.$$.on_destroy.push(i(e,n))}(e,Z,t=>s(4,r=t)),e.$$.on_destroy.push(()=>o());let{routes:c={}}=n,{prefix:l=""}=n;class a{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:n,keys:s}=W(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.route,this.conditions=e.conditions||[],this.userData=e.userData):(this.component=e,this.conditions=[],this.userData=void 0),this._pattern=n,this._keys=s}match(t){l&&t.startsWith(l)&&(t=t.substr(l.length)||"/");const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;)n[this._keys[s]]=e[++s]||null;return n}checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!this.conditions[e](t))return!1;return!0}}const u=[];c instanceof Map?c.forEach((t,e)=>{u.push(new a(e,t))}):Object.keys(c).forEach(t=>{u.push(new a(t,c[t]))});let f=null,h=null;const p=x(),d=(t,e)=>{setTimeout(()=>{p(t,e)},0)};return e.$set=t=>{"routes"in t&&s(2,c=t.routes),"prefix"in t&&s(3,l=t.prefix)},e.$$.update=()=>{if(17&e.$$.dirty){s(0,f=null);let t=0;for(;!f&&t<u.length;){const e=u[t].match(r.location);if(e){const n={component:u[t].component,name:u[t].component.name,location:r.location,querystring:r.querystring,userData:u[t].userData};if(!u[t].checkConditions(n)){d("conditionsFailed",n);break}s(0,f=u[t].component),e&&"object"==typeof e&&Object.keys(e).length?s(1,h=e):s(1,h=null),d("routeLoaded",n)}t++}}},[f,h,c,l]}class et extends F{constructor(t){super(),V(this,t,tt,Q,o,{routes:2,prefix:3})}}function nt(e){let n;return{c(){n=h("div"),$(n,"class","dictionary-content-container svelte-118kq2y")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class st extends F{constructor(t){super(),V(this,t,null,nt,o,{})}}function rt(e){let n,s,r,o,i,c,f,p;const d=new st({});return{c(){n=h("div"),s=h("div"),s.textContent="Search Bar",r=g(),o=h("div"),i=h("div"),c=g(),f=h("div"),L(d.$$.fragment),$(s,"class","search-bar-container svelte-ii29nf"),$(i,"class","search-results svelte-ii29nf"),$(f,"class","dictionary-content svelte-ii29nf"),$(o,"class","search-content-container svelte-ii29nf"),$(n,"class","search-page-container svelte-ii29nf")},m(t,e){a(t,n,e),l(n,s),l(n,r),l(n,o),l(o,i),l(o,c),l(o,f),R(d,f,null),p=!0},p:t,i(t){p||(q(d.$$.fragment,t),p=!0)},o(t){D(d.$$.fragment,t),p=!1},d(t){t&&u(n),T(d)}}}class ot extends F{constructor(t){super(),V(this,t,null,rt,o,{})}}function it(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${ct}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let ct="READER";class lt extends F{constructor(t){super(),V(this,t,null,it,o,{})}}function at(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${ut}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let ut="BOOKMARKS";class ft extends F{constructor(t){super(),V(this,t,null,at,o,{})}}function ht(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${pt}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let pt="STUDY";class dt extends F{constructor(t){super(),V(this,t,null,ht,o,{})}}function gt(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${mt}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let mt="TOOLS";class $t extends F{constructor(t){super(),V(this,t,null,gt,o,{})}}function vt(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${wt}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let wt="HELP";class xt extends F{constructor(t){super(),V(this,t,null,vt,o,{})}}function yt(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${kt}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let kt="SETTINGS";class bt extends F{constructor(t){super(),V(this,t,null,yt,o,{})}}function zt(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${Et}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let Et="CHAT";class Ct extends F{constructor(t){super(),V(this,t,null,zt,o,{})}}function _t(e){let n,s;return{c(){n=h("center"),s=h("h1"),s.textContent=`${jt}`},m(t,e){a(t,n,e),l(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let jt="NOT FOUND";class At extends F{constructor(t){super(),V(this,t,null,_t,o,{})}}const Nt=[];let Ot;function Bt(t){t.node.classList.remove(t.className),t.pattern.test(Ot)&&t.node.classList.add(t.className)}function It(t,e){if(!(e=e&&("string"==typeof e||"object"==typeof e&&e instanceof RegExp)?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||"string"==typeof e.path&&(e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:n}="string"==typeof e.path?W(e.path):{pattern:e.path},s={node:t,className:e.className,pattern:n};return Nt.push(s),Bt(s),{destroy(){Nt.splice(Nt.indexOf(s),1)}}}function St(e){let n,s,r,o;return{c(){n=p("svg"),s=p("path"),r=p("path"),$(s,"d","M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"),$(r,"d","M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",o="feather feather-book-open "+e[1])},m(t,e){a(t,n,e),l(n,s),l(n,r)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&o!==(o="feather feather-book-open "+t[1])&&$(n,"class",o)},i:t,o:t,d(t){t&&u(n)}}}function Mt(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}Z.subscribe(t=>{Ot=t.location+(t.querystring?"?"+t.querystring:""),Nt.map(Bt)});class qt extends F{constructor(t){super(),V(this,t,Mt,St,o,{size:0,class:1})}}function Dt(e){let n,s,r;return{c(){n=p("svg"),s=p("path"),$(s,"d","M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",r="feather feather-bookmark "+e[1])},m(t,e){a(t,n,e),l(n,s)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&r!==(r="feather feather-bookmark "+t[1])&&$(n,"class",r)},i:t,o:t,d(t){t&&u(n)}}}function Lt(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class Rt extends F{constructor(t){super(),V(this,t,Lt,Dt,o,{size:0,class:1})}}function Tt(e){let n,s,r,o,i;return{c(){n=p("svg"),s=p("circle"),r=p("path"),o=p("line"),$(s,"cx","12"),$(s,"cy","12"),$(s,"r","10"),$(r,"d","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"),$(o,"x1","12"),$(o,"y1","17"),$(o,"x2","12.01"),$(o,"y2","17"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",i="feather feather-help-circle "+e[1])},m(t,e){a(t,n,e),l(n,s),l(n,r),l(n,o)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&i!==(i="feather feather-help-circle "+t[1])&&$(n,"class",i)},i:t,o:t,d(t){t&&u(n)}}}function Ht(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class Vt extends F{constructor(t){super(),V(this,t,Ht,Tt,o,{size:0,class:1})}}function Ft(e){let n,s,r;return{c(){n=p("svg"),s=p("path"),$(s,"d","M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",r="feather feather-message-circle "+e[1])},m(t,e){a(t,n,e),l(n,s)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&r!==(r="feather feather-message-circle "+t[1])&&$(n,"class",r)},i:t,o:t,d(t){t&&u(n)}}}function Kt(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class Pt extends F{constructor(t){super(),V(this,t,Kt,Ft,o,{size:0,class:1})}}function Ut(e){let n,s,r,o,i;return{c(){n=p("svg"),s=p("circle"),r=p("circle"),o=p("circle"),$(s,"cx","12"),$(s,"cy","12"),$(s,"r","1"),$(r,"cx","12"),$(r,"cy","5"),$(r,"r","1"),$(o,"cx","12"),$(o,"cy","19"),$(o,"r","1"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",i="feather feather-more-vertical "+e[1])},m(t,e){a(t,n,e),l(n,s),l(n,r),l(n,o)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&i!==(i="feather feather-more-vertical "+t[1])&&$(n,"class",i)},i:t,o:t,d(t){t&&u(n)}}}function Gt(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class Wt extends F{constructor(t){super(),V(this,t,Gt,Ut,o,{size:0,class:1})}}function Yt(e){let n,s,r,o;return{c(){n=p("svg"),s=p("circle"),r=p("line"),$(s,"cx","11"),$(s,"cy","11"),$(s,"r","8"),$(r,"x1","21"),$(r,"y1","21"),$(r,"x2","16.65"),$(r,"y2","16.65"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",o="feather feather-search "+e[1])},m(t,e){a(t,n,e),l(n,s),l(n,r)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&o!==(o="feather feather-search "+t[1])&&$(n,"class",o)},i:t,o:t,d(t){t&&u(n)}}}function Jt(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class Qt extends F{constructor(t){super(),V(this,t,Jt,Yt,o,{size:0,class:1})}}function Xt(e){let n,s,r,o;return{c(){n=p("svg"),s=p("circle"),r=p("path"),$(s,"cx","12"),$(s,"cy","12"),$(s,"r","3"),$(r,"d","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",o="feather feather-settings "+e[1])},m(t,e){a(t,n,e),l(n,s),l(n,r)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&o!==(o="feather feather-settings "+t[1])&&$(n,"class",o)},i:t,o:t,d(t){t&&u(n)}}}function Zt(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class te extends F{constructor(t){super(),V(this,t,Zt,Xt,o,{size:0,class:1})}}function ee(e){let n,s,r,o;return{c(){n=p("svg"),s=p("polyline"),r=p("polyline"),$(s,"points","23 6 13.5 15.5 8.5 10.5 1 18"),$(r,"points","17 6 23 6 23 12"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width",e[0]),$(n,"height",e[0]),$(n,"fill","none"),$(n,"viewBox","0 0 24 24"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class",o="feather feather-trending-up "+e[1])},m(t,e){a(t,n,e),l(n,s),l(n,r)},p(t,[e]){1&e&&$(n,"width",t[0]),1&e&&$(n,"height",t[0]),2&e&&o!==(o="feather feather-trending-up "+t[1])&&$(n,"class",o)},i:t,o:t,d(t){t&&u(n)}}}function ne(t,e,n){let{size:s="100%"}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$set=t=>{"size"in t&&n(0,s=t.size),"class"in t&&n(1,r=t.class)},[s,r]}class se extends F{constructor(t){super(),V(this,t,ne,ee,o,{size:0,class:1})}}function re(t,e,n){const s=t.slice();return s[2]=e[n],s}function oe(t,e,n){const s=t.slice();return s[2]=e[n],s}function ie(t){let e,n,s,r,o,i,f,p,m,v,w,x=t[2].title+"";var y=t[2].icon;if(y)var k=new y({props:{size:"24"}});return{c(){e=h("a"),n=h("span"),k&&L(k.$$.fragment),r=g(),o=h("div"),i=h("p"),f=d(x),p=g(),$(n,"class","navigation--item svelte-iokmb5"),$(o,"class","sy-tooltip--body sy-tooltip--body-right"),$(e,"href",m=`#/${t[2].link}`),$(e,"class","sy-tooltip--container")},m(u,h){a(u,e,h),l(e,n),k&&R(k,n,null),l(e,r),l(e,o),l(o,i),l(i,f),l(e,p),v=!0,w=c(s=It.call(null,n,{path:`/${t[2].link}`,className:"navigation--item-active"}))},p(e,s){if(y!==(y=(t=e)[2].icon)){if(k){S();const t=k;D(t.$$.fragment,1,0,()=>{T(t,1)}),M()}y?(L((k=new y({props:{size:"24"}})).$$.fragment),q(k.$$.fragment,1),R(k,n,null)):k=null}},i(t){v||(k&&q(k.$$.fragment,t),v=!0)},o(t){k&&D(k.$$.fragment,t),v=!1},d(t){t&&u(e),k&&T(k),w()}}}function ce(t){let e,n,s,r,o,i,f,p,m,v,w,x=t[2].title+"";var y=t[2].icon;function k(t){return{props:{size:t[2].size}}}if(y)var b=new y(k(t));return{c(){e=h("a"),n=h("span"),b&&L(b.$$.fragment),r=g(),o=h("div"),i=h("p"),f=d(x),p=g(),$(n,"class","navigation--item svelte-iokmb5"),$(o,"class","sy-tooltip--body sy-tooltip--body-right"),$(e,"href",m=`#/${t[2].link}`),$(e,"class","sy-tooltip--container")},m(u,h){a(u,e,h),l(e,n),b&&R(b,n,null),l(e,r),l(e,o),l(o,i),l(i,f),l(e,p),v=!0,w=c(s=It.call(null,n,{path:`/${t[2].link}`,className:"navigation--item-active"}))},p(e,s){if(y!==(y=(t=e)[2].icon)){if(b){S();const t=b;D(t.$$.fragment,1,0,()=>{T(t,1)}),M()}y?(L((b=new y(k(t))).$$.fragment),q(b.$$.fragment,1),R(b,n,null)):b=null}},i(t){v||(b&&q(b.$$.fragment,t),v=!0)},o(t){b&&D(b.$$.fragment,t),v=!1},d(t){t&&u(e),b&&T(b),w()}}}function le(t){let e,n,s,r,o,i=t[0],c=[];for(let e=0;e<i.length;e+=1)c[e]=ie(oe(t,i,e));const p=t=>D(c[t],1,1,()=>{c[t]=null});let d=t[1],m=[];for(let e=0;e<d.length;e+=1)m[e]=ce(re(t,d,e));const v=t=>D(m[t],1,1,()=>{m[t]=null});return{c(){e=h("div"),n=h("div");for(let t=0;t<c.length;t+=1)c[t].c();s=g(),r=h("div");for(let t=0;t<m.length;t+=1)m[t].c();$(n,"class","navigation--primary-nav svelte-iokmb5"),$(r,"class","navigation--secondary-nav svelte-iokmb5"),$(e,"class","navigation-container svelte-iokmb5")},m(t,i){a(t,e,i),l(e,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null);l(e,s),l(e,r);for(let t=0;t<m.length;t+=1)m[t].m(r,null);o=!0},p(t,[e]){if(1&e){let s;for(i=t[0],s=0;s<i.length;s+=1){const r=oe(t,i,s);c[s]?(c[s].p(r,e),q(c[s],1)):(c[s]=ie(r),c[s].c(),q(c[s],1),c[s].m(n,null))}for(S(),s=i.length;s<c.length;s+=1)p(s);M()}if(2&e){let n;for(d=t[1],n=0;n<d.length;n+=1){const s=re(t,d,n);m[n]?(m[n].p(s,e),q(m[n],1)):(m[n]=ce(s),m[n].c(),q(m[n],1),m[n].m(r,null))}for(S(),n=d.length;n<m.length;n+=1)v(n);M()}},i(t){if(!o){for(let t=0;t<i.length;t+=1)q(c[t]);for(let t=0;t<d.length;t+=1)q(m[t]);o=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)D(c[t]);m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)D(m[t]);o=!1},d(t){t&&u(e),f(c,t),f(m,t)}}}function ae(t){return[[{link:"",icon:Qt,title:"Search"},{link:"read",icon:qt,title:"Read"},{link:"bookmarks",icon:Rt,title:"Bookmarks"},{link:"study",icon:se,title:"Study"},{link:"chat",icon:Pt,title:"Chat"},{link:"tools",icon:Wt,title:"Extras"}],[{link:"help",icon:Vt,size:"18",title:"Help"},{link:"settings",icon:te,size:"24",title:"Settings"}]]}class ue extends F{constructor(t){super(),V(this,t,ae,le,o,{})}}function fe(e){let n,s,r,o,i;const c=new ue({}),f=new et({props:{routes:e[0]}});return{c(){n=h("div"),s=h("div"),L(c.$$.fragment),r=g(),o=h("div"),L(f.$$.fragment),$(s,"class","navigation-container svelte-1fhv7ez"),$(o,"class","content-container svelte-1fhv7ez"),$(n,"class","app-container svelte-1fhv7ez")},m(t,e){a(t,n,e),l(n,s),R(c,s,null),l(n,r),l(n,o),R(f,o,null),i=!0},p:t,i(t){i||(q(c.$$.fragment,t),q(f.$$.fragment,t),i=!0)},o(t){D(c.$$.fragment,t),D(f.$$.fragment,t),i=!1},d(t){t&&u(n),T(c),T(f)}}}function he(t){return[{"/":ot,"/read":lt,"/bookmarks":ft,"/study":dt,"/tools":$t,"/help":xt,"/settings":bt,"/chat":Ct,"*":At}]}return new class extends F{constructor(t){super(),V(this,t,he,fe,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
