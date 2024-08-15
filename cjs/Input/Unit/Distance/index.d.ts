import React from "react";
import { InputUnitBaseBaseProps, InputUnitBaseClassProps } from "../Base";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
import { Unit_Distance } from "fenextjs-interface/cjs/Unit";
export interface InputUnitDistanceValue {
    value?: number | "";
    unit?: Unit_All;
}
/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputUnitDistanceClassProps extends InputUnitBaseClassProps {
}
/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputUnitDistanceBaseProps extends Omit<InputUnitBaseBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<InputUnitDistanceValue>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<InputUnitDistanceValue>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<InputUnitDistanceValue>) => void;
    /**
     * posSelect of TextSelect.
     */
    options?: Unit_Distance[];
}
/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputUnitDistanceBaseProps and InputUnitDistanceClassProps.
 */
export interface InputUnitDistanceProps extends InputUnitDistanceBaseProps, InputUnitDistanceClassProps {
}
/**
 * Component that renders a checkbox input.
 * Takes an InputUnitDistanceProps object as props.
 */
export declare const InputUnitDistance: ({ options, ...props }: InputUnitDistanceProps) => React.JSX.Element;
