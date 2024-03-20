"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1568],{"./src/Input/Google/Autocomplete/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Google/Autocomplete/index.tsx"),_LoadScript__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/Google/LoadScript/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/Google/Autocomplete",component:_index__WEBPACK_IMPORTED_MODULE_1__.K};var Index=function Profile(args){return __jsx(_LoadScript__WEBPACK_IMPORTED_MODULE_2__.V,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_1__.K,args))}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputGoogleLoadScript>\n        <InputGoogleAutocomplete {...args} />\n    </InputGoogleLoadScript>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Google/Autocomplete/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>InputGoogleAutocomplete});var _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Text/index.tsx"),_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@react-google-maps/api/dist/esm.js"),fenextjs_svg_cjs_Close__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Close/index.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData.js"),_Error__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Error/index.tsx"),fenextjs_error__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-error/cjs/index.js"),_excluded=["onChange","defaultValue","className","validator","errorWithIsChange"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputGoogleAutocomplete=function InputGoogleAutocomplete(_ref){var _defaultValue$formatt,onChange=_ref.onChange,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?void 0:_ref$defaultValue,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,validator=_ref.validator,_ref$errorWithIsChang=_ref.errorWithIsChange,errorWithIsChange=void 0===_ref$errorWithIsChang||_ref$errorWithIsChang,props=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!==(_defaultValue$formatt=null==defaultValue?void 0:defaultValue.formatted_address)&&void 0!==_defaultValue$formatt?_defaultValue$formatt:""),valueText=_useState[0],setValueText=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),error=_useState2[0],setError=_useState2[1],_useData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__.useData)(defaultValue,{onChangeDataAfter:function onChangeDataAfter(d){var _d$formatted_address;null==onChange||onChange(d),setValueText(null!==(_d$formatted_address=null==d?void 0:d.formatted_address)&&void 0!==_d$formatted_address?_d$formatted_address:"")},validator}),setData=_useData.setData,isValidData=_useData.isValidData,isChange=_useData.isChange,_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),autocompleteValue=_useState3[0],setAutocompleteValue=_useState3[1];return __jsx("div",{className:"fenext-input-google-autocomplete ".concat(className)},__jsx("div",{className:"fenext-input-google-autocomplete-content"},__jsx("div",{className:"fenext-input-google-autocomplete-content-input"},__jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.jT,(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.A)({},props,{onLoad:setAutocompleteValue,onPlaceChanged:function onPlaceChanged(){if(autocompleteValue){var _autocompleteValue$ge,place=null==autocompleteValue||null===(_autocompleteValue$ge=autocompleteValue.getPlace)||void 0===_autocompleteValue$ge?void 0:_autocompleteValue$ge.call(autocompleteValue);if(null==place)return void setError(new fenextjs_error__WEBPACK_IMPORTED_MODULE_5__.ErrorGoogleKeyInvalid);setData(place)}}}),__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.S,(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.A)({},props,{validator:void 0,value:valueText,onChange:setValueText,error:void 0})))),__jsx("span",{className:"fenext-input-google-autocomplete-close"},__jsx(fenextjs_svg_cjs_Close__WEBPACK_IMPORTED_MODULE_2__.Close,null))),error&&__jsx(_Error__WEBPACK_IMPORTED_MODULE_4__.A,{error}),(errorWithIsChange&&isChange||!errorWithIsChange)&&isValidData instanceof fenextjs_error__WEBPACK_IMPORTED_MODULE_5__.ErrorFenextjs&&__jsx(_Error__WEBPACK_IMPORTED_MODULE_4__.A,{error:isValidData}))};InputGoogleAutocomplete.__docgenInfo={description:"",methods:[],displayName:"InputGoogleAutocomplete",props:{defaultValue:{required:!1,tsType:{name:"union",raw:"AddressGoogle | undefined",elements:[{name:"AddressGoogle"},{name:"undefined"}]},description:"defaultValue of input.\n@default undefined",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: AddressGoogle | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"AddressGoogle | undefined",elements:[{name:"AddressGoogle"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},validator:{required:!1,tsType:{name:"FenextjsValidatorClass",elements:[{name:"AddressGoogle"}],raw:"FenextjsValidatorClass<AddressGoogle>"},description:"FenextjsValidatorClass used for input validation."},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},className:{defaultValue:{value:'""',computed:!1},required:!1},errorWithIsChange:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["Omit"]}}}]);