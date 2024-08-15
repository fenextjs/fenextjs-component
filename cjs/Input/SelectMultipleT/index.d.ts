import React from "react";
import { InputSelectMultipleProps } from "../SelectMultiple";
import { InputSelectItemOptionBaseProps } from "../Select";
export interface InputSelectMultipleTProps<T> extends Omit<InputSelectMultipleProps<T>, "defaultValue" | "value" | "options" | "onChange"> {
    defaultValue?: T[];
    value?: T[];
    options: T[];
    onChange?: (v?: T[]) => void;
    onParse: (v?: T) => InputSelectItemOptionBaseProps<T>;
}
export declare const InputSelectMultipleT: <T>({ defaultValue, value, options, onChange, onParse, ...props }: InputSelectMultipleTProps<T>) => React.JSX.Element;
