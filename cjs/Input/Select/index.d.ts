import React, { ReactNode } from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectOptionBaseProps, InputSelectOptionClassProps } from "../SelectOption";
import { FenextjsValidatorClass } from "fenextjs-validator";
export type InputSelectTypeStyle = "normal" | "box" | "list" | "checkbox";
export interface InputSelectClassProps extends InputTextClassProps, InputSelectOptionClassProps {
    classNameSelect?: string;
    classNameList?: string;
}
export interface InputSelectItemOptionBaseProps<T = any> extends Omit<InputSelectOptionBaseProps<T>, "type" | "onDelete"> {
}
export interface InputSelectBaseProps<T = any> extends Omit<InputTextBaseProps, "value" | "type" | "defaultValue" | "value" | "onChange" | "onBlur" | "onEnter" | "onChangeValidate"> {
    options: InputSelectItemOptionBaseProps<T>[];
    filterOptions?: (data: InputSelectItemOptionBaseProps<T>[]) => InputSelectItemOptionBaseProps<T>[];
    showOptions?: "hover" | "focus" | "focus-hover";
    hiddenOptions?: "not-hover" | "not-focus" | "not-focus-hover";
    defaultValue?: InputSelectItemOptionBaseProps<T>;
    typeSelect?: "div" | "select" | "datalist";
    typeSelectStyle?: InputSelectTypeStyle;
    useSwichtypeSelectStyle?: boolean;
    useTOption?: boolean;
    value?: InputSelectItemOptionBaseProps<T>;
    noResult?: InputSelectItemOptionBaseProps<T>;
    loaderOption?: InputSelectItemOptionBaseProps<T>;
    selected?: InputSelectItemOptionBaseProps<T>;
    create?: InputSelectItemOptionBaseProps<T>;
    itemMaxLengthShowOptions?: InputSelectItemOptionBaseProps<T>;
    onCreate?: () => void;
    isSelectClearText?: boolean;
    isSelectChangeText?: boolean;
    onChange?: (v?: InputSelectItemOptionBaseProps<T>) => void;
    onChangeData?: (v?: T) => void;
    onChangeText?: (v?: string) => void;
    onChangeValidate?: (e?: InputSelectItemOptionBaseProps<T>) => Promise<any> | any;
    iconCloseMovil?: any;
    clearContent?: ReactNode;
    searchById?: boolean;
    iconSearch?: ReactNode;
    changeByFirstOptionInOnBlur?: boolean;
    maxLengthShowOptions?: number;
    converterInSearchWithMaxLenght?: boolean;
    showOptionIconImg?: boolean;
    validatorData?: FenextjsValidatorClass<T>;
    forceShowOptionOnLoad?: boolean;
}
export interface InputSelectProps<T = any> extends InputSelectBaseProps<T>, InputSelectClassProps {
}
export interface InputSelectValue<T = any> {
    option?: InputSelectItemOptionBaseProps<T>;
    text?: string;
    textSearch?: string;
}
export declare const InputSelect: <T = any>({ classNameSelect, classNameList, error, options: optionsProps, showOptions, hiddenOptions, defaultValue, typeSelect, typeSelectStyle, value, onChange, onChangeData, onChangeText, onChangeValidate, icon, iconSearch, noResult, loaderOption, selected, create, onCreate, isSelectClearText, iconCloseMovil, filterOptions, clearContent, isSelectChangeText, errorWithIsChange, validator, searchById, useSwichtypeSelectStyle, changeByFirstOptionInOnBlur, converterInSearchWithMaxLenght, maxLengthShowOptions, itemMaxLengthShowOptions, showOptionIconImg, validatorData, useTOption, forceShowOptionOnLoad, ...props }: InputSelectProps<T>) => React.JSX.Element;
