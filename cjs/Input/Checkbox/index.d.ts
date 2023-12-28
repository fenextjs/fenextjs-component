import React from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputCheckboxClassProps {
    /**
     * CSS class name for the checkbox label.
     */
    classNameLabel?: string;
    /**
     * CSS class name for the active checkbox label.
     */
    classNameLabelActive?: string;
    /**
     * CSS class name for the inactive checkbox label.
     */
    classNameLabelInactive?: string;
    /**
     * CSS class name for the text next to the checkbox.
     */
    classNameText?: string;
    /**
     * CSS class name for the container that holds the checkbox and its label.
     */
    classNameContentCheckbox?: string;
    /**
     * CSS class name for the container that holds the checkbox and its label when the checkbox is active.
     */
    classNameContentCheckboxActive?: string;
    /**
     * CSS class name for the container that holds the checkbox and its label when the checkbox is inactive.
     */
    classNameContentCheckboxInactive?: string;
    /**
     * CSS class name for the checkbox input element.
     */
    classNameCheckbox?: string;
    /**
     * CSS class name for the checkbox input element when the checkbox is active.
     */
    classNameCheckboxActive?: string;
    /**
     * CSS class name for the checkbox input element when the checkbox is inactive.
     */
    classNameCheckboxInactive?: string;
    /**
     * Icon to display next to the checkbox.
     */
    icon?: any;
}
/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputCheckboxBaseProps extends _TProps {
    /**
     * The label to display next to the checkbox.
     */
    label?: any;
    /**
     * The position of the label relative to the checkbox.
     */
    labelPosition?: "right" | "left";
    /**
     * The name attribute of the checkbox input element.
     */
    name?: string;
    /**
     * A callback function to execute when the checkbox is toggled.
     * Receives a boolean value indicating whether the checkbox is checked or not.
     */
    onChange?: (e: boolean) => void;
    /**
     * The default value of the checkbox when it is first rendered.
     */
    defaultValue?: boolean;
    /**
     * A boolean value indicating whether to use the value attribute of the checkbox input element or not.
     */
    useValue?: boolean;
    /**
     * The value of the checkbox input element.
     */
    value?: boolean;
    /**
     * A boolean value indicating whether the checkbox is disabled or not.
     */
    disabled?: boolean;
    /**
     * A callback function to execute when the checkbox is validated.
     * Should return a promise or void.
     */
    onValidateCheck?: () => Promise<void> | void;
}
/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputCheckboxBaseProps and InputCheckboxClassProps.
 */
export interface InputCheckboxProps extends InputCheckboxBaseProps, InputCheckboxClassProps {
}
/**
 * Component that renders a checkbox input.
 * Takes an InputCheckboxProps object as props.
 */
export declare const InputCheckbox: ({ classNameLabel, classNameLabelActive, classNameLabelInactive, classNameText, classNameContentCheckbox, classNameContentCheckboxActive, classNameContentCheckboxInactive, classNameCheckbox, classNameCheckboxActive, classNameCheckboxInactive, label, labelPosition, name, onChange, defaultValue, useValue, value, disabled, icon, onValidateCheck, _t, }: InputCheckboxProps) => React.JSX.Element;
