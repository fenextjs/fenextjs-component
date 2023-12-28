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
/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputUnitBaseClassProps extends InputTextSelectClassProps {
}
/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputUnitBaseBaseProps extends Omit<InputTextSelectBaseProps, "value" | "onChange" | "defaultValue" | "options"> {
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<InputUnitValue>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<InputUnitValue>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<InputUnitValue>) => void;
    /**
     * posSelect of TextSelect.
     */
    options: Unit_All[];
}
/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputUnitBaseBaseProps and InputUnitBaseClassProps.
 */
export interface InputUnitBaseProps extends InputUnitBaseBaseProps, InputUnitBaseClassProps {
}
/**
 * Component that renders a checkbox input.
 * Takes an InputUnitBaseProps object as props.
 */
export declare const InputUnitBase: ({ defaultValue, value: valueProps, onChange, options, ...props }: InputUnitBaseProps) => React.JSX.Element;
