"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9044],{"./src/Print/Page/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["className","onComponent"],__jsx=react.createElement,PrintPage=function PrintPage(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onComponent=_ref.onComponent,props=(0,objectWithoutProperties.A)(_ref,_excluded),_usePrintData=(0,cjs.usePrintData)(props),data=_usePrintData.data,load=_usePrintData.load,COMPONENT=(0,react.useMemo)((function(){return null==onComponent?void 0:onComponent({data,load})}),[data,load]);return __jsx(react.Fragment,null,__jsx("div",{className:"fenext-print-page ".concat(className," ")},COMPONENT))};PrintPage.__docgenInfo={description:"",methods:[],displayName:"PrintPage",props:{onComponent:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PrintPageComponentProps<T>) => ReactNode",signature:{arguments:[{type:{name:"PrintPageComponentProps",elements:[{name:"T"}],raw:"PrintPageComponentProps<T>"},name:"data"}],return:{name:"ReactNode"}}},description:"The class name for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["usePrintDataProps"]};var _stories_jsx=react.createElement;const _stories={title:"Print/Page",component:PrintPage};var Index=function Profile(args){return _stories_jsx(PrintPage,args)}.bind({});Index.args={url:"/",data:{},onComponent:function onComponent(_ref){var data=_ref.data,load=_ref.load;return _stories_jsx(react.Fragment,null,_stories_jsx("div",null,"Data:",JSON.stringify(null!=data?data:{})," ",load?"load":""))}},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <PrintPage {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]}}]);