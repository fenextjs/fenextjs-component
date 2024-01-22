"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGridMenuLeft = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../../../Loader");
const PageProgress_1 = require("../../../PageProgress");
const LayoutGridMenuLeft = ({ className = "", classNameLoader = "", classNameChildren = "", classNameMenuLeft = "", classNameMenuLeftContent = "", children, menuLeft, loader = false, menuLeftActive = true, menuLeftMovilActive = false, useHeaderButtonMenu = false, usePageProgress = true, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-layout-grid fenext-layout-grid-ml 
                    ${className} 
                    fenext-layout-grid-ml-${menuLeftActive ? "active" : "inactive"}
                    fenext-layout-grid-ml-movil-${menuLeftMovilActive ? "active" : "inactive"}
                    fenext-layout-grid-ml-${useHeaderButtonMenu ? "use-btn-menu" : ""}
                `, ...props },
            react_1.default.createElement("div", { className: `fenext-layout-grid-ml-menu-left ${classNameMenuLeft}` },
                react_1.default.createElement("div", { className: `fenext-layout-grid-ml-menu-left-content ${classNameMenuLeftContent}` }, menuLeft)),
            react_1.default.createElement("div", { className: `fenext-layout-grid-ml-children ${classNameChildren}` },
                usePageProgress && react_1.default.createElement(PageProgress_1.PageProgress, null),
                loader ? (react_1.default.createElement(Loader_1.Loader, { classNameLoader: `${classNameLoader} fenext-layout-grid-loader` })) : (react_1.default.createElement(react_1.default.Fragment, null, children))))));
};
exports.LayoutGridMenuLeft = LayoutGridMenuLeft;
//# sourceMappingURL=index.js.map