import React from "react";
import { InputSelectClassProps } from "../Select";
import { TimeZoneProps } from "fenextjs-interface";
import { InputSelectTProps } from "../SelectT";
export interface InputSelectTimeZoneClassProps extends InputSelectClassProps {
}
export interface InputSelectTimeZoneBaseProps extends Omit<InputSelectTProps<TimeZoneProps>, "options" | "onParse"> {
}
export interface InputSelectTimeZoneProps extends InputSelectTimeZoneBaseProps, InputSelectTimeZoneClassProps {
}
export declare const InputSelectTimeZone: ({ useTOption, ...props }: InputSelectTimeZoneProps) => React.JSX.Element;
