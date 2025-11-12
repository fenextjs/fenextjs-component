"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGridMenuTop = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../../../Loader");
const PageProgress_1 = require("../../../PageProgress");
const AlertHook_1 = require("../../../AlertHook");
const Alert_1 = require("../../../Alert");
const LayoutGridMenuTop = ({ className = "", classNameLoader = "", classNameChildren = "", classNameMenuTop = "", children, menuTop, loader = false, usePageProgress = true, useAlertHook = true, alertHookProps = {}, alert = undefined, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-layout-grid fenext-layout-grid-mt ${className}`, ...props },
            react_1.default.createElement("div", { className: `fenext-layout-grid-mt-menu-top ${classNameMenuTop}` }, menuTop),
            react_1.default.createElement("div", { className: `fenext-layout-grid-mt-children ${classNameChildren}` },
                usePageProgress && react_1.default.createElement(PageProgress_1.PageProgress, null),
                alert != undefined && (react_1.default.createElement(Alert_1.Alert, { ...alert, className: `fenext-layout-grid-alert ${alert?.className ?? ""}` })),
                useAlertHook && (react_1.default.createElement(AlertHook_1.AlertHook, { ...alertHookProps, className: `fenext-layout-grid-alert ${alertHookProps?.className ?? ""}` })),
                loader ? (react_1.default.createElement(Loader_1.Loader, { classNameLoader: `${classNameLoader} fenext-layout-grid-loader` })) : (react_1.default.createElement(react_1.default.Fragment, null, children))))));
};
exports.LayoutGridMenuTop = LayoutGridMenuTop;
//# sourceMappingURL=index.js.map