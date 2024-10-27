import{_ as R,a as v}from"./UserInput.vue_vue_type_style_index_0_lang-ZSf49ICO.js";import{d as V,r as $,a as x,c as h,u as E,o as F,b as N,e as S,f as a,g as i,w as u,h as t,i as p,j as r,_ as B,t as d,k as T,l as C,m,F as A,n as M,p as b,q as z,s as H}from"./index-P6IOASBX.js";const j={class:"dialog-auth__form",autocomplete:"on"},q={class:"dialog-auth__footer"},U={class:"dialog-auth__btns"},W={class:"dialog-auth__switch"},G={class:"--text-small"},J={key:0,class:"dialog__errors"},K={class:"--text-small"},O=V({__name:"DialogAuth",setup(D){const _=$({email:"",password:"",confirm_password:""});let s=x();const c=x(),I=h(()=>b()),f=E(),o=h(()=>I.value.name==="reg"),w=h(()=>o.value?"Зарегистрироваться":"Войти");F(()=>{window.addEventListener("resize",y)}),N(()=>{window.removeEventListener("resize",y)});function y(){c.value=window.innerWidth<=540}function g(l,e){_[e]=l}async function k(){const l=await z(o.value,_);l!=="ok"?s.value=l:(H().changeModalState(),await f.isReady(),f.push("/notes"))}return(l,e)=>{const L=S("RouterLink");return a(),i(R,null,{dialogHeader:u(()=>e[3]||(e[3]=[t("h2",null,"Вход в ваш аккаунт",-1)])),dialogBody:u(()=>[t("form",j,[p(v,{title:"Email",type:"input",inputType:"email",placeholder:"Введите значение",onChangeValueInput:e[0]||(e[0]=n=>g(n,"email"))}),p(v,{title:"Пароль",type:"input",inputType:"password",placeholder:"Введите пароль",length:{min:4,max:12},onChangeValueInput:e[1]||(e[1]=n=>g(n,"password"))}),o.value?(a(),i(v,{key:0,title:"Пароль ещё раз",type:"input",inputType:"password",placeholder:"Введите пароль",length:{min:4,max:12},onChangeValueInput:e[2]||(e[2]=n=>g(n,"confirm_password"))})):r("",!0),c.value?(a(),i(B,{key:1,title:w.value,onClick:k},null,8,["title"])):r("",!0)])]),dialogFooter:u(()=>[t("div",q,[t("div",U,[t("div",W,[t("p",G,[e[4]||(e[4]=t("span",null,"У вас ",-1)),t("span",null,d(o.value?"есть ":"нет "),1),e[5]||(e[5]=t("span",null,"аккаунт",-1)),t("span",null,d(o.value?"":"а"),1),e[6]||(e[6]=t("span",null,"?",-1))]),p(L,{to:o.value?"/":"/reg",class:"--text-small"},{default:u(()=>[T(d(o.value?"Войдите":"Зарегистрируйтесь"),1)]),_:1},8,["to"])]),c.value?r("",!0):(a(),i(B,{key:0,title:w.value,onClick:k},null,8,["title"]))]),C(s)?(a(),m("div",J,[(a(!0),m(A,null,M(C(s),n=>(a(),m("div",{class:"error__message",key:Date.now()},[t("span",K,d(n),1)]))),128))])):r("",!0)])]),_:1})}}}),P={class:"page-home section-wrapper"},Y=V({__name:"HomeView",setup(D){return(_,s)=>(a(),m("div",P,[s[0]||(s[0]=t("div",{class:"page-home__title"},[t("h1",null,"Мои заметки"),t("h3",{class:"slogan"},"Не забывай о важном, храни его в облаке.")],-1)),s[1]||(s[1]=t("div",{class:"page-home__img"},null,-1)),p(O)]))}});export{Y as default};