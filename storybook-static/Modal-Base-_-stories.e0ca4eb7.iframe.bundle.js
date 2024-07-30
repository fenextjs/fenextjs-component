"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3636],{"./src/Modal/Base/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Modal/Base/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Modal/ModalBase",component:_index__WEBPACK_IMPORTED_MODULE_1__.f};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.f,args)}.bind({});Index.args={active:!0,children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Title"),__jsx("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error illo iusto, ex esse ullam aliquam officia praesentium labore reprehenderit nostrum quidem exercitationem blanditiis est illum pariatur veritatis magni corporis!"))},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <ModalBase {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Modal/Base/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ModalBase});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Close=__webpack_require__("./node_modules/fenextjs-svg/cjs/Close/index.js"),cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),__jsx=react.createElement,ModalBase=function ModalBase(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameBg=_ref.classNameBg,classNameBg=void 0===_ref$classNameBg?"":_ref$classNameBg,_ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameClose=_ref.classNameClose,classNameClose=void 0===_ref$classNameClose?"":_ref$classNameClose,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$childrenUseActiv=_ref.childrenUseActiveForShowHidden,childrenUseActiveForShowHidden=void 0!==_ref$childrenUseActiv&&_ref$childrenUseActiv,_ref$disabledClose=_ref.disabledClose,disabledClose=void 0!==_ref$disabledClose&&_ref$disabledClose,_ref$type=_ref.type,type=void 0===_ref$type?"center":_ref$type,_ref$typeClose=_ref.typeClose,typeClose=void 0===_ref$typeClose?"out":_ref$typeClose,onClose=_ref.onClose,children=_ref.children,_ref$useRender=_ref.useRender,useRender=void 0!==_ref$useRender&&_ref$useRender,name=_ref.name,_ref$closeComponent=_ref.closeComponent,closeComponent=void 0===_ref$closeComponent?__jsx(Close.Close,null):_ref$closeComponent,uuid=(0,react.useMemo)((function(){return(new Date).getTime()}),[active]),CLOSECOMPONENTE=(0,react.useMemo)((function(){return __jsx(react.Fragment,null,__jsx("div",{onClick:disabledClose?function(){}:onClose,className:"fenext-modal-base-close fenext-modal-base-close-".concat(type,"  fenext-modal-base-close-").concat(active?"active":"inactive"," ").concat(classNameClose)},closeComponent))}),[onClose,type,active,classNameClose,disabledClose,closeComponent]),CONTENT=(0,react.useMemo)((function(){return __jsx(react.Fragment,null,__jsx("dialog",{open:active,className:"fenext-modal-base-dialog fenext-modal-base-dialog-close-".concat(typeClose," fenext-modal-base-dialog-").concat(active?"active":"inactive"," fenext-modal-base-dialog-disabled-close-").concat(disabledClose?"active":"inactive"),"data-name":name},__jsx("div",{className:"fenext-modal-base-bg fenext-modal-base-bg-".concat(active?"active":"inactive"," ").concat(classNameBg," ")}),__jsx("div",{className:"fenext-modal-base fenext-modal-base-bg-close fenext-modal-base-bg-close-".concat(uuid," fenext-modal-base-").concat(active?"active":"inactive"," fenext-modal-base-").concat(type," ").concat(className," "),onClick:function onClick(e){e.target.classList.value.includes("fenext-modal-base-bg-close-".concat(uuid))&&!disabledClose&&(null==onClose||onClose())}},__jsx("div",{className:"fenext-modal-base-content ".concat(classNameContent," ")},CLOSECOMPONENTE,(childrenUseActiveForShowHidden&&active||!childrenUseActiveForShowHidden)&&children)),CLOSECOMPONENTE))}),[CLOSECOMPONENTE,childrenUseActiveForShowHidden,active,children,uuid,classNameContent,className,type,classNameBg,disabledClose,typeClose]);return function useModalPos(_ref){var id=_ref.id,_ref$tag=_ref.tag,tag=void 0===_ref$tag?"div":_ref$tag,children=_ref.children,_useState=(0,react.useState)(void 0),ref=_useState[0],setRef=_useState[1],uuid=(0,cjs.useRender)({children,ref}).uuid;(0,react.useEffect)((function onLoadRef(){var ID=id+"-"+uuid,ele=document.getElementById(ID);ele||((ele=document.createElement(tag)).id=ID,ele.classList.value="\n                fenext-use-modal-pos\n            ",document.body.append(ele)),(ele=document.getElementById(ID))&&(ele.setAttribute("uuid",uuid),setRef(ele))}),[])}({id:"fenext-modal",children:__jsx(react.Fragment,null,useRender&&CONTENT)}),__jsx(react.Fragment,null,!useRender&&CONTENT)};ModalBase.__docgenInfo={description:"",methods:[],displayName:"ModalBase",props:{active:{required:!1,tsType:{name:"boolean"},description:"If active modal.",defaultValue:{value:"false",computed:!1}},childrenUseActiveForShowHidden:{required:!1,tsType:{name:"boolean"},description:"If active modal.",defaultValue:{value:"false",computed:!1}},disabledClose:{required:!1,tsType:{name:"boolean"},description:"If disabled close modal.",defaultValue:{value:"false",computed:!1}},useRender:{required:!1,tsType:{name:"boolean"},description:"If disabled close modal.",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'| "top"\n| "left"\n| "right"\n| "bottom"\n| "center"\n| "full"\n| "layout-grid"\n| "top-right"\n| "top-left"\n| "bottom-right"\n| "bottom-left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"center"'},{name:"literal",value:'"full"'},{name:"literal",value:'"layout-grid"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"Type of modal.",defaultValue:{value:'"center"',computed:!1}},typeClose:{required:!1,tsType:{name:"union",raw:'"out" | "inset" | "none"',elements:[{name:"literal",value:'"out"'},{name:"literal",value:'"inset"'},{name:"literal",value:'"none"'}]},description:"Type of btn close for modal.",defaultValue:{value:'"out"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClose ModalBase."},name:{required:!1,tsType:{name:"string"},description:"name of Modal."},nameLocalStorage:{required:!1,tsType:{name:"string"},description:"nameLocalStorage of Modal."},closeComponent:{required:!1,tsType:{name:"ReactNode"},description:"closeComponent of Modal.",defaultValue:{value:"<Close />",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameBg:{required:!1,tsType:{name:"string"},description:"The class name for Bg the component.",defaultValue:{value:'""',computed:!1}},classNameClose:{required:!1,tsType:{name:"string"},description:"The class name for Icon Close the component.",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"The class name for Content the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren"]}}}]);