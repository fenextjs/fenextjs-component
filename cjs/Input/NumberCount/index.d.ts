import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
/**
 * Interface that defines CSS class properties for a text input component.
 */
export interface InputNumberCountClassProps extends InputTextClassProps {
    /**
     * CSS class name for the component.
     */
    classNameNumberCount?: string;
    /**
     * CSS class name for the component.
     */
    classNameNumberCountText?: string;
    /**
     * CSS class name for the component.
     */
    classNameNumberCountNumber?: string;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputNumberCountBaseProps extends Omit<InputTextBaseProps, "type" | "defaultValue" | "onChange" | "onChangeValidate" | "value"> {
    /**
     * symbol of money in de Init, default $.
     */
    symbolInit?: string;
    /**
     * symbol of money in the final.
     */
    symbolFinal?: string;
    /**
     * The default value of the input.
     * @default ""
     */
    defaultValue?: number | "";
    /**
     * The value of the input.
     * @default undefined
     */
    value?: number | "";
    /**
     * The callback function that is triggered when the value of the input changes.
     */
    onChange?: (v: number | "") => void;
    /**
     * The minimum value allowed for the input.
     */
    min?: number;
    /**
     * The maximum value allowed for the input.
     */
    max?: number;
}
/**
 * Props interface for the InputNumberCount component. Extends both InputNumberCountBaseProps and InputNumberCountClassProps interfaces.
 */
export interface InputNumberCountProps extends InputNumberCountBaseProps, InputNumberCountClassProps {
}
export declare const InputNumberCount: ({ classNameNumberCount, classNameNumberCountText, classNameNumberCountNumber, onChange, value, defaultValue, symbolInit, symbolFinal, validator, ...props }: InputNumberCountProps) => React.JSX.Element;
