import React from "react";
import { InputSelectBaseProps, InputSelectClassProps } from "../Select";
/**
 * Interface that defines CSS class properties for a SelectState input component.
 */
export interface InputSelectStateClassProps extends InputSelectClassProps {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectStateBaseProps extends Omit<InputSelectBaseProps, "options" | "useLoader" | "loader"> {
    countryId?: number;
}
/**
 * Props interface for the InputSelectState component. Extends both InputSelectStateBaseProps and InputSelectStateClassProps interfaces.
 */
export interface InputSelectStateProps extends InputSelectStateBaseProps, InputSelectStateClassProps {
}
export declare const InputSelectState: ({ countryId, ...props }: InputSelectStateProps) => React.JSX.Element;
