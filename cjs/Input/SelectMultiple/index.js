"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectMultiple = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const useData_1 = require("fenextjs-hook/cjs/useData");
const SelectOption_1 = require("../SelectOption");
const fenextjs_svg_1 = require("fenextjs-svg");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputSelectMultiple = ({ classNameSelectMultiple = "", classNameSelectMultipleList = "", onChange, onChangeData, value = undefined, defaultValue = [], options = [], iconDelete = react_1.default.createElement(fenextjs_svg_1.SvgTrash, null), typeSelectMultipleStyle = "normal", CustomOptionsSelected = undefined, validatorData, validator, useTOption, ...props }) => {
    const { data, setData, setDataFunction } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: (e) => {
            onChange?.(e);
            onChangeData?.(e?.map((e) => e.data));
        },
    });
    const dataMemo = (0, react_1.useMemo)(() => value ?? data, [data, value]);
    const onAddItemSelect = (0, react_1.useCallback)((newItem) => {
        if (newItem) {
            setDataFunction(() => {
                const old = [...dataMemo];
                if (old.find((e) => e.id == newItem.id)) {
                    return old.filter((e) => e.id != newItem.id);
                }
                return [...old, newItem];
            });
        }
    }, [dataMemo]);
    const onRemoveItemSelect = (deleteItem) => {
        setData(dataMemo.filter((option) => option.id != deleteItem.id));
    };
    const OPTIONS = (0, react_1.useMemo)(() => {
        return options.map((option) => {
            const isSelect = dataMemo.find((e) => e.id == option.id) != undefined;
            return {
                ...option,
                hidden: isSelect,
                selected: isSelect,
            };
        });
    }, [options, dataMemo]);
    const { error: errorFenextVD } = (0, fenextjs_hook_1.useValidator)({
        data: dataMemo?.map((e) => e?.data),
        validator: validatorData,
    });
    const { error } = (0, fenextjs_hook_1.useValidator)({
        data: dataMemo,
        validator: validator,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-select-multiple
                    fenext-select-multiple-${typeSelectMultipleStyle}
                    ${classNameSelectMultiple}
                ` },
            react_1.default.createElement(Select_1.InputSelect, { ...props, onChange: onAddItemSelect, options: OPTIONS, error: props?.error ?? errorFenextVD ?? error, isSelectClearText: true, showOptionIconImg: false, useTOption: useTOption, isChange: true, extraInLabel: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `fenext-select-multiple-list ${classNameSelectMultipleList} ` }, dataMemo.map((option) => {
                        const OptionTag = CustomOptionsSelected ??
                            (SelectOption_1.InputSelectOption);
                        return (react_1.default.createElement(OptionTag, { ...option, type: "multiple", onDelete: onRemoveItemSelect, iconDelete: option?.iconDelete ?? iconDelete, disabled: props?.disabled ??
                                option?.disabled, useT: useTOption, selected: true }));
                    }))) }))));
};
exports.InputSelectMultiple = InputSelectMultiple;
