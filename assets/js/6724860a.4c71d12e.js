"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99],{2878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=n(3274),i=n(7023);const d={sidebar_custom_props:{description:"Applies/removes a model to/from an entity."}},o="megmodel",l={id:"command/megmodel",title:"megmodel",description:"Applies/removes a model to/from an entity.",source:"@site/docs/command/megmodel.mdx",sourceDirName:"command",slug:"/command/megmodel",permalink:"/megizen-docs/command/megmodel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_custom_props:{description:"Applies/removes a model to/from an entity."}},sidebar:"tutorialSidebar",previous:{title:"Mechanisms",permalink:"/megizen-docs/Mechanisms"},next:{title:"megstate",permalink:"/megizen-docs/command/megstate"}},r={},a=[{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"megmodel",children:(0,s.jsx)(t.code,{children:"megmodel"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"megmodel [entity:<modeled_entity>] [model:<model>] (remove)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Applies/removes a model to/from an entity."}),"\n",(0,s.jsxs)(t.p,{children:["If specifying a player as the entity: should the player disconnect, the model will not persist and the player will sometimes become invisible. Use the ",(0,s.jsxs)("a",{href:"/megizen-docs/tags/#tag-playertagmeg_make_visible",children:[" ",(0,s.jsx)(t.code,{children:"PlayerTag.meg_make_visible"})]})," mechanism to make sure that the player, upon rejoining, is no longer invisible."]}),"\n",(0,s.jsx)(t.p,{children:"Models do not persist across worlds. Before teleportation, they should be removed and then added back."}),"\n",(0,s.jsxs)(t.p,{children:["If you have come over from Mythic, this is equivalent to the ",(0,s.jsxs)("a",{href:"https://git.lumine.io/mythiccraft/modelengine/-/wikis/Mechanics:-Model",children:[" ",(0,s.jsx)(t.code,{children:"model"})]})," mechanic.\nTo configure other options such as hitbox/invisible/damagetint/etc, adjust the ",(0,s.jsxs)("a",{href:"/megizen-docs/objecttype/MegModeledEntityTag",children:[" ",(0,s.jsx)(t.code,{children:"MegModeledEntityTag"})]})," object instead."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Input"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"entity"}),(0,s.jsx)(t.td,{children:"MegModeledEntityTag"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The entity to apply the model to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"model"}),(0,s.jsx)(t.td,{children:"ElementTag"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The model to apply. Must be a name of a loaded model in ModelEngine."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"remove"}),(0,s.jsx)(t.td,{children:"N/A"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Whether to remove the model instead of applying it. This is an optional argument."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Used to add a model to an entity when it spawns.\non zombie spawns:\n- megmodel entity:<context.entity> model:my_model\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Removes the model from the specified entity.\n- megmodel entity:<context.entity> model:my_model remove\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Object Type: ",(0,s.jsxs)("a",{href:"/megizen-docs/objecttype/MegModeledEntityTag",children:[" ",(0,s.jsx)(t.code,{children:"MegModeledEntityTag"})]})]}),"\n",(0,s.jsxs)(t.li,{children:["Tag: ",(0,s.jsxs)("a",{href:"/megizen-docs/tags/#tag-playertagmeg_forced_invisible",children:[" ",(0,s.jsx)(t.code,{children:"PlayerTag.meg_forced_invisible"})]})]}),"\n",(0,s.jsxs)(t.li,{children:["Mechanism: ",(0,s.jsxs)("a",{href:"/megizen-docs/tags/#tag-playertagmeg_make_visible",children:[" ",(0,s.jsx)(t.code,{children:"PlayerTag.meg_make_visible"})]})]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(9474);const i={},d=s.createContext(i);function o(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);