function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(n,e,t){"use strict";t.r(e),t.d(e,"AuthModule",(function(){return y}));var i,o,r=t("fXoL"),s=t("qXBG"),a=t("tyNb"),c=t("ofXK"),l=((o=function(){function n(){_classCallCheck(this,n),this.close=new r.n}return _createClass(n,[{key:"onClose",value:function(){this.close.emit()}},{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=r.Db({type:o,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-action"],[1,"btn","btn-primary",3,"click"]],template:function(n,e){1&n&&(r.Mb(0,"div",0),r.Ub("click",(function(){return e.onClose()})),r.Lb(),r.Mb(1,"div",1),r.Mb(2,"p"),r.jc(3),r.Lb(),r.Mb(4,"div",2),r.Mb(5,"button",3),r.Ub("click",(function(){return e.onClose()})),r.jc(6,"Close"),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.zb(3),r.kc(e.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background-color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-action[_ngcontent-%COMP%]{text-align:right}"]}),o),b=((i=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=r.Db({type:i,selectors:[["app-loading-spinner"]],decls:1,vars:0,consts:[[1,"lds-dual-ring"]],template:function(n,e){1&n&&r.Kb(0,"span",0)},styles:['.lds-dual-ring[_ngcontent-%COMP%]{display:inline-block;width:80px;height:80px}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border-color:#348f28 transparent;border-style:solid;border-width:6px;-webkit-animation:lds-dual-ring 1.2s linear infinite;animation:lds-dual-ring 1.2s linear infinite}@-webkit-keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),i),u=t("3Pt+"),d=["form"];function f(n,e){if(1&n){var t=r.Nb();r.Mb(0,"app-alert",6),r.Ub("close",(function(){return r.ec(t),r.Wb().onHandleError()})),r.Lb()}if(2&n){var i=r.Wb();r.Xb("message",i.error)}}function p(n,e){1&n&&(r.Mb(0,"div",7),r.Kb(1,"app-loading-spinner",8),r.Lb())}function g(n,e){if(1&n){var t=r.Nb();r.Mb(0,"form",9,10),r.Ub("ngSubmit",(function(){return r.ec(t),r.Wb().onSubmit()})),r.Mb(2,"div",11),r.Mb(3,"label",12),r.jc(4,"Email"),r.Lb(),r.Kb(5,"input",13),r.Lb(),r.Mb(6,"div",11),r.Mb(7,"label",14),r.jc(8,"Password"),r.Lb(),r.Kb(9,"input",15),r.Lb(),r.Mb(10,"div",7),r.Mb(11,"button",16),r.jc(12),r.Lb(),r.Lb(),r.Mb(13,"div",17),r.Mb(14,"button",18),r.Ub("click",(function(){return r.ec(t),r.Wb().onSwitch()})),r.jc(15),r.Lb(),r.Lb(),r.Lb()}if(2&n){var i=r.cc(1),o=r.Wb();r.zb(11),r.Xb("disabled",!i.valid),r.zb(1),r.lc(" ",o.isLoginMode?"Login":"Sign Up"," "),r.zb(3),r.lc(" Switch to ",o.isLoginMode?"Sign Up":"Login"," ")}}var m,h,v=((m=function(){function n(e,t){_classCallCheck(this,n),this.auth=e,this.router=t,this.isLoginMode=!0,this.isLoading=!1,this.error=null}return _createClass(n,[{key:"onSwitch",value:function(){this.isLoginMode=!this.isLoginMode}},{key:"onSubmit",value:function(){var n=this,e=this.form.value.email,t=this.form.value.password;this.isLoading=!0,(this.isLoginMode?this.auth.logIn(e,t):this.auth.signUp(e,t)).subscribe((function(e){n.isLoading=!1,n.router.navigate(["/recipes"]),console.log(e)}),(function(e){n.error=e,n.isLoading=!1})),this.form.reset()}},{key:"onHandleError",value:function(){this.error=null}},{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||m)(r.Jb(s.a),r.Jb(a.c))},m.\u0275cmp=r.Db({type:m,selectors:[["app-auth"]],viewQuery:function(n,e){var t;1&n&&r.nc(d,!0),2&n&&r.bc(t=r.Vb())&&(e.form=t.first)},decls:6,vars:3,consts:[[1,"row"],[1,"col-12","col-md-8","col-lg-6","offset-lg-3","offset-md-2"],[3,"message","close",4,"ngIf"],["class","text-center"],["spinner",""],[3,"ngSubmit",4,"ngIf","ngIfElse"],[3,"message","close"],[1,"d-flex","justify-content-center"],[1,"text-center"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","email"],["ngModel","","name","email","required","","email","","type","email","id","email",1,"form-control"],["for","password"],["ngModel","","name","password","minlength","6","required","","type","password","id","password",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"d-flex","justify-content-center","mt-2"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,e){if(1&n&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.hc(2,f,1,1,"app-alert",2),r.hc(3,p,2,0,"ng-template",3,4,r.ic),r.hc(5,g,16,3,"form",5),r.Lb(),r.Lb()),2&n){var t=r.cc(4);r.zb(2),r.Xb("ngIf",e.error),r.zb(3),r.Xb("ngIf",!e.isLoading)("ngIfElse",t)}},directives:[c.i,l,b,u.u,u.m,u.n,u.a,u.l,u.o,u.s,u.b,u.k],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),m),w=t("tk/3"),k=t("PCNd"),y=((h=function n(){_classCallCheck(this,n)}).\u0275mod=r.Hb({type:h}),h.\u0275inj=r.Gb({factory:function(n){return new(n||h)},imports:[[u.j,u.r,w.c,k.a,a.g.forChild([{path:"",component:v}])]]}),h)}}]);