(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[9065],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={id:"introduction",title:"Selector",sidebar_label:"Introduction",slug:"/core/collection/selector"},i={unversionedId:"packages/core/features/collection/selector/introduction",id:"packages/core/features/collection/selector/introduction",isDocsHomePage:!1,title:"Selector",description:"A Selector represents one specific Item from a Collection in the long term.",source:"@site/docs/packages/core/features/collection/selector/Introduction.md",sourceDirName:"packages/core/features/collection/selector",slug:"/core/collection/selector",permalink:"/docs/core/collection/selector",editUrl:"https://github.com/kdsinghcoder/documentation/tree/develop/docs/packages/core/features/collection/selector/Introduction.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Selector",sidebar_label:"Introduction",slug:"/core/collection/selector"}},c=[{value:"\ud83d\udd28 Use case",id:"-use-case",children:[]},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[]},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>itemKey</code>",id:"itemkey",children:[]},{value:"<code>config</code>",id:"config",children:[]}]},{value:"\ud83d\udfe6 Typescript",id:"\ud83d\udfe6-typescript",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Selector")," represents one specific ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection#-item"},"Item")," from a Collection in the long term.\nIt can be mutated dynamically and remains in sync with the Collection.\nWe instantiate a Selector with the help of an existing ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection"},"Collection"),".\nBy doing so, the Selector is automatically bound to the Collection it was created from\nand has access to its data.\nA Selector can be created during the creation of a Collection in the configuration object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"const MY_COLLECTION = new Collection((collection) =>({\n    selectors: {\n        selectorName: collection.Selector('item1')\n    }\n}));\n")),(0,l.kt)("p",null,"Or dynamically, after the Collection has been instantiated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createSelector("selectorName", /*to select Item Key*/);\n')),(0,l.kt)("p",null,"We can select not only existing Items. It is also possible to select non-existing Items.\nThen the Selector holds a reference to that Item until it is collected (",(0,l.kt)("inlineCode",{parentName:"p"},"collect()"),").\nBut don't forget that the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," of the Selector will be ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," during this time period\nsince AgileTs doesn't know the desired Item value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"MY_SELECTOR.select(\"notExistingItem\");\nMY_SELECTOR.value; // Returns 'undefined' until the Item got added to the Collection\n")),(0,l.kt)("p",null,"A Selector is an extension of the ",(0,l.kt)("inlineCode",{parentName:"p"},"State Class")," and offers the same powerful functionalities."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"MY_SELECTOR.undo(); // Undo latest change\nMY_SELECTOR.persist(); // Persist Selector Value into Storage\n")),(0,l.kt)("p",null,"Therefore, we can mutate the Selector with the provided set of State functions,\nand the changes are automatically applied to the Collection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.collect({id: 1, name: 'hans'});\nconst MY_SELECTOR = MY_COLLECTION.createSelector(1);\nMY_SELECTOR.patch({name: \"jeff\"});\nMY_ITEM.value; // Returns '{id: 1, name: 'jeff'}'\n")),(0,l.kt)("p",null,"Furthermore, we can dynamically change the Item that the Selector represents."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_SELECTOR = MY_COLLECTION.createSelector(1); // Represents Item 1\nMY_SELECTOR.select(2); // Represents Item 2\n")),(0,l.kt)("p",null,"If you want to find out more about the Selector's specific methods, check out the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/selector/methods"},"Methods")," Section.\nMost methods we use to modify, mutate and access the Selector are chainable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"MY_SELECTOR.undo().select(1).watch(() => {}).reset().persist().undo();\n")),(0,l.kt)("h2",{id:"-use-case"},"\ud83d\udd28 Use case"),(0,l.kt)("p",null,"For instance, we can use a Selector to select the current logged-in User from a User Collection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const CURRENT_USER = USERS.select(/* current logged-in userId */);\n")),(0,l.kt)("p",null,"If the currently logged-in user logs out and logs in with another user,\nwe can easily update the ",(0,l.kt)("inlineCode",{parentName:"p"},"Item")," (User) that the Selector represents."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"CURRENT_USER.select(/* another userId */);\n")),(0,l.kt)("h2",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),(0,l.kt)("p",null,"Test the Selector yourself. It's only one click away. Just select your preferred Framework below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/agilets-first-selector-rmrxf"},"React")),(0,l.kt)("li",{parentName:"ul"},"Vue (coming soon)"),(0,l.kt)("li",{parentName:"ul"},"Angular (coming soon)")),(0,l.kt)("h2",{id:"-props"},"\ud83d\udced Props"),(0,l.kt)("h3",{id:"itemkey"},(0,l.kt)("inlineCode",{parentName:"h3"},"itemKey")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"itemKey")," of the Item the Selector represents."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"MY_COLLECTION.collect({id: 1, name: 'hans'});\nconst MY_SELECTOR = MY_COLLECTION.select(1);\nMY_SELECTOR.value; // Returns '{id: 1, name: 'hans'}'\n")),(0,l.kt)("h3",{id:"config"},(0,l.kt)("inlineCode",{parentName:"h3"},"config")),(0,l.kt)("p",null,"Beside the initial ",(0,l.kt)("inlineCode",{parentName:"p"},"itemKey")," a ",(0,l.kt)("inlineCode",{parentName:"p"},"Selector")," takes an optional configuration object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createSelector(1, {\n    key: "mySelector",\n});\n')),(0,l.kt)("p",null,"Here is a Typescript Interface for quick reference. However,\neach property is explained in more detail below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SelectorConfigInterface {\n    key?: SelectorKey;\n    isPlaceholder?: boolean;\n}\n")),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"key"},(0,l.kt)("inlineCode",{parentName:"h4"},"key")),(0,l.kt)("p",null,"The optional property ",(0,l.kt)("inlineCode",{parentName:"p"},"key/name")," should be a unique ",(0,l.kt)("inlineCode",{parentName:"p"},"string/number")," to identify the Selector later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createSelector(1, {\n    key: "myKey"\n});\n')),(0,l.kt)("p",null,"We recommend giving each Selector a unique ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," since it has only advantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"helps us during debug sessions"),(0,l.kt)("li",{parentName:"ul"},"makes it easier to identify the Selector"),(0,l.kt)("li",{parentName:"ul"},"no need for separate persist Key")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| number")),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"isplaceholder"},(0,l.kt)("inlineCode",{parentName:"h4"},"isPlaceholder")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This property is mainly thought for internal use."))),(0,l.kt)("p",null,"Defines whether the Selector is a ",(0,l.kt)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_SELECTOR = App.creaateSelector(1, {\n    isPlaceholder: true\n});\n\nMY_SELECTOR.exists(); // false\n")),(0,l.kt)("p",null,"Selectors are ",(0,l.kt)("inlineCode",{parentName:"p"},"placeholder")," when AgileTs needs to hold a reference to them,\neven though they aren't instantiated yet.\nThis can be the case if we use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getSelectorWithReference()")," method,\nwhich returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"placeholder")," Selector if the Selector we are looking for doesn't exist yet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const mySeleector = useAgile(MY_COLLECTION.getSelectorWithReference("selector1")); // Causes rerender if Selector got created\nconst mySeleector2 = useAgile(MY_COLLECTION.getSelector("selector2")); // Doesn\'t causes rerender if Selector got created\n')),(0,l.kt)("p",null,"This reference is essential to rerender the Component,\nwhenever the Selector got instantiated."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"\ud83d\udfe6-typescript"},"\ud83d\udfe6 Typescript"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Selector Class")," is almost 100% typesafe."))}p.isMDXComponent=!0}}]);