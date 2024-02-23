"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4960,8401],{4435:(e,t,n)=>{n.d(t,{Ay:()=>r});var a=n(58168),l=(n(96540),n(15680));const o={toc:[]},i="wrapper";function r(e){let{components:t,...n}=e;return(0,l.yg)(i,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("details",null,(0,l.yg)("summary",null,"How to use the code sample"),(0,l.yg)("strong",null,"The code presented below requires:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"That ",(0,l.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,l.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,l.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,l.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,l.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,l.yg)("p",null,"Here is an example skeleton setup: ",(0,l.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,l.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}r.isMDXComponent=!0},72713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>c,metadata:()=>O,toc:()=>v});var a=n(58168),l=(n(96540),n(15680)),o=n(7951),i=n(4435),r=n(5546);const m="// remove-start\n// Lightweight Charts\u2122 Example: Price and Volume\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/price-and-volume\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n\trightPriceScale: {\n\t\tborderVisible: false,\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst areaSeries = chart.addAreaSeries({\n\ttopColor: AREA_TOP_COLOR,\n\tbottomColor: AREA_BOTTOM_COLOR,\n\tlineColor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n});\nareaSeries.priceScale().applyOptions({\n\t// highlight-start\n\tscaleMargins: {\n\t\t// positioning the price scale for the area series\n\t\ttop: 0.1,\n\t\tbottom: 0.4,\n\t},\n\t// highlight-end\n});\n\nconst volumeSeries = chart.addHistogramSeries({\n\tcolor: BAR_UP_COLOR,\n\t// highlight-start\n\tpriceFormat: {\n\t\ttype: 'volume',\n\t},\n\tpriceScaleId: '', // set as an overlay by setting a blank priceScaleId\n\t// set the positioning of the volume series\n\tscaleMargins: {\n\t\ttop: 0.7, // highest point of the series will be 70% away from the top\n\t\tbottom: 0,\n\t},\n});\nvolumeSeries.priceScale().applyOptions({\n\tscaleMargins: {\n\t\ttop: 0.7, // highest point of the series will be 70% away from the top\n\t\tbottom: 0,\n\t},\n});\n// highlight-end\n\nareaSeries.setData([\n\t{ time: '2018-10-19', value: 54.90 },\n\t// hide-start\n\t{ time: '2018-10-22', value: 54.98 },\n\t{ time: '2018-10-23', value: 57.21 },\n\t{ time: '2018-10-24', value: 57.42 },\n\t{ time: '2018-10-25', value: 56.43 },\n\t{ time: '2018-10-26', value: 55.51 },\n\t{ time: '2018-10-29', value: 56.48 },\n\t{ time: '2018-10-30', value: 58.18 },\n\t{ time: '2018-10-31', value: 57.09 },\n\t{ time: '2018-11-01', value: 56.05 },\n\t{ time: '2018-11-02', value: 56.63 },\n\t{ time: '2018-11-05', value: 57.21 },\n\t{ time: '2018-11-06', value: 57.21 },\n\t{ time: '2018-11-07', value: 57.65 },\n\t{ time: '2018-11-08', value: 58.27 },\n\t{ time: '2018-11-09', value: 58.46 },\n\t{ time: '2018-11-12', value: 58.72 },\n\t{ time: '2018-11-13', value: 58.66 },\n\t{ time: '2018-11-14', value: 58.94 },\n\t{ time: '2018-11-15', value: 59.08 },\n\t{ time: '2018-11-16', value: 60.21 },\n\t{ time: '2018-11-19', value: 60.62 },\n\t{ time: '2018-11-20', value: 59.46 },\n\t{ time: '2018-11-21', value: 59.16 },\n\t{ time: '2018-11-23', value: 58.64 },\n\t{ time: '2018-11-26', value: 59.17 },\n\t{ time: '2018-11-27', value: 60.65 },\n\t{ time: '2018-11-28', value: 60.06 },\n\t{ time: '2018-11-29', value: 59.45 },\n\t{ time: '2018-11-30', value: 60.30 },\n\t{ time: '2018-12-03', value: 58.16 },\n\t{ time: '2018-12-04', value: 58.09 },\n\t{ time: '2018-12-06', value: 58.08 },\n\t{ time: '2018-12-07', value: 57.68 },\n\t{ time: '2018-12-10', value: 58.27 },\n\t{ time: '2018-12-11', value: 58.85 },\n\t{ time: '2018-12-12', value: 57.25 },\n\t{ time: '2018-12-13', value: 57.09 },\n\t{ time: '2018-12-14', value: 57.08 },\n\t{ time: '2018-12-17', value: 55.95 },\n\t{ time: '2018-12-18', value: 55.65 },\n\t{ time: '2018-12-19', value: 55.86 },\n\t{ time: '2018-12-20', value: 55.07 },\n\t{ time: '2018-12-21', value: 54.92 },\n\t{ time: '2018-12-24', value: 53.05 },\n\t{ time: '2018-12-26', value: 54.44 },\n\t{ time: '2018-12-27', value: 55.15 },\n\t{ time: '2018-12-28', value: 55.27 },\n\t{ time: '2018-12-31', value: 56.22 },\n\t{ time: '2019-01-02', value: 56.02 },\n\t{ time: '2019-01-03', value: 56.22 },\n\t{ time: '2019-01-04', value: 56.36 },\n\t{ time: '2019-01-07', value: 56.72 },\n\t{ time: '2019-01-08', value: 58.38 },\n\t{ time: '2019-01-09', value: 57.05 },\n\t{ time: '2019-01-10', value: 57.60 },\n\t{ time: '2019-01-11', value: 58.02 },\n\t{ time: '2019-01-14', value: 58.03 },\n\t{ time: '2019-01-15', value: 58.10 },\n\t{ time: '2019-01-16', value: 57.08 },\n\t{ time: '2019-01-17', value: 56.83 },\n\t{ time: '2019-01-18', value: 57.09 },\n\t{ time: '2019-01-22', value: 56.99 },\n\t{ time: '2019-01-23', value: 57.76 },\n\t{ time: '2019-01-24', value: 57.07 },\n\t{ time: '2019-01-25', value: 56.40 },\n\t{ time: '2019-01-28', value: 55.07 },\n\t{ time: '2019-01-29', value: 53.28 },\n\t{ time: '2019-01-30', value: 54.00 },\n\t{ time: '2019-01-31', value: 55.06 },\n\t{ time: '2019-02-01', value: 54.55 },\n\t{ time: '2019-02-04', value: 54.04 },\n\t{ time: '2019-02-05', value: 54.14 },\n\t{ time: '2019-02-06', value: 53.79 },\n\t{ time: '2019-02-07', value: 53.57 },\n\t{ time: '2019-02-08', value: 53.95 },\n\t{ time: '2019-02-11', value: 54.05 },\n\t{ time: '2019-02-12', value: 54.42 },\n\t{ time: '2019-02-13', value: 54.48 },\n\t{ time: '2019-02-14', value: 54.03 },\n\t{ time: '2019-02-15', value: 55.16 },\n\t{ time: '2019-02-19', value: 55.44 },\n\t{ time: '2019-02-20', value: 55.76 },\n\t{ time: '2019-02-21', value: 56.15 },\n\t{ time: '2019-02-22', value: 56.92 },\n\t{ time: '2019-02-25', value: 56.78 },\n\t{ time: '2019-02-26', value: 56.64 },\n\t{ time: '2019-02-27', value: 56.72 },\n\t{ time: '2019-02-28', value: 56.92 },\n\t{ time: '2019-03-01', value: 56.96 },\n\t{ time: '2019-03-04', value: 56.24 },\n\t{ time: '2019-03-05', value: 56.08 },\n\t{ time: '2019-03-06', value: 55.68 },\n\t{ time: '2019-03-07', value: 56.30 },\n\t{ time: '2019-03-08', value: 56.53 },\n\t{ time: '2019-03-11', value: 57.58 },\n\t{ time: '2019-03-12', value: 57.43 },\n\t{ time: '2019-03-13', value: 57.66 },\n\t{ time: '2019-03-14', value: 57.95 },\n\t{ time: '2019-03-15', value: 58.39 },\n\t{ time: '2019-03-18', value: 58.07 },\n\t{ time: '2019-03-19', value: 57.50 },\n\t{ time: '2019-03-20', value: 57.67 },\n\t{ time: '2019-03-21', value: 58.29 },\n\t{ time: '2019-03-22', value: 59.76 },\n\t{ time: '2019-03-25', value: 60.08 },\n\t{ time: '2019-03-26', value: 60.63 },\n\t{ time: '2019-03-27', value: 60.88 },\n\t{ time: '2019-03-28', value: 59.08 },\n\t{ time: '2019-03-29', value: 59.13 },\n\t{ time: '2019-04-01', value: 59.09 },\n\t{ time: '2019-04-02', value: 58.53 },\n\t{ time: '2019-04-03', value: 58.87 },\n\t{ time: '2019-04-04', value: 58.99 },\n\t{ time: '2019-04-05', value: 59.09 },\n\t{ time: '2019-04-08', value: 59.13 },\n\t{ time: '2019-04-09', value: 58.40 },\n\t{ time: '2019-04-10', value: 58.61 },\n\t{ time: '2019-04-11', value: 58.56 },\n\t{ time: '2019-04-12', value: 58.74 },\n\t{ time: '2019-04-15', value: 58.71 },\n\t{ time: '2019-04-16', value: 58.79 },\n\t{ time: '2019-04-17', value: 57.78 },\n\t{ time: '2019-04-18', value: 58.04 },\n\t{ time: '2019-04-22', value: 58.37 },\n\t{ time: '2019-04-23', value: 57.15 },\n\t{ time: '2019-04-24', value: 57.08 },\n\t{ time: '2019-04-25', value: 55.85 },\n\t{ time: '2019-04-26', value: 56.58 },\n\t{ time: '2019-04-29', value: 56.84 },\n\t{ time: '2019-04-30', value: 57.19 },\n\t{ time: '2019-05-01', value: 56.52 },\n\t{ time: '2019-05-02', value: 56.99 },\n\t{ time: '2019-05-03', value: 57.24 },\n\t{ time: '2019-05-06', value: 56.91 },\n\t{ time: '2019-05-07', value: 56.63 },\n\t{ time: '2019-05-08', value: 56.38 },\n\t{ time: '2019-05-09', value: 56.48 },\n\t{ time: '2019-05-10', value: 56.91 },\n\t{ time: '2019-05-13', value: 56.75 },\n\t{ time: '2019-05-14', value: 56.55 },\n\t{ time: '2019-05-15', value: 56.81 },\n\t{ time: '2019-05-16', value: 57.38 },\n\t{ time: '2019-05-17', value: 58.09 },\n\t{ time: '2019-05-20', value: 59.01 },\n\t{ time: '2019-05-21', value: 59.50 },\n\t{ time: '2019-05-22', value: 59.25 },\n\t{ time: '2019-05-23', value: 58.87 },\n\t{ time: '2019-05-24', value: 59.32 },\n\t{ time: '2019-05-28', value: 59.57 },\n\t// hide-end\n]);\n\n// setting the data for the volume series.\n// note: we are defining each bars color as part of the data\nvolumeSeries.setData([\n\t{ time: '2018-10-19', value: 19103293.00, color: BAR_UP_COLOR },\n\t// hide-start\n\t{ time: '2018-10-22', value: 21737523.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-23', value: 29328713.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-24', value: 37435638.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-25', value: 25269995.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-10-26', value: 24973311.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-10-29', value: 22103692.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-30', value: 25231199.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-31', value: 24214427.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-01', value: 22533201.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-02', value: 14734412.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-05', value: 12733842.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-06', value: 12371207.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-07', value: 14891287.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-08', value: 12482392.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-09', value: 17365762.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-12', value: 13236769.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-13', value: 13047907.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-14', value: 18288710.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-15', value: 17147123.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-16', value: 19470986.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-19', value: 18405731.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-20', value: 22028957.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-21', value: 18482233.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-23', value: 7009050.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-26', value: 12308876.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-27', value: 14118867.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-28', value: 18662989.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-29', value: 14763658.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-30', value: 31142818.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-03', value: 27795428.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-04', value: 21727411.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-06', value: 26880429.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-07', value: 16948126.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-10', value: 16603356.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-11', value: 14991438.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-12', value: 18892182.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-13', value: 15454706.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-14', value: 13960870.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-17', value: 18902523.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-18', value: 18895777.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-19', value: 20968473.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-20', value: 26897008.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-21', value: 55413082.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-24', value: 15077207.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-26', value: 17970539.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-27', value: 17530977.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-28', value: 14771641.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-31', value: 15331758.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-02', value: 13969691.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-03', value: 19245411.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-04', value: 17035848.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-07', value: 16348982.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-08', value: 21425008.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-09', value: 18136000.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-10', value: 14259910.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-11', value: 15801548.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-14', value: 11342293.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-15', value: 10074386.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-16', value: 13411691.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-17', value: 15223854.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-18', value: 16802516.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-22', value: 18284771.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-23', value: 15109007.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-24', value: 12494109.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-25', value: 17806822.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-28', value: 25955718.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-29', value: 33789235.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-30', value: 27260036.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-31', value: 28585447.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-01', value: 13778392.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-04', value: 15818901.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-05', value: 14124794.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-06', value: 11391442.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-07', value: 12436168.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-08', value: 12011657.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-11', value: 9802798.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-12', value: 11227550.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-13', value: 11884803.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-14', value: 11190094.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-15', value: 15719416.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-19', value: 12272877.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-20', value: 11379006.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-21', value: 14680547.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-22', value: 12534431.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-25', value: 15051182.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-26', value: 12005571.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-27', value: 8962776.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-28', value: 15742971.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-01', value: 10942737.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-04', value: 13674737.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-05', value: 15749545.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-06', value: 13935530.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-07', value: 12644171.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-08', value: 10646710.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-11', value: 13627431.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-12', value: 12812980.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-13', value: 14168350.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-14', value: 12148349.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-15', value: 23715337.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-18', value: 12168133.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-19', value: 13462686.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-20', value: 11903104.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-21', value: 10920129.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-22', value: 25125385.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-25', value: 15463411.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-26', value: 12316901.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-27', value: 13290298.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-28', value: 20547060.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-29', value: 17283871.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-01', value: 16331140.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-02', value: 11408146.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-03', value: 15491724.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-04', value: 8776028.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-05', value: 11497780.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-08', value: 11680538.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-09', value: 10414416.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-10', value: 8782061.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-11', value: 9219930.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-12', value: 10847504.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-15', value: 7741472.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-16', value: 10239261.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-17', value: 15498037.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-18', value: 13189013.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-22', value: 11950365.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-23', value: 23488682.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-24', value: 13227084.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-25', value: 17425466.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-26', value: 16329727.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-29', value: 13984965.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-30', value: 15469002.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-01', value: 11627436.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-02', value: 14435436.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-03', value: 9388228.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-06', value: 10066145.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-07', value: 12963827.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-08', value: 12086743.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-09', value: 14835326.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-10', value: 10707335.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-13', value: 13759350.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-14', value: 12776175.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-15', value: 10806379.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-16', value: 11695064.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-17', value: 14436662.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-20', value: 20910590.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-21', value: 14016315.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-22', value: 11487448.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-23', value: 11707083.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-24', value: 8755506.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-28', value: 3097125.00, color: BAR_UP_COLOR },\n\t// hide-end\n]);\n\nchart.timeScale().fitContent();\n",c={title:"Price and volume on a single chart",sidebar_label:"Price and Volume",description:"An example of how to include both price and volume series on a single chart.",pagination_prev:null,pagination_next:null,keywords:["example"]},u=void 0,O={unversionedId:"how_to/price-and-volume",id:"how_to/price-and-volume",title:"Price and volume on a single chart",description:"An example of how to include both price and volume series on a single chart.",source:"@site/tutorials/how_to/price-and-volume.mdx",sourceDirName:"how_to",slug:"/how_to/price-and-volume",permalink:"/lightweight-charts/tutorials/how_to/price-and-volume",draft:!1,tags:[],version:"current",frontMatter:{title:"Price and volume on a single chart",sidebar_label:"Price and Volume",description:"An example of how to include both price and volume series on a single chart.",pagination_prev:null,pagination_next:null,keywords:["example"]},sidebar:"tutorialsSidebar"},s={},v=[{value:"How to add a volume histogram",id:"how-to-add-a-volume-histogram",level:2},{value:"Resources",id:"resources",level:2},{value:"Full example",id:"full-example",level:2}],_={toc:v},R="wrapper";function d(e){let{components:t,...n}=e;return(0,l.yg)(R,(0,a.A)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.A,{notCurrent:"This example is for the latest published version of Lightweight\xa0Charts.",type:"caution",displayVersionMessage:!0,mdxType:"VersionWarningAdmonition"}),(0,l.yg)("p",null,"This example shows how to include a volume study on your chart."),(0,l.yg)("h2",{id:"how-to-add-a-volume-histogram"},"How to add a volume histogram"),(0,l.yg)("p",null,"An additional series can be added to a chart as an 'overlay' by setting the series'\n",(0,l.yg)("a",{parentName:"p",href:"/docs/api/interfaces/SeriesOptionsCommon#pricescaleid"},(0,l.yg)("inlineCode",{parentName:"a"},"priceScaleId"))," to ",(0,l.yg)("inlineCode",{parentName:"p"},"''"),".\nAn overlay doesn't make use of either the left or right price scale, and it's positioning\nis controlled by setting the ",(0,l.yg)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions#scalemargins"},(0,l.yg)("inlineCode",{parentName:"a"},"scaleMargins")),"\nproperty on the price scale options associated with the series."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const volumeSeries = chart.addHistogramSeries({\n    priceFormat: {\n        type: 'volume',\n    },\n    priceScaleId: '', // set as an overlay by setting a blank priceScaleId\n});\nvolumeSeries.priceScale().applyOptions({\n    // set the positioning of the volume series\n    scaleMargins: {\n        top: 0.7, // highest point of the series will be 70% away from the top\n        bottom: 0,\n    },\n});\n")),(0,l.yg)("p",null,"We are using the ",(0,l.yg)("a",{parentName:"p",href:"/docs/series-types#histogram"},"Histogram")," series type to draw the volume bars.\nWe can set the ",(0,l.yg)("inlineCode",{parentName:"p"},"priceFormat")," option to ",(0,l.yg)("inlineCode",{parentName:"p"},"'volume'")," to have the values display correctly within\nthe crosshair line label."),(0,l.yg)("p",null,"We adjust the position of the overlay series to the bottom 30% of the chart by\nsetting the ",(0,l.yg)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions#scalemargins"},(0,l.yg)("inlineCode",{parentName:"a"},"scaleMargins"))," properties as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"volumeSeries.priceScale().applyOptions({\n    scaleMargins: {\n        top: 0.7, // highest point of the series will be 70% away from the top\n        bottom: 0, // lowest point will be at the very bottom.\n    },\n});\n")),(0,l.yg)("p",null,"Similarly, we can set the position of the main series using the same approach. By setting\nthe ",(0,l.yg)("inlineCode",{parentName:"p"},"bottom")," margin value to ",(0,l.yg)("inlineCode",{parentName:"p"},"0.4")," we can ensure that the two series don't overlap each other."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"mainSeries.priceScale().applyOptions({\n    scaleMargins: {\n        top: 0.1, // highest point of the series will be 10% away from the top\n        bottom: 0.4, // lowest point will be 40% away from the bottom\n    },\n});\n")),(0,l.yg)("p",null,"We can control the color of the histogram bars by directly specifying color inside\nthe data set."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"histogramSeries.setData([\n    { time: '2018-10-19', value: 19103293.0, color: 'green' },\n    { time: '2018-10-20', value: 20345000.0, color: 'red' },\n]);\n")),(0,l.yg)("p",null,"You can see a full ",(0,l.yg)("a",{parentName:"p",href:"#full-example"},"working example")," below."),(0,l.yg)("h2",{id:"resources"},"Resources"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/api#overlaypricescaleoptions"},"OverlayPriceScale Options")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/series-types#histogram"},"Histogram Series Type")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/api/interfaces/PriceFormatBuiltIn#type"},"PriceFormat Types")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/api/interfaces/PriceScaleOptions#scalemargins"},"Scale Margins"))),(0,l.yg)("h2",{id:"full-example"},"Full example"),(0,l.yg)(i.Ay,{mdxType:"UsageGuidePartial"}),(0,l.yg)(r.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},m))}d.isMDXComponent=!0},11963:(e,t,n)=>{n.d(t,{A:()=>O});var a=n(96540),l=n(20053),o=n(17559),i=n(21312);const r={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const m={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}function O(e){const{children:t,type:n,title:i,icon:O}=u(e),s=function(e){const t=c[e]??e,n=m[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),v=i??s.label,{iconComponent:_}=s,R=O??a.createElement(_,null);return a.createElement("div",{className:(0,l.A)(o.G.common.admonition,o.G.common.admonitionType(e.type),"alert",`alert--${s.infimaClassName}`,r.admonition)},a.createElement("div",{className:r.admonitionHeading},a.createElement("span",{className:r.admonitionIcon},R),v),a.createElement("div",{className:r.admonitionContent},t))}},5546:(e,t,n)=>{n.d(t,{Ay:()=>p});var a=n(96540),l=n(77964),o=n(78478),i=n(95293),r=n(55597),m=n(6715);function c(e,t,n){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();n(e.width,e.height)}),!0)}const u={3.8:async e=>{const t=await n.e(3409).then(n.bind(n,73409));return{module:t,createChart:(n,a)=>{const l=t.createChart(n,a);return c(e,n,l.resize.bind(l)),l}}},"4.0":async e=>{const t=await n.e(7476).then(n.bind(n,37476));return{module:t,createChart:(n,a)=>{const l=t.createChart(n,a);return c(e,n,l.resize.bind(l)),l}}},4.1:async e=>{const t=await n.e(9631).then(n.bind(n,59631));return{module:t,createChart:(n,a)=>{const l=t.createChart(n,a);return c(e,n,l.resize.bind(l)),l}}},current:async()=>{const e=await n.e(7839).then(n.bind(n,47839));return{module:e,createChart:(t,n)=>{const a=e.createChart(t,n);return c(window,t,a.resize.bind(a)),a}}}},O="iframe_R_Fr";function s(e){const{script:t,iframeStyle:n}=e,{preferredVersion:l}=(0,r.g1)(),o=m&&m.length>0?m[0]:"",i=l?.name??o??"current",c=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),s=a.useRef(null);return a.useEffect((()=>{const e=s.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;const a=async()=>{try{const{module:e,createChart:n}=await u[i](t);Object.assign(t,e),t.createChart=n,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)a();else{const t=()=>{a(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[c]),a.createElement("iframe",{key:t,ref:s,srcDoc:c,className:O,style:n})}var v=n(82840);const _=()=>`${Math.random().toString(36).slice(2,11)}`;function R(e){return"string"==typeof e?e:function(){const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>t(_())),[]),e}()}const d=Object.keys(v.k.DARK);const p=e=>{const{chart:t,replaceThemeConstants:n,hideableCode:r,chartOnly:m,iframeStyle:c,...u}=e;let{children:_}=e;const{colorMode:p}=(0,i.G)(),C="dark"===p,h=R();return n&&"string"==typeof _&&(_=function(e,t){const n=t?v.k.DARK:v.k.LIGHT;let a=e;for(const l of d)a=a.replace(new RegExp(l,"g"),`'${n[l]}'`);return a}(_,C)),_=_.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||r?a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("input",{id:h,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:h},"Show all code")),!m&&a.createElement(l.A,u,_),t&&a.createElement(o.A,{fallback:a.createElement("div",{className:O},"\xa0")},(()=>a.createElement(s,{script:_,iframeStyle:c})))):a.createElement(l.A,u,_)}},7951:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(55597),l=n(11963),o=n(96540),i=n(6715);function r(e){let{notCurrent:t,isCurrent:n,type:r,title:m,displayVersionMessage:c}=e;const{preferredVersion:u,savePreferredVersionName:O}=(0,a.g1)(),s=Boolean(t&&!u?.isLast),v=Boolean(n&&u?.isLast),_=i&&i.length>0?i[0]:"",R=u?.label??u?.name??"";if(!s&&!v||!R)return o.createElement(o.Fragment,null);let d=(s?t:n)??"";return d=d.replace(/DOC_VERSION/g,R).replace(/CURRENT_VERSION/g,_),o.createElement("div",null,o.createElement(l.A,{type:r,title:m},o.createElement("p",null,d),c&&o.createElement("p",null,"You are currently viewing the documentation for the version tagged:"," ",o.createElement("strong",null,R),". ",o.createElement("br",null),o.createElement("strong",null,o.createElement("a",{href:"",onClick:()=>O(_)},"Switch to the latest published version"))," ","(",_,")")))}},82840:(e,t,n)=>{n.d(t,{k:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:e=>{e.exports=["4.1","4.0","3.8"]}}]);