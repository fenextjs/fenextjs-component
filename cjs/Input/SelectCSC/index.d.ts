import React from "react";
import { InputSelectBaseProps, InputSelectClassProps, InputSelectProps } from "../Select";
import { useCSCProps } from "fenextjs-hook/cjs/useCSC";
import { CSCProps } from "fenextjs-interface/cjs/CSC";
/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectCSCClassProps extends InputSelectClassProps {
    /**
     * CSS class name for the input select.
     */
    classNameSelectCSC?: string;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCSCBaseProps extends useCSCProps, Omit<InputSelectBaseProps, "options" | "defaultValue" | "value" | "isSelectClearText" | "onChange" | "onChangeValidate" | "validator"> {
    /**
     * useContainer for group select in div.
     */
    useContainer?: boolean;
    /**
     * onChange CSC selected.
     */
    onChange?: (data: CSCProps) => void;
    /**
     * country Input Label and Placeholder.
     */
    country?: Pick<InputSelectProps, "label" | "placeholder" | "disabled" | "classNameSelect" | "validator" | "validatorData">;
    /**
     * state Input Label and Placeholder.
     */
    state?: Pick<InputSelectProps, "label" | "placeholder" | "disabled" | "classNameSelect" | "validator" | "validatorData">;
    /**
     * city Input Label and Placeholder.
     */
    city?: Pick<InputSelectProps, "label" | "placeholder" | "disabled" | "classNameSelect" | "validator" | "validatorData">;
}
/**
 * Props interface for the InputSelectCSC component. Extends both InputSelectCSCBaseProps and InputSelectCSCClassProps interfaces.
 */
export interface InputSelectCSCProps extends InputSelectCSCBaseProps, InputSelectCSCClassProps {
}
export declare const InputSelectCSC: ({ classNameSelectCSC, useContainer, country, state, city, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, defaultValueJsonString, valueJsonString, onChangeJsonString, parseJson_to_String, parseString_to_Json, ...props }: InputSelectCSCProps) => React.JSX.Element;
