import React, { ReactNode } from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectOptionBaseProps, InputSelectOptionClassProps } from "../SelectOption";
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
export interface InputSelectItemOptionBaseProps extends Omit<InputSelectOptionBaseProps, "onClick" | "type" | "onDelete"> {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectBaseProps extends Omit<InputTextBaseProps, "value" | "type" | "yup" | "defaultValue" | "value" | "onChange" | "onBlur" | "onEnter" | "onChangeValidate" | "onChangeValidateBeforeYup" | "onChangeValidateAfterYup"> {
    /**
     * Options of select.
     */
    options: InputSelectItemOptionBaseProps[];
    /**
     * Options of select.
     */
    filterOptions?: (data: InputSelectItemOptionBaseProps[]) => InputSelectItemOptionBaseProps[];
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
    defaultValue?: InputSelectItemOptionBaseProps;
    /**
     * Type Select of option.
     */
    typeSelect?: "div" | "select" | "datalist";
    /**
     * Value Options of select.
     */
    value?: InputSelectItemOptionBaseProps;
    /**
     * Value of Not Result of select.
     */
    noResult?: InputSelectItemOptionBaseProps;
    /**
     * Value of Selected of select.
     */
    selected?: InputSelectItemOptionBaseProps;
    /**
     * Value of Create of select.
     */
    create?: InputSelectItemOptionBaseProps;
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
    onChange?: (v?: InputSelectItemOptionBaseProps) => void;
    /**
     * Function to call when the input value changes text.
     */
    onChangeText?: (v?: string) => void;
    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (e?: InputSelectItemOptionBaseProps) => Promise<any> | any;
    /**
     * Icon for close options in Movil.
     */
    iconCloseMovil?: any;
    /**
     * ReactNode for clear option in Movil.
     */
    clearContent?: ReactNode;
}
/**
 * Props interface for the InputSelect component. Extends both InputSelectBaseProps and InputSelectClassProps interfaces.
 */
export interface InputSelectProps extends InputSelectBaseProps, InputSelectClassProps {
}
export interface InputSelectValue {
    option?: InputSelectItemOptionBaseProps;
    text?: string;
    textSearch?: string;
}
export declare const InputSelect: ({ classNameSelect, classNameList, error, options: optionsProps, showOptions, hiddenOptions, defaultValue, typeSelect, value, onChange, onChangeText, onChangeValidate, icon, noResult, selected, create, onCreate, isSelectClearText, iconCloseMovil, filterOptions, clearContent, isSelectChangeText, errorWithIsChange, validator, _t, ...props }: InputSelectProps) => React.JSX.Element;
