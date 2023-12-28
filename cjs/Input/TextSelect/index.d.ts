import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectBaseProps, InputSelectClassProps, InputSelectItemOptionBaseProps } from "../Select";
export interface TextSelectProps {
    text?: string;
    select?: InputSelectItemOptionBaseProps;
}
/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputTextSelectClassProps extends InputTextClassProps, InputSelectClassProps {
}
/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputTextSelectBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue" | "datalist" | "onChangeValidate" | "label" | "placeholder" | "icon">, Omit<InputSelectBaseProps, "value" | "onChange" | "defaultValue" | "onChangeValidate" | "label" | "placeholder" | "icon"> {
    /**
     * Label text to display for the input.
     */
    label?: any;
    /**
     * Placeholder text to display in the input field.
     */
    placeholderSelect?: string;
    /**
     * Placeholder text to display in the input field.
     */
    placeholderText?: string;
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<TextSelectProps>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<TextSelectProps>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<TextSelectProps>) => void;
    /**
     * posSelect of TextSelect.
     */
    posSelect?: "left" | "right";
}
/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputTextSelectBaseProps and InputTextSelectClassProps.
 */
export interface InputTextSelectProps extends InputTextSelectBaseProps, InputTextSelectClassProps {
}
/**
 * Component that renders a checkbox input.
 * Takes an InputTextSelectProps object as props.
 */
export declare const InputTextSelect: ({ label, placeholderSelect, placeholderText, defaultValue, value: valueProps, onChange, validator, posSelect, _t, errorWithIsChange, error, ...props }: InputTextSelectProps) => React.JSX.Element;
