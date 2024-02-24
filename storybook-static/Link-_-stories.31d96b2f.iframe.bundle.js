"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9887],{"./src/Link/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Link/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Link",component:_index__WEBPACK_IMPORTED_MODULE_1__.N};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.N,args)};Profile.displayName="Profile";var Index=Profile.bind({});Index.args={children:"hola",href:"#"},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <Link {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),_excluded=["className","children","_t"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Link=function Link(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$children=_ref.children,children=void 0===_ref$children?"Link":_ref$children,_t=_ref._t,props=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props,{className:"fenext-link ".concat(className)}),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(children,_t))))};try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},className:{defaultValue:{value:""},description:"The class name for the component.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}}}]);