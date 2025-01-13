import React, { ReactNode } from "react";
import { ErrorFenextjs } from "fenextjs-error";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { _TProps } from "fenextjs-interface";
export type InputTextChangeEvent = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>;
export interface InputTextClassProps {
    className?: string;
    classNameLabel?: string;
    classNameLabelError?: string;
    classNameLabelOk?: string;
    classNameContentInput?: string;
    classNameInput?: string;
    classNameInputEnabled?: string;
    classNameInputDisabled?: string;
    classNameIcon?: string;
    classNameMaxLength?: string;
    classNameError?: string;
    classNameOptions?: string;
    classNameOption?: string;
    classNameOptionDisabled?: string;
    classNameLoaderValidate?: string;
    iconLoader?: any;
}
export interface InputTextBaseProps extends _TProps {
    id?: string;
    name?: string;
    datalist?: any;
    validator?: FenextjsValidatorClass;
    label?: ReactNode;
    placeholder?: string;
    placeholderFocus?: string;
    defaultValue?: string | undefined | null;
    value?: string | undefined | null;
    type?: "text" | "search" | "tel" | "url" | "password" | "number" | "textarea";
    onChange?: (v: string) => void;
    onBlur?: (v: string) => void;
    onEnter?: () => void;
    onChangeValidate?: (e: string) => Promise<string> | string;
    props?: any;
    icon?: ReactNode;
    iconPos?: "left" | "right";
    extraInContentInput?: ReactNode;
    extraInLabel?: ReactNode;
    disabled?: boolean;
    showIcon?: boolean;
    error?: ErrorFenextjs;
    errorWithIsChange?: boolean;
    optional?: boolean;
    optionalText?: string;
    required?: boolean;
    requiredText?: string;
    loader?: boolean;
    isChange?: boolean;
    useLoader?: boolean;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    autoComplete?: boolean | string | "off" | "on";
    onKeyDown?: (React.KeyboardEventHandler<HTMLTextAreaElement> & React.KeyboardEventHandler<HTMLInputElement>) | undefined;
    onWheel?: (React.WheelEventHandler<HTMLTextAreaElement> & React.WheelEventHandler<HTMLInputElement>) | undefined;
    maxLength?: number;
    regExp?: RegExp;
    regExpReplace?: string;
    parseText?: (data: string) => string;
    onChangeEvent?: (e: InputTextChangeEvent) => void;
    showFocusInTarget?: boolean;
}
export interface InputTextProps extends InputTextBaseProps, InputTextClassProps {
}
export declare const InputText: ({ id, datalist, name, label, placeholder, placeholderFocus, defaultValue, value, type, className, classNameLabel, classNameContentInput, classNameInput, classNameIcon, classNameMaxLength, classNameLoaderValidate, classNameError, iconLoader, onChange, onBlur, onEnter, onChangeValidate, parseText, props, icon, extraInContentInput, extraInLabel, disabled, showIcon, error, errorWithIsChange, optional, optionalText, required, requiredText, loader, autoComplete, useLoader, isChange: isChangeProps, onKeyDown, onWheel, iconPos, inputMode, validator, maxLength, regExp, regExpReplace, onChangeEvent, showFocusInTarget, ...p }: InputTextProps) => React.JSX.Element;
