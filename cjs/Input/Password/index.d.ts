import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
export interface InputPasswordBaseProps extends Omit<InputTextBaseProps, "type" | "icon"> {
    iconEye?: React.ReactNode;
    iconEyeBar?: React.ReactNode;
}
export interface InputPasswordClassProps extends InputTextClassProps {
    classNameContentEye?: string;
}
export interface InputPasswordProps extends InputPasswordBaseProps, InputPasswordClassProps {
}
export declare const InputPassword: ({ classNameContentEye, iconEye, iconEyeBar, ...props }: InputPasswordProps) => React.JSX.Element;
