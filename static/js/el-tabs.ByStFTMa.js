import{A as e,ar as a,bn as t,b as l,h as s,ao as o,d as n,j as r,k as i,aj as u,a as d,r as c,B as v,W as b,aq as p,c as f,e as m,n as h,g as y,F as g,_ as C,bo as $,bp as x,C as P,o as w,bq as T,Z as k,E as B,br as N,ak as S,a5 as R,a7 as E,p as A,f as F,bs as _,U as j,bt as q,H as K,b7 as L,a8 as V,bu as z,V as H,bv as M,X as W,a4 as X,$ as O,s as U,v as Y}from"./index.BIi4ItqP.js";import{c as Z}from"./strings.BgEpsYir.js";const D=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},G=Symbol("tabsRootContextKey"),I=l({tabs:{type:s(Array),default:()=>o([])}}),J="ElTabBar",Q=n({name:J});var ee=C(n({...Q,props:I,setup(e,{expose:a}){const t=e,l=r(),s=i(G);s||u(J,"<el-tabs><el-tab-bar /></el-tabs>");const o=d("tabs"),n=c(),C=c(),$=()=>C.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i[`tab-${s.uid}`];if(!u)return!1;if(!s.active)return!0;e=u[`offset${Z(r)}`],a=u[`client${Z(o)}`];const d=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(d.paddingLeft)+Number.parseFloat(d.paddingRight)),e+=Number.parseFloat(d.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${Z(n)}(${e}px)`}})();return v((()=>t.tabs),(async()=>{await b(),$()}),{immediate:!0}),p(n,(()=>$())),a({ref:n,update:$}),(e,a)=>(f(),m("div",{ref_key:"barRef",ref:n,class:h([y(o).e("active-bar"),y(o).is(y(s).props.tabPosition)]),style:g(C.value)},null,6))}}),[["__file","tab-bar.vue"]]);const ae=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),te="ElTabNav",le=n({name:te,props:ae,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=r(),s=i(G);s||u(te,"<el-tabs><tab-nav /></el-tabs>");const o=d("tabs"),n=$(),f=x(),m=c(),h=c(),y=c(),g=c(),C=c(!1),A=c(0),F=c(!1),_=c(!0),j=P((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),q=P((()=>({transform:`translate${"width"===j.value?"X":"Y"}(-${A.value}px)`}))),K=()=>{if(!m.value)return;const e=m.value[`offset${Z(j.value)}`],a=A.value;if(!a)return;const t=a>e?a-e:0;A.value=t},L=()=>{if(!m.value||!h.value)return;const e=h.value[`offset${Z(j.value)}`],a=m.value[`offset${Z(j.value)}`],t=A.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;A.value=l},V=async()=>{const e=h.value;if(!(C.value&&y.value&&m.value&&e))return;await b();const a=y.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=A.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),A.value=Math.min(u,r)},z=()=>{var a;if(!h.value||!m.value)return;e.stretch&&(null==(a=g.value)||a.update());const t=h.value[`offset${Z(j.value)}`],l=m.value[`offset${Z(j.value)}`],s=A.value;l<t?(C.value=C.value||{},C.value.prev=s,C.value.next=s+l<t,t-s<l&&(A.value=t-l)):(C.value=!1,s>0&&(A.value=0))},H=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=E;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),M()},M=()=>{_.value&&(F.value=!0)},W=()=>F.value=!1;return v(n,(e=>{"hidden"===e?_.value=!1:"visible"===e&&setTimeout((()=>_.value=!0),50)})),v(f,(e=>{e?setTimeout((()=>_.value=!0),50):_.value=!1})),p(y,z),w((()=>setTimeout((()=>V()),0))),T((()=>z())),a({scrollToActiveTab:V,removeFocus:W}),v((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=C.value?[k("span",{class:[o.e("nav-prev"),o.is("disabled",!C.value.prev)],onClick:K},[k(B,null,{default:()=>[k(N,null,null)]})]),k("span",{class:[o.e("nav-next"),o.is("disabled",!C.value.next)],onClick:L},[k(B,null,{default:()=>[k(S,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const d=a.uid,c=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${l}`,b=!c&&(a.isClosable||e.editable);a.index=`${l}`;const p=b?k(B,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[k(R,null,null)]}):null,f=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,m=!c&&a.active?0:-1;return k("div",{ref:`tab-${d}`,class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",c),o.is("closable",b),o.is("focus",F.value)],id:`tab-${v}`,key:`tab-${d}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":a.active,tabindex:m,onFocus:()=>M(),onBlur:()=>W(),onClick:e=>{W(),t("tabClick",a,v,e)},onKeydown:e=>{!b||e.code!==E.delete&&e.code!==E.backspace||t("tabRemove",a,e)}},[f,p])}));return k("div",{ref:y,class:[o.e("nav-wrap"),o.is("scrollable",!!C.value),o.is(s.props.tabPosition)]},[a,k("div",{class:o.e("nav-scroll"),ref:m},[k("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:h,style:q.value,role:"tablist",onKeydown:H},[e.type?null:k(ee,{ref:g,tabs:[...e.panes]},null),l])])])}}}),se=l({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),oe=e=>K(e)||L(e),ne=n({name:"ElTabs",props:se,emits:{[j]:e=>oe(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>oe(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>oe(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s;const o=d("tabs"),{children:n,addChild:i,removeChild:u}=D(r(),"ElTabPane"),p=c(),f=c(null!=(s=e.modelValue)?s:"0"),m=async(t,l=!1)=>{var s,o,n;if(f.value!==t&&!q(t))try{!1!==await(null==(s=e.beforeLeave)?void 0:s.call(e,t,f.value))&&(f.value=t,l&&(a(j,t),a("tabChange",t)),null==(n=null==(o=p.value)?void 0:o.removeFocus)||n.call(o))}catch(r){}},h=(e,t,l)=>{e.props.disabled||(m(t,!0),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||q(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return v((()=>e.modelValue),(e=>m(e))),v(f,(async()=>{var e;await b(),null==(e=p.value)||e.scrollToActiveTab()})),A(G,{props:e,currentName:f,registerPane:i,unregisterPane:u}),l({currentName:f}),()=>{const a=t["add-icon"],l=e.editable||e.addable?k("span",{class:o.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===E.enter&&g()}},[a?F(t,"add-icon"):k(B,{class:o.is("icon-plus")},{default:()=>[k(_,null,null)]})]):null,s=k("div",{class:[o.e("header"),o.is(e.tabPosition)]},[l,k(le,{ref:p,currentName:f.value,editable:e.editable,type:e.type,panes:n.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),r=k("div",{class:o.e("content")},[F(t,"default")]);return k("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:"card"===e.type,[o.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[s,r]:[r,s]])}}}),re=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ie=["id","aria-hidden","aria-labelledby"],ue="ElTabPane",de=n({name:ue});var ce=C(n({...de,props:re,setup(e){const a=e,t=r(),l=V(),s=i(G);s||u(ue,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=d("tab-pane"),n=c(),b=P((()=>a.closable||s.props.closable)),p=z((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),g=c(p.value),C=P((()=>{var e;return null!=(e=a.name)?e:n.value})),$=z((()=>!a.lazy||g.value||p.value));v(p,(e=>{e&&(g.value=!0)}));const x=H({uid:t.uid,slots:l,props:a,paneName:C,active:p,index:n,isClosable:b});return w((()=>{s.registerPane(x)})),M((()=>{s.unregisterPane(x.uid)})),(e,a)=>y($)?W((f(),m("div",{key:0,id:`pane-${y(C)}`,class:h(y(o).b()),role:"tabpanel","aria-hidden":!y(p),"aria-labelledby":`tab-${y(C)}`},[F(e.$slots,"default")],10,ie)),[[X,y(p)]]):O("v-if",!0)}}),[["__file","tab-pane.vue"]]);const ve=U(ne,{TabPane:ce}),be=Y(ce);export{be as E,ve as a};