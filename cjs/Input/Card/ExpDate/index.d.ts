import React from "react";
import { InputTextProps } from "../../Text";
export interface InputCardExpDateDataProps {
    month?: number;
    year?: number;
}
/**
 * Props for InputCardExpDate component.
 */
export interface InputCardExpDateProps extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type" | "defaultValue" | "value" | "onChange"> {
    /**
     * The max length number card.
     * @default 19
     * @min 15
     */
    maxExpDateLength?: number;
    defaultValue?: InputCardExpDateDataProps;
    value?: InputCardExpDateDataProps;
    onChange?: (data: InputCardExpDateDataProps) => void;
}
export declare const InputCardExpDate: ({ value: valueProps, defaultValue, placeholder, onChange, validator, maxExpDateLength, ...props }: InputCardExpDateProps) => React.JSX.Element;
