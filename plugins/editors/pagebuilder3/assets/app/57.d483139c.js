webpackJsonppagefly([57],{395:function(t,e,n){function a(t,e,n){function a(e){var n=_,a=x;return _=x=void 0,E=e,k=t.apply(a,n)}function s(t){return E=t,y=setTimeout(f,e),M?a(t):k}function u(t){var n=t-w,a=t-E,i=e-n;return z?c(i,b-a):i}function d(t){var n=t-w,a=t-E;return void 0===w||n>=e||n<0||z&&a>=b}function f(){var t=o();if(d(t))return g(t);y=setTimeout(f,u(t))}function g(t){return y=void 0,T&&_?a(t):(_=x=void 0,k)}function v(){void 0!==y&&clearTimeout(y),E=0,_=w=x=y=void 0}function m(){return void 0===y?k:g(o())}function h(){var t=o(),n=d(t);if(_=arguments,x=this,w=t,n){if(void 0===y)return s(w);if(z)return y=setTimeout(f,e),a(w)}return void 0===y&&(y=setTimeout(f,e)),k}var _,x,b,k,y,w,E=0,M=!1,z=!1,T=!0;if("function"!=typeof t)throw new TypeError(r);return e=l(e)||0,i(n)&&(M=!!n.leading,z="maxWait"in n,b=z?p(l(n.maxWait)||0,e):b,T="trailing"in n?!!n.trailing:T),h.cancel=v,h.flush=m,h}var i=n(5),o=n(401),l=n(428),r="Expected a function",p=Math.max,c=Math.min;t.exports=a},401:function(t,e,n){var a=n(6),i=function(){return a.Date.now()};t.exports=i},801:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return F});var a=n(49),i=n.n(a),o=n(141),l=n.n(o),r=n(349),p=n.n(r),c=n(350),s=n.n(c),u=n(351),d=n.n(u),f=n(352),g=n.n(f),v=n(361),m=n.n(v),h=n(13),_=n.n(h),x=n(29),b=n.n(x),k=n(0),y=(n.n(k),n(358)),w=(n(365),n(380),n(369),n(356)),E=n(359),M=n(410),z=(n(353),n(355),n(362)),T=(n(357),n(7)),A=n.n(T),D=n(143),C=n.n(D),q=n(144),L=(n.n(q),n(802)),j=m()(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 5px 10px;\n\n\t// & > div > input {\n\t// \tfont-size: 16px !important;\n\t// \theight: 30px !important;\n\t// \tline-height: 28px !important;\n\t// }\n\t& > * {\n\t\tdisplay: flex;\n\t\tflex-flow: row nowrap;\n\t\tflex: 0 0 auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\t& > * > * + * {\n\t\tmargin-left: 5px !important;\n\t}\n\n\t",";\n"],["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 5px 10px;\n\n\t// & > div > input {\n\t// \tfont-size: 16px !important;\n\t// \theight: 30px !important;\n\t// \tline-height: 28px !important;\n\t// }\n\t& > * {\n\t\tdisplay: flex;\n\t\tflex-flow: row nowrap;\n\t\tflex: 0 0 auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\t& > * > * + * {\n\t\tmargin-left: 5px !important;\n\t}\n\n\t",";\n"]),P=m()(["\n\tdisplay: inline-block;\n\tposition: absolute;\n\tdisplay: block;\n\ttop; 0;\n\tleft: 0;\n\tfont-size: 18px;\n\tfont-weight: 300;\n\tfont-family: Raleway;\n\tletter-spacing: 0.01em;\n\ttext-align: center;\n\tline-height: 40px;\n\theight: 40px;\n\twidth: 50px;\n\toverflow: hidden;\n\n\tcolor: ",";\n\tbackground-color: ",";\n\t& > span {\n\t\tpadding: 0 10px;\n\t}\n\t& > div {\n\t\theight: 40px;\n\t\tpadding: 6px;\n\t\tmargin: -10px;\n\t\tborder: 4px solid purple;\n\t\tbox-sizing: content-box;\n\t\tbackground-color: ",";\n\t\ttransform-style: flat;\n\t\tperspective: 150px;\n\t\tfilter: blur(0px);\n\n\t\t& > div {\n\t\t\tpadding: 0;\n\t\t\ttransform: translateZ(0px) rotateY(0deg) rotateX(0deg) rotate(0deg);\n\t\t\ttransform-style: preserve-3d;\n\t\t\topacity: 1;\n\t\t\tcolor: ",";\n\t\t\t> i.icon {\n\t\t\t\tmargin: 0 -10px !important;\n\t\t\t\tline-height: 40px !important;\n\t\t\t\tbackface-visibility: visible !important;\n\t\t\t\tfont-size: 25px; // 40 / 1.6 = 25 --\x3e golden ratio\n\t\t\t}\n\t\t}\n\t}\n\t& > div,\n\t& > div > div,\n\t& > div > div > i {\n\t\ttransform-origin: 50% 50%;\n\t\ttransition: all 0.5s cubic-bezier(0.79, 0.19, 0.89, 1.67);\n\t}\n\t&.faded > div {\n\t\tfilter: blur(15px);\n\t}\n\t&.faded > div > div {\n\t\ttransform: translate3d(0px, 0px, 100px) rotateX(45deg) rotateY(180deg)\n\t\t\trotateZ(45deg);\n\t\topacity: 0.5;\n\t\tcolor: cyan;\n\t}\n"],["\n\tdisplay: inline-block;\n\tposition: absolute;\n\tdisplay: block;\n\ttop; 0;\n\tleft: 0;\n\tfont-size: 18px;\n\tfont-weight: 300;\n\tfont-family: Raleway;\n\tletter-spacing: 0.01em;\n\ttext-align: center;\n\tline-height: 40px;\n\theight: 40px;\n\twidth: 50px;\n\toverflow: hidden;\n\n\tcolor: ",";\n\tbackground-color: ",";\n\t& > span {\n\t\tpadding: 0 10px;\n\t}\n\t& > div {\n\t\theight: 40px;\n\t\tpadding: 6px;\n\t\tmargin: -10px;\n\t\tborder: 4px solid purple;\n\t\tbox-sizing: content-box;\n\t\tbackground-color: ",";\n\t\ttransform-style: flat;\n\t\tperspective: 150px;\n\t\tfilter: blur(0px);\n\n\t\t& > div {\n\t\t\tpadding: 0;\n\t\t\ttransform: translateZ(0px) rotateY(0deg) rotateX(0deg) rotate(0deg);\n\t\t\ttransform-style: preserve-3d;\n\t\t\topacity: 1;\n\t\t\tcolor: ",";\n\t\t\t> i.icon {\n\t\t\t\tmargin: 0 -10px !important;\n\t\t\t\tline-height: 40px !important;\n\t\t\t\tbackface-visibility: visible !important;\n\t\t\t\tfont-size: 25px; // 40 / 1.6 = 25 --\x3e golden ratio\n\t\t\t}\n\t\t}\n\t}\n\t& > div,\n\t& > div > div,\n\t& > div > div > i {\n\t\ttransform-origin: 50% 50%;\n\t\ttransition: all 0.5s cubic-bezier(0.79, 0.19, 0.89, 1.67);\n\t}\n\t&.faded > div {\n\t\tfilter: blur(15px);\n\t}\n\t&.faded > div > div {\n\t\ttransform: translate3d(0px, 0px, 100px) rotateX(45deg) rotateY(180deg)\n\t\t\trotateZ(45deg);\n\t\topacity: 0.5;\n\t\tcolor: cyan;\n\t}\n"]),S=C.a.div(j,function(t){return t.css}),Y=(C.a.span(P,function(t){return t.theme.general.invert},function(t){return t.theme.primary},function(t){return t.theme.primary},function(t){return t.theme.general.invert}),["apple","google","facebook","android","codepen","foursquare","github","lastfm","slack","vimeo","steam"]),X=void 0,Z=void 0,F=function(t){function e(){return p()(this,e),d()(this,(e.__proto__||l()(e)).apply(this,arguments))}return g()(e,t),s()(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"changeLogo",value:function(){var t=this;this.logo&&this.icon&&(Z=_.a.shuffle(Y).pop(),X&&Y.unshift(X),X=Z,this.logo.classList.add("faded"),_.a.delay(function(){t.logo&&t.icon&&(t.icon.setAttribute("class","icon "+Z),t.logo.classList.remove("faded"))},600))}},{key:"save",value:function(){var t=this;if(this.app.page)return new i.a(function(e){_.a.defer(function(){t.invoke("app.page.editor.model.save",{json:t.get("app.page.data")},{patch:!0,success:e,error:e})})})}},{key:"cancel",value:function(){var t=this;if(this.app.page)return new i.a(function(e){_.a.defer(function(){t.invoke("app.page.editor.close",{success:e,error:e})})})}},{key:"publish",value:function(){var t=this;if(this.app.page)return new i.a(function(e){_.a.defer(function(){t.save().then(function(){t.invoke("app.page.renderHTML",function(n){t.invoke("app.page.editor.model.save",{html:n},{patch:!0,success:e,error:e})})})})})}},{key:"logout",value:function(){var t=this;b.a.get("/api/logout",function(){t.app.setState({auth:null,page:null,selected:null},function(){return t.app.forceUpdate()})})}},{key:"view",value:function(){var t=location.origin+"/"+this.app.page.editor.model.get("user")+"/"+this.app.page.editor.model.get("name");window.open(t,"pagefly-preview-window")}},{key:"playGuidedTour",value:function(){L.a.play({app:this.app})}},{key:"render",value:function(){if(!this.app.page)return A.a.createElement("header",null,A.a.createElement(S,null,A.a.createElement("div",null,A.a.createElement(E.default,{size:"lg"},A.a.createElement(w.default,{icon:"browser",action:"launch",value:"pages",tooltip:"My Pages"}),A.a.createElement(z.default,{options:[{icon:"tv",label:"All",value:"all"},{icon:"mobile",label:"Mobile",value:"mobile"},{icon:"tablet",label:"Tablet",value:"tablet"},{icon:"laptop",label:"Laptop",value:"laptop"},{icon:"desktop",label:"Desktop",value:"desktop"}]}))),A.a.createElement("span",null),A.a.createElement("div",null,A.a.createElement(E.default,{size:"lg",plain:!0,primary:!0,target:this.app},A.a.createElement(w.default,{icon:"spy",action:"launch",value:"devtools",tooltip:"Developer Tools"}),A.a.createElement(M.default,{position:"bottom",icon:"user circle",label:this.get("app.state.auth.username","Username")},A.a.createElement(E.default,{plain:!0,size:"lg",target:this},A.a.createElement(w.default,{label:"Logout",action:"logout"})))))));this.get("app.page.editor.model");return A.a.createElement("header",null,A.a.createElement(S,null,A.a.createElement(E.default,{size:"lg",plain:!0},A.a.createElement(z.default,{target:this.context.page,bind:"state.device",options:[{icon:"tv",label:"All",value:"all"},{icon:"mobile",label:"Mobile",value:"mobile"},{icon:"tablet",label:"Tablet",value:"tablet"},{icon:"laptop",label:"Laptop",value:"laptop"},{icon:"desktop",label:"Desktop",value:"desktop"}]})),A.a.createElement(E.default,{size:"lg",plain:!0},A.a.createElement(w.default,{icon:"reply",action:"undo"}),A.a.createElement(w.default,{icon:"share",action:"redo"})),A.a.createElement("div",null,A.a.createElement(w.default,{label:"Cancel",size:"lg",plain:!0}),A.a.createElement(w.default,{label:"Save",size:"lg",primary:!0}))))}}]),e}(y.default)},802:function(t,e,n){"use strict";var a=n(803),i=n(395),o=n.n(i);e.a=new a.a([{setup:function(t){return t.app.launch("clipMask")},check:function(t){var e=t.app;return!!e.__clipMask&&!!e.__sidebar&&!!e.__sidebar.openCatalogButton}},{setup:function(t){var e=t.app,n=t.stop;e.__clipMask.on("cancel",function(){confirm("Cancel the tour?")&&(n(),e.__clipMask.off("cancel"),e.__clipMask.module.kill())}),e.__clipMask.focus(e.__sidebar.openCatalogButton.el,"Add Element","Click here to show element catalog")},check:function(t){var e=t.app;t.duration;return!!e.__catalog&&!0===e.__catalog.state.visible}},{setup:function(t){var e=t.app;return e.__clipMask.focus(e.__catalog.el,"Pick Element","Pick a template from catalog")},check:function(t){var e=t.app;t.duration;return!0===e.__catalog.state.dragging}},{event:"drop",setup:function(t){var e=t.app;return e.__clipMask.focus(e.__editor.mainEl,"Add Element","Drop your selected element here")},check:function(t){var e=t.app;t.duration;return!1===e.__catalog.state.dragging}},{setup:function(t){var e=t.app;return e.__clipMask.focus(e.__catalog.el,"Pick More Element","Pick a template from catalog")},check:function(t){var e=t.app;t.duration;return!0===e.__catalog.state.dragging}},{event:"drop",setup:function(t){var e=t.app;return e.__clipMask.focus(e.__editor.mainEl,"Add More Element","Drop your selected element here")},check:function(t){var e=t.app;t.duration;return!1===e.__catalog.state.dragging}},{event:"drop",setup:function(t){var e=t.app;e.__clipMask.focus(e.__editor.mainEl,"Edit Element","Click on an element to select it"),e.__editor.page.setState({selected:null}),e.__catalog.close()},check:function(t){var e=t.app;t.duration;return!e.__catalog.state.visible&&!!e.__editor.page.selected}},{setup:function(t){var e=t.app,n=(t.duration,0);e.__didChangedStyle=!1,e.__clipMask.focus(e.get("__inspector.element"),"Edit Element","Use this panel to change element settings"),e.on("page:update:element:styling",o()(function(){if(++n>3)e.__didChangedStyle=!0;else switch(n){case 1:e.__clipMask.focus(e.get("__inspector.element"),"Very nice!","Lets style a few more...");break;case 2:e.__clipMask.focus(e.get("__inspector.element"),"Awesome!","please continue...");break;case 3:e.__clipMask.focus(e.get("__inspector.element"),"You've got it!","Do it one more time...")}},200))},clean:function(t){return t.app.off("page:update:element:styling")},check:function(t){return t.app.__didChangedStyle}},{setup:function(t){t.app}},{setup:function(t){return t.app.__clipMask.module.kill()}}])},803:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var a=n(382),i=n.n(a),o=n(28),l=n.n(o),r=n(512),p=n.n(r),c=n(349),s=n.n(c),u=n(350),d=n.n(u),f=function(){function t(e){s()(this,t),this.steps=new p.a("function"==typeof e?e():e),this.play=this.play.bind(this),this.stop=this.stop.bind(this),this.next=this.next.bind(this)}return d()(t,[{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;this.stopped=!1,this.options=t,this.interval=e,this.data={},this.sequence=this.steps.entries(),setTimeout(this.next)}},{key:"stop",value:function(){this.stopped=!0}},{key:"next",value:function(){var t=this;if(this.sequence){var e=this.sequence.next();if(e.done)return void(this.sequence=void 0);var n=void 0,a=l()({},this.options,{stop:this.stop,data:this.data,time:Date.now(),duration:0}),o=i()(e.value,1),r=o[0],p=function(){r.clean&&r.clean(a),clearInterval(n),!t.stopped&&requestAnimationFrame(t.next)};requestAnimationFrame(function(){r.setup&&r.setup(a),r.check?n=setInterval(function(){if(t.stopped)return p();requestAnimationFrame(function(){a.duration=Math.floor((Date.now()-a.time)/100)/10,r.check(a)&&p()})},t.interval):p()})}}}]),t}()}});