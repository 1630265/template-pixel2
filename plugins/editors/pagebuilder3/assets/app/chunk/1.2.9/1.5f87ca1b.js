webpackJsonppagefly([1],{348:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),l=function(t){return t&&t.__esModule?t:{default:t}}(n),o=window.pagefly_data.component||"",r="com_content"===o?[{name:"Readmore",icon:l.default.createElement("svg",{width:"188",height:"118",viewBox:"0 0 188 118"},l.default.createElement("defs",null,l.default.createElement("filter",{x:"-3.9%",y:"-4.5%",width:"107.8%",height:"112.7%",filterUnits:"objectBoundingBox",id:"a"},l.default.createElement("feOffset",{dy:"2",in:"SourceAlpha",result:"shadowOffsetOuter1"}),l.default.createElement("feGaussianBlur",{stdDeviation:"2",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.135699728 0",in:"shadowBlurOuter1"}))),l.default.createElement("g",{fill:"none",fillRule:"evenodd"},l.default.createElement("g",{transform:"translate(4 2)"},l.default.createElement("path",{d:"M0 0h180v110H0z",fill:"#000",filter:"url(#a)"}),l.default.createElement("path",{d:"M0 0h180v110H0z",fill:"#FFF"})),l.default.createElement("text",{fontFamily:"SanFranciscoDisplay-Bold, San Francisco Display",fontSize:"14",fontWeight:"bold",fill:"#919DA9",transform:"translate(17 49)"},l.default.createElement("tspan",{x:"43.124",y:"13"},"Read More")),l.default.createElement("path",{d:"M17 57h35M135 57h35.01",stroke:"#919DA9",strokeWidth:"2",strokeDasharray:"3"}))),data:{type:"Readmore"},group:"Joomla"}]:[];e.default=r},682:function(t,e,a){"use strict";(function(t){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(7),o=n(l),r=a(41),u=n(r),i=a(36),d=n(i),s=[{label2:"Desktop",value:"desktop",icon:"tv",tooltip:"Desktop"},{label2:"Laptop",value:"laptop",icon:"laptop",tooltip:"Laptop"},{label2:"Tablet",value:"tablet",icon:"tablet",tooltip:"Tablet"},{label2:"Mobile",value:"mobile",icon:"mobile",tooltip:"Mobile"}];e.default=function(e){return t.createElement(u.default,(0,o.default)({target:d.default,size:"xl",options:s,onChange:function(t){d.default.trigger("ga-event",{category:e.eventCategory||"",action:e.eventAction||"",label:"View "+t})}},e))}}).call(e,a(1))},708:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(2),o=n(l),r=a(3),u=n(r),i=a(6),d=n(i),s=a(4),f=n(s),c=a(5),p=n(c),h=a(184),m=n(h),y=a(1),g=n(y),_=function(t){function e(){return(0,u.default)(this,e),(0,f.default)(this,(e.__proto__||(0,o.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){return[g.default.createElement(m.default.Module,{key:"overlay",path:"catalog/overlay"}),g.default.createElement(m.default.Module,{key:"browser",path:"catalog/slider"})]}}]),e}(g.default.Component);e.default=_},714:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.save=e.locales=void 0;var n=a(198);e.locales={},e.save=function(t){(0,n.capture)()}},720:function(t,e,a){"use strict";(function(t){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(184),o=n(l),r=a(36),u=n(r);e.default=function(e){return t.createElement(o.default.Layout.Nav,{zIndex:40},t.createElement(o.default.Module,{path:"catalog/stack"}),t.createElement(o.default.Toolbar,{flex:!0}),t.createElement(o.default.Toolbar,{plain:!0,vertical:!0,size:"xl"},t.createElement(o.default.Button,{onClick:function(){u.default.proxy.presetPickerManager.isHidden=!u.default.proxy.presetPickerManager.isHidden,u.default.trigger("ga-event",{category:"Layout",action:"Open Preset screen",label:""})},icon:t.createElement("svg",{width:"21px",height:"21px",viewBox:"0 0 21 21"},t.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenOdd"},t.createElement("g",{transform:"translate(-12.000000, -586.000000)"},t.createElement("g",{transform:"translate(0.000000, 0.996877)",id:"Style-Pre-set"},t.createElement("g",{transform:"translate(12.000000, 585.000000)"},t.createElement("g",null,t.createElement("g",{transform:"translate(2.000000, 0.666667)",fillRule:"nonzero"},t.createElement("rect",{transform:"translate(8.250483, 9.604970) rotate(-45.000000) translate(-8.250483, -9.604970) ",x:"5.55050923",y:"0.738388365",width:"5.39994821",height:"17.7331633"}),t.createElement("rect",{transform:"translate(9.917333, 7.934953) rotate(-135.000000) translate(-9.917333, -7.934953) ",x:"7.21735923",y:"-0.298301042",width:"5.39994821",height:"16.4665088"}),t.createElement("polygon",{points:"0.666666667 17.2 5.46666667 16.5333333 1.33333333 12.3333333"})),t.createElement("path",{d:"M20.4666667,14.4 L16.5333333,10.4666667 L20.1333333,6.93333333 C20.2666667,6.8 20.3333333,6.66666667 20.4,6.46666667 C20.4,6.4 21,4 18.8,1.8 C17.3333333,0.333333333 15.8,0.133333333 15,0.133333333 C14.5333333,0.133333333 14.2,0.2 14.1333333,0.2 C14,0.266666667 13.8,0.333333333 13.6666667,0.466666667 L10.0666667,4 L6.06666667,0 L0,6.06666667 L4,10.0666667 L1.86666667,12.1333333 C1.73333333,12.2666667 1.6,12.4666667 1.6,12.6666667 L0.8,18.4666667 C0.733333333,18.7333333 0.866666667,19.0666667 1.06666667,19.2666667 C1.26666667,19.4666667 1.46666667,19.5333333 1.73333333,19.5333333 C1.8,19.5333333 1.8,19.5333333 1.86666667,19.5333333 L7.73333333,18.8666667 C7.93333333,18.8666667 8.13333333,18.7333333 8.33333333,18.6 L10.4,16.5333333 L14.3333333,20.4666667 L20.4666667,14.4 Z M14.8,2.06666667 C14.8666667,2.06666667 14.8666667,2.06666667 14.9333333,2.06666667 C15.5333333,2.06666667 16.4666667,2.26666667 17.3333333,3.2 C18.4,4.26666667 18.4666667,5.33333333 18.4666667,5.8 L17.1333333,7.13333333 L13.4,3.4 L14.8,2.06666667 Z M2.73333333,6.06666667 L6.06666667,2.73333333 L8.73333333,5.4 L5.4,8.73333333 L2.73333333,6.06666667 Z M7.2,17.0666667 L2.93333333,17.6 L3.53333333,13.3333333 L3.6,13.2666667 L7.2,17.0666667 L7.2,17.0666667 Z M8.66666667,15.6 L5,11.8666667 L12.2,4.66666667 L15.8666667,8.4 L8.66666667,15.6 Z M15.2,11.8 L17.8,14.4 L14.4666667,17.7333333 L11.8666667,15.1333333 L15.2,11.8 Z",fillRule:"nonzero"}))))))),tooltip:"Define pre-defined style"}),t.createElement(o.default.Button,{tooltip:"Edit custom Code",icon:t.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1"},t.createElement("path",{d:"M19.4916,11.8972 L17.9326,11.0172 C17.9776,10.6752 17.9996,10.3352 17.9996,10.0002 C17.9996,9.6652 17.9776,9.3252 17.9326,8.9822 L19.4916,8.1032 C19.7256,7.9702 19.8966,7.7502 19.9656,7.4912 C20.0356,7.2312 19.9976,6.9542 19.8616,6.7232 L17.8146,3.2592 C17.5376,2.7912 16.9396,2.6302 16.4616,2.8972 L14.9706,3.7382 C14.3706,3.2622 13.7046,2.8732 12.9996,2.5862 L12.9996,1.0002 C12.9996,0.4482 12.5526,0.0002 11.9996,0.0002 L7.9996,0.0002 C7.4476,0.0002 6.9996,0.4482 6.9996,1.0002 L6.9996,2.5862 C6.2946,2.8732 5.6286,3.2622 5.0296,3.7382 L3.5376,2.8972 C3.0626,2.6302 2.4626,2.7912 2.1856,3.2592 L0.1386,6.7232 C0.0016,6.9542 -0.0354,7.2312 0.0346,7.4912 C0.1036,7.7502 0.2746,7.9702 0.5086,8.1032 L2.0676,8.9822 C2.0226,9.3252 1.9996,9.6652 1.9996,10.0002 C1.9996,10.3352 2.0226,10.6752 2.0676,11.0172 L0.5086,11.8972 C0.2746,12.0292 0.1036,12.2502 0.0346,12.5092 C-0.0354,12.7692 0.0016,13.0452 0.1386,13.2772 L2.1856,16.7412 C2.4626,17.2092 3.0626,17.3722 3.5376,17.1032 L5.0296,16.2612 C5.6286,16.7382 6.2946,17.1272 6.9996,17.4132 L6.9996,19.0002 C6.9996,19.5522 7.4476,20.0002 7.9996,20.0002 L11.9996,20.0002 C12.5526,20.0002 12.9996,19.5522 12.9996,19.0002 L12.9996,17.4132 C13.7046,17.1272 14.3706,16.7382 14.9706,16.2612 L16.4616,17.1032 C16.9396,17.3722 17.5376,17.2092 17.8146,16.7412 L19.8616,13.2772 C19.9976,13.0452 20.0356,12.7692 19.9656,12.5092 C19.8966,12.2502 19.7256,12.0292 19.4916,11.8972 M15.8486,8.6782 C15.9496,9.1262 15.9996,9.5712 15.9996,10.0002 C15.9996,10.4282 15.9496,10.8732 15.8486,11.3222 C15.7516,11.7522 15.9486,12.1952 16.3326,12.4112 L17.6196,13.1372 L16.5906,14.8792 L15.3376,14.1722 C14.9546,13.9562 14.4716,14.0162 14.1546,14.3222 C13.4636,14.9852 12.6196,15.4782 11.7146,15.7472 C11.2906,15.8732 10.9996,16.2632 10.9996,16.7062 L10.9996,18.0002 L8.9996,18.0002 L8.9996,16.7062 C8.9996,16.2632 8.7086,15.8732 8.2856,15.7472 C7.3796,15.4782 6.5356,14.9852 5.8456,14.3222 C5.5286,14.0162 5.0446,13.9562 4.6616,14.1722 L3.4096,14.8792 L2.3796,13.1372 L3.6666,12.4112 C4.0516,12.1952 4.2476,11.7522 4.1516,11.3222 C4.0506,10.8732 3.9996,10.4282 3.9996,10.0002 C3.9996,9.5712 4.0506,9.1262 4.1516,8.6782 C4.2476,8.2482 4.0516,7.8052 3.6666,7.5882 L2.3796,6.8622 L3.4096,5.1202 L4.6616,5.8272 C5.0456,6.0442 5.5286,5.9842 5.8456,5.6782 C6.5356,5.0142 7.3796,4.5222 8.2856,4.2522 C8.7086,4.1262 8.9996,3.7362 8.9996,3.2942 L8.9996,2.0002 L10.9996,2.0002 L10.9996,3.2942 C10.9996,3.7362 11.2906,4.1262 11.7146,4.2522 C12.6196,4.5222 13.4636,5.0142 14.1546,5.6782 C14.4716,5.9842 14.9536,6.0432 15.3376,5.8272 L16.5906,5.1202 L17.6196,6.8622 L16.3326,7.5882 C15.9486,7.8052 15.7516,8.2482 15.8486,8.6782 M9.9999,6 C7.7939,6 5.9999,7.794 5.9999,10 C5.9999,12.206 7.7939,14 9.9999,14 C12.2059,14 13.9999,12.206 13.9999,10 C13.9999,7.794 12.2059,6 9.9999,6 M9.9999,12 C8.8969,12 7.9999,11.103 7.9999,10 C7.9999,8.897 8.8969,8 9.9999,8 C11.1029,8 11.9999,8.897 11.9999,10 C11.9999,11.103 11.1029,12 9.9999,12"})),onClick:function(){u.default.proxy.customCodeEditor.open=!u.default.proxy.customCodeEditor.open,u.default.trigger("ga-event",{category:"Layout",action:"Open custom code",label:""})}})))}}).call(e,a(1))},727:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(2),o=n(l),r=a(3),u=n(r),i=a(6),d=n(i),s=a(4),f=n(s),c=a(5),p=n(c),h=a(184),m=n(h),y=a(1),g=n(y),_=a(94),v=n(_),b=a(285),E=n(b),x=(0,E.default)("workspace")(m.default.Canvas),C=function(t){function e(){return(0,u.default)(this,e),(0,f.default)(this,(e.__proto__||(0,o.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){return g.default.createElement(x,{editable:!0,model:v.default})}}]),e}(g.default.PureComponent);e.default=C},734:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(7),o=n(l),r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(15),m=n(h),y=a(5),g=n(y),_=(a(30),a(1)),v=n(_),b=a(123),E=n(b),x=a(0),C=n(x),w=function(t){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,f.default)(e,[{key:"shouldComponentUpdate",value:function(t,a){return(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"shouldComponentUpdate",this).call(this,t,a)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"handleInsertChild",value:function(t,a,n){switch(t.type){case"Grid":return(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"handleInsertChild",this).call(this,t,a,n);default:this.insertChild({type:"Grid"},a,function(e){e.insertChild(t,0,n)})}}},{key:"render",value:function(){return v.default.createElement("div",{style:this.state.full?{maxWidth:"100%"}:{}},this.renderChildren())}},{key:"toolbar",get:function(){return(0,o.default)({},(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"toolbar",this))}},{key:"inspector",get:function(){return{}}}],[{key:"parentTypes",get:function(){return["Section"]}},{key:"childTypes",get:function(){return/./}},{key:"propTypes",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"propTypes",this),{full:C.default.bool,containerWidth:C.default.number})}},{key:"defaultProps",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"defaultProps",this),{tag:"div",full:!0,containerWidth:1170})}}]),e}(E.default);e.default=w,w.css="\n\t& {\n\t\tmax-width: 1170px;\n\t\twidth: 100%;\n\t\tmargin: auto;\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n"},740:function(t,e,a){"use strict"},742:function(t,e,a){"use strict";function n(t){}function l(t){return t.isElement}function o(t){return t.isBlock}function r(t){return t.context.page}function u(t){return t.context.page}function i(t){return t.model}function d(t){return t.style}Object.defineProperty(e,"__esModule",{value:!0}),e.enhance=n,e.isElement=l,e.isBlock=o,e.getPage=r,e.getApp=u,e.getModel=i,e.getStyle=d},755:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,o,r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(15),m=n(h),y=a(5),g=n(y),_=a(1),v=n(_),b=a(123),E=n(b),x=a(875),C=n(x),w=a(36),k=n(w),L=a(40),M=n(L),B=(o=l=function(t){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,f.default)(e,[{key:"select",value:function(){this.page.selected=null,this.app.trigger("select:item",null),this.editor.trigger("select:item",null),k.default.set("refs.selected",null)}},{key:"handleInsertChild",value:function(t,a,n){if(["Section","Bar","Readmore","Divider"].includes(t.type))return(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"handleInsertChild",this).call(this,t,a,n);this.insertChild({type:"Section"},a,function(e){e.insertChild(t,0,n)})}},{key:"componentDidMount",value:function(){this.page.layout=this}},{key:"componentWillUnmount",value:function(){this.page.layout=void 0}},{key:"placeholder",get:function(){return"view"===this.mode?null:v.default.createElement("div",{className:"placeholder"},M.default.isJoomla?v.default.createElement("div",null,v.default.createElement("h2",null,"Drop element here to start")):v.default.createElement("img",{src:C.default}))}}]),e}(E.default),l.parentTypes=/Body/,l.childTypes=/./,l.css="\n\t\t& {\n\t\t\tborder: 0px dashed rgba(0, 0, 0, 0.1);\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t&[data-empty] {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tflex-flow: column;\n\t\t\ttext-align: center;\n\t\t}\n\t\t& > .placeholder {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tpadding: 0;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tbox-sizing: border-box;\n\t\t\tpointer-events: none;\n\t\t\twill-change: content, width, height, top, left, transform, opacity;\n\t\t}\n\t\t& .placeholder h2 {\n\t\t\tborder: none;\n\t\t\tfont-size: 30px;\n\t\t\tmargin-bottom: 20px;\n\t\t\tfont-weight: 400;\n\t\t\tcolor: #777;\n\t\t}\n\t\t& > .placeholder > img {\n\t\t\twidth: 350px;\n\t\t}\n\t",o);e.default=B},767:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(7),o=n(l),r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(15),m=n(h),y=a(5),g=n(y),_=a(1),v=n(_),b=a(0),E=(n(b),a(30),a(123)),x=n(E),C=a(20),w=n(C),k=a(25),L=n(k),M=a(23),B=n(M),P=a(292),S=n(P),D=function(t){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,f.default)(e,[{key:"addItem",value:function(){this.insertChild({type:"Progress"},function(t){})}},{key:"render",value:function(){return v.default.createElement("div",null,this.renderChildren())}},{key:"inspector",get:function(){var t=(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"inspector",this);return(0,o.default)({},t,{general:(0,o.default)({},t.general,{content:v.default.createElement(L.default,{name:"Content"},v.default.createElement(w.default,null,v.default.createElement(B.default,{icon:"plus",label:"Add New Item",onClick:this.addItem})))}),styling:(0,o.default)({},t.styling,{text:v.default.createElement(L.default,{name:"Text"},v.default.createElement(S.default,null))})})}}],[{key:"propTypes",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"propTypes",this))}},{key:"defaultProps",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"defaultProps",this))}},{key:"childTypes",get:function(){return["Progress"]}}]),e}(x.default);e.default=D,D.css="\n\t& {\n\t\theight: auto !important\n\t}\n"},768:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(7),o=n(l),r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(15),m=n(h),y=a(5),g=n(y),_=a(1),v=(n(_),a(123)),b=n(v),E=a(0),x=n(E),C=function(t){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,f.default)(e,null,[{key:"propTypes",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"propTypes",this),{original:x.default.number})}}]),e}(b.default);e.default=C},771:function(t,e,a){"use strict"},772:function(t,e,a){"use strict"},774:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,o,r=a(7),u=n(r),i=a(2),d=n(i),s=a(3),f=n(s),c=a(6),p=n(c),h=a(4),m=n(h),y=a(15),g=n(y),_=a(5),v=n(_),b=a(1),E=n(b),x=a(123),C=n(x),w=a(0),k=n(w),L=a(20),M=n(L),B=a(25),P=n(B),S=a(23),D=n(S),T=a(124),j=n(T),R=a(93),z=n(R),O=a(289),I=n(O),A=a(21),N=n(A),W=a(95),F=n(W),U=a(40),H=n(U),q=(o=l=function(t){function e(){return(0,f.default)(this,e),(0,m.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,v.default)(e,t),(0,p.default)(e,[{key:"shouldReceiveChild",value:function(t){for(var a,n=arguments.length,l=Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];return![this.type,"Body","Head","Layout","Section"].includes(t.type)&&(a=(0,g.default)(e.prototype.__proto__||(0,d.default)(e.prototype),"shouldReceiveChild",this)).call.apply(a,[this,t].concat(l))}},{key:"getChildContext",value:function(){return(0,u.default)({},(0,g.default)(e.prototype.__proto__||(0,d.default)(e.prototype),"getChildContext",this).call(this),{section:this})}},{key:"handleInsertChild",value:function(t,a,n){switch(t.type){case"Row":case"Grid":return(0,g.default)(e.prototype.__proto__||(0,d.default)(e.prototype),"handleInsertChild",this).call(this,t,a,n);default:this.insertChild({type:"Row"},a,function(e){e.insertChild(t,0,n)})}}},{key:"addItem",value:function(){this.insertChild({type:"Row",children:[{type:"Row.Col"}]})}},{key:"render",value:function(){return E.default.createElement("section",{tabIndex:"1","data-parallax":this.state.parallax||void 0},this.state.parallax&&this.state.parallaxBg?E.default.createElement("div",{className:" "+this.selectorName+"__parallax"},E.default.createElement("img",{src:this.state.parallaxBg,className:"parallax-bg"})):null,this.state.container?E.default.createElement("div",{className:this.selectorName+"__container",style:{maxWidth:this.state.containerWidth}},this.renderChildren()):this.renderChildren())}},{key:"inspector",get:function(){var t=(0,g.default)(e.prototype.__proto__||(0,d.default)(e.prototype),"inspector",this);return(0,u.default)({},t,{general:(0,u.default)({},t.general,{settings:E.default.createElement(P.default,{name:"Content",cid:"section-settings"},E.default.createElement(M.default,null,E.default.createElement(D.default,{label:"Add Row",icon:"plus",onClick:this.addItem}))),container:E.default.createElement(P.default,{name:"Container"},E.default.createElement(M.default,{label:"Enable",horizontal:!0},E.default.createElement(z.default,{bind:"state.container"})),E.default.createElement(M.default,{label:"Max width",bind:"state.container",on:[!0],hint:"px"},E.default.createElement(j.default,{bind:"state.containerWidth",min:700,max:1300,step:10,unit:"px",defaultValue:1170,flex:"4"}),E.default.createElement(N.default,{bind:"state.containerWidth",min:700,max:1300,step:10,flex:"1",style:{minWidth:60}}))),parallax:E.default.createElement(P.default,{name:"Parallax"},E.default.createElement(M.default,{label:"Enable",horizontal:!0},E.default.createElement(z.default,{bind:"state.parallax"})),E.default.createElement(F.default,{bind:"state.parallax",on:[!0]},E.default.createElement(I.default,{bind:"state.parallaxBg",field:"parallax"})))})})}}],[{key:"propTypes",get:function(){return(0,u.default)({},(0,g.default)(e.__proto__||(0,d.default)(e),"propTypes",this),{container:k.default.bool,containerWidth:k.default.string,parallax:k.default.bool,parallaxBg:k.default.string,parallaxSpeed:k.default.number,parallaxRev:k.default.bool})}},{key:"defaultProps",get:function(){return(0,u.default)({},(0,g.default)(e.__proto__||(0,d.default)(e),"defaultProps",this),{container:H.default.container,containerWidth:"1170px",parallax:!1,parallaxBg:"",parallaxSpeed:5,parallaxRev:!1})}}]),e}(C.default),l.parentTypes=/Layout/,l.childTypes=/./,o);e.default=q,q.css='\n\t& {\n\t\tclear: both;\n\t}\n\t&[data-parallax="true"] {\n\t\tposition: relative;\n\t}\n\t&__parallax {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        pointer-events: none;\n    }\n    &[data-parallax="true"] .parallax-bg {\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        max-width: 100%;\n        min-width: 100%;\n        min-height: 100%;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%);\n        object-fit: cover;\n        will-change: transform;\n    }\n\t& {\n\t\tbox-sizing: border-box;\n\t\tpadding: 15px 0;\n\t\tposition: relative;\n\t}\n\t&__container {\n\t\twidth: auto;\n\t\tmargin: auto;\n\t\tpadding-left: 15px;\n\t\tpadding-right: 15px;\n\t\tbox-sizing: border-box;\n\t}\n'},777:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(7),o=n(l),r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(15),m=n(h),y=a(5),g=n(y),_=a(1),v=n(_),b=a(0),E=n(b),x=(a(30),a(69)),C=n(x),w=a(25),k=n(w),L=a(20),M=n(L),B=a(21),P=n(B),S=a(27),D=(n(S),a(23)),T=(n(D),a(93)),j=n(T),R=function(t){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,f.default)(e,[{key:"render",value:function(){var t=/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent),e="&amp;auto_play="+(t?"false":this.state.autoplay?"true":"false");return e+="&allowscriptaccess=always",e+="&buying="+this.state.buyButton,e+="&liking="+this.state.likeButton,e+="&download="+this.state.downloadButton,e+="&sharing="+this.state.shareButton,e+="&show_playcount="+this.state.playCounts,e+="&show_comments="+this.state.comments,e+="&show_user="+this.state.username,e+="&text_download_track=Download",v.default.createElement("div",null,"edit"!=this.mode?null:v.default.createElement("div",{className:"video-overlay",style:{width:"100%",height:"100%",zIndex:"999",position:"absolute",top:"0px",left:"0px",pointerEvents:"none"}}),v.default.createElement("iframe",{id:"sc-widget-"+this.state.id,src:"https://w.soundcloud.com/player/?url="+this.state.src+e,width:"100%",scrolling:"no",frameBorder:"no"}),v.default.createElement("script",{src:"https://w.soundcloud.com/player/api.js",type:"text/javascript"}))}},{key:"body",get:function(){var t=/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent),e="&amp;auto_play="+(t?"false":this.state.autoplay?"true":"false");return e+="&allowscriptaccess=always",e+="&buying="+this.state.buyButton,e+="&liking="+this.state.likeButton,e+="&download="+this.state.downloadButton,e+="&sharing="+this.state.shareButton,e+="&show_playcount="+this.state.playCounts,e+="&show_comments="+this.state.comments,e+="&show_user="+this.state.username,e+="&text_download_track=Download",["edit"!=this.mode?null:v.default.createElement("div",{className:"video-overlay",style:{width:"100%",height:"100%",zIndex:"999",position:"absolute",top:"0px",left:"0px"}}),v.default.createElement("iframe",{id:"sc-widget-"+this.state.id,src:"https://w.soundcloud.com/player/?url="+this.state.src+e,width:"100%",height:"100%",scrolling:"no",frameBorder:"no"}),v.default.createElement("script",{src:"https://w.soundcloud.com/player/api.js",type:"text/javascript"})]}},{key:"inlineStyle",get:function(){return{height:this.state.height,position:"relative"}}},{key:"inspector",get:function(){var t=(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"inspector",this);return(0,o.default)({},t,{general:(0,o.default)({},t.general,{content:v.default.createElement(k.default,{name:"Content"},v.default.createElement(M.default,{label:"Soundcloud URL",vertical:!0},v.default.createElement(P.default,{bind:"state.src",placeholder:"Enter Soundcloud URL..."})),v.default.createElement(M.default,{label:"Autoplay"},v.default.createElement(j.default,{bind:"state.autoplay"})),v.default.createElement(M.default,{label:"Show Buy Button"},v.default.createElement(j.default,{bind:"state.buyButton"})),v.default.createElement(M.default,{label:"Show Username"},v.default.createElement(j.default,{bind:"state.username"})))}),styling:(0,o.default)({},t.styling,{text:null})})}}],[{key:"displayName",get:function(){return"SoundCloud"}},{key:"propTypes",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"propTypes",this),{height:E.default.string.isRequired,src:E.default.string.isRequired,autoplay:E.default.bool,buyButton:E.default.bool,likeButton:E.default.bool,downloadButton:E.default.bool,shareButton:E.default.bool,comments:E.default.bool,playCounts:E.default.bool,username:E.default.bool})}},{key:"defaultProps",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"defaultProps",this),{src:"https://soundcloud.com/different-heaven/mtc-different-heaven-remix",autoplay:!1,height:"",buyButton:!1,likeButton:!1,downloadButton:!1,shareButton:!1,comments:!1,playCounts:!1,username:!1})}}]),e}(C.default);e.default=R,R.css="\n\t& {\n\t\tposition: relative;\n\t}\n"},784:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(7),o=n(l),r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(15),m=n(h),y=a(5),g=n(y),_=a(1),v=n(_),b=a(0),E=n(b),x=a(69),C=n(x),w=a(25),k=n(w),L=a(20),M=n(L),B=a(21),P=n(B),S=a(289),D=n(S),T=a(23),j=n(T),R=a(27),z=n(R),O=a(93),I=n(O),A=a(40),N=n(A),W=function(t){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,f.default)(e,[{key:"componentDidMount",value:function(){var t=this;this.on("change:style:height",function(e){t.DOMNode.querySelector("iframe").style.height=e})}},{key:"render",value:function(){return v.default.createElement("div",null,v.default.createElement("div",{className:"pb-video-wrap "+(this.state.placeholder?"video--popup":""),style:this.inlineStyle},this.body))}},{key:"body",get:function(){var t=this.sampleData?this.sampleData.videoID:this.state.videoID,e="?autoplay="+(this.state.autoplay&&"view"===this.mode?1:0);e+="&loop="+(this.state.loop?"1&playlist="+this.state.videoID:"0"),e+="&mute="+(this.state.mute?"1":"0"),e+="&controls="+(this.state.controls?"1":"0"),e+="&enablejsapi=1",e+="&rel="+(this.state.related?"1":"0"),e+="&showinfo="+(this.state.info?"1":"0");var a="https://www.youtube.com/embed/"+t+e,n=v.default.createElement("iframe",{src:this.state.placeholder?void 0:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",className:"pb-video"});return"edit"===this.mode?this.state.placeholder?v.default.createElement("div",null,v.default.createElement("img",{src:this.state.placeholder,style:{width:"100%",height:"auto"}})):n:this.state.placeholder?[v.default.createElement("a",{"data-action":"popup-video","data-id":this.hash,"data-video":"youtube",href:a,key:"cover"},v.default.createElement("img",{src:this.state.placeholder,style:{width:"100%",height:"auto"}})),v.default.createElement("div",{className:"popup-video popup-video"+this.hash,key:"video"},n)]:n}},{key:"inlineStyle",get:function(){return this.state.placeholder?{}:{paddingBottom:this.state.ratio+"%"}}},{key:"inspector",get:function(){var t=this,a=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,n=(0,m.default)(e.prototype.__proto__||(0,u.default)(e.prototype),"inspector",this);return(0,o.default)({},n,{general:(0,o.default)({},n.general,{content:v.default.createElement(k.default,{name:"Content"},v.default.createElement(M.default,{label:"Youtube Video URL",vertical:!0},v.default.createElement(P.default,{bind:"state.src",placeholder:"Enter Youtube URL here...",onChange:function(e){if(e){var n=a.exec(e);n&&n[2]&&11==n[2].length?t.saveState({videoID:n[2],src:e}):t.saveState({videoID:"",src:""})}}})),v.default.createElement(D.default,{label:"Video Image Cover",bind:"state.placeholder",field:"youtube-video"}),v.default.createElement(M.default,{label:"Ratio",horizontal:!0},v.default.createElement(z.default,null,v.default.createElement(j.default,{label:"4:3",bind:"state.ratio",on:75,off:56.25}),v.default.createElement(j.default,{label:"16:9",bind:"state.ratio",on:56.25,off:75}))),v.default.createElement(M.default,{label:"Loop",horizontal:!0},v.default.createElement(I.default,{bind:"state.loop"})),v.default.createElement(M.default,{label:"Autoplay",horizontal:!0},v.default.createElement(I.default,{bind:"state.autoplay"})),v.default.createElement(M.default,{label:"Mute",horizontal:!0},v.default.createElement(I.default,{bind:"state.mute"})),v.default.createElement(M.default,{label:"Show Controls",horizontal:!0},v.default.createElement(I.default,{bind:"state.controls"})),v.default.createElement(M.default,{label:"Show Title",horizontal:!0},v.default.createElement(I.default,{bind:"state.info"})),v.default.createElement(M.default,{label:"Show Related Video",horizontal:!0},v.default.createElement(I.default,{bind:"state.related"})))}),styling:(0,o.default)({},n.styling,{text:null})})}}],[{key:"propTypes",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"propTypes",this),{ratio:E.default.number.isRequired,src:E.default.string.isRequired,placeholder:E.default.string,loop:E.default.bool,autoplay:E.default.bool,info:E.default.bool,related:E.default.bool,controls:E.default.bool,mute:E.default.bool,videoID:E.default.string.isRequired})}},{key:"defaultProps",get:function(){return(0,o.default)({},(0,m.default)(e.__proto__||(0,u.default)(e),"defaultProps",this),{src:"",loop:!1,autoplay:!1,controls:!1,info:!0,related:!1,mute:!1,videoID:N.default.youtubeVideo,ratio:56.25,placeholder:""})}}]),e}(C.default);e.default=W},786:function(t,e,a){"use strict";(function(t){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(184),o=n(l),r=a(905),u=n(r),i=a(285),d=n(i);(0,d.default)(u.default,"codeEditor",{hidden:!0})(o.default.Module);e.default=function(){return t.createElement(o.default.App,null,t.createElement(o.default.Notification,null),t.createElement(o.default.Confirm,null),t.createElement(o.default.Module,{path:"cta"}),t.createElement(o.default.Module,{path:"menubar"}),t.createElement(o.default.Layout,null,t.createElement(o.default.Module,{path:"sidebar"}),t.createElement(o.default.Module,{path:"catalog"}),t.createElement(o.default.Module,{path:"workspace"}),t.createElement(o.default.Module,{path:"inspector"})),t.createElement(o.default.Module,{path:"Settings/CustomCode"}),t.createElement(o.default.Module,{path:"Fonts/Manager"}),t.createElement(o.default.Module,{path:"license/EditionNotice"}))}}).call(e,a(1))},875:function(t,e,a){t.exports=a.p+"assets/static/editing.23d4ba1e.svg"},904:function(t,e,a){"use strict";(function(t){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.init=e.Canvas=void 0;var l=a(76),o=n(l),r=a(2),u=n(r),i=a(3),d=n(i),s=a(6),f=n(s),c=a(4),p=n(c),h=a(5),m=n(h),y=a(7),g=n(y),_=a(14),v=n(_),b=a(10),E=n(b),x=(0,E.default)(["\n\t& {\n\t\tposition: relative;\n\t\toverflow: auto;\n\t}\n\t& > div[data-empty='true'] {\n\t\tdisplay: flex;\n\t\tflex-flow: column wrap;\n\t\tmin-height: 400px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground: #f5f5f5;\n\t\t> h3 {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\tiframe {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tmin-height: 500px;\n\t\theight: auto;\n\t}\n\t& .click-to-edit {\n\t\tcolor: #fff;\n\t\tfont-size: 16px;\n\t\tpadding: 12px 30px;\n\t\tbackground-color: #ff6c00;\n\t\tborder: none;\n\t\tborder-radius: 3px;\n\t\t&.isSticky {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t}\n\t\t&:hover {\n\t\t\topacity: 0.7;\n\t\t}\n\t}\n\t& h3 {\n\t\tfont-size: 22px;\n\t\tdisplay: none;\n\t\tmargin: 0 0 20px;\n\t}\n\t& *[data-hidden='true'] {\n\t\tdisplay: none;\n\t}\n"],["\n\t& {\n\t\tposition: relative;\n\t\toverflow: auto;\n\t}\n\t& > div[data-empty='true'] {\n\t\tdisplay: flex;\n\t\tflex-flow: column wrap;\n\t\tmin-height: 400px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground: #f5f5f5;\n\t\t> h3 {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\tiframe {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tmin-height: 500px;\n\t\theight: auto;\n\t}\n\t& .click-to-edit {\n\t\tcolor: #fff;\n\t\tfont-size: 16px;\n\t\tpadding: 12px 30px;\n\t\tbackground-color: #ff6c00;\n\t\tborder: none;\n\t\tborder-radius: 3px;\n\t\t&.isSticky {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t}\n\t\t&:hover {\n\t\t\topacity: 0.7;\n\t\t}\n\t}\n\t& h3 {\n\t\tfont-size: 22px;\n\t\tdisplay: none;\n\t\tmargin: 0 0 20px;\n\t}\n\t& *[data-hidden='true'] {\n\t\tdisplay: none;\n\t}\n"]),C=a(22),w=n(C),k=a(1),L=n(k),M=a(42),B=n(M),P=a(12),S=n(P),D=a(337),T=n(D),j=a(134),R=a(94),z=n(R),O=a(351),I=(n(O),e.Canvas=S.default.div(x)),A=(e.init=function(t){var e=t.props,a=t.assets;return new v.default(function(t){var n=(0,w.default)('<div id="pagefly-pb-preview">').insertAfter(e.textArea).get(0);t(B.default.render(L.default.createElement(A,(0,g.default)({},e,{assets:a})),n))})},function(e){function a(){var t,e,n,l;(0,d.default)(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=n=(0,p.default)(this,(t=a.__proto__||(0,u.default)(a)).call.apply(t,[this].concat(r))),n.state={assets:n.assets,loading:!0},l=e,(0,p.default)(n,l)}return(0,m.default)(a,e),(0,f.default)(a,[{key:"componentDidMount",value:function(){var e=this;this.frame=this.frameWrapper.frame;var a=(window.location.origin,location.pathname.replace(/(.*)administrator\/index\.php/,"$1"),this.props);a.textArea.value;this.frame&&this.frame.addEventListener("load",function(){z.default.subscribe("assets",t.debounce(function(){(0,j.loadEmbedScript)(e.frame.contentWindow,e.frame.contentDocument,e.assets.css)})),e.setState({loading:!1})}),setTimeout(function(){(0,w.default)("#jsn-pb2-editor-switcher").addClass("hidden");var t=document.getElementById("pb-editor-switcher");t&&((0,w.default)(t).find('button:contains("Default Editor")').trigger("click").addClass("hidden"),t.setAttribute("class","hidden"))},500)}},{key:"render",value:function(){var t=this,e=this.props.items&&(0,o.default)(this.props.items).length>3,a='<base href="'+window.pagefly_data.baseURL+'" />';return L.default.createElement(L.default.Fragment,null,L.default.createElement(I,null,L.default.createElement("div",{id:"pb-placeholder","data-empty":!e},L.default.createElement("h3",null,"This article is managed by JSN PageBuilder 3"),L.default.createElement("button",{ref:function(e){return t.button=e},className:"click-to-edit "+(e?"isSticky":"")},"Click To Edit")),L.default.createElement(T.default,{id:"pb-preview",name:"PageFly Preview Frame",head:a,ref:function(e){return t.frameWrapper=e},"data-hidden":!e},this.frame&&L.default.createElement(j.PageHead,{context:this.frame.contentDocument.head}),L.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.textArea.value}}))))}},{key:"assets",get:function(){return z.default.get("assets").groupBy("type")}}]),a}(L.default.PureComponent));e.default=A}).call(e,a(8))},905:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(18),l=(0,n.Model)({customHTML:(0,n.Model)({hidden:!1}),codeEditor:(0,n.Model)({hidden:!0})});e.default=new l}});