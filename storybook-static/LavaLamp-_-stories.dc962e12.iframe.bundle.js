"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[687],{"./src/LavaLamp/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/LavaLamp/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"LavaLamp/LavaLamp",component:_index__WEBPACK_IMPORTED_MODULE_1__.t};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.t,args)}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <LavaLamp {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/LavaLamp/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>LavaLamp});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var LavaLamp=function LavaLamp(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$nItems=_ref.nItems,nItems=void 0===_ref$nItems?20:_ref$nItems,_ref$styles=_ref.styles,styles=void 0===_ref$styles?{width:"100%",height:"500px",background:"linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)"}:_ref$styles,_ref$stylesElement=_ref.stylesElement,stylesElement=void 0===_ref$stylesElement?[{width:"150px",aspectRatio:"2/1.5",borderRadius:"30% 70% 70% 30% / 68% 30% 70% 32% ",background:"linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)",animationTimingFunction:"ease"},{width:"100px",aspectRatio:"1 / 1",borderRadius:"30% 70% 44% 56% / 23% 46% 54% 77% ",background:"linear-gradient(75deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)",animationTimingFunction:"ease-out"},{width:"100px",aspectRatio:"1 / 1",borderRadius:"87% 13% 65% 35% / 46% 46% 54% 54% ",background:"linear-gradient(135deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)",animationTimingFunction:"linear"}]:_ref$stylesElement,_ref$ranges=_ref.ranges,ranges=void 0===_ref$ranges?{}:_ref$ranges,getNumberRandom=function getNumberRandom(_ref2){var min=_ref2.min,max=_ref2.max;return Math.trunc(Math.random()*(max-min)+min)},getPosRandom=function getPosRandom(){var _ranges$top,_ranges$left;return{top:"".concat(getNumberRandom(null!==(_ranges$top=null==ranges?void 0:ranges.top)&&void 0!==_ranges$top?_ranges$top:{min:20,max:80}),"%"),left:"".concat(getNumberRandom(null!==(_ranges$left=null==ranges?void 0:ranges.left)&&void 0!==_ranges$left?_ranges$left:{min:20,max:80}),"%")}},getVarRandom=function getVarRandom(){var _ranges$scale,_ranges$moveX,_ranges$moveY,_ranges$time;return(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)({},"--scale",getNumberRandom(null!==(_ranges$scale=null==ranges?void 0:ranges.scale)&&void 0!==_ranges$scale?_ranges$scale:{min:50,max:100})/10),"--move-X","".concat(getNumberRandom(null!==(_ranges$moveX=null==ranges?void 0:ranges.moveX)&&void 0!==_ranges$moveX?_ranges$moveX:{min:-300,max:300}),"%")),"--move-Y","".concat(getNumberRandom(null!==(_ranges$moveY=null==ranges?void 0:ranges.moveY)&&void 0!==_ranges$moveY?_ranges$moveY:{min:-300,max:300}),"%")),"--time","".concat(getNumberRandom(null!==(_ranges$time=null==ranges?void 0:ranges.time)&&void 0!==_ranges$time?_ranges$time:{min:30,max:50})/10,"s"))};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-lava-lamp ".concat(className," "),style:styles},new Array(nItems).fill(1).map((function(e,i){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:e*i,className:"fenext-lava-lamp-item",style:_objectSpread(_objectSpread(_objectSpread({},stylesElement[Math.trunc(i%stylesElement.length)]),getPosRandom()),getVarRandom())}))}))))};LavaLamp.__docgenInfo={description:"",methods:[],displayName:"LavaLamp",props:{nItems:{required:!1,tsType:{name:"number"},description:"The number items elements.",defaultValue:{value:"20",computed:!1}},styles:{required:!1,tsType:{name:"CSSProperties"},description:"The styles of elements.",defaultValue:{value:'{\n    width: "100%",\n    height: "500px",\n    background: `linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)`,\n}',computed:!1}},ranges:{required:!1,tsType:{name:"LavaLampRangeStylesProps"},description:"The styles of elements.",defaultValue:{value:"{}",computed:!1}},stylesElement:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"CSSProperties"},{name:"union",raw:'| "borderRadius"\n| "aspectRatio"\n| "width"\n| "background"\n| "animationTimingFunction"',elements:[{name:"literal",value:'"borderRadius"'},{name:"literal",value:'"aspectRatio"'},{name:"literal",value:'"width"'},{name:"literal",value:'"background"'},{name:"literal",value:'"animationTimingFunction"'}]}],raw:'Pick<\n    CSSProperties,\n    | "borderRadius"\n    | "aspectRatio"\n    | "width"\n    | "background"\n    | "animationTimingFunction"\n>'}],raw:"LavaLampStylesElement[]"},description:"The styles of elemens.",defaultValue:{value:'[\n    {\n        width: "150px",\n        aspectRatio: "2/1.5",\n        borderRadius: "30% 70% 70% 30% / 68% 30% 70% 32% ",\n        background: `linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)`,\n        animationTimingFunction: "ease",\n    },\n    {\n        width: "100px",\n        aspectRatio: "1 / 1",\n        borderRadius: "30% 70% 44% 56% / 23% 46% 54% 77% ",\n        background: `linear-gradient(75deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)`,\n        animationTimingFunction: "ease-out",\n    },\n    {\n        width: "100px",\n        aspectRatio: "1 / 1",\n        borderRadius: "87% 13% 65% 35% / 46% 46% 54% 54% ",\n        background: `linear-gradient(135deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)`,\n        animationTimingFunction: "linear",\n    },\n]',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}}}]);