import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Interface that defines CSS class properties for a radio input component.
 */
export interface InputRadioClassProps {
    /**
     * CSS class name for content the radio.
     */
    classNameContent?: string;
    /**
     * CSS class name for the radio label.
     */
    classNameLabel?: string;
    /**
     * CSS class name for the active radio label.
     */
    classNameLabelActive?: string;
    /**
     * CSS class name for the inactive radio label.
     */
    classNameLabelInactive?: string;
    /**
     * CSS class name for the text next to the radio.
     */
    classNameText?: string;
    /**
     * CSS class name for the container that holds the radio and its label.
     */
    classNameContentRadio?: string;
    /**
     * CSS class name for the container that holds the radio and its label when the radio is active.
     */
    classNameContentRadioActive?: string;
    /**
     * CSS class name for the container that holds the radio and its label when the radio is inactive.
     */
    classNameContentRadioInactive?: string;
    /**
     * CSS class name for the radio input element.
     */
    classNameRadio?: string;
    /**
     * CSS class name for the radio input element when the radio is active.
     */
    classNameRadioActive?: string;
    /**
     * CSS class name for the radio input element when the radio is inactive.
     */
    classNameRadioInactive?: string;
    /**
     * Icon to display next to the radio.
     */
    icon?: ReactNode;
}
/**
 * Interface that defines base properties for a radio Item.
 */
export interface InputRadioItemProps<T> {
    /**
     * The id to display next to the item radio.
     */
    id: string;
    /**
     * The label to display next to the item radio.
     */
    label?: ReactNode;
    /**
     * The data of the item radio.
     */
    data?: T;
}
/**
 * Interface that defines base properties for a radio input component.
 */
export interface InputRadioBaseProps<T = any> extends _TProps {
    /**
     * Items of Input Radio.
     */
    items?: InputRadioItemProps<T>[];
    /**
     * The position of the label relative to the radio.
     */
    labelPosition?: "right" | "left";
    /**
     * The name attribute of the radio input element.
     */
    name?: string;
    /**
     * A callback function to execute when the radio is toggled.
     * Receives a boolean value indicating whether the radio is checked or not.
     */
    onChange?: (e: InputRadioItemProps<T>) => void;
    /**
     * The default value of the radio when it is first rendered.
     */
    defaultValue?: InputRadioItemProps<T>;
    /**
     * A boolean value indicating whether to use the value attribute of the radio input element or not.
     */
    useValue?: boolean;
    /**
     * The value of the radio input element.
     */
    value?: InputRadioItemProps<T>;
    /**
     * A boolean value indicating whether the radio is disabled or not.
     */
    disabled?: boolean;
}
/**
 * Interface that defines all properties for a radio input component.
 * Extends InputRadioBaseProps and InputRadioClassProps.
 */
export interface InputRadioProps<T> extends InputRadioBaseProps<T>, InputRadioClassProps {
}
/**
 * Component that renders a radio input.
 * Takes an InputRadioProps object as props.
 */
export declare const InputRadio: <T = any>({ classNameContent, classNameLabel, classNameLabelActive, classNameLabelInactive, classNameText, classNameContentRadio, classNameContentRadioActive, classNameContentRadioInactive, classNameRadio, classNameRadioActive, classNameRadioInactive, labelPosition, name, onChange, defaultValue, useValue, value, disabled, icon, items, _t, }: InputRadioProps<T>) => React.JSX.Element;
