import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { TypeDate } from "fenextjs-interface/cjs/Date";
export type InputDateValueType = Date | undefined;
export interface InputDateBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue"> {
    type?: TypeDate;
    defaultValue?: InputDateValueType;
    value?: InputDateValueType;
    min?: InputDateValueType;
    max?: InputDateValueType;
    onChange?: (v: InputDateValueType) => void;
}
export interface InputDateClassProps extends InputTextClassProps {
    classNameInputDate?: string;
}
export interface InputDateProps extends InputDateBaseProps, InputDateClassProps {
}
export declare const InputDate: ({ classNameInputDate, type, defaultValue, value, min, max, onChange, icon, iconPos, validator, ...props }: InputDateProps) => React.JSX.Element;
