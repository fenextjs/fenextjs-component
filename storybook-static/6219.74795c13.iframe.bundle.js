"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[6219],{"./src/Design/Typography/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>DesignTypography});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),cjs=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),SelectT=__webpack_require__("./src/Input/SelectT/index.tsx"),Color=__webpack_require__("./src/Input/Color/index.tsx"),NumberCount=__webpack_require__("./src/Input/NumberCount/index.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),Simple=__webpack_require__("./src/Collapse/Simple/index.tsx"),Text=__webpack_require__("./src/Text/index.tsx");const ConstDesignTypographyFontSizeUnit=["px","em","rem"],ConstDesignTypographyTextAlignUnit=["center","justify","left","right"],ConstDesignTypographyWeightUnit=[100,200,300,400,500,600,700,800,900],ConstDesignTypographyTransformUnit=["none","uppercase","lowercase","capitalize"],ConstDesignTypographyStyleUnit=["normal","italic","oblique"],ConstDesignTypographyDecorationUnit=["normal","underline","overline","line-through"],ConstDesignTypographyLineHeightUnit=["normal","px","em","rem"],ConstDesignTypographyLetterSpacingUnit=["px","em","rem"],ConstDesignTypographyWordSpacingUnit=["px","em","rem"];var fenextjs_hook_cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const parseDesignTypographyValueProps_to_CSSProperties=d=>({fontSize:"".concat(d.fontSize).concat(d.fontSizeUnit),textAlign:d.textAlign,fontWeight:d.weight,textTransform:d.transform,fontStyle:d.style,textDecoration:d.decoration,lineHeight:"".concat(d.lineHeight).concat("normal"==d.lineHeightUnit?"":d.lineHeightUnit),letterSpacing:"".concat(d.letterSpacing).concat(d.letterSpacingUnit),wordSpacing:"".concat(d.wordSpacing).concat(d.wordSpacingUnit),color:d.color}),DesignTypography=param=>{let{className="",_t,textTypography="Typography",textExample="Example",textExampleValue="Lorem ipsum dolor sit",textColor="Color",textSize="Size",textAlign="Alignment",textWeight="Weight",textTransform="Transform",textStyle="Style",textDecoration="Decoration",textLineHeight="Line Height",textLetterSpacing="Letter Spacing",textWordSpacing="Word Spacing",defaultValue={fontSize:20,fontSizeUnit:"px",textAlign:"left",weight:400,transform:"none",style:"normal",decoration:"normal",lineHeight:1.2,lineHeightUnit:"normal",letterSpacing:0,letterSpacingUnit:"px",wordSpacing:0,wordSpacingUnit:"px"},value,onChange,onChangeStyles,collapseName,collapseType,collapseUseActiveForShowChildren=!0}=param;const{data:data_,onChangeData,dataMemo}=(0,fenextjs_hook_cjs.useData)(defaultValue,{onChangeDataAfter:onChange,onChangeDataMemoAfter:onChangeStyles,onMemo:parseDesignTypographyValueProps_to_CSSProperties}),data=(0,react.useMemo)((()=>null!=value?value:data_),[value,data_]),_p=e=>({id:"".concat(e),text:"".concat(e),data:e});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fenext-design-typography ".concat(className," "),children:(0,jsx_runtime.jsx)(Simple.S,{header:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,cjs._tValidate)(textTypography,_t)}),iconArrow:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(fenextjs_svg_cjs.Edit,{})}),rotateIcon:!1,name:collapseName,type:collapseType,useActiveForShowChildren:collapseUseActiveForShowChildren,children:(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-content ",children:[(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item fenext-design-typography-item-2",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textExample,_t)}),(0,jsx_runtime.jsx)("div",{className:"fenext-design-typography-content-example ",children:(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsx)("div",{style:dataMemo,children:(0,cjs._tValidate)(textExampleValue,_t)})})})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item ",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textColor,_t)}),(0,jsx_runtime.jsx)(Color.u,{defaultValue:data.color,onChange:onChangeData("color")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item fenext-design-typography-item-3",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textSize,_t)}),(0,jsx_runtime.jsx)(NumberCount.P,{symbolInit:"",symbolFinal:data.fontSizeUnit,defaultValue:data.fontSize,min:0,aplyMin:!0,onChange:onChangeData("fontSize")}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyFontSizeUnit],defaultValue:data.fontSizeUnit,onChange:onChangeData("fontSizeUnit")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item ",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textAlign,_t)}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyTextAlignUnit],defaultValue:data.textAlign,onChange:onChangeData("textAlign")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item ",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textWeight,_t)}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyWeightUnit],defaultValue:data.weight,onChange:onChangeData("weight")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item ",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textTransform,_t)}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyTransformUnit],defaultValue:data.transform,onChange:onChangeData("transform")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item ",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textStyle,_t)}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyStyleUnit],defaultValue:data.style,onChange:onChangeData("style")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item ",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textDecoration,_t)}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyDecorationUnit],defaultValue:data.decoration,onChange:onChangeData("decoration")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item fenext-design-typography-item-3",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textLineHeight,_t)}),(0,jsx_runtime.jsx)(NumberCount.P,{symbolInit:"",symbolFinal:"normal"==data.lineHeightUnit?"":data.lineHeightUnit,defaultValue:data.lineHeight,onChange:onChangeData("lineHeight")}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyLineHeightUnit],defaultValue:data.lineHeightUnit,onChange:onChangeData("lineHeightUnit")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item fenext-design-typography-item-3",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textLetterSpacing,_t)}),(0,jsx_runtime.jsx)(NumberCount.P,{symbolInit:"",symbolFinal:data.letterSpacingUnit,defaultValue:data.letterSpacing,onChange:onChangeData("letterSpacing")}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyLetterSpacingUnit],defaultValue:data.letterSpacingUnit,onChange:onChangeData("letterSpacingUnit")})]}),(0,jsx_runtime.jsxs)("div",{className:"fenext-design-typography-item fenext-design-typography-item-3",children:[(0,jsx_runtime.jsx)(Text.E,{children:(0,cjs._tValidate)(textWordSpacing,_t)}),(0,jsx_runtime.jsx)(NumberCount.P,{symbolInit:"",symbolFinal:data.wordSpacingUnit,defaultValue:data.wordSpacing,onChange:onChangeData("wordSpacing")}),(0,jsx_runtime.jsx)(SelectT.L,{onParse:_p,options:[...ConstDesignTypographyWordSpacingUnit],defaultValue:data.wordSpacingUnit,onChange:onChangeData("wordSpacingUnit")})]})]})})})})};DesignTypography.__docgenInfo={description:"",methods:[],displayName:"DesignTypography",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},defaultValue:{required:!1,tsType:{name:"DesignTypographyValueProps"},description:"",defaultValue:{value:'{\n    fontSize: 20,\n    fontSizeUnit: "px",\n    textAlign: "left",\n    weight: 400,\n    transform: "none",\n    style: "normal",\n    decoration: "normal",\n    lineHeight: 1.2,\n    lineHeightUnit: "normal",\n    letterSpacing: 0,\n    letterSpacingUnit: "px",\n    wordSpacing: 0,\n    wordSpacingUnit: "px",\n}',computed:!1}},value:{required:!1,tsType:{name:"DesignTypographyValueProps"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: DesignTypographyValueProps) => void",signature:{arguments:[{type:{name:"DesignTypographyValueProps"},name:"data"}],return:{name:"void"}}},description:""},onChangeStyles:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: CSSProperties) => void",signature:{arguments:[{type:{name:"CSSProperties"},name:"data"}],return:{name:"void"}}},description:""},textTypography:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Typography"',computed:!1}},textExample:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Example"',computed:!1}},textExampleValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Lorem ipsum dolor sit"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Color"',computed:!1}},textSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Size"',computed:!1}},textAlign:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Alignment"',computed:!1}},textWeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Weight"',computed:!1}},textTransform:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Transform"',computed:!1}},textStyle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Style"',computed:!1}},textDecoration:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Decoration"',computed:!1}},textLineHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Line Height"',computed:!1}},textLetterSpacing:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Letter Spacing"',computed:!1}},textWordSpacing:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Word Spacing"',computed:!1}},collapseName:{required:!1,tsType:{name:'CollapseProps["name"]',raw:'CollapseProps["name"]'},description:""},collapseType:{required:!1,tsType:{name:'CollapseProps["type"]',raw:'CollapseProps["type"]'},description:""},collapseUseActiveForShowChildren:{required:!1,tsType:{name:'CollapseProps["useActiveForShowChildren"]',raw:'CollapseProps["useActiveForShowChildren"]'},description:"",defaultValue:{value:"true",computed:!1}}},composes:["_TProps"]}}}]);