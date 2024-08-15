import React from "react";
import { InputSelectTProps } from "../SelectT";
import { StateProps, CountryProps } from "fenextjs-interface";
export interface InputSelectStateProps extends Omit<InputSelectTProps<StateProps>, "options" | "onParse" | "useLoader" | "loader"> {
    country?: CountryProps;
}
export declare const InputSelectState: ({ country, ...props }: InputSelectStateProps) => React.JSX.Element;
