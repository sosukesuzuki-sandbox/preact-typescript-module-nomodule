!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,l,r,_,u,i,c={},s=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var o,l=arguments,r={};for(o in t)"key"!==o&&"ref"!==o&&(r[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return h(e,r,t&&t.key,t&&t.ref)}function h(e,t,n,l){var r={type:e,props:t,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return o.vnode&&o.vnode(r),r}function y(e){return e.children}function v(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!r++||u!==o.debounceRendering)&&((u=o.debounceRendering)||_)(k)}function k(){for(var e;r=l.length;)e=l.sort((function(e,t){return e.__v.__b-t.__v.__b})),l=[],e.some((function(e){var t,n,o,l,r,_;e.__d&&(r=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],o=N(_,l,f({},l),t.__n,void 0!==_.ownerSVGElement,null,n,null==r?m(l):r),D(n,l),o!=r&&g(l)))}))}function S(e,t,n,o,l,r,_,u,i){var p,f,d,h,y,v,g,b=n&&n.__k||s,k=b.length;if(u==c&&(u=null!=r?r[0]:k?m(n,0):null),p=0,t.__k=x(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[p])||d&&n.key==d.key&&n.type===d.type)b[p]=void 0;else for(f=0;f<k;f++){if((d=b[f])&&n.key==d.key&&n.type===d.type){b[f]=void 0;break}d=null}if(h=N(e,n,d=d||c,o,l,r,_,u,i),(f=n.ref)&&d.ref!=f&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(f,n.__c||h,n)),null!=h){var s;if(null==v&&(v=h),void 0!==n.__d)s=n.__d,n.__d=void 0;else if(r==d||h!=u||null==h.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(h),s=null;else{for(y=u,f=0;(y=y.nextSibling)&&f<k;f+=2)if(y==h)break e;e.insertBefore(h,u),s=u}"option"==t.type&&(e.value="")}u=void 0!==s?s:h.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&d.__e==u&&u.parentNode!=e&&(u=m(d))}return p++,n})),t.__e=v,null!=r&&"function"!=typeof t.type)for(p=r.length;p--;)null!=r[p]&&a(r[p]);for(p=k;p--;)null!=b[p]&&E(b[p],b[p]);if(g)for(p=0;p<g.length;p++)T(g[p],g[++p],g[++p])}function x(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)x(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var r,_,u,i,c;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(_ in o)n&&_ in n||w(r,_,"");if(n)for(u in n)o&&n[u]===o[u]||w(r,u,n[u])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,C,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,C,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](o.event?o.event(e):e)}function N(e,t,n,l,r,_,u,i,c){var s,p,a,d,h,m,g,b,k,x,w=t.type;if(void 0!==t.constructor)return null;(s=o.__b)&&s(t);try{e:if("function"==typeof w){if(b=t.props,k=(s=w.contextType)&&l[s.__c],x=s?k?k.props.value:s.__:l,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in w&&w.prototype.render?t.__c=p=new w(b,x):(t.__c=p=new v(b,x),p.constructor=w,p.render=U),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=x,p.__n=l,a=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=f({},p.__s)),f(p.__s,w.getDerivedStateFromProps(b,p.__s))),d=p.props,h=p.state,a)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,x)){for(p.props=b,p.state=p.__s,p.__d=!1,p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&u.push(p),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(d,h,m)}))}p.context=x,p.props=b,p.state=p.__s,(s=o.__r)&&s(t),p.__d=!1,p.__v=t,p.__P=e,s=p.render(p.props,p.state,p.context),t.__k=null!=s&&s.type==y&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=p.getChildContext&&(l=f(f({},l),p.getChildContext())),a||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,h)),S(e,t,n,l,r,_,u,i,c),p.base=t.__e,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else t.__e=M(n.__e,t,n,l,r,_,u,c);(s=o.diffed)&&s(t)}catch(e){o.__e(e,t,n)}return t.__e}function D(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function M(e,t,n,o,l,r,_,u){var i,p,f,a,d,h=n.props,y=t.props;if(l="svg"===t.type||l,null!=r)for(i=0;i<r.length;i++)if(null!=(p=r[i])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,r[i]=null;break}if(null==e){if(null===t.type)return document.createTextNode(y);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,y.is&&{is:y.is}),r=null}if(null===t.type)h!==y&&e.data!=y&&(e.data=y);else if(t!==n){if(null!=r&&(r=s.slice.call(e.childNodes)),f=(h=n.props||c).dangerouslySetInnerHTML,a=y.dangerouslySetInnerHTML,!u){if(h===c)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,o,l){var r;for(r in n)r in t||P(e,r,null,n[r],o);for(r in t)l&&"function"!=typeof t[r]||"value"===r||"checked"===r||n[r]===t[r]||P(e,r,t[r],n[r],o)})(e,y,h,l,u),t.__k=t.props.children,a||S(e,t,n,o,"foreignObject"!==t.type&&l,r,_,c,u),u||("value"in y&&void 0!==y.value&&y.value!==e.value&&(e.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==e.checked&&(e.checked=y.checked))}return e}function T(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function E(e,t,n){var l,r,_;if(o.unmount&&o.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||T(l,null,t)),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){o.__e(e,t)}l.base=l.__P=null}if(l=e.__k)for(_=0;_<l.length;_++)l[_]&&E(l[_],t,n);null!=r&&a(r)}function U(e,t,n){return this.constructor(e,n)}function L(e,t,n){var l,r,_;o.__&&o.__(e,t),r=(l=n===i)?null:n&&n.__k||t.__k,e=d(y,null,[e]),_=[],N(t,(l?t:n||t).__k=e,r||c,c,void 0!==t.ownerSVGElement,n&&!l?[n]:r?null:s.slice.call(t.childNodes),_,n||c,l),D(_,e)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return b(n.__E=n)}catch(t){e=t}throw e}},v.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=y,l=[],r=0,_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=c,L(d("a",{href:"/"},"Hello, preact-typescript-module-nomodule example"),document.querySelector(".root"))}]);
//# sourceMappingURL=main.mjs.map