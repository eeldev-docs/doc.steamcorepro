"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7365],{10:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/standalone_settings-f359ebf13e535ea664937e5787fd9c8c.png"},1590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"docfiles/getting_started/testing_steam_functionality","title":"Testing Steam Functionality","description":"Requirements When Testing","source":"@site/docs/docfiles/getting_started/testing_steam_functionality.md","sourceDirName":"docfiles/getting_started","slug":"/docfiles/getting_started/testing_steam_functionality","permalink":"/docfiles/getting_started/testing_steam_functionality","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"steamCoreSidebar","previous":{"title":"Using the Plugin","permalink":"/docfiles/getting_started/using-plugin"},"next":{"title":"Configuring SteamCoreSockets","permalink":"/docfiles/multiplayer/configuring_steamsockets"}}');var s=n(4848),a=n(8453);const r={sidebar_position:5},o="Testing Steam Functionality",l={},c=[{value:"Requirements When Testing",id:"requirements-when-testing",level:2},{value:"Testing as a Packaged Build",id:"testing-as-a-packaged-build",level:2},{value:"Packaging the Project (using the Project Launcher)",id:"packaging-the-project-using-the-project-launcher",level:2},{value:"Use the back button after configuring the profile",id:"use-the-back-button-after-configuring-the-profile",level:2},{value:"Start packaging by clicking on this button",id:"start-packaging-by-clicking-on-this-button",level:2},{value:"Testing Multiplayer",id:"testing-multiplayer",level:2},{value:"Testing in the Editor (UE4)",id:"testing-in-the-editor-ue4",level:2},{value:"Testing in the Editor (UE5)",id:"testing-in-the-editor-ue5",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing-steam-functionality",children:"Testing Steam Functionality"})}),"\n",(0,s.jsx)(t.h2,{id:"requirements-when-testing",children:"Requirements When Testing"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"There are a couple of requirements when testing Steam functionality that may not be so obvious."})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Make sure you\u2019ve configured Steam in your DefaultEngine.ini, you can find the DefaultEngine.ini settings here"}),"\n",(0,s.jsx)(t.li,{children:"You must have the Steam Client running and be Logged In"}),"\n",(0,s.jsx)(t.li,{children:"The client logged into steam must own the game, either add them to the organization for the app or request steam keys from Valve to add the game to their library"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"testing-as-a-packaged-build",children:"Testing as a Packaged Build"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Package your game as a ",(0,s.jsx)(t.strong,{children:"Development Build"})," (not a shipping build) when testing on your own PC."]}),"\n",(0,s.jsxs)(t.li,{children:["If you package your game as a ",(0,s.jsx)(t.strong,{children:"Shipping Build"}),", you must upload it to Steam and launch the game through the Steam Client."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"packaging-the-project-using-the-project-launcher",children:"Packaging the Project (using the Project Launcher)"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Image",src:n(8163).A+"",width:"265",height:"421"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Image",src:n(6943).A+"",width:"1649",height:"1298"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Image",src:n(5476).A+"",width:"1649",height:"989"})}),"\n",(0,s.jsx)(t.h2,{id:"use-the-back-button-after-configuring-the-profile",children:"Use the back button after configuring the profile"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Image",src:n(6605).A+"",width:"1397",height:"814"})}),"\n",(0,s.jsx)(t.h2,{id:"start-packaging-by-clicking-on-this-button",children:"Start packaging by clicking on this button"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Image",src:n(4882).A+"",width:"1152",height:"675"})}),"\n",(0,s.jsx)(t.h2,{id:"testing-multiplayer",children:"Testing Multiplayer"}),"\n",(0,s.jsx)(t.admonition,{title:"NOTE",type:"danger",children:(0,s.jsx)(t.p,{children:"You must use a Packaged game build to test multiplayer, testing in the editor is not going to work"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you want to test Multiplayer using Steam, you must use 2 different computers and 2 different accounts."}),"\n",(0,s.jsx)(t.li,{children:"You can use 1 computer and 1 virutal machine if you don\u2019t own 2 computers."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"testing-in-the-editor-ue4",children:"Testing in the Editor (UE4)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When testing Steam Funcionality in the Editor you must launch a Standalone Game instance or Steam will not Initialize."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://eeldev.com/wp-content/uploads/2021/01/7f0bfa893518c85d953db53d9af0099d-1.png",alt:"Image"})}),"\n",(0,s.jsx)(t.h2,{id:"testing-in-the-editor-ue5",children:"Testing in the Editor (UE5)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When testing Steam Funcionality in the Editor you must launch a Standalone Game instance or Steam will not Initialize."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Image",src:n(10).A+"",width:"584",height:"518"})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4882:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/project_launcher_4-1d2b383a103248eb33b574fb9e619734.png"},5476:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/project_launcher_2-fb2c47ee74dd369bb510fb2c05cc636d.png"},6605:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/project_launcher_3-ec98c674c543310932832e25005c255c.png"},6943:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/project_launcher_1-94d1ea7f2bd54ff90d03f69f12e90a5b.png"},8163:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/project_launcher-c46b1626413e9964819703f5ea324189.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);