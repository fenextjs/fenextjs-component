import React from "react";
import { InputUnitBaseBaseProps, InputUnitBaseClassProps } from "../Base";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
import { Unit_Weight } from "fenextjs-interface/cjs/Unit";
export interface InputUnitWeightValue {
    value?: number | "";
    unit?: Unit_All;
}
/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputUnitWeightClassProps extends InputUnitBaseClassProps {
}
/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputUnitWeightBaseProps extends Omit<InputUnitBaseBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<InputUnitWeightValue>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<InputUnitWeightValue>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<InputUnitWeightValue>) => void;
    /**
     * posSelect of TextSelect.
     */
    options?: Unit_Weight[];
}
/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputUnitWeightBaseProps and InputUnitWeightClassProps.
 */
export interface InputUnitWeightProps extends InputUnitWeightBaseProps, InputUnitWeightClassProps {
}
/**
 * Component that renders a checkbox input.
 * Takes an InputUnitWeightProps object as props.
 */
export declare const InputUnitWeight: ({ options, ...props }: InputUnitWeightProps) => React.JSX.Element;
