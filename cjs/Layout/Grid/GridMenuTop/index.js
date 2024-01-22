"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGridMenuTop = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../../../Loader");
const PageProgress_1 = require("../../../PageProgress");
const LayoutGridMenuTop = ({ className = "", classNameLoader = "", classNameChildren = "", classNameMenuTop = "", children, menuTop, loader = false, usePageProgress = true, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-layout-grid fenext-layout-grid-mt ${className}`, ...props },
            react_1.default.createElement("div", { className: `fenext-layout-grid-mt-menu-top ${classNameMenuTop}` }, menuTop),
            react_1.default.createElement("div", { className: `fenext-layout-grid-mt-children ${classNameChildren}` },
                usePageProgress && react_1.default.createElement(PageProgress_1.PageProgress, null),
                loader ? (react_1.default.createElement(Loader_1.Loader, { classNameLoader: `${classNameLoader} fenext-layout-grid-loader` })) : (react_1.default.createElement(react_1.default.Fragment, null, children))))));
};
exports.LayoutGridMenuTop = LayoutGridMenuTop;
//# sourceMappingURL=index.js.map