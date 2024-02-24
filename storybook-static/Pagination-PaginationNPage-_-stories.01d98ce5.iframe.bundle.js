"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1211],{"./src/Pagination/PaginationNPage/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Pagination/PaginationNPage/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Pagination/PaginationNPage",component:_index__WEBPACK_IMPORTED_MODULE_1__.q};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.q,args,"Test Children")};Profile.displayName="Profile";var Index=Profile.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <PaginationNPage {...args}>Test Children</PaginationNPage>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Pagination/PaginationNPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>PaginationNPage});var _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Input_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Select/index.tsx"),_excluded=["className","listNpage","onChangeNPage"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationNPage=function PaginationNPage(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$listNpage=_ref.listNpage,listNpage=void 0===_ref$listNpage?[{id:"10",text:"10"},{id:"20",text:"20"},{id:"50",text:"50"},{id:"100",text:"100"},{id:"all",text:"All"}]:_ref$listNpage,onChangeNPage=_ref.onChangeNPage,props=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx("div",{className:"fenext-pagination-npage ".concat(className)},__jsx(_Input_Select__WEBPACK_IMPORTED_MODULE_1__.$,(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({options:listNpage,onChange:onChangeNPage,defaultValue:listNpage[0],isSelectChangeText:!1},props)))};PaginationNPage.displayName="PaginationNPage";try{PaginationNPage.displayName="PaginationNPage",PaginationNPage.__docgenInfo={description:"",displayName:"PaginationNPage",props:{className:{defaultValue:{value:""},description:"CSS class for the main container of the pagination.",name:"className",required:!1,type:{name:"string"}},listNpage:{defaultValue:{value:'[\n        {\n            id: "10",\n            text: "10",\n        },\n        {\n            id: "20",\n            text: "20",\n        },\n        {\n            id: "50",\n            text: "50",\n        },\n        {\n            id: "100",\n            text: "100",\n        },\n        {\n            id: "all",\n            text: "All",\n        },\n    ]'},description:"List NPage for select.",name:"listNpage",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>[]"}},onChangeNPage:{defaultValue:null,description:"onChange of nPage.",name:"onChangeNPage",required:!1,type:{name:"((v?: InputSelectItemOptionBaseProps<any>) => void)"}},loader:{defaultValue:null,description:"Loader of Input.",name:"loader",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of Input.",name:"name",required:!1,type:{name:"any"}},props:{defaultValue:null,description:"Additional properties to pass to the input component.",name:"props",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"Default Options of select.",name:"defaultValue",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>"}},value:{defaultValue:null,description:"Value Options of select.",name:"value",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>"}},id:{defaultValue:null,description:"ID of Input.",name:"id",required:!1,type:{name:"any"}},datalist:{defaultValue:null,description:"Datalist name of Input.",name:"datalist",required:!1,type:{name:"any"}},validator:{defaultValue:null,description:"FenextjsValidatorClass used for input validation.",name:"validator",required:!1,type:{name:"FenextjsValidatorClass<any>"}},label:{defaultValue:null,description:"Label text to display for the input.",name:"label",required:!1,type:{name:"any"}},placeholder:{defaultValue:null,description:"Placeholder text to display in the input field.",name:"placeholder",required:!1,type:{name:"string"}},onChangeValidate:{defaultValue:null,description:"Function to call for custom input validation.",name:"onChangeValidate",required:!1,type:{name:"((e?: InputSelectItemOptionBaseProps<any>) => any)"}},icon:{defaultValue:null,description:"Icon to display inside the input field.",name:"icon",required:!1,type:{name:"any"}},iconPos:{defaultValue:null,description:"Position of Icon to display inside the input field.",name:"iconPos",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},extraInContentInput:{defaultValue:null,description:"Extra content to display inside the input container.",name:"extraInContentInput",required:!1,type:{name:"any"}},extraInLabel:{defaultValue:null,description:"Extra content to display inside the input label.",name:"extraInLabel",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"Boolean value indicating whether the input field is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"Boolean value indicating whether to display the input icon.",name:"showIcon",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Text of Error of Input.",name:"error",required:!1,type:{name:"ErrorFenextjs<any>"}},errorWithIsChange:{defaultValue:null,description:"Show error if IsChange.",name:"errorWithIsChange",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:"Optional of Input.",name:"optional",required:!1,type:{name:"boolean"}},optionalText:{defaultValue:null,description:"Optional text of Input.",name:"optionalText",required:!1,type:{name:"string"}},isChange:{defaultValue:null,description:"Loader of Input.",name:"isChange",required:!1,type:{name:"boolean"}},useLoader:{defaultValue:null,description:"useLoader of Input.",name:"useLoader",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"AutoComplete of Input.",name:"autoComplete",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"onKeyDown of Input.",name:"onKeyDown",required:!1,type:{name:"(KeyboardEventHandler<HTMLTextAreaElement> & KeyboardEventHandler<HTMLInputElement>)"}},maxLength:{defaultValue:null,description:"maxLength of Input.",name:"maxLength",required:!1,type:{name:"number"}},regExp:{defaultValue:null,description:"regExp of Input.",name:"regExp",required:!1,type:{name:"RegExp"}},regExpReplace:{defaultValue:null,description:"regExpReplace of Input.",name:"regExpReplace",required:!1,type:{name:"string"}},onChangeEvent:{defaultValue:null,description:"onChangeEvent of Input.",name:"onChangeEvent",required:!1,type:{name:"((e: InputTextChangeEvent) => void)"}},filterOptions:{defaultValue:null,description:"Options of select.",name:"filterOptions",required:!1,type:{name:"((data: InputSelectItemOptionBaseProps<any>[]) => InputSelectItemOptionBaseProps<any>[])"}},showOptions:{defaultValue:null,description:"showOptions type of show option select.",name:"showOptions",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"focus"'},{value:'"focus-hover"'}]}},hiddenOptions:{defaultValue:null,description:"hiddenOptions type of hidden option select.",name:"hiddenOptions",required:!1,type:{name:"enum",value:[{value:'"not-hover"'},{value:'"not-focus"'},{value:'"not-focus-hover"'}]}},typeSelect:{defaultValue:null,description:"Type Select of option.",name:"typeSelect",required:!1,type:{name:"enum",value:[{value:'"datalist"'},{value:'"div"'},{value:'"select"'}]}},typeSelectStyle:{defaultValue:null,description:"Type Select of styles.",name:"typeSelectStyle",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"normal"'},{value:'"box"'}]}},useSwichtypeSelectStyle:{defaultValue:null,description:"Type Select of styles.",name:"useSwichtypeSelectStyle",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"Value of Not Result of select.",name:"noResult",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>"}},loaderOption:{defaultValue:null,description:"Value of Not Result of select.",name:"loaderOption",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>"}},selected:{defaultValue:null,description:"Value of Selected of select.",name:"selected",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>"}},create:{defaultValue:null,description:"Value of Create of select.",name:"create",required:!1,type:{name:"InputSelectItemOptionBaseProps<any>"}},onCreate:{defaultValue:null,description:"onCreate of select.",name:"onCreate",required:!1,type:{name:"(() => void)"}},isSelectClearText:{defaultValue:null,description:"Value of Not Result of select.",name:"isSelectClearText",required:!1,type:{name:"boolean"}},isSelectChangeText:{defaultValue:null,description:"is permit change text in input.",name:"isSelectChangeText",required:!1,type:{name:"boolean"}},onChangeText:{defaultValue:null,description:"Function to call when the input value changes text.",name:"onChangeText",required:!1,type:{name:"((v?: string) => void)"}},iconCloseMovil:{defaultValue:null,description:"Icon for close options in Movil.",name:"iconCloseMovil",required:!1,type:{name:"any"}},clearContent:{defaultValue:null,description:"ReactNode for clear option in Movil.",name:"clearContent",required:!1,type:{name:"ReactNode"}},searchById:{defaultValue:null,description:"searchById .",name:"searchById",required:!1,type:{name:"boolean"}},iconSearch:{defaultValue:null,description:"Icon search in select.",name:"iconSearch",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Pagination/PaginationNPage/index.tsx#PaginationNPage"]={docgenInfo:PaginationNPage.__docgenInfo,name:"PaginationNPage",path:"src/Pagination/PaginationNPage/index.tsx#PaginationNPage"})}catch(__react_docgen_typescript_loader_error){}}}]);