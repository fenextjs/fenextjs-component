"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Loader_1 = require("../../Loader");
const Arrow_1 = require("fenextjs-svg/cjs/Arrow");
const Collapse = ({ className = "", classNameHeader = "", classNameHeaderContent = "", classNameHeaderIcon = "", classNameBody = "", children, loader = false, header, disabled = false, defaultActive = false, active: activeProps = undefined, name = "", type = "checkbox", show = "checked", status = "none", onChange, iconArrow = react_1.default.createElement(Arrow_1.Arrow, null), renderContentDependingOnActive = false, }) => {
    const [_active, setActive] = (0, react_1.useState)(defaultActive);
    const active = (0, react_1.useMemo)(() => activeProps ?? _active, [activeProps, _active]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-collapse
                    fenext-collapse-status-${status}
                    fenext-collapse-${show}
                    fenext-collapse-render-${renderContentDependingOnActive ? "active" : "inactive"}
                    ${className}
                ` },
            react_1.default.createElement("label", { className: `fenext-collapse-header ${classNameHeader}` },
                react_1.default.createElement("input", { type: type, className: `fenext-collapse-header-checkbox`, name: name, disabled: disabled || loader, checked: active, onChange: (e) => {
                        onChange?.(e.target.checked);
                        setActive(e.target.checked);
                    } }),
                react_1.default.createElement("div", { className: `fenext-collapse-header-content ${classNameHeaderContent}` },
                    header,
                    type == "radio" && !disabled ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("input", { type: type, className: `fenext-collapse-header-uncheck`, name: name, disabled: loader, onChange: () => {
                                onChange?.(false);
                                setActive(false);
                            } }))) : (react_1.default.createElement(react_1.default.Fragment, null))),
                react_1.default.createElement("div", { className: `fenext-collapse-header-icon ${classNameHeaderIcon}` }, loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Loader_1.Loader, null))) : (react_1.default.createElement(react_1.default.Fragment, null, iconArrow)))),
            react_1.default.createElement("div", { className: `fenext-collapse-body ${classNameBody}` }, renderContentDependingOnActive ? (react_1.default.createElement(react_1.default.Fragment, null, active && react_1.default.createElement(react_1.default.Fragment, null, children))) : (react_1.default.createElement(react_1.default.Fragment, null, children))))));
};
exports.Collapse = Collapse;
//# sourceMappingURL=index.js.map