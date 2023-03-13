"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4226],{27571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="Metabase",o={unversionedId:"integrations/sources/metabase",id:"integrations/sources/metabase",title:"Metabase",description:"This page contains the setup guide and reference information for the Metabase source connector.",source:"@site/../docs/integrations/sources/metabase.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/metabase",permalink:"/integrations/sources/metabase",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/metabase.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Marketo",permalink:"/integrations/sources/marketo"},next:{title:"Microsoft Dataverse",permalink:"/integrations/sources/microsoft-dataverse"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metabase"},"Metabase"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for the Metabase source connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To set up Metabase you need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," - Credential pairs to authenticate with Metabase instance. This may be used to generate a new ",(0,r.kt)("inlineCode",{parentName:"li"},"session_token")," if necessary. An email from Metabase may be sent to the owner's account everytime this is being used to open a new session."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session_token")," - Credential token to authenticate requests sent to Metabase API. Usually expires after 14 days.   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instance_api_url")," - URL to interact with metabase instance API, that uses https.")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"You can find or create authentication tokens from ",(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/learn/administration/metabase-api.html#authenticate-your-requests-with-a-session-token"},"Metabase")," by running the following command:`"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{"username": "person@metabase.com", "password": "fakepassword"}\' \\\nhttp://localhost:3000/api/session\n')),(0,r.kt)("p",null,"If you\u2019re working with a remote server, you\u2019ll need to replace localhost:3000 with your server address. This request will return a JSON object with a key called id and the token as the key\u2019s value, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"id":"38f4939c-ad7f-4cbe-ae54-30946daf8593"}\n')),(0,r.kt)("p",null,"You can use this id value as your ",(0,r.kt)("inlineCode",{parentName:"p"},"session_token")," when configuring the connector.\nNote that these credentials tokens may expire after 14 days by default, and you might need to update your connector configuration with a new value when that happens (The connector should throw exceptions about Invalid and expired session tokens and return a 401 (Unauthorized) status code in that scenario)."),(0,r.kt)("p",null,"If you are hosting your own metabase instance, you can configure this session duration on your metabase server by setting the environment variable MAX_SESSION_AGE (value is in minutes)."),(0,r.kt)("p",null,"If the connector is supplied with only username and password, a session_token will be generated everytime an\nauthenticated query is running, which might trigger security alerts on the user's metabase account."),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Metabase source connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite"))),(0,r.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.metabase.com/docs/latest/api/activity.html#get-apiactivity"},"Activity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.metabase.com/docs/latest/api/card.html#get-apicard"},"Card")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.metabase.com/docs/latest/api/collection.html#get-apicollection"},"Collections")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.metabase.com/docs/latest/api/dashboard.html#get-apidashboard"},"Dashboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.metabase.com/docs/latest/api/user.html#get-apiuser"},"User"))),(0,r.kt)("h2",{id:"tutorials"},"Tutorials"),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-15"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20535"},"20535")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Run on CDK 0.15.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-13"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19236"},"19236")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Migrate to YAML.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18607"},"18607")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disallow using ",(0,r.kt)("inlineCode",{parentName:"td"},"http")," URLs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-15"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13752"},"6975")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial (alpha) release")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);