import React from "react";
import { InputTextProps } from "../../Text";
/**
 * Props for InputCardCCV component.
 */
export interface InputCardCCVProps extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type"> {
}
export declare const InputCardCCV: ({ placeholder, ...props }: InputCardCCVProps) => React.JSX.Element;
