"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumberCount = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const useData_1 = require("fenextjs-hook/cjs/useData");
const NumberCount_1 = require("fenextjs-functions/cjs/parse/NumberCount");
const Number_1 = require("fenextjs-functions/cjs/parse/Number");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const InputNumberCount = ({ onChange, value = undefined, defaultValue, symbolInit = "$", symbolFinal = "", validator: validatorProps = undefined, min = -Infinity, max = Infinity, minError, maxError, ...props }) => {
    const { data, setData, isChange } = (0, useData_1.useData)(value ?? defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });
    const validator = (0, react_1.useMemo)(() => {
        const v = validatorProps ?? (0, fenextjs_validator_1.FenextjsValidator)().isNumber();
        if (!validatorProps) {
            v.isMinOrEqual(min, minError).isMaxOrEqual(max, maxError);
        }
        return v;
    }, [validatorProps, min, max]);
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data,
        validator: validator,
    });
    const dataText = (0, react_1.useMemo)(() => {
        const d = value ?? data;
        if (d == "") {
            return "";
        }
        const n = (0, NumberCount_1.parseNumberCount)(d);
        return `${symbolInit}${n}${symbolFinal}`;
    }, [symbolInit, symbolFinal, data, value]);
    const onChangeNumber = (number) => {
        const n = `${number}`.replace(/[^0-9.-]/g, "");
        if (n == "") {
            setData("");
            return;
        }
        const n2 = (0, Number_1.parseNumber)(number);
        setData(n2);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, className: `fenext-input-number-count ${props?.className ?? ""}`, onChange: onChangeNumber, type: "text", value: dataText, isChange: isChange, validator: undefined, error: errorFenext, inputMode: "numeric" })));
};
exports.InputNumberCount = InputNumberCount;
//# sourceMappingURL=index.js.map