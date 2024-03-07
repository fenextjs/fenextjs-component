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
const fenextjs_svg_1 = require("fenextjs-svg");
const InputSelect = ({ classNameSelect = "", classNameList = "", error = undefined, options: optionsProps = [], showOptions = "focus", hiddenOptions = "not-hover", defaultValue = undefined, typeSelect = "div", typeSelectStyle = "normal", value = undefined, onChange, onChangeText, onChangeValidate, icon = react_1.default.createElement(Arrow_1.Arrow, null), iconSearch = react_1.default.createElement(fenextjs_svg_1.SVGSearch, null), noResult, loaderOption, selected, create, onCreate, isSelectClearText = false, iconCloseMovil = react_1.default.createElement(cancel_1.Cancel, null), filterOptions = undefined, clearContent = "Clear", isSelectChangeText = true, errorWithIsChange = true, validator, searchById = false, useSwichtypeSelectStyle = false, changeByFirstOptionInOnBlur = false, _t, ...props }) => {
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
    const [isChangeTextBlur, setIsChangeTextBlur] = (0, react_1.useState)(false);
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
        setIsChangeTextBlur(true);
        onChangeText?.(text);
        let option = undefined;
        if (typeSelect != "div") {
            option = options.find((o) => o.text == text);
        }
        setData({
            option,
            text: text,
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
    const onBlur = () => {
        if (changeByFirstOptionInOnBlur && isChangeTextBlur) {
            const optionSect = OPTIONS[0];
            if (optionSect) {
                onChangeOption(optionSect);
                setIsChangeTextBlur(false);
            }
        }
    };
    const OPTIONSLENGTH = (0, react_1.useMemo)(() => OPTIONS.filter((e) => (e?.selected ?? false) || !(e?.hidden ?? false))?.length, [OPTIONS]);
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
                react_1.default.createElement(Text_1.InputText, { ...props, _t: _t, icon: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: "fenext-select-content-icon" },
                            react_1.default.createElement("div", { className: "fenext-select-content-icon-arrow" }, icon),
                            react_1.default.createElement("div", { className: "fenext-select-content-icon-search" }, iconSearch))), onBlur: onBlur, onChange: onChangeText_, value: dataMemo?.text ?? "", onEnter: onEnter, error: errorInput, autoComplete: false, errorWithIsChange: errorWithIsChange, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("button", { className: `fenext-select-clear`, onClick: onClear }, (0, fenextjs_functions_1._tValidate)(clearContent, _t))), validator: undefined }),
                react_1.default.createElement("button", { ref: btnClose, className: `fenext-select-close` }, iconCloseMovil)),
            react_1.default.createElement(TAG, { id: props?.datalist, className: `fenext-select-list-options fenext-select-list-options-type-${typeSelect}  ${classNameList}`, onChange: (e) => {
                    onChangeText_(e?.target?.value);
                } },
                create && typeSelect == "div" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: "div", id: create?.id ?? "create", text: create?.text ?? "Create", children: create?.children ?? undefined, _t: _t, isBtn: true, onClick: onCreate }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                OPTIONSLENGTH != 0 && typeSelect == "select" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: "option", id: noResult?.id ?? "selected", text: selected?.text ??
                            props?.placeholder ??
                            "Select", children: selected?.children ?? undefined, _t: _t }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                OPTIONS.map((option, i) => {
                    return (react_1.default.createElement(SelectOption_1.InputSelectOption, { key: i, selected: data.option?.id != undefined &&
                            data.option?.id === option?.id, ...option, onClick: (e) => {
                            onChangeOption(e);
                            option?.onClick?.(e);
                        }, type: typeSelect == "div" ? "div" : "option", _t: _t }));
                }),
                props.loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: typeSelect == "div" ? "div" : "option", id: loaderOption?.id ?? "loader", text: loaderOption?.text ?? "Loading", children: loaderOption?.children ?? undefined, classNameOption: "fenext-select-option-loading", _t: _t, disabled: true }))) : (react_1.default.createElement(react_1.default.Fragment, null, OPTIONSLENGTH == 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: typeSelect == "div"
                            ? "div"
                            : "option", id: noResult?.id ?? "notResult", text: noResult?.text ?? "Not Result", children: noResult?.children ?? undefined, classNameOption: "fenext-select-option-not-result", _t: _t, disabled: true }))) : (react_1.default.createElement(react_1.default.Fragment, null))))))));
};
exports.InputSelect = InputSelect;
//# sourceMappingURL=index.js.map