"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectT = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Select_1 = require("../Select");
const InputSelectT = ({ defaultValue, value, options, onChange, onParse, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Select_1.InputSelect, { ...props, defaultValue: defaultValue ? onParse(defaultValue) : undefined, value: value ? onParse(value) : undefined, options: options.map(onParse), onChangeData: onChange })));
};
exports.InputSelectT = InputSelectT;
//# sourceMappingURL=index.js.map