import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectBaseProps, InputSelectClassProps, InputSelectItemOptionBaseProps } from "../Select";
export interface TextSelectProps {
    text?: string;
    select?: InputSelectItemOptionBaseProps;
}
export interface InputTextSelectClassProps extends InputTextClassProps, InputSelectClassProps {
}
export interface InputTextSelectBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue" | "datalist" | "onChangeValidate" | "label" | "placeholder" | "icon">, Omit<InputSelectBaseProps, "value" | "onChange" | "defaultValue" | "onChangeValidate" | "label" | "placeholder" | "icon"> {
    label?: any;
    placeholderSelect?: string;
    placeholderText?: string;
    defaultValue?: Partial<TextSelectProps>;
    value?: Partial<TextSelectProps>;
    onChange?: (data: Partial<TextSelectProps>) => void;
    posSelect?: "left" | "right";
}
export interface InputTextSelectProps extends InputTextSelectBaseProps, InputTextSelectClassProps {
}
export declare const InputTextSelect: ({ label, placeholderSelect, placeholderText, defaultValue, value: valueProps, onChange, validator, posSelect, errorWithIsChange, error, ...props }: InputTextSelectProps) => React.JSX.Element;
