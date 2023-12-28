import React from "react";
import {
    InputUnitBase,
    InputUnitBaseBaseProps,
    InputUnitBaseClassProps,
} from "../Base";
import { Unit_All } from "fenextjs-functions/cjs/parse/Unit";
import { Unit_Volumen } from "fenextjs-interface/cjs/Unit";

export interface InputUnitVolumenValue {
    value?: number | "";
    unit?: Unit_All;
}

/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputUnitVolumenClassProps extends InputUnitBaseClassProps {}

/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputUnitVolumenBaseProps
    extends Omit<
        InputUnitBaseBaseProps,
        "value" | "onChange" | "defaultValue" | "options"
    > {
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<InputUnitVolumenValue>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<InputUnitVolumenValue>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<InputUnitVolumenValue>) => void;
    /**
     * posSelect of TextSelect.
     */
    options?: Unit_Volumen[];
}

/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputUnitVolumenBaseProps and InputUnitVolumenClassProps.
 */
export interface InputUnitVolumenProps
    extends InputUnitVolumenBaseProps,
        InputUnitVolumenClassProps {}

/**
 * Component that renders a checkbox input.
 * Takes an InputUnitVolumenProps object as props.
 */
export const InputUnitVolumen = ({
    options = Object.keys(Unit_Volumen).map((e) => Unit_Volumen[e]),
    ...props
}: InputUnitVolumenProps) => {
    return (
        <>
            <InputUnitBase {...props} options={options} />
        </>
    );
};
