define(['react','react-dom','jsn/libs/common/ajax','jsn/libs/common/event','jsn/libs/common/modal','jsn/libs/common/text'],function(React,ReactDOM,Ajax,Event,Modal,Text){function findReactComponent(node){var component;for(var p in node){if(p.startsWith('__reactInternalInstance$')){var internalNode=node[p]._currentElement,componentWrapper=internalNode._owner;if(componentWrapper){component=componentWrapper._instance;}}}if(!component&&node.parentNode){component=findReactComponent(node.parentNode);}return component;};var UserVerification=React.createClass({displayName:'UserVerification',getDefaultProps:function(){return{id:'',accounts:[],forgotUsername:'',forgotPassword:''};},getInitialState:function(){return{account:this.props.accounts&&this.props.accounts.length?'existing':'another',existing:this.props.accounts&&this.props.accounts.length?this.props.accounts[0].value:'',username:'',password:''};},render:function(){return React.createElement('div',{id:this.props.id?this.props.id:Text.toId('user-verification',true),ref:'mountedDOMNode'},this.props.accounts&&this.props.accounts.length?[React.createElement('div',{className:'row'},React.createElement('div',{className:'col-xs-12'},React.createElement('label',{className:'radio-inline'},React.createElement('input',{type:'radio',name:'account',value:'existing',checked:this.state.account=='existing',onClick:this.change}),Text.parse('JSN_EXTFW_USER_VERIFICATION_SELECT_EXISTING_ACCOUNT')),React.createElement('label',{className:'radio-inline'},React.createElement('input',{type:'radio',name:'account',value:'another',checked:this.state.account=='another',onClick:this.change}),Text.parse('JSN_EXTFW_USER_VERIFICATION_USE_ANOTHER_ACCOUNT')))),React.createElement('div',{className:'row'+(this.state.account=='existing'?'':' hide')},React.createElement('div',{className:'col-xs-12'},React.createElement('select',{ref:'existing',name:'existing',className:'form-control',onChange:this.change},this.props.accounts.map(account=>{return React.createElement('option',{value:account.value,selected:this.state.existing==account.value},account.label);}))))]:null,React.createElement('div',{className:'row'+(this.state.account=='another'?'':' hide')},React.createElement('div',{className:'col-xs-12'},React.createElement('p',null,Text.parse('JSN_EXTFW_USER_VERIFICATION_INPUT_CUSTOMER_ACCOUNT')),React.createElement('p',null,Text.parse('JSN_EXTFW_USER_VERIFICATION_ONE_TIME_REQUIREMENT'))),React.createElement('div',{className:'col-xs-6'},React.createElement('div',{className:'form-group'},React.createElement('label',null,Text.parse('JSN_EXTFW_USERNAME'),' '+'(',React.createElement('a',{href:this.props.forgotUsername,target:'_blank'},Text.parse('JSN_EXTFW_USER_VERIFICATION_FORGOT_ACCOUNT')),')'),React.createElement('input',{ref:'username',type:'text',name:'username',value:this.state.username,className:'form-control',onChange:this.change,onKeyUp:this.updateModalState}))),React.createElement('div',{className:'col-xs-6'},React.createElement('div',{className:'form-group'},React.createElement('label',null,Text.parse('JSN_EXTFW_PASSWORD'),' '+'(',React.createElement('a',{href:this.props.forgotPassword,target:'_blank'},Text.parse('JSN_EXTFW_USER_VERIFICATION_FORGOT_ACCOUNT')),')'),React.createElement('input',{ref:'password',type:'password',name:'password',value:this.state.password,className:'form-control',onChange:this.change,onKeyUp:this.updateModalState})))));},componentDidMount:function(){Text.setData(this);setTimeout(this.updateModalState,100);},change:function(event){var state={};state[event.target.name]=event.target.nodeName=='SELECT'?event.target.options[event.target.selectedIndex].value:event.target.value;this.setState(state);this.updateModalState(event);},updateModalState:function(event){var body=this.refs.mountedDOMNode.parentNode;while(body&&(!body.classList||!body.classList.contains('modal-body'))&&body.nodeName!='BODY'){body=body.parentNode;}if(body.nodeName=='BODY'){return;}if(event&&event.target.name=='account'){var modal=findReactComponent(body);if(modal){setTimeout(modal.forceUpdate.bind(modal),1);}}var button=body.nextElementSibling.querySelector('.btn-primary');if(!button){return;}if(this.state.account=='existing'){button.disabled=false;}else{button.disabled=this.state.username==''||this.state.password=='';}if(event&&event.keyCode==13){button.click();}}});var JSNEditionManager=function(params,callback){this.params=params;Text.setData(null,this.params.textMapping||{});this.callback=callback;this.initialize();};JSNEditionManager.prototype={initialize:function(callback){Ajax.request(this.getLink('getInfo'),function(res){if(!res||!res.responseJSON||res.responseJSON.type!='success'){return console.error(res.responseJSON?res.responseJSON.data:res.responseText);}this.data=res.responseJSON.data;if(this.data.token==''){return this.verifyUser();}if(typeof this.callback=='function'){this.callback(this.data);}else{localStorage.setItem(this.params.extension+'_verification',this.data);}if(typeof callback=='function'){callback();}}.bind(this));},getLink:function(action){return this.params.url+'&'+this.params.token+'=1&extension='+this.params.extension+'&action='+action;},verifyUser:function(action){this.verifyUserModal=this.verifyUserModal||Modal.get({id:'jsn-user-verification-modal',type:'html',width:'550px',title:Text.parse('JSN_EXTFW_USER_VERIFICATION_TITLE'),content:React.createElement('div',{className:'verification-content'},React.createElement('div',{className:'alert alert-error hide'}),React.createElement(UserVerification,{id:'jsn-user-verification-form',accounts:this.data.accounts,forgotUsername:this.params.forgotUsername,forgotPassword:this.params.forgotUsername})),buttons:[{text:Text.parse('JSN_EXTFW_USER_VERIFICATION_VERIFY_BUTTON'),className:'btn btn-primary',onClick:function(event){var button=event.target;button.disabled=true;button.origHTML=button.origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-spinner fa-spin"></i>';button.origClass=button.origClass||button.className;button.className='btn btn-default disabled';button.nextElementSibling.disabled=true;var form=this.verifyUserModal.refs.mountedDOMNode.querySelector('.modal-body'),account=form.querySelector('[name="account"]:checked'),existing=form.querySelector('[name="existing"]'),username=form.querySelector('[name="username"]'),password=form.querySelector('[name="password"]'),link,data;if(account&&account.value=='existing'){link=this.getLink('copyToken');data={from:existing.options[existing.selectedIndex].value};}else{link=this.getLink('getToken');data={username:username.value,password:password.value};}var alert=form.querySelector('.alert-error');if(alert&&!alert.classList.contains('hide')){alert.classList.add('hide');this.verifyUserModal.forceUpdate();}Ajax.request(link,function(res){var reset=function(){button.disabled=false;button.innerHTML=button.origHTML;button.className=button.origClass;button.nextElementSibling.disabled=false;};if(!res||!res.responseJSON||res.responseJSON.type!='success'){reset();if(alert){alert.innerHTML=res.responseJSON?res.responseJSON.data:res.responseText;alert.classList.remove('hide');this.verifyUserModal.forceUpdate();}}else{this.initialize(function(){reset();delete this.verifyUserModal;var license=this.parseLicense(),title,content,buttons;if(!license){return Modal.get({id:'invalid-license-data-modal',type:'html',title:null,content:'Invalid license data.',buttons:[{text:Text.parse('JSN_EXTFW_GENERAL_CLOSE'),className:'btn btn-default',onClick:Modal.hide}]});}this.verifyProduct();}.bind(this));}}.bind(this),data);}.bind(this)},{text:Text.parse('JSN_EXTFW_USER_VERIFICATION_CANCEL_BUTTON'),className:'btn btn-default',onClick:Modal.hide}]});},verifyProduct:function(trial){var license=this.parseLicense(),title,content,buttons;if(license.edition.charCodeAt(0)==70){if(license.edition.charCodeAt(0)==114){if(license.edition.charCodeAt(0)==101){if(license.edition.charCodeAt(0)==101){content=React.createElement('div',{className:'verification-content'},React.createElement('p',null,Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_FREE_EDITION')));buttons=[{text:Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_GOT_IT'),className:'btn btn-default',onClick:Modal.hide}];}}}}if(trial){title=Text.parse('JSN_EXTFW_TRIAL_REGISTRATION_DONE_TITLE');content=React.createElement('div',{className:'verification-content'},React.createElement('p',null,Text.parse('JSN_EXTFW_TRIAL_REGISTRATION_DONE_MESSAGE')));buttons=[{text:Text.parse('JSN_EXTFW_TRIAL_REGISTRATION_DONE_BUTTON'),className:'btn btn-default',onClick:Modal.hide}];}Modal.get({id:'jsn-product-verification-modal',type:'html',title:title||Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_TITLE'),width:'550px',content:content||React.createElement('div',{className:'verification-content'},React.createElement('p',null,Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_ALL_DONE')),React.createElement('p',null,Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_INTRODUCTION')),React.createElement('ul',null,React.createElement('li',null,Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_EDITION'),' ',React.createElement('strong',null,Text.parse(this.params.extension.substr(4).toUpperCase()),' '+Text.capitalize(license.edition))),React.createElement('li',null,Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_EXPIRATION'),' ',React.createElement('strong',null,Text.toReadableDate(license.expiration_date)))),React.createElement('p',null,Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_THANK_YOU'))),buttons:buttons||[{text:Text.parse('JSN_EXTFW_PRODUCT_VERIFICATION_LETS_GET_STARTED'),className:'btn btn-default',onClick:Modal.hide}]});},parseLicense:function(){if(typeof this.data.license=='string'){var d=this.data.license.replace('@','=').split('.$.'),r=[],s=[],t=[],u=[];for(var i=1,n=d.length;i<n;i+=2){r.push(d[i]);}for(var i=0,n=r.length;i<n;i++){s=r[i].split('');t=[];for(var _i=1,_n=s.length;_i<_n;_i+=2){t.push(s[_i]);}u.push(Base64.decode(Base64.decode(t.join(''))));}try{return JSON.parse(u.join(''));}catch(e){return null;}}},introducePro:function(title,message){var content=React.createElement('div',{className:'introduction-content'},React.createElement('h4',null,title),React.createElement('p',null,message),React.createElement('p',null,Text.parse('JSN_EXTFW_PRO_INTRODUCTION_MESSAGE')));Modal.get({id:'jsn-pro-introduction-modal',type:'html',title:Text.parse('JSN_EXTFW_PRO_INTRODUCTION_TITLE'),content:content,buttons:[{text:Text.parse('JSN_EXTFW_PRO_INTRODUCTION_BUY_BUTTON'),href:this.getLink('buyPro'),target:'_blank',className:'btn btn-link'},{text:Text.parse('JSN_EXTFW_PRO_INTRODUCTION_TRY_BUTTON'),className:'btn btn-primary',onClick:function(event){var button=event.target;button.disabled=true;button.origHTML=button.origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-spinner fa-spin"></i>';button.origClass=button.origClass||button.className;button.className='btn btn-default disabled';button.previousElementSibling.disabled=true;Ajax.request(this.getLink('tryPro'),function(res){var reset=function(){button.disabled=false;button.innerHTML=button.origHTML;button.className=button.origClass;button.previousElementSibling.disabled=false;};if(!res||!res.responseJSON||res.responseJSON.type!='success'){reset();this.tryProFailed(res.responseJSON?res.responseJSON.data:res.responseText);}else{this.initialize(function(){reset();this.verifyProduct(trial);}.bind(this));}}.bind(this));}.bind(this)}]});},tryProFailed:function(msg){Modal.get({id:'jsn-try-pro-failed-modal',type:'html',title:Text.parse('JSN_EXTFW_TRIAL_REGISTRATION_FAIL_TITLE'),width:'550px',content:Text.parse(msg),buttons:[{text:Text.parse('JSN_EXTFW_TRIAL_REGISTRATION_FAIL_BUTTON'),href:this.getLink('buyPro'),target:'_blank',className:'btn btn-primary'}]});}};return JSNEditionManager;});