import React from "react";
import { InputUnitBaseBaseProps, InputUnitBaseClassProps } from "../Base";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
import { Unit_Distance } from "fenextjs-interface/cjs/Unit";
export interface InputUnitDistanceValue {
    value?: number | "";
    unit?: Unit_All;
}
export interface InputUnitDistanceClassProps extends InputUnitBaseClassProps {
}
export interface InputUnitDistanceBaseProps extends Omit<InputUnitBaseBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    defaultValue?: Partial<InputUnitDistanceValue>;
    value?: Partial<InputUnitDistanceValue>;
    onChange?: (data: Partial<InputUnitDistanceValue>) => void;
    options?: Unit_Distance[];
}
export interface InputUnitDistanceProps extends InputUnitDistanceBaseProps, InputUnitDistanceClassProps {
}
export declare const InputUnitDistance: ({ options, ...props }: InputUnitDistanceProps) => React.JSX.Element;
