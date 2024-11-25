"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[4813],{"./src/Input/Code/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),Text=__webpack_require__("./src/Input/Text/index.tsx"),cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),__jsx=react.createElement,InputCode=function InputCode(_ref){var _props$defaultValue,_Array,_props$maxLength,props=(0,esm_extends.A)({},((0,objectDestructuringEmpty.A)(_ref),_ref)),_useData=(0,cjs.useData)(null!==(_props$defaultValue=null==props?void 0:props.defaultValue)&&void 0!==_props$defaultValue?_props$defaultValue:"",{onChangeDataAfter:null==props?void 0:props.onChange}),data=_useData.data,setData=_useData.setData;return __jsx(react.Fragment,null,__jsx(Text.S,(0,esm_extends.A)({},props,{onChange:setData,className:"".concat(null==props?void 0:props.className," fenext-input-code"),onKeyDown:function onKeyDown(_ref2){var target=_ref2.target,end=target.value.length;target.setSelectionRange(end,end),target.focus()},extraInContentInput:__jsx(react.Fragment,null,__jsx("div",{className:"fenext-input-code-content-items"},null===(_Array=new Array(null!==(_props$maxLength=null==props?void 0:props.maxLength)&&void 0!==_props$maxLength?_props$maxLength:1))||void 0===_Array?void 0:_Array.fill(1).map((function(e,i){var _props$placeholder$i,_props$placeholder,_data$i;return __jsx(react.Fragment,null,__jsx("div",{key:i*e,className:"fenext-input-code-item fenext-input-code-item-".concat(data.length==i?"current":"")},data&&""!=data?"":null!==(_props$placeholder$i=null==props||null===(_props$placeholder=props.placeholder)||void 0===_props$placeholder?void 0:_props$placeholder[i])&&void 0!==_props$placeholder$i?_props$placeholder$i:"",null!==(_data$i=null==data?void 0:data[i])&&void 0!==_data$i?_data$i:""))}))))})))};InputCode.__docgenInfo={description:"",methods:[],displayName:"InputCode",props:{maxLength:{required:!0,tsType:{name:"number"},description:"maxLength of Input."},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."}},composes:["Omit"]};var _stories_jsx=react.createElement;const _stories={title:"Input/InputCode",component:InputCode};var Index=function Profile(args){return _stories_jsx(InputCode,args,"Test Children")}.bind({});Index.args={label:"Label",placeholder:"Placeholder",maxLength:6,regExp:/[^0-9]$/},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputCode {...args}>Test Children</InputCode>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure undefined")}__webpack_require__.d(__webpack_exports__,{A:()=>_objectDestructuringEmpty})}}]);