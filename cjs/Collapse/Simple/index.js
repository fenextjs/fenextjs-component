"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../../Loader");
const Arrow_1 = require("fenextjs-svg/cjs/Arrow");
const fenextjs_functions_1 = require("fenextjs-functions");
const Collapse = ({ className = "", classNameHeader = "", classNameHeaderContent = "", classNameHeaderIcon = "", classNameBody = "", children, loader = false, header, disabled = false, defaultActive = false, active = undefined, name = "", type = "checkbox", show = "checked", status = "none", onChange, iconArrow = react_1.default.createElement(Arrow_1.Arrow, null), _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-collapse fenext-collapse-status-${status} fenext-collapse-${show} ${className}` },
            react_1.default.createElement("label", { className: `fenext-collapse-header ${classNameHeader}` },
                react_1.default.createElement("input", { type: type, className: `fenext-collapse-header-checkbox`, name: name, disabled: disabled || loader, defaultChecked: defaultActive, ...(active !== undefined
                        ? {
                            checked: active,
                        }
                        : {}), onChange: (e) => {
                        onChange?.(e.target.checked);
                    } }),
                react_1.default.createElement("div", { className: `fenext-collapse-header-content ${classNameHeaderContent}` }, (0, fenextjs_functions_1._tValidate)(header, _t)),
                react_1.default.createElement("div", { className: `fenext-collapse-header-icon ${classNameHeaderIcon}` }, loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Loader_1.Loader, null))) : (react_1.default.createElement(react_1.default.Fragment, null, iconArrow))),
                type == "radio" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("input", { type: type, className: `fenext-collapse-header-uncheck`, name: name, disabled: disabled || loader, onChange: (e) => {
                            onChange?.(e.target.checked);
                        } }))) : (react_1.default.createElement(react_1.default.Fragment, null))),
            react_1.default.createElement("div", { className: `fenext-collapse-body ${classNameBody}` }, (0, fenextjs_functions_1._tValidate)(children, _t)))));
};
exports.Collapse = Collapse;
//# sourceMappingURL=index.js.map