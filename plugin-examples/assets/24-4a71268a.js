var x=Object.defineProperty;var d=(a,t,e)=>t in a?x(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e);import{T as m}from"./lightweight-charts.production-ee3671a1.js";import{g as w}from"./sample-data-c7d89ab8.js";class T{constructor(t,e,i,o,s){n(this,"_p1");n(this,"_p2");n(this,"_text1");n(this,"_text2");n(this,"_options");this._p1=t,this._p2=e,this._text1=i,this._text2=o,this._options=s}draw(t){t.useBitmapCoordinateSpace(e=>{if(this._p1.x===null||this._p1.y===null||this._p2.x===null||this._p2.y===null)return;const i=e.context,o=Math.round(this._p1.x*e.horizontalPixelRatio),s=Math.round(this._p1.y*e.verticalPixelRatio),r=Math.round(this._p2.x*e.horizontalPixelRatio),c=Math.round(this._p2.y*e.verticalPixelRatio);i.lineWidth=this._options.width,i.strokeStyle=this._options.lineColor,i.beginPath(),i.moveTo(o,s),i.lineTo(r,c),i.stroke(),this._drawTextLabel(e,this._text1,o,s,!0),this._drawTextLabel(e,this._text2,r,c,!1)})}_drawTextLabel(t,e,i,o,s){t.context.font="24px Arial",t.context.beginPath();const r=5*t.horizontalPixelRatio,c=t.context.measureText(e),p=s?c.width+r*4:0;t.context.fillStyle=this._options.labelBackgroundColor,t.context.roundRect(i+r-p,o-24,c.width+r*2,24+r,5),t.context.fill(),t.context.beginPath(),t.context.fillStyle=this._options.labelTextColor,t.context.fillText(e,i+r*2-p,o)}}class f{constructor(t){n(this,"_source");n(this,"_p1",{x:null,y:null});n(this,"_p2",{x:null,y:null});this._source=t}update(){const t=this._source._series,e=t.priceToCoordinate(this._source._p1.price),i=t.priceToCoordinate(this._source._p2.price),o=this._source._chart.timeScale(),s=o.timeToCoordinate(this._source._p1.time),r=o.timeToCoordinate(this._source._p2.time);this._p1={x:s,y:e},this._p2={x:r,y:i}}renderer(){return new T(this._p1,this._p2,""+this._source._p1.price.toFixed(1),""+this._source._p2.price.toFixed(1),this._source._options)}}const P={lineColor:"rgb(0, 0, 0)",width:6,showLabels:!0,labelBackgroundColor:"rgba(255, 255, 255, 0.85)",labelTextColor:"rgb(0, 0, 0)"};class S{constructor(t,e,i,o,s){n(this,"_chart");n(this,"_series");n(this,"_p1");n(this,"_p2");n(this,"_paneViews");n(this,"_options");n(this,"_minPrice");n(this,"_maxPrice");this._chart=t,this._series=e,this._p1=i,this._p2=o,this._minPrice=Math.min(this._p1.price,this._p2.price),this._maxPrice=Math.max(this._p1.price,this._p2.price),this._options={...P,...s},this._paneViews=[new f(this)]}autoscaleInfo(t,e){const i=this._pointIndex(this._p1),o=this._pointIndex(this._p2);return i===null||o===null||e<i||t>o?null:{priceRange:{minValue:this._minPrice,maxValue:this._maxPrice}}}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}_pointIndex(t){const e=this._chart.timeScale().timeToCoordinate(t.time);return e===null?null:this._chart.timeScale().coordinateToLogical(e)}}const u=window.chart=m("chart",{autoSize:!0}),_=u.addLineSeries(),l=w();_.setData(l);const h=l.length,b={time:l[h-50].time,price:l[h-50].value*.9},g={time:l[h-5].time,price:l[h-5].value*1.1},y=new S(u,_,b,g);_.attachPrimitive(y);
