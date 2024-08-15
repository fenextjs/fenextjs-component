import React from "react";
import { InputUnitBaseBaseProps, InputUnitBaseClassProps } from "../Base";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
import { Unit_Weight } from "fenextjs-interface/cjs/Unit";
export interface InputUnitWeightValue {
    value?: number | "";
    unit?: Unit_All;
}
export interface InputUnitWeightClassProps extends InputUnitBaseClassProps {
}
export interface InputUnitWeightBaseProps extends Omit<InputUnitBaseBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    defaultValue?: Partial<InputUnitWeightValue>;
    value?: Partial<InputUnitWeightValue>;
    onChange?: (data: Partial<InputUnitWeightValue>) => void;
    options?: Unit_Weight[];
}
export interface InputUnitWeightProps extends InputUnitWeightBaseProps, InputUnitWeightClassProps {
}
export declare const InputUnitWeight: ({ options, ...props }: InputUnitWeightProps) => React.JSX.Element;
