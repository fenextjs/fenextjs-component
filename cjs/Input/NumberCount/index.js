"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumberCount = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../Text");
const useData_1 = require("fenextjs-hook/cjs/useData");
const NumberCount_1 = require("fenextjs-functions/cjs/parse/NumberCount");
const Number_1 = require("fenextjs-functions/cjs/parse/Number");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const InputNumberCount = ({ classNameNumberCount = "", classNameNumberCountText = "", classNameNumberCountNumber = "", onChange, value = undefined, defaultValue, symbolInit = "$", symbolFinal = "", validator = undefined, ...props }) => {
    const minMaxValue = (v) => {
        return Math.max(props.min ?? -Infinity, Math.min(props.max ?? Infinity, v));
    };
    const { data, dataMemo, onChangeData, isChange } = (0, useData_1.useData)({
        number: value ?? defaultValue ?? "",
    }, {
        onMemo: ({ number }) => {
            number = (0, Number_1.parseNumber)(number);
            return {
                number,
                numberText: symbolInit +
                    (0, NumberCount_1.parseNumberCount)(value ?? number) +
                    symbolFinal,
            };
        },
        onChangeDataAfter: ({ number }) => {
            number = (0, Number_1.parseNumber)(number);
            onChange?.(number);
        },
    });
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: dataMemo.number,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    const onChangeNumber = (number) => {
        const n = minMaxValue((0, Number_1.parseNumber)(number));
        onChangeData("number")(n);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-number-count ${classNameNumberCount}` },
            react_1.default.createElement("div", { className: `fenext-input-number-count-text ${classNameNumberCountText}` },
                react_1.default.createElement(Text_1.InputText, { ...props, onChange: onChangeNumber, type: "text", value: dataMemo.numberText, isChange: isChange, validator: undefined, error: errorFenext })),
            react_1.default.createElement("div", { className: `fenext-input-number-count-number ${classNameNumberCountNumber}` },
                react_1.default.createElement(Text_1.InputText, { label: props?.label, disabled: props?.disabled, loader: props?.loader, onChange: onChangeNumber, type: "number", value: `${data.number}`, yup: null, validator: undefined, error: errorFenext })),
            react_1.default.createElement("div", { className: `fenext-input-number-count-number-movil ${classNameNumberCountNumber}` },
                react_1.default.createElement(Text_1.InputText, { label: props?.label, disabled: props?.disabled, loader: props?.loader, onChange: onChangeNumber, type: "number", value: `${data.number}`, yup: null, validator: undefined, error: errorFenext })))));
};
exports.InputNumberCount = InputNumberCount;
//# sourceMappingURL=index.js.map