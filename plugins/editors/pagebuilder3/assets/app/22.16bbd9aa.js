webpackJsonppagefly([22],{714:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return k});var a=n(28),r=n.n(a),i=n(141),l=n.n(i),o=n(349),s=n.n(o),c=n(350),d=n.n(c),p=n(351),u=n.n(p),f=n(354),m=n.n(f),v=n(352),h=n.n(v),b=n(142),g=n(7),y=n.n(g),x=n(364),k=(n(374),function(t){function e(){return s()(this,e),u()(this,(e.__proto__||l()(e)).apply(this,arguments))}return h()(e,t),d()(e,[{key:"componentWillMount",value:function(){this.loadChildren()}},{key:"componentDidMount",value:function(){this.app.launch("presetPicker")}},{key:"getChildContext",value:function(){return r()({},m()(e.prototype.__proto__||l()(e.prototype),"getChildContext",this).call(this),{head:this})}},{key:"mouseOverHandler",value:function(){this.page.overlay&&this.page.overlay.focus(null)}},{key:"mouseLeaveHandler",value:function(){this.page.overlay&&this.page.overlay.focus(null)}},{key:"select",value:function(){return this.page.body.focus()}},{key:"placeholder",value:function(t){var e=this;return y.a.createElement("div",{className:"preset-empty",key:"placeholder"},"You have not had any style here, please"," ",y.a.createElement("a",{onClick:function(){0===e.get("page.app.state.trial")||e.app.trigger("presetpickerview:add",t)}},"add new styles"))}},{key:"filterPresetByType",value:function(t){var e=this.get("page.state.items"),n=b.b.filter(this.state.children,function(n,a){return e[n].type===t});return n&&n.length>0?n:[this.placeholder(t)]}},{key:"render",value:function(){var t=this,e=this.get("page.app.theme.button")||"",n=0===this.get("page.app.edition");return y.a.createElement("div",null,y.a.createElement("div",null,y.a.createElement("div",null,y.a.createElement("button",{className:"btn-back",style:{background:e.bg,color:e.text,borderColor:e.border},onClick:function(e){"block"===(t.get("DOMNode.style.display")||"")&&t.invoke("page.togglePreset")}},y.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 493.353 493.352"},y.a.createElement("path",{fill:e.text,d:"M490.786 212.678c-1.718-1.713-3.9-2.568-6.57-2.568h-356.31v-63.953c0-3.81-1.81-6.567-5.423-8.28-3.62-1.52-6.952-.95-9.995 1.713L2.853 240.658C.95 242.564 0 244.848 0 247.51c0 2.475.95 4.666 2.853 6.568l109.636 99.928c3.045 2.474 6.376 2.956 9.994 1.427 3.612-1.52 5.424-4.278 5.424-8.278v-63.953h356.315c2.663 0 4.854-.86 6.564-2.567 1.71-1.71 2.566-3.897 2.566-6.563v-54.82c.003-2.666-.856-4.86-2.567-6.574z"})),"Back to Edit")),y.a.createElement("div",{className:"box-styles"},y.a.createElement("div",{className:"heading"},y.a.createElement("span",{className:"title"},"Box styles"),y.a.createElement("span",{className:"btn-add-new",onClick:function(){!n&&t.app.trigger("presetpickerview:add","Preset.BlockPreset")}},"Add new styles")),y.a.createElement("div",{className:"content"},this.renderChildren(this.filterPresetByType("Preset.BlockPreset")).map(function(t){return"placeholder"===t.key?t:y.a.createElement("div",{key:t.key,className:"placeholder-background"},t)}))),y.a.createElement("div",{className:"button-styles"},y.a.createElement("div",{className:"heading"},y.a.createElement("span",{className:"title"},"Button styles"),y.a.createElement("span",{className:"btn-add-new",onClick:function(){!n&&t.app.trigger("presetpickerview:add","Preset.ButtonPreset")}},"Add new styles")),y.a.createElement("div",{className:"content"},this.renderChildren(this.filterPresetByType("Preset.ButtonPreset")))),y.a.createElement("div",{className:"text-styles"},y.a.createElement("div",{className:"heading"},y.a.createElement("span",{className:"title"},"Text styles"),y.a.createElement("span",{className:"btn-add-new",onClick:function(){!n&&t.app.trigger("presetpickerview:add","Preset.TextPreset")}},"Add new styles")),y.a.createElement("div",{className:"content"},this.renderChildren(this.filterPresetByType("Preset.TextPreset"))))),n?y.a.createElement("h4",{className:"cover"},"This feature is only available on Pro version",y.a.createElement("a",{href:"javascript:void(0)",onClick:function(e){t.app.launch("editionNotice").then(function(t){t.setState({title:"Upgrade to PRO to access to element’s preset feature",content:"In the PRO edition you can save and reuse element’s styling. This is great time-saver when you need to maintain unified style for multiple elements."})})}},"Learn more")):null)}},{key:"isEmpty",get:function(){return!1}}],[{key:"parentTypes",get:function(){return["Page"]}},{key:"childTypes",get:function(){return/./}}]),e}(x.default));k.css='\n\t& {\n\t\tfont-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n\t}\n\t& .cover {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground: rgba(255, 255, 255, 0.8);\n\t\tz-index: 100000000000;\n\t}\n\t& .cover a {\n\t\tmargin-left: 5px;\n\t\tfont-weight: 500;\n\t}\n\t& .btn-wrapper {\n\t\tdisplay: inline-block;\n\t}\n\t& .placeholder-background {\n\t\tbackground-image: linear-gradient(45deg, #dbdbdb 25%, transparent 25%, transparent 75%, #dbdbdb 75%, #dbdbdb), linear-gradient(45deg, #dbdbdb 25%, transparent 25%, transparent 75%, #dbdbdb 75%, #dbdbdb);\n\t    background-size: 18px 18px;\n\t    background-position: 0 0, 9px 9px;\n\t    text-align: center;\n\t}\n\t& {\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\tdisplay: none;\n\t}\n\t& a {\n\t\tcolor: #ff6c00;\n\t}\n\n\t& > div {\n\t\tbackground: white;\n\t\tpadding: 15px;\n\t}\n\n\t& .heading {\n\t\tdisplay: inline-flex;\n\t\tpadding: 10px 0px;\n\t\talign-items: center;\n\t\tborder-bottom: 1px solid #e5e5e5;\n\t\twidth: 100%;\n\t}\n\n\t& .heading .title {\n\t\tfont-size: 18px;\n\t\tflex: 1 calc(100%/2);\n\t}\n\n\t& .heading .btn-add-new {\n\t\tcursor: pointer;\n\t\tflex: 1 calc(100%/2);\n\t\ttext-align: right;\n\t\tfont-size: 13px;\n\t}\n\n\t& .content {\n\t\tpadding: 15px 0px;\n\t\twidth: 100%;\n\t}\n\t& .preset-empty {\n\t\tfont-size: 16px;\n\t\ttext-align: center;\n\t\tpadding: 20px;\n\t\tborder: 1px dotted #ccc;\n\t}\n\t& .preset-empty a {\n\t\tcursor: pointer;\n\t}\n\t& .btn-back {\n\t\tpadding: 7px 20px;\n\t\tfont-size: 14px;\n\t\tborder: 1px solid;\n\t\tborder-radius: 3px;\n\t\tcursor: pointer;\n\t\tmargin-bottom: 20px;\n\t}\n\t& .btn-back:hover {\n\t\tbackground: linear-gradient(180deg,#FAFBFC 0%,#EBEFF2 100%) !important;\n\tborder: 1px solid #C4CDD5;\n\t}\n\t& .btn-back svg {\n\t\tvertical-align: middle;\n\t\tmargin-right: 5px;\n\t}\n\t& .btn-back:focus {\n\t\toutline: none;\n\t}\n'},774:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return O});var a=n(28),r=n.n(a),i=n(141),l=n.n(i),o=n(349),s=n.n(o),c=n(350),d=n.n(c),p=n(351),u=n.n(p),f=n(354),m=n.n(f),v=n(352),h=n.n(v),b=n(142),g=n(7),y=n.n(g),x=n(364),k=n(0),E=n.n(k),_=n(356),w=(n(359),n(355)),N=(n(379),n(357)),C=n(353),P=n(362),T=n(363),z=n(375),B=n(496),A=n(368),O=function(t){function e(){return s()(this,e),u()(this,(e.__proto__||l()(e)).apply(this,arguments))}return h()(e,t),d()(e,[{key:"selectTab",value:function(t){var e=Object(b.a)(this.nav).children().eq(t).get(0),n=Object(b.a)(this.nav).find("[data-active=true]").get(0);n?n.dispatchEvent(new Event("click")):e&&b.b.defer(function(){e.click()}),this.state.active!==t&&this.saveState({active:t})}},{key:"componentWillMount",value:function(){this.nav=[]}},{key:"componentDidMount",value:function(){this.selectTab(this.state.active)}},{key:"componentDidUpdate",value:function(){this.selectTab(this.state.active)}},{key:"addTab",value:function(){var t=this,e=this.state.children.length;this.insertChild({type:"Content",label:"Tab "+(e+1)},function(){t.selectTab(e)})}},{key:"render",value:function(){var t=this;return y.a.createElement("div",{className:this.className},y.a.createElement("nav",{ref:function(e){return t.nav=e}},this.mapChildren(function(e,n){if(!e||b.b.isString(e))return e;var a=n;return y.a.createElement("a",{href:"#pb-content-"+e.key,"data-action":"tab",ref:function(e){t.nav||(t.nav=[]),t.nav[a]=e}},e.props.icon?y.a.createElement("i",{className:"fa fa-"+e.props.icon}):"",e.props.label||"Tab "+(a+1))})),y.a.createElement("div",{className:this.selectorName+"__content"},this.renderChildren()))}},{key:"inspectorState",get:function(){var t={Tabs:"",Button:">nav>a"},e={Normal:"",Hover:":hover",Selected:"[data-active=true]"};return y.a.createElement(w.default,{key:"tab-styling"},y.a.createElement(C.default,{label:"Styling for?",horizontal:!0},y.a.createElement(P.default,{type:"menu",bind:"state.psuedo",options:t,onChange:function(){b.b.defer(function(){T.default.refreshAllControls()})}})),y.a.createElement(C.default,{label:"Button State",bind:"state.psuedo",off:[""],vertical:!0},y.a.createElement(P.default,{type:"menu",bind:"state.psuedoState",options:e,onChange:T.default.refreshAllControls})))}},{key:"inspector",get:function(){var t=this;return r()({},m()(e.prototype.__proto__||l()(e.prototype),"inspector",this),{general:{layout:y.a.createElement(w.default,{name:"Layout",cid:"tabs-layout",key:"tabs-layout"},y.a.createElement(C.default,{label:"Vertical",horizontal:!0},y.a.createElement(z.default,{bind:"state.vertical"})),y.a.createElement(C.default,{label:"Reverse",horizontal:!0},y.a.createElement(z.default,{bind:"state.reverse"})),y.a.createElement(C.default,{label:"Fitted",horizontal:!0},y.a.createElement(z.default,{bind:"state.fitted"})),y.a.createElement(C.default,{label:"Nav Align",horizontal:!0},y.a.createElement(P.default,{type:"menu",bind:"state.align",options:{Start:"start",Center:"center",End:"end"}}))),content:y.a.createElement(w.default,{name:"Tabs",cid:"tabs-content",key:"tabs-content"},y.a.createElement(C.default,{label:"Add New Tab",horizontal:!0,target:this},y.a.createElement(_.default,{flex:"0 0 auto",icon:"plus",label:"Add",action:"addTab"})),y.a.createElement(A.default,{sortable:!0,collection:this.subViews},function(e){var n=t.page.getElement(e.get("key"));return y.a.createElement(A.default.Item,{compact:!0,divided:!0},y.a.createElement(_.default,{icon:"ellipsis vertical",plain:!0,padding:"0",flex:"0"}),y.a.createElement("div",null,y.a.createElement(C.default,{style:{padding:"0 5px"}},y.a.createElement(N.default,{target:n,bind:"state.label",placeholder:"Label",flex:"4"})),y.a.createElement(C.default,{style:{padding:"0 5px"}},y.a.createElement(B.a,{target:n,bind:"state.icon",placeholder:"Icon",clear:!1,flex:"3"}))),y.a.createElement("aside",null,y.a.createElement(_.default,{flex:"0 0 auto",plain:!0,padding:"0px",icon:"clone",size:"xs",target:n,action:"duplicate"}),y.a.createElement(_.default,{flex:"0 0 auto",plain:!0,padding:"0px",icon:"circle remove",size:"xs",target:n,action:"remove"})))}))}})}},{key:"className",get:function(){return(this.state.vertical?"vertical":"")+" "+(this.state.reverse?"reverse":"")+" "+(this.state.align?this.selectorName+"--"+this.state.align:"")+" "+(this.state.fitted?this.selectorName+"--fitted":"")}}],[{key:"propTypes",get:function(){return r()({},m()(e.__proto__||l()(e),"propTypes",this),{active:E.a.number,vertical:E.a.bool,reverse:E.a.bool,fitted:E.a.bool,align:E.a.oneOf(["start","center","end"])})}},{key:"defaultProps",get:function(){return r()({},m()(e.__proto__||l()(e),"defaultProps",this),{active:0,vertical:!1,reverse:!1,fitted:!1,align:"start"})}},{key:"childTypes",get:function(){return["Content"]}}]),e}(x.default);O.css="\n\t& {\n\t\tdisplay: flex;\n\t\tdisplay: -webkit-flex;\n\t\tflex-flow: column;\n\t\talign-items: stretch;\n\t}\n\t&.vertical {\n\t\tflex-flow: row;\n\t}\n\t&.reverse {\n\t\tflex-flow: column-reverse;\n\t}\n\t&.vertical.reverse {\n\t\tflex-flow: row-reverse;\n\t}\n\t&>nav {\n\t\tdisplay: flex;\n\t}\n\t&--center > nav {\n\t\tjustify-content: center;\n\t}\n\t&--end > nav {\n\t\tjustify-content: flex-end;\n\t}\n\t.vertical.&--center > nav {\n\t\talign-items: center;\n\t}\n\t.vertical.&--end > nav {\n\t\talign-items: flex-end;\n\t}\n\t&.vertical > nav {\n\t\tflex-direction: column;\n\t\tmin-width: 100px;\n\t}\n\t&>nav>a {\n\t\tdisplay: inline-block;\n\t\tpadding: 0.5em 1em;\n\t\tfont-weight: bold;\n\t\tborder-width: 1px;\n\t\ttext-decoration: none;\n\t\tcolor: inherit;\n\t\tborder-bottom: 2px solid transparent;\n\t}\n\t&.reverse>nav>a {\n\t\tborder-top: 2px solid transparent;\n\t\tborder-bottom: none;\n\t}\n\t&--fitted > nav > a {\n\t\tflex: 1 1 auto;\n\t}\n\t& nav > a > i {\n\t\tmargin-right: 0.3em;\n\t}\n\t&.vertical>nav>a {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tborder-bottom: 0;\n\t\tborder-right: 2px solid transparent;\n\t}\n\t&.vertical.reverse>nav>a {\n\t\tborder: none;\n\t\tborder-left: 2px solid transparent;\n\t}\n\t&>nav>a[data-active],\n\t&.vertical>nav>a[data-active] {\n\t\tborder-color: inherit;\n\t}\n\t&.vertical &__content {\n\t\tpadding: 0 1rem;\n\t}\n\t&__content {\n\t\tflex: 1;\n\t\tpadding: 1.5rem 0;\n\t}\n\t&__content > * {\n\t\theight: 100%;\n\t}\n"}});