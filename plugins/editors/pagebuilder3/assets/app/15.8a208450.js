webpackJsonppagefly([15],{743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return w});var a=n(28),o=n.n(a),r=n(141),l=n.n(r),i=n(349),s=n.n(i),u=n(350),p=n.n(u),c=n(351),d=n.n(c),h=n(354),m=n.n(h),f=n(352),y=n.n(f),_=(n(142),n(7)),b=n.n(_),g=n(364),v=n(0),E=n.n(v),w=function(e){function t(){return s()(this,t),d()(this,(t.__proto__||l()(t)).apply(this,arguments))}return y()(t,e),p()(t,[{key:"shouldComponentUpdate",value:function(e,n){return m()(t.prototype.__proto__||l()(t.prototype),"shouldComponentUpdate",this).call(this,e,n)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"handleInsertChild",value:function(e,n,a){switch(e.type){case"Grid":return m()(t.prototype.__proto__||l()(t.prototype),"handleInsertChild",this).call(this,e,n,a);default:this.insertChild({type:"Grid"},n,function(t){t.insertChild(e,0,a)})}}},{key:"render",value:function(){return b.a.createElement("div",{style:this.state.full?{maxWidth:"100%"}:{}},this.renderChildren())}},{key:"toolbar",get:function(){return o()({},m()(t.prototype.__proto__||l()(t.prototype),"toolbar",this))}},{key:"inspector",get:function(){return{}}}],[{key:"parentTypes",get:function(){return["Section"]}},{key:"childTypes",get:function(){return/./}},{key:"propTypes",get:function(){return o()({},m()(t.__proto__||l()(t),"propTypes",this),{full:E.a.bool,containerWidth:E.a.number})}},{key:"defaultProps",get:function(){return o()({},m()(t.__proto__||l()(t),"defaultProps",this),{tag:"div",full:!0,containerWidth:1170})}}]),t}(g.default);w.css="\n\t& {\n\t\tmax-width: 1170px;\n\t\twidth: 100%;\n\t\tmargin: auto;\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n"},750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return z});var a=n(28),o=n.n(a),r=n(141),l=n.n(r),i=n(349),s=n.n(i),u=n(350),p=n.n(u),c=n(351),d=n.n(c),h=n(354),m=n.n(h),f=n(352),y=n.n(f),_=n(7),b=n.n(_),g=(n(142),n(360)),v=n(0),E=n.n(v),w=n(355),k=n(353),T=n(357),x=n(356),C=n(359),D=n(366),z=function(e){function t(){return s()(this,t),d()(this,(t.__proto__||l()(t)).apply(this,arguments))}return y()(t,e),p()(t,[{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement("iframe",{style:{height:"inherit",width:"100%"},scrolling:"no",src:"https://maps.google.com/maps?z="+this.state.zoom+"&t="+this.state.mapType+"&q="+this.state.location+"&ie=UTF8&&output=embed"}))}},{key:"inspector",get:function(){var e=m()(t.prototype.__proto__||l()(t.prototype),"inspector",this);return o()({},e,{general:o()({},e.general,{content:b.a.createElement(w.default,{name:"Content"},b.a.createElement(k.default,{label:"Location"},b.a.createElement(T.default,{bind:"state.location"})),b.a.createElement(k.default,{label:"Zoom",horizontal:!0},b.a.createElement(D.default,{bind:"state.zoom",min:"5",max:"30"})),b.a.createElement(k.default,{label:"Map Type"},b.a.createElement(C.default,null,b.a.createElement(x.default,{label:"Roadmap",bind:"state.mapType",on:"m"}),b.a.createElement(x.default,{label:"Satellite",bind:"state.mapType",on:"k"}))))}),styling:o()({},e.styling,{text:null})})}}],[{key:"defaultProps",get:function(){return o()({},m()(t.__proto__||l()(t),"defaultProps",this),{location:"NewYork",zoom:14,mapType:"m"})}},{key:"propTypes",get:function(){return o()({},m()(t.__proto__||l()(t),"propTypes",this),{location:E.a.string,zoom:E.a.number,mapType:E.a.string})}}]),t}(g.default);z.css="\n\t& {\n\t\theight: 450px;\n\t\tposition: relative;\n\t}\n\t& iframe {\n\t\tborder: 0;\n\t}\n"},777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return z});var a=n(28),o=n.n(a),r=n(141),l=n.n(r),i=n(349),s=n.n(i),u=n(350),p=n.n(u),c=n(351),d=n.n(c),h=n(354),m=n.n(h),f=n(352),y=n.n(f),_=n(7),b=n.n(_),g=n(0),v=n.n(g),E=(n(142),n(360)),w=n(355),k=n(353),T=n(357),x=n(407),C=n(356),D=n(359),z=function(e){function t(){return s()(this,t),d()(this,(t.__proto__||l()(t)).apply(this,arguments))}return y()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this;this.on("change:style:height",function(t){e.DOMNode.querySelector("iframe").style.height=t})}},{key:"render",value:function(){return b.a.createElement("div",{className:"pb-video"},b.a.createElement("div",{className:"pb-video-container",style:this.inlineStyle},this.body))}},{key:"body",get:function(){var e=this.sampleData?this.sampleData.videoID:this.state.videoID,t="?autoplay="+(this.state.autoplay?1:0);t+="&loop="+(this.state.loop?"1":"0"),t+="&mute="+(this.state.mute?"1":"0"),t+="&controls="+(this.state.controls?"1":"0");b.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+e+t,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%"});return"edit"===this.mode?this.state.placeholder?b.a.createElement("div",null,b.a.createElement("img",{src:this.state.placeholder,style:{width:"100%",height:"auto"}})):b.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+e+t,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%"}):this.state.placeholder?b.a.createElement("a",{rel:"{handler: 'iframe', size: {x: 650, y: 450}}",href:"https://www.youtube.com/embed/"+e+t,className:"modal",style:{display:"block",position:"relative"}},b.a.createElement("img",{src:this.state.placeholder,style:{width:"100%",height:"auto"}})):b.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+e+t,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%"})}},{key:"inlineStyle",get:function(){return this.state.placeholder?{}:{paddingBottom:this.state.ratio+"%"}}},{key:"inspector",get:function(){var e=this,n=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,a=m()(t.prototype.__proto__||l()(t.prototype),"inspector",this);return o()({},a,{general:o()({},a.general,{content:b.a.createElement(w.default,{name:"Content"},b.a.createElement(k.default,{label:"Youtube Video URL",vertical:!0},b.a.createElement(T.default,{bind:"state.src",placeholder:"Enter Youtube URL here...",onChange:function(t){if(t){var a=n.exec(t);a&&a[2]&&11==a[2].length?e.saveState({videoID:a[2],src:t}):e.saveState({videoID:"",src:""})}}})),b.a.createElement(x.a,{label:"Video Image Cover",bind:"state.placeholder",app:this.app}),b.a.createElement(k.default,{label:"Ratio"},b.a.createElement(D.default,null,b.a.createElement(C.default,{label:"4:3",bind:"state.ratio",on:75,off:56.25}),b.a.createElement(C.default,{label:"16:9",bind:"state.ratio",on:56.25,off:75}))),b.a.createElement(k.default,{label:"Options",vertical:!0},b.a.createElement(D.default,null,b.a.createElement(C.default,{label:"Repeat",bind:"state.loop",on:!0,off:!1,icon:"repeat",size:"xs"}),b.a.createElement(C.default,{label:"Autoplay",bind:"state.autoplay",on:!0,off:!1,icon:"play",size:"xs"}),b.a.createElement(C.default,{label:"Controls",bind:"state.controls",on:!0,off:!1,icon:"options",size:"xs"}))))}),styling:o()({},a.styling,{text:null})})}}],[{key:"propTypes",get:function(){return o()({},m()(t.__proto__||l()(t),"propTypes",this),{ratio:v.a.number.isRequired,src:v.a.string.isRequired,placeholder:v.a.string,loop:v.a.bool,autoplay:v.a.bool,controls:v.a.bool,mute:v.a.bool,videoID:v.a.string.isRequired})}},{key:"defaultProps",get:function(){return o()({},m()(t.__proto__||l()(t),"defaultProps",this),{src:"",loop:!1,autoplay:!1,controls:!1,mute:!1,videoID:"hByQW40iBmc",ratio:56.25,placeholder:""})}}]),t}(E.default);z.css="\n\t& > .pb-video-container {\n\t\theight: 0 !important;\n\t\twidth: auto !important;\n\t\toverflow: hidden;\n\t\tposition: relative;\n\t}\n\t& iframe {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder: none\n\t}\n"}});