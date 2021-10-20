import{s,C as te,j as a,a as t,T as R,d as L,p,g as F,b as _,l as O,c as N,e as ne,f as j,D as $,h as M,B as S,i as oe,A as re,k as ae,I as ie,m as le,n as W,o as ce,q as se,r as J,L as de,t as b,u as C,v as ue,w as k,x as fe,y as ge,z as he,Q as me,E as ye,F as ve,G as z,H as pe,J as be,K as Ce,M as ke,N as h,O as P,P as Be,R as Fe,S as we,U as De,V as Oe}from"./vendor.f665d9ae.js";const Se=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}};Se();const Ae=s(te)(({theme:e})=>({marginTop:e.spacing(1),marginLeft:e.spacing(2),marginRight:e.spacing(2),padding:e.spacing(1),fontFamily:"-apple-system, BlinkMacSystemFont, Roboto, sans-serif"})),xe=s("div")(({theme:e})=>({marginTop:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),fontSize:"16px"})),Ee=s("div")(({theme:e})=>({marginTop:e.spacing(1),display:"flex",flexDirection:"row",justifyContent:"space-between"})),Te=s("button")(()=>({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",background:"none",border:"none",cursor:"pointer",outline:"none"})),Ie=s("button")(()=>({background:"none",border:"none",cursor:"pointer",outline:"none"})),Re=e=>a(Ae,{children:[t(xe,{children:t(R,{fullWidth:!0,variant:"standard",value:e.todo.value,onChange:r=>e.onEdit(e.todo.id,r.target.value),disabled:e.todo.checked||e.todo.removed})}),a(Ee,{children:[a(Te,{onClick:()=>e.onCheck(e.todo.id,e.todo.checked),disabled:e.filter==="removed","aria-label":"check",children:[e.todo.checked?t(L,{style:{color:e.filter!=="removed"?p.A200:F[500]}}):t(_,{style:{color:e.filter!=="removed"?O[500]:F[500]}}),t(N,{style:{userSelect:"none",color:e.todo.checked&&e.filter!=="removed"?p.A200:F[500]},children:"Done"})]}),t(Ie,{onClick:()=>e.onRemove(e.todo.id,e.todo.removed),"aria-label":"trash",children:e.todo.removed?t(ne,{style:{color:O[500]}}):t(j,{style:{color:F[500]}})})]})]}),Le=e=>t($,{fullWidth:!0,open:e.dialogOpen,onClose:e.toggleDialog,transitionDuration:{enter:0},children:t("form",{onSubmit:r=>{r.preventDefault(),e.onSubmit()},children:a("div",{style:{margin:"1em"},children:[t(R,{variant:"standard",style:{width:"100%",fontSize:"16px",fontFamily:"-apple-system, BlinkMacSystemFont, Roboto, sans-serif"},label:"\u30BF\u30B9\u30AF\u3092\u5165\u529B...",onChange:r=>e.onChange(r),value:e.text,autoFocus:!0}),t(M,{children:t(S,{variant:"outlined",color:"primary",onClick:e.onSubmit,"aria-label":"add",children:"\u8FFD\u52A0"})})]})})}),_e=e=>{const r=i=>{switch(i){case"all":return"\u5168\u3066\u306E\u30BF\u30B9\u30AF";case"unchecked":return"\u73FE\u5728\u306E\u30BF\u30B9\u30AF";case"checked":return"\u5B8C\u4E86\u3057\u305F\u30BF\u30B9\u30AF";case"removed":return"\u3054\u307F\u7BB1";default:return"TODO"}};return t(oe,{sx:{flexGrow:1},children:t(re,{position:"static",children:a(ae,{children:[t(ie,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:e.toggleDrawer,children:t(le,{})}),t(N,{children:r(e.filter)})]})})})},Ne="tutorial-todo-pwa",je="0.1.3",$e="https://shoutaTotsuka.github.io/tutorial-todo-pwa",Me={dev:"vite",build:"tsc && vite build",serve:"vite preview"},We={"@emotion/react":"^11.5.0","@emotion/styled":"^11.3.0","@fontsource/roboto":"^4.5.1","@mui/icons-material":"^5.0.4","@mui/material":"^5.0.4","@types/node":"^16.11.1",localforage:"^1.10.0",react:"^17.0.0","react-dom":"^17.0.0","react-qrcode-logo":"^2.5.0"},Je={"@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@vitejs/plugin-react":"^1.0.0",typescript:"^4.3.2",vite:"^2.6.4","vite-plugin-pwa":"^0.11.3"};var ze={name:Ne,version:je,homepage:$e,scripts:Me,dependencies:We,devDependencies:Je};const Pe=s("div")(()=>({width:250})),Ge=s("div")(()=>({height:150,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1em",backgroundColor:W[500],color:"#ffffff",fontFamily:"-apple-system, BlinkMacSystemFont, Roboto, sans-serif"})),Qe=s(ce)(({theme:e})=>({backgroundColor:p[500],width:e.spacing(6),height:e.spacing(6)})),qe=s(_)(()=>({color:O[500]})),Ke=s(L)(()=>({color:p.A200})),Ue=e=>t(se,{variant:"temporary",open:e.drawerOpen,onClose:e.toggleDrawer,children:a(Pe,{role:"presentation",onClick:e.toggleDrawer,children:[a(Ge,{children:[t(Qe,{children:t(J,{})}),a("p",{children:["TODO v",ze.version]})]}),a(de,{children:[a(b,{button:!0,onClick:()=>e.onSort("all"),"aria-label":"all",children:[t(C,{children:t(ue,{})}),t(k,{secondary:"\u3059\u3079\u3066\u306E\u30BF\u30B9\u30AF"})]}),a(b,{button:!0,onClick:()=>e.onSort("unchecked"),"aria-label":"incomplete",children:[t(C,{children:t(qe,{})}),t(k,{secondary:"\u73FE\u5728\u306E\u30BF\u30B9\u30AF"})]}),a(b,{button:!0,onClick:()=>e.onSort("checked"),"aria-label":"complete",children:[t(C,{children:t(Ke,{})}),t(k,{secondary:"\u5B8C\u4E86\u3057\u305F\u30BF\u30B9\u30AF"})]}),a(b,{button:!0,onClick:()=>e.onSort("removed"),"aria-label":"removed",children:[t(C,{children:t(j,{})}),t(k,{secondary:"\u3054\u307F\u7BB1"})]}),t(fe,{}),a(b,{button:!0,onClick:e.onOpen,"aria-label":"share",children:[t(C,{children:t(ge,{})}),t(k,{secondary:"\u3053\u306E\u30A2\u30D7\u30EA\u3092\u5171\u6709"})]})]})]})}),He=s(he)(({theme:e})=>({zIndex:e.zIndex.drawer+1,color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.8)"})),Ve=e=>t(He,{open:e.open,onClick:e.onClose,children:t(me,{value:"https://sprout2000.github.io/todo"})}),Xe=s($)(()=>({fontFamily:"-apple-system, BlinkMacSystemFont, Roboto, sans-serif"})),Ye=e=>a(Xe,{open:e.alertOpen,onClose:e.toggleAlert,children:[t(ye,{children:"\u30A2\u30E9\u30FC\u30C8"}),a(ve,{children:[t(z,{children:"\u672C\u5F53\u306B\u3054\u307F\u7BB1\u3092\u5B8C\u5168\u306B\u7A7A\u306B\u3057\u307E\u3059\u304B\uFF1F"}),t(z,{children:"\u3053\u306E\u64CD\u4F5C\u306F\u53D6\u308A\u6D88\u3057\u3067\u304D\u307E\u305B\u3093\u3002"})]}),a(M,{children:[t(S,{onClick:e.toggleAlert,color:"primary","aria-label":"cancel",children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),t(S,{onClick:()=>{e.toggleAlert(),e.onEmpty()},color:"secondary","aria-label":"ok",autoFocus:!0,children:"OK"})]})]}),G=s(pe)({position:"fixed",right:15,bottom:15}),Ze=e=>{const r=e.todos.filter(i=>i.removed).length!==0;return t(be,{children:e.filter==="removed"?t(G,{"aria-label":"delete-button",color:"secondary",onClick:e.toggleAlert,disabled:!r||e.alertOpen,children:t(Ce,{})}):t(G,{"aria-label":"add-button",color:"secondary",onClick:e.toggleDialog,disabled:e.filter==="checked"||e.dialogOpen,children:t(J,{})})})},et=ke({palette:{primary:{main:W[500]},secondary:{main:p[500]}}}),tt=s("div")({margin:"0 auto",maxWidth:"640px",fontFamily:"-apple-system, BlinkMacSystemFont, Roboto, sans-serif"}),nt=()=>{const[e,r]=h.exports.useState(""),[i,u]=h.exports.useState([]),[o,l]=h.exports.useState("all"),[c,m]=h.exports.useState(!1),[B,d]=h.exports.useState(!1),[y,w]=h.exports.useState(!1),[D,Q]=h.exports.useState(!1),q=n=>n!==null&&typeof n=="object"&&typeof n.id=="number"&&typeof n.value=="string"&&typeof n.checked=="boolean"&&typeof n.removed=="boolean",A=()=>m(!c),x=()=>d(!B),E=()=>Q(!D),T=()=>{w(!y),r("")},K=n=>{r(n.target.value)},U=()=>{if(!e){w(!1);return}const n={value:e,id:new Date().getTime(),checked:!1,removed:!1};u([n,...i]),r(""),w(!1)},H=(n,g)=>{const v=JSON.parse(JSON.stringify(i)).map(f=>(f.id===n&&(f.value=g),f));u(v)},V=(n,g)=>{const v=JSON.parse(JSON.stringify(i)).map(f=>(f.id===n&&(f.checked=!g),f));u(v)},X=(n,g)=>{const v=JSON.parse(JSON.stringify(i)).map(f=>(f.id===n&&(f.removed=!g),f));u(v)},Y=()=>{const n=i.filter(g=>!g.removed);u(n)},Z=n=>{l(n)},ee=i.filter(n=>{switch(o){case"all":return!n.removed;case"checked":return n.checked&&!n.removed;case"unchecked":return!n.checked&&!n.removed;case"removed":return n.removed;default:return n}});return h.exports.useEffect(()=>{P.getItem("todo-20290925").then(n=>{if(!(!n||!Array.isArray(n))){for(const g of n)console.log("check type"),console.log(g),q(g);u(n)}}).catch(n=>console.error(n))},[]),h.exports.useEffect(()=>{P.setItem("todo-20290925",i).catch(n=>console.error(n))},[i]),a(Be,{theme:et,children:[t(Fe,{styles:{html:{height:"100%"},body:{height:"100%",margin:0,padding:0,background:"#3f51b2"}}}),t(_e,{filter:o,toggleDrawer:A}),t(Ue,{drawerOpen:c,toggleDrawer:A,onSort:Z,onOpen:x}),t(Ve,{open:B,onClose:x}),t(Le,{text:e,dialogOpen:y,onChange:K,onSubmit:U,toggleDialog:T}),t(Ye,{alertOpen:D,onEmpty:Y,toggleAlert:E}),a(tt,{children:[ee.map(n=>t(Re,{todo:n,filter:o,onCheck:V,onEdit:H,onRemove:X},n.id)),t(Ze,{todos:i,filter:o,alertOpen:D,dialogOpen:y,toggleAlert:E,toggleDialog:T})]})]})};function ot(e={}){const{immediate:r=!1,onNeedRefresh:i,onOfflineReady:u,onRegistered:o,onRegisterError:l}=e;let c,m;const B=async(d=!0)=>{d&&(c==null||c.addEventListener("controlling",y=>{y.isUpdate&&window.location.reload()})),m&&m.waiting&&await De(m.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){c=new we("./sw.js",{scope:"./"}),c.addEventListener("activated",d=>{d.isUpdate||u==null||u()});{const d=()=>{i==null||i()};c.addEventListener("waiting",d),c.addEventListener("externalwaiting",d)}c.register({immediate:r}).then(d=>{m=d,o==null||o(d)}).catch(d=>{l==null||l(d)})}return B}Oe.render(t(nt,{}),document.getElementById("root"));ot();
