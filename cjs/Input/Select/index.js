"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const SelectOption_1 = require("../SelectOption");
const Arrow_1 = require("fenextjs-svg/cjs/Arrow");
const cancel_1 = require("fenextjs-svg/cjs/cancel");
const useData_1 = require("fenextjs-hook/cjs/useData");
const GetSpaceParent_1 = require("fenextjs-functions/cjs/html/GetSpaceParent");
const fenextjs_error_1 = require("fenextjs-error");
const fenextjs_interface_1 = require("fenextjs-interface");
const fenextjs_functions_1 = require("fenextjs-functions");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputSelect = ({ classNameSelect = "", classNameList = "", error = undefined, options: optionsProps = [], showOptions = "focus", hiddenOptions = "not-hover", defaultValue = undefined, typeSelect = "div", typeSelectStyle = "normal", value = undefined, onChange, onChangeText, onChangeValidate, icon = react_1.default.createElement(Arrow_1.Arrow, null), noResult, selected, create, onCreate, isSelectClearText = false, iconCloseMovil = react_1.default.createElement(cancel_1.Cancel, null), filterOptions = undefined, clearContent = "Clear", isSelectChangeText = true, errorWithIsChange = true, validator, searchById = false, useSwichtypeSelectStyle = false, _t, ...props }) => {
    const options = (0, react_1.useMemo)(() => (filterOptions ? filterOptions(optionsProps) : optionsProps), [optionsProps, filterOptions]);
    const checkboxClose = (0, react_1.useRef)(null);
    const btnClose = (0, react_1.useRef)(null);
    const selectRef = (0, react_1.useRef)(null);
    const [showOptionsUp, setShowOptionsUp] = (0, react_1.useState)({
        up: false,
        height: 0,
        heightMultiple: 0,
    });
    const [dataErrorInput, setErrorInput] = (0, react_1.useState)(undefined);
    const { data, setData, isChange } = (0, useData_1.useData)({
        option: value ?? defaultValue,
        text: defaultValue?.text ?? "",
        textSearch: "",
    }, {
        onChangeDataAfter: (d) => {
            onChange?.(d.option ?? undefined);
        },
    });
    const TAG = typeSelect;
    const dataMemo = (0, react_1.useMemo)(() => {
        if (value) {
            return {
                option: value,
                text: value?.text,
                textSearch: data?.textSearch,
            };
        }
        return data;
    }, [data, value]);
    const validateOption = async () => {
        if (onChangeValidate) {
            setErrorInput(undefined);
            try {
                await onChangeValidate(dataMemo.option);
            }
            catch (error) {
                setErrorInput(new fenextjs_error_1.ErrorFenextjs({
                    code: fenextjs_interface_1.ErrorCode.ERROR,
                    message: `${error.message}`,
                }));
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (isChange) {
            validateOption();
        }
    }, [dataMemo, isChange]);
    const onChangeText_ = (text) => {
        if (!isSelectChangeText) {
            return;
        }
        onChangeText?.(text);
        let option = undefined;
        if (typeSelect != "div") {
            option = options.find((o) => o.text == text);
        }
        setData({
            option,
            text: isSelectClearText ? "" : text,
            textSearch: text,
        });
    };
    const onClear = () => {
        setData({
            option: undefined,
            text: "",
            textSearch: "",
        });
    };
    const onChangeOption = (option) => {
        setData({
            option,
            text: isSelectClearText ? "" : option.text,
            textSearch: "",
        });
        setTimeout(() => {
            checkboxClose?.current?.click?.();
            checkboxClose?.current?.focus?.();
        }, 100);
    };
    const OPTIONSSEARCH = (0, react_1.useMemo)(() => {
        const textSearch = dataMemo?.textSearch?.toLowerCase() ?? "";
        return options.filter((option) => option.text?.toLowerCase()?.includes(textSearch) ||
            textSearch?.includes(option.text?.toLowerCase()) ||
            (searchById &&
                (`${option.id}`?.toLowerCase()?.includes(textSearch) ||
                    textSearch?.includes(`${option.id}`?.toLowerCase()))));
    }, [options, dataMemo, searchById]);
    const OPTIONS = (0, react_1.useMemo)(() => {
        if (typeSelect == "div") {
            return OPTIONSSEARCH;
        }
        return options;
    }, [typeSelect, OPTIONSSEARCH, options]);
    const onEnter = () => {
        const optionSect = OPTIONSSEARCH[0];
        if (optionSect) {
            onChangeOption(optionSect);
        }
    };
    const onDefOptionsUpDown = (event) => {
        const mouseY = event.clientY;
        const spaceBottomWindow = window.innerHeight - mouseY;
        const spaceTopWindow = mouseY;
        if (selectRef.current) {
            const { spaceBottom: spaceBottomParent, spaceTop: spaceTopParent } = (0, GetSpaceParent_1.GetSpaceParent)(selectRef.current);
            const spaceBottom = Math.min(spaceBottomParent, spaceBottomWindow);
            const spaceTop = Math.min(spaceTopParent, spaceTopWindow);
            const heightMultiple = selectRef.current.querySelector(".fenext-select-multiple-list")
                ?.clientHeight ?? 0;
            setShowOptionsUp({
                up: spaceTop > spaceBottom,
                height: Math.max(spaceTop, spaceBottom) + heightMultiple,
                heightMultiple,
            });
        }
    };
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: data.option,
        validator,
    });
    const errorInput = (0, react_1.useMemo)(() => {
        if (errorWithIsChange && !isChange) {
            return undefined;
        }
        return error ?? errorFenext ?? dataErrorInput;
    }, [error, errorFenext, dataErrorInput, errorWithIsChange, isChange]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: selectRef, className: `fenext-select
                    fenext-select-${showOptionsUp?.up ? "options-up" : "options-down"}
                    fenext-select-type-${typeSelect}
                    fenext-select-type-style-${typeSelectStyle}
                    fenext-select-${useSwichtypeSelectStyle ? "use-swich-select-style" : ""}
                    fenext-select-${isSelectChangeText
                ? "is-change-text"
                : "is-not-change-text"}
                    ${classNameSelect} ${showOptions}
                    ${hiddenOptions}
                `, style: {
                ["--fenext-select-max-height"]: `${showOptionsUp.height}px`,
                ["--fenext-select-height-multiple"]: `${showOptionsUp.heightMultiple}px`,
            } },
            react_1.default.createElement("input", { type: "checkbox", ref: checkboxClose, className: "fenext-select-checkbox-close" }),
            react_1.default.createElement("div", { className: `fenext-select-content-search`, onClick: onDefOptionsUpDown },
                react_1.default.createElement(Text_1.InputText, { ...props, _t: _t, icon: icon, onChange: onChangeText_, value: dataMemo?.text ?? "", onEnter: onEnter, error: errorInput, autoComplete: false, errorWithIsChange: errorWithIsChange, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("button", { className: `fenext-select-clear`, onClick: onClear }, (0, fenextjs_functions_1._tValidate)(clearContent, _t))), validator: undefined }),
                react_1.default.createElement("button", { ref: btnClose, className: `fenext-select-close` }, iconCloseMovil)),
            react_1.default.createElement(TAG, { id: props?.datalist, className: `fenext-select-list-options fenext-select-list-options-type-${typeSelect}  ${classNameList}`, onChange: (e) => {
                    onChangeText_(e?.target?.value);
                } },
                create && typeSelect == "div" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: "div", id: create?.id ?? "create", text: create?.text ?? "Create", children: create?.children ?? undefined, _t: _t, isBtn: true, onClick: onCreate }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                OPTIONS.length != 0 && typeSelect == "select" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: "option", id: noResult?.id ?? "selected", text: selected?.text ??
                            props?.placeholder ??
                            "Select", children: selected?.children ?? undefined, _t: _t }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                OPTIONS.map((option, i) => {
                    return (react_1.default.createElement(SelectOption_1.InputSelectOption, { key: i, ...option, onClick: onChangeOption, type: typeSelect == "div" ? "div" : "option", _t: _t }));
                }),
                OPTIONS.length == 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: typeSelect == "div" ? "div" : "option", id: noResult?.id ?? "notResult", text: noResult?.text ?? "Not Result", children: noResult?.children ?? undefined, classNameOption: "fenext-select-option-not-result", _t: _t, disabled: true }))) : (react_1.default.createElement(react_1.default.Fragment, null))))));
};
exports.InputSelect = InputSelect;
//# sourceMappingURL=index.js.map