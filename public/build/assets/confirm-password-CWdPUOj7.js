import{m as d,j as s,L as m}from"./app-4ScKiOJR.js";import{L as l,I as c,a as u}from"./label-D2K74LjP.js";import{B as w}from"./app-logo-icon-DkCtDNYY.js";import{A as f,L as h}from"./auth-layout-C2wnwkSy.js";/* empty css            */import"./utils-GR01VjDF.js";import"./index-DjKqE_td.js";import"./createLucideIcon-CjhkEPNk.js";function N(){const{data:o,setData:e,post:t,processing:a,errors:i,reset:n}=d({password:""}),p=r=>{r.preventDefault(),t(route("password.confirm"),{onFinish:()=>n("password")})};return s.jsxs(f,{title:"Confirm your password",description:"This is a secure area of the application. Please confirm your password before continuing.",children:[s.jsx(m,{title:"Confirm password"}),s.jsx("form",{onSubmit:p,children:s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(l,{htmlFor:"password",children:"Password"}),s.jsx(c,{id:"password",type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",value:o.password,autoFocus:!0,onChange:r=>e("password",r.target.value)}),s.jsx(u,{message:i.password})]}),s.jsx("div",{className:"flex items-center",children:s.jsxs(w,{className:"w-full",disabled:a,children:[a&&s.jsx(h,{className:"h-4 w-4 animate-spin"}),"Confirm password"]})})]})})]})}export{N as default};
