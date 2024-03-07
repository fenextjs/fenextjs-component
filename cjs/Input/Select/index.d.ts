import React, { ReactNode } from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectOptionBaseProps, InputSelectOptionClassProps } from "../SelectOption";
export type InputSelectTypeStyle = "normal" | "box" | "list" | "checkbox";
/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectClassProps extends InputTextClassProps, InputSelectOptionClassProps {
    /**
     * CSS class name for the input select.
     */
    classNameSelect?: string;
    /**
     * CSS class name for the list options.
     */
    classNameList?: string;
}
export interface InputSelectItemOptionBaseProps<T = any> extends Omit<InputSelectOptionBaseProps<T>, "type" | "onDelete"> {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectBaseProps<T = any> extends Omit<InputTextBaseProps, "value" | "type" | "yup" | "defaultValue" | "value" | "onChange" | "onBlur" | "onEnter" | "onChangeValidate" | "onChangeValidateBeforeYup" | "onChangeValidateAfterYup"> {
    /**
     * Options of select.
     */
    options: InputSelectItemOptionBaseProps<T>[];
    /**
     * Options of select.
     */
    filterOptions?: (data: InputSelectItemOptionBaseProps<T>[]) => InputSelectItemOptionBaseProps<T>[];
    /**
     * showOptions type of show option select.
     */
    showOptions?: "hover" | "focus" | "focus-hover";
    /**
     * hiddenOptions type of hidden option select.
     */
    hiddenOptions?: "not-hover" | "not-focus" | "not-focus-hover";
    /**
     * Default Options of select.
     */
    defaultValue?: InputSelectItemOptionBaseProps<T>;
    /**
     * Type Select of option.
     */
    typeSelect?: "div" | "select" | "datalist";
    /**
     * Type Select of styles.
     */
    typeSelectStyle?: InputSelectTypeStyle;
    /**
     * Type Select of styles.
     */
    useSwichtypeSelectStyle?: boolean;
    /**
     * Value Options of select.
     */
    value?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Not Result of select.
     */
    noResult?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Not Result of select.
     */
    loaderOption?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Selected of select.
     */
    selected?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Create of select.
     */
    create?: InputSelectItemOptionBaseProps<T>;
    /**
     * onCreate of select.
     */
    onCreate?: () => void;
    /**
     * Value of Not Result of select.
     */
    isSelectClearText?: boolean;
    /**
     * is permit change text in input.
     */
    isSelectChangeText?: boolean;
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: InputSelectItemOptionBaseProps<T>) => void;
    /**
     * Function to call when the input value changes text.
     */
    onChangeText?: (v?: string) => void;
    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (e?: InputSelectItemOptionBaseProps<T>) => Promise<any> | any;
    /**
     * Icon for close options in Movil.
     */
    iconCloseMovil?: any;
    /**
     * ReactNode for clear option in Movil.
     */
    clearContent?: ReactNode;
    /**
     * searchById .
     */
    searchById?: boolean;
    /**
     * Icon search in select.
     */
    iconSearch?: ReactNode;
    /**
     * changeByFirstOptionInOnBlur in select.
     */
    changeByFirstOptionInOnBlur?: boolean;
}
/**
 * Props interface for the InputSelect component. Extends both InputSelectBaseProps and InputSelectClassProps interfaces.
 */
export interface InputSelectProps<T = any> extends InputSelectBaseProps<T>, InputSelectClassProps {
}
export interface InputSelectValue<T = any> {
    option?: InputSelectItemOptionBaseProps<T>;
    text?: string;
    textSearch?: string;
}
export declare const InputSelect: <T = any>({ classNameSelect, classNameList, error, options: optionsProps, showOptions, hiddenOptions, defaultValue, typeSelect, typeSelectStyle, value, onChange, onChangeText, onChangeValidate, icon, iconSearch, noResult, loaderOption, selected, create, onCreate, isSelectClearText, iconCloseMovil, filterOptions, clearContent, isSelectChangeText, errorWithIsChange, validator, searchById, useSwichtypeSelectStyle, changeByFirstOptionInOnBlur, _t, ...props }: InputSelectProps<T>) => React.JSX.Element;
