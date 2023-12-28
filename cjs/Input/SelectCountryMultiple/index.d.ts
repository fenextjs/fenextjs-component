import React from "react";
import { InputSelectMultipleBaseProps, InputSelectMultipleClassProps } from "../SelectMultiple";
/**
 * Interface that defines CSS class properties for a SelectCountryMultiple input component.
 */
export interface InputSelectCountryMultipleClassProps extends InputSelectMultipleClassProps {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCountryMultipleBaseProps extends Omit<InputSelectMultipleBaseProps, "options" | "useLoader" | "loader"> {
}
/**
 * Props interface for the InputSelectCountryMultiple component. Extends both InputSelectCountryMultipleBaseProps and InputSelectCountryMultipleClassProps interfaces.
 */
export interface InputSelectCountryMultipleProps extends InputSelectCountryMultipleBaseProps, InputSelectCountryMultipleClassProps {
}
export declare const InputSelectCountryMultiple: ({ ...props }: InputSelectCountryMultipleProps) => React.JSX.Element;
