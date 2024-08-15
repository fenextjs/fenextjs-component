import React from "react";
import { InputTextProps } from "../../Text";
export interface InputCardCCVProps extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type"> {
}
export declare const InputCardCCV: ({ placeholder, ...props }: InputCardCCVProps) => React.JSX.Element;
