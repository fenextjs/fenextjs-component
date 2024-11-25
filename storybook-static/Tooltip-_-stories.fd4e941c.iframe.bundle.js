"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3272],{"./src/Tooltip/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_stories});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Portal=__webpack_require__("./src/Portal/index.tsx"),cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["className","children","tooltip","positionX","positionY"],__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Tooltip=function Tooltip(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,children=_ref.children,tooltip=_ref.tooltip,_ref$positionX=_ref.positionX,positionX=void 0===_ref$positionX?"center":_ref$positionX,_ref$positionY=_ref.positionY,positionY=void 0===_ref$positionY?"top":_ref$positionY,props=(0,objectWithoutProperties.A)(_ref,_excluded),_use_T=(0,cjs.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t,ref=(0,react.useRef)(null),refTooltipContent=(0,react.useRef)(null),_useState=(0,react.useState)(void 0),configTooltip=_useState[0],setConfigTooltip=_useState[1],onShowTooltip=function onShowTooltip(){var target=null==ref?void 0:ref.current,tooltipElement=null==refTooltipContent?void 0:refTooltipContent.current;if(tooltipElement){var bounding=target.getBoundingClientRect();setConfigTooltip({"--element-width":"".concat(tooltipElement.offsetWidth,"px"),"--element-height":"".concat(tooltipElement.offsetHeight,"px"),"--element-top":"".concat(bounding.top,"px"),"--element-left":"".concat(bounding.left,"px"),"--element-right":"".concat(bounding.right,"px"),"--element-bottom":"".concat(bounding.bottom,"px"),"--element-center-x":"".concat((bounding.right-bounding.left)/2+bounding.left,"px"),"--element-center-y":"".concat((bounding.bottom-bounding.top)/2+bounding.top,"px")})}};return __jsx(react.Fragment,null,__jsx(Portal.Z,null,__jsx("div",{ref:refTooltipContent,className:"\n                        fenext-tooltip-content \n                        fenext-tooltip-content-x-".concat(positionX," \n                        fenext-tooltip-content-y-").concat(positionY," \n                        fenext-tooltip-content-").concat(configTooltip?"active":"inactive","\n                    "),onMouseEnter:onShowTooltip,onMouseLeave:function onMouseLeave(){setConfigTooltip(void 0)},style:configTooltip},tooltip)),__jsx("div",{ref,className:"fenext-tooltip ".concat(className," "),onMouseEnter:onShowTooltip,onClick:onShowTooltip,onMouseLeave:function onMouseLeave(){setConfigTooltip(void 0)}},__jsx("div",{className:"fenext-tooltip-children"},_t(children))))};Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},positionX:{required:!1,tsType:{name:"union",raw:'"center" | "right" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"The position x for the component.",defaultValue:{value:'"center"',computed:!1}},positionY:{required:!1,tsType:{name:"union",raw:'"center" | "top" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"The position y for the component.",defaultValue:{value:'"top"',computed:!1}}},composes:["_TProps"]};var _stories_jsx=react.createElement;const _stories={title:"Tooltip/Tooltip",component:Tooltip};var Index=function Profile(args){var fn_tooltip=function fn_tooltip(x,y){return _stories_jsx(react.Fragment,null,_stories_jsx(Tooltip,(0,esm_extends.A)({tooltip:_stories_jsx(react.Fragment,null,_stories_jsx("h4",null,"tooltip"),_stories_jsx("h3",null,"x-",x," - y-",y)),positionX:x,positionY:y},args),_stories_jsx("h1",null,"x-",x," - y-",y)))},fn_=function fn_(x,y){return _stories_jsx(react.Fragment,null,_stories_jsx("div",{style:{display:"flex",gap:"10px"}},fn_tooltip(x,y),_stories_jsx("div",{style:{flex:"1"}}),fn_tooltip(x,y),_stories_jsx("div",{style:{flex:"1"}}),fn_tooltip(x,y)))};return _stories_jsx("div",{style:{padding:"50px",minHeight:"100dvh",display:"flex",flexDirection:"column",gap:"50px",justifyContent:"space-between"}},fn_("center","top"),fn_("right","top"),fn_("left","top"),fn_("center","center"),fn_("right","center"),fn_("left","center"),fn_("center","bottom"),fn_("right","bottom"),fn_("left","bottom"))}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:'args => {\n  const fn_tooltip = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <Tooltip tooltip={<>\n                            <h4>tooltip</h4>\n                            <h3>\n                                x-{x} - y-{y}\n                            </h3>\n                        </>} positionX={x} positionY={y} {...args}>\n                    <h1>\n                        x-{x} - y-{y}\n                    </h1>\n                </Tooltip>\n            </>;\n  };\n  const fn_ = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <div style={{\n        display: "flex",\n        gap: "10px"\n      }}>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                </div>\n            </>;\n  };\n  return <div style={{\n    padding: "50px",\n    minHeight: "100dvh",\n    display: "flex",\n    flexDirection: "column",\n    gap: "50px",\n    justifyContent: "space-between"\n  }}>\n            {fn_("center", "top")}\n            {fn_("right", "top")}\n            {fn_("left", "top")}\n            {fn_("center", "center")}\n            {fn_("right", "center")}\n            {fn_("left", "center")}\n            {fn_("center", "bottom")}\n            {fn_("right", "bottom")}\n            {fn_("left", "bottom")}\n        </div>;\n}',...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Portal=function Portal(_ref){var _document,children=_ref.children,container=_ref.container;return window&&"undefined"!=typeof window?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children),null!=container?container:null===(_document=document)||void 0===_document?void 0:_document.body):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)};Portal.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{container:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment",elements:[{name:"Element"},{name:"DocumentFragment"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}}}]);