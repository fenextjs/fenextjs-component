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
export interface InputSelectMultipleBaseProps extends Omit<InputSelectBaseProps, "defaultValue" | "value" | "onChange" | "onChangeValidate"> {
    /**
     * Default Options of select.
     */
    defaultValue?: InputSelectItemOptionBaseProps[];
    /**
     * Default Options of select.
     */
    value?: InputSelectItemOptionBaseProps[];
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: InputSelectItemOptionBaseProps[]) => void;
    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (e: InputSelectItemOptionBaseProps[]) => Promise<any> | any;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
}
/**
 * Props interface for the InputSelectMultiple component. Extends both InputSelectMultipleBaseProps and InputSelectMultipleClassProps interfaces.
 */
export interface InputSelectMultipleProps extends InputSelectMultipleBaseProps, InputSelectMultipleClassProps {
}
export declare const InputSelectMultiple: ({ classNameSelectMultiple, classNameSelectMultipleList, onChange, value, defaultValue, onChangeValidate, options, iconDelete, ...props }: InputSelectMultipleProps) => React.JSX.Element;
