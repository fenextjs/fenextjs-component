import React from "react";
import { InputSelectClassProps } from "../Select";
import { TimeZoneProps } from "fenextjs-interface";
import { InputSelectTProps } from "../SelectT";
/**
 * Interface that defines CSS class properties for a SelectTimeZone input component.
 */
export interface InputSelectTimeZoneClassProps extends InputSelectClassProps {
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectTimeZoneBaseProps extends Omit<InputSelectTProps<TimeZoneProps>, "options" | "onParse"> {
}
/**
 * Props interface for the InputSelectTimeZone component. Extends both InputSelectTimeZoneBaseProps and InputSelectTimeZoneClassProps interfaces.
 */
export interface InputSelectTimeZoneProps extends InputSelectTimeZoneBaseProps, InputSelectTimeZoneClassProps {
}
export declare const InputSelectTimeZone: ({ ...props }: InputSelectTimeZoneProps) => React.JSX.Element;
