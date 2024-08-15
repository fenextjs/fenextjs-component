"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRange = void 0;
const tslib_1 = require("tslib");
const useData_1 = require("fenextjs-hook/cjs/useData");
const react_1 = tslib_1.__importStar(require("react"));
const InputRange = ({ className = "", classNameContentValue = "", classNameValue = "", classNameValueMax = "", classNameValueMin = "", classNameContentRange = "", classNameCurrent = "", classNameMax = "", classNameMin = "", classNameContentCircle = "", classNameCircle = "", classNameLine = "", min = -100, max = 100, defaultValue = 0, defaultValueMin = -100, defaultValueMax = 100, useValue = false, value = 0, valueMin = -100, valueMax = 100, onChange, onChangeRange, useRange = false, step = 1, showNumber = "top", }) => {
    const onParceData = (d) => {
        const _max = useValue ? valueMax : d.max;
        const _min = useValue ? valueMin : d.min;
        const _value = useValue ? value : d.value;
        return {
            ...d,
            center: (_max - _min) / 2 + _min,
            value: _value,
            min: _min,
            max: Math.max(_min + step, _max),
        };
    };
    const { dataMemo: _data, onChangeData } = (0, useData_1.useData)({
        min: defaultValueMin,
        max: defaultValueMax,
        value: defaultValue,
        center: (defaultValueMax - defaultValueMin) / 2 + defaultValueMin,
    }, {
        onChangeDataMemoAfter: (d) => {
            onChange?.(d.value);
            onChangeRange?.([d.min, d.max]);
        },
        onMemo: onParceData,
    });
    const data = (0, react_1.useMemo)(() => onParceData(_data), [_data, value, valueMax, valueMin, step]);
    const onChangeItem = (id) => (event) => {
        onChangeData(id)(parseFloat(event.target.value));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-range ${className} ${useRange ? "range" : ""} 
                fenext-input-range-show-number-${showNumber}
                `, style: {
                ["--line"]: max - min,
                ["--min"]: min,
                ["--max"]: max,
                ["--minValue"]: data.min,
                ["--maxValue"]: data.max,
                ["--value"]: data.value,
                ["--center"]: data.center,
                ["--step"]: step,
                ["--minP"]: `${((data.min - min) / (max - min)) * 100}%`,
                ["--maxP"]: `${((max - data.max) / (max - min)) * 100}%`,
                ["--valueP"]: `${((data.value - min) / (max - min)) * 100}%`,
                ["--centerP"]: `${((data.center - min) / (max - min)) * 100}%`,
            } },
            react_1.default.createElement("div", { className: `fenext-input-range-content-value ${classNameContentValue}    ` },
                react_1.default.createElement("div", { className: `fenext-input-range-value fenext-input-range-value-min ${classNameValueMin}    ` }, data.min),
                react_1.default.createElement("div", { className: `fenext-input-range-value-arrow fenext-input-range-value-min ${classNameValueMin}    ` }),
                react_1.default.createElement("div", { className: `fenext-input-range-value fenext-input-range-value-current ${classNameValue}    ` }, data.value),
                react_1.default.createElement("div", { className: `fenext-input-range-value-arrow fenext-input-range-value-current ${classNameValue}    ` }),
                react_1.default.createElement("div", { className: `fenext-input-range-value fenext-input-range-value-max ${classNameValueMax}    ` }, data.max),
                react_1.default.createElement("div", { className: `fenext-input-range-value-arrow fenext-input-range-value-max ${classNameValueMax}    ` })),
            react_1.default.createElement("div", { className: `fenext-input-range-content-circle ${classNameContentCircle}    ` },
                react_1.default.createElement("div", { className: `fenext-input-range-line ${classNameLine}    ` }),
                react_1.default.createElement("div", { className: `fenext-input-range-circle fenext-input-range-circle-min ${classNameCircle}    ` }),
                react_1.default.createElement("div", { className: `fenext-input-range-circle fenext-input-range-circle-current ${classNameCircle}    ` }),
                react_1.default.createElement("div", { className: `fenext-input-range-circle fenext-input-range-circle-max ${classNameCircle}    ` })),
            react_1.default.createElement("div", { className: `fenext-input-range-content-range ${classNameContentRange}    ` },
                react_1.default.createElement("input", { type: "range", className: `fenext-input-range-item fenext-input-range-min ${classNameMin} `, min: min, max: max - step, value: data.min, onChange: onChangeItem("min"), step: step }),
                react_1.default.createElement("input", { type: "range", className: `fenext-input-range-item fenext-input-range-current ${classNameCurrent} `, min: min, max: max, value: data.value, onChange: onChangeItem("value"), step: step }),
                react_1.default.createElement("input", { type: "range", className: `fenext-input-range-item fenext-input-range-max ${classNameMax} `, min: min + step, max: max, value: data.max, onChange: onChangeItem("max"), step: step })))));
};
exports.InputRange = InputRange;
//# sourceMappingURL=index.js.map