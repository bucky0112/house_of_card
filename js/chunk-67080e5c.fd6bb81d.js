(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67080e5c"],{"206d":function(t,a,s){"use strict";s("4413")},4413:function(t,a,s){},a1d8:function(t,a,s){t.exports=s.p+"img/logo.82b9c7a5.png"},a55b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-container",{staticClass:"auth"},[e("div",{staticClass:"auth__header"},[e("div",{staticClass:"auth__logo"},[e("img",{attrs:{height:"90",src:s("a1d8"),alt:"Vue logo"}})])]),e("div",{staticClass:"auth__body"},[e("b-form",{staticClass:"form-signin auth__form",attrs:{autocomplete:"off"},on:{submit:function(a){return a.preventDefault(),t.signin(a)}}},[e("div",{staticClass:"auth__form_body"},[e("h1",{staticClass:"h3 auth__form_title"},[t._v("使用者登入")]),e("div",[e("b-form-group",{staticClass:"text-uppercase small mb-3",attrs:{label:"Email","label-for":"inputEmail"}},[e("b-form-input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail",name:"email",placeholder:"請輸入 email",required:"",autofocus:""},model:{value:t.user.email,callback:function(a){t.$set(t.user,"email",a)},expression:"user.email"}})],1),e("b-form-group",{staticClass:"text-uppercase small",attrs:{label:"密碼","label-for":"inputPassword"}},[e("b-form-input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",name:"password",placeholder:"請輸入密碼",required:""},model:{value:t.user.password,callback:function(a){t.$set(t.user,"password",a)},expression:"user.password"}})],1)],1)]),e("div",{staticClass:"auth__form_actions"},[e("b-button",{staticClass:"btn-block",attrs:{type:"submit",variant:"info",size:"lg"}},[t._v("登入")]),e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[e("b-button",{staticClass:"btn-block mt-3",attrs:{variant:"dark",size:"lg"}},[t._v("回首頁")])],1)],1)])],1)])],1)},i=[],o=(s("99af"),s("323a")),r={data:function(){return{user:{email:"",password:""}}},methods:{signin:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/auth/login");this.axios.post(a,this.user).then((function(a){var s=a.data.token,e=a.data.expired.expired;document.cookie="token=".concat(s,";expires=").concat(new Date(1e3*e),";"),t.$router.push("/admin/products"),o["a"].fire({title:"登入成功",icon:"success"})})).catch((function(){o["a"].fire({title:"帳號或密碼錯誤",icon:"error"}),t.user.email="",t.user.password=""}))}}},n=r,l=(s("206d"),s("2877")),c=Object(l["a"])(n,e,i,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-67080e5c.fd6bb81d.js.map