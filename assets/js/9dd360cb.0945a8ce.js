"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1474],{5011:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"docfiles/multiplayer/voice-chat/voice_chat","title":"Voice Chat","description":"SteamCore Session","source":"@site/docs/docfiles/multiplayer/voice-chat/voice_chat.md","sourceDirName":"docfiles/multiplayer/voice-chat","slug":"/docfiles/multiplayer/voice-chat/voice_chat","permalink":"/docfiles/multiplayer/voice-chat/voice_chat","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"steamCoreSidebar","previous":{"title":"Filtering Servers","permalink":"/docfiles/multiplayer/dedicated-servers/filtering_dedicated_servers"},"next":{"title":"Select Microphone Input","permalink":"/docfiles/multiplayer/voice-chat/select_microphone"}}');var l=i(4848),r=i(8453);const s={sidebar_position:1},a="Voice Chat",o={},c=[{value:"SteamCore Session",id:"steamcore-session",level:2},{value:"DefaultEngine.ini",id:"defaultengineini",level:3},{value:"Complete DefaultEngine.ini Example",id:"complete-defaultengineini-example",level:3},{value:"Blueprint Setup",id:"blueprint-setup",level:2},{value:"Character Blueprint",id:"character-blueprint",level:3},{value:"PlayerController Blueprint",id:"playercontroller-blueprint",level:3},{value:"Testing Voice",id:"testing-voice",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"voice-chat",children:"Voice Chat"})}),"\n",(0,l.jsx)(n.h2,{id:"steamcore-session",children:"SteamCore Session"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Setting up Voice Chat for SteamCore Online Multiplayer Sessions"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"defaultengineini",children:"DefaultEngine.ini"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["First edit your ",(0,l.jsx)(n.strong,{children:"DefaultEngine.ini"})," configuration file and make sure it has these values configured."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"[Voice]\nbEnabled=true\n\n[OnlineSubsystem]\nDefaultPlatformService=SteamCore\nbHasVoiceEnabled=true\n\n[/Script/Engine.GameSession]\nbRequiresPushToTalk=true\n"})}),"\n",(0,l.jsx)(n.h3,{id:"complete-defaultengineini-example",children:"Complete DefaultEngine.ini Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Below is a configuration example that includes all SteamCore settings (including Voice Chat configuration)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[Core.Log]\nLogOnlineVoice=Verbose\nLogSteamCorePro=Verbose\nLogSteamCoreSockets=Verbose\nLogSteamCoreShared=Verbose\n\n[OnlineSubsystemSteamCore]\nSteamDevAppId=480\nSteamAppId=480\nbVACEnabled=True\nbEnabled=True\nbUseSteamNetworking=True\nbAllowP2PPacketRelay=True\nbRelaunchInSteam=False\nP2PConnectionTimeout=90\nGameServerQueryPort=27015\nGameVersion=1.0.0.5\n\n[Voice]\nbEnabled=true\n\n[OnlineSubsystem]\nDefaultPlatformService=SteamCore\nbHasVoiceEnabled=true\n\n[/Script/Engine.GameSession]\nbRequiresPushToTalk=true\n"})}),"\n",(0,l.jsx)(n.h2,{id:"blueprint-setup",children:"Blueprint Setup"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This example is going to utilize the Character and PlayerController blueprints to setup and handle VOIP"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"character-blueprint",children:"Character Blueprint"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Add the nodes as shown below, make sure to check validity of the VOIP component and the PlayerState as these are not always initialized and present at BeginPlay."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Image",src:i(7111).A+"",width:"2905",height:"703"})}),"\n",(0,l.jsx)(n.h3,{id:"playercontroller-blueprint",children:"PlayerController Blueprint"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The PlayerController is going to control the Push to Talk input."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Image",src:i(6740).A+"",width:"1390",height:"897"})}),"\n",(0,l.jsx)(n.h2,{id:"testing-voice",children:"Testing Voice"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docfiles/getting_started/testing_steam_functionality",children:"Testing Steam Functionality"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},6740:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/voip_controller-e40b27fbe44d59fa1299cf3d23055b41.png"},7111:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/voip_character-b201f1cec204836fc7574abe990ac149.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const l={},r=t.createContext(l);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);