(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6219],{78624:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return n(30792)}])},48956:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(11527),a=n(50959),l=n(99939),i=n.n(l),r=n(42645),o=n.n(r),c=n(31619),d=n(82863),m=n(83305);let u=()=>{let e=(0,c.Z)(),t=(0,d.b)(),n=[{id:0,name:t.NAV.INDEX,to:e.path||"/",show:!0},{id:1,name:t.NAV.ABOUT,to:"/about",show:e.showAbout},{id:2,name:t.NAV.SEARCH,to:"/search",show:!0}];return(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsx)("ul",{className:"flex flex-row",children:n.map(e=>e.show&&(0,s.jsx)("li",{className:"block ml-4 text-black dark:text-gray-50 nav",children:(0,s.jsx)(i(),{href:e.to,target:e.external?"_blank":null,children:e.name})},e.id))})})};function j(e){let{navBarTitle:t,fullWidth:n}=e,l=(0,c.Z)(),{dark:r}=(0,m.Z)(),d=e=>!e&&r?"/favicon.dark.png":"/favicon.png",[j,x]=(0,a.useState)(d()),p=e=>x(d(e));(0,a.useEffect)(()=>p(),[r]);let f=!l.autoCollapsedNavBar,b=(0,a.useRef)(void 0),g=(0,a.useRef)(void 0),k=(0,a.useCallback)(e=>{var t,n;let[s]=e;f&&b.current?null===(t=b.current)||void 0===t||t.classList.toggle("sticky-nav-full",!s.isIntersecting):null===(n=b.current)||void 0===n||n.classList.add("remove-sticky")},[f]);(0,a.useEffect)(()=>{let e=g.current,t=new window.IntersectionObserver(k);return t.observe(e),()=>{e&&t.unobserve(e)}},[k,g]);let v=(0,a.useRef)(void 0);function w(e){[b.current,v.current].includes(e.target)&&window.scrollTo({top:0,behavior:"smooth"})}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"observer-element h-4 md:h-12",ref:g}),(0,s.jsxs)("div",{className:"sticky-nav group m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ".concat(n?"px-4 md:px-24":"max-w-3xl px-4"),id:"sticky-nav",ref:b,onClick:w,children:[(0,s.jsx)("svg",{viewBox:"0 0 24 24",className:"caret w-6 h-6 absolute inset-x-0 bottom-0 mx-auto pointer-events-none opacity-30 group-hover:opacity-100 transition duration-100",children:(0,s.jsx)("path",{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z",className:"fill-black dark:fill-white"})}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(i(),{href:"/","aria-label":l.title,children:(0,s.jsx)(o(),{src:j,width:24,height:24,alt:l.title,onError:()=>p(!0)})}),(0,s.jsx)(h,{ref:v,siteTitle:l.title,siteDescription:l.description,postTitle:t,onClick:w})]}),(0,s.jsx)(u,{})]})]})}let h=(0,a.forwardRef)(function(e,t){let{siteTitle:n,siteDescription:a,postTitle:l,onClick:i}=e;return(0,s.jsxs)("p",{ref:t,className:"header-name ml-2 font-medium text-gray-600 dark:text-gray-300 capture-pointer-events grid-rows-1 grid-cols-1 items-center",onClick:i,children:[l&&(0,s.jsx)("span",{className:"post-title row-start-1 col-start-1",children:l}),(0,s.jsxs)("span",{className:"row-start-1 col-start-1",children:[(0,s.jsx)("span",{className:"site-title",children:n}),(0,s.jsxs)("span",{className:"site-description font-normal",children:[", ",a]})]})]})});var x=e=>{let{fullWidth:t}=e,n=(0,c.Z)(),a=new Date,l=a.getFullYear(),i=+n.since;return(0,s.jsxs)("div",{className:"mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ".concat(t?"px-4 md:px-24":"max-w-2xl px-4"),children:[(0,s.jsx)("hr",{className:"border-gray-200 dark:border-gray-600"}),(0,s.jsx)("div",{className:"my-4 text-sm leading-6",children:(0,s.jsx)("div",{className:"flex align-baseline justify-between flex-wrap",children:(0,s.jsxs)("p",{children:["\xa9 ",n.author," ",i!==l&&i?"".concat(i," - ").concat(l):l]})})})]})},p=n(92025),f=n.n(p),b=n(40507),g=n.n(b),k=n(84875),v=n.n(k);let w=e=>{let{children:t,layout:n,fullWidth:a,...l}=e,i=(0,c.Z)(),r=i.path.length?"".concat(i.link,"/").concat(i.path):i.link,o={title:i.title,type:"website",...l};return(0,s.jsxs)("div",{children:[(0,s.jsxs)(f(),{children:[(0,s.jsx)("title",{children:o.title}),(0,s.jsx)("meta",{name:"robots",content:"follow, index"}),(0,s.jsx)("meta",{charSet:"UTF-8"}),i.seo.googleSiteVerification&&(0,s.jsx)("meta",{name:"google-site-verification",content:i.seo.googleSiteVerification}),i.seo.keywords&&(0,s.jsx)("meta",{name:"keywords",content:i.seo.keywords.join(", ")}),(0,s.jsx)("meta",{name:"description",content:o.description}),(0,s.jsx)("meta",{property:"og:locale",content:i.lang}),(0,s.jsx)("meta",{property:"og:title",content:o.title}),(0,s.jsx)("meta",{property:"og:description",content:o.description}),(0,s.jsx)("meta",{property:"og:url",content:o.slug?"".concat(r,"/").concat(o.slug):r}),(0,s.jsx)("meta",{property:"og:image",content:"".concat(i.ogImageGenerateURL,"/").concat(encodeURIComponent(o.title),".png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg")}),(0,s.jsx)("meta",{property:"og:type",content:o.type}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:description",content:o.description}),(0,s.jsx)("meta",{name:"twitter:title",content:o.title}),(0,s.jsx)("meta",{name:"twitter:image",content:"".concat(i.ogImageGenerateURL,"/").concat(encodeURIComponent(o.title),".png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg")}),"article"===o.type&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{property:"article:published_time",content:o.date}),(0,s.jsx)("meta",{property:"article:author",content:i.author})]})]}),(0,s.jsxs)("div",{className:"wrapper ".concat("serif"===i.font?"font-serif":"font-sans"),children:[(0,s.jsx)(j,{navBarTitle:"blog"===n?o.title:null,fullWidth:a}),(0,s.jsx)("main",{className:v()("flex-grow transition-all","blog"!==n&&["self-center px-4",a?"md:px-24":"w-full max-w-2xl"]),children:t}),(0,s.jsx)(x,{fullWidth:a})]})]})};w.propTypes={children:g().node};var y=w},3538:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s=n(11527),a=n(50959),l=n(74441),i=n.n(l),r=n(29482),o=n.n(r),c=n(31619);i().extend(o());let d={};function m(e){let{date:t}=e,l=(0,c.Z)().lang.slice(0,2),[r,o]=(0,a.useState)(!0===d[l]);return(0,a.useEffect)(()=>{if(!r){var e;null!==(e=d[l])&&void 0!==e||(d[l]=n(40408)("./".concat(l)).then(()=>{d[l]=!0,i().locale(l)},()=>console.warn("dayjs locale `".concat(l,"` not found")))),d[l].then(()=>o(!0))}},[r,l]),(0,s.jsx)("span",{children:i()(t).format("ll")})}},81373:function(e,t){t.O=['"IBM Plex Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto",'"Noto Sans"','"Helvetica Neue"',"Helvetica",'"Nimbus Sans L"',"Arial",'"Liberation Sans"','"PingFang SC"','"Hiragino Sans GB"','"Noto Sans CJK SC"','"Source Han Sans SC"','"Source Han Sans CN"','"Microsoft YaHei"','"Wenquanyi Micro Hei"','"WenQuanYi Zen Hei"','"ST Heiti"',"SimHei",'"WenQuanYi Zen Hei Sharp"',"sans-serif"],t.K=['"Source Serif"',"ui-serif","Georgia",'"Nimbus Roman No9 L"','"Songti SC"','"Noto Serif CJK SC"','"Source Han Serif SC"','"Source Han Serif CN"',"STSong",'"AR PL New Sung"','"AR PL SungtiL GB"',"NSimSun","SimSun",'"TW-Sung"','"WenQuanYi Bitmap Song"','"AR PL UMing CN"','"AR PL UMing HK"','"AR PL UMing TW"','"AR PL UMing TW MBE"',"PMingLiU","MingLiU","serif"]},30792:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return G}});var s=n(11527),a=n(96785),l=n(84875),i=n.n(l),r=n(82863),o=n(31619),c=n(48956),d=n(40507),m=n.n(d),u=n(42645),j=n.n(u),h=n(83305),x=n(3538),p=n(99939),f=n.n(p),b=e=>{let{tag:t}=e;return(0,s.jsx)(f(),{href:"/tag/".concat(encodeURIComponent(t)),children:(0,s.jsx)("p",{className:"mr-1 rounded-full px-2 py-1 border leading-none text-sm dark:border-gray-600",children:t})})},g=n(89551),k=n.n(g),v=n(50959),w=n(50797),y=n.n(w),N=n(83861),S=n(89193),C=n(81373);function z(e){var t,n;let{block:a,children:l}=e;return(0,s.jsxs)("details",{className:i()("nobelium-block nobelium-toggle",{"nobelium-toggle-empty":!l},(null===(t=a.format)||void 0===t?void 0:t.block_color)&&"notion-".concat(a.format.block_color)),children:[(0,s.jsxs)("summary",{className:"relative",children:[(0,s.jsx)("span",{className:"nobelium-toggle-triangle",children:(0,s.jsx)("svg",{viewBox:"0 0 100 100",children:(0,s.jsx)("polygon",{points:"5.9,88.2 50,11.8 94.1,88.2"})})}),(0,s.jsx)("span",{className:"nobelium-toggle-title",children:(0,s.jsx)(N.xv,{value:null===(n=a.properties)||void 0===n?void 0:n.title,block:a})})]}),l&&(0,s.jsx)("div",{className:"nobelium-toggle-content",children:l})]})}let R={Code:y()(async()=>function(e){return"Mermaid"===(0,S.FB)(e.block.properties.language)?(0,v.createElement)(y()(()=>Promise.all([n.e(386),n.e(9129),n.e(382)]).then(n.bind(n,10382)).then(e=>e.default),{loadableGenerated:{webpack:()=>[10382]},ssr:!1}),e):(0,v.createElement)(y()(()=>n.e(6014).then(n.bind(n,66014)).then(async e=>(await Promise.all([n.e(1559).then(n.t.bind(n,31559,23)),n.e(1687).then(n.t.bind(n,61687,23)),n.e(3209).then(n.t.bind(n,3209,23)),n.e(497).then(n.t.bind(n,50497,23)),n.e(6364).then(n.t.bind(n,86364,23)),n.e(6178).then(n.t.bind(n,56178,23)),n.e(5495).then(n.t.bind(n,25495,23)),n.e(955).then(n.t.bind(n,50955,23)),n.e(6781).then(n.t.bind(n,46781,23)),n.e(5944).then(n.t.bind(n,45944,23)),n.e(3931).then(n.t.bind(n,93931,23)),n.e(5267).then(n.t.bind(n,55267,23)),n.e(3492).then(n.t.bind(n,63492,23)),n.e(4989).then(n.t.bind(n,14989,23)),n.e(8810).then(n.t.bind(n,18810,23)),n.e(1601).then(n.t.bind(n,11601,23)),n.e(1694).then(n.t.bind(n,71694,23)),n.e(4746).then(n.t.bind(n,64746,23)),n.e(525).then(n.t.bind(n,40525,23)),n.e(6707).then(n.t.bind(n,46707,23)),n.e(7479).then(n.t.bind(n,17479,23)),n.e(5529).then(n.t.bind(n,75529,23)),n.e(457).then(n.t.bind(n,70457,23)),n.e(567).then(n.t.bind(n,80567,23)),n.e(1320).then(n.t.bind(n,81320,23)),n.e(474).then(n.t.bind(n,20474,23)),n.e(7642).then(n.t.bind(n,37642,23)),n.e(1457).then(n.t.bind(n,31457,23)),n.e(5564).then(n.t.bind(n,25564,23)),n.e(877).then(n.t.bind(n,50877,23)),n.e(7010).then(n.t.bind(n,57010,23))]),e.Code)),{loadableGenerated:{webpack:()=>[57010]}}),e)},{loadableGenerated:{webpack:()=>[57010]}}),Collection:y()(()=>Promise.all([n.e(648),n.e(2776)]).then(n.bind(n,28728)).then(e=>e.Collection),{loadableGenerated:{webpack:()=>[28728]}}),Equation:y()(()=>Promise.all([n.e(5922),n.e(1419)]).then(n.bind(n,71419)).then(e=>e.Equation),{loadableGenerated:{webpack:()=>[71419]}}),Pdf:y()(()=>Promise.all([n.e(309),n.e(4957),n.e(2405)]).then(n.bind(n,42200)).then(e=>e.Pdf),{loadableGenerated:{webpack:()=>[42200]},ssr:!1}),Tweet:y()(()=>n.e(695).then(n.bind(n,695)).then(e=>{let{default:t}=e;return function(e){let{id:n}=e;return(0,s.jsx)(t,{tweetId:n,options:{theme:"dark"}})}}),{loadableGenerated:{webpack:()=>[695]}}),toggle_nobelium:e=>{let{block:t,children:n}=e;return(0,s.jsx)(z,{block:t,children:n})}},P=e=>"https://www.notion.so/".concat(e.replace(/-/g,""));function T(e){let t=(0,o.Z)(),n={"sans-serif":C.O,serif:C.K}[t.font];if(e.recordMap)for(let{value:t}of Object.values(e.recordMap.block))(null==t?void 0:t.type)==="toggle"&&(t.type+="_nobelium");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k(),{id:"e77f2e0eb6f84b30",dynamic:[n],children:".notion{--notion-font:".concat(n,"}")}),(0,s.jsx)(N.cp,{components:R,mapPageUrl:P,...e})]})}function _(e){let{blockMap:t,className:n,style:a}=e,l=Object.keys(t.collection)[0],r=Object.values(t.block).find(e=>e.value.parent_id===l).value,o=(0,S.Ru)(r,t);return o.length?(0,s.jsx)("aside",{className:i()(n,"pl-4 text-sm text-zinc-700/70 dark:text-neutral-400"),style:a,children:o.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)("a",{"data-target-id":e.id,className:"block py-1 hover:text-black dark:hover:text-white cursor-pointer transition duration-100",style:{paddingLeft:24*e.indentLevel+"px"},onClick:()=>(function(e){e=e.replaceAll("-","");let t=document.querySelector(".notion-block-".concat(e));if(!t)return;let n=document.documentElement.scrollTop+t.getBoundingClientRect().top-65;document.documentElement.scrollTo({top:n,behavior:"smooth"})})(e.id),children:e.text})},e.id))}):null}function L(e){let t=(0,o.Z)(),{post:n,blockMap:a,emailHash:l,fullWidth:r=!1}=e,{dark:c}=(0,h.Z)();return(0,s.jsxs)("article",{className:i()("flex flex-col",r?"md:px-24":"items-center"),children:[(0,s.jsx)("h1",{className:i()("w-full font-bold text-3xl text-black dark:text-white",{"max-w-2xl px-4":!r}),children:n.title}),"Page"!==n.type[0]&&(0,s.jsxs)("nav",{className:i()("w-full flex mt-7 items-start text-gray-500 dark:text-gray-400",{"max-w-2xl px-4":!r}),children:[(0,s.jsxs)("div",{className:"flex mb-4",children:[(0,s.jsxs)("a",{href:t.socialLink||"#",className:"flex",children:[(0,s.jsx)(j(),{alt:t.author,width:24,height:24,src:"https://gravatar.com/avatar/".concat(l),className:"rounded-full"}),(0,s.jsx)("p",{className:"ml-2 md:block",children:t.author})]}),(0,s.jsx)("span",{className:"block",children:"\xa0/\xa0"})]}),(0,s.jsx)("div",{className:"mr-2 mb-4 md:ml-0",children:(0,s.jsx)(x.Z,{date:n.date})}),n.tags&&(0,s.jsx)("div",{className:"flex flex-nowrap max-w-full overflow-x-auto article-tags",children:n.tags.map(e=>(0,s.jsx)(b,{tag:e},e))})]}),(0,s.jsxs)("div",{className:"self-stretch -mt-4 flex flex-col items-center lg:flex-row lg:items-stretch",children:[!r&&(0,s.jsx)("div",{className:"flex-1 hidden lg:block"}),(0,s.jsx)("div",{className:r?"flex-1 pr-4":"flex-none w-full max-w-2xl px-4",children:(0,s.jsx)(T,{recordMap:a,fullPage:!1,darkMode:c})}),(0,s.jsx)("div",{className:i()("order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]",r?"flex-none":"flex-1"),children:(0,s.jsx)(_,{blockMap:a,className:"pt-3 sticky",style:{top:"65px"}})})]})]})}_.propTypes={blockMap:m().object.isRequired},L.propTypes={post:m().object.isRequired,blockMap:m().object.isRequired,emailHash:m().string.isRequired,fullWidth:m().bool},n(99902);let M=["ca","en","es","fi","fr","id","ja","oc","pt-br","tr","zh-cn","zh-tw"],E=e=>{var t,n;let s=e.toLowerCase();return s.startsWith("zh")?null!==(t=M.find(e=>s===e.toLocaleLowerCase()))&&void 0!==t?t:"zh-cn":null!==(n=M.find(e=>s.startsWith(e.toLowerCase())))&&void 0!==n?n:"en"},F=y()(()=>n.e(7977).then(n.t.bind(n,75248,23)),{loadableGenerated:{webpack:()=>[75248]},ssr:!1}),U=y()(()=>n.e(1162).then(n.bind(n,11162)),{loadableGenerated:{webpack:()=>[11162]},ssr:!1}),A=y()(()=>n.e(9955).then(n.bind(n,79955)).then(e=>e.ReactCusdis),{loadableGenerated:{webpack:()=>[79955]},ssr:!1});var H=e=>{var t;let{frontMatter:n}=e,l=(0,a.useRouter)(),r=(0,o.Z)(),c=null!==(t=n.fullWidth)&&void 0!==t&&t;return(0,s.jsxs)("div",{className:i()("px-4 font-medium text-gray-500 dark:text-gray-400 my-5",c?"md:px-24":"mx-auto max-w-2xl"),children:[r.comment&&"gitalk"===r.comment.provider&&(0,s.jsx)(F,{options:{id:n.id,title:n.title,clientID:r.comment.gitalkConfig.clientID,clientSecret:r.comment.gitalkConfig.clientSecret,repo:r.comment.gitalkConfig.repo,owner:r.comment.gitalkConfig.owner,admin:r.comment.gitalkConfig.admin,distractionFreeMode:r.comment.gitalkConfig.distractionFreeMode}}),r.comment&&"utterances"===r.comment.provider&&(0,s.jsx)(U,{issueTerm:n.id}),r.comment&&"cusdis"===r.comment.provider&&(0,s.jsx)(A,{lang:E(r.lang),attrs:{host:r.comment.cusdisConfig.host,appId:r.comment.cusdisConfig.appId,pageId:n.id,pageTitle:n.title,pageUrl:r.link+l.asPath,theme:r.appearance}})]})},Z=!0;function G(e){var t;let{post:n,blockMap:l,emailHash:d}=e,m=(0,a.useRouter)(),u=(0,o.Z)(),j=(0,r.b)();if(m.isFallback)return null;let h=null!==(t=n.fullWidth)&&void 0!==t&&t;return(0,s.jsxs)(c.Z,{layout:"blog",title:n.title,description:n.summary,slug:n.slug,type:"article",fullWidth:h,children:[(0,s.jsx)(L,{post:n,blockMap:l,emailHash:d,fullWidth:h}),(0,s.jsxs)("div",{className:i()("px-4 flex justify-between font-medium text-gray-500 dark:text-gray-400 my-5",h?"md:px-24":"mx-auto max-w-2xl"),children:[(0,s.jsx)("a",{children:(0,s.jsxs)("button",{onClick:()=>m.push(u.path||"/"),className:"mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100",children:["← ",j.POST.BACK]})}),(0,s.jsx)("a",{children:(0,s.jsxs)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100",children:["↑ ",j.POST.TOP]})})]}),(0,s.jsx)(H,{frontMatter:n})]})}},40408:function(e,t,n){var s={"./af":[26259,6259],"./af.js":[26259,6259],"./am":[80093,93],"./am.js":[80093,93],"./ar":[86186,6186],"./ar-dz":[75544,5544],"./ar-dz.js":[75544,5544],"./ar-iq":[34528,4528],"./ar-iq.js":[34528,4528],"./ar-kw":[56667,6667],"./ar-kw.js":[56667,6667],"./ar-ly":[96e3,6e3],"./ar-ly.js":[96e3,6e3],"./ar-ma":[95368,5368],"./ar-ma.js":[95368,5368],"./ar-sa":[27483,7483],"./ar-sa.js":[27483,7483],"./ar-tn":[36116,6116],"./ar-tn.js":[36116,6116],"./ar.js":[86186,6186],"./az":[39826,9826],"./az.js":[39826,9826],"./be":[46616,6616],"./be.js":[46616,6616],"./bg":[64288,4288],"./bg.js":[64288,4288],"./bi":[10553,553],"./bi.js":[10553,553],"./bm":[41816,1816],"./bm.js":[41816,1816],"./bn":[89593,9593],"./bn-bd":[81160,1160],"./bn-bd.js":[81160,1160],"./bn.js":[89593,9593],"./bo":[68159,8159],"./bo.js":[68159,8159],"./br":[82788,2788],"./br.js":[82788,2788],"./bs":[50572,572],"./bs.js":[50572,572],"./ca":[23470,3470],"./ca.js":[23470,3470],"./cs":[6401,6401],"./cs.js":[6401,6401],"./cv":[22478,2478],"./cv.js":[22478,2478],"./cy":[60814,814],"./cy.js":[60814,814],"./da":[66450,6450],"./da.js":[66450,6450],"./de":[14943,4943],"./de-at":[62861,2861],"./de-at.js":[62861,2861],"./de-ch":[91288,1288],"./de-ch.js":[91288,1288],"./de.js":[14943,4943],"./dv":[85490,5490],"./dv.js":[85490,5490],"./el":[45585,5585],"./el.js":[45585,5585],"./en":[4825,4825],"./en-au":[31717,1717],"./en-au.js":[31717,1717],"./en-ca":[33518,3518],"./en-ca.js":[33518,3518],"./en-gb":[60340,340],"./en-gb.js":[60340,340],"./en-ie":[10328,328],"./en-ie.js":[10328,328],"./en-il":[1902,1902],"./en-il.js":[1902,1902],"./en-in":[14714,4714],"./en-in.js":[14714,4714],"./en-nz":[16852,6852],"./en-nz.js":[16852,6852],"./en-sg":[79678,9678],"./en-sg.js":[79678,9678],"./en-tt":[13302,3302],"./en-tt.js":[13302,3302],"./en.js":[4825,4825],"./eo":[263,263],"./eo.js":[263,263],"./es":[37643,7643],"./es-do":[61031,1031],"./es-do.js":[61031,1031],"./es-mx":[94700,4700],"./es-mx.js":[94700,4700],"./es-pr":[45733,5733],"./es-pr.js":[45733,5733],"./es-us":[96826,6826],"./es-us.js":[96826,6826],"./es.js":[37643,7643],"./et":[47263,7263],"./et.js":[47263,7263],"./eu":[88348,2458],"./eu.js":[88348,2458],"./fa":[63738,3738],"./fa.js":[63738,3738],"./fi":[17773,7773],"./fi.js":[17773,7773],"./fo":[11971,1971],"./fo.js":[11971,1971],"./fr":[52590,2590],"./fr-ca":[1398,1398],"./fr-ca.js":[1398,1398],"./fr-ch":[61003,1003],"./fr-ch.js":[61003,1003],"./fr.js":[52590,2590],"./fy":[13260,3260],"./fy.js":[13260,3260],"./ga":[99676,9676],"./ga.js":[99676,9676],"./gd":[26990,6990],"./gd.js":[26990,6990],"./gl":[67770,7770],"./gl.js":[67770,7770],"./gom-latn":[83130,3130],"./gom-latn.js":[83130,3130],"./gu":[32479,2479],"./gu.js":[32479,2479],"./he":[29667,9667],"./he.js":[29667,9667],"./hi":[5003,5003],"./hi.js":[5003,5003],"./hr":[53573,3573],"./hr.js":[53573,3573],"./ht":[7742,7742],"./ht.js":[7742,7742],"./hu":[94175,4175],"./hu.js":[94175,4175],"./hy-am":[34251,4251],"./hy-am.js":[34251,4251],"./id":[57970,7970],"./id.js":[57970,7970],"./index.d":[77916,7916],"./index.d.ts":[77916,7916],"./is":[17712,7712],"./is.js":[17712,7712],"./it":[54146,4146],"./it-ch":[90623,623],"./it-ch.js":[90623,623],"./it.js":[54146,4146],"./ja":[44092,4092],"./ja.js":[44092,4092],"./jv":[79915,9915],"./jv.js":[79915,9915],"./ka":[45475,5475],"./ka.js":[45475,5475],"./kk":[39996,9996],"./kk.js":[39996,9996],"./km":[93330,3330],"./km.js":[93330,3330],"./kn":[79898,9898],"./kn.js":[79898,9898],"./ko":[41615,1615],"./ko.js":[41615,1615],"./ku":[50700,700],"./ku.js":[50700,700],"./ky":[24921,4921],"./ky.js":[24921,4921],"./lb":[52108,2108],"./lb.js":[52108,2108],"./lo":[38806,8806],"./lo.js":[38806,8806],"./lt":[10190,190],"./lt.js":[10190,190],"./lv":[83962,3962],"./lv.js":[83962,3962],"./me":[44475,4475],"./me.js":[44475,4475],"./mi":[85127,5127],"./mi.js":[85127,5127],"./mk":[75110,5110],"./mk.js":[75110,5110],"./ml":[83010,3010],"./ml.js":[83010,3010],"./mn":[86624,6624],"./mn.js":[86624,6624],"./mr":[72107,2107],"./mr.js":[72107,2107],"./ms":[61373,1373],"./ms-my":[68348,8348],"./ms-my.js":[68348,8348],"./ms.js":[61373,1373],"./mt":[42574,2574],"./mt.js":[42574,2574],"./my":[34483,4483],"./my.js":[34483,4483],"./nb":[46662,6662],"./nb.js":[46662,6662],"./ne":[35171,5171],"./ne.js":[35171,5171],"./nl":[77613,7613],"./nl-be":[73229,3229],"./nl-be.js":[73229,3229],"./nl.js":[77613,7613],"./nn":[53157,3157],"./nn.js":[53157,3157],"./oc-lnc":[64622,4622],"./oc-lnc.js":[64622,4622],"./pa-in":[84531,4531],"./pa-in.js":[84531,4531],"./pl":[28143,8143],"./pl.js":[28143,8143],"./pt":[59144,9144],"./pt-br":[40760,760],"./pt-br.js":[40760,760],"./pt.js":[59144,9144],"./rn":[1639,1639],"./rn.js":[1639,1639],"./ro":[71013,1013],"./ro.js":[71013,1013],"./ru":[78195,8195],"./ru.js":[78195,8195],"./rw":[88619,8619],"./rw.js":[88619,8619],"./sd":[87014,7014],"./sd.js":[87014,7014],"./se":[62709,2709],"./se.js":[62709,2709],"./si":[59177,9177],"./si.js":[59177,9177],"./sk":[2283,2283],"./sk.js":[2283,2283],"./sl":[99527,9527],"./sl.js":[99527,9527],"./sq":[26498,6498],"./sq.js":[26498,6498],"./sr":[54383,4383],"./sr-cyrl":[61853,1853],"./sr-cyrl.js":[61853,1853],"./sr.js":[54383,4383],"./ss":[75978,5978],"./ss.js":[75978,5978],"./sv":[62198,2198],"./sv-fi":[82121,2121],"./sv-fi.js":[82121,2121],"./sv.js":[62198,2198],"./sw":[49237,9237],"./sw.js":[49237,9237],"./ta":[72970,2970],"./ta.js":[72970,2970],"./te":[68828,8828],"./te.js":[68828,8828],"./tet":[48399,8399],"./tet.js":[48399,8399],"./tg":[41426,1426],"./tg.js":[41426,1426],"./th":[9197,9197],"./th.js":[9197,9197],"./tk":[96308,6308],"./tk.js":[96308,6308],"./tl-ph":[35411,5411],"./tl-ph.js":[35411,5411],"./tlh":[5745,5745],"./tlh.js":[5745,5745],"./tr":[74316,4316],"./tr.js":[74316,4316],"./types.d":[98825,8825],"./types.d.ts":[98825,8825],"./tzl":[34239,4239],"./tzl.js":[34239,4239],"./tzm":[83414,3414],"./tzm-latn":[40828,828],"./tzm-latn.js":[40828,828],"./tzm.js":[83414,3414],"./ug-cn":[88086,8086],"./ug-cn.js":[88086,8086],"./uk":[15205,5205],"./uk.js":[15205,5205],"./ur":[57489,7489],"./ur.js":[57489,7489],"./uz":[77650,7650],"./uz-latn":[10972,972],"./uz-latn.js":[10972,972],"./uz.js":[77650,7650],"./vi":[10127,127],"./vi.js":[10127,127],"./x-pseudo":[97450,7450],"./x-pseudo.js":[97450,7450],"./yo":[23907,3907],"./yo.js":[23907,3907],"./zh":[6973,6973],"./zh-cn":[19047,9047],"./zh-cn.js":[19047,9047],"./zh-hk":[94624,4624],"./zh-hk.js":[94624,4624],"./zh-tw":[41916,1916],"./zh-tw.js":[41916,1916],"./zh.js":[6973,6973]};function a(e){if(!n.o(s,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=s[e],a=t[0];return n.e(t[1]).then(function(){return n.t(a,23)})}a.keys=function(){return Object.keys(s)},a.id=40408,e.exports=a}},function(e){e.O(0,[6779,5135,9774,2888,179],function(){return e(e.s=78624)}),_N_E=e.O()}]);