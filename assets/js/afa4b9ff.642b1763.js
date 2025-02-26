"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{9107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=n(6070),i=n(5710);const d={sidebar_custom_props:{description:"Plays a state on a modeled entity."}},r="megstate",l={id:"command/megstate",title:"megstate",description:"Plays a state on a modeled entity.",source:"@site/docs/command/megstate.mdx",sourceDirName:"command",slug:"/command/megstate",permalink:"/megizen-docs/command/megstate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_custom_props:{description:"Plays a state on a modeled entity."}},sidebar:"tutorialSidebar",previous:{title:"megmount",permalink:"/megizen-docs/command/megmount"},next:{title:"MegActiveModelTag",permalink:"/megizen-docs/objecttype/MegActiveModelTag"}},o={},c=[{value:"Arguments",id:"arguments",level:2},{value:"If <code>remove</code> is not specified",id:"if-remove-is-not-specified",level:3},{value:"If <code>remove</code> is specified",id:"if-remove-is-specified",level:3},{value:"Examples",id:"examples",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"megstate",children:(0,s.jsx)(t.code,{children:"megstate"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"megstate [model:<active_model>] [state:<state>] ((speed:<#.#>/{1}) (lerp_in:<duration>/{0}) (lerp_out:<duration>/{0}) (loop:once/loop/hold) (override:true/false) (force)/remove (ignore_lerp) (priority:<#>/{1}))\n"})}),"\n",(0,s.jsxs)(t.p,{children:['Plays a state on a modeled entity.\nThis command is similar to the "state" Mythic Mechanic.\nThe documentation can be found ',(0,s.jsx)("a",{href:"https://git.lumine.io/mythiccraft/model-engine-4/-/wikis/MythicMobs/mechanics/model/State",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If the 'remove' argument is specified, the state will be removed. If the 'state' argument is not specified, all states will be removed."}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Input"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"model"}),(0,s.jsx)(t.td,{children:"MegActiveModelTag"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The entity to play the state on."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"priority"}),(0,s.jsx)(t.td,{children:"ElementTag(Integer)"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Remove the animation of the specified priority, or adds an animation with the specified priority."})]})]})]}),"\n",(0,s.jsxs)(t.h3,{id:"if-remove-is-not-specified",children:["If ",(0,s.jsx)(t.code,{children:"remove"})," is not specified"]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"remove"})," is not specified, the command will play a state on the entity."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Input"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"state"}),(0,s.jsx)(t.td,{children:"ElementTag"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The state to play."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"speed"}),(0,s.jsx)(t.td,{children:"ElementTag"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"The speed multiplier of the animation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lerp_in"}),(0,s.jsx)(t.td,{children:"DurationTag"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"The lerp in duration; transition when the animation starts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lerp_out"}),(0,s.jsx)(t.td,{children:"DurationTag"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"The lerp out duration; transition when the animation ends."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"loop"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"once"}),"/",(0,s.jsx)(t.code,{children:"loop"}),"/",(0,s.jsx)(t.code,{children:"hold"})]}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The loop type of the animation. If not set, will use the default animation loop mode specified on blockbench."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"override"}),(0,s.jsx)(t.td,{children:"ElementTag"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Whether the animation should override the current animation."})]})]})]}),"\n",(0,s.jsxs)(t.h3,{id:"if-remove-is-specified",children:["If ",(0,s.jsx)(t.code,{children:"remove"})," is specified"]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"remove"})," is specified, the command will remove a state from the entity."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Input"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"state"}),(0,s.jsx)(t.td,{children:"ElementTag"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The state to remove. If unspecified, will remove all states."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ignore_lerp"}),(0,s.jsx)(t.td,{children:"ElementTag(Boolean)"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Whether the state should be instantly removed without transition (lerping)."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'# Play the "wave" state on the entity the player\'s looking at, with a 0.5 second lerp in and out.\n- megstate model:<player.target> state:wave lerp_in:0.5s lerp_out:0.5s\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'# Removes the "wave" state from the entity the player\'s looking at.\n- megstate model:<player.target> state:wave remove\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Removes all states from the entity the player's looking at.\n- megstate model:<player.target> remove\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(758);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);