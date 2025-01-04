import React from "react";
import { InputSelectMultipleProps } from "../SelectMultiple";
import { InputSelectItemOptionBaseProps } from "../Select";
export interface InputSelectMultipleTProps<T> extends Omit<InputSelectMultipleProps<T>, "defaultValue" | "value" | "options" | "onChange" | "validator" | "validatorData"> {
    defaultValue?: T[];
    value?: T[];
    options: T[];
    onChange?: (v?: T[]) => void;
    onParse: (v?: T) => InputSelectItemOptionBaseProps<T>;
    validator?: InputSelectMultipleProps<T>["validatorData"];
}
export declare const InputSelectMultipleT: <T>({ defaultValue, value, options, onChange, onParse, validator, ...props }: InputSelectMultipleTProps<T>) => React.JSX.Element;
