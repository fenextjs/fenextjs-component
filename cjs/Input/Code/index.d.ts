import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
/**
 * Interface that defines CSS class properties for a text input component.
 */
export interface InputCodeClassProps extends InputTextClassProps {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputCodeBaseProps extends Omit<InputTextBaseProps, "type" | "maxLength"> {
    /**
     * maxLength of Input.
     */
    maxLength: number;
}
/**
 * Props interface for the InputCode component. Extends both InputCodeBaseProps and InputCodeClassProps interfaces.
 */
export interface InputCodeProps extends InputCodeBaseProps, InputCodeClassProps {
}
export declare const InputCode: ({ ...props }: InputCodeProps) => React.JSX.Element;
