import{m as c,j as e,L as u}from"./app-4ScKiOJR.js";import{L as i,I as d,a as n}from"./label-D2K74LjP.js";import{T as x}from"./text-link-BfAbzyq-.js";import{B as h}from"./app-logo-icon-DkCtDNYY.js";import{A as g,L as w}from"./auth-layout-C2wnwkSy.js";/* empty css            */import"./utils-GR01VjDF.js";import"./index-DjKqE_td.js";import"./createLucideIcon-CjhkEPNk.js";function F(){const{data:r,setData:t,post:l,processing:s,errors:o,reset:m}=c({name:"",email:"",password:"",password_confirmation:""}),p=a=>{a.preventDefault(),l(route("register"),{onFinish:()=>m("password","password_confirmation")})};return e.jsxs(g,{title:"Create an account",description:"Enter your details below to create your account",children:[e.jsx(u,{title:"Register"}),e.jsxs("form",{className:"flex flex-col gap-6",onSubmit:p,children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"name",children:"Name"}),e.jsx(d,{id:"name",type:"text",required:!0,autoFocus:!0,tabIndex:1,autoComplete:"name",value:r.name,onChange:a=>t("name",a.target.value),disabled:s,placeholder:"Full name"}),e.jsx(n,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"email",children:"Email address"}),e.jsx(d,{id:"email",type:"email",required:!0,tabIndex:2,autoComplete:"email",value:r.email,onChange:a=>t("email",a.target.value),disabled:s,placeholder:"email@example.com"}),e.jsx(n,{message:o.email})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"password",children:"Password"}),e.jsx(d,{id:"password",type:"password",required:!0,tabIndex:3,autoComplete:"new-password",value:r.password,onChange:a=>t("password",a.target.value),disabled:s,placeholder:"Password"}),e.jsx(n,{message:o.password})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"password_confirmation",children:"Confirm password"}),e.jsx(d,{id:"password_confirmation",type:"password",required:!0,tabIndex:4,autoComplete:"new-password",value:r.password_confirmation,onChange:a=>t("password_confirmation",a.target.value),disabled:s,placeholder:"Confirm password"}),e.jsx(n,{message:o.password_confirmation})]}),e.jsxs(h,{type:"submit",className:"mt-2 w-full",tabIndex:5,disabled:s,children:[s&&e.jsx(w,{className:"h-4 w-4 animate-spin"}),"Create account"]})]}),e.jsxs("div",{className:"text-muted-foreground text-center text-sm",children:["Already have an account?"," ",e.jsx(x,{href:route("login"),tabIndex:6,children:"Log in"})]})]})]})}export{F as default};
