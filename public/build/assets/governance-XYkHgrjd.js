import{r as k,f as I,u as _,j as i,B as M,b as X,c as Y,g as W,d as Z,e as O,h as F,i as tt,K as H,S as et}from"./app-4ScKiOJR.js";import{u as at,a as st,C as D}from"./Card-CJkA5PzG.js";import{c as rt,I as ot,g as E,b as nt,C as lt}from"./custom-app-layout-32hzk9W5.js";import{T as it}from"./Title-C-B6OR1s.js";/* empty css            */import"./index-Czkn8xwk.js";import"./createLucideIcon-CjhkEPNk.js";function G(a,s){return t=>{if(typeof t!="string"||t.trim().length===0)throw new Error(s);return`${a}-${t}`}}function R(a,s){let t=a;for(;(t=t.parentElement)&&!t.matches(s););return t}function ct(a,s,t){for(let e=a-1;e>=0;e-=1)if(!s[e].disabled)return e;if(t){for(let e=s.length-1;e>-1;e-=1)if(!s[e].disabled)return e}return a}function dt(a,s,t){for(let e=a+1;e<s.length;e+=1)if(!s[e].disabled)return e;if(t){for(let e=0;e<s.length;e+=1)if(!s[e].disabled)return e}return a}function ut(a,s,t){return R(a,t)===R(s,t)}function pt({parentSelector:a,siblingSelector:s,onKeyDown:t,loop:e=!0,activateOnFocus:d=!1,dir:u="rtl",orientation:c}){return r=>{var h;t==null||t(r);const o=Array.from(((h=R(r.currentTarget,a))==null?void 0:h.querySelectorAll(s))||[]).filter(m=>ut(r.currentTarget,m,a)),f=o.findIndex(m=>r.currentTarget===m),p=dt(f,o,e),b=ct(f,o,e),n=u==="rtl"?b:p,v=u==="rtl"?p:b;switch(r.key){case"ArrowRight":{c==="horizontal"&&(r.stopPropagation(),r.preventDefault(),o[n].focus(),d&&o[n].click());break}case"ArrowLeft":{c==="horizontal"&&(r.stopPropagation(),r.preventDefault(),o[v].focus(),d&&o[v].click());break}case"ArrowUp":{c==="vertical"&&(r.stopPropagation(),r.preventDefault(),o[b].focus(),d&&o[b].click());break}case"ArrowDown":{c==="vertical"&&(r.stopPropagation(),r.preventDefault(),o[p].focus(),d&&o[p].click());break}case"Home":{r.stopPropagation(),r.preventDefault(),!o[0].disabled&&o[0].focus();break}case"End":{r.stopPropagation(),r.preventDefault();const m=o.length-1;!o[m].disabled&&o[m].focus();break}}}}function bt({value:a,defaultValue:s,finalValue:t,onChange:e=()=>{}}){const[d,u]=k.useState(s!==void 0?s:t),c=(r,...o)=>{u(r),e==null||e(r,...o)};return a!==void 0?[a,e,!0]:[d,c,!1]}function ft(a,s){return typeof a=="boolean"?a:s.autoContrast}const[mt,V]=rt("Tabs component was not found in the tree");var T={root:"m_89d60db1","list--default":"m_576c9d4",list:"m_89d33d6d",panel:"m_b0c91715",tab:"m_4ec4dce6",tabSection:"m_fc420b1f","tab--default":"m_539e827b","list--outline":"m_6772fbd5","tab--outline":"m_b59ab47c","tab--pills":"m_c3381914"};const vt={},$=I((a,s)=>{const t=_("TabsList",vt,a),{children:e,className:d,grow:u,justify:c,classNames:r,styles:o,style:f,mod:p,...b}=t,n=V();return i.jsx(M,{...b,...n.getStyles("list",{className:d,style:f,classNames:r,styles:o,props:t,variant:n.variant}),ref:s,role:"tablist",variant:n.variant,mod:[{grow:u,orientation:n.orientation,placement:n.orientation==="vertical"&&n.placement,inverted:n.inverted},p],"aria-orientation":n.orientation,__vars:{"--tabs-justify":c},children:e})});$.classes=T;$.displayName="@mantine/core/TabsList";const gt={},z=I((a,s)=>{const t=_("TabsPanel",gt,a),{children:e,className:d,value:u,classNames:c,styles:r,style:o,mod:f,keepMounted:p,...b}=t,n=V(),v=n.value===u,h=n.keepMounted||p||v?e:null;return i.jsx(M,{...b,...n.getStyles("panel",{className:d,classNames:c,styles:r,style:[o,v?void 0:{display:"none"}],props:t}),ref:s,mod:[{orientation:n.orientation},f],role:"tabpanel",id:n.getPanelId(u),"aria-labelledby":n.getTabId(u),children:h})});z.classes=T;z.displayName="@mantine/core/TabsPanel";const ht={},U=I((a,s)=>{const t=_("TabsTab",ht,a),{className:e,children:d,rightSection:u,leftSection:c,value:r,onClick:o,onKeyDown:f,disabled:p,color:b,style:n,classNames:v,styles:h,vars:m,mod:j,tabIndex:P,...w}=t,C=X(),{dir:S}=at(),l=V(),x=r===l.value,L=A=>{l.onChange(l.allowTabDeactivation&&r===l.value?null:r),o==null||o(A)},y={classNames:v,styles:h,props:t};return i.jsxs(Y,{...w,...l.getStyles("tab",{className:e,style:n,variant:l.variant,...y}),disabled:p,unstyled:l.unstyled,variant:l.variant,mod:[{active:x,disabled:p,orientation:l.orientation,inverted:l.inverted,placement:l.orientation==="vertical"&&l.placement},j],ref:s,role:"tab",id:l.getTabId(r),"aria-selected":x,tabIndex:P!==void 0?P:x||l.value===null?0:-1,"aria-controls":l.getPanelId(r),onClick:L,__vars:{"--tabs-color":b?W(b,C):void 0},onKeyDown:pt({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:l.activateTabWithKeyboard,loop:l.loop,orientation:l.orientation||"horizontal",dir:S,onKeyDown:f}),children:[c&&i.jsx("span",{...l.getStyles("tabSection",y),"data-position":"left",children:c}),d&&i.jsx("span",{...l.getStyles("tabLabel",y),children:d}),u&&i.jsx("span",{...l.getStyles("tabSection",y),"data-position":"right",children:u})]})});U.classes=T;U.displayName="@mantine/core/TabsTab";const K="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",xt={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},yt=O((a,{radius:s,color:t,autoContrast:e})=>({root:{"--tabs-radius":tt(s),"--tabs-color":W(t,a),"--tabs-text-color":ft(e,a)?F({color:t,theme:a,autoContrast:e}):void 0}})),g=I((a,s)=>{const t=_("Tabs",xt,a),{defaultValue:e,value:d,onChange:u,orientation:c,children:r,loop:o,id:f,activateTabWithKeyboard:p,allowTabDeactivation:b,variant:n,color:v,radius:h,inverted:m,placement:j,keepMounted:P,classNames:w,styles:C,unstyled:S,className:l,style:x,vars:L,autoContrast:y,mod:A,...q}=t,N=st(f),[J,Q]=bt({value:d,defaultValue:e,finalValue:null,onChange:u}),B=Z({name:"Tabs",props:t,classes:T,className:l,style:x,classNames:w,styles:C,unstyled:S,vars:L,varsResolver:yt});return i.jsx(mt,{value:{placement:j,value:J,orientation:c,id:N,loop:o,activateTabWithKeyboard:p,getTabId:G(`${N}-tab`,K),getPanelId:G(`${N}-panel`,K),onChange:Q,allowTabDeactivation:b,variant:n,color:v,radius:h,inverted:m,keepMounted:P,unstyled:S,getStyles:B},children:i.jsx(M,{ref:s,id:N,variant:n,mod:[{orientation:c,inverted:c==="horizontal"&&m,placement:c==="vertical"&&j},A],...B("root"),...q,children:r})})});g.classes=T;g.displayName="@mantine/core/Tabs";g.Tab=U;g.Panel=z;g.List=$;function Tt({name:a,title:s,image:t}){return i.jsxs(D,{className:"hover:bg-primary cursor-pointer transition-all",children:[i.jsx(D.Section,{className:"h-[30vh]",children:i.jsx(ot,{className:"loading",src:t,alt:a,fallbackSrc:"/ui/avatar.png",loading:"lazy",onLoad:e=>{e.currentTarget.className="loaded"}})}),i.jsxs(D.Section,{className:"p-4 text-left",children:[i.jsx(it,{order:3,children:a}),i.jsx("span",{className:"text-black/80",children:s})]})]})}function jt(){const{url:a}=H(),s=k.useMemo(()=>{const t=a.includes("#")?a:E[1].path;return nt.filter(e=>e.category.find(d=>t.includes(d)))},[a]);return i.jsx("div",{className:"m-auto grid w-[95%] gap-2 p-4 md:grid-cols-4 lg:grid-cols-5",children:s.map(t=>k.createElement(Tt,{...t,key:t.id}))})}function Ct(){const{url:a}=H(),s=k.useMemo(()=>(console.log("xx: "),a.includes("#")?a:E[1].path),[a]);return i.jsx(lt,{children:i.jsxs(g,{classNames:{tab:"h-[60px] data-active:bg-primary"},defaultValue:s,children:[i.jsx(g.List,{justify:"center",className:"justify-items-center",children:E.map((t,e)=>i.jsx(g.Tab,{color:"primary.2",onClick:()=>et.visit(t.path),value:t.path,children:t.name},e))}),i.jsx(g.Panel,{value:s,children:i.jsx(jt,{})})]})})}export{Ct as default};
