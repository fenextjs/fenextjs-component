import React from "react";
import { InputSelectClassProps } from "../Select";
import { CountryProps } from "fenextjs-interface";
import { InputSelectTProps } from "../SelectT";
/**
 * Interface that defines CSS class properties for a SelectCountry input component.
 */
export interface InputSelectCountryClassProps extends InputSelectClassProps {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCountryBaseProps extends Omit<InputSelectTProps<CountryProps>, "options" | "onParse" | "useLoader" | "loader"> {
}
/**
 * Props interface for the InputSelectCountry component. Extends both InputSelectCountryBaseProps and InputSelectCountryClassProps interfaces.
 */
export interface InputSelectCountryProps extends InputSelectCountryBaseProps, InputSelectCountryClassProps {
}
export declare const InputSelectCountry: ({ ...props }: InputSelectCountryProps) => React.JSX.Element;
