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
const fenextjs_error_1 = require("fenextjs-error");
const fenextjs_interface_1 = require("fenextjs-interface");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_hook_2 = require("fenextjs-hook");
const fenextjs_svg_1 = require("fenextjs-svg");
const Img_1 = require("../../Img");
const useSelectOptionsPos_1 = require("./useSelectOptionsPos");
const InputSelect = ({ classNameSelect = "", classNameList = "", error = undefined, options: optionsProps = [], showOptions = "focus", hiddenOptions = "not-hover", defaultValue = undefined, typeSelect = "div", typeSelectStyle = "normal", value = undefined, onChange, onChangeData, onChangeText, onChangeValidate, icon = react_1.default.createElement(Arrow_1.Arrow, null), iconSearch = react_1.default.createElement(fenextjs_svg_1.SVGSearch, null), noResult, loaderOption, selected, create, onCreate, isSelectClearText = false, iconCloseMovil = react_1.default.createElement(cancel_1.Cancel, null), filterOptions = undefined, clearContent = "Clear", isSelectChangeText = true, errorWithIsChange = true, validator, searchById = false, useSwichtypeSelectStyle = false, changeByFirstOptionInOnBlur = false, maxLengthShowOptions = 20, itemMaxLengthShowOptions = {
    id: "fenext-item-max-length-show-options",
    text: "More ...",
}, showOptionIconImg = true, validatorData, useTOption, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const { _t: _tValue } = (0, fenextjs_hook_1.use_T)({ ...props, useT: useTOption });
    const options = (0, react_1.useMemo)(() => (filterOptions ? filterOptions(optionsProps) : optionsProps), [optionsProps, filterOptions]);
    const checkboxClose = (0, react_1.useRef)(null);
    const selectRef = (0, react_1.useRef)(null);
    const [dataErrorInput, setErrorInput] = (0, react_1.useState)(undefined);
    const [isChangeTextBlur, setIsChangeTextBlur] = (0, react_1.useState)(false);
    const { data, setData, isChange } = (0, useData_1.useData)({
        option: value ?? defaultValue,
        text: defaultValue?.text ?? "",
        textSearch: "",
    }, {
        onChangeDataAfter: (d) => {
            onChange?.(d.option ?? undefined);
            onChangeData?.(d?.option?.data ?? undefined);
        },
    });
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
    const parseTextSearch = (e) => {
        return `${e ?? ""}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };
    const OPTIONSSEARCH = (0, react_1.useMemo)(() => {
        const textSearch = parseTextSearch(dataMemo?.textSearch);
        if (textSearch == "") {
            return [...options];
        }
        return [...options].filter((option) => parseTextSearch(option.text)?.includes(textSearch) ||
            textSearch?.includes(parseTextSearch(option.text)) ||
            (searchById &&
                (parseTextSearch(option.id)?.includes(textSearch) ||
                    textSearch?.includes(parseTextSearch(option.id)))));
    }, [options, dataMemo, searchById]);
    const OPTIONS = (0, react_1.useMemo)(() => {
        if (props?.disabled) {
            return [];
        }
        let list = [...options];
        if (typeSelect == "div") {
            list = [...OPTIONSSEARCH];
        }
        if (maxLengthShowOptions) {
            const nMax = list.length > maxLengthShowOptions;
            list = list.splice(0, maxLengthShowOptions);
            if (nMax && itemMaxLengthShowOptions) {
                list.push({
                    ...itemMaxLengthShowOptions,
                    disabled: true,
                });
            }
        }
        return list;
    }, [
        typeSelect,
        OPTIONSSEARCH,
        options,
        maxLengthShowOptions,
        props?.disabled,
        itemMaxLengthShowOptions,
    ]);
    const onEnter = (0, react_1.useCallback)(() => {
        const optionSect = OPTIONSSEARCH[0];
        if (optionSect) {
            onChangeOption(optionSect);
        }
    }, [OPTIONSSEARCH]);
    const { error: errorFenextV } = (0, fenextjs_hook_2.useValidator)({
        data: data.option,
        validator,
    });
    const { error: errorFenextVD } = (0, fenextjs_hook_2.useValidator)({
        data: data?.option?.data,
        validator: validatorData,
    });
    const errorFenext = (0, react_1.useMemo)(() => errorFenextV ?? errorFenextVD, [errorFenextV, errorFenextVD]);
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
    const TAGLIST = (0, react_1.useMemo)(() => {
        const TAG = typeSelect;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(TAG, { id: props?.datalist, className: `fenext-select-list-options fenext-select-list-options-type-${typeSelect}  ${classNameList}`, onChange: (e) => {
                    onChangeText_(e?.target?.value);
                } },
                create && typeSelect == "div" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: "div", id: create?.id ?? "create", text: create?.text ?? "Create", children: create?.children ?? undefined, _t: _t, isBtn: true, onClick: create?.onClick ?? onCreate }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                OPTIONSLENGTH != 0 && typeSelect == "select" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: "option", id: noResult?.id ?? "selected", text: _t(selected?.text ??
                            props?.placeholder ??
                            "Select"), children: selected?.children ?? undefined, _t: _t, useT: useTOption }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                OPTIONS.map((option, i) => {
                    return (react_1.default.createElement(SelectOption_1.InputSelectOption, { key: i, selected: data.option?.id != undefined &&
                            data.option?.id === option?.id, ...option, onClick: (e) => {
                            onChangeOption(e);
                            option?.onClick?.(e);
                        }, type: typeSelect == "div" ? "div" : "option", _t: _t, useT: useTOption }));
                }),
                props.loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: typeSelect == "div" ? "div" : "option", id: loaderOption?.id ?? "loader", text: loaderOption?.text ?? "Loading", children: loaderOption?.children ?? undefined, classNameOption: "fenext-select-option-loading", _t: _t, useT: useTOption, disabled: true }))) : (react_1.default.createElement(react_1.default.Fragment, null, OPTIONSLENGTH == 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(SelectOption_1.InputSelectOption, { type: typeSelect == "div"
                            ? "div"
                            : "option", id: noResult?.id ?? "notResult", text: noResult?.text ?? "Not Result", children: noResult?.children ?? undefined, classNameOption: "fenext-select-option-not-result", _t: _t, useT: useTOption, disabled: true }))) : (react_1.default.createElement(react_1.default.Fragment, null)))))));
    }, [
        typeSelect,
        props?.datalist,
        classNameList,
        create,
        onCreate,
        OPTIONSLENGTH,
        noResult,
        selected,
        props?.placeholder,
        OPTIONS,
        data,
        props.loader,
        loaderOption,
        selectRef,
    ]);
    const { onLoadPos, onLoadChildren } = (0, useSelectOptionsPos_1.useSelectOptionsPos)({
        children: (react_1.default.createElement(react_1.default.Fragment, null, typeSelect == "div" && typeSelectStyle == "normal" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: `fenext-select-content-search` },
                react_1.default.createElement(Text_1.InputText, { ...props, _t: _t, icon: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: "fenext-select-content-icon" },
                            react_1.default.createElement("div", { className: "fenext-select-content-icon-search" }, iconSearch))), onBlur: onBlur, onChange: onChangeText_, value: _tValue(dataMemo?.text ?? ""), onEnter: onEnter, error: errorInput, autoComplete: false, errorWithIsChange: errorWithIsChange, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("button", { className: `fenext-select-clear`, onClick: onClear }, _t(clearContent))), validator: undefined }),
                react_1.default.createElement("button", { className: `fenext-select-close` }, iconCloseMovil)),
            TAGLIST)) : (react_1.default.createElement(react_1.default.Fragment, null)))),
        target: selectRef?.current,
    });
    const [isFocus, setIsFocus] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (isFocus) {
            onLoadChildren();
        }
    }, [props?.loader, options]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: selectRef, className: `
                    fenext-select
                    fenext-select-type-${typeSelect}
                    fenext-select-type-style-${typeSelectStyle}
                    fenext-select-${useSwichtypeSelectStyle ? "use-swich-select-style" : ""}
                    fenext-select-${isSelectChangeText
                ? "is-change-text"
                : "is-not-change-text"}
                    ${classNameSelect} ${showOptions}
                    ${hiddenOptions}
                `, onMouseLeave: () => {
                setIsFocus(false);
            } },
            react_1.default.createElement("div", { className: `fenext-select-content-search`, onClick: () => {
                    setIsFocus(true);
                    onLoadPos?.();
                    if (window?.innerWidth <= 575) {
                        const ele = selectRef.current?.querySelector(".fenext-input-content-input");
                        ele?.click();
                        ele?.focus();
                    }
                } },
                react_1.default.createElement(Text_1.InputText, { ...props, _t: _t, icon: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: "fenext-select-content-icon" },
                            react_1.default.createElement("div", { className: "fenext-select-content-icon-arrow" }, icon),
                            react_1.default.createElement("div", { className: "fenext-select-content-icon-search" }, iconSearch))), onBlur: onBlur, onChange: (e) => {
                        onChangeText_(e);
                        onLoadChildren();
                    }, value: dataMemo?.text ?? "", onEnter: onEnter, error: errorInput, autoComplete: false, errorWithIsChange: errorWithIsChange, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("button", { className: `fenext-select-clear`, onClick: onClear }, _t(clearContent)),
                        showOptionIconImg && (react_1.default.createElement(react_1.default.Fragment, null, dataMemo?.option?.img ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "fenext-select-option-selected-img" },
                                react_1.default.createElement("img", { src: dataMemo?.option
                                        ?.img })))) : (react_1.default.createElement(react_1.default.Fragment, null, dataMemo?.option
                            ?.imgComponent ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "fenext-select-option-selected-img" },
                                react_1.default.createElement(Img_1.Img, { ...dataMemo
                                        ?.option
                                        ?.imgComponent })))) : (react_1.default.createElement(react_1.default.Fragment, null, dataMemo?.option
                            ?.icon && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "fenext-select-option-selected-img" }, dataMemo
                                ?.option
                                ?.icon)))))))))), validator: undefined })),
            typeSelect == "div" &&
                typeSelectStyle == "normal" &&
                !useSwichtypeSelectStyle ? (react_1.default.createElement(react_1.default.Fragment, null)) : (react_1.default.createElement(react_1.default.Fragment, null, TAGLIST)))));
};
exports.InputSelect = InputSelect;
//# sourceMappingURL=index.js.map