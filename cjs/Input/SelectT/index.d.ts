import React from "react";
import { InputSelectItemOptionBaseProps, InputSelectProps } from "../Select";
export interface InputSelectTProps<T> extends Omit<InputSelectProps<T>, "defaultValue" | "value" | "options" | "onChange" | "onChangeData"> {
    defaultValue?: T;
    value?: T;
    options: T[];
    onChange?: (v?: T) => void;
    onParse: (v?: T) => InputSelectItemOptionBaseProps<T>;
}
export declare const InputSelectT: <T>({ defaultValue, value, options, onChange, onParse, ...props }: InputSelectTProps<T>) => React.JSX.Element;
