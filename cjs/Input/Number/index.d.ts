import React from "react";
import { InputTextProps } from "../Text";
/**
 * Props for InputNumber component.
 */
export interface InputNumberProps extends Omit<InputTextProps, "defaultValue" | "onChange" | "onChangeValidate"> {
    /**
     * The default value of the input.
     * @default ""
     */
    defaultValue?: number | "";
    /**
     * The callback function that is triggered when the value of the input changes.
     */
    onChange?: (v: number | "") => void;
    /**
     * The callback function that is triggered when the input loses focus, after the value has been validated.
     */
    onChangeValidate?: (v: number | "") => void;
    /**
     * The minimum value allowed for the input.
     */
    min?: number;
    /**
     * The maximum value allowed for the input.
     */
    max?: number;
    /**
     * The useBtnIncreaseDecrease show btn.
     */
    useBtnIncreaseDecrease?: boolean;
}
export declare const InputNumber: ({ defaultValue, onChange, useBtnIncreaseDecrease, validator, ...props }: InputNumberProps) => React.JSX.Element;
