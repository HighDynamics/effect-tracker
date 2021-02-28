(this["webpackJsonpturn-tracker"]=this["webpackJsonpturn-tracker"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),u=(n(9),n(2)),i=(n(10),n(11),n(0)),o=function(e){var t=e.setTurnNumber,n=e.turnNumber,c=e.reset,r=e.setModal,a=e.modal;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"turnManipulatorButtonsContainer",children:[Object(i.jsx)("button",{className:"basicButton",onClick:function(){return t(n-1)},children:"<<"}),Object(i.jsx)("button",{className:"basicButton",onClick:function(){r("jumpTurn"===a?"off":"jumpTurn")},children:"Jump"}),Object(i.jsx)("button",{className:"basicButton",onClick:function(){return t(n+1)},children:">>"})]}),Object(i.jsx)("div",{className:"resetButtonContainer",children:Object(i.jsx)("button",{className:"resetButton basicButton",onClick:c,children:"Reset"})})]})};n(13);function l(e){return JSON.parse(JSON.stringify(e))}function f(e){switch(!0){case e===1/0:return"permanent";case e>0:return"active";case e<=0:return"expired";default:return""}}function d(e,t){var n=e.turnUsed+e.duration-t;switch(e.durationType){case"rounds":break;case"minutes":n=e.turnUsed+10*e.duration-t;break;case"hours":n=e.turnUsed+600*e.duration-t;break;case"days":n=e.turnUsed+14400*e.duration-t;break;case"permanent":return 1/0}return n}var j=function(e){var t,n=e.effect,r=e.turnNumber,a=e.removeEffect,s=e.resetEffectDuration,o=Object(c.useState)(!1),l=Object(u.a)(o,2),j=l[0],b=l[1],m=n.name,O=n.target,h=n.details,x=n.conditions,N=d(n,r),p=(t=N,[Math.floor(t/10),Math.floor(t%10*6)]),v=function(e){return[Math.floor(e/600),Math.floor(e%600/10)]}(N),g=function(e){return[Math.floor(e/14400),Math.floor(e%14400/600)]}(N);var C=function(e){return e===1/0?"\u221e":e<20?e+" rounds":e>=20&&e<600?p[0]+"m "+p[1]+"s":e>=600&&e<14400?v[0]+"h "+v[1]+"m":e>=14400?g[0]+"d "+g[1]+"h":void 0}(N),k=f(N);return Object(i.jsxs)("button",{className:k+" effectContainer",onClick:function(){return b(!j)},children:[Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Name:"})," ",m]}),Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Remaining Time:"})," ",C]}),j?Object(i.jsxs)(i.Fragment,{children:[""!==O?Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Target:"})," ",O]}):null,""!==h?Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Details:"})," ",h]}):null,""!==x?Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Conditions:"})," ",x]}):null,Object(i.jsx)("div",{className:"break"}),Object(i.jsxs)("div",{className:"endResetEffectButtonContainer",children:[Object(i.jsx)("button",{className:"basicButton endResetEffectButton",onClick:function(){return s(n)},children:"Reset Duration"}),Object(i.jsx)("button",{className:"basicButton endResetEffectButton",onClick:function(){return a(n)},children:"End Effect"})]})]}):null]})},b=function(e){var t=e.turnNumber,n=e.effects,c=e.setEffects,r=function(e){var t=l(n),r=t.findIndex((function(t){return t.name===e.name}));t.splice(r,1),c(t)},a=function(e){var r=l(n),a=r.findIndex((function(t){return t.name===e.name}));r[a].turnUsed=t,c(r)},s=n.map((function(e){return Object(i.jsx)(j,{effect:e,removeEffect:r,turnNumber:t,resetEffectDuration:a},e.name)}));return Object(i.jsx)(i.Fragment,{children:s})},m=(n(14),function(e){var t=e.addEffect,n=e.turnNumber,r=e.setToggle,a=Object(c.useState)(""),s=Object(u.a)(a,2),o=s[0],l=s[1],f=Object(c.useState)(""),d=Object(u.a)(f,2),j=d[0],b=d[1],m=Object(c.useState)(""),O=Object(u.a)(m,2),h=O[0],x=O[1],N=Object(c.useState)(1),p=Object(u.a)(N,2),v=p[0],g=p[1],C=Object(c.useState)(""),k=Object(u.a)(C,2),T=k[0],B=k[1],E=Object(c.useState)(""),S=Object(u.a)(E,2),w=S[0],I=S[1],y={name:o,target:j,details:h,duration:v,durationType:T,conditions:w,turnUsed:n};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),"permanent"===y.durationType&&(y.duration=1/0),t(y),l(""),b(""),x(""),g(1),B("rounds"),I(""),r(!1)},children:Object(i.jsxs)("div",{className:"formContainer",children:[Object(i.jsxs)("fieldset",{className:"formItem",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Name"}),Object(i.jsx)("input",{type:"text",placeholder:"name of effect",value:o,onChange:function(e){return l(e.target.value)},required:!0}),Object(i.jsx)("p",{className:"requiredText",children:"* required"})]}),Object(i.jsxs)("fieldset",{className:"formItem",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Duration"}),Object(i.jsxs)("div",{className:"durationInputContainer",children:[Object(i.jsx)("input",{className:"durationNumberInput",type:"number",placeholder:"4",value:v,onChange:function(e){return g(Number(e.target.value))},required:!0}),Object(i.jsxs)("select",{className:"durationTypeSelector",value:""===T?"rounds":T,onChange:function(e){return B(e.target.value)},children:[Object(i.jsx)("option",{value:"rounds",children:"round(s)"}),Object(i.jsx)("option",{value:"minutes",children:"minute(s)"}),Object(i.jsx)("option",{value:"hours",children:"hour(s)"}),Object(i.jsx)("option",{value:"days",children:"day(s)"}),Object(i.jsx)("option",{value:"permanent",children:"permanent"})]})]})," ",Object(i.jsx)("p",{className:"requiredText",children:"* required"})]}),Object(i.jsxs)("fieldset",{className:"formItem",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Target or Area"}),Object(i.jsx)("input",{type:"text",placeholder:"who or what is affected",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(i.jsxs)("fieldset",{className:"formItem",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Details"}),Object(i.jsx)("textarea",{rows:"4",cols:"30",placeholder:'breif description what effect does. ex.: "+4 armor bonus"',value:h,onChange:function(e){return x(e.target.value)}})]}),Object(i.jsxs)("fieldset",{className:"formItem",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Conditions"}),Object(i.jsx)("textarea",{rows:"4",cols:"30",placeholder:"ex.: must be within 60' of Sabri",value:w,onChange:function(e){return I(e.target.value)}})]}),Object(i.jsx)("div",{className:"break"}),Object(i.jsx)("div",{className:"addEffectButtonContainer",children:Object(i.jsx)("input",{className:"basicButton addEffectButton",type:"submit",value:"add effect"})})]})})})}),O=(n(15),function(e){var t=e.effect,n=e.handleClick,c=f(d(t,e.turnNumber));return Object(i.jsx)("div",{className:"effectButtonContainer",children:Object(i.jsx)("button",{value:t.name,className:c+" effectButton basicButton",onClick:function(e){return n(e)},children:t.name},t.name)})}),h=function(e){var t=e.effects,n=e.setEffectsAndResetRounds,r=e.turnNumber,a=Object(c.useState)(t.filter((function(e){return"permanent"===e.durationType}))),s=Object(u.a)(a,2),o=s[0],f=s[1],d=Object(c.useState)(t.filter((function(e){return"permanent"!==e.durationType}))),j=Object(u.a)(d,2),b=j[0],m=j[1],h=function(e){var t=e.target.value;if(o.some((function(e){return e.name===t}))){var n=o.findIndex((function(e){return e.name===t})),c=o.find((function(e){return e.name===t})),r=l(o),a=l(b);r.splice(n,1),a.push(c),f(r),m(a)}else{var s=b.findIndex((function(e){return e.name===t})),u=b.find((function(e){return e.name===t})),i=l(o),d=l(b);d.splice(s,1),i.push(u),f(i),m(d)}},x=o.map((function(e){return Object(i.jsx)(O,{handleClick:h,turnNumber:r,effect:e},e.name)})),N=b.map((function(e){return Object(i.jsx)(O,{handleClick:h,turnNumber:r,effect:e},e.name)}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"keepEffectsContainer",children:[Object(i.jsx)("h4",{className:"keepEffectsHeader",children:"Current Effects"}),Object(i.jsxs)("div",{className:"keepLoseHeaders",children:[Object(i.jsx)("p",{className:"smallHeaders",children:"keep"}),Object(i.jsx)("p",{className:"smallHeaders",children:"lose"})]}),Object(i.jsxs)("div",{className:"listOfEffectsContainer",children:[Object(i.jsx)("div",{className:"effectsToKeepContainer",children:x}),Object(i.jsx)("div",{className:"effectsToLoseContainer",children:N})]}),Object(i.jsx)("div",{className:"confirmKeepersButtonContainer",children:Object(i.jsx)("button",{className:"basicButton confirmKeepersButton",onClick:function(){return n(o)},children:"confirm"})})]})})},x=function(e){var t=e.setTurnNumber,n=e.turnNumber,r=Object(c.useState)(1),a=Object(u.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)("forward"),f=Object(u.a)(l,2),d=f[0],j=f[1],b=function(e){switch(e){case"forward":t(n+s);break;case"backward":t(n-s);break;case"goTo":t(s);break;default:alert("Something went wrong.")}};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"jumpTurnContentContainer",children:[Object(i.jsx)("div",{className:"radioButtonContainer",onChange:function(e){return j(e.target.value)},children:Object(i.jsxs)("label",{className:"radioButtonLabel",children:[Object(i.jsx)("input",{type:"radio",value:"forward",onChange:function(){return j("forward")},checked:"forward"===d}),"Number of rounds forward"]})}),Object(i.jsx)("div",{className:"radioButtonContainer",children:Object(i.jsxs)("label",{className:"radioButtonLabel",children:[Object(i.jsx)("input",{type:"radio",value:"backward",onChange:function(){return j("backward")},checked:"backward"===d}),"Number of rounds backward"]})}),Object(i.jsx)("div",{className:"radioButtonContainer",children:Object(i.jsxs)("label",{className:"radioButtonLabel",children:[Object(i.jsx)("input",{type:"radio",value:"goTo",onChange:function(){return j("goTo")},checked:"goTo"===d}),"To specified round"]})}),Object(i.jsx)("input",{type:"number",value:s,onChange:function(e){return o(Number(e.target.value))}}),Object(i.jsx)("button",{className:"goButton basicButton",onClick:function(){return b(d)},children:"Go"})]})})},N=function(e){var t=e.setModal,n=e.modal,c=e.setTurnNumber,r=e.turnNumber,a=e.effects,s=e.setEffects,u=function(e){s(e),c(1),t("off")};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"modalBody",children:[Object(i.jsx)("div",{className:"modalContent",children:function(e){switch(e){case"jumpTurn":return Object(i.jsx)(x,{setTurnNumber:c,turnNumber:r});case"keepEffects":return Object(i.jsx)(h,{effects:a,setEffectsAndResetRounds:u,turnNumber:r});default:return""}}(n)}),Object(i.jsx)("div",{className:"closeModalButtonContainer",children:Object(i.jsx)("button",{className:"basicButton closeModalButton",onClick:function(){return t("off")},children:"cancel"})})]})})};var p=function(){var e=Object(c.useState)(Number(localStorage.getItem("turnNumber"))||1),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(JSON.parse(localStorage.getItem("effects"))||[]),s=Object(u.a)(a,2),f=s[0],d=s[1],j=Object(c.useState)(!1),O=Object(u.a)(j,2),h=O[0],x=O[1],p=Object(c.useState)("off"),v=Object(u.a)(p,2),g=v[0],C=v[1];return Object(c.useEffect)((function(){localStorage.setItem("effects",JSON.stringify(f))}),[f]),Object(c.useEffect)((function(){localStorage.setItem("turnNumber",n)}),[n]),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsxs)("div",{className:"topContainer",children:[Object(i.jsx)("h1",{className:"title",children:"Effect Tracker"}),Object(i.jsxs)("h2",{className:"turnCount",children:["Turn ",n]}),Object(i.jsx)(o,{setTurnNumber:r,turnNumber:n,reset:function(){"keepEffects"===g?C("off"):f.length>0?C("keepEffects"):r(1)},setModal:C,modal:g}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"newEffectButtonContainer",children:Object(i.jsx)("button",{className:"newEffectButton basicButton",onClick:function(){return x(!h)},children:"New Effect"})}),h?Object(i.jsx)(m,{addEffect:function(e){var t=l(f);t.push(e),d(t)},turnNumber:n,setToggle:x}):null,"off"!==g?Object(i.jsx)(N,{setModal:C,modal:g,turnNumber:n,setTurnNumber:r,effects:f,setEffects:d}):null]}),Object(i.jsx)(b,{turnNumber:n,effects:f,setEffects:d})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.c16ed4d5.chunk.js.map