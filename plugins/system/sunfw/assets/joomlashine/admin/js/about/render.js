!(function(api){var jvycWgFc=function(){return api.KfBzMUds.wHQp8YrB;},MWuP2mk1=function(){return api.KfBzMUds.cVA7rMgF;},B2ZY0vEQ=function(){return api.KfBzMUds.R6S5uxSq.apply(api.KfBzMUds,arguments);},HD65V7mp=function(){return MWuP2mk1()[api.Text.JM1VYuP3([114,101,109,97,105,110,105,110,103,95,100,97,121])];},KVKaUF40=function(){return MWuP2mk1()[api.Text.JM1VYuP3([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},Vc06c9Yr=function(){return api.KfBzMUds.u2zbANWB.apply(api.KfBzMUds,arguments);},KUMZu8RX=function(){return api.KfBzMUds.BkFpz80q.apply(api.KfBzMUds,arguments);},ctd4kDmq=function(){return api.KfBzMUds.g329Ba5Y.apply(api.KfBzMUds,arguments);},knf0Xbp7=function(){return MWuP2mk1()[api.Text.JM1VYuP3([101,120,112,105,114,101,100])];},b9CX4U1D=function(){return api.KfBzMUds.qE92Sf2Q.apply(api.KfBzMUds,arguments);},X9z22Qj2=function(){return api.KfBzMUds.N7AReWJF.apply(api.KfBzMUds,arguments);},AyTc7cJw=function(){return api.KfBzMUds.Rdh89jcZ.apply(api.KfBzMUds,arguments);},t5bYVZzt=function(){return api.KfBzMUds.cxVvgnGC.apply(api.KfBzMUds,arguments);},SByQXbKF=function(){return api.KfBzMUds.J3amJZNT.apply(api.KfBzMUds,arguments);},seraghj4=function(){return api.KfBzMUds.Fv4xgSbT.apply(api.KfBzMUds,arguments);},j0qUAJKh=function(){return api.KfBzMUds.X00xqdbd.apply(api.KfBzMUds,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.mMdS6y9Z=jvycWgFc;api.EMCwTnzm=MWuP2mk1;api.bt8n357M=B2ZY0vEQ;api.s6CZV2qh=HD65V7mp;api.pGx55QcN=KVKaUF40;api.T3uUg6RN=Vc06c9Yr;api.kN4bGeVZ=KUMZu8RX;api.tpsnV79N=ctd4kDmq;api.F9Cv9dKe=knf0Xbp7;api.kh5sdpxR=b9CX4U1D;api.gdPBqCu7=X9z22Qj2;api.ADqZqcn6=AyTc7cJw;api.YMa2cyGY=t5bYVZzt;api.QeHftJZs=SByQXbKF;api.qp7RxRPa=seraghj4;api.pznEKhcV=j0qUAJKh;var PaneAbout=api.PaneAbout=extendReactClass('PaneMixinEditor',{render:function(){if(this.config===undefined){return null;}var framework=this.props.doc.refs.footer.state.credits.framework,template=this.props.doc.refs.footer.state.credits.template,update=this.props.doc.refs.update.data,footer=this.props.doc.refs.footer;return React.createElement("div",{key:this.props.id||api.Text.toId(),ref:"wrapper",className:"about"},React.createElement("div",{className:"jsn-main-content"},React.createElement("div",{className:"container-fluid py-4"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col mx-auto sunfw-about-page"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-6"},React.createElement("h2",null,api.Text.parse('framework')),React.createElement("div",{className:"thumbnail"},framework.link&&this.config.enableThumbnailLink?React.createElement("a",{href:framework.link,target:"_blank",rel:"noopener noreferrer",onClick:function(){api.cPp8ndR9.pjVTHZ2z('About','Explore Framework','Via thumbnail');}.bind(this)},React.createElement("img",{src:this.config.frameworkThumb})):React.createElement("a",null,React.createElement("img",{src:this.config.frameworkThumb})),React.createElement("div",{className:"caption"},React.createElement("h3",null,framework.link&&this.config.enableThumbnailLink?React.createElement("a",{href:framework.link,target:"_blank",rel:"noopener noreferrer",onClick:function(){api.cPp8ndR9.pjVTHZ2z('About','Explore Framework','Via title');}.bind(this)},framework.name):React.createElement("a",null,framework.name)),React.createElement("div",{className:"about-framework-update"},React.createElement("p",{className:"version sunfw-version-info"},api.Text.parse('version'),':'+' ',framework.version,' ',footer.state.showUpdate?update.framework.hasUpdate&&footer.state.showUpdate?React.createElement("span",{className:"update-available"},'(',React.createElement("a",{href:"#",className:"sunfw-update-link",id:"sunfw-about-update-framework-link","data-target":"framework",onClick:this.props.doc.refs.update.update},api.Text.parse('update-available')),')'):React.createElement("span",{className:"version-latest"},'(',api.Text.parse('latest-version'),')'):null),React.createElement("p",{className:"about-released-date"},api.Text.parse('release-date'),':'+' ',this.config.frameworkRelease),this.config.showCopyright?React.createElement("p",{className:"about-copyright"},api.Text.parse('copyright-by'),':'+' ',React.createElement("a",{href:"https://www.joomlashine.com/",target:"_blank",onClick:function(){api.cPp8ndR9.pjVTHZ2z('About','Explore JSN Brand','Via framework');}.bind(this)},"www.JoomlaShine.com")):null)))),React.createElement("div",{className:"col-6"},React.createElement("h2",null,api.Text.parse('template')),React.createElement("div",{className:"thumbnail"},template.link&&this.config.enableThumbnailLink?React.createElement("a",{href:template.link,target:"_blank",rel:"noopener noreferrer",onClick:function(){api.cPp8ndR9.pjVTHZ2z('About','Explore Template','Via thumbnail');}.bind(this)},React.createElement("img",{src:this.config.templateThumb})):React.createElement("a",null,React.createElement("img",{src:this.config.templateThumb})),React.createElement("div",{className:"caption"},React.createElement("h3",null,template.link&&this.config.enableThumbnailLink?React.createElement("a",{href:template.link,target:"_blank",rel:"noopener noreferrer",onClick:function(){api.cPp8ndR9.pjVTHZ2z('About','Explore Template','Via title');}.bind(this)},template.name,' ',api.Text.capitalize(api.bt8n357M())):React.createElement("a",null,template.name,' ',api.Text.capitalize(api.bt8n357M())),api.T3uUg6RN()&&!api.kN4bGeVZ()?[' '+'(',React.createElement("a",{className:"main-color",href:"javascript:void(0)",onClick:function(){api.YMa2cyGY('w2b97wVJ','a');}},api.Text.parse('XNqRzhzv')),')']:null),React.createElement("div",{className:"template-update about-template-update"},React.createElement("p",{className:"version sunfw-version-info"},api.Text.parse('version'),':'+' ',template.version,' ',footer.state.showUpdate?update.template.hasUpdate?React.createElement("span",{className:"update-available"},'(',React.createElement("a",{href:"#",className:"sunfw-update-link",id:"sunfw-about-update-template-link","data-target":"template",onClick:this.props.doc.refs.update.update},api.Text.parse('update-available')),')'):React.createElement("span",{className:"version-latest"},'(',api.Text.parse('latest-version'),')'):null),React.createElement("p",{className:"about-released-date"},api.Text.parse('release-date'),':'+' ',this.config.templateRelease),this.config.showCopyright?React.createElement("p",{className:"about-copyright"},api.Text.parse('copyright-by'),':'+' ',React.createElement("a",{href:"https://www.joomlashine.com/",target:"_blank",onClick:function(){api.cPp8ndR9.pjVTHZ2z('About','Explore JSN Brand','Via template');}.bind(this)},"www.JoomlaShine.com")):null))))))))));},componentDidMount:function(){api.__parent__();api.Event.add(this.props.doc,'UpdateDataFetched',this.update);api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',this.update);},componentWillUnmount:function(){api.__parent__();api.Event.remove(this.props.doc,'UpdateDataFetched',this.update);api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',this.update);},update:function(){this.forceUpdate();}});})((rwSVThd6=window.rwSVThd6||{}));