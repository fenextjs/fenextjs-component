"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDateRange = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Date_1 = require("../Date");
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputDateRange = ({ classNameInputDateRange = "", classNameInputDateRangeContentInputDate = "", classNameLabel = "", _t = (e) => e, label, min, max, defaultValue = undefined, value = undefined, onChange, optional = false, optionalText = "(optional)", required = false, requiredText = "*", propsStart = {}, propsEnd = {}, ...props }) => {
    const { dataMemo: data, onChangeData } = (0, useData_1.useData)({
        valueMin: value?.[0] ?? defaultValue?.[0],
        valueMax: value?.[1] ?? defaultValue?.[1],
    }, {
        onMemo: (d) => {
            return {
                valueMin: value?.[0] ?? d.valueMin,
                valueMax: value?.[1] ?? d.valueMax,
            };
        },
        onChangeDataAfter: (d) => {
            if (d) {
                onChange?.([d?.valueMin, d?.valueMax]);
            }
        },
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-date-range ${classNameInputDateRange}` },
            react_1.default.createElement("div", { className: `fenext-input-label ${classNameLabel}` },
                (0, fenextjs_functions_1._tValidate)(label, _t),
                optional && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-optional" }, (0, fenextjs_functions_1._tValidate)(optionalText, _t)))),
                required && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-required" }, (0, fenextjs_functions_1._tValidate)(requiredText, _t))))),
            react_1.default.createElement("div", { className: `fenext-input-date-range-content-input-date ${classNameInputDateRangeContentInputDate}` },
                react_1.default.createElement(Date_1.InputDate, { ...props, ...propsStart, _t: _t, min: min, max: data?.valueMax ?? max, onChange: onChangeData("valueMin"), value: data.valueMin })),
            react_1.default.createElement("div", { className: `fenext-input-date-range-content-input-date ${classNameInputDateRangeContentInputDate}` },
                react_1.default.createElement(Date_1.InputDate, { ...props, ...propsEnd, _t: _t, max: max, min: data?.valueMin ?? min, onChange: onChangeData("valueMax"), value: data.valueMax })))));
};
exports.InputDateRange = InputDateRange;
//# sourceMappingURL=index.js.map