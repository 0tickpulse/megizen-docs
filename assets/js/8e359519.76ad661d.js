"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{8978:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=d(3274),i=d(7023);const s={sidebar_custom_props:{description:"Represents any entity that is capable of having a model.."}},o="MegModeledEntityTag",l={id:"objecttype/MegModeledEntityTag",title:"MegModeledEntityTag",description:"<ObjectType",source:"@site/docs/objecttype/MegModeledEntityTag.mdx",sourceDirName:"objecttype",slug:"/objecttype/MegModeledEntityTag",permalink:"/megizen-docs/objecttype/MegModeledEntityTag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_custom_props:{description:"Represents any entity that is capable of having a model.."}},sidebar:"tutorialSidebar",previous:{title:"MegBoneTag",permalink:"/megizen-docs/objecttype/MegBoneTag"}},a={},c=[{value:"Tags",id:"tags",level:2},{value:"Tag: <code>MegModeledEntityTag.entity</code>",id:"tag-megmodeledentitytagentity",level:3},{value:"Tag: <code>MegModeledEntityTag.entity_visible</code>",id:"tag-megmodeledentitytagentity_visible",level:3},{value:"Tag: <code>MegModeledEntityTag.model[(&lt;model&gt;)]</code>",id:"tag-megmodeledentitytagmodelmodel",level:3},{value:"Tag: <code>MegModeledEntityTag.models</code>",id:"tag-megmodeledentitytagmodels",level:3},{value:"Tag: <code>MegModeledEntityTag.should_save</code>",id:"tag-megmodeledentitytagshould_save",level:3},{value:"Mechanisms",id:"mechanisms",level:2},{value:"Mech: <code>MegModeledEntityTag.entity_visible</code>",id:"mech-megmodeledentitytagentity_visible",level:3},{value:"Mech: <code>MegModeledEntityTag.should_save</code>",id:"mech-megmodeledentitytagshould_save",level:3}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",...(0,i.R)(),...e.components},{DetailsTable:d,EntryHeader:s,MetaEntry:o,ObjectType:l}=t;return d||h("DetailsTable",!0),s||h("EntryHeader",!0),o||h("MetaEntry",!0),l||h("ObjectType",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"megmodeledentitytag",children:"MegModeledEntityTag"}),"\n",(0,n.jsx)(l,{name:"MegModeledEntityTag",prefix:"megmodeledentity@",identityFormat:(0,n.jsxs)(n.Fragment,{children:["Identified using the format ",(0,n.jsx)(t.code,{children:"megmodeledentity@<entity>"}),"."]}),description:(0,n.jsx)(n.Fragment,{children:"A modeled entity doesn't necessarily have to have a model, and it can have multiple models."})}),"\n",(0,n.jsx)(t.h2,{id:"tags",children:"Tags"}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"tag-megmodeledentitytagentity",children:["Tag: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.entity"})]})}),(0,n.jsx)(d,{Returns:(0,n.jsx)(t.code,{children:"EntityTag"}),Description:(0,n.jsx)(n.Fragment,{children:"Returns the underlying entity of the modeled entity."})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"tag-megmodeledentitytagentity_visible",children:["Tag: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.entity_visible"})]})}),(0,n.jsx)(d,{Returns:(0,n.jsx)(t.code,{children:"ElementTag(Boolean)"}),Mechanism:(0,n.jsx)(t.a,{href:"#mech-megmodeledentitytagentity_visible",children:(0,n.jsx)(t.code,{children:"entity_visible"})}),Description:(0,n.jsx)(n.Fragment,{children:"Returns whether the base entity of the modeled entity is visible."})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"tag-megmodeledentitytagmodelmodel",children:["Tag: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.model[(<model>)]"})]})}),(0,n.jsx)(d,{Returns:(0,n.jsx)(t.code,{children:"MegActiveModelTag"}),Description:(0,n.jsx)(n.Fragment,{children:"Returns the active model with the specified name on the modeled entity. If no name is specified, returns the first model on the modeled entity."})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"tag-megmodeledentitytagmodels",children:["Tag: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.models"})]})}),(0,n.jsx)(d,{Returns:(0,n.jsx)(t.code,{children:"MapTag(MegActiveModelTag)"}),Description:(0,n.jsx)(n.Fragment,{children:"Returns a map of all models on the modeled entity. The keys are the names of the models, and the values are the active models."})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"tag-megmodeledentitytagshould_save",children:["Tag: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.should_save"})]})}),(0,n.jsx)(d,{Returns:(0,n.jsx)(t.code,{children:"ElementTag(Boolean)"}),Mechanism:(0,n.jsx)(t.a,{href:"#mech-megmodeledentitytagshould_save",children:(0,n.jsx)(t.code,{children:"should_save"})}),Description:(0,n.jsx)(n.Fragment,{children:"Returns whether the modeled entity should be saved on unload."})})]}),"\n",(0,n.jsx)(t.h2,{id:"mechanisms",children:"Mechanisms"}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"mech-megmodeledentitytagentity_visible",children:["Mech: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.entity_visible"})]})}),(0,n.jsx)(d,{Input:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.code,{children:"ElementTag(Booelan)"})}),Description:(0,n.jsx)(n.Fragment,{children:"Sets whether the base entity of the modeled entity is visible."}),Tags:(0,n.jsx)(t.a,{href:"#tag-megbonetagentity_visible",children:(0,n.jsx)(t.code,{children:"MegBoneTag.entity_visible"})})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsxs)(t.h3,{id:"mech-megmodeledentitytagshould_save",children:["Mech: ",(0,n.jsx)(t.code,{children:"MegModeledEntityTag.should_save"})]})}),(0,n.jsx)(d,{Input:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.code,{children:"ElementTag(Boolean)"})}),Description:(0,n.jsx)(n.Fragment,{children:"Sets whether the modeled entity should be saved on unload."}),Tags:(0,n.jsx)(t.a,{href:"#tag-megbonetagshould_save",children:(0,n.jsx)(t.code,{children:"MegBoneTag.should_save"})})})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7023:(e,t,d)=>{d.d(t,{R:()=>o,x:()=>l});var n=d(9474);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);