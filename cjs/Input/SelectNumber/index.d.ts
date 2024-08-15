import React from "react";
import { InputSelectProps } from "../..";
export interface InputSelectNumberProps extends Omit<InputSelectProps, "options" | "onChange" | "defaultValue" | "parseText"> {
    onChange?: (n?: number) => void;
    defaultValue?: number;
    min?: number;
    max?: number;
    parseText?: (e: number) => string;
}
export declare const InputSelectNumber: ({ onChange, defaultValue, min, max, parseText, useTOption, ...props }: InputSelectNumberProps) => React.JSX.Element;
