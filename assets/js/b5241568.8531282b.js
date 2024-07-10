"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[154],{4973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(3274),s=n(7023);const r={sidebar_custom_props:{description:"When a player interacts with ModelEngine model."}},c="",a={id:"events/player interacts with model",title:"player interacts with model",description:"This event is fired when a player interacts with a ModelEngine model.",source:"@site/docs/events/player interacts with model.mdx",sourceDirName:"events",slug:"/events/player interacts with model",permalink:"/megizen-docs/events/player interacts with model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_custom_props:{description:"When a player interacts with ModelEngine model."}},sidebar:"tutorialSidebar",previous:{title:"model registration begins",permalink:"/megizen-docs/events/model registration begins"},next:{title:"removes model",permalink:"/megizen-docs/events/removes model"}},l={},d=[{value:"Switches",id:"switches",level:2},{value:"Contexts",id:"contexts",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:""}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"meg player interacts with <'model'>\n"})}),"\n",(0,i.jsx)(t.p,{children:"This event is fired when a player interacts with a ModelEngine model."}),"\n",(0,i.jsx)(t.h2,{id:"switches",children:"Switches"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Switch"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"action:<action>"})}),(0,i.jsx)(t.td,{children:"Only processes the event if a specific action is performed."})]})})]}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Cancellable: This adds ",(0,i.jsx)(t.code,{children:"<context.cancelled>"})," and ",(0,i.jsx)(t.code,{children:"- determine 'cancelled'"})," or ",(0,i.jsx)(t.code,{children:"'cancelled:false'"}),"."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Location: True."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Player: Always."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["This event may in some cases double-fire, requiring usage of the ",(0,i.jsx)(t.a,{href:"https://meta.denizenscript.com/Docs/Commands/ratelimit",children:"ratelimit"})," command (i.e. ",(0,i.jsx)(t.code,{children:"- ratelimit <player> 1t"}),") to prevent double-firing."]})}),"\n",(0,i.jsx)(t.h2,{id:"contexts",children:"Contexts"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Context"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<context.action>"})}),(0,i.jsx)(t.td,{children:"returns a ElementTag of the interaction cause. Can be: ATTACK, INTERACT or INTERACT_ON."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<context.active_model>"})}),(0,i.jsx)(t.td,{children:"returns a MegActiveModelTag of the model."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<context.click_position>"})}),(0,i.jsx)(t.td,{children:"returns a LocationTag of the click position (as a world-less vector, relative to the model's center), if any."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<context.item>"})}),(0,i.jsx)(t.td,{children:"returns the ItemTag of the item used to interact with the model."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<context.is_secondary>"})}),(0,i.jsx)(t.td,{children:"returns a ElementTag(Boolean) of whether the player was crouching when interacting with the model."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"# Play the 'happy' animation whenever a player pets a capybara :)\non meg player interacts with capybara:\n  - ratelimit <player> 1t\n  - megstate model:<player.target> state:happy\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'# Get angry if a player attacks a capybara.\non meg player interacts with capybara action:ATTACK:\n  - ratelimit <player> 1t\n  - narrate "Hey!! Don\'t hurt the capybara! :("\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},7023:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(9474);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);