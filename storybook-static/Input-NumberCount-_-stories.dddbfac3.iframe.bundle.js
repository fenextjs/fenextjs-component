"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[7174],{"./src/Input/NumberCount/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,UseValidator:()=>UseValidator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/NumberCount/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputNumberCount",component:_index__WEBPACK_IMPORTED_MODULE_2__.P};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__.P,args,"Test Children")},Index=Profile.bind({});Index.args={label:"Label",placeholder:"Placeholder",min:20,max:30};var UseValidator=Profile.bind({}),UseValidatorArg={label:"Label",placeholder:"Placeholder",validator:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_1__.y)().isNumber().isRequired().isMin(4)};UseValidator.args=UseValidatorArg,Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputNumberCount {...args}>Test Children</InputNumberCount>",...Index.parameters?.docs?.source}}},UseValidator.parameters={...UseValidator.parameters,docs:{...UseValidator.parameters?.docs,source:{originalSource:"args => <InputNumberCount {...args}>Test Children</InputNumberCount>",...UseValidator.parameters?.docs?.source}}};const __namedExportsOrder=["Index","UseValidator"]},"./src/Input/NumberCount/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>InputNumberCount});var _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Text/index.tsx"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData.js"),fenextjs_functions_cjs_parse_NumberCount__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/NumberCount/index.js"),fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/Number/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js"),_excluded=["onChange","value","defaultValue","symbolInit","symbolFinal","validator","min","max","minError","maxError","optionsParseNumber"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputNumberCount=function InputNumberCount(_ref){var _ref2,_props$className,onChange=_ref.onChange,_ref$value=_ref.value,value=void 0===_ref$value?void 0:_ref$value,defaultValue=_ref.defaultValue,_ref$symbolInit=_ref.symbolInit,symbolInit=void 0===_ref$symbolInit?"$":_ref$symbolInit,_ref$symbolFinal=_ref.symbolFinal,symbolFinal=void 0===_ref$symbolFinal?"":_ref$symbolFinal,_ref$validator=_ref.validator,validatorProps=void 0===_ref$validator?void 0:_ref$validator,_ref$min=_ref.min,min=void 0===_ref$min?-1/0:_ref$min,_ref$max=_ref.max,max=void 0===_ref$max?1/0:_ref$max,minError=_ref.minError,maxError=_ref.maxError,optionsParseNumber=_ref.optionsParseNumber,props=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__.A)(_ref,_excluded),_useData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_2__.useData)("".concat(null!==(_ref2=null!=value?value:defaultValue)&&void 0!==_ref2?_ref2:""),{onChangeDataAfter:function onChangeDataAfter(e){""!=e?null==onChange||onChange((0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_4__.parseNumber)(e)):null==onChange||onChange("")}}),data=_useData.data,setData=_useData.setData,isChange=_useData.isChange,validator=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var v=null!=validatorProps?validatorProps:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_6__.y)().isNumber();return validatorProps||v.isMinOrEqual(min,minError).isMaxOrEqual(max,maxError),v}),[validatorProps,min,max]),errorFenext=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__.useValidator)({data:(0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_4__.parseNumber)(data),validator}).error,dataText=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var d="".concat(null!=value?value:data);if(""==d)return"";var n=(0,fenextjs_functions_cjs_parse_NumberCount__WEBPACK_IMPORTED_MODULE_3__.parseNumberCount)(d,optionsParseNumber);return"".concat(symbolInit).concat(n).concat("."==d.at(-1)?".":symbolFinal)}),[symbolInit,symbolFinal,data,value,optionsParseNumber]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.S,(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.A)({},props,{className:"fenext-input-number-count ".concat(null!==(_props$className=null==props?void 0:props.className)&&void 0!==_props$className?_props$className:""),onChange:function onChangeNumber(number){var n="".concat(number).replace(/[^0-9.-]/g,"");setData(n)},type:"text",value:dataText,isChange,validator:void 0,error:errorFenext,inputMode:"numeric"})))};InputNumberCount.__docgenInfo={description:"",methods:[],displayName:"InputNumberCount",props:{symbolInit:{required:!1,tsType:{name:"string"},description:"symbol of money in de Init, default $.",defaultValue:{value:'"$"',computed:!1}},symbolFinal:{required:!1,tsType:{name:"string"},description:"symbol of money in the final.",defaultValue:{value:'""',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:'The default value of the input.\n@default ""'},value:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:"The value of the input.\n@default undefined",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:'(v: number | "") => void',signature:{arguments:[{type:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},name:"v"}],return:{name:"void"}}},description:"The callback function that is triggered when the value of the input changes."},min:{required:!1,tsType:{name:"number"},description:"The minimum value allowed for the input.",defaultValue:{value:"-Infinity",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum value allowed for the input.",defaultValue:{value:"Infinity",computed:!0}},minError:{required:!1,tsType:{name:"string"},description:"The minimum value allowed for the input."},maxError:{required:!1,tsType:{name:"string"},description:"The maximum value allowed for the input."},validator:{required:!1,tsType:{name:"FenextjsValidatorClass",elements:[{name:"number"}],raw:"FenextjsValidatorClass<number>"},description:"FenextjsValidatorClass used for input validation.",defaultValue:{value:"undefined",computed:!0}},optionsParseNumber:{required:!1,tsType:{name:"Intl.NumberFormatOptions"},description:"optionsParseNumber used for input validation."},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."}},composes:["Omit"]}}}]);