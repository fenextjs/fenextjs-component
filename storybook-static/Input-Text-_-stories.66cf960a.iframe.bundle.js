"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3439],{"./src/Input/Text/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,UseValidator:()=>UseValidator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),yup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/yup/index.esm.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Input/Text/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputText",component:_index__WEBPACK_IMPORTED_MODULE_3__.S};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_3__.S,args,"Test Children")};Profile.displayName="Profile";var Index=Profile.bind({}),args={label:"Label",placeholder:"Placeholder",yup:yup__WEBPACK_IMPORTED_MODULE_1__.Yj().required()};Index.args=args;var UseValidator=Profile.bind({}),UseValidatorArg={label:"Label",placeholder:"Placeholder",validator:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__.y)().isString().isRequired().isMin(4),errorWithIsChange:!0,optional:!1};UseValidator.args=UseValidatorArg,Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputText {...args}>Test Children</InputText>",...Index.parameters?.docs?.source}}},UseValidator.parameters={...UseValidator.parameters,docs:{...UseValidator.parameters?.docs,source:{originalSource:"args => <InputText {...args}>Test Children</InputText>",...UseValidator.parameters?.docs?.source}}};const __namedExportsOrder=["Index","UseValidator"]}}]);