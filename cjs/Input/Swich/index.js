"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSwich = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
/**
 * Component that renders a swich input.
 * Takes an InputSwichProps object as props.
 */
const InputSwich = ({ className = "", classNameActive = "", classNameInactive = "", classNameCicle = "", name = "", onChange, defaultValue = false, useValue = false, value = false, disabled = false, onValidateCheck = async () => { }, }) => {
    const [checked_, setChecked] = (0, react_1.useState)(defaultValue === true);
    const checked = (0, react_1.useMemo)(() => (useValue ? value : checked_), [useValue, value, checked_]);
    const onChecked = async () => {
        try {
            if (disabled) {
                return;
            }
            const r = await onValidateCheck(checked);
            if (r === false) {
                throw new Error("1");
            }
            setChecked(!checked);
            onChange?.(!checked);
        }
        catch {
            return;
        }
    };
    return (react_1.default.createElement("label", { className: `fenext-input-swich ${className}  ${checked ? classNameActive : classNameInactive}` },
        react_1.default.createElement("input", { type: "checkbox", name: name, checked: checked, onChange: onChecked, className: "fenext-input-swich-input" }),
        react_1.default.createElement("span", { className: `fenext-input-swich-circle ${classNameCicle}` })));
};
exports.InputSwich = InputSwich;
//# sourceMappingURL=index.js.map