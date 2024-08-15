"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGridMenuTopLeft = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const GridMenuTop_1 = require("../GridMenuTop");
const GridMenuLeft_1 = require("../GridMenuLeft");
const LayoutGridMenuTopLeft = ({ className = "", classNameLoader = "", classNameChildren = "", classNameMenuTop = "", classNameMenuLeft = "", classNameMenuLeftContent = "", children, menuLeft, menuTop, loader = false, menuLeftActive = true, menuLeftMovilActive = false, useHeaderButtonMenu = false, usePageProgress = true, alertHookProps, useAlertHook = true, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GridMenuTop_1.LayoutGridMenuTop, { className: `fenext-layout-grid fenext-layout-grid-mtl ${className}`, classNameMenuTop: classNameMenuTop, menuTop: menuTop, usePageProgress: false, useAlertHook: false },
            react_1.default.createElement(GridMenuLeft_1.LayoutGridMenuLeft, { classNameLoader: classNameLoader, classNameChildren: classNameChildren, classNameMenuLeft: classNameMenuLeft, classNameMenuLeftContent: classNameMenuLeftContent, menuLeft: menuLeft, loader: loader, menuLeftActive: menuLeftActive, menuLeftMovilActive: menuLeftMovilActive, useHeaderButtonMenu: useHeaderButtonMenu, usePageProgress: usePageProgress, useAlertHook: useAlertHook, alertHookProps: alertHookProps }, children))));
};
exports.LayoutGridMenuTopLeft = LayoutGridMenuTopLeft;
//# sourceMappingURL=index.js.map