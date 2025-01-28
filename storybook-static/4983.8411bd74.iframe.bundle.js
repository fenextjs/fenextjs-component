"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[4983],{"./src/Input/SelectT/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>InputSelectT});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Select/index.tsx"),_excluded=["defaultValue","value","options","onChange","onParse"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputSelectT=function InputSelectT(_ref){var defaultValue=_ref.defaultValue,value=_ref.value,options=_ref.options,onChange=_ref.onChange,onParse=_ref.onParse,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Select__WEBPACK_IMPORTED_MODULE_1__.$,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({},props,{defaultValue:defaultValue?onParse(defaultValue):void 0,value:value?onParse(value):void 0,options:options.map(onParse),onChangeData:onChange})))};InputSelectT.__docgenInfo={description:"",methods:[],displayName:"InputSelectT",props:{defaultValue:{required:!1,tsType:{name:"T"},description:"Default Options of select."},value:{required:!1,tsType:{name:"T"},description:"Value Options of select."},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Options of select."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T) => void",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onParse:{required:!0,tsType:{name:"signature",type:"function",raw:"(v?: T) => InputSelectItemOptionBaseProps<T>",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}}},description:"Function for converter T to InputSelectItemOptionBaseProps<T>"}},composes:["Omit"]}},"./src/Pagination/PaginationAll/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_PaginationItemPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Pagination/PaginationItemPage/index.tsx"),_PaginationNPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Pagination/PaginationNPage/index.tsx"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["className","PaginationItemPageProps","PaginationNPageProps","showItemPage","showNPage","disabled","paginationName"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Pagination=function Pagination(_ref){var _PaginationItemPagePr,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,PaginationItemPageProps=_ref.PaginationItemPageProps,_ref$PaginationNPageP=_ref.PaginationNPageProps,PaginationNPageProps=void 0===_ref$PaginationNPageP?{}:_ref$PaginationNPageP,_ref$showItemPage=_ref.showItemPage,showItemPage=void 0===_ref$showItemPage||_ref$showItemPage,_ref$showNPage=_ref.showNPage,showNPage=void 0===_ref$showNPage||_ref$showNPage,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,paginationName=_ref.paginationName,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded),_use_T=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t,minPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var _ref2,_PaginationNPageProps,m=1/0;return null===(_ref2=null!==(_PaginationNPageProps=null==PaginationNPageProps?void 0:PaginationNPageProps.options)&&void 0!==_PaginationNPageProps?_PaginationNPageProps:_PaginationNPage__WEBPACK_IMPORTED_MODULE_3__.p)||void 0===_ref2||_ref2.forEach((function(e){var n=parseInt("".concat(null!=e?e:""));n&&!Number.isNaN(n)&&(m=Math.min(m,n))})),m}),[null==PaginationNPageProps?void 0:PaginationNPageProps.options]);return __jsx("div",{className:"fenext-pagination ".concat(className)},__jsx("div",{className:"fenext-pagination-content-item-page ".concat(className)},showItemPage&&__jsx(_PaginationItemPage__WEBPACK_IMPORTED_MODULE_2__.H,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.A)({},PaginationItemPageProps,{_t,disabled,paginationName}))),__jsx("div",{className:"fenext-pagination-content-n-page ".concat(className)},showNPage&&minPage<(null!==(_PaginationItemPagePr=null==PaginationItemPageProps?void 0:PaginationItemPageProps.nItems)&&void 0!==_PaginationItemPagePr?_PaginationItemPagePr:minPage+1)&&__jsx(_PaginationNPage__WEBPACK_IMPORTED_MODULE_3__.q,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.A)({},PaginationNPageProps,props,{_t,disabled,paginationName}))))};Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:"CSS class for the main container of the pagination.",defaultValue:{value:'""',computed:!1}},showItemPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showNPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},PaginationItemPageProps:{required:!0,tsType:{name:"Omit",elements:[{name:"PaginationItemPageProps"},{name:"literal",value:'"paginationName"'}],raw:'Omit<PaginationItemPageProps, "paginationName">'},description:""},PaginationNPageProps:{required:!1,tsType:{name:"Omit",elements:[{name:"PaginationNPageProps"},{name:"literal",value:'"paginationName"'}],raw:'Omit<PaginationNPageProps, "paginationName">'},description:"",defaultValue:{value:"{}",computed:!1}},paginationName:{required:!1,tsType:{name:"string"},description:""}},composes:["_TProps"]}},"./src/Pagination/PaginationItemPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>PaginationItemPage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs_PaginationDown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationDown/index.js"),fenextjs_svg_cjs_PaginationNext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationNext/index.js"),fenextjs_svg_cjs_PaginationPre__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationPre/index.js"),fenextjs_svg_cjs_PaginationUp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationUp/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationItemPage=function PaginationItemPage(_ref){var _ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameUp=_ref.classNameUp,classNameUp=void 0===_ref$classNameUp?"":_ref$classNameUp,_ref$classNamePre=_ref.classNamePre,classNamePre=void 0===_ref$classNamePre?"":_ref$classNamePre,_ref$classNameCurrent=_ref.classNameCurrent,classNameCurrent=void 0===_ref$classNameCurrent?"":_ref$classNameCurrent,_ref$classNameCurrent2=_ref.classNameCurrentItem,classNameCurrentItem=void 0===_ref$classNameCurrent2?"":_ref$classNameCurrent2,_ref$classNameNext=_ref.classNameNext,classNameNext=void 0===_ref$classNameNext?"":_ref$classNameNext,_ref$classNameDown=_ref.classNameDown,classNameDown=void 0===_ref$classNameDown?"":_ref$classNameDown,paginationName=_ref.paginationName,_ref$icons=_ref.icons,icons=void 0===_ref$icons?{up:__jsx(fenextjs_svg_cjs_PaginationUp__WEBPACK_IMPORTED_MODULE_4__.SvgPaginationUp,null),pre:__jsx(fenextjs_svg_cjs_PaginationPre__WEBPACK_IMPORTED_MODULE_3__.SvgPaginationPre,null),next:__jsx(fenextjs_svg_cjs_PaginationNext__WEBPACK_IMPORTED_MODULE_2__.SvgPaginationNext,null),down:__jsx(fenextjs_svg_cjs_PaginationDown__WEBPACK_IMPORTED_MODULE_1__.SvgPaginationDown,null)}:_ref$icons,nItems=_ref.nItems,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,onChange=_ref.onChange,_ref$hiddenIfNItemsSm=_ref.hiddenIfNItemsSmallerThanOrEqualNItemsPage,hiddenIfNItemsSmallerThanOrEqualNItemsPage=void 0===_ref$hiddenIfNItemsSm||_ref$hiddenIfNItemsSm,_usePagination=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__.usePagination)({name:paginationName,onChage:function onChage(e){var _e$page;null==onChange||onChange(null!==(_e$page=null==e?void 0:e.page)&&void 0!==_e$page?_e$page:0)}}),onChangeData=_usePagination.onChangeData,_usePagination$data=_usePagination.data,_usePagination$data$p=_usePagination$data.page,page=void 0===_usePagination$data$p?0:_usePagination$data$p,_usePagination$data$n=_usePagination$data.npage,nItemsPage=void 0===_usePagination$data$n?10:_usePagination$data$n,maxPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return 0==nItemsPage?0:Math.ceil(nItems/nItemsPage)-1}),[nItems,nItemsPage]),setPage=function setPage(v){if(!disabled){var Value=function minMaxValue(v){return Math.max(0,Math.min(maxPage,v))}(v);onChangeData("page")(Value)}},onSetPage=function onSetPage(e){return function(){return setPage(e)}},addPage=function addPage(add){return function(){setPage(page+add)}};return __jsx("div",{className:"fenext-pagination-item-page ".concat(hiddenIfNItemsSmallerThanOrEqualNItemsPage&&nItems<=nItemsPage?"fenext-pagination-item-page-hidden":""," ").concat(classNameContent," ")},page>0&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-up",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-up ".concat(classNameUp),onClick:onSetPage(0)},icons.up),__jsx("div",{key:"fenext-pagination-item-page-pre",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-pre ".concat(classNamePre),onClick:addPage(-1)},icons.pre)),__jsx("div",{className:"fenext-pagination-item-page-current ".concat(classNameCurrent)},page>2?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-current-item-init",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-init ".concat(classNameCurrentItem),onClick:onSetPage(0)},1),__jsx("div",{key:"fenext-pagination-item-page-current-item-init-dog",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ".concat(classNameCurrentItem)},"...")):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),new Array(5).fill(1).map((function(e,i){var n=e*i-2+page;return n<0||n>maxPage?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-current-item-".concat(i),className:"fenext-pagination-item-page-current-item ".concat(n==page?"fenext-pagination-item-page-current-item-active":""," ").concat(classNameCurrentItem),onClick:onSetPage(n)},n+1))})),page<maxPage-2?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-current-item-final-dog",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ".concat(classNameCurrentItem)},"..."),__jsx("div",{key:"fenext-pagination-item-page-current-item-final",className:"fenext-pagination-item-page-current-item  fenext-pagination-item-page-current-item-final ".concat(classNameCurrentItem),onClick:onSetPage(maxPage)},maxPage+1)):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)),page<maxPage&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-next",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-next ".concat(classNameNext),onClick:addPage(1)},icons.next),__jsx("div",{key:"fenext-pagination-item-page-down",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-down ".concat(classNameDown),onClick:onSetPage(maxPage)},icons.down)))};PaginationItemPage.__docgenInfo={description:"",methods:[],displayName:"PaginationItemPage",props:{classNameContent:{required:!1,tsType:{name:"string"},description:"CSS class for the main container of the pagination.",defaultValue:{value:'""',computed:!1}},classNameUp:{required:!1,tsType:{name:"string"},description:'CSS class for the "Go Up" button.',defaultValue:{value:'""',computed:!1}},classNamePre:{required:!1,tsType:{name:"string"},description:"CSS class for the previous button.",defaultValue:{value:'""',computed:!1}},classNameCurrent:{required:!1,tsType:{name:"string"},description:"CSS class for the current page number.",defaultValue:{value:'""',computed:!1}},classNameCurrentItem:{required:!1,tsType:{name:"string"},description:"CSS class for the current item page number.",defaultValue:{value:'""',computed:!1}},classNameNext:{required:!1,tsType:{name:"string"},description:"CSS class for the next button.",defaultValue:{value:'""',computed:!1}},classNameDown:{required:!1,tsType:{name:"string"},description:'CSS class for the "Go Down" button.',defaultValue:{value:'""',computed:!1}},icons:{required:!1,tsType:{name:"signature",type:"object",raw:'{\n    /**\n     * Custom icon for the "Go Up" button.\n     */\n    up?: ReactNode;\n\n    /**\n     * Custom icon for the previous button.\n     */\n    pre?: ReactNode;\n\n    /**\n     * Custom icon for the next button.\n     */\n    next?: ReactNode;\n\n    /**\n     * Custom icon for the "Go Down" button.\n     */\n    down?: ReactNode;\n}',signature:{properties:[{key:"up",value:{name:"ReactNode",required:!1},description:'Custom icon for the "Go Up" button.'},{key:"pre",value:{name:"ReactNode",required:!1},description:"Custom icon for the previous button."},{key:"next",value:{name:"ReactNode",required:!1},description:"Custom icon for the next button."},{key:"down",value:{name:"ReactNode",required:!1},description:'Custom icon for the "Go Down" button.'}]}},description:"Custom icons for each button of the pagination.",defaultValue:{value:"{\n    up: <SvgPaginationUp />,\n    pre: <SvgPaginationPre />,\n    next: <SvgPaginationNext />,\n    down: <SvgPaginationDown />,\n}",computed:!1}},paginationName:{required:!1,tsType:{name:"string"},description:""},nItems:{required:!0,tsType:{name:"number"},description:"The total number of items to paginate"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},hiddenIfNItemsSmallerThanOrEqualNItemsPage:{required:!1,tsType:{name:"boolean"},description:"Hidden Pagination of nItems if smaller than or equal of nItemsPages.\n@default false",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"A callback function that is called when the page changes\n@param page - The new page number"}},composes:["_TProps"]}},"./src/Pagination/PaginationNPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>PaginationNPageDefaultOptions,q:()=>PaginationNPage});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Input_SelectT__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/SelectT/index.tsx"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["className","options","onChange","paginationName","disabled"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationNPageDefaultOptions=[10,20,50,100],PaginationNPage=function PaginationNPage(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$options=_ref.options,options=void 0===_ref$options?PaginationNPageDefaultOptions:_ref$options,onChange=_ref.onChange,paginationName=_ref.paginationName,disabled=_ref.disabled,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded),_usePagination=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.usePagination)({name:paginationName,onChage:function onChage(e){var _e$npage;null==onChange||onChange(null!==(_e$npage=null==e?void 0:e.npage)&&void 0!==_e$npage?_e$npage:10)}}),onChangeData=_usePagination.onChangeData,_usePagination$data$n=_usePagination.data.npage,npage=void 0===_usePagination$data$n?10:_usePagination$data$n;return __jsx(_Input_SelectT__WEBPACK_IMPORTED_MODULE_1__.L,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props,{className:"fenext-pagination-npage ".concat(className),useItemMaxLengthShowOptions:!1,options,onChange:onChangeData("page"),isSelectChangeText:!1,value:npage,onParse:function onParse(e){return{id:null!=e?e:"",text:"".concat(e),data:e}},disabled}))};PaginationNPage.__docgenInfo={description:"",methods:[],displayName:"PaginationNPage",props:{className:{required:!1,tsType:{name:"string"},description:"CSS class name for the input component.",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameMaxLength:{required:!1,tsType:{name:"string"},description:""},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},classNameOptionImg:{required:!1,tsType:{name:"string"},description:"CSS class name for the option img select."},classNameOptionDelete:{required:!1,tsType:{name:"string"},description:"CSS class name for the delete option select."},classNameSelect:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select."},classNameList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options."},options:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"List NPage for select.",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(npage: number) => void",signature:{arguments:[{type:{name:"number"},name:"npage"}],return:{name:"void"}}},description:"onChange of nPage."},paginationName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["_TProps"]}}}]);