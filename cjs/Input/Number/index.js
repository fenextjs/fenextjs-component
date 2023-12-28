"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumber = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const Number_1 = require("fenextjs-svg/cjs/Number");
const arrowCollapse_1 = tslib_1.__importDefault(require("fenextjs-svg/cjs/arrowCollapse"));
const fenextjs_validator_1 = require("fenextjs-validator");
const useValidator_1 = require("fenextjs-hook/cjs/useValidator");
const InputNumber = ({ defaultValue = "", onChange, useBtnIncreaseDecrease = false, validator = undefined, ...props }) => {
    const [value, setValue_] = (0, react_1.useState)(defaultValue ?? "");
    const valueInput = (0, react_1.useMemo)(() => (value == "" ? defaultValue : value), [value, defaultValue]);
    const setValue = (v) => {
        setValue_(v);
        onChange?.(v);
    };
    const minMaxValue = (v) => {
        return Math.max(props.min ?? -Infinity, Math.min(props.max ?? Infinity, v));
    };
    const valueToNumber = (v) => {
        try {
            v = `${v}`.replace?.(/[^\d-]/g, "");
            return parseFloat(v);
        }
        catch {
            return 0;
        }
    };
    const addValue = (add) => () => {
        if (props?.disabled) {
            return;
        }
        const Value = minMaxValue((valueInput == "" ? 0 : valueInput) + add);
        setValue(Value);
    };
    const { error: errorFenext } = (0, useValidator_1.useValidator)({
        data: valueInput,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, type: "number", value: `${valueInput ?? ""}`, className: `fenext-input-number ${props?.className}`, useLoader: false, error: errorFenext, icon: react_1.default.createElement(react_1.default.Fragment, null, useBtnIncreaseDecrease ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { onClick: addValue(1), className: `fenext-input-number-icon-arrow fenext-input-number-icon-increase` },
                    react_1.default.createElement(Number_1.SVGNumberIncrease, null)),
                react_1.default.createElement("span", { onClick: addValue(-1), className: `fenext-input-number-icon-arrow fenext-input-number-icon-decrease` },
                    react_1.default.createElement(Number_1.SVGNumberDecrease, null)))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "fenext-input-number-icon-arrow" },
                    react_1.default.createElement("span", { onClick: addValue(1), className: `fenext-input-number-icon-arrow-up` },
                        react_1.default.createElement(arrowCollapse_1.default, null)),
                    react_1.default.createElement("span", { onClick: addValue(-1), className: `fenext-input-number-icon-arrow-down` },
                        react_1.default.createElement(arrowCollapse_1.default, null)))))), onChangeValidate: (v) => {
                const value = minMaxValue(valueToNumber(v));
                const s = props?.onChangeValidate?.(value) ?? value;
                return `${s}`;
            }, onChange: (v) => {
                setValue(minMaxValue(valueToNumber(v)));
            } })));
};
exports.InputNumber = InputNumber;
//# sourceMappingURL=index.js.map