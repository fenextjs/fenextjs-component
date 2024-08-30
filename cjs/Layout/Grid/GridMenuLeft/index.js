"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGridMenuLeft = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../../../Loader");
const PageProgress_1 = require("../../../PageProgress");
const AlertHook_1 = require("../../../AlertHook");
const LayoutGridMenuLeft = ({ className = "", classNameLoader = "", classNameChildren = "", classNameMenuLeft = "", classNameMenuLeftContent = "", children, menuLeft, loader = false, menuLeftActive = true, menuLeftMovilActive = false, useHeaderButtonMenu = false, usePageProgress = true, useAlertHook = true, alertHookProps = {}, target = "fenext-btn-menu-checkbox", ...props }) => {
    const t = `[name="${target}"]:checked`;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-layout-grid fenext-layout-grid-ml 
                    ${className} 
                    fenext-layout-grid-ml-${menuLeftActive ? "active" : "inactive"}
                    fenext-layout-grid-ml-movil-${menuLeftMovilActive ? "active" : "inactive"}
                    fenext-layout-grid-ml-${useHeaderButtonMenu ? "use-btn-menu" : ""}
                `, "data-target": target, ...props },
            react_1.default.createElement("div", { className: `fenext-layout-grid-ml-menu-left ${classNameMenuLeft}` },
                react_1.default.createElement("div", { className: `fenext-layout-grid-ml-menu-left-content ${classNameMenuLeftContent}` },
                    menuLeft,
                    target)),
            react_1.default.createElement("div", { className: `fenext-layout-grid-ml-children ${classNameChildren}` },
                usePageProgress && react_1.default.createElement(PageProgress_1.PageProgress, null),
                useAlertHook && (react_1.default.createElement(AlertHook_1.AlertHook, { ...alertHookProps, className: `fenext-layout-grid-alert ${alertHookProps?.className ?? ""}` })),
                loader ? (react_1.default.createElement(Loader_1.Loader, { classNameLoader: `${classNameLoader} fenext-layout-grid-loader` })) : (react_1.default.createElement(react_1.default.Fragment, null, children))),
            target != "fenext-btn-menu-checkbox" && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("style", null, `
                                body:has(${t}) .fenext-layout-grid-ml-use-btn-menu[data-target=${target}] {
                                    @media (min-width: 576px) {
                                        --size-menu : var(--fenext-size-menu-left, auto);
                                    }
                                    @media (max-width: 575px) {
                                        --clip-path: circle(200% at 0% 0%);
                                    }
                                }
                                body:not(:has(${t})) .fenext-layout-grid-ml-use-btn-menu[data-target=${target}] {
                                    @media (min-width: 576px) {
                                        --size-menu : var(--fenext-size-menu-left-close, 0px);
                                    }
                                    @media (max-width: 575px) {
                                        --clip-path: circle(0% at 0% 0%);
                                    }
                                }
                            `))))));
};
exports.LayoutGridMenuLeft = LayoutGridMenuLeft;
//# sourceMappingURL=index.js.map