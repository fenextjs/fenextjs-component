"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9044],{"./src/Print/Page/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Print/Page/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Print/Page",component:_index__WEBPACK_IMPORTED_MODULE_2__.$},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.$,{...args})).bind({});Index.args={url:"/",data:{},onComponent:param=>{let{data,load}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["Data:",JSON.stringify(null!=data?data:{})," ",load?"load":""]})})}},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <PrintPage {...args} />",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Print/Page/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>PrintPage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const PrintPage=param=>{let{className="",onComponent,...props}=param;const{data,load}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__.usePrintData)(props),COMPONENT=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>null==onComponent?void 0:onComponent({data,load})),[data,load]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-print-page ".concat(className," "),children:COMPONENT})})};PrintPage.__docgenInfo={description:"",methods:[],displayName:"PrintPage",props:{onComponent:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PrintPageComponentProps<T>) => ReactNode",signature:{arguments:[{type:{name:"PrintPageComponentProps",elements:[{name:"T"}],raw:"PrintPageComponentProps<T>"},name:"data"}],return:{name:"ReactNode"}}},description:"The class name for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["usePrintDataProps"]}}}]);