webpackJsonppagefly([13],{630:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return x});var n=a(28),o=a.n(n),s=a(141),i=a.n(s),r=a(349),l=a.n(r),u=a(350),c=a.n(u),d=a(351),p=a.n(d),m=a(352),h=a.n(m),f=a(7),y=a.n(f),_=a(358),g=a(353),v=a(29),b=a.n(v),w=a(357),k=a(13),E=a.n(k),x=function(t){function e(){var t;l()(this,e);for(var a=arguments.length,n=Array(a),s=0;s<a;s++)n[s]=arguments[s];var r=p()(this,(t=e.__proto__||i()(e)).call.apply(t,[this].concat(n))),u={metaDesc:"Meta description",metaTitle:"Title",metaAlias:"Alias"},c=window.pagefly_data||window.pb2_editor_data||window.pb_editor_data||{},d=c.component?c.component.split("_")[1]:"",m="k2"!==d?b()("#jform_alias").val():b()("#alias").val(),h="k2"!==d?b()("#jform_metadesc").val():b()('textarea[name="metadesc"]').val();return r.state=o()({},r.props,{locales:u,alias:m,metaDescription:h,type:d}),r}return h()(e,t),c()(e,[{key:"shouldComponentUpdate",value:function(t,e,a){return!E.a.isEqual(this.state,e)}},{key:"componentDidUpdate",value:function(t,e){var a=this;this.app.launch("menubar").then(function(t){a.state.metaDescription!==e.metaDescription&&("k2"!==a.state.type?b()("#jform_metadesc").val(a.state.metaDescription):b()('textarea[name="metadesc"]').val(a.state.metaDescription)),a.state.alias!==e.alias&&("k2"!==a.state.type?b()("#jform_alias").val(a.state.alias):b()("#alias").val(a.state.alias)),t.setState({updated:!0})})}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(g.default,{label:this.state.locales.metaDesc},y.a.createElement(w.default,{type:"textarea",target:this,bind:"state.metaDescription"})),y.a.createElement(g.default,{label:this.state.locales.metaAlias},y.a.createElement(w.default,{target:this,bind:"state.alias",style:{textAlign:"left"}})))}}]),e}(_.default)},758:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return w});var n=a(28),o=a.n(n),s=a(141),i=a.n(s),r=a(349),l=a.n(r),u=a(350),c=a.n(u),d=a(351),p=a.n(d),m=a(354),h=a.n(m),f=a(352),y=a.n(f),_=a(7),g=a.n(_),v=a(360),b=a(381),w=(a(355),a(353),a(357),a(359),a(362),a(379),function(t){function e(){return l()(this,e),p()(this,(e.__proto__||i()(e)).apply(this,arguments))}return y()(e,t),c()(e,[{key:"render",value:function(){var t=this;return g.a.createElement("div",null,g.a.createElement(b.default,{ref:function(e){return t._text=e},name:"text",bind:"text",placeholder:"Heading text",key:"text"}))}},{key:"inspector",get:function(){var t=h()(e.prototype.__proto__||i()(e.prototype),"inspector",this);return o()({},t)}}],[{key:"propTypes",get:function(){return o()({},h()(e.__proto__||i()(e),"propTypes",this))}},{key:"defaultProps",get:function(){return o()({},h()(e.__proto__||i()(e),"defaultProps",this))}}]),e}(v.default));w.css='\n\t& > a {\n\t\tcolor: inherit;\n\t}\n\t& {\n\t\tword-break: break-word;\n\t}\n\t&__icon--left i {\n\t\tmargin-right: 0.3em;\n\t}\n\t&__icon--right i {\n\t\tmargin-left: 0.3em;\n\t}\n\t&__icon--top i {\n\t\tmargin-bottom: 0.5em;\n\t}\n\t&__icon--top > span,\n\t&__icon--top > a,\n\t&__icon--top > span[data-empty][contenteditable] {\n\t\tdisplay: block;\n\t}\n\t& [class*="--diamond"] {\n\t\tmargin-right: 1em;\n\t}\n'},772:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return j});var n=a(28),o=a.n(n),s=a(141),i=a.n(s),r=a(349),l=a.n(r),u=a(350),c=a.n(u),d=a(351),p=a.n(d),m=a(354),h=a.n(m),f=a(352),y=a.n(f),_=a(7),g=a.n(_),v=a(0),b=a.n(v),w=(a(142),a(360)),k=a(355),E=a(353),x=a(357),B=a(359),P=a(356),j=function(t){function e(){return l()(this,e),p()(this,(e.__proto__||i()(e)).apply(this,arguments))}return y()(e,t),c()(e,[{key:"render",value:function(){var t=/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent),e="&amp;auto_play="+(t?"false":this.state.autoplay?"true":"false");return e+="&allowscriptaccess=always",e+="&buying="+this.state.buyButton,e+="&liking="+this.state.likeButton,e+="&download="+this.state.downloadButton,e+="&sharing="+this.state.shareButton,e+="&show_playcount="+this.state.playCounts,e+="&show_comments="+this.state.comments,e+="&show_user="+this.state.username,e+="&text_download_track=Download",g.a.createElement("div",null,"edit"!=this.mode?null:g.a.createElement("div",{className:"video-overlay",style:{width:"100%",height:"100%",zIndex:"999",position:"absolute",top:"0px",left:"0px",pointerEvents:"none"}}),g.a.createElement("iframe",{id:"sc-widget-"+this.state.id,src:"https://w.soundcloud.com/player/?url="+this.state.src+e,width:"100%",scrolling:"no",frameBorder:"no"}),g.a.createElement("script",{src:"https://w.soundcloud.com/player/api.js",type:"text/javascript"}))}},{key:"body",get:function(){var t=/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent),e="&amp;auto_play="+(t?"false":this.state.autoplay?"true":"false");return e+="&allowscriptaccess=always",e+="&buying="+this.state.buyButton,e+="&liking="+this.state.likeButton,e+="&download="+this.state.downloadButton,e+="&sharing="+this.state.shareButton,e+="&show_playcount="+this.state.playCounts,e+="&show_comments="+this.state.comments,e+="&show_user="+this.state.username,e+="&text_download_track=Download",["edit"!=this.mode?null:g.a.createElement("div",{className:"video-overlay",style:{width:"100%",height:"100%",zIndex:"999",position:"absolute",top:"0px",left:"0px"}}),g.a.createElement("iframe",{id:"sc-widget-"+this.state.id,src:"https://w.soundcloud.com/player/?url="+this.state.src+e,width:"100%",height:"100%",scrolling:"no",frameBorder:"no"}),g.a.createElement("script",{src:"https://w.soundcloud.com/player/api.js",type:"text/javascript"})]}},{key:"inlineStyle",get:function(){return{height:this.state.height,position:"relative"}}},{key:"inspector",get:function(){var t=h()(e.prototype.__proto__||i()(e.prototype),"inspector",this);return o()({},t,{general:o()({},t.general,{content:g.a.createElement(k.default,{name:"Content"},g.a.createElement(E.default,{label:"Soundcloud URL",vertical:!0},g.a.createElement(x.default,{bind:"state.src",placeholder:"Enter Soundcloud URL..."})),g.a.createElement(E.default,{label:"Options",vertical:!0},g.a.createElement(B.default,null,g.a.createElement(P.default,{label:"Autoplay",bind:"state.autoplay",on:!0,off:!1}),g.a.createElement(P.default,{label:"Buy Button",bind:"state.buyButton",on:!0,off:!1}),g.a.createElement(P.default,{label:"Username",bind:"state.username",on:!0,off:!1}))))}),styling:o()({},t.styling,{text:null})})}}],[{key:"displayName",get:function(){return"SoundCloud"}},{key:"propTypes",get:function(){return o()({},h()(e.__proto__||i()(e),"propTypes",this),{height:b.a.string.isRequired,src:b.a.string.isRequired,autoplay:b.a.bool,buyButton:b.a.bool,likeButton:b.a.bool,downloadButton:b.a.bool,shareButton:b.a.bool,comments:b.a.bool,playCounts:b.a.bool,username:b.a.bool})}},{key:"defaultProps",get:function(){return o()({},h()(e.__proto__||i()(e),"defaultProps",this),{src:"https://soundcloud.com/different-heaven/mtc-different-heaven-remix",autoplay:!1,height:"",buyButton:!1,likeButton:!1,downloadButton:!1,shareButton:!1,comments:!1,playCounts:!1,username:!1})}}]),e}(w.default);j.css="\n\t& {\n\t\tposition: relative;\n\t}\n"}});