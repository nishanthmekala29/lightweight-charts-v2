"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1195],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,h=d["".concat(p,".").concat(m)]||d[m]||y[m]||i;return t?n.createElement(h,l(l({ref:a},s),{},{components:t})):n.createElement(h,l({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var g={};for(var p in a)hasOwnProperty.call(a,p)&&(g[p]=a[p]);g.originalType=e,g[d]="string"==typeof e?e:r,l[1]=g;for(var o=2;o<i;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97975:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>g,toc:()=>o});var n=t(58168),r=(t(96540),t(15680));const i={id:"ITimeScaleApi",title:"Interface: ITimeScaleApi",sidebar_label:"ITimeScaleApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,g={unversionedId:"api/interfaces/ITimeScaleApi",id:"version-3.8/api/interfaces/ITimeScaleApi",title:"Interface: ITimeScaleApi",description:"Interface to chart time scale",source:"@site/versioned_docs/version-3.8/api/interfaces/ITimeScaleApi.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ITimeScaleApi",permalink:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"ITimeScaleApi",title:"Interface: ITimeScaleApi",sidebar_label:"ITimeScaleApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},o=[{value:"Methods",id:"methods",level:2},{value:"scrollPosition",id:"scrollposition",level:3},{value:"Returns",id:"returns",level:4},{value:"scrollToPosition",id:"scrolltoposition",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"scrollToRealTime",id:"scrolltorealtime",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getVisibleRange",id:"getvisiblerange",level:3},{value:"Returns",id:"returns-3",level:4},{value:"setVisibleRange",id:"setvisiblerange",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getVisibleLogicalRange",id:"getvisiblelogicalrange",level:3},{value:"Returns",id:"returns-5",level:4},{value:"setVisibleLogicalRange",id:"setvisiblelogicalrange",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"resetTimeScale",id:"resettimescale",level:3},{value:"Returns",id:"returns-7",level:4},{value:"fitContent",id:"fitcontent",level:3},{value:"Returns",id:"returns-8",level:4},{value:"logicalToCoordinate",id:"logicaltocoordinate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"coordinateToLogical",id:"coordinatetological",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"timeToCoordinate",id:"timetocoordinate",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"coordinateToTime",id:"coordinatetotime",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"width",id:"width",level:3},{value:"Returns",id:"returns-13",level:4},{value:"height",id:"height",level:3},{value:"Returns",id:"returns-14",level:4},{value:"subscribeVisibleTimeRangeChange",id:"subscribevisibletimerangechange",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-15",level:4},{value:"unsubscribeVisibleTimeRangeChange",id:"unsubscribevisibletimerangechange",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-16",level:4},{value:"subscribeVisibleLogicalRangeChange",id:"subscribevisiblelogicalrangechange",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-17",level:4},{value:"unsubscribeVisibleLogicalRangeChange",id:"unsubscribevisiblelogicalrangechange",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-18",level:4},{value:"subscribeSizeChange",id:"subscribesizechange",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-19",level:4},{value:"unsubscribeSizeChange",id:"unsubscribesizechange",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-20",level:4},{value:"applyOptions",id:"applyoptions",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-21",level:4},{value:"options",id:"options",level:3},{value:"Returns",id:"returns-22",level:4}],s={toc:o},d="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Interface to chart time scale"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"scrollposition"},"scrollPosition"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"scrollPosition"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,"Return the distance from the right edge of the time scale to the lastest bar of the series measured in bars."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"scrolltoposition"},"scrollToPosition"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"scrollToPosition"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"position"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"animated"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Scrolls the chart to the specified position."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"position")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Target data position")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"animated")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Setting this to true makes the chart scrolling smooth and adds animation")))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"scrolltorealtime"},"scrollToRealTime"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"scrollToRealTime"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Restores default scroll position of the chart. This process is always animated."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getvisiblerange"},"getVisibleRange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getVisibleRange"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#timerange"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeRange"))),(0,r.yg)("p",null,"Returns current visible time range of the chart."),(0,r.yg)("p",null,"Note that this method cannot extrapolate time and will use the only currently existent data.\nTo get complete information about current visible range, please use ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#getvisiblelogicalrange"},"getVisibleLogicalRange")," and ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi#barsinlogicalrange"},"barsInLogicalRange"),"."),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#timerange"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeRange"))),(0,r.yg)("p",null,"Visible range or null if the chart has no data at all."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setvisiblerange"},"setVisibleRange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setVisibleRange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"range"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Sets visible range of data."),(0,r.yg)("p",null,"Note that this method cannot extrapolate time and will use the only currently existent data.\nThus, for example, if currently a chart doesn't have data prior ",(0,r.yg)("inlineCode",{parentName:"p"},"2018-01-01")," date and you set visible range with ",(0,r.yg)("inlineCode",{parentName:"p"},"from")," date ",(0,r.yg)("inlineCode",{parentName:"p"},"2016-01-01"),", it will be automatically adjusted to ",(0,r.yg)("inlineCode",{parentName:"p"},"2018-01-01")," (and the same for ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," date)."),(0,r.yg)("p",null,"But if you can approximate indexes on your own - you could use ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#setvisiblelogicalrange"},"setVisibleLogicalRange")," instead."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"chart.timeScale().setVisibleRange({\n    from: (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0))).getTime() / 1000,\n    to: (new Date(Date.UTC(2018, 1, 1, 0, 0, 0, 0))).getTime() / 1000,\n});\n")),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"range")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#timerange"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeRange"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Target visible range of data.")))),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getvisiblelogicalrange"},"getVisibleLogicalRange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getVisibleLogicalRange"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#logicalrange"},(0,r.yg)("inlineCode",{parentName:"a"},"LogicalRange"))),(0,r.yg)("p",null,"Returns the current visible ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/time-scale#logical-range"},"logical range")," of the chart as an object with the first and last time points of the logical range, or returns ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if the chart has no data."),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#logicalrange"},(0,r.yg)("inlineCode",{parentName:"a"},"LogicalRange"))),(0,r.yg)("p",null,"Visible range or null if the chart has no data at all."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setvisiblelogicalrange"},"setVisibleLogicalRange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setVisibleLogicalRange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"range"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Sets visible ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/time-scale#logical-range"},"logical range")," of data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"chart.timeScale().setVisibleLogicalRange({ from: 0, to: Date.now() / 1000 });\n")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"range")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/Range"},(0,r.yg)("inlineCode",{parentName:"a"},"Range")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"number"),">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Target visible logical range of data.")))),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"resettimescale"},"resetTimeScale"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"resetTimeScale"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Restores default zoom level and scroll position of the time scale."),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"fitcontent"},"fitContent"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"fitContent"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Automatically calculates the visible range to fit all data from all series."),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logicaltocoordinate"},"logicalToCoordinate"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"logicalToCoordinate"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"logical"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#coordinate"},(0,r.yg)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.yg)("p",null,"Converts a logical index to local x coordinate."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"logical")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#logical"},(0,r.yg)("inlineCode",{parentName:"a"},"Logical"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Logical index needs to be converted")))),(0,r.yg)("h4",{id:"returns-9"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#coordinate"},(0,r.yg)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.yg)("p",null,"x coordinate of that time or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if the chart doesn't have data"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"coordinatetological"},"coordinateToLogical"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"coordinateToLogical"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"x"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#logical"},(0,r.yg)("inlineCode",{parentName:"a"},"Logical"))),(0,r.yg)("p",null,"Converts a coordinate to logical index."),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"x")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Coordinate needs to be converted")))),(0,r.yg)("h4",{id:"returns-10"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#logical"},(0,r.yg)("inlineCode",{parentName:"a"},"Logical"))),(0,r.yg)("p",null,"Logical index that is located on that coordinate or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if the chart doesn't have data"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"timetocoordinate"},"timeToCoordinate"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"timeToCoordinate"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"time"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#coordinate"},(0,r.yg)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.yg)("p",null,"Converts a time to local x coordinate."),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"time")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#time"},(0,r.yg)("inlineCode",{parentName:"a"},"Time"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Time needs to be converted")))),(0,r.yg)("h4",{id:"returns-11"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#coordinate"},(0,r.yg)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.yg)("p",null,"X coordinate of that time or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if no time found on time scale"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"coordinatetotime"},"coordinateToTime"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"coordinateToTime"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"x"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,r.yg)("inlineCode",{parentName:"a"},"Time"))),(0,r.yg)("p",null,"Converts a coordinate to time."),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"x")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Coordinate needs to be converted.")))),(0,r.yg)("h4",{id:"returns-12"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,r.yg)("inlineCode",{parentName:"a"},"Time"))),(0,r.yg)("p",null,"Time of a bar that is located on that coordinate or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if there are no bars found on that coordinate."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"width"},"width"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"width"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,"Returns a width of the time scale."),(0,r.yg)("h4",{id:"returns-13"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"height"},"height"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"height"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,"Returns a height of the time scale."),(0,r.yg)("h4",{id:"returns-14"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"subscribevisibletimerangechange"},"subscribeVisibleTimeRangeChange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribeVisibleTimeRangeChange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Subscribe to the visible time range change events."),(0,r.yg)("p",null,"The argument passed to the handler function is an object with ",(0,r.yg)("inlineCode",{parentName:"p"},"from")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," properties of type ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},"Time"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if there is no visible data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function myVisibleTimeRangeChangeHandler(newVisibleTimeRange) {\n    if (newVisibleTimeRange === null) {\n        // handle null\n    }\n\n    // handle new logical range\n}\n\nchart.timeScale().subscribeVisibleTimeRangeChange(myVisibleTimeRangeChangeHandler);\n")),(0,r.yg)("h4",{id:"parameters-7"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#timerangechangeeventhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeRangeChangeEventHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Handler (function) to be called when the visible indexes change.")))),(0,r.yg)("h4",{id:"returns-15"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribevisibletimerangechange"},"unsubscribeVisibleTimeRangeChange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribeVisibleTimeRangeChange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#subscribevisibletimerangechange"},"subscribeVisibleTimeRangeChange"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"chart.timeScale().unsubscribeVisibleTimeRangeChange(myVisibleTimeRangeChangeHandler);\n")),(0,r.yg)("h4",{id:"parameters-8"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#timerangechangeeventhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeRangeChangeEventHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,r.yg)("h4",{id:"returns-16"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"subscribevisiblelogicalrangechange"},"subscribeVisibleLogicalRangeChange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribeVisibleLogicalRangeChange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Subscribe to the visible logical range change events."),(0,r.yg)("p",null,"The argument passed to the handler function is an object with ",(0,r.yg)("inlineCode",{parentName:"p"},"from")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," properties of type ",(0,r.yg)("inlineCode",{parentName:"p"},"number"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if there is no visible data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function myVisibleLogicalRangeChangeHandler(newVisibleLogicalRange) {\n    if (newVisibleLogicalRange === null) {\n        // handle null\n    }\n\n    // handle new logical range\n}\n\nchart.timeScale().subscribeVisibleLogicalRangeChange(myVisibleLogicalRangeChangeHandler);\n")),(0,r.yg)("h4",{id:"parameters-9"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#logicalrangechangeeventhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"LogicalRangeChangeEventHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Handler (function) to be called when the visible indexes change.")))),(0,r.yg)("h4",{id:"returns-17"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribevisiblelogicalrangechange"},"unsubscribeVisibleLogicalRangeChange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribeVisibleLogicalRangeChange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#subscribevisiblelogicalrangechange"},"subscribeVisibleLogicalRangeChange"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"chart.timeScale().unsubscribeVisibleLogicalRangeChange(myVisibleLogicalRangeChangeHandler);\n")),(0,r.yg)("h4",{id:"parameters-10"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#logicalrangechangeeventhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"LogicalRangeChangeEventHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,r.yg)("h4",{id:"returns-18"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"subscribesizechange"},"subscribeSizeChange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribeSizeChange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Adds a subscription to time scale size changes"),(0,r.yg)("h4",{id:"parameters-11"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#sizechangeeventhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"SizeChangeEventHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Handler (function) to be called when the time scale size changes")))),(0,r.yg)("h4",{id:"returns-19"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribesizechange"},"unsubscribeSizeChange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribeSizeChange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Removes a subscription to time scale size changes"),(0,r.yg)("h4",{id:"parameters-12"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#sizechangeeventhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"SizeChangeEventHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,r.yg)("h4",{id:"returns-20"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"applyoptions"},"applyOptions"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"applyOptions"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Applies new options to the time scale."),(0,r.yg)("h4",{id:"parameters-13"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,r.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/TimeScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeScaleOptions")),">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Any subset of options.")))),(0,r.yg)("h4",{id:"returns-21"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"options"},"options"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"options"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/TimeScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeScaleOptions")),">"),(0,r.yg)("p",null,"Returns current options"),(0,r.yg)("h4",{id:"returns-22"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/TimeScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeScaleOptions")),">"),(0,r.yg)("p",null,"Currently applied options"))}y.isMDXComponent=!0}}]);