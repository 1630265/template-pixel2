webpackJsonppagefly([1],{348:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Canvas",function(){return j}),n.d(e,"init",function(){return M}),n.d(e,"default",function(){return N});var r=n(85),o=n.n(r),i=n(141),a=n.n(i),u=n(349),f=n.n(u),l=n(350),c=n.n(l),s=n(351),d=n.n(s),p=n(352),h=n.n(p),y=n(49),b=n.n(y),m=n(361),v=n.n(m),g=n(142),_=n(7),x=n.n(_),w=n(79),E=n.n(w),S=n(143),O=n.n(S),k=v()(["\n\t& {\n\t\tposition: relative;\n\t\toverflow: auto;\n\t}\n\t& > div[data-empty='true'] {\n\t\tdisplay: flex;\n\t\tflex-flow: column wrap;\n\t\tmin-height: 400px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground: #f5f5f5;\n\t\t> h3 {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\tiframe {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tmin-height: 500px;\n\t\theight: auto;\n\t}\n\t& .click-to-edit {\n\t\tcolor: #fff;\n\t\tfont-size: 16px;\n\t\tpadding: 12px 30px;\n\t\tbackground-color: #ff6c00;\n\t\tborder: none;\n\t\tborder-radius: 3px;\n\t\t&.isSticky {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t}\n\t\t&:hover {\n\t\t\topacity: 0.7;\n\t\t}\n\t}\n\t& h3 {\n\t\tfont-size: 22px;\n\t\tdisplay: none;\n\t\tmargin: 0 0 20px;\n\t}\n\t& *[data-hidden='true'] {\n\t\tdisplay: none;\n\t}\n"],["\n\t& {\n\t\tposition: relative;\n\t\toverflow: auto;\n\t}\n\t& > div[data-empty='true'] {\n\t\tdisplay: flex;\n\t\tflex-flow: column wrap;\n\t\tmin-height: 400px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground: #f5f5f5;\n\t\t> h3 {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\tiframe {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tmin-height: 500px;\n\t\theight: auto;\n\t}\n\t& .click-to-edit {\n\t\tcolor: #fff;\n\t\tfont-size: 16px;\n\t\tpadding: 12px 30px;\n\t\tbackground-color: #ff6c00;\n\t\tborder: none;\n\t\tborder-radius: 3px;\n\t\t&.isSticky {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t}\n\t\t&:hover {\n\t\t\topacity: 0.7;\n\t\t}\n\t}\n\t& h3 {\n\t\tfont-size: 22px;\n\t\tdisplay: none;\n\t\tmargin: 0 0 20px;\n\t}\n\t& *[data-hidden='true'] {\n\t\tdisplay: none;\n\t}\n"]),j=O.a.div(k),M=function(t){return new b.a(function(e){var n=Object(g.a)("<div>").insertAfter(t.textArea).get(0);P(t)?e(E.a.render(x.a.createElement(N,t),n)):(Object(g.a)("#pagefly-pb-app").addClass("hidden"),e(E.a.render(x.a.createElement(T,null),n)))})},P=function(t){if("true"===Object({ENV:"production",BABEL_ENV:"production",NODE_ENV:"production"}).FREE){if(window.pagefly_data.isNewContent||!t.page_id||!t.salt)return!1;if(t.id&&t.id!==t.page_id)return!1;if(t.textArea.value.indexOf("\x3c!-- Start New PageBuilder Data|")<0||t.textArea.value.indexOf("\x3c!-- Start New PageBuilder HTML --\x3e")<0)return!1}return!0},N=function(t){function e(){return f()(this,e),d()(this,(e.__proto__||a()(e)).apply(this,arguments))}return h()(e,t),c()(e,[{key:"componentDidMount",value:function(){var t=this,e=window.location.origin+location.pathname.replace(/(.*)administrator\/index\.php/,"$1"),n=this.props,r=n.textArea.value;this.frame&&this.frame.addEventListener("load",function(){Object(g.a)(t.frame.contentDocument.head).prepend('<base href="'+e+'">'),t.frame.contentDocument.body.innerHTML=r,Object(g.a)(document).ready(function(){setTimeout(function(){Object(g.a)("#jsn-pb2-editor-switcher").addClass("hidden");var t=document.getElementById("pb-editor-switcher");Object(g.a)(t).find('button:contains("Default Editor")').trigger("click").addClass("hidden"),t&&t.setAttribute("class","hidden")},500)})})}},{key:"render",value:function(){var t=this,e=this.props.items&&o()(this.props.items).length>3;return x.a.createElement(j,null,x.a.createElement("div",{id:"pb-placeholder","data-empty":!e},x.a.createElement("h3",null,"This article is managed by JSN PageBuilder 3"),x.a.createElement("button",{ref:function(e){return t.button=e},className:"click-to-edit "+(e?"isSticky":"")},"Click To Edit")),x.a.createElement("iframe",{id:"pb-preview","data-hidden":!e,ref:function(e){return t.frame=e},name:"PageBuilder3 Preview Sandbox",srcDoc:"<!DOCTYPE html>"}))}}]),e}(x.a.PureComponent),T=function(){return x.a.createElement("div",{style:{display:"block",paddingTop:"2rem",textAlign:"center",color:"#333"}},x.a.createElement("span",null,"This version of JSN PageBuilder 3 does not allow page creation.",x.a.createElement("br",null),x.a.createElement("br",null),"To create new page using JSN PageBuilder 3,",x.a.createElement("a",{href:"https://www.joomlashine.com/joomla-extensions/jsn-pagebuilder.html",target:"_blank"}," ","please purchase a license"),".",x.a.createElement("br",null),x.a.createElement("br",null),"If you already have purchased the product,",x.a.createElement("a",{href:"index.php?option=com_pagebuilder3&view=upgrade"}," ","please upgrade now"),"."))}},349:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},350:function(t,e,n){"use strict";e.__esModule=!0;var r=n(93),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},351:function(t,e,n){"use strict";e.__esModule=!0;var r=n(385),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},352:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(173),i=r(o),a=n(399),u=r(a),f=n(385),l=r(f);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,l.default)(e)));t.prototype=(0,u.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},361:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(473),i=r(o),a=n(159),u=r(a);e.default=function(t,e){return(0,u.default)((0,i.default)(t,{raw:{value:(0,u.default)(e)}}))}},385:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(464),i=r(o),a=n(434),u=r(a),f="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":f(t)}},397:function(t,e,n){e.f=n(3)},398:function(t,e,n){var r=n(4),o=n(2),i=n(87),a=n(397),u=n(14).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},399:function(t,e,n){t.exports={default:n(471),__esModule:!0}},433:function(t,e,n){var r=n(38);t.exports=Array.isArray||function(t){return"Array"==r(t)}},434:function(t,e,n){t.exports={default:n(466),__esModule:!0}},464:function(t,e,n){t.exports={default:n(465),__esModule:!0}},465:function(t,e,n){n(82),n(148),t.exports=n(397).f("iterator")},466:function(t,e,n){n(467),n(155),n(469),n(470),t.exports=n(2).Symbol},467:function(t,e,n){"use strict";var r=n(4),o=n(20),i=n(15),a=n(8),u=n(167),f=n(158).KEY,l=n(23),c=n(95),s=n(53),d=n(55),p=n(3),h=n(397),y=n(398),b=n(468),m=n(433),v=n(11),g=n(21),_=n(94),x=n(37),w=n(150),E=n(171),S=n(97),O=n(14),k=n(52),j=S.f,M=O.f,P=E.f,N=r.Symbol,T=r.JSON,A=T&&T.stringify,C=p("_hidden"),B=p("toPrimitive"),D={}.propertyIsEnumerable,J=c("symbol-registry"),F=c("symbols"),I=c("op-symbols"),z=Object.prototype,L="function"==typeof N,V=r.QObject,H=!V||!V.prototype||!V.prototype.findChild,R=i&&l(function(){return 7!=w(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(z,e);r&&delete z[e],M(t,e,n),r&&t!==z&&M(z,e,r)}:M,Y=function(t){var e=F[t]=w(N.prototype);return e._k=t,e},G=L&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},K=function(t,e,n){return t===z&&K(I,e,n),v(t),e=_(e,!0),v(n),o(F,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=w(n,{enumerable:x(0,!1)})):(o(t,C)||M(t,C,x(1,{})),t[C][e]=!0),R(t,e,n)):M(t,e,n)},Q=function(t,e){v(t);for(var n,r=b(e=g(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},W=function(t,e){return void 0===e?w(t):Q(w(t),e)},$=function(t){var e=D.call(this,t=_(t,!0));return!(this===z&&o(F,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,C)&&this[C][t])||e)},q=function(t,e){if(t=g(t),e=_(e,!0),t!==z||!o(F,e)||o(I,e)){var n=j(t,e);return!n||!o(F,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},U=function(t){for(var e,n=P(g(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==C||e==f||r.push(e);return r},X=function(t){for(var e,n=t===z,r=P(n?I:g(t)),i=[],a=0;r.length>a;)!o(F,e=r[a++])||n&&!o(z,e)||i.push(F[e]);return i};L||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(I,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),R(this,t,x(1,n))};return i&&H&&R(z,t,{configurable:!0,set:e}),Y(t)},u(N.prototype,"toString",function(){return this._k}),S.f=q,O.f=K,n(172).f=E.f=U,n(88).f=$,n(157).f=X,i&&!n(87)&&u(z,"propertyIsEnumerable",$,!0),h.f=function(t){return Y(p(t))}),a(a.G+a.W+a.F*!L,{Symbol:N});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)p(Z[tt++]);for(var et=k(p.store),nt=0;et.length>nt;)y(et[nt++]);a(a.S+a.F*!L,"Symbol",{for:function(t){return o(J,t+="")?J[t]:J[t]=N(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),a(a.S+a.F*!L,"Object",{create:W,defineProperty:K,defineProperties:Q,getOwnPropertyDescriptor:q,getOwnPropertyNames:U,getOwnPropertySymbols:X}),T&&a(a.S+a.F*(!L||l(function(){var t=N();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!G(e))return e}),r[1]=e,A.apply(T,r)}}}),N.prototype[B]||n(19)(N.prototype,B,N.prototype.valueOf),s(N,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},468:function(t,e,n){var r=n(52),o=n(157),i=n(88);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),f=i.f,l=0;u.length>l;)f.call(t,a=u[l++])&&e.push(a);return e}},469:function(t,e,n){n(398)("asyncIterator")},470:function(t,e,n){n(398)("observable")},471:function(t,e,n){n(472);var r=n(2).Object;t.exports=function(t,e){return r.create(t,e)}},472:function(t,e,n){var r=n(8);r(r.S,"Object",{create:n(150)})},473:function(t,e,n){t.exports={default:n(474),__esModule:!0}},474:function(t,e,n){n(475);var r=n(2).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},475:function(t,e,n){var r=n(8);r(r.S+r.F*!n(15),"Object",{defineProperties:n(168)})}});