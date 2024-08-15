import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { TypeDate } from "fenextjs-interface/cjs/Date";
/**
 * Props for the InputDateValueType
 */
export type InputDateValueType = Date | undefined;
/**
 * Props for the base InputDate component
 */
export interface InputDateBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue"> {
    /**
     * The type of the input field. Should be 'date'.
     */
    type?: TypeDate;
    /**
     * The default value of the input field.
     */
    defaultValue?: InputDateValueType;
    /**
     * The current value of the input field.
     */
    value?: InputDateValueType;
    /**
     * The min Date valid.
     */
    min?: InputDateValueType;
    /**
     * The max Date valid.
     */
    max?: InputDateValueType;
    /**
     * A callback function to handle changes to the input field.
     */
    onChange?: (v: InputDateValueType) => void;
}
/**
 * Props for the InputDate component to customize CSS class names.
 */
export interface InputDateClassProps extends InputTextClassProps {
    /**
     * The CSS class for the input date field.
     */
    classNameInputDate?: string;
}
/**
 * All props for the InputDate component.
 */
export interface InputDateProps extends InputDateBaseProps, InputDateClassProps {
}
export declare const InputDate: ({ classNameInputDate, type, defaultValue, value, min, max, onChange, icon, iconPos, validator, ...props }: InputDateProps) => React.JSX.Element;
