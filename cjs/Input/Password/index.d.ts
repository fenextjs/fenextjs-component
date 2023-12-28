import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
/**
 * Interface for the base props of an input password component.
 */
export interface InputPasswordBaseProps extends Omit<InputTextBaseProps, "type"> {
}
/**
 * Interface for the class props of an input password component.
 */
export interface InputPasswordClassProps extends InputTextClassProps {
    classNameContentEye?: string;
}
/**
 * Interface for the props of an input password component.
 */
export interface InputPasswordProps extends InputPasswordBaseProps, InputPasswordClassProps {
}
export declare const InputPassword: ({ classNameContentEye, ...props }: InputPasswordProps) => React.JSX.Element;
