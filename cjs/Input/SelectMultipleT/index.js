"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectMultipleT = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SelectMultiple_1 = require("../SelectMultiple");
const InputSelectMultipleT = ({ defaultValue, value, options, onChange, onParse, validator, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectMultiple_1.InputSelectMultiple, { ...props, defaultValue: defaultValue ? defaultValue.map(onParse) : undefined, value: value ? value.map(onParse) : undefined, options: options.map(onParse), onChangeData: onChange, validatorData: validator })));
};
exports.InputSelectMultipleT = InputSelectMultipleT;
//# sourceMappingURL=index.js.map