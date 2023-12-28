import React from "react";
import { InputSelectBaseProps, InputSelectClassProps } from "../Select";
import { useCSCProps } from "fenextjs-hook/cjs/useCSC";
import { CSCProps } from "fenextjs-interface/cjs/CSC";
import { InputTextBaseProps } from "../Text";
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
export interface InputSelectCSCBaseProps extends useCSCProps, Omit<InputSelectBaseProps, "options" | "defaultValue" | "value" | "isSelectClearText" | "onChange" | "onChangeValidate"> {
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
    country?: Pick<InputTextBaseProps, "label" | "placeholder">;
    /**
     * state Input Label and Placeholder.
     */
    state?: Pick<InputTextBaseProps, "label" | "placeholder">;
    /**
     * city Input Label and Placeholder.
     */
    city?: Pick<InputTextBaseProps, "label" | "placeholder">;
    /**
     * ifLoadImgCountry.
     */
    ifLoadImgCountry?: boolean;
}
/**
 * Props interface for the InputSelectCSC component. Extends both InputSelectCSCBaseProps and InputSelectCSCClassProps interfaces.
 */
export interface InputSelectCSCProps extends InputSelectCSCBaseProps, InputSelectCSCClassProps {
}
export declare const InputSelectCSC: ({ classNameSelectCSC, defaultValue, defaultValueString, useContainer, onChange, country, state, city, ifLoadImgCountry, ...props }: InputSelectCSCProps) => React.JSX.Element;
