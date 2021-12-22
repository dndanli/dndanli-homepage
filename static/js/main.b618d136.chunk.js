(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{17:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a,i,c,s,o,r=t(5),l=t(0),d=t.n(l),m=t(18),j=t.n(m),b=t(8),p=t(2),h=t(6),x=t(23),u=t(7),g=t(1),f=[{title:Object(g.jsx)(u.b,{}),url:"https://github.com/dndanli"},{title:Object(g.jsx)(u.d,{}),url:"#"},{title:Object(g.jsx)(u.c,{}),url:"https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"}],O=function(e){var n=e.className,t=Object(l.useState)(!1),a=Object(x.a)(t,2),i=a[0],c=a[1];return Object(g.jsx)("nav",{className:n,children:Object(g.jsxs)("div",{className:"inner__container",children:[Object(g.jsxs)("ul",{className:i?"slide__nav":"navbar__nav",children:[Object(g.jsxs)("li",{className:"nav__item",children:[" ",Object(g.jsx)(b.b,{to:"/",children:" Bio "})," "]}),Object(g.jsxs)("li",{className:"nav__item",children:[" ",Object(g.jsx)(b.b,{to:"/projects",children:" Projects "})," "]}),f.map((function(e,n){return Object(g.jsx)("li",{className:"nav__item",children:Object(g.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[" ",e.title," "]})},n)}))]}),Object(g.jsx)("div",{className:"menu__icon",onClick:function(){c(!i)},children:Object(g.jsx)("i",{children:i?Object(g.jsx)(u.e,{}):Object(g.jsx)(u.a,{})})})]})})},v="375px",y="425px",_="768px",k="1024px",w="1440px",N="2560px",L={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(v,")"),mobileL:"(max-width: ".concat(y,")"),tablet:"(max-width: ".concat(_,")"),laptop:"(max-width: ".concat(k,")"),laptopL:"(max-width: ".concat(w,")"),desktop:"(max-width: ".concat(N,")"),desktopL:"(max-width: ".concat(N,")")},S=Object(h.b)(O)(a||(a=Object(r.a)(["\n    \n    display: flex;\n    justify-content: flex-end;\n    min-height: 5vh;\n\n    .menu__icon{\n        color:#cdd6d9;\n        position: absolute;\n        right: 1em;\n        top:1em;\n        font-size: 1.3em;\n        display: none;\n    };\n\n    .navbar__nav{\n        margin:0;\n        padding: 0em;\n        display: flex;\n        font-family: 'Poppins', sans-serif;\n        font-size: 1.5rem;\n        visibility: visible;\n    };\n\n    .navbar__nav li{\n        margin: 1em;\n    }\n\n    @media ","{\n        .menu__icon{\n            display: block;\n        };\n        .navbar__nav{\n            visibility: hidden;\n        }\n    }\n\n    \n    .slide__nav{\n        background-color: #353535;\n        font-family: Montserrat, sans-serif;\n        font-size: 1.1em;\n        padding: 1em;\n        position: absolute;\n        width: 6em;\n        min-height: 12vh;\n        top: 2em;\n        right: 1.6em;\n        border-radius: .5em;\n        transition: 200ms ease;\n        z-index:1\n    }\n    \n    .slide__nav li{\n        margin: .5em;\n    }\n\n    .inner__container a{\n        color:black;\n        text-decoration: none;\n    };\n\n    .inner__container li{\n        list-style-type: none;\n    }\n    .nav__item a{\n        color: rgba(0,0,0,0.8);\n    }\n    .nav__item {    \n        &:hover a{\n            color: #e16259;\n            transition: 0.5s all ease-in-out;\n        }\n    }\n"])),L.mobileL),D=function(e){var n=e.className,t=e.projectURL,a=e.projectName,i=e.projectDesc;return Object(g.jsx)("a",{href:t,style:{textDecoration:"none",color:"black"},children:Object(g.jsx)("div",{className:n,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:a}),Object(g.jsx)("p",{children:i})]})})})},M=Object(h.b)(D)(i||(i=Object(r.a)(["\n  height: 9em;\n  padding: 1em;\n  font-family: Montserrat, sans-serif;\n  color: rgba(0,0,0,0.8);\n\n  &:hover {\n    background-color: #f5eded;\n    transition: 0.5s all ease-in-out;\n  }\n"]))),R=(t(17),function(e){var n=e.className;return Object(g.jsxs)("div",{className:n,children:[Object(g.jsx)("h1",{className:"headerStyle",children:"Projects"}),Object(g.jsxs)("div",{className:"cards",children:[Object(g.jsx)(M,{projectName:"Stock Scraper",projectDesc:"Financial stock data scraper.",projectURL:"https://github.com/dndanli/StockScraper"}),Object(g.jsx)(M,{projectName:"Health Promotion",projectDesc:"Web application to check user's Blood pressure levels and BMI index.",projectURL:"https://github.com/dndanli/HealthPromotion"}),Object(g.jsx)(M,{projectName:"OpenWeatherMap-Java",projectDesc:"Application made for checking the weather at a specified Zip Code",projectURL:"https://github.com/dndanli/openweathermap-java"}),Object(g.jsx)(M,{projectName:"Expenses tracker",projectDesc:"Expenses tracker web-app.",projectURL:"https://github.com/dndanli/Expenses-tracker"}),Object(g.jsx)(M,{projectName:"Cantus-Music",projectDesc:"Mockup audio streaming website (coming soon)",projectURL:"https://github.com/dndanli/Cantus-Music"})]})]})}),z=Object(h.b)(R)(c||(c=Object(r.a)(["\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .headerStyle{\n        color: rgba(0,0,0,0.8);\n        font-family: Roboto, sans-serif;\n        position: absolute;\n        top:2.5em;\n    }\n\n    .cards{\n        margin: 5rem auto;\n        display: grid;\n        grid-template-columns: 50% 50%;\n        grid-gap: 1em;\n        position: absolute;\n        top:6em;\n    }\n    \n"]))),C=function(e){var n=e.className;return Object(g.jsx)("div",{className:n,children:Object(g.jsxs)("div",{className:"homeLightTheme",children:[Object(g.jsx)("h1",{className:"headerStyle",children:"Daniel De Lima"}),Object(g.jsxs)("div",{className:"headerStyle",children:[Object(g.jsx)("h4",{children:"Hey\ud83d\udc4b, I'm Daniel De Lima."}),Object(g.jsx)("h4",{children:"I \u2764\ufe0f solving user-specific problems with code and creating fullstack applications."}),Object(g.jsxs)("h4",{children:["I'm currently seeking a job as a Software Engineer. So if you liked my projects and want to hire me, my contact info is right below and here is my ",Object(g.jsx)(b.b,{to:"/",children:"Resume."})]}),Object(g.jsxs)("h4",{children:["Find me on"," ",Object(g.jsx)("a",{href:"https://github.com/dndanli",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),",",Object(g.jsx)(b.b,{to:"/",style:{padding:"0px 0px 0px 5px"},children:"Twitter"}),", and",Object(g.jsx)("a",{style:{paddingLeft:"5px"},href:"https://www.linkedin.com/in/daniel-de-lima-a07aa8223/",target:"_blank",rel:"noopener noreferrer",children:"Linkedin"})]})]})]})})},E=Object(h.b)(C)(s||(s=Object(r.a)(['\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    font-size: 3rem;\n    font-family: "Montserrat", sans-serif;\n  }\n\n  h4{\n    font-size:1.5rem;\n  }\n\n  .headerStyle {\n    color: rgba(0,0,0,0.8);\n  }\n\n  .headerStyle a {\n    font-family: Roboto, sans-serif;\n    color: rgba(4, 4, 4, 1);\n  }\n\n  .homeLightTheme {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 2em 2em 1em 2em;\n    line-height: 2em;\n    color: black;\n    font-family: Montserrat, sans-serif;\n    position: absolute;\n    top: 5em;\n  }\n']))),P=Object(h.b)((function(e){var n=e.className;return Object(g.jsx)("div",{className:n,id:"cursor",children:void Object(l.useEffect)((function(){var e=document.querySelector("#cursor");document.addEventListener("mousemove",(function(n){e.setAttribute("style","top:"+(n.pageY-15)+"px; left:"+(n.pageX-15)+"px;")}))}),[])})}))(o||(o=Object(r.a)(["\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e16259;\n  border-radius: 50%;\n  position: absolute;\n  pointer-events: none;\n  transition-duration: 200ms;\n  transition-timing-function: all ease-in-out;\n"])));var F,I=function(){return Object(g.jsxs)(b.a,{basename:"/dndanli-homepage",children:[Object(g.jsx)(P,{}),Object(g.jsx)("div",{children:Object(g.jsx)(S,{})}),Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{path:"/",component:E,exact:!0}),Object(g.jsx)(p.a,{path:"/projects",component:z,exact:!0})]})]})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),c(e),s(e)}))},B=Object(h.a)(F||(F=Object(r.a)(["\n  html {\n    height: 100%;\n  }\n\n  body {\n    background-color: rgba(255, 254, 252);\n    margin: 0;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n  }\n"])));j.a.render(Object(g.jsxs)(d.a.StrictMode,{children:[Object(g.jsx)(B,{}),Object(g.jsx)(I,{})]}),document.getElementById("root")),U()}},[[39,1,2]]]);
//# sourceMappingURL=main.b618d136.chunk.js.map