(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[4389],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,r.Z)(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,a.useState)(u),h=b[0],k=b[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var w=v[d];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&k(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;k(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3034:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(1395),l=n(8215),s={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/event/installation"},c={unversionedId:"packages/event/installation",id:"packages/event/installation",isDocsHomePage:!1,title:"Installation",description:"The event package can be installed over npm.",source:"@site/docs/packages/event/Installation.md",sourceDirName:"packages/event",slug:"/event/installation",permalink:"/kdsinghcoder.github.io/docs/event/installation",editUrl:"https://github.com/kdsinghcoder/documentation/tree/develop/docs/packages/event/Installation.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Installation",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/event/installation"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," package can be installed over ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware that this is no standalone package!"))),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/event \n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/event\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," package is an extension of AgileTs and doesn't work without the ",(0,i.kt)("a",{parentName:"p",href:"/kdsinghcoder.github.io/docs/core"},(0,i.kt)("inlineCode",{parentName:"a"},"core"))," package,\nwhich functions as the brain of AgileTs and is indispensable.\nUnfortunately, we can't combine each ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," version.\nTherefore, we have created a table which shows which versions fit together without restrictions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"@agile-ts/event"),(0,i.kt)("th",{parentName:"tr",align:null},"@agile-ts/core"),(0,i.kt)("th",{parentName:"tr",align:null},"NPM Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported React versions"),(0,i.kt)("th",{parentName:"tr",align:null},"Supports hook based components"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v0.0.1+"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.0.10+"),(0,i.kt)("td",{parentName:"tr",align:null},"v6+"),(0,i.kt)("td",{parentName:"tr",align:null},"16.8+"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Older Versions aren't supported anymore")))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);