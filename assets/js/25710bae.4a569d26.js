"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[20727],{24578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var s=r(87462),a=(r(67294),r(3905));const o={},p="PrestaShop",n={unversionedId:"integrations/sources/prestashop",id:"integrations/sources/prestashop",title:"PrestaShop",description:"This page contains the setup guide and reference information for the PrestaShop source connector.",source:"@site/../docs/integrations/sources/prestashop.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/prestashop",permalink:"/integrations/sources/prestashop",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/prestashop.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Postmarkapp",permalink:"/integrations/sources/postmarkapp"},next:{title:"Primetric",permalink:"/integrations/sources/primetric"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up PrestaShop",id:"step-1-set-up-prestashop",level:3},{value:"Step 2: Set up the PrestaShop connector in Airbyte",id:"step-2-set-up-the-prestashop-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"CHANGELOG",id:"changelog",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prestashop"},"PrestaShop"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the PrestaShop source connector."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access Key"),(0,a.kt)("li",{parentName:"ul"},"Shop URL"),(0,a.kt)("li",{parentName:"ul"},"Start date")),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"step-1-set-up-prestashop"},"Step 1: Set up PrestaShop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By default, the webservice feature is disabled on PrestaShop and needs to be ",(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/tutorials/creating-access/#enable-the-webservice"},"switched on"),"."),(0,a.kt)("li",{parentName:"ol"},"To get access to the PrestaShop API you need to create an access key, please follow the instructions in this ",(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop-project.org/1.7/webservice/tutorials/creating-access/#create-an-access-key"},"documentation"),".")),(0,a.kt)("h3",{id:"step-2-set-up-the-prestashop-connector-in-airbyte"},"Step 2: Set up the PrestaShop connector in Airbyte"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,a.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,a.kt)("strong",{parentName:"li"},"PrestaShop")," from the Source type dropdown and enter a name for this connector."),(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("strong",{parentName:"li"},"Access Key")," that you obtained."),(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("strong",{parentName:"li"},"Shop URL")," without trailing slash, for example, ",(0,a.kt)("a",{parentName:"li",href:"https://my.prestashop.com"},"https://my.prestashop.com"),", only HTTPS urls are supported."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Start date")," in YYYY-MM-DD format. The data added on and after this date will be replicated.")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The PrestaShop source connector supports the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"This connector outputs the following full refresh streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/carriers/"},"Carriers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/combinations/"},"Combinations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/contacts/"},"Contacts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/content_management_system/"},"Content Management System")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/countries/"},"Countries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/currencies/"},"Currencies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/deliveries/"},"Deliveries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/employees/"},"Employees")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/guests/"},"Guests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/image_types/"},"Image Types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/languages/"},"Languages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_details/"},"Order Details")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_states/"},"Order States")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/price_ranges/"},"Price Ranges")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_customization_fields/"},"Product Customization Fields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_feature_values/"},"Product Feature Values")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_features/"},"Product Features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_option_values/"},"Product Option Values")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_suppliers/"},"Product Suppliers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/shop_groups/"},"ShopGroups")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/shop_urls/"},"ShopUrls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/shops/"},"Shops")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/specific_price_rules/"},"Specific Price Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/specific_prices/"},"Specific Prices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/states/"},"States")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stock_availables/"},"Stock Availables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/tags/"},"Tags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/tax_rules/"},"Tax Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/taxes/"},"Taxes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/translated_configurations/"},"Translated Configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/weight_ranges/"},"Weight Ranges")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/zones/"},"Zones"))),(0,a.kt)("p",null,"This connector outputs the following incremental streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/addresses/"},"Addresses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/cart_rules/"},"Cart Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/carts/"},"Carts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/categories/"},"Categories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/configurations/"},"Configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/customer_messages/"},"Customer Messages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/customer_threads/"},"Customer Threads")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/customers/"},"Customers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/groups/"},"Groups")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/manufacturers/"},"Manufacturers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/messages/"},"Messages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_carriers/"},"Order Carriers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_histories/"},"Order Histories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_invoices/"},"Order Invoices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_payments/"},"Order Payments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_slip/"},"Order Slip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/orders/"},"Orders")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/products/"},"Products")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stock_movement_reasons/"},"Stock Movement Reasons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stock_movements/"},"Stock Movements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stores/"},"Stores")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/suppliers/"},"Suppliers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/tax_rule_groups/"},"Tax Rule Groups"))),(0,a.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,a.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2023-02-13"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22905"},"22905")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-11-08"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18927"},"#18927")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Migrate connector from Alpha (Python) to Beta (YAML)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-31"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18599"},"#18599")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Only https scheme is allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-07-02"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4465"},"#4465")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Initial implementation")))))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var s=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=s.createContext({}),c=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?s.createElement(d,p(p({ref:t},l),{},{components:r})):s.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=h;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n[u]="string"==typeof e?e:a,p[1]=n;for(var c=2;c<o;c++)p[c]=r[c];return s.createElement.apply(null,p)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);