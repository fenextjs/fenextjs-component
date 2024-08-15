import React from "react";
import { InputSelectClassProps } from "../Select";
import { CountryProps } from "fenextjs-interface";
import { InputSelectTProps } from "../SelectT";
export interface InputSelectCountryClassProps extends InputSelectClassProps {
}
export interface InputSelectCountryBaseProps extends Omit<InputSelectTProps<CountryProps>, "options" | "onParse" | "useLoader" | "loader"> {
}
export interface InputSelectCountryProps extends InputSelectCountryBaseProps, InputSelectCountryClassProps {
}
export declare const InputSelectCountry: ({ ...props }: InputSelectCountryProps) => React.JSX.Element;
