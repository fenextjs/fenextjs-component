"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectButtonsGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useData_1 = require("fenextjs-hook/cjs/useData");
const SelectOption_1 = require("../SelectOption");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_hook_2 = require("fenextjs-hook");
const Error_1 = require("../../Error");
const InputSelectButtonsGroup = ({ classNameSelectButtonsGroup = "", classNameSelectButtonsGroupList = "", onChange, value = undefined, defaultValue = [], options = [], CustomOptionsSelected = undefined, validator, useTOption, classNameLabel, classNameError, label, disabled, optional = false, optionalText = "(optional)", required = false, requiredText = "*", isMultiple = false, _t: _tProps, useT, onParse, }) => {
    const { _t } = (0, fenextjs_hook_2.use_T)({ _t: _tProps, useT });
    const { data, setData, setDataFunction } = (0, useData_1.useData)(defaultValue?.map(onParse), {
        onChangeDataAfter: (e) => {
            onChange?.(e?.map((e) => e.data));
        },
    });
    const dataMemo = (0, react_1.useMemo)(() => (value ? value?.map(onParse) : data), [data, value]);
    const onAddItemSelect = (0, react_1.useCallback)((newItem) => {
        if (newItem) {
            if (isMultiple == false) {
                setData([newItem]);
                return;
            }
            setDataFunction(() => {
                const old = [...dataMemo];
                if (old.find((e) => e.id == newItem.id)) {
                    return old.filter((e) => e.id != newItem.id);
                }
                return [...old, newItem];
            });
        }
    }, [dataMemo]);
    const { error } = (0, fenextjs_hook_1.useValidator)({
        data: dataMemo?.map((e) => e.data),
        validator: validator,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-select-buttons-group
                    fenext-select-multiple
                    fenext-select-multiple-checkbox
                    ${classNameSelectButtonsGroup}
                ` },
            react_1.default.createElement("div", { className: `fenext-input-label ${classNameLabel}` },
                _t(label),
                optional && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-optional" }, _t(optionalText)))),
                required && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-required" }, _t(requiredText))))),
            react_1.default.createElement("div", { className: `fenext-select-multiple-list ${classNameSelectButtonsGroupList} ` }, options.map((o) => {
                const option = onParse(o);
                const OptionTag = CustomOptionsSelected ?? (SelectOption_1.InputSelectOption);
                return (react_1.default.createElement(OptionTag, { ...option, type: "multiple", selected: dataMemo?.find((e) => e.id == option.id) !==
                        undefined, onClick: onAddItemSelect, disabled: disabled ?? option?.disabled, useT: useTOption, _t: _t }));
            })),
            error && (react_1.default.createElement(Error_1.ErrorComponent, { error: error, className: `fenext-input-error ${classNameError}`, _t: _t })))));
};
exports.InputSelectButtonsGroup = InputSelectButtonsGroup;
//# sourceMappingURL=index.js.map