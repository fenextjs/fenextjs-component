"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectMultiple = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const useData_1 = require("fenextjs-hook/cjs/useData");
const SelectOption_1 = require("../SelectOption");
const fenextjs_error_1 = require("fenextjs-error");
const fenextjs_interface_1 = require("fenextjs-interface");
const InputSelectMultiple = ({ classNameSelectMultiple = "", classNameSelectMultipleList = "", onChange, value = undefined, defaultValue = [], onChangeValidate, options = [], ...props }) => {
    const [error, setError] = (0, react_1.useState)(undefined);
    const { data, setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: (e) => {
            onChange?.(e);
        },
    });
    const dataMemo = (0, react_1.useMemo)(() => value ?? data, [data]);
    const validateOptions = async () => {
        if (onChangeValidate) {
            setError(undefined);
            try {
                await onChangeValidate(dataMemo);
            }
            catch (error) {
                setError(new fenextjs_error_1.ErrorFenextjs({
                    code: fenextjs_interface_1.ErrorCode.ERROR,
                    message: `${error.message}`,
                }));
            }
        }
    };
    (0, react_1.useEffect)(() => {
        validateOptions();
    }, [dataMemo]);
    const onAddItemSelect = (newItem) => {
        if (newItem) {
            setData([...dataMemo, newItem]);
        }
    };
    const onRemoveItemSelect = (deleteItem) => {
        setData(dataMemo.filter((option) => option.id != deleteItem.id));
    };
    const OPTIONS = (0, react_1.useMemo)(() => {
        return options.filter((option) => dataMemo.find((e) => e.id == option.id) == undefined);
    }, [options, dataMemo]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-select-multiple ${classNameSelectMultiple} ` },
            react_1.default.createElement(Select_1.InputSelect, { ...props, onChange: onAddItemSelect, options: OPTIONS, error: props?.error ?? error, isSelectClearText: true }),
            react_1.default.createElement("div", { className: `fenext-select-multiple-list ${classNameSelectMultipleList} ` }, dataMemo.map((option) => {
                return (react_1.default.createElement(SelectOption_1.InputSelectOption, { ...option, type: "multiple", onDelete: onRemoveItemSelect }));
            })))));
};
exports.InputSelectMultiple = InputSelectMultiple;
//# sourceMappingURL=index.js.map