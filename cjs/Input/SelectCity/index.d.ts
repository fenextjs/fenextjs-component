import React from "react";
import { InputSelectTProps } from "../SelectT";
import { CityProps, CountryProps, StateProps } from "fenextjs-interface";
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCityProps extends Omit<InputSelectTProps<CityProps>, "options" | "onParce" | "useLoader" | "loader"> {
    country?: CountryProps;
    state?: StateProps;
}
export declare const InputSelectCity: ({ country, state, ...props }: InputSelectCityProps) => React.JSX.Element;
