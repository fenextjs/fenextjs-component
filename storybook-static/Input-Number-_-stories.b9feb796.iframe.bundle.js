"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1613],{"./src/Input/Number/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,UseValidator:()=>UseValidator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),cjs=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js"),esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Text=__webpack_require__("./src/Input/Text/index.tsx"),NumberIncrease=__webpack_require__("./node_modules/fenextjs-svg/cjs/NumberIncrease/index.js"),NumberDecrease=__webpack_require__("./node_modules/fenextjs-svg/cjs/NumberDecrease/index.js"),Arrow=__webpack_require__("./node_modules/fenextjs-svg/cjs/Arrow/index.js"),useValidator=__webpack_require__("./node_modules/fenextjs-hook/cjs/useValidator/index.js"),fenextjs_functions_cjs=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),_excluded=["defaultValue","onChange","useBtnIncreaseDecrease","validator","value","disabledScroll"],__jsx=react.createElement,InputNumber=function InputNumber(_ref){var _ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,onChange=_ref.onChange,_ref$useBtnIncreaseDe=_ref.useBtnIncreaseDecrease,useBtnIncreaseDecrease=void 0!==_ref$useBtnIncreaseDe&&_ref$useBtnIncreaseDe,_ref$validator=_ref.validator,validator=void 0===_ref$validator?void 0:_ref$validator,value=_ref.value,_ref$disabledScroll=_ref.disabledScroll,disabledScroll=void 0!==_ref$disabledScroll&&_ref$disabledScroll,props=(0,objectWithoutProperties.A)(_ref,_excluded),_useState=(0,react.useState)(null!=defaultValue?defaultValue:""),value_=_useState[0],setValue_=_useState[1],valueInput=(0,react.useMemo)((function(){return null!=value?value:""==value_?defaultValue:value_}),[value_,defaultValue,value]),setValue=function setValue(v){setValue_(v),null==onChange||onChange(v)},minMaxValue=function minMaxValue(v){var _props$min,_props$max;return Math.max(null!==(_props$min=props.min)&&void 0!==_props$min?_props$min:-1/0,Math.min(null!==(_props$max=props.max)&&void 0!==_props$max?_props$max:1/0,v))},valueToNumber=function valueToNumber(v){try{var _replace,_ref2;return v=null===(_replace=(_ref2="".concat(v)).replace)||void 0===_replace?void 0:_replace.call(_ref2,/[^\d-]/g,""),parseFloat(v)}catch(_unused){return 0}},addValue=function addValue(add){return function(){if(null==props||!props.disabled){var Value=minMaxValue((""==valueInput?0:valueInput)+add);setValue(Value)}}},errorFenext=(0,useValidator.useValidator)({data:null!=valueInput&&""!=valueInput?(0,fenextjs_functions_cjs.parseNumber)(valueInput):void 0,validator:null!=validator?validator:(0,cjs.y)()}).error;return __jsx(react.Fragment,null,__jsx(Text.S,(0,esm_extends.A)({},props,{type:"number",value:"".concat(null!=valueInput?valueInput:""),className:"fenext-input-number ".concat(null==props?void 0:props.className),useLoader:!1,error:errorFenext,onWheel:function onWheel(e){var _props$onWheel;!0===disabledScroll&&(e.target.blur(),e.stopPropagation(),setTimeout((function(){e.target.focus()}),0)),null==props||null===(_props$onWheel=props.onWheel)||void 0===_props$onWheel||_props$onWheel.call(props,e)},icon:__jsx(react.Fragment,null,useBtnIncreaseDecrease?__jsx(react.Fragment,null,__jsx("span",{onClick:addValue(1),className:"fenext-input-number-icon-arrow fenext-input-number-icon-increase"},__jsx(NumberIncrease.SvgNumberIncrease,null)),__jsx("span",{onClick:addValue(-1),className:"fenext-input-number-icon-arrow fenext-input-number-icon-decrease"},__jsx(NumberDecrease.SvgNumberDecrease,null))):__jsx(react.Fragment,null,__jsx("div",{className:"fenext-input-number-icon-arrow"},__jsx("span",{onClick:addValue(1),className:"fenext-input-number-icon-arrow-up"},__jsx(Arrow.SvgArrow,null)),__jsx("span",{onClick:addValue(-1),className:"fenext-input-number-icon-arrow-down"},__jsx(Arrow.SvgArrow,null))))),onChangeValidate:function onChangeValidate(v){var _props$onChangeValida,_props$onChangeValida2,v2=minMaxValue(valueToNumber(v)),s=null!==(_props$onChangeValida=null==props||null===(_props$onChangeValida2=props.onChangeValidate)||void 0===_props$onChangeValida2?void 0:_props$onChangeValida2.call(props,v2))&&void 0!==_props$onChangeValida?_props$onChangeValida:v2;return"".concat(s)},onChange:function onChange(v){setValue(minMaxValue(valueToNumber(v)))}})))};InputNumber.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{value:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:'The default value of the input.\n@default ""'},defaultValue:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:'The default value of the input.\n@default ""',defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:'(v: number | "") => void',signature:{arguments:[{type:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},name:"v"}],return:{name:"void"}}},description:"The callback function that is triggered when the value of the input changes."},onChangeValidate:{required:!1,tsType:{name:"signature",type:"function",raw:'(v: number | "") => void',signature:{arguments:[{type:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},name:"v"}],return:{name:"void"}}},description:"The callback function that is triggered when the input loses focus, after the value has been validated."},min:{required:!1,tsType:{name:"number"},description:"The minimum value allowed for the input."},max:{required:!1,tsType:{name:"number"},description:"The maximum value allowed for the input."},useBtnIncreaseDecrease:{required:!1,tsType:{name:"boolean"},description:"The useBtnIncreaseDecrease show btn.",defaultValue:{value:"false",computed:!1}},disabledScroll:{required:!1,tsType:{name:"boolean"},description:"The disabledScroll.",defaultValue:{value:"false",computed:!1}},validator:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["Omit"]};var _stories_jsx=react.createElement;const _stories={title:"Input/InputNumber",component:InputNumber};var Profile=function Profile(args){return _stories_jsx(InputNumber,args,"Test Children")},Index=Profile.bind({});Index.args={label:"Label",placeholder:"Placeholder"};var UseValidator=Profile.bind({}),UseValidatorArg={label:"Label",placeholder:"Placeholder",validator:(0,cjs.y)().isNumber().isRequired().isMin(4)};UseValidator.args=UseValidatorArg,Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputNumber {...args}>Test Children</InputNumber>",...Index.parameters?.docs?.source}}},UseValidator.parameters={...UseValidator.parameters,docs:{...UseValidator.parameters?.docs,source:{originalSource:"args => <InputNumber {...args}>Test Children</InputNumber>",...UseValidator.parameters?.docs?.source}}};const __namedExportsOrder=["Index","UseValidator"]},"./node_modules/fenextjs-svg/cjs/Arrow/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SvgArrow=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SvgArrow=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 452 258",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M225.922 257.565C217.824 257.565 209.727 254.473 203.553 248.302L9.26925 54.0165C-3.08975 41.6575 -3.08975 21.6195 9.26925 9.2655C21.6233 -3.0885 41.6573 -3.0885 54.0173 9.2655L225.922 181.181L397.828 9.2715C410.187 -3.0825 430.219 -3.0825 442.572 9.2715C454.937 21.6255 454.937 41.6635 442.572 54.0225L248.291 248.309C242.114 254.481 234.017 257.565 225.922 257.565Z",fill:"currentColor"}))},"./node_modules/fenextjs-svg/cjs/NumberDecrease/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SvgNumberDecrease=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SvgNumberDecrease=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 416 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M32 0H240H384C401.7 0 416 14.3 416 32C416 49.7 401.7 64 384 64H240H32C14.3 64 0 49.7 0 32C0 14.3 14.3 0 32 0Z",fill:"currentColor"}))},"./node_modules/fenextjs-svg/cjs/NumberIncrease/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SvgNumberIncrease=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SvgNumberIncrease=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 416 416",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M240 32C240 14.3 225.7 0 208 0C190.3 0 176 14.3 176 32V176H32C14.3 176 0 190.3 0 208C0 225.7 14.3 240 32 240H176V384C176 401.7 190.3 416 208 416C225.7 416 240 401.7 240 384V240H384C401.7 240 416 225.7 416 208C416 190.3 401.7 176 384 176H240V32Z",fill:"currentColor"}))}}]);