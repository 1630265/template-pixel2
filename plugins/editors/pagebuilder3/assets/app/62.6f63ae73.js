webpackJsonppagefly([62],{805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return E});var a,o,i=n(49),r=n.n(i),l=n(141),c=n.n(l),L=n(349),C=n.n(L),s=n(350),p=n.n(s),d=n(351),u=n.n(d),h=n(352),f=n.n(h),g=n(358),m=n(356),v=n(380),E=(n(386),o=a=function(e){function t(){var e;C()(this,t);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];var i=u()(this,(e=t.__proto__||c()(t)).call.apply(e,[this].concat(a)));return i.codeEditor=void 0,i}return f()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this;this.listenTo(this.app,"definepreset:toggle",function(){!0===e.openDefinePresetButton.state.active?e.openDefinePresetButton.deactivate():e.openDefinePresetButton.activate()})}},{key:"openCatalog",value:function(){var e=this;return new r.a(function(t){e.app.launch("catalog").then(function(n){e.stopListening(n),e.listenTo(n,"open",e.openCatalogButton.activate),e.listenTo(n,"close",e.openCatalogButton.deactivate),n.open(),"block"===e.get("app.page.head.DOMNode.style.display")&&e.invoke("app.page.togglePreset").then(function(){e.invoke("app.page.setState",{selected:null})}),t()})})}},{key:"openCodeEditor",value:function(){var e=this;return this.openCodeEditorButton.activate(),new r.a(function(t){e.app.launch("codeEditor").then(function(n){e.codeEditor=n,n.__panel.show().then(t),n.__panel.once("hide",e.openCodeEditorButton.deactivate)})})}},{key:"openDefinePreset",value:function(){var e=this;!0===this.openDefinePresetButton.state.active?this.openDefinePresetButton.deactivate():this.openDefinePresetButton.activate(),this.invoke("app.page.togglePreset").then(function(){e.invoke("app.page.setState",{selected:null})})}},{key:"render",value:function(){var e=this;return g.React.createElement(v.default,{flow:"column",target:this,style:{padding:5,height:"100%"}},g.React.createElement(m.default,{plain:!0,size:"xl",icon:R,action:"openCatalog",tooltip:"Add Elements",ref:function(t){return e.openCatalogButton=t}}),g.React.createElement("span",null),g.React.createElement("span",null),g.React.createElement(m.default,{plain:!0,size:"xl",icon:y,action:"openDefinePreset",tooltip:"Define preset style",ref:function(t){return e.openDefinePresetButton=t}}),g.React.createElement(m.default,{plain:!0,size:"xl",icon:M,action:"openCodeEditor",tooltip:"Edit Custom Code",ref:function(t){return e.openCodeEditorButton=t}}))}}]),t}(g.default),a.APP_POS="left",o),R=g.React.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20"},g.React.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},g.React.createElement("g",{id:"Level-1-Hover",transform:"translate(-12.000000, -16.000000)"},g.React.createElement("g",{transform:"translate(0.000000, 0.996877)",id:"Icons/Nav/Add-elements-hover"},g.React.createElement("g",{transform:"translate(12.000000, 15.000000)"},g.React.createElement("g",{id:"Add-elements"},g.React.createElement("rect",{id:"Rectangle-path",x:"1.9203125",y:"1.81362847",width:"5.14750434",height:"5.14750434"}),g.React.createElement("rect",{id:"Rectangle-path",x:"12.8554253",y:"12.8554253",width:"5.14750434",height:"5.14750434"}),g.React.createElement("rect",{id:"Rectangle-path",x:"1.9203125",y:"12.8554253",width:"5.14750434",height:"5.14750434"}),g.React.createElement("path",{d:"M11.9486111,5.97430556 C11.38852,5.97430556 10.9617839,5.52089844 10.9617839,4.9874783 C10.9617839,4.45405816 11.415191,4.00065104 11.9486111,4.00065104 L13.9489366,4.00065104 L13.9489366,2.00032552 C13.9489366,1.44023438 14.4023438,1.01349826 14.9357639,1.01349826 C15.495855,1.01349826 15.9225911,1.46690538 15.9225911,2.00032552 L15.9225911,4.00065104 L17.9229167,4.00065104 C18.4830078,4.00065104 18.9097439,4.45405816 18.9097439,4.9874783 C18.9097439,5.52089844 18.4563368,5.97430556 17.9229167,5.97430556 L15.9225911,5.97430556 L15.9225911,7.97463108 C15.9225911,8.53472222 15.469184,8.96145833 14.9357639,8.96145833 C14.3756727,8.96145833 13.9489366,8.50805122 13.9489366,7.97463108 L13.9489366,5.97430556 L11.9486111,5.97430556 Z M12.9621094,17.8962457 L12.9621094,12.9354384 L17.9229167,12.9354384 L17.9229167,17.8962457 L12.9621094,17.8962457 Z M18.9097439,10.9351128 L11.9486111,10.9351128 C11.38852,10.9351128 10.9617839,11.38852 10.9617839,11.9219401 L10.9617839,18.8830729 C10.9617839,19.4431641 11.415191,19.8699002 11.9486111,19.8699002 L18.9097439,19.8699002 C19.4698351,19.8699002 19.8965712,19.4164931 19.8965712,18.8830729 L19.8965712,11.9219401 C19.9232422,11.38852 19.4698351,10.9351128 18.9097439,10.9351128 Z M2.00032552,17.8962457 L2.00032552,12.9354384 L6.96113281,12.9354384 L6.96113281,17.8962457 L2.00032552,17.8962457 Z M7.94796007,10.9351128 L0.986827257,10.9351128 C0.453407118,10.9351128 0,11.38852 0,11.9219401 L0,18.8830729 C0,19.4431641 0.453407118,19.8699002 0.986827257,19.8699002 L7.94796007,19.8699002 C8.50805122,19.8699002 8.93478733,19.4164931 8.93478733,18.8830729 L8.93478733,11.9219401 C8.96145833,11.38852 8.50805122,10.9351128 7.94796007,10.9351128 Z M2.00032552,6.96113281 L2.00032552,2.00032552 L6.96113281,2.00032552 L6.96113281,6.96113281 L2.00032552,6.96113281 Z M7.94796007,0 L0.986827257,0 C0.453407118,0 0,0.453407118 0,0.986827257 L0,7.94796007 C0,8.50805122 0.453407118,8.93478733 0.986827257,8.93478733 L7.94796007,8.93478733 C8.50805122,8.93478733 8.93478733,8.48138021 8.93478733,7.94796007 L8.93478733,0.986827257 C8.96145833,0.453407118 8.50805122,0 7.94796007,0 Z",id:"Shape",fillRule:"nonzero"}))))))),y=g.React.createElement("svg",{width:"21px",height:"21px",viewBox:"0 0 21 21"},g.React.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},g.React.createElement("g",{id:"Level-1-Hover",transform:"translate(-12.000000, -586.000000)"},g.React.createElement("g",{transform:"translate(0.000000, 0.996877)",id:"Style-Pre-set"},g.React.createElement("g",{transform:"translate(12.000000, 585.000000)"},g.React.createElement("g",{id:"pencil-and-ruler-school-tools"},g.React.createElement("g",{id:"Group",transform:"translate(2.000000, 0.666667)",fillRule:"nonzero"},g.React.createElement("rect",{id:"Rectangle-path",transform:"translate(8.250483, 9.604970) rotate(-45.000000) translate(-8.250483, -9.604970) ",x:"5.55050923",y:"0.738388365",width:"5.39994821",height:"17.7331633"}),g.React.createElement("rect",{id:"Rectangle-path",transform:"translate(9.917333, 7.934953) rotate(-135.000000) translate(-9.917333, -7.934953) ",x:"7.21735923",y:"-0.298301042",width:"5.39994821",height:"16.4665088"}),g.React.createElement("polygon",{id:"Shape",points:"0.666666667 17.2 5.46666667 16.5333333 1.33333333 12.3333333"})),g.React.createElement("path",{d:"M20.4666667,14.4 L16.5333333,10.4666667 L20.1333333,6.93333333 C20.2666667,6.8 20.3333333,6.66666667 20.4,6.46666667 C20.4,6.4 21,4 18.8,1.8 C17.3333333,0.333333333 15.8,0.133333333 15,0.133333333 C14.5333333,0.133333333 14.2,0.2 14.1333333,0.2 C14,0.266666667 13.8,0.333333333 13.6666667,0.466666667 L10.0666667,4 L6.06666667,0 L0,6.06666667 L4,10.0666667 L1.86666667,12.1333333 C1.73333333,12.2666667 1.6,12.4666667 1.6,12.6666667 L0.8,18.4666667 C0.733333333,18.7333333 0.866666667,19.0666667 1.06666667,19.2666667 C1.26666667,19.4666667 1.46666667,19.5333333 1.73333333,19.5333333 C1.8,19.5333333 1.8,19.5333333 1.86666667,19.5333333 L7.73333333,18.8666667 C7.93333333,18.8666667 8.13333333,18.7333333 8.33333333,18.6 L10.4,16.5333333 L14.3333333,20.4666667 L20.4666667,14.4 Z M14.8,2.06666667 C14.8666667,2.06666667 14.8666667,2.06666667 14.9333333,2.06666667 C15.5333333,2.06666667 16.4666667,2.26666667 17.3333333,3.2 C18.4,4.26666667 18.4666667,5.33333333 18.4666667,5.8 L17.1333333,7.13333333 L13.4,3.4 L14.8,2.06666667 Z M2.73333333,6.06666667 L6.06666667,2.73333333 L8.73333333,5.4 L5.4,8.73333333 L2.73333333,6.06666667 Z M7.2,17.0666667 L2.93333333,17.6 L3.53333333,13.3333333 L3.6,13.2666667 L7.2,17.0666667 L7.2,17.0666667 Z M8.66666667,15.6 L5,11.8666667 L12.2,4.66666667 L15.8666667,8.4 L8.66666667,15.6 Z M15.2,11.8 L17.8,14.4 L14.4666667,17.7333333 L11.8666667,15.1333333 L15.2,11.8 Z",id:"Shape",fillRule:"nonzero"}))))))),M=g.React.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1"},g.React.createElement("path",{d:"M19.4916,11.8972 L17.9326,11.0172 C17.9776,10.6752 17.9996,10.3352 17.9996,10.0002 C17.9996,9.6652 17.9776,9.3252 17.9326,8.9822 L19.4916,8.1032 C19.7256,7.9702 19.8966,7.7502 19.9656,7.4912 C20.0356,7.2312 19.9976,6.9542 19.8616,6.7232 L17.8146,3.2592 C17.5376,2.7912 16.9396,2.6302 16.4616,2.8972 L14.9706,3.7382 C14.3706,3.2622 13.7046,2.8732 12.9996,2.5862 L12.9996,1.0002 C12.9996,0.4482 12.5526,0.0002 11.9996,0.0002 L7.9996,0.0002 C7.4476,0.0002 6.9996,0.4482 6.9996,1.0002 L6.9996,2.5862 C6.2946,2.8732 5.6286,3.2622 5.0296,3.7382 L3.5376,2.8972 C3.0626,2.6302 2.4626,2.7912 2.1856,3.2592 L0.1386,6.7232 C0.0016,6.9542 -0.0354,7.2312 0.0346,7.4912 C0.1036,7.7502 0.2746,7.9702 0.5086,8.1032 L2.0676,8.9822 C2.0226,9.3252 1.9996,9.6652 1.9996,10.0002 C1.9996,10.3352 2.0226,10.6752 2.0676,11.0172 L0.5086,11.8972 C0.2746,12.0292 0.1036,12.2502 0.0346,12.5092 C-0.0354,12.7692 0.0016,13.0452 0.1386,13.2772 L2.1856,16.7412 C2.4626,17.2092 3.0626,17.3722 3.5376,17.1032 L5.0296,16.2612 C5.6286,16.7382 6.2946,17.1272 6.9996,17.4132 L6.9996,19.0002 C6.9996,19.5522 7.4476,20.0002 7.9996,20.0002 L11.9996,20.0002 C12.5526,20.0002 12.9996,19.5522 12.9996,19.0002 L12.9996,17.4132 C13.7046,17.1272 14.3706,16.7382 14.9706,16.2612 L16.4616,17.1032 C16.9396,17.3722 17.5376,17.2092 17.8146,16.7412 L19.8616,13.2772 C19.9976,13.0452 20.0356,12.7692 19.9656,12.5092 C19.8966,12.2502 19.7256,12.0292 19.4916,11.8972 M15.8486,8.6782 C15.9496,9.1262 15.9996,9.5712 15.9996,10.0002 C15.9996,10.4282 15.9496,10.8732 15.8486,11.3222 C15.7516,11.7522 15.9486,12.1952 16.3326,12.4112 L17.6196,13.1372 L16.5906,14.8792 L15.3376,14.1722 C14.9546,13.9562 14.4716,14.0162 14.1546,14.3222 C13.4636,14.9852 12.6196,15.4782 11.7146,15.7472 C11.2906,15.8732 10.9996,16.2632 10.9996,16.7062 L10.9996,18.0002 L8.9996,18.0002 L8.9996,16.7062 C8.9996,16.2632 8.7086,15.8732 8.2856,15.7472 C7.3796,15.4782 6.5356,14.9852 5.8456,14.3222 C5.5286,14.0162 5.0446,13.9562 4.6616,14.1722 L3.4096,14.8792 L2.3796,13.1372 L3.6666,12.4112 C4.0516,12.1952 4.2476,11.7522 4.1516,11.3222 C4.0506,10.8732 3.9996,10.4282 3.9996,10.0002 C3.9996,9.5712 4.0506,9.1262 4.1516,8.6782 C4.2476,8.2482 4.0516,7.8052 3.6666,7.5882 L2.3796,6.8622 L3.4096,5.1202 L4.6616,5.8272 C5.0456,6.0442 5.5286,5.9842 5.8456,5.6782 C6.5356,5.0142 7.3796,4.5222 8.2856,4.2522 C8.7086,4.1262 8.9996,3.7362 8.9996,3.2942 L8.9996,2.0002 L10.9996,2.0002 L10.9996,3.2942 C10.9996,3.7362 11.2906,4.1262 11.7146,4.2522 C12.6196,4.5222 13.4636,5.0142 14.1546,5.6782 C14.4716,5.9842 14.9536,6.0432 15.3376,5.8272 L16.5906,5.1202 L17.6196,6.8622 L16.3326,7.5882 C15.9486,7.8052 15.7516,8.2482 15.8486,8.6782 M9.9999,6 C7.7939,6 5.9999,7.794 5.9999,10 C5.9999,12.206 7.7939,14 9.9999,14 C12.2059,14 13.9999,12.206 13.9999,10 C13.9999,7.794 12.2059,6 9.9999,6 M9.9999,12 C8.8969,12 7.9999,11.103 7.9999,10 C7.9999,8.897 8.8969,8 9.9999,8 C11.1029,8 11.9999,8.897 11.9999,10 C11.9999,11.103 11.1029,12 9.9999,12",id:"path-1"}))}});