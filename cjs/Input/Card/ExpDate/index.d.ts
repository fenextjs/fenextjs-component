import React from "react";
import { InputTextProps } from "../../Text";
export interface InputCardExpDateDataProps {
    month?: number;
    year?: number;
}
export interface InputCardExpDateProps extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type" | "defaultValue" | "value" | "onChange"> {
    maxExpDateLength?: number;
    defaultValue?: InputCardExpDateDataProps;
    value?: InputCardExpDateDataProps;
    onChange?: (data: InputCardExpDateDataProps) => void;
}
export declare const InputCardExpDate: ({ value: valueProps, defaultValue, placeholder, onChange, validator, maxExpDateLength, ...props }: InputCardExpDateProps) => React.JSX.Element;
