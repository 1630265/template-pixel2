webpackJsonppagefly([60],{631:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return M});var n,i,l=a(28),o=a.n(l),s=a(141),c=a.n(s),d=a(349),r=a.n(d),p=a(350),u=a.n(p),h=a(351),b=a.n(h),m=a(352),f=a.n(m),v=a(358),w=a(13),g=a.n(w),y=a(29),x=a.n(y),k=a(356),E=a(359),S=a(357),_=a(479),R=a(362),j=a(636),z=a(374),P=a(146),C=a(386),O=a(410),M=(i=n=function(t){function e(){var t;r()(this,e);for(var a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];var l=b()(this,(t=e.__proto__||c()(e)).call.apply(t,[this].concat(n))),s=window.pagefly_data||window.pb2_editor_data||window.pb_editor_data||{},d=s.component?s.component.split("_")[1]:"",p="k2"!==d?x()("#jform_title").val():x()("#title").val(),u="k2"!==d?x()("#jform_state").val()||x()("#jform_published").val():x()("#published1-lbl").hasClass("isChecked"),h=window.location.href.includes("id"),m={title:"Title",placeholder:"Enter Page Title",editMeta:"Edit Meta Data",publish:"Publish",cancel:"Close",discard:"Discard"};return l.state=o()({},l.props,{updated:!1,publishState:"1"===u,title:p,saved:h,locales:m,type:d}),l}return f()(e,t),u()(e,[{key:"componentDidUpdate",value:function(t,e){g.a.isObjectEqual(this.state,e)||(this.state.title!==e.title&&("k2"!==this.state.type?(x()("#jform_title").val(this.state.title),x()("#pb-seo-title").val(this.state.title)):x()("#title").val(this.state.title)),this.state.publishState!==e.publishState&&("k2"!==this.state.type?(x()("#jform_state").val(this.state.publishState?"1":"0"),x()("#jform_published").val(this.state.publishState?"1":"0")):x()('input[name="published"]').val([this.state.publishState?"1":"0"])),this.setState({updated:!0}))}},{key:"restoreWindow",value:function(t){t.stopPropagation(),t.preventDefault();try{var e=document.getElementById("pb-preview");this.app.page.renderHTML(function(t){e.contentDocument.body.innerHTML=t}),x()(document.body).css({overflow:"auto"}),localStorage.setItem("previewMode","true"),x()("#pagefly-pb-app").addClass("hidden");var a=this.app.page.state.items,n=x()("#pb-placeholder"),i=x()("#pb-preview"),l=x()(".click-to-edit");a&&a[2].children.length>0?(n.removeAttr("data-empty"),i.removeAttr("data-hidden"),l.addClass("isSticky")):(n.attr("data-empty",!0),l.removeClass("isSticky"),i.attr("data-hidden",!0))}catch(t){}}},{key:"openMetaData",value:function(t){var e=this;t.preventDefault(),t.stopPropagation(),this.app.launch("metaData").then(function(t){return t.show({title:e.state.title})})}},{key:"changePublishState",value:function(t){var e=window.location.href.replace("administrator/","");"k2"===this.state.type&&(e=e.replace("cid","id")),window.open(e)}},{key:"cancel",value:function(t){switch(this.state.type){default:case"content":window.Joomla.submitbutton("article.cancel");break;case"modules":window.Joomla.submitbutton("module.cancel");break;case"k2":window.Joomla.submitbutton("cancel")}}},{key:"discard",value:function(t){return!!confirm("If you discard changes, you'll delete any edits you made since you last saved.")&&(Object(P.d)(null),location.reload(),!1)}},{key:"save",value:function(t){if(Object(P.d)(null),""===x()("#jform_title").val())this.app.launch("notify").then(function(t){return t.addNotification({level:"warning",message:"Please enter page title!"})});else switch(this.state.type){case"content":window.Joomla.submitbutton("article.apply");break;case"modules":window.Joomla.submitbutton("module.apply");break;case"k2":window.Joomla.submitbutton("apply");break;default:window.Joomla.submitbutton("article.save")}}},{key:"render",value:function(){var t=this;return this.app.page?v.React.createElement("div",null,v.React.createElement(j.a,{innerRef:function(e){t.el=e}},v.React.createElement("div",null,v.React.createElement(k.default,{hidden:!0,icon:"window restore",onClick:this.restoreWindow,tooltip:"Exit Fullscreen",size:"xl",width:"36px"}),v.React.createElement(S.default,{target:this,bind:"state.title",placeholder:this.state.locales.placeholder,width:"220px",style:{textAlign:"left",padding:"0 15px !important"},required:!0,size:"xl"}),v.React.createElement(O.default,{position:"bottom",label:"Edit meta SEO",caret:!0,plain:!0,size:"xl"},v.React.createElement("div",{style:{width:350}},v.React.createElement(C.default,{cid:"Metadata",path:"addons/Metadata"})))),v.React.createElement("div",null,this.context.page?v.React.createElement(R.default,{target:this.context.page.editor,tooltip:"Select Device",size:"xl",bind:"state.deviceWidth",options:[{icon:"tv",label:"All",value:z.c.all},{icon:"laptop",label:"Laptop",value:z.c.laptop},{icon:"tablet",label:"Tablet",value:z.c.postmobile},{icon:"mobile",label:"Mobile",value:z.c.premobile}],onChange:function(e){switch(e){case z.c.laptop:t.context.page.setState({device:"laptop"});break;case z.c.postmobile:t.context.page.setState({device:"tablet"});break;case z.c.premobile:t.context.page.setState({device:"mobile"});break;default:t.setState({zoom:1}),t.context.page.setState({device:"all"})}},width:"120px",style:{textAlign:"left"}}):null,v.React.createElement(E.default,null,v.React.createElement(k.default,{icon:"reply",target:this.app.page,action:"undo",tooltip:Object(z.g)().undo,size:"xl",width:"36px"}),v.React.createElement(k.default,{icon:"share",target:this.app.page,action:"redo",tooltip:Object(z.g)().redo,size:"xl",width:"36px"}))),v.React.createElement("div",null,v.React.createElement(_.default,{label:this.state.locales.publish,value:this.state.publishState,target:this,bind:"state.publishState",style:{minWidth:80}}),!1!==/option=com_content/.test(window.location.search)&&v.React.createElement(k.default,{label:"View",onClick:this.changePublishState,style:{minWidth:64},size:"xl",disabled:!this.state.publishState}),v.React.createElement(k.default,{label:this.state.locales.cancel,onClick:this.cancel,style:{minWidth:64},tooltip:Object(z.g)().close,size:"xl"}),v.React.createElement(k.default,{label:this.state.locales.discard,onClick:this.discard,style:{minWidth:64},size:"xl",tooltip:Object(z.g)().discard,disabled:!this.state.updated}),v.React.createElement(k.default,{id:"pb-save-button",primary:!0,label:"Save",onClick:this.save,disabled:!this.state.updated,style:{minWidth:64},tooltip:Object(z.g)().save,size:"xl"})))):null}}]),e}(v.default),n.APP_KEY="menubar",n.APP_POS="top",i)},636:function(t,e,a){"use strict";var n=a(361),i=a.n(n),l=a(143),o=a.n(l),s=i()(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 8px 10px;\n\tbackground: ",";\n\tbox-shadow: ",";\n\tposition: relative;\n\tz-index: 3;\n\n\t& > div:first-child > button:first-child {\n\t\twidth: 36px;\n\t\tmargin-left: -4px !important;\n\t\t&:hover {\n\t\t\tbackground: ",";\n\t\t\tborder-color: ",";\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tflex-flow: row nowrap;\n\t\tflex: 0 0 auto;\n\t\talign-items: center;\n\t}\n\t& > * > * ~ * {\n\t\tmargin-left: 12px !important;\n\t}\n\n\t& > div > button,\n\t& > div > input {\n\t\tfont-weight: 400;\n\t}\n\t& a[data-plain] > i {\n\t\tfont-size: 16px;\n\t}\n\t",";\n"],["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 8px 10px;\n\tbackground: ",";\n\tbox-shadow: ",";\n\tposition: relative;\n\tz-index: 3;\n\n\t& > div:first-child > button:first-child {\n\t\twidth: 36px;\n\t\tmargin-left: -4px !important;\n\t\t&:hover {\n\t\t\tbackground: ",";\n\t\t\tborder-color: ",";\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tflex-flow: row nowrap;\n\t\tflex: 0 0 auto;\n\t\talign-items: center;\n\t}\n\t& > * > * ~ * {\n\t\tmargin-left: 12px !important;\n\t}\n\n\t& > div > button,\n\t& > div > input {\n\t\tfont-weight: 400;\n\t}\n\t& a[data-plain] > i {\n\t\tfont-size: 16px;\n\t}\n\t",";\n"]);e.a=o.a.div(s,function(t){return t.theme.panel.bg},function(t){return t.theme.panel.shadow},function(t){return t.theme.button.danger},function(t){return t.theme.button.danger},function(t){return t.css})}});