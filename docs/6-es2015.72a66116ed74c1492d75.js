(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",(function(){return h}));var i=e("fXoL"),o=e("qXBG"),r=e("tyNb"),s=e("ofXK");let c=(()=>{class t{constructor(){this.close=new i.n}onClose(){this.close.emit()}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-action"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(i.Mb(0,"div",0),i.Ub("click",(function(){return n.onClose()})),i.Lb(),i.Mb(1,"div",1),i.Mb(2,"p"),i.jc(3),i.Lb(),i.Mb(4,"div",2),i.Mb(5,"button",3),i.Ub("click",(function(){return n.onClose()})),i.jc(6,"Close"),i.Lb(),i.Lb(),i.Lb()),2&t&&(i.zb(3),i.kc(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background-color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-action[_ngcontent-%COMP%]{text-align:right}"]}),t})(),a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-loading-spinner"]],decls:1,vars:0,consts:[[1,"lds-dual-ring"]],template:function(t,n){1&t&&i.Kb(0,"span",0)},styles:['.lds-dual-ring[_ngcontent-%COMP%]{display:inline-block;width:80px;height:80px}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border-color:#348f28 transparent;border-style:solid;border-width:6px;-webkit-animation:lds-dual-ring 1.2s linear infinite;animation:lds-dual-ring 1.2s linear infinite}@-webkit-keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),t})();var l=e("3Pt+");const b=["form"];function d(t,n){if(1&t){const t=i.Nb();i.Mb(0,"app-alert",6),i.Ub("close",(function(){return i.ec(t),i.Wb().onHandleError()})),i.Lb()}if(2&t){const t=i.Wb();i.Xb("message",t.error)}}function u(t,n){1&t&&(i.Mb(0,"div",7),i.Kb(1,"app-loading-spinner",8),i.Lb())}function p(t,n){if(1&t){const t=i.Nb();i.Mb(0,"form",9,10),i.Ub("ngSubmit",(function(){return i.ec(t),i.Wb().onSubmit()})),i.Mb(2,"div",11),i.Mb(3,"label",12),i.jc(4,"Email"),i.Lb(),i.Kb(5,"input",13),i.Lb(),i.Mb(6,"div",11),i.Mb(7,"label",14),i.jc(8,"Password"),i.Lb(),i.Kb(9,"input",15),i.Lb(),i.Mb(10,"div",7),i.Mb(11,"button",16),i.jc(12),i.Lb(),i.Lb(),i.Mb(13,"div",17),i.Mb(14,"button",18),i.Ub("click",(function(){return i.ec(t),i.Wb().onSwitch()})),i.jc(15),i.Lb(),i.Lb(),i.Lb()}if(2&t){const t=i.cc(1),n=i.Wb();i.zb(11),i.Xb("disabled",!t.valid),i.zb(1),i.lc(" ",n.isLoginMode?"Login":"Sign Up"," "),i.zb(3),i.lc(" Switch to ",n.isLoginMode?"Sign Up":"Login"," ")}}let g=(()=>{class t{constructor(t,n){this.auth=t,this.router=n,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitch(){this.isLoginMode=!this.isLoginMode}onSubmit(){const t=this.form.value.email,n=this.form.value.password;let e;this.isLoading=!0,e=this.isLoginMode?this.auth.logIn(t,n):this.auth.signUp(t,n),e.subscribe(t=>{this.isLoading=!1,this.router.navigate(["/recipes"]),console.log(t)},t=>{this.error=t,this.isLoading=!1}),this.form.reset()}onHandleError(){this.error=null}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(o.a),i.Jb(r.c))},t.\u0275cmp=i.Db({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){var e;1&t&&i.nc(b,!0),2&t&&i.bc(e=i.Vb())&&(n.form=e.first)},decls:6,vars:3,consts:[[1,"row"],[1,"col-12","col-md-8","col-lg-6","offset-lg-3","offset-md-2"],[3,"message","close",4,"ngIf"],["class","text-center"],["spinner",""],[3,"ngSubmit",4,"ngIf","ngIfElse"],[3,"message","close"],[1,"d-flex","justify-content-center"],[1,"text-center"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","email"],["ngModel","","name","email","required","","email","","type","email","id","email",1,"form-control"],["for","password"],["ngModel","","name","password","minlength","6","required","","type","password","id","password",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"d-flex","justify-content-center","mt-2"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){if(1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.hc(2,d,1,1,"app-alert",2),i.hc(3,u,2,0,"ng-template",3,4,i.ic),i.hc(5,p,16,3,"form",5),i.Lb(),i.Lb()),2&t){const t=i.cc(4);i.zb(2),i.Xb("ngIf",n.error),i.zb(3),i.Xb("ngIf",!n.isLoading)("ngIfElse",t)}},directives:[s.i,c,a,l.u,l.m,l.n,l.a,l.l,l.o,l.s,l.b,l.k],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();var f=e("tk/3"),m=e("PCNd");let h=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[l.j,l.r,f.c,m.a,r.g.forChild([{path:"",component:g}])]]}),t})()}}]);