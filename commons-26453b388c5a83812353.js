(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",c),d}}},C4nX:function(e,t){e.exports={title:"east-woo",description:"Hello :) I'm east-woo.This is a dev blog.",author:"east-woo",siteUrl:"https://east-woo.github.io/",links:{github:"https://github.com/east-woo",linkedIn:"https://linkedin.com",facebook:"https://www.facebook.com",instagram:"https://www.instagram.com",email:"mailto:dwseo96@wavus.co.kr"},utterances:{repo:"east-woo/gatsby-starter-hoodie",type:"pathname"}}},DGZL:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qhky"),i=n("C4nX");t.a=function(e){var t=e.title,n=e.description,r=e.url;return o.a.createElement(a.a,null,o.a.createElement("title",null,t),o.a.createElement("meta",{property:"og:url",content:r}),o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:image",content:i.siteUrl+"/og-image.png"}),n&&o.a.createElement("meta",{name:"description",content:n}),n&&o.a.createElement("meta",{property:"og:description",content:n}))}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return function(t){return o.a.createElement(s,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return o.a.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,u=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),e.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},U3f4:function(e,t,n){var r=n("2oRo"),o=n("g6v/"),a=n("7dAM"),i=n("rW0t"),c=n("0Dky"),l=r.RegExp,u=l.prototype;o&&c((function(){var e=!0;try{l(".","d")}catch(c){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var i in e&&(a.hasIndices="d"),a)o(i,a[i]);return Object.getOwnPropertyDescriptor(u,"flags").get.call(t)!==r||n!==r}))&&a(u,"flags",{configurable:!0,get:i})},bmMU:function(e,t,n){n("U3f4");var r="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof n.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof n.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],n[u[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},ntAx:function(e,t,n){"use strict";var r,o,a=n("q1tI"),i=n.n(a),c=n("vOnD"),l=n("/MKj"),u=n("8eQZ"),s="#343a40",d="#495057",f="#868e96",p="#adb5bd",h="#ced4da",m="#f1f3f5",g={name:"light",colors:{bodyBackground:"#ffffff",text:"#212529",secondaryText:d,tertiaryText:f,mutedText:p,hoveredLinkText:"#f8f9fa",border:h,activatedBorder:f,background:m,icon:f,divider:"#e9ecef",headerBackground:"rgba(255, 255, 255, 0.85)",headerShadow:"rgba(0, 0, 0, 0.08)",inlineCodeBackground:"#e9ecef",inlineCodeBackgroundDarker:h,tagBackground:m,selectedTagBackground:d,hoveredTagBackground:"#dee2e6",hoveredSelectedTagBackground:s,nextPostButtonBackground:"rgba(0, 0, 0, 0.06)",hoveredNextPostButtonBackground:"rgba(0, 0, 0, 0.08)",seriesBackground:m,tagText:d,selectedTagText:"#f8f9fa",spinner:d,scrollTrack:m,scrollHandle:h,blockQuoteBorder:h,blockQuoteBackground:m,textFieldBorder:h,textFieldActivatedBorder:p,tableBackground:m}},b={name:"dark",colors:{bodyBackground:"#212529",text:"#f8f9fa",secondaryText:h,tertiaryText:p,mutedText:f,hoveredLinkText:"#212529",border:p,activatedBorder:"#dee2e6",background:s,icon:p,divider:s,headerBackground:"rgba(33, 37, 41, 0.85)",headerShadow:"rgba(255, 255, 255, 0.08)",inlineCodeBackground:d,inlineCodeBackgroundDarker:s,tagBackground:s,selectedTagBackground:"#e9ecef",hoveredTagBackground:d,hoveredSelectedTagBackground:m,nextPostButtonBackground:"rgba(255, 255, 255, 0.05)",hoveredNextPostButtonBackground:"rgba(255, 255, 255, 0.08)",seriesBackground:s,tagText:"#e9ecef",selectedTagText:"#212529",spinner:m,scrollTrack:s,scrollHandle:f,blockQuoteBorder:d,blockQuoteBackground:s,textFieldBorder:d,textFieldActivatedBorder:f,tableBackground:"#292e33"}},y=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},v=Object(c.css)(r||(r=y(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),w=(Object(c.createGlobalStyle)(o||(o=y(["",""],["",""])),v),v),T=Object(c.createGlobalStyle)([""," body{font-family:'Noto Sans KR',sans-serif;background:",";}"],w,(function(e){return e.theme.colors.bodyBackground})),k=n("Wbzz"),x=n("C4nX"),E=n("ma3e"),O=c.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-12xtq5x-0"})(["display:block;position:fixed;top:","px;left:0;right:0;padding:16px;background-color:",";box-shadow:0 0 8px ",";backdrop-filter:blur(5px);opacity:",";transition:top 0.5s,opacity 0.5s;z-index:999;@media (max-width:768px){padding:16px 0;}"],(function(e){return e.isHidden?-60:0}),(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.colors.headerShadow}),(function(e){return e.isHidden?0:1})),C=c.default.div.withConfig({displayName:"Header__Inner",componentId:"sc-12xtq5x-1"})(["display:flex;justify-content:space-between;margin:0 64px;@media (max-width:768px){margin:0 15px;}"]),S=c.default.span.withConfig({displayName:"Header__BlogTitle",componentId:"sc-12xtq5x-2"})(['letter-spacing:-1px;font-family:"Source Code Pro",sans-serif;font-weight:700;font-size:24px;color:',";& > a{text-decoration:none;color:inherit;}"],(function(e){return e.theme.colors.text})),A=c.default.div.withConfig({displayName:"Header__Menu",componentId:"sc-12xtq5x-3"})(["display:flex;justify-content:space-between;align-items:center;& svg{width:20px;height:20px;margin-right:15px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& svg:hover path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),j=c.default.div.withConfig({displayName:"Header__ToggleWrapper",componentId:"sc-12xtq5x-4"})(["width:20px;height:24px;margin-right:15px;overflow:hidden;box-sizing:border-box;"]),B=c.default.div.withConfig({displayName:"Header__IconRail",componentId:"sc-12xtq5x-5"})(["position:relative;display:flex;flex-direction:column;justify-content:space-between;height:40px;top:",";transition:top 0.4s;& > svg{transition:opacity 0.25s;}& > svg:first-child{opacity:",";}& > svg:last-child{opacity:",";}"],(function(e){return"light"===e.theme?"-19px":"0px"}),(function(e){return"light"===e.theme?0:1}),(function(e){return"dark"===e.theme?0:1})),I=function(e){var t=e.toggleTheme,n=Object(c.useTheme)(),r=Object(a.useState)(),o=r[0],l=r[1],u=Object(a.useState)(!1),s=u[0],d=u[1],f=function(){o>=window.scrollY?d(!1):o<window.scrollY&&400<=window.scrollY&&d(!0),l(window.scrollY)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[o]),Object(a.useEffect)((function(){l(window.scrollY)}),[]),i.a.createElement(O,{isHidden:s},i.a.createElement(C,null,i.a.createElement(S,null,i.a.createElement(k.Link,{to:"/"},x.title)),i.a.createElement(A,null,i.a.createElement(j,null,i.a.createElement(B,{theme:n.name},i.a.createElement(E.l,{onClick:t}),i.a.createElement(E.i,{onClick:t}))),i.a.createElement(k.Link,{to:"/tags"},i.a.createElement(E.m,null)),i.a.createElement(k.Link,{to:"/series"},i.a.createElement(E.h,null)),i.a.createElement(k.Link,{to:"/rss.xml"},i.a.createElement(E.j,null)),i.a.createElement(k.Link,{to:"/search"},i.a.createElement(E.k,{style:{marginRight:0}})))))},P=c.default.div.withConfig({displayName:"Body__BodyWrapper",componentId:"sc-v34kqr-0"})(["margin:0 auto;padding-top:80px;max-width:680px;"]),L=function(e){var t=e.children;return i.a.createElement(P,null,t)},q=c.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1qfqdid-0"})(["margin-top:32px;padding:40px 0;border-top:1px solid ",";text-align:center;font-size:11pt;font-weight:lighter;color:",";& > a{color:",";}"],(function(e){return e.theme.colors.divider}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.colors.text})),N=function(){return i.a.createElement(q,null,"© ",x.title,", Built with Gatsby and"," ",i.a.createElement("a",{href:"https://github.com/devHudi/gatsby-starter-hoodie",target:"blank"},"gatsby-starter-hoodie")," ","theme.")};t.a=function(e){var t=e.children,n=Object(l.useDispatch)(),r=Object(l.useSelector)((function(e){return e.theme})).theme,o=null;"undefined"!=typeof window&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches);var s=null;"undefined"!=typeof localStorage&&(s=localStorage.getItem("theme"));return Object(a.useEffect)((function(){o&&!s?n(o?u.b:u.c):s&&n("dark"===s?u.b:u.c)}),[]),i.a.createElement(c.ThemeProvider,{theme:"light"===r?g:b},i.a.createElement(T,null),i.a.createElement(I,{toggleTheme:function(){var e="dark"===r?"light":"dark";n("dark"===e?u.b:u.c),localStorage.setItem("theme",e)}}),i.a.createElement(L,null,t),i.a.createElement(N,null))}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("E9XD");var r,o,a,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),d=n("bmMU"),f=n.n(d),p=n("q1tI"),h=n.n(p),m=n("YVoz"),g=n.n(m),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),k="cssText",x="href",E="http-equiv",O="innerHTML",C="itemprop",S="name",A="property",j="rel",B="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",q="defer",N="encodeSpecialCharacters",M="onChangeClientState",_="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=Z(e,w.TITLE),n=Z(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},G=function(e){return Z(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==k&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=g()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,d=e.title,f=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),ce(d,f);var p={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,a),metaTags:ue(w.META,i),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=de(n,r),[h.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return de(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===O||n===k){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===k)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,d=void 0===s?"":s,f=e.titleAttributes;return{base:fe(w.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(y,o,r),link:fe(w.LINK,a,r),meta:fe(w.META,i,r),noscript:fe(w.NOSCRIPT,c,r),script:fe(w.SCRIPT,l,r),style:fe(w.STYLE,u,r),title:fe(w.TITLE,{title:d,titleAttributes:f},r)}},he=s()((function(e){return{baseTag:X([x,I],e),bodyAttributes:V(b,e),defer:Z(e,q),encode:Z(e,N),htmlAttributes:V(y,e),linkTags:J(w.LINK,[j,x],e),metaTags:J(w.META,[S,T,E,A,C],e),noscriptTags:J(w.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:J(w.SCRIPT,[B,O],e),styleTags:J(w.STYLE,[k],e),title:Q(e),titleAttributes:V(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),me=(o=he,i=a=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return F({},o,((t={})[r.type]=i,t.titleAttributes=F({},a),t));case w.BODY:return F({},o,{bodyAttributes:F({},a)});case w.HTML:return F({},o,{htmlAttributes:F({},a)})}return F({},o,((n={})[r.type]=F({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),a.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},rW0t:function(e,t,n){"use strict";var r=n("glrk");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=commons-26453b388c5a83812353.js.map