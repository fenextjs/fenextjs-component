import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
export interface InputCodeClassProps extends InputTextClassProps {
}
export interface InputCodeBaseProps extends Omit<InputTextBaseProps, "type" | "maxLength"> {
    maxLength: number;
}
export interface InputCodeProps extends InputCodeBaseProps, InputCodeClassProps {
}
export declare const InputCode: ({ ...props }: InputCodeProps) => React.JSX.Element;
