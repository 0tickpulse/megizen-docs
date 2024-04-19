(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[106],{7180:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var s=n(9474),a=n(3274);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var i=n(8923),c=n(3097),l=n(5622);const r={admonition:"admonition_mU13",admonitionHeading:"admonitionHeading_nfbB",admonitionIcon:"admonitionIcon_Kx4D",admonitionContent:"admonitionContent_WVdZ"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(t),r.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:r.admonitionHeading,children:[(0,a.jsx)("span",{className:r.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:r.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:i}=e;return(0,a.jsxs)(d,{type:t,className:i,children:[(0,a.jsx)(u,{title:s,icon:n}),(0,a.jsx)(m,{children:o})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,a.jsx)(h,{...f,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(h,{...g,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,a.jsx)(h,{...N,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function y(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const L={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const B={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:x,tip:v,info:A,warning:function(e){return(0,a.jsx)(h,{...k,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...L,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(x,{title:"secondary",...e}),important:e=>(0,a.jsx)(A,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function w(e){const t=o(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,a.jsx)(n,{...t})}},9563:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Se});var s=n(9474),a=n(1286),o=n(6319),i=n(3274);const c=s.createContext(null);function l(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(c.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(c);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(8923),m=n(5448),h=n(3097),p=n(4421);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,i.jsxs)(p.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=r();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var g=n(5457),v=n(9164),j=n(5622),N=n(6476),A=n(1931);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=C[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:n,onClick:s,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,v.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,N.g1)(a),{latestDocSuggestion:c,latestVersionSuggestion:l}=(0,v.HW)(a),r=c??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(k,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(y,{versionLabel:l.label,to:r.path,onClick:()=>o(l.name)})})]})}function B(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,i.jsx)(L,{className:t,versionMetadata:n}):null}function _(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,i.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const w={tag:"tag_WRgp",tagRegular:"tagRegular_ZULQ",tagWithCount:"tagWithCount_MoBv"};function T(e){let{permalink:t,label:n,count:s}=e;return(0,i.jsxs)(p.A,{href:t,className:(0,u.A)(w.tag,s?w.tagWithCount:w.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const H={tags:"tags_w_aH",tag:"tag_nqW1"};function E(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(H.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:H.tag,children:(0,i.jsx)(T,{label:t,permalink:n})},n)}))})]})}const M={iconEdit:"iconEdit_HeJ2"};function I(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function S(e){let{editUrl:t}=e;return(0,i.jsxs)(p.A,{to:t,className:j.G.common.editThisPage,children:[(0,i.jsx)(I,{}),(0,i.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function U(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,g.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,g.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function R(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=U({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function V(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function z(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,i.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(R,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(V,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const O={lastUpdated:"lastUpdated_TToV"};function W(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(S,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",O.lastUpdated),children:(s||a)&&(0,i.jsx)(z,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function P(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,c=!!(t||n||s);return o||c?(0,i.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(E,{tags:a})})}),c&&(0,i.jsx)(W,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var G=n(3781),D=n(4557);function $(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function Z(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function K(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,D.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Q(e){const t=(0,s.useRef)(void 0),n=K();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),l=Z(c,{anchorTopOffset:n.current}),r=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function Y(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(p.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(Y,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const J=s.memo(Y);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:l,...r}=e;const d=(0,D.p)(),u=c??d.tableOfContents.minHeadingLevel,m=l??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>F({toc:$(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Q((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)(J,{toc:h,className:n,linkClassName:a,...r})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TVZ5",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_s5Od"};function te(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_Ezc9",tocCollapsibleContent:"tocCollapsibleContent_c3t1",tocCollapsibleExpanded:"tocCollapsibleExpanded_phsm"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:c}=(0,G.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,i.jsx)(te,{collapsed:o,onClick:c}),(0,i.jsx)(G.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(X,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_v9Oz"};function oe(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,ae.tocMobile)})}const ie={tableOfContents:"tableOfContents_Sam6",docItemContainer:"docItemContainer__hb2"},ce="table-of-contents__link toc-highlight",le="table-of-contents__link--active";function re(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(ie.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(X,{...n,linkClassName:ce,linkActiveClassName:le})})}function de(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(re,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var ue=n(7820),me=n(7023),he=n(8162);function pe(e){let{children:t}=e;return(0,i.jsx)(me.x,{components:he.A,children:t})}function fe(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ue.A,{as:"h1",children:n})}),(0,i.jsx)(pe,{children:t})]})}var xe=n(2366),be=n(2724),ge=n(4322);function ve(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const je={breadcrumbHomeIcon:"breadcrumbHomeIcon_lopY"};function Ne(){const e=(0,ge.A)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(ve,{className:je.breadcrumbHomeIcon})})})}const Ae={breadcrumbsContainer:"breadcrumbsContainer_wW1V"};function Ce(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function ke(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ye(){const e=(0,xe.OF)(),t=(0,be.Dt)();return e?(0,i.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Ae.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(Ne,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(ke,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(Ce,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var Le=n(8427);function Be(){return(0,i.jsx)(h.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function _e(){return(0,i.jsx)(h.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function we(){return(0,i.jsx)(Le.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var Te=n(7180);function He(e){let{className:t}=e;return(0,i.jsx)(Te.A,{type:"caution",title:(0,i.jsx)(Be,{}),className:(0,u.A)(t,j.G.common.unlistedBanner),children:(0,i.jsx)(_e,{})})}function Ee(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(we,{}),(0,i.jsx)(He,{...e})]})}const Me={docItemContainer:"docItemContainer_TK8q",docItemCol:"docItemCol_O2tO"};function Ie(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(de,{})}}(),{metadata:{unlisted:s}}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Me.docItemCol),children:[s&&(0,i.jsx)(Ee,{}),(0,i.jsx)(B,{}),(0,i.jsxs)("div",{className:Me.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(ye,{}),(0,i.jsx)(_,{}),n.mobile,(0,i.jsx)(fe,{children:t}),(0,i.jsx)(P,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Se(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(l,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(Ie,{children:(0,i.jsx)(n,{})})]})})}},7920:(e,t,n)=>{"use strict";n.d(t,{A:()=>ie});var s=n(9474),a=n(8427),o=n(3420),i=n(8923),c=n(6110),l=n(4557);function r(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,c.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(5622),u=n(4809),m=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(f);function g(e,t){const n=e.map((e=>{const{start:n,end:s}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(b,t)}}(s,a),c=n.split("\n"),l=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<c.length;){const e=c[m].match(i);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?l[r[t]].range+=`${m},`:d[t]?l[d[t]].start=m:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${m-1},`),c.splice(m,1)}n=c.join("\n");const h={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j={codeBlockContainer:"codeBlockContainer_KdHd"};var N=n(3274);function A(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(r());return(0,N.jsx)(t,{...n,style:s,className:(0,i.A)(n.className,j.codeBlockContainer,d.G.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_FrQo",codeBlockTitle:"codeBlockTitle_dxjx",codeBlock:"codeBlock_nCa4",codeBlockStandalone:"codeBlockStandalone_Hz7K",codeBlockLines:"codeBlockLines_Q9sU",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_VPA0",buttonGroup:"buttonGroup_rpAW"};function k(e){let{children:t,className:n}=e;return(0,N.jsx)(A,{as:"pre",tabIndex:0,className:(0,i.A)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:C.codeBlockLines,children:t})})}var y=n(6319);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function B(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=L);const a=(0,y._q)(t),o=(0,y.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(369);const w={codeLine:"codeLine_QRAG",codeLineNumber:"codeLineNumber_S8uL",codeLineContent:"codeLineContent_xIUS"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=a({line:t,className:(0,i.A)(n,s&&w.codeLine)}),l=t.map(((e,t)=>(0,N.jsx)("span",{...o({token:e,key:t})},t)));return(0,N.jsxs)("span",{...c,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:w.codeLineNumber}),(0,N.jsx)("span",{className:w.codeLineContent,children:l})]}):l,(0,N.jsx)("br",{})]})}var H=n(3097);function E(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function M(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const I={copyButtonCopied:"copyButtonCopied_GP4x",copyButtonIcons:"copyButtonIcons_BKg5",copyButtonIcon:"copyButtonIcon_uIuV",copyButtonSuccessIcon:"copyButtonSuccessIcon_xmT4"};function S(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),c.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":a?(0,H.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,I.copyButton,a&&I.copyButtonCopied),onClick:l,children:(0,N.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(E,{className:I.copyButtonIcon}),(0,N.jsx)(M,{className:I.copyButtonSuccessIcon})]})})}function U(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const R={wordWrapButtonIcon:"wordWrapButtonIcon_b10x",wordWrapButtonEnabled:"wordWrapButtonEnabled_vJyS"};function V(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,H.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,s&&R.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,N.jsx)(U,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function z(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:c,language:d}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.p)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=r(),x=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return B(o,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),b=function(e){return e?.match(h)?.groups.title??""}(a)||o,{lineClassNames:g,code:j}=v(t,{metastring:a,language:p,magicComments:m}),k=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,N.jsxs)(A,{as:"div",className:(0,i.A)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[b&&(0,N.jsx)("div",{className:C.codeBlockTitle,children:b}),(0,N.jsxs)("div",{className:C.codeBlockContent,children:[(0,N.jsx)(_.f4,{theme:f,code:j,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,i.A)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,i.A)(C.codeBlockLines,k&&C.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(T,{line:e,getLineProps:a,getTokenProps:o,classNames:g[t],showLineNumbers:k},t)))})})}}),(0,N.jsxs)("div",{className:C.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,N.jsx)(V,{className:C.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,N.jsx)(S,{className:C.codeButton,code:j})]})]})]})}function O(e){let{children:t,...n}=e;const a=(0,o.A)(),i=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof i?z:k;return(0,N.jsx)(c,{...n,children:i},String(a))}function W(e){return(0,N.jsx)("code",{...e})}var P=n(4421);var G=n(5263),D=n(3781);const $={details:"details_U9mY",isBrowser:"isBrowser_cMBB",collapsibleContent:"collapsibleContent_S2kr"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function Z(e){let{summary:t,children:n,...a}=e;(0,G.A)().collectAnchor(a.id);const c=(0,o.A)(),l=(0,s.useRef)(null),{collapsed:r,setCollapsed:d}=(0,D.u)({initialState:!a.open}),[u,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...a,ref:l,open:u,"data-collapsed":r,className:(0,i.A)($.details,c&&$.isBrowser,a.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&q(t,l.current)&&(e.preventDefault(),r?(d(!1),m(!0)):d(!0))},children:[h,(0,N.jsx)(D.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,N.jsx)("div",{className:$.collapsibleContent,children:n})})]})}const K={details:"details_ZhY5"},Q="alert alert--info";function Y(e){let{...t}=e;return(0,N.jsx)(Z,{...t,className:(0,i.A)(Q,K.details,t.className)})}function J(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(Y,{...e,summary:n,children:a})}var X=n(7820);function ee(e){return(0,N.jsx)(X.A,{...e})}const te={containsTaskList:"containsTaskList_LMGR"};function ne(e){if(void 0!==e)return(0,i.A)(e,e?.includes("contains-task-list")&&te.containsTaskList)}const se={img:"img_HeVX"};var ae=n(7180),oe=n(7177);const ie={Head:a.A,details:J,Details:J,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(W,{...e}):(0,N.jsx)(O,{...e})},a:function(e){return(0,N.jsx)(P.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:ne(e.className)})},li:function(e){return(0,G.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,se.img))});var t},h1:e=>(0,N.jsx)(ee,{as:"h1",...e}),h2:e=>(0,N.jsx)(ee,{as:"h2",...e}),h3:e=>(0,N.jsx)(ee,{as:"h3",...e}),h4:e=>(0,N.jsx)(ee,{as:"h4",...e}),h5:e=>(0,N.jsx)(ee,{as:"h5",...e}),h6:e=>(0,N.jsx)(ee,{as:"h6",...e}),admonition:ae.A,mermaid:oe.A}},4809:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},7023:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>c});var s=n(9474);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);