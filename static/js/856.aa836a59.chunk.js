"use strict";(self.webpackChunkcars_rental_app=self.webpackChunkcars_rental_app||[]).push([[856],{681:(n,e,r)=>{r.d(e,{Z:()=>G});var t=r(791),o=r(420),i=r(20),l=r(164),a=r(134);const s=r.p+"static/media/defaultCar1.fb9ce7c3b2c20a189c1d.jpeg";const c=function(n){if("undefined"!==typeof n&&null!==n){const e=n.toString();return e.charAt(0)+","+e.slice(1)}return n};var d,p,h,x,g,u,m,f,b,j,v=r(168),y=r(225);const w=y.Z.div(d||(d=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(12px);\n"]))),Z=y.Z.div(p||(p=(0,v.Z)(["\n  border-radius: 24px;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 24px 16px;\n  width: 100%;\n  max-width: 540px;\n  height: 700px;\n\n  background-color: #fcfcfc;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  transition: transform 250ms linear;\n"]))),k=y.Z.div(h||(h=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),z=y.Z.button(x||(x=(0,v.Z)(["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  padding: 0;\n  margin-bottom: 24px;\n  background-color: ",";\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n  box-shadow: ",";\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  &:hover {\n    color: #ffffff;\n    background-color: #403d43;\n  }\n"])),(n=>n.theme.colors.secondary),(n=>n.theme.radius.round),(n=>n.theme.shadows.boxShadowCard)),C=y.Z.div(g||(g=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),S=y.Z.span(u||(u=(0,v.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"])),(n=>n.theme.colors.primary)),F=y.Z.ul(m||(m=(0,v.Z)(["\n  display: flex;\n\n  li {\n    color: ",";\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    position: relative;\n    display: inline-block;\n    margin-right: 12px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:not(:last-child)::after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      right: -6px;\n      transform: translateY(-50%);\n      height: 16px;\n      width: 1px;\n      background-color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.text),(n=>n.theme.colors.after)),P=y.Z.ul(f||(f=(0,v.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n\n  li {\n    color: ",";\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    position: relative;\n    display: inline-block;\n    margin-right: 12px;\n\n    &:last-child {\n      margin-right: 0;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; /* \u0414\u043e\u0434\u0430\u0454 \u0442\u0440\u0438 \u043a\u0440\u0430\u043f\u043e\u0447\u043a\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0456\u0437\u0430\u043d\u043d\u044f \u0442\u0435\u043a\u0441\u0442\u0443 */\n    }\n\n    &:not(:last-child)::after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      right: -6px;\n      transform: translateY(-50%);\n      height: 16px;\n      width: 1px;\n      background-color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.text),(n=>n.theme.colors.after)),E=y.Z.img(b||(b=(0,v.Z)(["\n  border-radius: 20px;\n"]))),A=y.Z.p(j||(j=(0,v.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n"])));var L=r(329);const W=document.querySelector("#modal-root");function Y(n){let{onClick:e,car:r}=n;console.log("C A R ==>",r);const{make:o,model:i,year:d,address:p,rentalPrice:h,img:x,type:g,fuelConsumption:u,engineSize:m,description:f,mileage:b}=r,j=p.split(", "),v=j[1],y=j[2];(0,t.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e]);return(0,l.createPortal)((0,L.jsx)(w,{onClick:n=>{n.currentTarget===n.target&&e()},children:(0,L.jsxs)(Z,{children:[(0,L.jsx)(z,{onClick:e,children:(0,L.jsx)(a.oHP,{})}),(0,L.jsx)(k,{children:(0,L.jsx)(E,{src:x||s,alt:o})}),(0,L.jsxs)(C,{children:[(0,L.jsxs)("p",{children:[o," ",(0,L.jsx)(S,{children:i})]}),(0,L.jsxs)(F,{children:[(0,L.jsx)("li",{children:v}),(0,L.jsx)("li",{children:y}),(0,L.jsxs)("li",{children:["Year: ",d]}),(0,L.jsx)("li",{children:g})]}),(0,L.jsxs)(P,{children:[(0,L.jsxs)("li",{children:["Fuel consumption: ",u]}),(0,L.jsxs)("li",{children:["Engine size: ",m]})]}),(0,L.jsx)(A,{children:f}),(0,L.jsx)("p",{children:"Accessories and functionalities:"}),(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{}),(0,L.jsx)("li",{}),(0,L.jsx)("li",{}),(0,L.jsx)("li",{}),(0,L.jsx)("li",{}),(0,L.jsx)("li",{})]}),(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{children:"Rental Conditions:"}),(0,L.jsx)("li",{children:"Minimum age:"}),(0,L.jsx)("li",{children:"Security deposite required"}),(0,L.jsxs)("li",{children:["Mileage: ",c(b)]}),(0,L.jsxs)("li",{children:["Price: ",h]})]})]})]})}),W)}const H=r.p+"static/media/sprite.8bf9d94f50ccb294bd7d21d7df41ffff.svg";var T,R,q,B,M,$,_;const I=y.Z.button(T||(T=(0,v.Z)(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  display: flex;\n  align-items: center;\n  padding: 0;\n  border: ",";\n  background-color: transparent;\n\n  cursor: pointer;\n"])),(n=>n.top||"calc(50% - 18px / 2)"),(n=>n.right||"14px"),(n=>n.theme.borders.none)),N=y.Z.svg(R||(R=(0,v.Z)(["\n  fill: ",";\n  stroke: ",";\n  width: 18px;\n  height: 18px;\n"])),(n=>n.isFavorite?"#3470FF":"transparent"),(n=>n.theme.colors.primary)),V=y.Z.div(q||(q=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),D=y.Z.span(B||(B=(0,v.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"])),(n=>n.theme.colors.primary)),O=y.Z.ul(M||(M=(0,v.Z)(["\n  display: flex;\n\n  li {\n    color: ",";\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    position: relative;\n    display: inline-block;\n    margin-right: 12px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:not(:last-child)::after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      right: -6px;\n      transform: translateY(-50%);\n      height: 16px;\n      width: 1px;\n      background-color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.text),(n=>n.theme.colors.after)),Q=y.Z.ul($||($=(0,v.Z)(["\n  display: flex;\n  margin-bottom: 28px;\n\n  li {\n    color: ",";\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    position: relative;\n    display: inline-block;\n    margin-right: 12px;\n\n    &:last-child {\n      margin-right: 0;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; /* \u0414\u043e\u0434\u0430\u0454 \u0442\u0440\u0438 \u043a\u0440\u0430\u043f\u043e\u0447\u043a\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0456\u0437\u0430\u043d\u043d\u044f \u0442\u0435\u043a\u0441\u0442\u0443 */\n    }\n\n    &:not(:last-child)::after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      right: -6px;\n      transform: translateY(-50%);\n      height: 16px;\n      width: 1px;\n      background-color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.text),(n=>n.theme.colors.after)),U=y.Z.button(_||(_=(0,v.Z)(["\n  padding: 12px 99px;\n  color: #ffffff;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.43;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(n=>n.theme.fontSizes.s),(n=>n.theme.fontWeights.medium),(n=>n.theme.borders.none),(n=>n.theme.radius.normal),(n=>n.theme.colors.primary),(n=>n.theme.colors.secondary));function G(n){let{car:e}=n;const[r,l]=(0,t.useState)(!1),a=(0,o.I0)(),c=(0,o.v9)(i.eA).some((n=>n.id===e.id)),{make:d,model:p,year:h,address:x,rentalPrice:g,img:u,type:m,rentalCompany:f,functionalities:b}=e,j=x.split(", "),v=j[1],y=j[2],w=()=>{l((n=>!n))};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{onClick:n=>{n.stopPropagation(),a(c?(0,i.vB)(e.id):(0,i.u5)(e))},top:"14px",right:"14px",children:(0,L.jsx)(N,{isFavorite:c,children:(0,L.jsx)("use",{href:H+"#icon-heart"})})}),(0,L.jsx)("img",{src:u||s,alt:d}),(0,L.jsxs)(V,{children:[(0,L.jsxs)("p",{children:[d," ",(0,L.jsx)(D,{children:p})]}),(0,L.jsx)("p",{children:g})]}),(0,L.jsxs)(O,{children:[(0,L.jsx)("li",{children:v}),(0,L.jsx)("li",{children:y}),(0,L.jsx)("li",{children:f})]}),(0,L.jsxs)(Q,{children:[(0,L.jsx)("li",{children:m}),(0,L.jsx)("li",{children:h}),(0,L.jsx)("li",{children:b[0]})]}),(0,L.jsx)(U,{type:"button",onClick:w,children:"Learn more"}),r&&(0,L.jsx)(Y,{onClick:w,car:e})]})}},901:(n,e,r)=>{r.r(e),r.d(e,{default:()=>H});var t,o,i,l,a,s,c,d,p,h,x=r(420),g=r(791),u=r(183),m=r(895),f=r(437),b=r(453),j=r(681),v=r(168),y=r(225);const w=y.Z.div(t||(t=(0,v.Z)(["\n  text-align: center;\n"]))),Z=y.Z.section(o||(o=(0,v.Z)(["\n  margin-top: 35px;\n  margin-bottom: 100px;\n"]))),k=y.Z.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 29px;\n  margin: 0px auto;\n"]))),z=y.Z.li(l||(l=(0,v.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  max-width: 100%;\n  width: 274px;\n  height: 426px;\n\n  img {\n    display: block;\n    height: 268px;\n    width: 100%;\n    border-radius: ",";\n\n    object-fit: cover;\n    object-position: center;\n  }\n\n  p {\n    color: ",";\n    font-weight: 500;\n    line-height: 1.5;\n  }\n"])),(n=>n.theme.radius.normal),(n=>n.theme.colors.black)),C=y.Z.button(a||(a=(0,v.Z)(["\n  border: ",";\n  background-color: transparent;\n  color: ",";\n\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.5;\n  text-decoration-line: underline;\n\n  margin-left: 70px;\n\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n  }\n"])),(n=>n.theme.borders.none),(n=>n.theme.colors.primary),(n=>n.theme.fontSizes.m),(n=>n.theme.fontWeights.medium),(n=>n.theme.colors.secondary)),S=(y.Z.div(s||(s=(0,v.Z)(["\n  display: flex;\n  gap: 18px;\n"]))),y.Z.div(c||(c=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  margin-top: 50px;\n"])))),F=y.Z.input(d||(d=(0,v.Z)(["\n  padding: 0;\n  padding-left: 24px;\n\n  width: 136px;\n  height: 48px;\n\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  border-bottom: none;\n  border-left: none;\n  border-top: none;\n  background-color: ",";\n\n  &::placeholder {\n    font-size: 18px;\n    color: ",";\n    font-weight: ",";\n    line-height: ",";\n  }\n"])),(n=>n.theme.colors.accent),(n=>n.theme.colors.black),(n=>n.theme.fontWeights.medium),(n=>n.theme.lineHeights.body)),P=y.Z.input(p||(p=(0,v.Z)(["\n  padding: 0;\n  padding-left: 24px;\n  width: 136px;\n  height: 48px;\n  border: none;\n  background-color: ",";\n  /* padding: 14px 115px 14px 24px; */\n\n  border-radius: 0px 14px 14px 0px;\n  &::placeholder {\n    font-size: 18px;\n    color: ",";\n    font-weight: ",";\n    line-height: ",";\n  }\n"])),(n=>n.theme.colors.accent),(n=>n.theme.colors.black),(n=>n.theme.fontWeights.medium),(n=>n.theme.lineHeights.body)),E=y.Z.button(h||(h=(0,v.Z)(["\n  padding: 14px 44px;\n  margin-left: 18px;\n  color: #ffffff;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.43;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(n=>n.theme.fontSizes.s),(n=>n.theme.fontWeights.medium),(n=>n.theme.borders.none),(n=>n.theme.radius.normal),(n=>n.theme.colors.primary),(n=>n.theme.colors.secondary)),A={option:(n,e)=>({...n,padding:"8px 0",fontSize:"18px",color:e.isSelected?"#121417":"rgba(18, 20, 23, 0.20)",backgroundColor:"#ffffff",cursor:"pointer"}),singleValue:n=>({...n,color:"#121417"}),menu:n=>({...n,backgroundColor:"#ffffff",padding:"14px 8px 14px 18px",borderRadius:"14px",border:"1px solid rgba(18, 20, 23, 0.05)",boxShadow:"0px 4px 36px 0px, rgba(0, 0, 0, 0.02)"}),indicatorSeparator:n=>({...n,backgroundColor:"transparent"}),dropdownIndicator:n=>({...n,color:"#121417","&:hover":{color:"#121417"}}),container:(n,e)=>({...n,color:"#121417",backgroundColor:"#F7F7FB",borderRadius:"14px",outline:"none"}),menuList:n=>({...n,overflowY:"auto","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)",borderRadius:"10px"}}),placeholder:n=>({...n,color:"#121417",fontSize:"18px",lineHeight:"1.11",margin:"0",padding:"0"})},L={...A,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",width:"224px",height:"48px",fontSize:"18px",lineHeight:"1.11",fontWeight:"500"})};var W=r(329);function Y(){const n=(0,x.I0)(),[e,r]=(0,g.useState)(""),[t,o]=(0,g.useState)(""),i=(0,x.v9)(f.UH),l=(0,x.v9)(f.YE),a=(0,x.v9)(m.TO),s=(0,x.v9)(m.bB),c=(0,x.v9)(m.$Z);(0,g.useEffect)((()=>{n((0,b.p)())}),[n]),(0,g.useEffect)((()=>{n((0,b.x)({selectedBrand:a.value,selectedPrice:s.value,query:c}))}),[a,s,c,n]);const d=l.flatMap((n=>n.make)),p=[{value:"all",label:"All car brands"},...[...new Set(d)].map((n=>({value:n,label:n})))],h=[{value:"all",label:"All car rental prices"},...[...[...new Set(l.map((n=>{let{rentalPrice:e}=n;return e.replace("$","")})))]].sort(((n,e)=>Number(n)-Number(e))).map((n=>({value:"$".concat(n),label:"$".concat(n)})))];return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(S,{children:[(0,W.jsx)(u.ZP,{styles:L,value:a,options:p,onChange:e=>{n((0,m.nQ)(e))},isLoading:!0,placeholder:"Enter the car brand",theme:n=>({...n,colors:{...n.colors,primary50:"#121417",primary:"transparent",neutral20:"transparent",neutral30:"transparent",neutral50:"#121417",neutral80:"#121417"}})}),(0,W.jsx)(u.ZP,{styles:L,value:s,options:h,onChange:e=>{n((0,m.t3)(e))},isLoading:!0,placeholder:"To",theme:n=>({...n,colors:{...n.colors,primary50:"#121417",primary:"transparent",neutral20:"transparent",neutral30:"transparent",neutral50:"#121417",neutral80:"#121417"}})}),(0,W.jsxs)("form",{onSubmit:e=>{console.log("EVENT ===>",e),e.preventDefault();const r=e.target.elements[0].value;n((0,m.pC)(r))},children:[(0,W.jsx)("label",{children:(0,W.jsx)(F,{type:"text",placeholder:"From",name:"mileageFrom",value:e,onChange:n=>{const{value:e}=n.target;r(e)}})}),(0,W.jsx)("label",{htmlFor:"",children:(0,W.jsx)(P,{type:"text",placeholder:"To",name:"mileageTo",value:t,onChange:n=>{const{value:e}=n.target;o(e)}})}),(0,W.jsx)(E,{type:"submit",children:"Search"})]})]}),(0,W.jsxs)(w,{children:[(0,W.jsx)(Z,{children:(0,W.jsx)(k,{children:i.length>0?i.filter((n=>{const e="all"===a.value||n.make===a.value,r="all"===s.value||n.rentalPrice===s.value;return e&&r})).map((n=>(0,W.jsx)(z,{children:(0,W.jsx)(j.Z,{car:n})},n.id))):(0,W.jsx)("p",{children:"Sorry, your query doesn't match the search criteria. Please try again."})})}),(0,W.jsx)(C,{children:"Load more"})]})]})}const H=function(){return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)("main",{children:(0,W.jsx)(Y,{})})})}}}]);
//# sourceMappingURL=856.aa836a59.chunk.js.map