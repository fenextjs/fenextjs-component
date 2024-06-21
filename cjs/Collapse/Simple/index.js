"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Loader_1 = require("../../Loader");
const Arrow_1 = require("fenextjs-svg/cjs/Arrow");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_functions_1 = require("fenextjs-functions");
const Collapse = ({ className = "", classNameHeader = "", classNameHeaderContent = "", classNameHeaderIcon = "", classNameBody = "", children, loader = false, header, disabled = false, defaultActive = false, active: activeProps = undefined, name = "", type = "checkbox", show = "checked", status = "none", onChange, iconArrow = react_1.default.createElement(Arrow_1.Arrow, null), rotateIcon = true, useActiveForShowChildren = false, }) => {
    const [active_, setActive_] = (0, react_1.useState)(defaultActive);
    const active = (0, react_1.useMemo)(() => activeProps ?? active_, [activeProps, active_]);
    const { onAction } = (0, fenextjs_hook_1.useAction)({
        name: `fenext-collapse-${name}`,
        onActionExecute: () => {
            if (type == "radio") {
                setActive_(false);
                onChange?.(false);
            }
        },
    });
    const setActive = async (e) => {
        onAction();
        if (type == "radio") {
            await (0, fenextjs_functions_1.sleep)(50);
        }
        setActive_(e);
        onChange?.(e);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-collapse
                    fenext-collapse-status-${status}
                    fenext-collapse-rotate-icon-${rotateIcon ? "yes" : "no"}
                    fenext-collapse-${show}
                    fenext-collapse-${useActiveForShowChildren ? "active-for-show-children" : ""}
                    ${className}
                ` },
            react_1.default.createElement("label", { className: `fenext-collapse-header ${classNameHeader}` },
                react_1.default.createElement("input", { type: type, className: `fenext-collapse-header-checkbox`, name: name, disabled: disabled || loader, defaultChecked: defaultActive, ...(active !== undefined
                        ? {
                            checked: active,
                        }
                        : {}), onChange: (e) => {
                        setActive?.(e.target.checked);
                    } }),
                react_1.default.createElement("div", { className: `fenext-collapse-header-content ${classNameHeaderContent}` },
                    header,
                    type == "radio" && !disabled ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("input", { type: type, className: `fenext-collapse-header-uncheck`, name: name, disabled: loader, onChange: () => {
                                setActive?.(false);
                            } }))) : (react_1.default.createElement(react_1.default.Fragment, null))),
                react_1.default.createElement("div", { className: `fenext-collapse-header-icon ${classNameHeaderIcon}` }, loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Loader_1.Loader, null))) : (react_1.default.createElement(react_1.default.Fragment, null, iconArrow)))),
            react_1.default.createElement("div", { className: `fenext-collapse-body ${classNameBody}` }, useActiveForShowChildren ? (react_1.default.createElement(react_1.default.Fragment, null, active && react_1.default.createElement(react_1.default.Fragment, null, children))) : (react_1.default.createElement(react_1.default.Fragment, null, children))))));
};
exports.Collapse = Collapse;
//# sourceMappingURL=index.js.map