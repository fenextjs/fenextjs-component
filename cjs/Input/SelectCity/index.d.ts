import React from "react";
import { InputSelectTProps } from "../SelectT";
import { CityProps, CountryProps, StateProps } from "fenextjs-interface";
export interface InputSelectCityProps extends Omit<InputSelectTProps<CityProps>, "options" | "onParse" | "useLoader" | "loader"> {
    country?: CountryProps;
    state?: StateProps;
}
export declare const InputSelectCity: ({ country, state, ...props }: InputSelectCityProps) => React.JSX.Element;
