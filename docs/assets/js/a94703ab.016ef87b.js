"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[9048],{2559:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(6540),i=n(4164),s=n(1003),o=n(7559),l=n(1754),r=n(1826),c=n(1312),d=n(3104),u=n(5062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(4848);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(s.current?s.current=!1:a>=o?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,u.$)((e=>{e.location.hash&&(s.current=!0,i(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",o.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var p=n(3109),x=n(6347),j=n(4581),f=n(6342),v=n(9529);function _(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g="collapseSidebarButton_PEFL",A="collapseSidebarButtonIcon_kv0_";function C(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",g),onClick:t,children:(0,m.jsx)(_,{className:A})})}var k=n(5041),S=n(9532);const T=Symbol("EmptyContext"),N=a.createContext(T);function I(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:i})),[n]);return(0,m.jsx)(N.Provider,{value:s,children:t})}var y=n(1422),B=n(9169),w=n(5489),L=n(2303);function M(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){let{item:t,onItemClick:n,activePath:s,level:r,index:c,...d}=e;const{items:u,label:h,collapsible:b,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.p)(),v=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),_=(0,l.w8)(t,s),g=(0,B.ys)(x,s),{collapsed:A,setCollapsed:C}=(0,y.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:k,setExpandedItem:I}=function(){const e=(0,a.useContext)(N);if(e===T)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!A),I(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const s=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!s&&n&&i(!1)}),[t,s,n,i])}({isActive:_,collapsed:A,updateCollapsed:E}),(0,a.useEffect)((()=>{b&&null!=k&&k!==c&&j&&C(!0)}),[b,k,c,C,j]),(0,m.jsxs)("li",{className:(0,i.A)(o.G.docs.docSidebarItemCategory,o.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":A},p),children:[(0,m.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,m.jsx)(w.A,{className:(0,i.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!x&&b,"menu__link--active":_}),onClick:b?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!A:void 0,href:b?v??"#":v,...d,children:h}),x&&b&&(0,m.jsx)(M,{collapsed:A,categoryLabel:h,onClick:e=>{e.preventDefault(),E()}})]}),(0,m.jsx)(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A,children:(0,m.jsx)(U,{items:u,tabIndex:A?-1:0,onItemClick:n,activePath:s,level:r+1})})]})}var D=n(6654),H=n(3186);const R="menuExternalLink_NmtK";function G(e){let{item:t,onItemClick:n,activePath:a,level:s,index:r,...c}=e;const{href:d,label:u,className:h,autoAddBaseUrl:b}=t,p=(0,l.w8)(t,a),x=(0,D.A)(d);return(0,m.jsx)("li",{className:(0,i.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",h),children:(0,m.jsxs)(w.A,{className:(0,i.A)("menu__link",!x&&R,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,m.jsx)(H.A,{})]})},u)}const P="menuHtmlItem_M9Kj";function W(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:l,className:r}=t;return(0,m.jsx)("li",{className:(0,i.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(n),l&&[P,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:s}},a)}function F(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(E,{item:t,...n});case"html":return(0,m.jsx)(W,{item:t,...n});default:return(0,m.jsx)(G,{item:t,...n})}}function V(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,m.jsx)(I,{children:a.map(((e,t)=>(0,m.jsx)(F,{item:e,index:t,...n},t)))})}const U=(0,a.memo)(V),Y="menu_SIkG",K="menuWithAnnouncementBar_GW3s";function q(e){let{path:t,sidebar:n,className:s}=e;const l=function(){const{isActive:e}=(0,k.Mj)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",Y,l&&K,s),children:(0,m.jsx)("ul",{className:(0,i.A)(o.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(U,{items:n,activePath:t,level:1})})})}const z="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",J="sidebarHidden_VK0M",Q="sidebarLogo_isFc";function X(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:l}}}=(0,f.p)();return(0,m.jsxs)("div",{className:(0,i.A)(z,o&&O,s&&J),children:[o&&(0,m.jsx)(v.A,{tabIndex:-1,className:Q}),(0,m.jsx)(q,{path:t,sidebar:n}),l&&(0,m.jsx)(C,{onClick:a})]})}const Z=a.memo(X);var $=n(5600),ee=n(9876);const te=e=>{let{sidebar:t,path:n}=e;const a=(0,ee.M)();return(0,m.jsx)("ul",{className:(0,i.A)(o.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ne(e){return(0,m.jsx)($.GX,{component:te,props:e})}const ae=a.memo(ne);function ie(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(Z,{...e}),a&&(0,m.jsx)(ae,{...e})]})}const se={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:se.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(_,{className:se.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function re(e){let{children:t}=e;const n=(0,r.t)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:l}=(0,x.zy)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.O)()&&c(!0),s((e=>!e))}),[s,r]);return(0,m.jsx)("aside",{className:(0,i.A)(o.G.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&c(!0)},children:(0,m.jsx)(re,{children:(0,m.jsxs)("div",{className:(0,i.A)(le.sidebarViewport,r&&le.sidebarViewportHidden),children:[(0,m.jsx)(ie,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,m.jsx)(oe,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.t)();return(0,m.jsx)("main",{className:(0,i.A)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const he={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function me(e){let{children:t}=e;const n=(0,r.t)(),[i,s]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:he.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:he.docRoot,children:[n&&(0,m.jsx)(ce,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:s}),(0,m.jsx)(ue,{hiddenSidebarContainer:i,children:t})]})]})}var be=n(5955);function pe(e){const t=(0,l.B5)(e);if(!t)return(0,m.jsx)(be.A,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,m.jsx)(s.e3,{className:(0,i.A)(o.G.page.docsDocPage),children:(0,m.jsx)(r.V,{name:a,items:c,children:(0,m.jsx)(me,{children:n})})})}},5955:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),i=n(1312),s=n(1107),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsxs)(s.A,{as:"h1",className:"hero__title",children:[(0,o.jsx)("a",{href:"/",children:(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("img",{src:"https://rxdb.info/files/logo/rxdb_javascript_database.svg",alt:"RxDB",width:"160"})})}),(0,o.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"404 Page Not Found"})]}),(0,o.jsx)("p",{children:(0,o.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"The page you are looking for does not exist anymore or never has existed. If you have found this page through a link, you should tell the link author to update it."})}),(0,o.jsx)("p",{children:"Maybe one of these can help you to find the desired content:"}),(0,o.jsx)("div",{className:"ul-container",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://rxdb.info/quickstart.html",children:"RxDB Documentation"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/chat",children:"RxDB Discord Channel"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://twitter.com/intent/user?screen_name=rxdbjs",children:"RxDB on twitter"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/code",children:"RxDB at Github"})})]})})]})})})}}}]);