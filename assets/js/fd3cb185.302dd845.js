(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8605],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return s},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(o),u=r,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=o[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8534:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a={id:"recipes",title:"Recipes",sidebar_label:"Recipes",slug:"/core/collection/recipes"},l={unversionedId:"packages/core/features/collection/recipes",id:"packages/core/features/collection/recipes",isDocsHomePage:!1,title:"Recipes",description:"WIP Section",source:"@site/docs/packages/core/features/collection/Recipes.md",sourceDirName:"packages/core/features/collection",slug:"/core/collection/recipes",permalink:"/kdsinghcoder.github.io/docs/core/collection/recipes",editUrl:"https://github.com/kdsinghcoder/documentation/tree/develop/docs/packages/core/features/collection/Recipes.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Recipes",frontMatter:{id:"recipes",title:"Recipes",sidebar_label:"Recipes",slug:"/core/collection/recipes"}},c=[{value:"How to get all Items from a Collection?",id:"how-to-get-all-items-from-a-collection",children:[]},{value:"How to get single Item from Collection?",id:"how-to-get-single-item-from-collection",children:[]},{value:"How to remove Item from Collection?",id:"how-to-remove-item-from-collection",children:[]},{value:"How to add Item to Collection?",id:"how-to-add-item-to-collection",children:[]},{value:"How to update Item in Collection?",id:"how-to-update-item-in-collection",children:[]},{value:"How to store Collection permanently?",id:"how-to-store-collection-permanently",children:[]}],m={toc:c};function s(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"WIP Section"))),(0,i.kt)("h2",{id:"how-to-get-all-items-from-a-collection"},"How to get all Items from a Collection?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"getallitems"},(0,i.kt)("a",{parentName:"h4",href:"/kdsinghcoder.github.io/docs/core/collection/methods#getallitems"},(0,i.kt)("inlineCode",{parentName:"a"},"getAllItems()"))),(0,i.kt)("p",{parentName:"li"},"Returns all Items"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"}," MY_COLLECTION.getAllItems(); // Returns '[Item(99), Item(1), Item(2)]'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"getallitemvalues"},(0,i.kt)("a",{parentName:"h4",href:"/kdsinghcoder.github.io/docs/core/collection/methods#getallitemvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"getAllItemValues()"))),(0,i.kt)("p",{parentName:"li"},"Returns the values of all Items"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},' MY_COLLECTION.getAllItemValues(); // Returns (see below)\n /* [\n      {id: 99, name: "frank"}, \n      {id: 1, name: "jeff"}, \n      {id: 2, name: "hans"}\n    ]\n */\n')))),(0,i.kt)("h2",{id:"how-to-get-single-item-from-collection"},"How to get single Item from Collection?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"getitem"},(0,i.kt)("a",{parentName:"h4",href:"/kdsinghcoder.github.io/docs/core/collection/methods#getitem"},(0,i.kt)("inlineCode",{parentName:"a"},"getItem()"))),"Returns an Item at a specific ",(0,i.kt)("inlineCode",{parentName:"li"},"primary Key"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"}," MY_COLLECTION.getItem(/* primary Key */); // Returns Item at the primary Key\n")))),(0,i.kt)("h2",{id:"how-to-remove-item-from-collection"},"How to remove Item from Collection?"),(0,i.kt)("h2",{id:"how-to-add-item-to-collection"},"How to add Item to Collection?"),(0,i.kt)("h2",{id:"how-to-update-item-in-collection"},"How to update Item in Collection?"),(0,i.kt)("h2",{id:"how-to-store-collection-permanently"},"How to store Collection permanently?"))}s.isMDXComponent=!0}}]);