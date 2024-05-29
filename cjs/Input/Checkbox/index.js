"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCheckbox = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Check_1 = require("fenextjs-svg/cjs/Check");
const env_log_1 = require("fenextjs-functions/cjs/env_log");
const fenextjs_functions_1 = require("fenextjs-functions");
/**
 * Component that renders a checkbox input.
 * Takes an InputCheckboxProps object as props.
 */
const InputCheckbox = ({ classNameLabel = "", classNameLabelActive = "", classNameLabelInactive = "", classNameText = "", classNameContentCheckbox = "", classNameContentCheckboxActive = "", classNameContentCheckboxInactive = "", classNameCheckbox = "", classNameCheckboxActive = "", classNameCheckboxInactive = "", label = "", labelPosition = "right", name = "", onChange = (e) => {
    (0, env_log_1.env_log)(e, {
        name: "input checkbox onchange",
    });
}, defaultValue = false, useValue = false, value = false, disabled = false, icon = react_1.default.createElement(Check_1.Check, null), onValidateCheck = async () => { }, optional = false, optionalText = "(optional)", required = false, requiredText = "*", _t, onActive, onActiveValue, onInactive, onInactiveValue, valueActive, valueInactive, }) => {
    const [checked_, setChecked] = (0, react_1.useState)(defaultValue === true);
    const checked = (0, react_1.useMemo)(() => (useValue ? value : checked_), [useValue, value, checked_]);
    const onChecked = async () => {
        if (disabled) {
            return;
        }
        const v = !checked;
        if (v) {
            await onValidateCheck();
        }
        setChecked(v);
        onChange(v);
        if (v) {
            onActive?.();
            onActiveValue?.(valueActive);
        }
        else {
            onInactive?.();
            onInactiveValue?.(valueInactive);
        }
    };
    return (react_1.default.createElement("label", { className: `fenext-input-checkbox ${labelPosition} ${classNameLabel}  ${checked ? classNameLabelActive : classNameLabelInactive}` },
        react_1.default.createElement("input", { type: "checkbox", name: name, checked: checked, onChange: onChecked, className: "fenext-input-checkbox-input" }),
        react_1.default.createElement("span", { className: `fenext-input-checkbox-box ${classNameContentCheckbox} ${checked
                ? classNameContentCheckboxActive
                : classNameContentCheckboxInactive}` },
            react_1.default.createElement("span", { className: `
                    fenext-input-checkbox-box-icon
                    ${classNameCheckbox} ${checked
                    ? classNameCheckboxActive
                    : classNameCheckboxInactive}` }, checked && icon)),
        react_1.default.createElement("span", { className: `fenext-input-checkbox-text ${classNameText}` },
            (0, fenextjs_functions_1._tValidate)(label, _t),
            optional && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("small", { className: "fenext-input-optional" }, (0, fenextjs_functions_1._tValidate)(optionalText, _t)))),
            required && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("small", { className: "fenext-input-required" }, (0, fenextjs_functions_1._tValidate)(requiredText, _t)))))));
};
exports.InputCheckbox = InputCheckbox;
//# sourceMappingURL=index.js.map