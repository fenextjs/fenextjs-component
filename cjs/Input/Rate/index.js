"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRate = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Start_1 = require("fenextjs-svg/cjs/Start");
const InputRate = ({ className = "", classNameContentStar = "", classNameStar = "", classNameStarActive = "", classNameNumber = "", defaultValue = 0, value = undefined, onChange, }) => {
    const [data, setData] = (0, react_1.useState)(defaultValue);
    const start = (0, react_1.useMemo)(() => Math.max(0, Math.min(value ?? data ?? 0, 5)), [value, data]);
    const onSelectStar = (e) => {
        const v = parseFloat(e.target.value);
        onChange?.(v);
        setData(v);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-rate ${className} `, style: {
                ["--start"]: start,
                ["--startP"]: `${start * 20}%`,
            } },
            react_1.default.createElement("div", { className: `fenext-input-rate-content-start ${classNameContentStar} ` },
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start ${classNameStar}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start ${classNameStar}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start ${classNameStar}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start ${classNameStar}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start ${classNameStar}` })),
            react_1.default.createElement("div", { className: `fenext-input-rate-content-start fenext-input-rate-content-start-active ${classNameContentStar} ` },
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}` }),
                react_1.default.createElement(Start_1.Star, { className: `fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}` })),
            react_1.default.createElement("div", { className: `fenext-input-rate-content-start fenext-input-rate-cap` },
                react_1.default.createElement("input", { type: "range", onChange: onSelectStar, min: 0, max: 5, step: 0.1, value: start, className: `fenext-input-rate-cap-input` })),
            react_1.default.createElement("div", { className: `fenext-input-rate-number ${classNameNumber}` }, start))));
};
exports.InputRate = InputRate;
//# sourceMappingURL=index.js.map