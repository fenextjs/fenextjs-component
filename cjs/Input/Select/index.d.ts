import React, { ReactNode } from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectOptionClassProps, InputSelectOptionProps } from "../SelectOption";
import { FenextjsValidatorClass } from "fenextjs-validator";
export type InputSelectTypeStyle = "normal" | "normal-out" | "box" | "list" | "checkbox";
export interface InputSelectClassProps extends InputTextClassProps, InputSelectOptionClassProps {
    classNameSelect?: string;
    classNameList?: string;
}
export interface InputSelectItemOptionBaseProps<T = any> extends Omit<InputSelectOptionProps<T>, "type" | "onDelete"> {
}
export interface InputSelectBaseProps<T = any> extends Omit<InputTextBaseProps, "value" | "type" | "defaultValue" | "value" | "onChange" | "onBlur" | "onEnter" | "onChangeValidate"> {
    idSelectOptions?: string;
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
    useItemMaxLengthShowOptions?: boolean;
    nItems?: number;
    converterInSearchWithMaxLenght?: boolean;
    showOptionIconImg?: boolean;
    validatorData?: FenextjsValidatorClass<T | undefined>;
    forceShowOptionOnLoad?: boolean;
    iconDelete?: ReactNode;
    useSearch?: boolean;
    useNowrap?: boolean;
}
export interface InputSelectProps<T = any> extends InputSelectBaseProps<T>, InputSelectClassProps {
}
export interface InputSelectValue<T = any> {
    option?: InputSelectItemOptionBaseProps<T>;
    text?: string;
    textSearch?: string;
}
export declare const InputSelect: <T = any>({ classNameSelect, classNameList, classNameOption, idSelectOptions, error, options: optionsProps, showOptions, hiddenOptions, defaultValue, typeSelect, typeSelectStyle, value, onChange, onChangeData, onChangeText, onChangeValidate, icon, iconSearch, noResult, loaderOption, selected, create, onCreate, isSelectClearText, iconCloseMovil, filterOptions, clearContent, isSelectChangeText, errorWithIsChange, validator, searchById, useSwichtypeSelectStyle, changeByFirstOptionInOnBlur, converterInSearchWithMaxLenght, nItems, useSearch, useNowrap, useItemMaxLengthShowOptions, maxLengthShowOptions, itemMaxLengthShowOptions, showOptionIconImg, validatorData, useTOption, forceShowOptionOnLoad, iconDelete, name, ...props }: InputSelectProps<T>) => React.JSX.Element;
