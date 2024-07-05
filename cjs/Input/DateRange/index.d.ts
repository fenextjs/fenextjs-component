import React from "react";
import { InputDateBaseProps, InputDateClassProps, InputDateValueType } from "../Date";
/**
 * Props for the InputDateValueType
 */
export type InputDateRangeValueType = [InputDateValueType, InputDateValueType] | undefined;
/**
 * Props for the base InputDateRangeData component
 */
export interface InputDateRangeDataProps {
    /**
     * value of Date valueMin
     */
    valueMin?: Date;
    /**
     * value of Date valueMax
     */
    valueMax?: Date;
}
/**
 * Props for the base InputDateRange component
 */
export interface InputDateRangeElementBaseProps extends Omit<InputDateBaseProps, "value" | "onChange" | "defaultValue"> {
}
/**
 * Props for the base InputDateRange component
 */
export interface InputDateRangeBaseProps extends InputDateRangeElementBaseProps {
    /**
     * The default value of the input field.
     */
    defaultValue?: InputDateRangeValueType;
    /**
     * The current value of the input field.
     */
    value?: InputDateRangeValueType;
    /**
     * A callback function to handle changes to the input field.
     */
    onChange?: (v: InputDateRangeValueType) => void;
    /**
     * Props of input date start.
     */
    propsStart?: InputDateRangeElementBaseProps;
    /**
     * Props of input date end.
     */
    propsEnd?: InputDateRangeElementBaseProps;
}
/**
 * Props for the InputDateRange component to customize CSS class names.
 */
export interface InputDateRangeClassProps extends InputDateClassProps {
    /**
     * The CSS class for the input date field.
     */
    classNameInputDateRange?: string;
    /**
     * The CSS class for the input date field.
     */
    classNameInputDateRangeContentInputDate?: string;
}
/**
 * All props for the InputDateRange component.
 */
export interface InputDateRangeProps extends InputDateRangeBaseProps, InputDateRangeClassProps {
}
export declare const InputDateRange: ({ classNameInputDateRange, classNameInputDateRangeContentInputDate, classNameLabel, label, min, max, defaultValue, value, onChange, optional, optionalText, required, requiredText, propsStart, propsEnd, ...props }: InputDateRangeProps) => React.JSX.Element;
