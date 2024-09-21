import React from "react";
import { InputTextProps } from "../Text";
export interface InputNumberProps extends Omit<InputTextProps, "defaultValue" | "onChange" | "onChangeValidate" | "value"> {
    value?: number | "";
    defaultValue?: number | "";
    onChange?: (v: number | "") => void;
    onChangeValidate?: (v: number | "") => void;
    min?: number;
    max?: number;
    useBtnIncreaseDecrease?: boolean;
    disabledScroll?: boolean;
}
export declare const InputNumber: ({ defaultValue, onChange, useBtnIncreaseDecrease, validator, value, disabledScroll, ...props }: InputNumberProps) => React.JSX.Element;
