import React from "react";
import { InputUnitBaseBaseProps, InputUnitBaseClassProps } from "../Base";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
import { Unit_Volumen } from "fenextjs-interface/cjs/Unit";
export interface InputUnitVolumenValue {
    value?: number | "";
    unit?: Unit_All;
}
export interface InputUnitVolumenClassProps extends InputUnitBaseClassProps {
}
export interface InputUnitVolumenBaseProps extends Omit<InputUnitBaseBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    defaultValue?: Partial<InputUnitVolumenValue>;
    value?: Partial<InputUnitVolumenValue>;
    onChange?: (data: Partial<InputUnitVolumenValue>) => void;
    options?: Unit_Volumen[];
}
export interface InputUnitVolumenProps extends InputUnitVolumenBaseProps, InputUnitVolumenClassProps {
}
export declare const InputUnitVolumen: ({ options, ...props }: InputUnitVolumenProps) => React.JSX.Element;
