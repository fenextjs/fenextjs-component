"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectNumber = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("../..");
const InputSelectNumber = ({ onChange, defaultValue = undefined, min = 0, max = 100, parseText = (e) => `${e}`, useTOption = false, ...props }) => {
    const parseOption = (0, react_1.useCallback)((n) => {
        return {
            id: `${n}`,
            text: parseText(n),
            data: n,
        };
    }, [parseText]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.InputSelect, { ...props, classNameSelect: `fenext-select-number ${props?.classNameSelect}`, defaultValue: defaultValue != undefined
                ? parseOption(defaultValue)
                : undefined, nItems: max - min, options: new Array(Math.abs(max - min + 1))
                .fill(1)
                .map((e, i) => {
                const n = e * i + min;
                return parseOption(n);
            }), onChangeData: onChange, useTOption: useTOption })));
};
exports.InputSelectNumber = InputSelectNumber;
//# sourceMappingURL=index.js.map