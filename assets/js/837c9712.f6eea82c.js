"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[93009],{62362:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},i="Mixpanel",p={unversionedId:"integrations/sources/mixpanel",id:"integrations/sources/mixpanel",title:"Mixpanel",description:"This page contains the setup guide and reference information for the Mixpanel source connector.",source:"@site/../docs/integrations/sources/mixpanel.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/mixpanel",permalink:"/integrations/sources/mixpanel",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/mixpanel.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Microsoft Teams",permalink:"/integrations/sources/microsoft-teams"},next:{title:"Monday",permalink:"/integrations/sources/monday"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Mixpanel connector in Airbyte",id:"set-up-the-mixpanel-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"CHANGELOG",id:"changelog",level:2}],d={toc:m},s="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mixpanel"},"Mixpanel"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Mixpanel source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To set up the Mixpanel source connector, you'll need a Mixpanel ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mixpanel.com/reference/service-accounts"},"Service Account")," and it's ",(0,n.kt)("a",{parentName:"p",href:"https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings#project-id"},"Project ID"),", the ",(0,n.kt)("a",{parentName:"p",href:"https://help.mixpanel.com/hc/en-us/articles/115004547203-Manage-Timezones-for-Projects-in-Mixpanel"},"Project Timezone"),", and the Project region (",(0,n.kt)("inlineCode",{parentName:"p"},"US")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"EU"),")."),(0,n.kt)("h2",{id:"set-up-the-mixpanel-connector-in-airbyte"},"Set up the Mixpanel connector in Airbyte"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," or navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Mixpanel")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter the name for the Mixpanel connector."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Authentication"),", select ",(0,n.kt)("strong",{parentName:"li"},"Service Account")," from the dropdown and enter the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/service-accounts"},"Mixpanel Service Account secret"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Project ID"),", enter the ",(0,n.kt)("a",{parentName:"li",href:"https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings#project-id"},"Mixpanel Project ID"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Attribution Window"),", enter the number of days for the length of the attribution window."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Project Timezone"),", enter the ",(0,n.kt)("a",{parentName:"li",href:"https://help.mixpanel.com/hc/en-us/articles/115004547203-Manage-Timezones-for-Projects-in-Mixpanel"},"timezone")," for your Mixpanel project."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. If left blank, the connector will replicate data from up to one year ago by default."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"End Date"),", enter the date in YYYY-MM-DD format. "),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Region"),", enter the ",(0,n.kt)("a",{parentName:"li",href:"https://help.mixpanel.com/hc/en-us/articles/360039135652-Data-Residency-in-EU"},"region")," for your Mixpanel project."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Date slicing window"),", enter the number of days to slice through data. If you encounter RAM usage issues due to a huge amount of data in each window, try using a lower value for this parameter."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Mixpanel source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,n.kt)("p",null,"Note: Incremental sync returns duplicated ","(","old records",")"," for the state date due to API filter limitation, which is granular to the whole day only."),(0,n.kt)("h3",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/raw-event-export"},"Export")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/engage-query"},"Engage")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/funnels-query"},"Funnels")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/engage-query"},"Revenue")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/overview-1"},"Annotations")," ","(","Full table",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/cohorts-list"},"Cohorts")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/engage-query"},"Cohort Members")," ","(","Incremental",")")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Syncing huge date windows may take longer due to Mixpanel's low API rate-limits ","(",(0,n.kt)("strong",{parentName:"p"},"60 reqs per hour"),")","."),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.36"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27752"},"27752")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Partially revert version 0.1.32; Use exponential backoff;")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.35"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27252"},"27252")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add  should_retry False for 402 error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21837"},"21837")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Add "insert_id" field to "export" stream schema')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.33"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25543"},"25543")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set should_retry for 104 error in stream export")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25056"},"25056")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set HttpAvailabilityStrategy, add exponential backoff, streams export and annotations add undeclared fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.31"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22936"},"22936")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22017"},"22017")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,n.kt)("inlineCode",{parentName:"td"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18846"},"18846")),(0,n.kt)("td",{parentName:"tr",align:"left"},'For "export" stream make line parsing more robust')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17699"},"17699")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix discover step issue cursor field None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17415"},"17415")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Disable stream "cohort_members" on discover if not access')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17145"},"17145")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Disable streams "export", "engage" on discover if not access')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16915"},"16915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added Service Accounts support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16843"},"16843")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add stream=True for ",(0,n.kt)("inlineCode",{parentName:"td"},"export")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16770"},"16770")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Use "Retry-After" header for backoff')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16191"},"16191")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved connector's input configuration validation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15091"},"15091")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve ",(0,n.kt)("inlineCode",{parentName:"td"},"export")," stream cursor support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15739"},"15739")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,n.kt)("inlineCode",{parentName:"td"},"titile")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"description")," for ",(0,n.kt)("inlineCode",{parentName:"td"},"Project Secret")," field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from schemas and specs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13372"},"12801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Acceptance tests fix, fixing some bugs for beta release")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12801"},"12801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add end_date parameter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"12482")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11501"},"11501")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve incremental sync method to streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12335"},"12335")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adding fixtures to mock time.sleep for connectors that explicitly sleep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11633"},"11633")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increase unit test coverage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11318"},"11318")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change Response Reading")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11227"},"11227")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix cohort id always null in the cohort_members stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8578"},"8429")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated titles and descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8381"},"8381")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increased performance for ",(0,n.kt)("inlineCode",{parentName:"td"},"discovery")," stage during connector setup")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/8256"},"8256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deleted ",(0,n.kt)("inlineCode",{parentName:"td"},"date_window_size")," and fix schemas date type issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7451"},"7451")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," older than 1 year")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7505"},"7505")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Guarantee that standard and custom mixpanel properties in the ",(0,n.kt)("inlineCode",{parentName:"td"},"Engage")," stream are written as strings")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7439"},"7439")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added delay for all streams to match API limitation of requests rate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/6075"},"6075")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added option to select project region")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/3698"},"3698")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Created CDK native mixpanel connector")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(a),f=n,k=s["".concat(o,".").concat(f)]||s[f]||c[f]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);