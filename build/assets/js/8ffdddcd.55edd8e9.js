(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[5357],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"introduction",title:"Group",sidebar_label:"Introduction",slug:"/core/collection/group"},l={unversionedId:"packages/core/features/collection/group/introduction",id:"packages/core/features/collection/group/introduction",isDocsHomePage:!1,title:"Group",description:"A Group categorizes and preserves the ordering of structured data.",source:"@site/docs/packages/core/features/collection/group/Introduction.md",sourceDirName:"packages/core/features/collection/group",slug:"/core/collection/group",permalink:"/docs/core/collection/group",editUrl:"https://github.com/kd-singh-dev/documentation/tree/develop/docs/packages/core/features/collection/group/Introduction.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Group",sidebar_label:"Introduction",slug:"/core/collection/group"}},p=[{value:"\ud83c\udf6a <code>default</code> Group",id:"-default-group",children:[]},{value:"\ud83d\udd28 Use case",id:"-use-case",children:[]},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[]},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>initialItems</code>",id:"initialitems",children:[]},{value:"<code>config</code>",id:"config",children:[]}]},{value:"\ud83d\udfe6 Typescript",id:"\ud83d\udfe6-typescript",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Group")," categorizes and preserves the ordering of structured data.\nThey allow us to cluster together data from a Collection as an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"primary Keys"),".\nNote that a Group doesn't store the actual Items. It only keeps track of the ",(0,o.kt)("inlineCode",{parentName:"p"},"primary Keys"),"\nand retrieves the fitting Items when needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// The actual Collection\nCollection\ndata -> [Item('id1'), Item('id2'), Item('id10'), Item('id7'), Item('id5')]\n\n// Group1 which represetns the Collection in a specific order\nGroup1\nvalue  ->  ['id1', 'id5', 'id7']\noutput ->  [Item('id1'), Item('id5'), Item('id7')]\n\n// Group2 which represetns the Collection in another specific order\nGroup2\nvalue  ->  ['id7', 'id1', 'id10', 'id99']\noutput ->  [Item('id7'), Item('id1'), Item('id10'), Item('id99')]\n")),(0,o.kt)("p",null,"We instantiate a Group with the help of an existing ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/collection"},"Collection"),".\nBy doing so, the Group is automatically bound to the Collection it was created from\nand has access to its data.\nA Group can be created during the creation of a Collection in the configuration object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"const MY_COLLECTION = new Collection((collection) =>({\n    groups: {\n        groupName: collection.Group([/*initial Items*/])\n    }\n}));\n\n// or with the name\nconst MY_COLLECTION_2 = new Collection({\n    groups: ['groupName']\n});\n")),(0,o.kt)("p",null,"Or dynamically, after the Collection has been instantiated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const MY_GROUP = MY_COLLECTION.createGroup("groupName", [/*initial Items*/]);\n')),(0,o.kt)("p",null,"A Collection can have as many Groups as we need and won't lose its redundant behavior.\nThis is due to the fact that each Item is stored in the Collection itself and not in the Group.\nYou can imagine a Group like an interface to the Collection Data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createGroup("group1", [1, 2, 3]);\nMY_COLLECTION.createGroup("group2", [2, 5, 8]);\nMY_COLLECTION.createGroup("group5000", [1, 10, 500, 5]);\n')),(0,o.kt)("p",null,"A Group is an extension of the ",(0,o.kt)("inlineCode",{parentName:"p"},"State Class")," and offers the same powerful functionalities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.undo(); // Undo latest change\nMY_GROUP.reset(); // Reset Group to its intial Value\nMY_STATE.persist(); // Persist Group Value into Storage\n")),(0,o.kt)("p",null,"But be aware that the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," might not be the output you expect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_GROUP.value; // Returns '[8, 5, 30, 1]'\n")),(0,o.kt)("p",null,"In a Group, the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property manages the ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryKeys")," a Group represents.\nTo get the Item Value to each ",(0,o.kt)("inlineCode",{parentName:"p"},"primary Key"),", we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_GROUP.output; // Returns '[{ id: 8, name: 'jeff' }, ...]'\n")),(0,o.kt)("p",null,"If you want to find out more about the Group's specific methods, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/collection/group/methods"},"Methods")," Section.\nMost methods we use to modify, mutate and access the Group are chainable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_GROUP.undo().add(1).watch(() => {}).reset().persist().undo().remove(1).replace(2, 3);\n")),(0,o.kt)("h2",{id:"-default-group"},"\ud83c\udf6a ",(0,o.kt)("inlineCode",{parentName:"h2"},"default")," Group"),(0,o.kt)("p",null,"todo"),(0,o.kt)("h2",{id:"-use-case"},"\ud83d\udd28 Use case"),(0,o.kt)("p",null,"For instance, we can use a Group to cluster a Post Collection into 'User Posts' of the different users."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"USERS.collect([userA, userB]); // Add userA and userB to USERS Collection\nPOSTS.collect(userA.posts, userA.id); // Add userA Posts and cluster them by the UserA id\nPOSTS.collect(userB.posts, userB.id); // Add userB Posts and cluster them by the UserB id\nPOSTS.getGroup(userA.id).value; // Returns '[1, 2, 6]' (UserA Posts)\nPOSTS.getGroup(userB.id).value; // Returns '[3, 10, 20]' (UserB Posts)\nPOSTS.getGroup('default').value; // Returns '[1, 2, 3, 4, 5, 6, 10, ..]' (All Posts)\n")),(0,o.kt)("p",null,"In the above code snippet, we have two Collections, one for users and another for posts.\nWe can collect posts specific to a user and automatically group them by the user's id."),(0,o.kt)("h2",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),(0,o.kt)("p",null,"Test the Group yourself. It's only one click away. Just select your preferred Framework below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/agilets-first-group-z5cnk"},"React")),(0,o.kt)("li",{parentName:"ul"},"Vue (coming soon)"),(0,o.kt)("li",{parentName:"ul"},"Angular (coming soon)")),(0,o.kt)("h2",{id:"-props"},"\ud83d\udced Props"),(0,o.kt)("h3",{id:"initialitems"},(0,o.kt)("inlineCode",{parentName:"h3"},"initialItems")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"itemKeys")," of the Items that the Group represents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"const MY_GROUP = MY_COLLECTION.createGroup([1, 2, 3]);\nMY_GROUP.value; // Returns '[1, 2, 3]'\n")),(0,o.kt)("h3",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h3"},"config")),(0,o.kt)("p",null,"Beside the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"\xeetemKeys")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"Group")," takes an optional configuration object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createGroup([1, 2, 3], {\n    key: "myGroup",\n});\n')),(0,o.kt)("p",null,"Here is a Typescript Interface for quick reference. However,\neach property is explained in more detail below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface GroupConfigInterface {\n    key?: GroupKey;\n    isPlaceholder?: boolean;\n}\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"key"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")),(0,o.kt)("p",null,"The optional property ",(0,o.kt)("inlineCode",{parentName:"p"},"key/name")," should be a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"string/number")," to identify the Group later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createGroup([1, 2, 3], {\n    key: "myKey"\n});\n')),(0,o.kt)("p",null,"We recommend giving each Group a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," since it has only advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helps us during debug sessions"),(0,o.kt)("li",{parentName:"ul"},"makes it easier to identify the Group"),(0,o.kt)("li",{parentName:"ul"},"no need for separate persist Key")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| number")),(0,o.kt)("td",{parentName:"tr",align:null},"undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"isplaceholder"},(0,o.kt)("inlineCode",{parentName:"h4"},"isPlaceholder")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This property is mainly thought for the internal use."))),(0,o.kt)("p",null,"Defines whether the Group is a ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_GROUP = App.createGroup([1, 2, 3], {\n    isPlaceholder: true\n});\n\nMY_GROUP.exists(); // false\n")),(0,o.kt)("p",null,"Groups are ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder")," when AgileTs needs to hold a reference to them,\neven though they aren't instantiated yet.\nThis can be the case if we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getGroupWithReference()")," method,\nwhich returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder")," Group if the Group we are looking for doesn't exist yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const myGroup = useAgile(MY_COLLECTION.getGroupWithReference("group1")); // Causes rerender if Group got created\nconst myGroup2 = useAgile(MY_COLLECTION.getGroup("group2")); // Doesn\'t causes rerender if Group got created\n')),(0,o.kt)("p",null,"This reference is essential to rerender the Component,\nwhenever the Group got instantiated."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h2",{id:"\ud83d\udfe6-typescript"},"\ud83d\udfe6 Typescript"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Group Class")," is almost 100% typesafe."))}u.isMDXComponent=!0}}]);