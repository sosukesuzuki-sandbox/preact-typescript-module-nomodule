!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o,l,_,u,i,s={},c=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var r,o=arguments,l={};for(r in t)"key"!==r&&"ref"!==r&&(l[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===l[r]&&(l[r]=e.defaultProps[r]);return h(e,l,t&&t.key,t&&t.ref)}function h(e,t,n,o){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return r.vnode&&r.vnode(l),l}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!l++||u!==r.debounceRendering)&&((u=r.debounceRendering)||_)(k)}function k(){for(var e;l=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,o,l,_;e.__d&&(l=(o=(t=e).__v).__e,(_=t.__P)&&(n=[],r=M(_,o,f({},o),t.__n,void 0!==_.ownerSVGElement,null,n,null==l?m(o):l),N(n,o),r!=l&&g(o)))}))}function S(e,t,n,r,o,l,_,u,i){var p,f,d,h,v,y,g,b=n&&n.__k||c,k=b.length;if(u==s&&(u=null!=l?l[0]:k?m(n,0):null),p=0,t.__k=w(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[p])||d&&n.key==d.key&&n.type===d.type)b[p]=void 0;else for(f=0;f<k;f++){if((d=b[f])&&n.key==d.key&&n.type===d.type){b[f]=void 0;break}d=null}if(h=M(e,n,d=d||s,r,o,l,_,u,i),(f=n.ref)&&d.ref!=f&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(f,n.__c||h,n)),null!=h){var c;if(null==y&&(y=h),void 0!==n.__d)c=n.__d,n.__d=void 0;else if(l==d||h!=u||null==h.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(h),c=null;else{for(v=u,f=0;(v=v.nextSibling)&&f<k;f+=2)if(v==h)break e;e.insertBefore(h,u),c=u}"option"==t.type&&(e.value="")}u=void 0!==c?c:h.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&d.__e==u&&u.parentNode!=e&&(u=m(d))}return p++,n})),t.__e=y,null!=l&&"function"!=typeof t.type)for(p=l.length;p--;)null!=l[p]&&a(l[p]);for(p=k;p--;)null!=b[p]&&E(b[p],b[p]);if(g)for(p=0;p<g.length;p++)T(g[p],g[++p],g[++p])}function w(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)w(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function P(e,t,n,r,o){var l,_,u,i,s;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof r&&(l.cssText="",r=null),r)for(_ in r)n&&_ in n||x(l,_,"");if(n)for(u in n)r&&n[u]===r[u]||x(l,u,n[u])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(r||e.addEventListener(t,C,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,C,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](r.event?r.event(e):e)}function M(e,t,n,o,l,_,u,i,s){var c,p,a,d,h,m,g,b,k,w,x=t.type;if(void 0!==t.constructor)return null;(c=r.__b)&&c(t);try{e:if("function"==typeof x){if(b=t.props,k=(c=x.contextType)&&o[c.__c],w=c?k?k.props.value:c.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in x&&x.prototype.render?t.__c=p=new x(b,w):(t.__c=p=new y(b,w),p.constructor=x,p.render=U),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=w,p.__n=o,a=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=x.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=f({},p.__s)),f(p.__s,x.getDerivedStateFromProps(b,p.__s))),d=p.props,h=p.state,a)null==x.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,w)){for(p.props=b,p.state=p.__s,p.__d=!1,p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&u.push(p),c=0;c<t.__k.length;c++)t.__k[c]&&(t.__k[c].__=t);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(d,h,m)}))}p.context=w,p.props=b,p.state=p.__s,(c=r.__r)&&c(t),p.__d=!1,p.__v=t,p.__P=e,c=p.render(p.props,p.state,p.context),t.__k=null!=c&&c.type==v&&null==c.key?c.props.children:Array.isArray(c)?c:[c],null!=p.getChildContext&&(o=f(f({},o),p.getChildContext())),a||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,h)),S(e,t,n,o,l,_,u,i,s),p.base=t.__e,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else t.__e=D(n.__e,t,n,o,l,_,u,s);(c=r.diffed)&&c(t)}catch(e){r.__e(e,t,n)}return t.__e}function N(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function D(e,t,n,r,o,l,_,u){var i,p,f,a,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=l)for(i=0;i<l.length;i++)if(null!=(p=l[i])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,l[i]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),l=null}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else if(t!==n){if(null!=l&&(l=c.slice.call(e.childNodes)),f=(h=n.props||s).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!u){if(h===s)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,r,o){var l;for(l in n)l in t||P(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"value"===l||"checked"===l||n[l]===t[l]||P(e,l,t[l],n[l],r)})(e,v,h,o,u),t.__k=t.props.children,a||S(e,t,n,r,"foreignObject"!==t.type&&o,l,_,s,u),u||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function T(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function E(e,t,n){var o,l,_;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&E(o[_],t,n);null!=l&&a(l)}function U(e,t,n){return this.constructor(e,n)}function O(e,t,n){var o,l,_;r.__&&r.__(e,t),l=(o=n===i)?null:n&&n.__k||t.__k,e=d(v,null,[e]),_=[],M(t,(o?t:n||t).__k=e,l||s,s,void 0!==t.ownerSVGElement,n&&!o?[n]:l?null:c.slice.call(t.childNodes),_,n||s,o),N(_,e)}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return b(n.__E=n)}catch(t){e=t}throw e}},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},y.prototype.render=v,o=[],l=0,_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=s;var j=function(e,t,n,r){var o;t[0]=0;for(var l=1;l<t.length;l++){var _=t[l++],u=t[l]?(t[0]|=_?1:2,n[t[l++]]):t[++l];3===_?r[0]=u:4===_?r[1]=Object.assign(r[1]||{},u):5===_?(r[1]=r[1]||{})[t[++l]]=u:6===_?r[1][t[++l]]+=u+"":_?(o=e.apply(u,j(e,u,n,["",null])),r.push(o),u[0]?t[0]|=2:(t[l-2]=0,t[l]=o)):r.push(u)}return r},L=new Map;let A;O(function(e){var t=L.get(this);return t||(t=new Map,L.set(this,t)),(t=j(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",l="",_=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,e,o):3===r&&(e||o)?(_.push(3,e,o),r=2):2===r&&"..."===o&&e?_.push(4,e,0):2===r&&o&&!e?_.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(_.push(r,0,o,n),r=6),e&&(_.push(r,e,0,n),r=6)),o=""},i=0;i<e.length;i++){i&&(1===r&&u(),u(i));for(var s=0;s<e[i].length;s++)t=e[i][s],1===r?"<"===t?(u(),_=[_],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:l?t===l?l="":o+=t:'"'===t||"'"===t?l=t:">"===t?(u(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[i][s+1])?(u(),3===r&&(_=_[0]),r=_,(_=_[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(u(),r=2):o+=t),3===r&&"!--"===o&&(r=4,_=_[0])}return u(),_}(e)),t),arguments,[])).length>1?t:t[0]}.bind(d)(A||(A=(e=>e)`<a href="/">Hello!</a>`)),document.querySelector(".root"))}]);
//# sourceMappingURL=main.mjs.map