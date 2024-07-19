"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputText = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Yup = tslib_1.__importStar(require("yup"));
const env_log_1 = require("fenextjs-functions/cjs/env_log");
const react_2 = require("react");
const Loader_1 = require("../../Loader");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_error_1 = require("fenextjs-error");
const fenextjs_validator_1 = require("fenextjs-validator");
const useValidator_1 = require("fenextjs-hook/cjs/useValidator");
const Error_1 = require("../../Error");
const fenextjs_interface_1 = require("fenextjs-interface");
const fenextjs_hook_2 = require("fenextjs-hook");
const InputText = ({ id = "", datalist = undefined, name = "", yup = Yup.string(), label = "", placeholder = "", placeholderFocus = undefined, defaultValue = undefined, value = undefined, type = "text", className = "", classNameLabel = "", classNameContentInput = "", classNameInput = "", classNameIcon = "", classNameLoaderValidate = "", iconLoader = react_1.default.createElement(Loader_1.Loader, null), onChange = () => { }, onBlur = () => { }, onEnter = () => { }, onChangeValidate = async (e) => e, parseText, onChangeValidateBeforeYup = async (e) => {
    (0, env_log_1.env_log)(e, {
        name: "onChangeValidateBeforeYup",
    });
}, onChangeValidateAfterYup = async (e) => {
    (0, env_log_1.env_log)(e, {
        name: "onChangeValidateAfterYup",
    });
}, props = {}, icon = react_1.default.createElement(react_1.default.Fragment, null), extraInContentInput = react_1.default.createElement(react_1.default.Fragment, null), extraInLabel = react_1.default.createElement(react_1.default.Fragment, null), disabled = false, showIcon = true, error = undefined, errorWithIsChange = true, optional = false, optionalText = "(optional)", required = false, requiredText = "*", loader = false, autoComplete = false, useLoader = true, isChange: isChangeProps = undefined, onKeyDown, iconPos = "right", inputMode, validator, maxLength = undefined, regExp = undefined, regExpReplace = "", onChangeEvent, ...p }) => {
    const { _t } = (0, fenextjs_hook_2.use_T)({ ...p });
    const [isFocus, setIsFocus] = (0, react_1.useState)(false);
    const [statusInput, setStateInput] = (0, react_1.useState)("");
    const { dataMemo: dataErrorInput, setData: setErrorInput } = (0, fenextjs_hook_1.useData)(undefined);
    const errorInput = (0, react_1.useMemo)(() => error ?? dataErrorInput, [error, dataErrorInput]);
    const { dataMemo: dataLoaderInput, setData: setLoaderInput } = (0, fenextjs_hook_1.useData)(loader);
    const loaderInput = (0, react_1.useMemo)(() => loader ?? dataLoaderInput, [loader, dataLoaderInput]);
    const { dataMemo: dataValueInput, setData: setValueInput, isChange: isChangeData, } = (0, fenextjs_hook_1.useData)(defaultValue ?? "");
    const valueInput = (0, react_1.useMemo)(() => value ?? dataValueInput, [value, dataValueInput]);
    const isChange = (0, react_1.useMemo)(() => isChangeProps ?? isChangeData, [isChangeData, isChangeProps]);
    const ref = (0, react_2.useRef)(null);
    const validateValue = async (v) => {
        setLoaderInput(true);
        try {
            if (onChangeValidate) {
                const n = await onChangeValidate(v);
                v = n ?? v;
            }
            if (onChangeValidateBeforeYup) {
                await onChangeValidateBeforeYup(v);
            }
        }
        catch (error) {
            (0, env_log_1.env_log)(error, {
                name: "error",
                color: "red",
            });
            setStateInput("error");
            setErrorInput(new fenextjs_error_1.ErrorFenextjs({
                code: fenextjs_interface_1.ErrorCode.ERROR,
                message: error.message,
            }));
            setLoaderInput(false);
            return v;
        }
        if (yup != null) {
            try {
                const valid = await yup.validate(v);
                if (valid) {
                    setStateInput("ok");
                    setErrorInput(undefined);
                    try {
                        setLoaderInput(true);
                        if (onChangeValidateAfterYup) {
                            await onChangeValidateAfterYup(v);
                        }
                        setLoaderInput(false);
                    }
                    catch (error) {
                        (0, env_log_1.env_log)(error, {
                            name: "error",
                            color: "red",
                        });
                        setStateInput("error");
                        setErrorInput(new fenextjs_error_1.ErrorFenextjs({
                            code: fenextjs_interface_1.ErrorCode.ERROR,
                            message: error.message,
                        }));
                        setLoaderInput(false);
                    }
                }
            }
            catch (error) {
                (0, env_log_1.env_log)(error, {
                    name: "error",
                    color: "red",
                });
                setStateInput("error");
                setErrorInput(new fenextjs_error_1.ErrorFenextjs({
                    code: fenextjs_interface_1.ErrorCode.ERROR,
                    message: error.message,
                }));
            }
            setLoaderInput(false);
            return v;
        }
        else {
            try {
                setLoaderInput(true);
                if (onChangeValidateAfterYup) {
                    await onChangeValidateAfterYup(v);
                }
                setLoaderInput(false);
                return v;
            }
            catch (error) {
                (0, env_log_1.env_log)(error, {
                    name: "error",
                    color: "red",
                });
                setStateInput("error");
                setErrorInput(new fenextjs_error_1.ErrorFenextjs({
                    code: fenextjs_interface_1.ErrorCode.ERROR,
                    message: error.message,
                }));
                setLoaderInput(false);
                return v;
            }
        }
    };
    const onChangeInput = async (e) => {
        onChangeEvent?.(e);
        const input = e.target;
        let text = `${input.value ?? ""}`;
        if (maxLength) {
            text = `${text}`?.slice(0, maxLength);
        }
        if (regExp) {
            text = `${text}`?.replace(regExp, regExpReplace);
        }
        if (text === valueInput) {
            return;
        }
        setValueInput(text);
        onChange(text);
        validateValue(text);
    };
    const blurInput = () => {
        validateValue(valueInput);
        onBlur(valueInput);
    };
    const TagInput = type == "textarea" ? "textarea" : "input";
    const ICON = (0, react_1.useMemo)(() => {
        if (showIcon) {
            return (react_1.default.createElement("span", { className: `fenext-input-content-icon ${classNameIcon}` }, icon));
        }
        return react_1.default.createElement(react_1.default.Fragment, null);
    }, [
        showIcon,
        icon,
        classNameIcon,
        classNameLoaderValidate,
        iconLoader,
        loader,
    ]);
    const LOADER = (0, react_1.useMemo)(() => {
        if (!useLoader) {
            return react_1.default.createElement(react_1.default.Fragment, null);
        }
        if (loaderInput) {
            return (react_1.default.createElement("span", { className: `fenext-input-content-loader ${classNameLoaderValidate}` }, iconLoader));
        }
        return react_1.default.createElement(react_1.default.Fragment, null);
    }, [loaderInput, classNameLoaderValidate, iconLoader, loader, useLoader]);
    const { error: errorFenext } = (0, useValidator_1.useValidator)({
        data: valueInput,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    const FenextInputValidatorStatus = (0, react_1.useMemo)(() => {
        if (errorWithIsChange && !isChange) {
            return "ok";
        }
        if (errorInput instanceof fenextjs_error_1.ErrorFenextjs) {
            return "error";
        }
        if (errorFenext instanceof fenextjs_error_1.ErrorFenextjs) {
            return "error";
        }
        if (error instanceof fenextjs_error_1.ErrorFenextjs) {
            return "error";
        }
        return "ok";
    }, [errorInput, error, errorFenext, errorWithIsChange, isChange]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { className: `fenext-input ${className}`, style: {
                ...(maxLength
                    ? { ["--fenext-max-length"]: maxLength }
                    : {}),
            } },
            react_1.default.createElement("div", { className: `fenext-input-label ${classNameLabel}` },
                _t(label),
                optional && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-optional" }, _t(optionalText)))),
                required && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-required" }, _t(requiredText))))),
            react_1.default.createElement("div", { className: `fenext-input-content fenext-input-icon-pos-${iconPos} ${classNameContentInput}` },
                react_1.default.createElement(TagInput, { id: id, name: name, list: datalist, type: type, ref: ref, className: `fenext-input-content-input ${classNameInput} fenext-input-validator-status-${FenextInputValidatorStatus} ${statusInput}`, placeholder: _t((isFocus ? placeholderFocus : placeholder) ??
                        placeholder), value: (parseText ? parseText(valueInput) : valueInput) ??
                        valueInput, onChange: onChangeInput, onBlur: () => {
                        blurInput();
                        setIsFocus(false);
                    }, disabled: disabled, onKeyUp: (event) => {
                        if (event.keyCode === 13) {
                            onEnter();
                        }
                    }, onClick: () => {
                        setIsFocus(true);
                    }, autoComplete: autoComplete ? "on" : "off", onKeyDown: onKeyDown, ...props, inputMode: inputMode }),
                ICON,
                LOADER,
                extraInContentInput,
                type == "textarea" && maxLength && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("span", { className: "fenext-input-content-input-max-leght" },
                        "(",
                        valueInput?.length ?? 0,
                        " / ",
                        maxLength,
                        ")")))),
            extraInLabel,
            FenextInputValidatorStatus == "error" && (react_1.default.createElement(Error_1.ErrorComponent, { error: errorFenext ?? errorInput, className: "fenext-input-error", _t: _t })))));
};
exports.InputText = InputText;
//# sourceMappingURL=index.js.map