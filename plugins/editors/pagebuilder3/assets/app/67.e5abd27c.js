webpackJsonppagefly([67],{728:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"default",function(){return N});var n=a(28),r=a.n(n),i=a(141),l=a.n(i),s=a(349),o=a.n(s),p=a(350),u=a.n(p),c=a(351),h=a.n(c),d=a(354),m=a.n(d),f=a(352),g=a.n(f),b=a(7),C=a.n(b),x=a(364),y=a(0),v=a.n(y),I=a(374),E=a(353),_=a(355),k=a(363),w=a(357),z=a(366),R=(a(359),a(13)),T=a.n(R),M=a(370),N=function(e){function t(){return o()(this,t),h()(this,(t.__proto__||l()(t)).apply(this,arguments))}return g()(t,e),u()(t,[{key:"getChildContext",value:function(){return r()({},m()(t.prototype.__proto__||l()(t.prototype),"getChildContext",this).call(this),{col:this})}},{key:"shouldReceiveChild",value:function(e){var a;if("Row"===e.type){var n=0;if(T.a.each(this.path,function(e){"Row.Col"===e.type&&n++}),n>1)return!1}for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return(a=m()(t.prototype.__proto__||l()(t.prototype),"shouldReceiveChild",this)).call.apply(a,[this,e].concat(i))}},{key:"componentDidMount",value:function(){var e=this;this.on("change:style:paddingLeft",function(t){e.parent.setState({gutter:2*parseInt(t)})}),this.on("change:style:paddingRight",function(t){e.parent.setState({gutter:2*parseInt(t)})})}},{key:"handleInspectorChange",value:function(){this.parent.forceUpdate(),k.default.refreshAllControls()}},{key:"render",value:function(){return C.a.createElement("div",{tabIndex:"3"},this.renderChildren())}},{key:"displayName",get:function(){return"Column"}},{key:"inspector",get:function(){return r()({},m()(t.prototype.__proto__||l()(t.prototype),"inspector",this),{general:r()({},this.parent.inspector.general,{column:C.a.createElement(M.default,{bind:"state.cols",on:[0],target:this.parent},C.a.createElement(_.default,{name:"Column Width",key:"col-settings",cid:"col-settings",target:this},C.a.createElement(E.default,{label:"Any device",target:this.app.page,bind:"state.device",on:"all",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.size",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.size",min:"0",max:"12",step:"1",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})),C.a.createElement(E.default,{label:"Laptop",target:this.app.page,bind:"state.device",on:"all",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.computer",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.computer",min:"0",max:"12",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})),C.a.createElement(E.default,{label:"Tablet",target:this.app.page,bind:"state.device",on:"all",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.tablet",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.tablet",min:"0",max:"12",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})),C.a.createElement(E.default,{label:"Mobile",target:this.app.page,bind:"state.device",on:"all",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.mobile",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.mobile",min:"0",max:"12",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})),C.a.createElement(E.default,{label:"Laptop",target:this.app.page,bind:"state.device",on:"laptop",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.computer",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.computer",min:"0",max:"12",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})),C.a.createElement(E.default,{label:"Tablet",target:this.app.page,bind:"state.device",on:"tablet",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.tablet",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.tablet",min:"0",max:"12",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})),C.a.createElement(E.default,{label:"Mobile",target:this.app.page,bind:"state.device",on:"mobile",hint:"/12",vertical:!0},C.a.createElement(z.default,{target:this.app.selected,bind:"state.mobile",min:"0",max:"12",step:"1",flex:"2 1 auto",onChange:this.handleInspectorChange}),C.a.createElement(w.default,{target:this.app.selected,bind:"state.mobile",min:"0",max:"12",width:"50px",flex:"1",parse:function(e){return e||"auto"},format:function(e){return parseInt(e,10)||0},onChange:this.handleInspectorChange})))),note:C.a.createElement(M.default,{bind:"state.cols",off:[0],target:this.parent},C.a.createElement(_.default,{name:"Column Width"},C.a.createElement(E.default,{label:"Notes:"},C.a.createElement("div",{className:"note"},'You cannot adjust column size because you used the Grid\'s "Columns" in the setting. If you want to adjust this column size, please set the "Columns per row" to auto.'))))})})}},{key:"className",get:function(){var e=this.props,t=(e.gutter,e.spacing,e.cols),a=(e.equals,0===this.state.size||t>1?"":""+I.d[parseInt(this.state.size)]),n=0===this.state.computer?"":"desk--"+I.d[parseInt(this.state.computer)],r=0===this.state.tablet?"":"tablet--"+I.d[parseInt(this.state.tablet)];return a+" "+(0===this.state.mobile?"":"mobile--"+I.d[parseInt(this.state.mobile)])+" "+r+" "+n+" grid__column"}}],[{key:"parentTypes",get:function(){return/^(Grid|Row|Section)$/}},{key:"childTypes",get:function(){return/^(?!Col).+$/}},{key:"propTypes",get:function(){return r()({},m()(t.__proto__||l()(t),"propTypes",this),{size:v.a.number,large:v.a.number,computer:v.a.number,tablet:v.a.number,mobile:v.a.number})}},{key:"defaultProps",get:function(){return r()({},m()(t.__proto__||l()(t),"defaultProps",this),{size:0,large:0,computer:0,tablet:0,mobile:0})}}]),t}(x.default)}});