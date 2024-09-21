import React, { CSSProperties, useMemo, useState } from "react";

import { env_log } from "fenextjs-functions/cjs/env_log";
import { useRef } from "react";
import { Loader } from "../../Loader";
import { useData } from "fenextjs-hook";
import { ErrorFenextjs } from "fenextjs-error";
import { FenextjsValidatorClass, FenextjsValidator } from "fenextjs-validator";
import { useValidator } from "fenextjs-hook/cjs/useValidator";
import { ErrorComponent } from "../../Error";
import { ErrorCode, _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type InputTextChangeEvent =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>;

/**
 * Interface that defines CSS class properties for a text input component.
 */
export interface InputTextClassProps {
    /**
     * CSS class name for the input label.
     */
    classNameLabel?: string;

    /**
     * CSS class name for the input error label.
     */
    classNameLabelError?: string;

    /**
     * CSS class name for the input validation label.
     */
    classNameLabelOk?: string;

    /**
     * CSS class name for the input container.
     */
    classNameContentInput?: string;

    /**
     * CSS class name for the input.
     */
    classNameInput?: string;

    /**
     * CSS class name for the enabled input.
     */
    classNameInputEnabled?: string;

    /**
     * CSS class name for the disabled input.
     */
    classNameInputDisabled?: string;

    /**
     * CSS class name for the input icon.
     */
    classNameIcon?: string;

    /**
     * CSS class name for the input error message.
     */
    classNameError?: string;

    /**
     * CSS class name for the input options container.
     */
    classNameOptions?: string;

    /**
     * CSS class name for each input option.
     */
    classNameOption?: string;

    /**
     * CSS class name for a disabled input option.
     */
    classNameOptionDisabled?: string;

    /**
     * CSS class name for the input validation loader.
     */
    classNameLoaderValidate?: string;

    /**
     * Icon to display while validating the input.
     */
    iconLoader?: any;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputTextBaseProps extends _TProps {
    /**
     * ID of Input.
     */
    id?: any;
    /**
     * Name of Input.
     */
    name?: any;
    /**
     * Datalist name of Input.
     */
    datalist?: any;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass;

    /**
     * Label text to display for the input.
     */
    label?: any;

    /**
     * Placeholder text to display in the input field.
     */
    placeholder?: string;
    /**
     * Placeholder text to display in the input field.
     */
    placeholderFocus?: string;

    /**
     * Default value to set for the input field.
     */
    defaultValue?: string | undefined | null;

    /**
     * Value to set for the input field.
     */
    value?: string | undefined | null;

    /**
     * Type of input to display (e.g. text, number, password, etc.).
     */
    type?:
        | "text"
        | "search"
        | "tel"
        | "url"
        | "password"
        | "number"
        | "textarea";

    /**
     * Function to call when the input value changes.
     */
    onChange?: (v: string) => void;

    /**
     * Function to call when the input loses focus.
     */
    onBlur?: (v: string) => void;

    /**
     * Function to call when the Enter key is pressed.
     */
    onEnter?: () => void;

    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (e: string) => Promise<string> | string;

    /**
     * Additional properties to pass to the input component.
     */
    props?: any;

    /**
     * Icon to display inside the input field.
     */
    icon?: any;
    /**
     * Position of Icon to display inside the input field.
     */
    iconPos?: "left" | "right";

    /**
     * Extra content to display inside the input container.
     */
    extraInContentInput?: any;

    /**
     * Extra content to display inside the input label.
     */
    extraInLabel?: any;

    /**
     * Boolean value indicating whether the input field is disabled.
     */
    disabled?: boolean;

    /**
     * Boolean value indicating whether to display the input icon.
     */
    showIcon?: boolean;

    /**
     * CSS class name for the input component.
     */
    className?: string;
    /**
     * Text of Error of Input.
     */
    error?: ErrorFenextjs;
    /**
     * Show error if IsChange.
     */
    errorWithIsChange?: boolean;
    /**
     * Optional of Input.
     */
    optional?: boolean;
    /**
     * Optional text of Input.
     */
    optionalText?: string;
    /**
     * Optional of Input.
     */
    required?: boolean;
    /**
     * Optional text of Input.
     */
    requiredText?: string;
    /**
     * Loader of Input.
     */
    loader?: boolean;
    /**
     * Loader of Input.
     */
    isChange?: boolean;
    /**
     * useLoader of Input.
     */
    useLoader?: boolean;
    /**
     * inputMode of Input.
     */
    inputMode?:
        | "none"
        | "text"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | "search"
        | undefined;
    /**
     * AutoComplete of Input.
     */
    autoComplete?: boolean;

    /**
     * onKeyDown of Input.
     */
    onKeyDown?:
        | (React.KeyboardEventHandler<HTMLTextAreaElement> &
              React.KeyboardEventHandler<HTMLInputElement>)
        | undefined;

    onWheel?:
        | (React.WheelEventHandler<HTMLTextAreaElement> &
              React.WheelEventHandler<HTMLInputElement>)
        | undefined;
    /**
     * maxLength of Input.
     */
    maxLength?: number;
    /**
     * regExp of Input.
     */
    regExp?: RegExp;
    /**
     * regExpReplace of Input.
     */
    regExpReplace?: string;
    /**
     * parseText of Input.
     */
    parseText?: (data: string) => string;
    /**
     * onChangeEvent of Input.
     */
    onChangeEvent?: (e: InputTextChangeEvent) => void;
}
/**
 * Props interface for the InputText component. Extends both InputTextBaseProps and InputTextClassProps interfaces.
 */
export interface InputTextProps
    extends InputTextBaseProps,
        InputTextClassProps {}

export const InputText = ({
    id = "",
    datalist = undefined,
    name = "",
    label = "",
    placeholder = "",
    placeholderFocus = undefined,
    defaultValue = undefined,
    value = undefined,
    type = "text",
    className = "",
    classNameLabel = "",
    classNameContentInput = "",
    classNameInput = "",
    classNameIcon = "",
    classNameLoaderValidate = "",
    iconLoader = <Loader />,
    onChange = () => {},
    onBlur = () => {},
    onEnter = () => {},
    onChangeValidate = async (e: string) => e,
    parseText,
    props = {},
    icon = <></>,
    extraInContentInput = <></>,
    extraInLabel = <></>,
    disabled = false,
    showIcon = true,
    error = undefined,
    errorWithIsChange = true,
    optional = false,
    optionalText = "(optional)",
    required = false,
    requiredText = "*",
    loader = false,
    autoComplete = false,
    useLoader = true,
    isChange: isChangeProps = undefined,
    onKeyDown,
    onWheel,
    iconPos = "right",
    inputMode,

    validator,
    maxLength = undefined,
    regExp = undefined,
    regExpReplace = "",

    onChangeEvent,

    ...p
}: InputTextProps) => {
    const { _t } = use_T({ ...p });
    const [isFocus, setIsFocus] = useState(false);
    const [statusInput, setStateInput] = useState("");

    const { dataMemo: dataErrorInput, setData: setErrorInput } = useData<
        ErrorFenextjs | undefined
    >(undefined);
    const errorInput = useMemo(
        () => error ?? dataErrorInput,
        [error, dataErrorInput],
    );

    const { dataMemo: dataLoaderInput, setData: setLoaderInput } =
        useData<boolean>(loader);
    const loaderInput = useMemo(
        () => loader ?? dataLoaderInput,
        [loader, dataLoaderInput],
    );
    const {
        dataMemo: dataValueInput,
        setData: setValueInput,
        isChange: isChangeData,
    } = useData<string>(defaultValue ?? "");
    const valueInput = useMemo(
        () => value ?? dataValueInput,
        [value, dataValueInput],
    );

    const isChange = useMemo(
        () => isChangeProps ?? isChangeData,
        [isChangeData, isChangeProps],
    );

    const ref = useRef(null);

    const validateValue = async (v: string) => {
        setLoaderInput(true);
        try {
            if (onChangeValidate) {
                const n = await onChangeValidate(v);
                v = n ?? v;
            }
        } catch (error: any) {
            env_log(error, {
                name: "error",
                color: "red",
            });
            setStateInput("error");
            setErrorInput(
                new ErrorFenextjs({
                    code: ErrorCode.ERROR,
                    message: error.message,
                }),
            );
            setLoaderInput(false);
            return v;
        }
        return v;
    };
    const onChangeInput = async (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>,
    ) => {
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

    const ICON = useMemo(() => {
        if (showIcon) {
            return (
                <span className={`fenext-input-content-icon ${classNameIcon}`}>
                    {icon}
                </span>
            );
        }
        return <></>;
    }, [
        showIcon,
        icon,
        classNameIcon,
        classNameLoaderValidate,
        iconLoader,
        loader,
    ]);

    const LOADER = useMemo(() => {
        if (!useLoader) {
            return <></>;
        }
        if (loaderInput) {
            return (
                <span
                    className={`fenext-input-content-loader ${classNameLoaderValidate}`}
                >
                    {iconLoader}
                </span>
            );
        }
        return <></>;
    }, [loaderInput, classNameLoaderValidate, iconLoader, loader, useLoader]);

    const { error: errorFenext } = useValidator({
        data: valueInput,
        validator: validator ?? FenextjsValidator(),
    });

    const FenextInputValidatorStatus = useMemo<"ok" | "error">(() => {
        if (errorWithIsChange && !isChange) {
            return "ok";
        }
        if (errorInput instanceof ErrorFenextjs) {
            return "error";
        }
        if (errorFenext instanceof ErrorFenextjs) {
            return "error";
        }
        if (error instanceof ErrorFenextjs) {
            return "error";
        }
        return "ok";
    }, [errorInput, error, errorFenext, errorWithIsChange, isChange]);

    return (
        <>
            <label
                className={`fenext-input ${className}`}
                style={
                    {
                        ...(maxLength
                            ? { ["--fenext-max-length"]: maxLength }
                            : {}),
                    } as CSSProperties
                }
            >
                <div className={`fenext-input-label ${classNameLabel}`}>
                    {_t(label)}
                    {optional && (
                        <>
                            <small className="fenext-input-optional">
                                {_t(optionalText)}
                            </small>
                        </>
                    )}
                    {required && (
                        <>
                            <small className="fenext-input-required">
                                {_t(requiredText)}
                            </small>
                        </>
                    )}
                </div>
                <div
                    className={`fenext-input-content fenext-input-icon-pos-${iconPos} ${classNameContentInput}`}
                >
                    <TagInput
                        id={id}
                        name={name}
                        list={datalist}
                        type={type}
                        ref={ref}
                        className={`fenext-input-content-input ${classNameInput} fenext-input-validator-status-${FenextInputValidatorStatus} ${statusInput}`}
                        placeholder={_t(
                            (isFocus ? placeholderFocus : placeholder) ??
                                placeholder,
                        )}
                        value={
                            (parseText ? parseText(valueInput) : valueInput) ??
                            valueInput
                        }
                        onChange={onChangeInput}
                        onBlur={() => {
                            blurInput();
                            setIsFocus(false);
                        }}
                        disabled={disabled}
                        onKeyUp={(event) => {
                            if (event.keyCode === 13) {
                                onEnter();
                            }
                        }}
                        onClick={() => {
                            setIsFocus(true);
                        }}
                        onWheel={onWheel}
                        autoComplete={autoComplete ? "on" : "off"}
                        onKeyDown={onKeyDown}
                        {...props}
                        inputMode={inputMode}
                    />
                    {ICON}
                    {LOADER}
                    {extraInContentInput}
                    {type == "textarea" && maxLength && (
                        <>
                            <span className="fenext-input-content-input-max-leght">
                                ({valueInput?.length ?? 0} / {maxLength})
                            </span>
                        </>
                    )}
                </div>
                {extraInLabel}
                {FenextInputValidatorStatus == "error" && (
                    <ErrorComponent
                        error={errorFenext ?? errorInput}
                        className="fenext-input-error"
                        _t={_t}
                    />
                )}
            </label>
        </>
    );
};
