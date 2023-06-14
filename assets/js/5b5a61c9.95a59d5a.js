"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[39624],{20505:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Xata",l={unversionedId:"integrations/destinations/xata",id:"integrations/destinations/xata",title:"Xata",description:"Airbyte destination connector for Xata.",source:"@site/../docs/integrations/destinations/xata.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/xata",permalink:"/integrations/destinations/xata",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/xata.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Weaviate",permalink:"/integrations/destinations/weaviate"},next:{title:"Yugabytedb",permalink:"/integrations/destinations/yugabytedb"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"CHANGELOG",id:"changelog",level:2}],c={toc:s},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xata"},"Xata"),(0,r.kt)("p",null,"Airbyte destination connector for Xata."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Currently only ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," is supported."),(0,r.kt)("p",null,"Conventions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"stream")," name will be define the name of the table in Xata."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," data will be mapped one by one to the table schema.")),(0,r.kt)("p",null,"For example, as stream name ",(0,r.kt)("inlineCode",{parentName:"p"},"nyc_taxi_fares_2022")," will attempt to write to a table with the same name.\nIf the message has the following shape:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "name": "Yellow Cab, co",\n    "date": "2022-05-15",\n    "driver": "Joe Doe"\n}\n')),(0,r.kt)("p",null,"the table must have the same columns, mapping the names and ",(0,r.kt)("a",{parentName:"p",href:"https://xata.io/docs/concepts/data-model"},"data types"),", one-by-one."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"In order to connect, you need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API Key: go to your ",(0,r.kt)("a",{parentName:"li",href:"https://app.xata.io/settings"},"account settings")," to generate a key."),(0,r.kt)("li",{parentName:"ul"},"Database URL: navigate to the configuration tab in your workspace and copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"Workspace API base URL"),".")),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-06-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24192"},"#24192")),(0,r.kt)("td",{parentName:"tr",align:"left"},"New Destination Connector Xata")))))}d.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);