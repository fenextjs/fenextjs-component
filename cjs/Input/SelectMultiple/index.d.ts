import React, { ReactNode } from "react";
import { InputSelectBaseProps, InputSelectClassProps } from "../Select";
import { InputSelectItemOptionBaseProps } from "../Select";
/**
 * Interface that defines CSS class properties for a select-multiple input component.
 */
export interface InputSelectMultipleClassProps extends InputSelectClassProps {
    /**
     * CSS class name for the input select-multiple.
     */
    classNameSelectMultiple?: string;
    /**
     * CSS class name for the list options.
     */
    classNameSelectMultipleList?: string;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectMultipleBaseProps<T = any> extends Omit<InputSelectBaseProps<T>, "defaultValue" | "value" | "onChange" | "onChangeValidate"> {
    /**
     * Default Options of select.
     */
    defaultValue?: InputSelectItemOptionBaseProps<T>[];
    /**
     * Default Options of select.
     */
    value?: InputSelectItemOptionBaseProps<T>[];
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: InputSelectItemOptionBaseProps<T>[]) => void;
    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (e: InputSelectItemOptionBaseProps<T>[]) => Promise<any> | any;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
    typeSelectMultipleStyle?: "normal" | "checkbox";
}
/**
 * Props interface for the InputSelectMultiple component. Extends both InputSelectMultipleBaseProps and InputSelectMultipleClassProps interfaces.
 */
export interface InputSelectMultipleProps<T = any> extends InputSelectMultipleBaseProps<T>, InputSelectMultipleClassProps {
}
export declare const InputSelectMultiple: <T = any>({ classNameSelectMultiple, classNameSelectMultipleList, onChange, value, defaultValue, onChangeValidate, options, iconDelete, typeSelectMultipleStyle, ...props }: InputSelectMultipleProps<T>) => React.JSX.Element;
