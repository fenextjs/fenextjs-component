import React from "react";
import { InputTextSelectBaseProps, InputTextSelectClassProps } from "../../TextSelect";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
export interface InputUnitValue {
    value?: number | "";
    unit?: Unit_All;
}
export interface InputUnitValueText {
    value?: string;
    unit?: Unit_All;
}
export interface InputUnitBaseClassProps extends InputTextSelectClassProps {
}
export interface InputUnitBaseBaseProps extends Omit<InputTextSelectBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    defaultValue?: Partial<InputUnitValue>;
    value?: Partial<InputUnitValue>;
    onChange?: (data: Partial<InputUnitValue>) => void;
    options: Unit_All[];
}
export interface InputUnitBaseProps extends InputUnitBaseBaseProps, InputUnitBaseClassProps {
}
export declare const InputUnitBase: ({ defaultValue, value: valueProps, onChange, options, ...props }: InputUnitBaseProps) => React.JSX.Element;
