import React, { ReactNode } from "react";
import { InputTextProps } from "../../Text";
import { Card_Enum } from "fenextjs-interface";
export declare const InputCardNumberIcons: {
    [id in Card_Enum]: ReactNode;
};
export interface InputCardNumberProps extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type"> {
    maxNumberLength?: number;
}
export declare const InputCardNumber: ({ value: valueProps, defaultValue, onChange, validator, maxNumberLength, ...props }: InputCardNumberProps) => React.JSX.Element;
