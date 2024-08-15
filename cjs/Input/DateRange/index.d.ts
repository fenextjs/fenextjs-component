import React from "react";
import { InputDateBaseProps, InputDateClassProps, InputDateValueType } from "../Date";
export type InputDateRangeValueType = [InputDateValueType, InputDateValueType] | undefined;
export interface InputDateRangeDataProps {
    valueMin?: Date;
    valueMax?: Date;
}
export interface InputDateRangeElementBaseProps extends Omit<InputDateBaseProps, "value" | "onChange" | "defaultValue"> {
}
export interface InputDateRangeBaseProps extends InputDateRangeElementBaseProps {
    defaultValue?: InputDateRangeValueType;
    value?: InputDateRangeValueType;
    onChange?: (v: InputDateRangeValueType) => void;
    propsStart?: InputDateRangeElementBaseProps;
    propsEnd?: InputDateRangeElementBaseProps;
}
export interface InputDateRangeClassProps extends InputDateClassProps {
    classNameInputDateRange?: string;
    classNameInputDateRangeContentInputDate?: string;
}
export interface InputDateRangeProps extends InputDateRangeBaseProps, InputDateRangeClassProps {
}
export declare const InputDateRange: ({ classNameInputDateRange, classNameInputDateRangeContentInputDate, classNameLabel, label, min, max, defaultValue, value, onChange, optional, optionalText, required, requiredText, propsStart, propsEnd, ...props }: InputDateRangeProps) => React.JSX.Element;
