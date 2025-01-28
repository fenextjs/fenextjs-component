"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1211],{"./src/Pagination/PaginationNPage/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Pagination/PaginationNPage/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Pagination/PaginationNPage",component:_index__WEBPACK_IMPORTED_MODULE_1__.q};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.q,args,"Test Children")}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <PaginationNPage {...args}>Test Children</PaginationNPage>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/SelectT/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>InputSelectT});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Select/index.tsx"),_excluded=["defaultValue","value","options","onChange","onParse"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputSelectT=function InputSelectT(_ref){var defaultValue=_ref.defaultValue,value=_ref.value,options=_ref.options,onChange=_ref.onChange,onParse=_ref.onParse,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Select__WEBPACK_IMPORTED_MODULE_1__.$,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({},props,{defaultValue:defaultValue?onParse(defaultValue):void 0,value:value?onParse(value):void 0,options:options.map(onParse),onChangeData:onChange})))};InputSelectT.__docgenInfo={description:"",methods:[],displayName:"InputSelectT",props:{defaultValue:{required:!1,tsType:{name:"T"},description:"Default Options of select."},value:{required:!1,tsType:{name:"T"},description:"Value Options of select."},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Options of select."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T) => void",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onParse:{required:!0,tsType:{name:"signature",type:"function",raw:"(v?: T) => InputSelectItemOptionBaseProps<T>",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}}},description:"Function for converter T to InputSelectItemOptionBaseProps<T>"}},composes:["Omit"]}},"./src/Pagination/PaginationNPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>PaginationNPageDefaultOptions,q:()=>PaginationNPage});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Input_SelectT__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/SelectT/index.tsx"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["className","options","onChange","paginationName","disabled"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationNPageDefaultOptions=[10,20,50,100],PaginationNPage=function PaginationNPage(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$options=_ref.options,options=void 0===_ref$options?PaginationNPageDefaultOptions:_ref$options,onChange=_ref.onChange,paginationName=_ref.paginationName,disabled=_ref.disabled,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded),_usePagination=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.usePagination)({name:paginationName,onChage:function onChage(e){var _e$npage;null==onChange||onChange(null!==(_e$npage=null==e?void 0:e.npage)&&void 0!==_e$npage?_e$npage:10)}}),onChangeData=_usePagination.onChangeData,_usePagination$data$n=_usePagination.data.npage,npage=void 0===_usePagination$data$n?10:_usePagination$data$n;return __jsx(_Input_SelectT__WEBPACK_IMPORTED_MODULE_1__.L,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props,{className:"fenext-pagination-npage ".concat(className),useItemMaxLengthShowOptions:!1,options,onChange:onChangeData("page"),isSelectChangeText:!1,value:npage,onParse:function onParse(e){return{id:null!=e?e:"",text:"".concat(e),data:e}},disabled}))};PaginationNPage.__docgenInfo={description:"",methods:[],displayName:"PaginationNPage",props:{className:{required:!1,tsType:{name:"string"},description:"CSS class name for the input component.",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameMaxLength:{required:!1,tsType:{name:"string"},description:""},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},classNameOptionImg:{required:!1,tsType:{name:"string"},description:"CSS class name for the option img select."},classNameOptionDelete:{required:!1,tsType:{name:"string"},description:"CSS class name for the delete option select."},classNameSelect:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select."},classNameList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options."},options:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"List NPage for select.",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(npage: number) => void",signature:{arguments:[{type:{name:"number"},name:"npage"}],return:{name:"void"}}},description:"onChange of nPage."},paginationName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["_TProps"]}}}]);