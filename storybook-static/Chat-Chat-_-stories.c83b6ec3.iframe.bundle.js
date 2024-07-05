"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[2364],{"./src/Chat/Chat/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Chat/Chat/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_2__.r,title:"Chat/Chat"},User1={id:"1",dateCreate:new Date(2e3,0,0,0,0,0),email:"user1@user1.com",name:"user1"},User2={id:"1",dateCreate:new Date(2e3,0,0,0,0,0),email:"user2@user2.com",name:"user2"},Primary=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.r,{...args})).bind({});Primary.args={chatFormSendMessage:{},chatMessage:new Array(20).fill(1).map(((ele,i)=>({id:"".concat(i*ele),account:i%2==0?User1:User2,right:i%2==0,createdAt:new Date(2e3+i,0,0,0),message:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti velit vero aut, accusantium soluta voluptas, nisi sunt repudiandae perferendis porro id deserunt cupiditate quasi iste provident minima quae nostrum consequatur!"})}))),chatUser:[User1,User2]},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"args => <Chat {...args} />",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]},"./src/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/index.tsx")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const Button=param=>{let{className="",classNameLoader="",children,loader=!1,disabled=!1,onClick=()=>{},onClickDisabled=()=>{},icon="",isBtn=!0,full=!1,size="normal",...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.use_T)({...props}),Tag=isBtn?"button":"div";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag,{onClick:disabled?onClickDisabled:onClick,className:"\n                    fenext-btn\n                    fenext-btn-".concat(loader?"loader":"","\n                    fenext-btn-size-").concat(size,"\n                    ").concat(full?"fenext-btn-size-full":"","\n                    ").concat(className,"\n                "),disabled:loader||disabled,children:[loader&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_2__.aH,{classNameLoader}),icon,_t(children)]})})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loader:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the button is currently in the loading state.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the button is disabled or not.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"intersection",raw:"React.MouseEventHandler<HTMLButtonElement> &\nReact.MouseEventHandler<HTMLDivElement>",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},description:"The callback function that is called when the button is clicked.",defaultValue:{value:"() => {}",computed:!1}},onClickDisabled:{required:!1,tsType:{name:"intersection",raw:"React.MouseEventHandler<HTMLButtonElement> &\nReact.MouseEventHandler<HTMLDivElement>",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},description:"The callback function that is called when the button is clicked as disabled.",defaultValue:{value:"() => {}",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon to display in the button.",defaultValue:{value:'""',computed:!1}},isBtn:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the component should render as a button element.",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'| "extra-small"\n| "small"\n| "normal"\n| "strong"\n| "extra-strong"',elements:[{name:"literal",value:'"extra-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"strong"'},{name:"literal",value:'"extra-strong"'}]},description:"The Size of Button.",defaultValue:{value:'"normal"',computed:!1}},full:{required:!1,tsType:{name:"boolean"},description:"The Size  Full of Button.",defaultValue:{value:"false",computed:!1}},classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}},"./src/Img/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Img});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx"));const Img=param=>{let{className="",classNameImg="",id,name="",src,srcMin1920,srcMin1680,srcMin1440,srcMin1024,srcMin992,srcMin768,srcMin575,imgIf404="",layers=[],onErrorImg:onErrorImg_,onClick,loader=!1}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture",{className:"fenext-picture ".concat(className," id-").concat(id),onClick,children:[srcMin1920?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1920),media:"(min-width: 1920px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin1680?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1680),media:"(min-width: 1680px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin1440?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1440),media:"(min-width: 1440px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin1024?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1024),media:"(min-width: 1024px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin992?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin992),media:"(min-width: 992px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin768?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin768),media:"(min-width: 768px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin575?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin575),media:"(min-width: 575px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),loader&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Line__WEBPACK_IMPORTED_MODULE_2__.a,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"".concat(src),"data-src":"".concat(src),alt:name,className:"fenext-img ".concat(classNameImg),onError:e=>{e.target.src=imgIf404,null==onErrorImg_||onErrorImg_(e)}}),null==layers?void 0:layers.map(((e,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-img-layer",style:e},i)))]})})};Img.__docgenInfo={description:"",methods:[],displayName:"Img",props:{imgIf404:{required:!1,tsType:{name:"string"},description:"Url of Img if img not load.",defaultValue:{value:'""',computed:!1}},layers:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"union",raw:'"background" | "mixBlendMode" | "filter" | "opacity"',elements:[{name:"literal",value:'"background"'},{name:"literal",value:'"mixBlendMode"'},{name:"literal",value:'"filter"'},{name:"literal",value:'"opacity"'}]}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>'}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>[]'},description:"Layers for Img.",defaultValue:{value:"[]",computed:!1}},onErrorImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLImageElement"},{name:"Event"}],raw:"SyntheticEvent<HTMLImageElement, Event>"},name:"e"}],return:{name:"void"}}},description:"onErrorImg."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick."},loader:{required:!1,tsType:{name:"boolean"},description:"loader.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameImg:{required:!1,tsType:{name:"string"},description:"The class name for the component img.",defaultValue:{value:'""',computed:!1}},name:{defaultValue:{value:'""',computed:!1},required:!1},srcMin1920:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1680:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1440:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1024:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin992:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin768:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin575:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["ImgDataProps"]}},"./src/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const Text=param=>{let{className="",tag="p",loader=!1,children,nLineLoader=3,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.use_T)({...props}),Tag=tag;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{className:"fenext-text fenext-text-".concat(tag," ").concat(className," "),children:loader?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-text-loader",children:new Array(nLineLoader).fill((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Line__WEBPACK_IMPORTED_MODULE_2__.a,{}))})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:_t(children)})})})};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{tag:{required:!1,tsType:{name:"union",raw:'| "p"\n| "strong"\n| "small"\n| "em"\n| "b"\n| "del"\n| "i"\n| "mark"\n| "ins"\n| "sub"\n| "sup"',elements:[{name:"literal",value:'"p"'},{name:"literal",value:'"strong"'},{name:"literal",value:'"small"'},{name:"literal",value:'"em"'},{name:"literal",value:'"b"'},{name:"literal",value:'"del"'},{name:"literal",value:'"i"'},{name:"literal",value:'"mark"'},{name:"literal",value:'"ins"'},{name:"literal",value:'"sub"'},{name:"literal",value:'"sup"'}]},description:"The class name for the component.",defaultValue:{value:'"p"',computed:!1}},loader:{required:!1,tsType:{name:"boolean"},description:"The loader for the component.",defaultValue:{value:"false",computed:!1}},nLineLoader:{required:!1,tsType:{name:"number"},description:"The nLineLoader for the component.",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}},"./node_modules/fenextjs-svg/cjs/Pagination/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PaginationDown=exports.PaginationNext=exports.PaginationPre=exports.PaginationUp=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.PaginationUp=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z",fill:"currentColor"}));exports.PaginationPre=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z",fill:"currentColor"}));exports.PaginationNext=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z",fill:"currentColor"}));exports.PaginationDown=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z",fill:"currentColor"}))},"./node_modules/fenextjs-svg/cjs/Telegram/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Telegram=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.Telegram=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 650 650",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M325 77C188.033 77 77 188.033 77 325C77 461.967 188.033 573 325 573C461.967 573 573 461.967 573 325C573 188.033 461.967 77 325 77ZM439.952 245.66C436.22 284.875 420.071 380.038 411.852 423.96C408.376 442.544 401.53 448.776 394.904 449.385C380.504 450.711 369.566 439.868 355.617 430.724C333.79 416.416 321.459 407.509 300.271 393.547C275.786 377.412 291.659 368.547 305.613 354.047C309.265 350.254 372.72 292.537 373.948 287.301C374.101 286.646 374.248 284.201 372.794 282.917C371.34 281.633 369.204 282.068 367.659 282.417C365.47 282.914 330.601 305.962 263.051 351.559C253.154 358.355 244.19 361.666 236.157 361.493C227.302 361.302 210.269 356.487 197.606 352.37C182.075 347.322 169.731 344.653 170.806 336.079C171.366 331.612 177.516 327.046 189.256 322.379C261.553 290.88 309.763 270.114 333.884 260.079C402.756 231.432 417.067 226.456 426.395 226.29C428.447 226.256 433.034 226.764 436.005 229.175C437.981 230.892 439.241 233.289 439.535 235.891C440.038 239.122 440.178 242.398 439.952 245.66V245.66Z",fill:"currentColor"})),exports.default=exports.Telegram}}]);