"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8688],{15680:(e,n,i)=>{i.d(n,{xA:()=>d,yg:()=>u});var t=i(96540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},d=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(i),h=r,u=c["".concat(p,".").concat(h)]||c[h]||g[h]||a;return i?t.createElement(u,o(o({ref:n},d),{},{components:i})):t.createElement(u,o({ref:n},d))}));function u(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}h.displayName="MDXCreateElement"},45258:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=i(58168),r=(i(96540),i(15680));const a={sidebar_position:0,sidebar_label:"Pixel Perfect Rendering",pagination_title:"Pixel Perfect Rendering",title:"Best Practices for Pixel Perfect Rendering in Canvas Drawings",description:"Best Practices for Pixel Perfect Rendering in Canvas Drawings when creating plugins for the Lightweight Charts",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels"],pagination_prev:null},o=void 0,s={unversionedId:"plugins/pixel-perfect-rendering/index",id:"version-4.1/plugins/pixel-perfect-rendering/index",title:"Best Practices for Pixel Perfect Rendering in Canvas Drawings",description:"Best Practices for Pixel Perfect Rendering in Canvas Drawings when creating plugins for the Lightweight Charts",source:"@site/versioned_docs/version-4.1/plugins/pixel-perfect-rendering/index.md",sourceDirName:"plugins/pixel-perfect-rendering",slug:"/plugins/pixel-perfect-rendering/",permalink:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/",draft:!1,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Pixel Perfect Rendering",pagination_title:"Pixel Perfect Rendering",title:"Best Practices for Pixel Perfect Rendering in Canvas Drawings",description:"Best Practices for Pixel Perfect Rendering in Canvas Drawings when creating plugins for the Lightweight Charts",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels"],pagination_prev:null},sidebar:"docsSidebar",next:{title:"Candlesticks",permalink:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/candlestick"}},p={},l=[{value:"Centered Shapes",id:"centered-shapes",level:2},{value:"Dual Point Shapes",id:"dual-point-shapes",level:2},{value:"Default Widths",id:"default-widths",level:2}],d={toc:l},c="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(c,(0,t.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"To achieve crisp pixel perfect rendering for your plugins, it is recommended that the canvas drawings are created using bitmap coordinates. The difference between media and bitmap coordinate spaces is discussed on the ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/plugins/canvas-rendering-target"},"Canvas Rendering Target")," page. ",(0,r.yg)("strong",{parentName:"p"},"Essentially, all drawing actions should use integer positions and dimensions when on the bitmap coordinate space.")),(0,r.yg)("p",null,"To ensure consistency between your plugins and the library's built-in logic for rendering points on the chart, use of the following calculation functions."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Variable names containing ",(0,r.yg)("inlineCode",{parentName:"p"},"media")," refer to positions / dimensions specified using the media coordinate space (such as the x and y coordinates provided by the library to the renderers), and names containing ",(0,r.yg)("inlineCode",{parentName:"p"},"bitmap")," refer to positions / dimensions on the bitmap coordinate space (actual device screen pixels).")),(0,r.yg)("h2",{id:"centered-shapes"},"Centered Shapes"),(0,r.yg)("p",null,"If you need to draw a shape which is centred on a position (for example a price or x coordinate) and has a desired width then you could use the ",(0,r.yg)("inlineCode",{parentName:"p"},"positionsLine")," function presented below. This can be used for drawing a horizontal line at a specific price, or a vertical line aligned with the centre of series point."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"interface BitmapPositionLength {\n    /** coordinate for use with a bitmap rendering scope */\n    position: number;\n    /** length for use with a bitmap rendering scope */\n    length: number;\n}\n\nfunction centreOffset(lineBitmapWidth: number): number {\n    return Math.floor(lineBitmapWidth * 0.5);\n}\n\n/**\n * Calculates the bitmap position for an item with a desired length (height or width), and centred according to\n * a position coordinate defined in media sizing.\n * @param positionMedia - position coordinate for the bar (in media coordinates)\n * @param pixelRatio - pixel ratio. Either horizontal for x positions, or vertical for y positions\n * @param desiredWidthMedia - desired width (in media coordinates)\n * @returns Position of the start point and length dimension.\n */\nexport function positionsLine(\n    positionMedia: number,\n    pixelRatio: number,\n    desiredWidthMedia: number = 1,\n    widthIsBitmap?: boolean\n): BitmapPositionLength {\n    const scaledPosition = Math.round(pixelRatio * positionMedia);\n    const lineBitmapWidth = widthIsBitmap\n        ? desiredWidthMedia\n        : Math.round(desiredWidthMedia * pixelRatio);\n    const offset = centreOffset(lineBitmapWidth);\n    const position = scaledPosition - offset;\n    return { position, length: lineBitmapWidth };\n}\n")),(0,r.yg)("h2",{id:"dual-point-shapes"},"Dual Point Shapes"),(0,r.yg)("p",null,"If you need to draw a shape between two coordinates (for example, y coordinates for a high and low price) then you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"positionsBox")," function as presented below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Determines the bitmap position and length for a dimension of a shape to be drawn.\n * @param position1Media - media coordinate for the first point\n * @param position2Media - media coordinate for the second point\n * @param pixelRatio - pixel ratio for the corresponding axis (vertical or horizontal)\n * @returns Position of the start point and length dimension.\n */\nexport function positionsBox(\n    position1Media: number,\n    position2Media: number,\n    pixelRatio: number\n): BitmapPositionLength {\n    const scaledPosition1 = Math.round(pixelRatio * position1Media);\n    const scaledPosition2 = Math.round(pixelRatio * position2Media);\n    return {\n        position: Math.min(scaledPosition1, scaledPosition2),\n        length: Math.abs(scaledPosition2 - scaledPosition1) + 1,\n    };\n}\n")),(0,r.yg)("h2",{id:"default-widths"},"Default Widths"),(0,r.yg)("p",null,"Please refer to the following pages for functions defining the default widths of shapes drawn by the library:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/crosshair"},"Crosshair and Grid Lines")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/candlestick"},"Candlesticks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/columns"},"Columns (Histogram)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/full-bar-width"},"Full Bar Width"))))}g.isMDXComponent=!0}}]);