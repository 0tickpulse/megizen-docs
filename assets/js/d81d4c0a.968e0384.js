"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26],{9693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(6070),s=t(5710);const i={},l="Common Examples",a={id:"guide/Common Examples",title:"Common Examples",description:"Applying a player skin to a model",source:"@site/docs/guide/Common Examples.mdx",sourceDirName:"guide",slug:"/guide/Common Examples",permalink:"/megizen-docs/guide/Common Examples",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/megizen-docs/guide/Getting Started/"},next:{title:"Tags",permalink:"/megizen-docs/Tags"}},r={},d=[{value:"Applying a player skin to a model",id:"applying-a-player-skin-to-a-model",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"common-examples",children:"Common Examples"}),"\n",(0,o.jsx)(n.h2,{id:"applying-a-player-skin-to-a-model",children:"Applying a player skin to a model"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"doppleganger_world:\n    type: world\n    events:\n        after doppleganger spawns:\n        - define entity <context.entity>\n        - define player <[entity].find_players_within[30].first.if_null[<server.online_players.random>].if_null[null]>\n        - if <[player]> == null:\n            - stop\n        - define bones <[entity].modeled_entity.model.bones.values>\n        - adjust <[bones]> skin_texture:<[player].skin_blob>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(758);const s={},i=o.createContext(s);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);