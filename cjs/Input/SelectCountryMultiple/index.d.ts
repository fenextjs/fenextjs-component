import React from "react";
import { InputSelectMultipleTProps } from "../SelectMultipleT";
import { CountryProps } from "fenextjs-interface";
export interface InputSelectCountryMultipleProps extends Omit<InputSelectMultipleTProps<CountryProps>, "options" | "useLoader" | "loader" | "onParse"> {
}
export declare const InputSelectCountryMultiple: ({ ...props }: InputSelectCountryMultipleProps) => React.JSX.Element;
