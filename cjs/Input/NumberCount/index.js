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
const InputNumberCount = ({ onChange, value = undefined, defaultValue, symbolInit = "$", symbolFinal = "", validator: validatorProps = undefined, min = -Infinity, max = Infinity, minError, maxError, optionsParseNumber, aplyMax = true, aplyMin = false, ...props }) => {
    const { data, setDataFunction, isChange } = (0, useData_1.useData)(`${value ?? defaultValue ?? ""}`, {
        onChangeDataAfter: (e) => {
            if (e == "") {
                onChange?.("");
                return;
            }
            onChange?.((0, Number_1.parseNumber)(e));
        },
    });
    const validator = (0, react_1.useMemo)(() => {
        const v = validatorProps ?? (0, fenextjs_validator_1.FenextjsValidator)().isNumber();
        if (!validatorProps) {
            v.isMinOrEqual(min, minError).isMaxOrEqual(max, maxError);
        }
        return v;
    }, [validatorProps, min, max]);
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: (0, Number_1.parseNumber)(data),
        validator: validator,
    });
    const dataText = (0, react_1.useMemo)(() => {
        const d = `${value ?? data}`;
        if (d == "") {
            return "";
        }
        const n = (0, NumberCount_1.parseNumberCount)(d, optionsParseNumber);
        return `${symbolInit}${n}${d.at(-1) == "." ? "." : symbolFinal}`;
    }, [symbolInit, symbolFinal, data, value, optionsParseNumber]);
    const onKeyDown = (event) => {
        props?.onKeyDown?.(event);
        const keyNew = event?.key;
        setDataFunction((old) => {
            let n = `${old}${keyNew}`.replace(/[^0-9.-]/g, "");
            if (keyNew == "Backspace") {
                n = n.slice(0, n.length - 1);
            }
            if (keyNew == "ArrowUp") {
                n = `${(0, Number_1.parseNumber)(n) + 1}`;
            }
            if (keyNew == "ArrowDown") {
                n = `${(0, Number_1.parseNumber)(n) - 1}`;
            }
            if (aplyMax && max != undefined) {
                n = `${Math.min(max, (0, Number_1.parseNumber)(n))}`;
            }
            if (aplyMin && min != undefined) {
                n = `${Math.max(min, (0, Number_1.parseNumber)(n))}`;
            }
            return n;
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, className: `fenext-input-number-count ${props?.className ?? ""}`, 
            // onChange={onChangeNumber}
            type: "text", value: dataText, isChange: isChange, onKeyDown: onKeyDown, validator: undefined, error: errorFenext, inputMode: "numeric" })));
};
exports.InputNumberCount = InputNumberCount;
//# sourceMappingURL=index.js.map