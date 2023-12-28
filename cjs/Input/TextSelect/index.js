"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTextSelect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const Select_1 = require("../Select");
const useData_1 = require("fenextjs-hook/cjs/useData");
const Error_1 = require("../../Error");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const fenextjs_functions_1 = require("fenextjs-functions");
/**
 * Component that renders a checkbox input.
 * Takes an InputTextSelectProps object as props.
 */
const InputTextSelect = ({ label, placeholderSelect, placeholderText, defaultValue = {}, value: valueProps = undefined, onChange, validator = undefined, posSelect = "left", _t = (e) => e, errorWithIsChange = false, error, ...props }) => {
    const { data, onChangeData, isChange } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const value = (0, react_1.useMemo)(() => valueProps ?? data, [valueProps, data]);
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: data,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    const errorInput = (0, react_1.useMemo)(() => {
        if (errorWithIsChange && !isChange) {
            return undefined;
        }
        return error ?? errorFenext;
    }, [error, errorFenext, errorWithIsChange, isChange]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-text-select fenext-input-text-select-${posSelect}` },
            react_1.default.createElement("div", { className: `fenext-input-text-select-label fenext-input-label  ` }, (0, fenextjs_functions_1._tValidate)(label, _t)),
            react_1.default.createElement("div", { className: `fenext-input-text-select-select ` },
                react_1.default.createElement(Select_1.InputSelect, { ...props, placeholder: placeholderSelect, onChange: onChangeData("select"), validator: undefined, value: value.select, _t: _t })),
            react_1.default.createElement("div", { className: `fenext-input-text-select-text ` },
                react_1.default.createElement(Text_1.InputText, { ...props, placeholder: placeholderText, onChange: onChangeData("text"), validator: undefined, value: value.text, _t: _t })),
            errorInput && (react_1.default.createElement(Error_1.ErrorComponent, { error: errorInput, className: `fenext-input-error `, _t: _t })))));
};
exports.InputTextSelect = InputTextSelect;
//# sourceMappingURL=index.js.map