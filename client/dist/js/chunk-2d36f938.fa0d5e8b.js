(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d36f938"],{5338:function(t,e,s){"use strict";var a=s("f9cc"),o=s.n(a);o.a},"578a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{class:{"login-box":!0,"already-consolidated":"Already consolidated"===t.actionToTake,"check-for-dupes":"Check for duplicate accounts"===t.actionToTake}},[t._m(0),s("div",{staticClass:"login-body"},[t._m(1),s("div",{staticClass:"login-body-padding"},[s("div",{staticClass:"login-strategies"},[s("a",{staticClass:"login-strategy facebook",attrs:{href:"/auth/facebook"}},[s("div",{staticClass:"icon-block"},[s("icon",{attrs:{name:"facebook"}})],1),s("div",{staticClass:"login-strategy-text"},[t._v("Log In With Facebook")])]),s("a",{staticClass:"login-strategy google",attrs:{href:"/auth/google/default"}},[s("div",{staticClass:"icon-block"},[s("icon",{attrs:{name:"google"}})],1),s("div",{staticClass:"login-strategy-text"},[t._v("Log In With Google")])]),s("a",{staticClass:"login-strategy google check-for-dupes",attrs:{href:"/auth/google/check"}},[s("div",{staticClass:"icon-block"},[s("icon",{attrs:{name:"google"}})],1),s("div",{staticClass:"login-strategy-text"},[t._v("Log In With Google")])])]),s("div",{staticClass:"or"},[t._v("or")]),s("form",{staticClass:"default-login-form",on:{submit:function(e){return e.preventDefault(),t.login()}}},[s("div",{staticClass:"login-strategy email"},[s("div",{staticClass:"icon-block"},[s("icon",{attrs:{name:"email"}})],1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-input",attrs:{id:"email",type:"email",placeholder:"yours@example.com"},domProps:{value:t.email},on:{focus:function(e){return t.addHighlight(e)},blur:function(e){return t.removeHighlight(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"login-strategy password"},[s("div",{staticClass:"icon-block"},[s("icon",{attrs:{name:"password"}})],1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-input",attrs:{id:"password",type:"password",placeholder:"your password"},domProps:{value:t.password},on:{focus:function(e){return t.addHighlight(e)},blur:function(e){return t.removeHighlight(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("input",{attrs:{type:"submit",hidden:""}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}],staticClass:"message"},[t._v(t._s(t.message))])])]),s("div",{staticClass:"login-footer",on:{click:function(e){return t.login()}}},[s("span",[t._v("Log In")]),s("icon",{attrs:{name:"caret"}})],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-header"},[a("img",{staticClass:"login-logo",attrs:{src:s("a109")}}),a("div",{staticClass:"logo-text"},[t._v("Recipe Saver")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mode-controller"},[s("div",{staticClass:"mode-controller-btn active"},[t._v("Log In")]),s("div",{staticClass:"mode-controller-btn"},[t._v("Sign Up")])])}],i=(s("96cf"),s("3b8d")),n=s("75fc"),l=(s("ac6a"),s("c5a6")),r=s("3f4a"),c={login:function(t){return Object(r["a"])().post("/login",t)}},g={components:{Icon:l["a"]},data:function(){return{email:"",password:"",message:"",actionToTake:null}},methods:{addHighlight:function(t){t.target.closest(".login-strategy").classList.add("highlight")},removeHighlight:function(t){t.target.closest(".login-strategy").classList.remove("highlight")},pulseGoogle:function(){var t=document.querySelectorAll(".login-strategy.google");Object(n["a"])(t).forEach(function(t){return t.classList.remove("pulse")}),setTimeout(function(){Object(n["a"])(t).forEach(function(t){return t.classList.add("pulse")})},100)},isValid:function(){return this.email.trim().length&&this.password.trim().length},login:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.isValid()){t.next=2;break}return t.abrupt("return",console.log("not valid"));case 2:return this.message="",t.next=5,c.login({email:this.email.toLowerCase().trim(),password:this.password});case 5:e=t.sent,console.log(e.data),this.actionToTake=e.data.actionToTake,"Already consolidated"===this.actionToTake&&(this.message='Please use "Log in with Google" from now on.',this.pulseGoogle()),"Check for duplicate accounts"===this.actionToTake&&(this.message="We've updated the login system since you last visted! Since you're using a Google email, please click \"Log in with Google\" above to proceed.",this.pulseGoogle());case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},u=g,d=(s("5338"),s("2877")),m=Object(d["a"])(u,a,o,!1,null,null,null);e["default"]=m.exports},a109:function(t,e,s){t.exports=s.p+"img/logo-150x150.2ed04cf9.png"},f9cc:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2d36f938.fa0d5e8b.js.map