"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[6],{"./src/SwichView/SwichViewTable/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SwichView/SwichViewTable/index.tsx"),_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Table/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"SwichView/Table",component:_index__WEBPACK_IMPORTED_MODULE_1__.i};var Index=function Profile(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_1__.i,args),__jsx(_Table__WEBPACK_IMPORTED_MODULE_2__.X,{name:"Usuarios",header:[{id:"id",th:"ID",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.id)}},{id:"name",th:"Name",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:function parse(data){return data.date.toDateString()},columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref){var org=_ref.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:function parse(_ref2){var org=_ref2.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref3){var org=_ref3.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}}],items:new Array(50).fill(1).map((function(e,i){var n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}}))}))}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:'args => <>\n        <SwichViewTable {...args} />\n        <Table<TestItemTable> name="Usuarios" header={[{\n    id: "id",\n    th: "ID",\n    parse: (data: TestItemTable) => {\n      return <a href={`#${data.id}`}>{data.id}</a>;\n    }\n  }, {\n    id: "name",\n    th: "Name",\n    parse: (data: TestItemTable) => {\n      return <a href={`#${data.id}`}>{data.name}</a>;\n    },\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }, {\n    id: "date",\n    th: "Date",\n    parse: (data: TestItemTable) => data.date.toDateString(),\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }, {\n    id: "dni",\n    th: "Documento",\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }, {\n    id: "amount",\n    th: "Monto",\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }, {\n    id: "quanty",\n    th: "Cantidad",\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }, {\n    id: "org",\n    th: "Organizacion",\n    parse: ({\n      org\n    }: TestItemTable) => {\n      return <a href={`#${org?.id}`}>{org?.name}</a>;\n    },\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    },\n    defaultShowHidden: "hidden"\n  }, {\n    id: "org",\n    th: "Organizacion",\n    parse: ({\n      org\n    }: TestItemTable) => {\n      return <a href={`#${org?.id}`}>{org?.name}</a>;\n    },\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }, {\n    id: "org",\n    th: "Organizacion",\n    parse: ({\n      org\n    }: TestItemTable) => {\n      return <a href={`#${org?.id}`}>{org?.name}</a>;\n    },\n    columnOptions: {\n      orderBy: true,\n      showHidden: true\n    }\n  }]} items={new Array(50).fill(1).map((e, i) => {\n    const n = e * i + 1;\n    const r: TestItemTable = {\n      id: `${n}`,\n      name: `Name ${n}`,\n      date: new Date(100000000 * n),\n      dni: `000${n}`,\n      amount: 1000 * n,\n      quanty: 10 * n,\n      org: {\n        id: `${n}`,\n        name: `Organizacion ${n}`\n      }\n    };\n    return r;\n  })} />\n    </>',...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Radio/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>InputRadio});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs_Check__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Check/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["classNameContent","classNameLabel","classNameLabelActive","classNameLabelInactive","classNameText","classNameContentRadio","classNameContentRadioActive","classNameContentRadioInactive","classNameRadio","classNameRadioActive","classNameRadioInactive","labelPosition","name","onChange","onChangeData","defaultValue","value","disabled","icon","items"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var InputRadio=function InputRadio(_ref){var _ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameLabel=_ref.classNameLabel,classNameLabel=void 0===_ref$classNameLabel?"":_ref$classNameLabel,_ref$classNameLabelAc=_ref.classNameLabelActive,classNameLabelActive=void 0===_ref$classNameLabelAc?"":_ref$classNameLabelAc,_ref$classNameLabelIn=_ref.classNameLabelInactive,classNameLabelInactive=void 0===_ref$classNameLabelIn?"":_ref$classNameLabelIn,_ref$classNameText=_ref.classNameText,classNameText=void 0===_ref$classNameText?"":_ref$classNameText,_ref$classNameContent2=_ref.classNameContentRadio,classNameContentRadio=void 0===_ref$classNameContent2?"":_ref$classNameContent2,_ref$classNameContent3=_ref.classNameContentRadioActive,classNameContentRadioActive=void 0===_ref$classNameContent3?"":_ref$classNameContent3,_ref$classNameContent4=_ref.classNameContentRadioInactive,classNameContentRadioInactive=void 0===_ref$classNameContent4?"":_ref$classNameContent4,_ref$classNameRadio=_ref.classNameRadio,classNameRadio=void 0===_ref$classNameRadio?"":_ref$classNameRadio,_ref$classNameRadioAc=_ref.classNameRadioActive,classNameRadioActive=void 0===_ref$classNameRadioAc?"":_ref$classNameRadioAc,_ref$classNameRadioIn=_ref.classNameRadioInactive,classNameRadioInactive=void 0===_ref$classNameRadioIn?"":_ref$classNameRadioIn,_ref$labelPosition=_ref.labelPosition,labelPosition=void 0===_ref$labelPosition?"right":_ref$labelPosition,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(e){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__.env_log)(e,{name:"input radio onchange"})}:_ref$onChange,onChangeData=_ref.onChangeData,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?void 0:_ref$defaultValue,_ref$value=_ref.value,value=void 0===_ref$value?void 0:_ref$value,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$icon=_ref.icon,icon=void 0===_ref$icon?__jsx(fenextjs_svg_cjs_Check__WEBPACK_IMPORTED_MODULE_2__.SvgCheck,null):_ref$icon,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded),_use_T=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),checked=_useState[0],setChecked=_useState[1],onChecked=function onChecked(i){return function(){disabled||(setChecked(i),onChange(i),null==onChangeData||onChangeData(null==i?void 0:i.data))}};return __jsx("div",{className:"fenext-content-radio ".concat(classNameContent)},items.map((function(item,i){var _value$id,isCheck=(null!==(_value$id=null==value?void 0:value.id)&&void 0!==_value$id?_value$id:null==checked?void 0:checked.id)==item.id;return __jsx("label",{key:i,className:"fenext-input-radio ".concat(labelPosition," ").concat(classNameLabel,"  ").concat(isCheck?classNameLabelActive:classNameLabelInactive),onClick:onChecked(item)},__jsx("input",{type:"radio",name,defaultChecked:(null==item?void 0:item.id)==(null==defaultValue?void 0:defaultValue.id),className:"fenext-input-radio-input fenext-input-radio-input-id-".concat(item.id)}),__jsx("span",{className:"fenext-input-radio-box ".concat(classNameContentRadio," ").concat(isCheck?classNameContentRadioActive:classNameContentRadioInactive)},__jsx("span",{className:"\n                                fenext-input-radio-box-icon\n                                ".concat(classNameRadio," ").concat(isCheck?classNameRadioActive:classNameRadioInactive)},isCheck&&icon)),__jsx("span",{className:"fenext-input-radio-text ".concat(classNameText)},_t(item.label)))})))};InputRadio.__docgenInfo={description:"Component that renders a radio input.\nTakes an InputRadioProps object as props.",methods:[],displayName:"InputRadio",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"InputRadioItemProps",elements:[{name:"T"}],raw:"InputRadioItemProps<T>"}],raw:"InputRadioItemProps<T>[]"},description:"Items of Input Radio.",defaultValue:{value:"[]",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"The position of the label relative to the radio.",defaultValue:{value:'"right"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name attribute of the radio input element.",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: InputRadioItemProps<T>) => void",signature:{arguments:[{type:{name:"InputRadioItemProps",elements:[{name:"T"}],raw:"InputRadioItemProps<T>"},name:"e"}],return:{name:"void"}}},description:"A callback function to execute when the radio is toggled.\nReceives a boolean value indicating whether the radio is checked or not.",defaultValue:{value:'(e) => {\n    env_log(e, {\n        name: "input radio onchange",\n    });\n}',computed:!1}},onChangeData:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: T) => void",signature:{arguments:[{type:{name:"T"},name:"e"}],return:{name:"void"}}},description:"A callback function to execute when the radio is toggled.\nReceives a boolean value indicating whether the radio is checked or not."},defaultValue:{required:!1,tsType:{name:"InputRadioItemProps",elements:[{name:"T"}],raw:"InputRadioItemProps<T>"},description:"The default value of the radio when it is first rendered.",defaultValue:{value:"undefined",computed:!0}},value:{required:!1,tsType:{name:"InputRadioItemProps",elements:[{name:"T"}],raw:"InputRadioItemProps<T>"},description:"The value of the radio input element.",defaultValue:{value:"undefined",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"A boolean value indicating whether the radio is disabled or not.",defaultValue:{value:"false",computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"CSS class name for content the radio.",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the radio label.",defaultValue:{value:'""',computed:!1}},classNameLabelActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the active radio label.",defaultValue:{value:'""',computed:!1}},classNameLabelInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the inactive radio label.",defaultValue:{value:'""',computed:!1}},classNameText:{required:!1,tsType:{name:"string"},description:"CSS class name for the text next to the radio.",defaultValue:{value:'""',computed:!1}},classNameContentRadio:{required:!1,tsType:{name:"string"},description:"CSS class name for the container that holds the radio and its label.",defaultValue:{value:'""',computed:!1}},classNameContentRadioActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the container that holds the radio and its label when the radio is active.",defaultValue:{value:'""',computed:!1}},classNameContentRadioInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the container that holds the radio and its label when the radio is inactive.",defaultValue:{value:'""',computed:!1}},classNameRadio:{required:!1,tsType:{name:"string"},description:"CSS class name for the radio input element.",defaultValue:{value:'""',computed:!1}},classNameRadioActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the radio input element when the radio is active.",defaultValue:{value:'""',computed:!1}},classNameRadioInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the radio input element when the radio is inactive.",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display next to the radio.",defaultValue:{value:"<SvgCheck />",computed:!1}}},composes:["_TProps"]}},"./src/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Portal=function Portal(_ref){var _document,children=_ref.children,container=_ref.container;return window&&"undefined"!=typeof window?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children),null!=container?container:null===(_document=document)||void 0===_document?void 0:_document.body):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)};Portal.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{container:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment",elements:[{name:"Element"},{name:"DocumentFragment"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/SwichView/SwichViewList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>SwichViewList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Input_Radio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Radio/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SwichViewList=function SwichViewList(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,defaultValue=_ref.defaultValue,_onChange=_ref.onChange,_ref$list=_ref.list,list=void 0===_ref$list?[]:_ref$list,_ref$name=_ref.name,name=void 0===_ref$name?"fenext-swich-view":_ref$name,ITEMS=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return list.map((function(e){return{id:"fenext-swich-view-".concat(e.id),label:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-swich-view-item"},e.icon)),data:e.id}}))}),[defaultValue,list]);return __jsx("div",{className:"fenext-swich-view ".concat(className)},__jsx(_Input_Radio__WEBPACK_IMPORTED_MODULE_1__.U,{name,defaultValue:ITEMS.find((function(e){return e.data==defaultValue})),items:ITEMS,onChange:function onChange(e){null==_onChange||_onChange(null==e?void 0:e.data)}}))};SwichViewList.__docgenInfo={description:"",methods:[],displayName:"SwichViewList",props:{name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fenext-swich-view"',computed:!1}},list:{required:!1,tsType:{name:"Array",elements:[{name:"SwichViewListBaseItemProps",elements:[{name:"T"}],raw:"SwichViewListBaseItemProps<T>"}],raw:"SwichViewListBaseItemProps<T>[]"},description:"The class name for the component.",defaultValue:{value:"[]",computed:!1}},defaultValue:{required:!1,tsType:{name:"T"},description:"The class name for the component."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: T) => void",signature:{arguments:[{type:{name:"T"},name:"e"}],return:{name:"void"}}},description:"The class name for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}},"./src/SwichView/SwichViewTable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SwichViewTable});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_SwichViewList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SwichView/SwichViewList/index.tsx"),fenextjs_svg_cjs_View_TableBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-svg/cjs/View/TableBox/index.js"),fenextjs_svg_cjs_View_TableList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/View/TableList/index.js"),_excluded=["className","defaultValue"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SwichViewTable=function SwichViewTable(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"fenext-swich-view-table-list":_ref$defaultValue,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded),ITEMS=[{id:"fenext-swich-view-table-box",icon:__jsx(fenextjs_svg_cjs_View_TableBox__WEBPACK_IMPORTED_MODULE_2__.SvgViewTableBox,null)},{id:"fenext-swich-view-table-list",icon:__jsx(fenextjs_svg_cjs_View_TableList__WEBPACK_IMPORTED_MODULE_3__.SvgViewTableList,null)}];return __jsx(_SwichViewList__WEBPACK_IMPORTED_MODULE_1__.M,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({},props,{name:"fenext-swich-view-table",className:"fenext-swich-view-table ".concat(className),list:ITEMS,defaultValue}))};SwichViewTable.__docgenInfo={description:"",methods:[],displayName:"SwichViewTable",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},defaultValue:{defaultValue:{value:'"fenext-swich-view-table-list"',computed:!1},required:!1}},composes:["Omit"]}}}]);