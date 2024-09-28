(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8103],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1110:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/collection/properties"},i={unversionedId:"packages/core/features/collection/properties",id:"packages/core/features/collection/properties",isDocsHomePage:!1,title:"Properties",description:"Here are valuable properties of the Collection Class listed.",source:"@site/docs/packages/core/features/collection/Properties.md",sourceDirName:"packages/core/features/collection",slug:"/core/collection/properties",permalink:"/docs/core/collection/properties",editUrl:"https://github.com/kd-singh-dev/documentation/tree/develop/docs/packages/core/features/collection/Properties.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Properties",frontMatter:{id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/collection/properties"}},s=[{value:"<code>agileInstance</code>",id:"agileinstance",children:[{value:"\ud83d\udcc4 Return",id:"-return",children:[]}]},{value:"<code>key</code>",id:"key",children:[{value:"\ud83d\udcc4 Return",id:"-return-1",children:[]}]},{value:"<code>size</code>",id:"size",children:[{value:"\ud83d\udcc4 Return",id:"-return-2",children:[]}]},{value:"<code>data</code>",id:"data",children:[{value:"\ud83d\udcc4 Return",id:"-return-3",children:[]}]},{value:"<code>isPersisted</code>",id:"ispersisted",children:[{value:"\ud83d\udcc4 Return",id:"-return-4",children:[]}]},{value:"<code>groups</code>",id:"groups",children:[{value:"\ud83d\udcc4 Return",id:"-return-5",children:[]}]},{value:"<code>selectors</code>",id:"selectors",children:[{value:"\ud83d\udcc4 Return",id:"-return-6",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Here are valuable properties of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Collection Class")," listed."))),(0,l.kt)("h2",{id:"agileinstance"},(0,l.kt)("inlineCode",{parentName:"h2"},"agileInstance")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/agile-instance"},(0,l.kt)("inlineCode",{parentName:"a"},"agileInstance"))," to which the Collection belongs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.agileInstance(); // Returns a Agile Instance\n")),(0,l.kt)("p",null,"Be aware that the ",(0,l.kt)("inlineCode",{parentName:"p"},"agileInstance")," property is of the type ",(0,l.kt)("inlineCode",{parentName:"p"},"function"),",\nto avoid endless deep classes."),(0,l.kt)("h3",{id:"-return"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Agile\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"key"},(0,l.kt)("inlineCode",{parentName:"h2"},"key")),(0,l.kt)("p",null,"The current ",(0,l.kt)("inlineCode",{parentName:"p"},"key/name")," of the Collection,\nwhich is used for a unique identification."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"const MY_COLLECTION = App.createCollection({key: 'jeffKey'});\nMY_COLLECTION.key; // Returns 'jeffKey'\n")),(0,l.kt)("p",null,"Besides accessing the ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", we can also assign a new ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," using this property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"MY_COLLECTION.key = \"myCoolCollection\";\nMY_COLLECTION.key; // Returns 'myCoolCollection'\n")),(0,l.kt)("h3",{id:"-return-1"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"string | number\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h2"},"size")),(0,l.kt)("p",null,"Returns how many Items the Collection currently stores."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},'MY_COLLECTION.collect({id: 1, name: "jeff"});\nMY_COLLECTION.collect({id: 5, name: "frank"});\nMY_COLLECTION.size; // Returns \'2\'\n')),(0,l.kt)("p",null,"Placeholder Items don't get counted."),(0,l.kt)("h3",{id:"-return-2"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"number\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h2"},"data")),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," object all ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection#-item"},"Items")," of the Collection are stored."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},'MY_COLLECTION.collect({id: 1, name: "jeff"});\nMY_COLLECTION.collect({id: 5, name: "frank"});\nMY_COLLECTION.data; // Returns (see below)\n// {\n//   1: Item({id: 1, name: "jeff"}),\n//   5: Item({id: 5, name: "frank"})\n// }\n')),(0,l.kt)("p",null,"It is best not to touch the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," object at all\nand use the functions provided by the Collection to mutate and get access to it instead.\nFor example, to get one specific Item, we should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getItem()")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"MY_COLLECTION.getItem(1); // Good pattern\nMY_COLLECTION.data[1]; // Bad pattern\n")),(0,l.kt)("h3",{id:"-return-3"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{ [key: string]: Item<DataType> }\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"ispersisted"},(0,l.kt)("inlineCode",{parentName:"h2"},"isPersisted")),(0,l.kt)("p",null,"If the Collection ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," is stored in an external Storage like the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/Window/localStorage"},"Local Storage"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1,3}","{1,3}":!0},"MY_COLLECTION.isPersisted; // Returns 'false'\nMY_COLLECTION.persist();\nMY_COLLECTION.isPersisted; // Returns 'true' if the persist was successful\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," of the Collection includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default")," Group"),(0,l.kt)("li",{parentName:"ul"},"all Items ")),(0,l.kt)("p",null,"All other Instances that refer to the Collection have to be persisted separately if desired."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COOL_GROUP.persist();\n")),(0,l.kt)("h3",{id:"-return-4"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"boolean\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"groups"},(0,l.kt)("inlineCode",{parentName:"h2"},"groups")),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"groups")," object all ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/group"},"Groups")," of the Collection are stored."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},'MY_COLLECTION.createGroup("group1", [1, 2, 3]);\nMY_COLLECTION.createGroup("group2", [1, 7, 4]);\nMY_COLLECTION.groups; // Returns (see below)\n// {\n//   group1: Group([1, 2, 3]),\n//   group2: Group([1, 7, 4])\n// }\n')),(0,l.kt)("p",null,"It is best not to touch the ",(0,l.kt)("inlineCode",{parentName:"p"},"groups")," object at all\nand use the functions provided by the Collection to mutate and get access to it instead.\nFor example, to get one specific Group, we should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getGroup()")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"MY_COLLECTION.getGroup(1); // Good pattern\nMY_COLLECTION.groups[1]; // Bad pattern\n")),(0,l.kt)("h3",{id:"-return-5"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{ [key: string]: Group<DataType> }\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"selectors"},(0,l.kt)("inlineCode",{parentName:"h2"},"selectors")),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"selectors")," object all ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/selector"},"Selectors")," of the Collection are stored."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},'MY_COLLECTION.createSelector("selector1", 1);\nMY_COLLECTION.createSelector("selector2", 7);\nMY_COLLECTION.selectors; // Returns (see below)\n// {\n//   selector1: Selector(1),\n//   selector2: Selector(7)\n// }\n')),(0,l.kt)("p",null,"It is best not to touch the ",(0,l.kt)("inlineCode",{parentName:"p"},"selectors")," object at all\nand use the functions provided by the Collection to mutate and get access to it instead.\nFor example, to get one specific Selector, we should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getSelector()")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"MY_COLLECTION.getSelector(1); // Good pattern\nMY_COLLECTION.selectors[1]; // Bad pattern\n")),(0,l.kt)("h3",{id:"-return-6"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{ [key: string]: Selector<DataType> }\n")))}p.isMDXComponent=!0}}]);