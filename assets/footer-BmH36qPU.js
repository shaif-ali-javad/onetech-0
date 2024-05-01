import{y as me,_ as U,z as de,c as m,A as re,C as pe,D as he,r as b,u as xe,E as ge,j as t,d as ye,F as ve,m as je,i as be,s as Ne,l as Se,B as y,T as te}from"./index-CuWqyEnU.js";const $e=["ownerState"],we=["variants"],_e=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Oe(e){return Object.keys(e).length===0}function Ge(e){return typeof e=="string"&&e.charCodeAt(0)>96}function J(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ke=re(),Ce=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function z({defaultTheme:e,theme:s,themeId:n}){return Oe(s)?e:s[n]||s}function Ee(e){return e?(s,n)=>n[e]:null}function W(e,s){let{ownerState:n}=s,r=U(s,$e);const i=typeof e=="function"?e(m({ownerState:n},r)):e;if(Array.isArray(i))return i.flatMap(l=>W(l,m({ownerState:n},r)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:l=[]}=i;let u=U(i,we);return l.forEach(o=>{let c=!0;typeof o.props=="function"?c=o.props(m({ownerState:n},r,n)):Object.keys(o.props).forEach(p=>{(n==null?void 0:n[p])!==o.props[p]&&r[p]!==o.props[p]&&(c=!1)}),c&&(Array.isArray(u)||(u=[u]),u.push(typeof o.style=="function"?o.style(m({ownerState:n},r,n)):o.style))}),u}return i}function Ae(e={}){const{themeId:s,defaultTheme:n=ke,rootShouldForwardProp:r=J,slotShouldForwardProp:i=J}=e,l=a=>pe(m({},a,{theme:z(m({},a,{defaultTheme:n,themeId:s}))}));return l.__mui_systemSx=!0,(a,u={})=>{me(a,f=>f.filter(d=>!(d!=null&&d.__mui_systemSx)));const{name:o,slot:c,skipVariantsResolver:p,skipSx:G,overridesResolver:N=Ee(Ce(c))}=u,S=U(u,_e),k=p!==void 0?p:c&&c!=="Root"&&c!=="root"||!1,C=G||!1;let E,$=J;c==="Root"||c==="root"?$=r:c?$=i:Ge(a)&&($=void 0);const A=de(a,m({shouldForwardProp:$,label:E},S)),P=f=>typeof f=="function"&&f.__emotion_real!==f||he(f)?d=>W(f,m({},d,{theme:z({theme:d.theme,defaultTheme:n,themeId:s})})):f,q=(f,...d)=>{let T=P(f);const w=d?d.map(P):[];o&&N&&w.push(x=>{const h=z(m({},x,{defaultTheme:n,themeId:s}));if(!h.components||!h.components[o]||!h.components[o].styleOverrides)return null;const _=h.components[o].styleOverrides,j={};return Object.entries(_).forEach(([I,H])=>{j[I]=W(H,m({},x,{theme:h}))}),N(x,j)}),o&&!k&&w.push(x=>{var h;const _=z(m({},x,{defaultTheme:n,themeId:s})),j=_==null||(h=_.components)==null||(h=h[o])==null?void 0:h.variants;return W({variants:j},m({},x,{theme:_}))}),C||w.push(l);const F=w.length-d.length;if(Array.isArray(f)&&F>0){const x=new Array(F).fill("");T=[...f,...x],T.raw=[...f.raw,...x]}const V=A(T,...w);return a.muiName&&(V.muiName=a.muiName),V};return A.withConfig&&(q.withConfig=A.withConfig),q}}const Pe=Ae();function Re(e,s){var n,r;return b.isValidElement(e)&&s.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}const Me=(e,s)=>e.filter(n=>s.includes(n)),M=(e,s,n)=>{const r=e.keys[0];Array.isArray(s)?s.forEach((i,l)=>{n((a,u)=>{l<=e.keys.length-1&&(l===0?Object.assign(a,u):a[e.up(e.keys[l])]=u)},i)}):s&&typeof s=="object"?(Object.keys(s).length>e.keys.length?e.keys:Me(e.keys,Object.keys(s))).forEach(l=>{if(e.keys.indexOf(l)!==-1){const a=s[l];a!==void 0&&n((u,o)=>{r===l?Object.assign(u,o):u[e.up(l)]=o},a)}}):(typeof s=="number"||typeof s=="string")&&n((i,l)=>{Object.assign(i,l)},s)};function v(e){return e?`Level${e}`:""}function D(e){return e.unstable_level>0&&e.container}function le(e){return function(n){return`var(--Grid-${n}Spacing${v(e.unstable_level)})`}}function Q(e){return function(n){return e.unstable_level===0?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${v(e.unstable_level-1)})`}}function X(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${v(e.unstable_level-1)})`}const Te=({theme:e,ownerState:s})=>{const n=le(s),r={};return M(e.breakpoints,s.gridSize,(i,l)=>{let a={};l===!0&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),l==="auto"&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof l=="number"&&(a={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${l} / ${X(s)}${D(s)?` + ${n("column")}`:""})`}),i(r,a)}),r},Be=({theme:e,ownerState:s})=>{const n={};return M(e.breakpoints,s.gridOffset,(r,i)=>{let l={};i==="auto"&&(l={marginLeft:"auto"}),typeof i=="number"&&(l={marginLeft:i===0?"0px":`calc(100% * ${i} / ${X(s)})`}),r(n,l)}),n},De=({theme:e,ownerState:s})=>{if(!s.container)return{};const n=D(s)?{[`--Grid-columns${v(s.unstable_level)}`]:X(s)}:{"--Grid-columns":12};return M(e.breakpoints,s.columns,(r,i)=>{r(n,{[`--Grid-columns${v(s.unstable_level)}`]:i})}),n},qe=({theme:e,ownerState:s})=>{if(!s.container)return{};const n=Q(s),r=D(s)?{[`--Grid-rowSpacing${v(s.unstable_level)}`]:n("row")}:{};return M(e.breakpoints,s.rowSpacing,(i,l)=>{var a;i(r,{[`--Grid-rowSpacing${v(s.unstable_level)}`]:typeof l=="string"?l:(a=e.spacing)==null?void 0:a.call(e,l)})}),r},Fe=({theme:e,ownerState:s})=>{if(!s.container)return{};const n=Q(s),r=D(s)?{[`--Grid-columnSpacing${v(s.unstable_level)}`]:n("column")}:{};return M(e.breakpoints,s.columnSpacing,(i,l)=>{var a;i(r,{[`--Grid-columnSpacing${v(s.unstable_level)}`]:typeof l=="string"?l:(a=e.spacing)==null?void 0:a.call(e,l)})}),r},Ve=({theme:e,ownerState:s})=>{if(!s.container)return{};const n={};return M(e.breakpoints,s.direction,(r,i)=>{r(n,{flexDirection:i})}),n},ze=({ownerState:e})=>{const s=le(e),n=Q(e);return m({minWidth:0,boxSizing:"border-box"},e.container&&m({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${s("row")} / -2) calc(${s("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${s("row")} * -1) 0px 0px calc(${s("column")} * -1)`}),(!e.container||D(e))&&m({padding:`calc(${n("row")} / 2) calc(${n("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${n("row")} 0px 0px ${n("column")}`}))},Le=e=>{const s=[];return Object.entries(e).forEach(([n,r])=>{r!==!1&&r!==void 0&&s.push(`grid-${n}-${String(r)}`)}),s},We=(e,s="xs")=>{function n(r){return r===void 0?!1:typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number"&&r>0}if(n(e))return[`spacing-${s}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const r=[];return Object.entries(e).forEach(([i,l])=>{n(l)&&r.push(`spacing-${i}-${String(l)}`)}),r}return[]},Ue=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([s,n])=>`direction-${s}-${n}`):[`direction-xs-${String(e)}`],Ie=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],He=re(),Ke=Pe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,s)=>s.root});function Je(e){return ve({props:e,name:"MuiGrid",defaultTheme:He})}function Qe(e={}){const{createStyledComponent:s=Ke,useThemeProps:n=Je,componentName:r="MuiGrid"}=e,i=b.createContext(void 0),l=(o,c)=>{const{container:p,direction:G,spacing:N,wrap:S,gridSize:k}=o,C={root:["root",p&&"container",S!=="wrap"&&`wrap-xs-${String(S)}`,...Ue(G),...Le(k),...p?We(N,c.breakpoints.keys[0]):[]]};return je(C,E=>be(r,E),{})},a=s(De,Fe,qe,Te,Ve,ze,Be),u=b.forwardRef(function(c,p){var G,N,S,k,C,E,$,A;const P=xe(),q=n(c),f=ge(q),d=b.useContext(i),{className:T,children:w,columns:F=12,container:V=!1,component:x="div",direction:h="row",wrap:_="wrap",spacing:j=0,rowSpacing:I=j,columnSpacing:H=j,disableEqualOverflow:Y,unstable_level:O=0}=f,ie=U(f,Ie);let B=Y;O&&Y!==void 0&&(B=c.disableEqualOverflow);const Z={},ee={},se={};Object.entries(ie).forEach(([g,R])=>{P.breakpoints.values[g]!==void 0?Z[g]=R:P.breakpoints.values[g.replace("Offset","")]!==void 0?ee[g.replace("Offset","")]=R:se[g]=R});const ae=(G=c.columns)!=null?G:O?void 0:F,ce=(N=c.spacing)!=null?N:O?void 0:j,oe=(S=(k=c.rowSpacing)!=null?k:c.spacing)!=null?S:O?void 0:I,ue=(C=(E=c.columnSpacing)!=null?E:c.spacing)!=null?C:O?void 0:H,ne=m({},f,{level:O,columns:ae,container:V,direction:h,wrap:_,spacing:ce,rowSpacing:oe,columnSpacing:ue,gridSize:Z,gridOffset:ee,disableEqualOverflow:($=(A=B)!=null?A:d)!=null?$:!1,parentDisableEqualOverflow:d}),fe=l(ne,P);let K=t.jsx(a,m({ref:p,as:x,ownerState:ne,className:ye(fe.root,T)},se,{children:b.Children.map(w,g=>{if(b.isValidElement(g)&&Re(g,["Grid"])){var R;return b.cloneElement(g,{unstable_level:(R=g.props.unstable_level)!=null?R:O+1})}return g})}));return B!==void 0&&B!==(d??!1)&&(K=t.jsx(i.Provider,{value:B,children:K})),K});return u.muiName="Grid",u}const L=Qe({createStyledComponent:Ne("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,s)=>s.root}),componentName:"MuiGrid2",useThemeProps:e=>Se({props:e,name:"MuiGrid2"})});class Ye extends b.Component{render(){return t.jsx(y,{className:"style0",sx:{pt:10},children:t.jsxs("footer",{className:"text-lg-left",children:[t.jsxs("section",{className:"justify-content-between p-4 style1",children:[t.jsx(y,{textAlign:"center",className:"text-center me-5",children:t.jsx("span",{children:"Get connected with us on social networks"})}),t.jsx(y,{className:"",children:t.jsxs(y,{className:"row text-center mt-5",children:[t.jsx("p",{href:"",className:"col-2 text-white me-0",children:t.jsx("i",{className:"fab fa-facebook-f"})}),t.jsx("p",{href:"",className:"col-2 text-white me-0",children:t.jsx("i",{className:"fab fa-twitter"})}),t.jsx("p",{href:"",className:"col-2 text-white me-0",children:t.jsx("i",{className:"fab fa-google"})}),t.jsx("p",{href:"",className:"col-2 text-white me-0",children:t.jsx("i",{className:"fab fa-instagram"})}),t.jsx("p",{href:"",className:"col-2 text-white me-0",children:t.jsx("i",{className:"fab fa-linkedin"})}),t.jsx("p",{href:"",className:"col-2 text-white me-0",children:t.jsx("i",{className:"fab fa-github"})})]})})]}),t.jsxs(y,{className:"mx-auto mt-5 container",textAlign:"left",sx:{pt:10,pl:10,pr:10},children:[t.jsx(te,{variant:"h4",gutterBottom:!0,className:"text-uppercase fw-bold",children:"Services"}),t.jsxs(L,{container:!0,className:"row",children:[t.jsxs(L,{xs:4,children:[t.jsx("p",{href:"#!",className:"service-link",children:"Office Automation"}),t.jsx("p",{href:"#!",className:"service-link",children:"Software Solutions"}),t.jsx("p",{href:"#!",className:"service-link",children:"AV Solutions"}),t.jsx("p",{href:"#!",className:"service-link",children:"Structured Cabling"})]}),t.jsxs(L,{xs:4,children:[t.jsx("p",{href:"#!",className:"service-link",children:"ELV Systems"}),t.jsx("p",{href:"#!",className:"service-link",children:"Home Automation"}),t.jsx("p",{href:"#!",className:"service-link",children:"Cloud Services"}),t.jsx("p",{href:"#!",className:"service-link",children:"Maintenance & Support"})]}),t.jsxs(L,{xs:4,children:[t.jsx("p",{href:"#!",className:"service-link",children:"AI Based Solutions"}),t.jsx("p",{href:"#!",className:"service-link",children:"Data Centre Solutions"}),t.jsx("p",{href:"#!",className:"service-link",children:"Microsoft Azure / Office 365"}),t.jsx("p",{href:"#!",className:"service-link",children:"Backup and Disaster Recovery Management"})]})]})]}),t.jsx("section",{className:"",children:t.jsx(y,{className:"container",textAlign:"left",sx:{p:10},children:t.jsxs(y,{className:"mx-auto mb-md-0 mb-4",children:[t.jsx(te,{variant:"h4",gutterBottom:!0,className:"text-uppercase fw-bold mt-4",children:"Contact"}),t.jsxs(y,{className:"row",children:[t.jsxs("p",{className:"d-flex col-12 col-lg-4",children:[t.jsx("i",{className:"fas fa-telephone mr-3 mt-1"}),"+971 4 552 0889"]}),t.jsxs("p",{className:"d-flex col-12 col-lg-4",children:[t.jsx("i",{className:"fas fa-phone mr-3 mt-1"}),"+971 504 153 141"]}),t.jsxs("p",{className:"d-flex col-12 col-lg-4",children:[t.jsx("i",{className:"fas fa-envelope mr-3 mt-1"})," ","sales@onetechuae.com"]}),t.jsxs("p",{className:"d-flex col-12 col-lg-4",children:[t.jsx("i",{className:"fas fa-home mr-3 mt-1"}),"G11, Madina Mall, Muhaisnah 4, Dubai, UAE, P.O Box: 120735"]})]})]})})}),t.jsx(y,{textAlign:"center",className:"text-center p-3 style3",children:"Copyright © 2024 onetech"})]})})}}export{Ye as F,Re as i};
