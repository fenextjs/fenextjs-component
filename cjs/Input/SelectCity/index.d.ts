import React from "react";
import { InputSelectBaseProps, InputSelectClassProps } from "../Select";
/**
 * Interface that defines CSS class properties for a SelectCity input component.
 */
export interface InputSelectCityClassProps extends InputSelectClassProps {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCityBaseProps extends Omit<InputSelectBaseProps, "options" | "useLoader" | "loader"> {
    stateId?: number;
}
/**
 * Props interface for the InputSelectCity component. Extends both InputSelectCityBaseProps and InputSelectCityClassProps interfaces.
 */
export interface InputSelectCityProps extends InputSelectCityBaseProps, InputSelectCityClassProps {
}
export declare const InputSelectCity: ({ stateId, ...props }: InputSelectCityProps) => React.JSX.Element;
