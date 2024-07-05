import React from "react";
import { ErrorFenextjs } from "fenextjs-error";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { _TProps } from "fenextjs-interface";
export type InputTextChangeEvent = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>;
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
     * Yup object used for input validation.
     */
    yup?: any;
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
    type?: "text" | "search" | "tel" | "url" | "password" | "number" | "textarea";
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
     * Function to call before using Yup validation.
     */
    onChangeValidateBeforeYup?: (e: string) => Promise<void> | void;
    /**
     * Function to call after using Yup validation.
     */
    onChangeValidateAfterYup?: (e: string) => Promise<void> | void;
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
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    /**
     * AutoComplete of Input.
     */
    autoComplete?: boolean;
    /**
     * onKeyDown of Input.
     */
    onKeyDown?: (React.KeyboardEventHandler<HTMLTextAreaElement> & React.KeyboardEventHandler<HTMLInputElement>) | undefined;
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
export interface InputTextProps extends InputTextBaseProps, InputTextClassProps {
}
export declare const InputText: ({ id, datalist, name, yup, label, placeholder, defaultValue, value, type, className, classNameLabel, classNameContentInput, classNameInput, classNameIcon, classNameLoaderValidate, iconLoader, onChange, onBlur, onEnter, onChangeValidate, parseText, onChangeValidateBeforeYup, onChangeValidateAfterYup, props, icon, extraInContentInput, extraInLabel, disabled, showIcon, error, errorWithIsChange, optional, optionalText, required, requiredText, loader, autoComplete, useLoader, isChange: isChangeProps, onKeyDown, iconPos, inputMode, validator, maxLength, regExp, regExpReplace, onChangeEvent, ...p }: InputTextProps) => React.JSX.Element;
