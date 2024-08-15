import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
export interface InputPasswordBaseProps extends Omit<InputTextBaseProps, "type"> {
}
export interface InputPasswordClassProps extends InputTextClassProps {
    classNameContentEye?: string;
}
export interface InputPasswordProps extends InputPasswordBaseProps, InputPasswordClassProps {
}
export declare const InputPassword: ({ classNameContentEye, ...props }: InputPasswordProps) => React.JSX.Element;
