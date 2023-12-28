import React, { PropsWithChildren, ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectOptionClassProps {
    /**
     * CSS class name for the option select.
     */
    classNameOption?: string;
    /**
     * CSS class name for the option img select.
     */
    classNameOptionImg?: string;
    /**
     * CSS class name for the delete option select.
     */
    classNameOptionDelete?: string;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectOptionBaseProps extends PropsWithChildren, _TProps {
    /**
     * ID of option.
     */
    id: string | number;
    /**
     * Text of option.
     */
    text: string;
    /**
     * Img of option.
     */
    img?: string;
    /**
     * Img of option.
     */
    icon?: ReactNode;
    /**
     * Type of option.
     */
    type?: "div" | "option" | "multiple";
    /**
     * Disabled of option.
     */
    disabled?: boolean;
    /**
     * Selected of option.
     */
    selected?: boolean;
    /**
     * onClick of option.
     */
    onClick?: (item: InputSelectOptionBaseProps) => void;
    /**
     * onDelete of option.
     */
    onDelete?: (item: InputSelectOptionBaseProps) => void;
    /**
     * isBtn of option.
     */
    isBtn?: boolean;
    /**
     * Data custom of option.
     */
    data?: any;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
}
/**
 * Props interface for the InputSelectOption component. Extends both InputSelectOptionBaseProps and InputSelectOptionClassProps interfaces.
 */
export interface InputSelectOptionProps extends InputSelectOptionBaseProps, InputSelectOptionClassProps {
}
export declare const InputSelectOption: ({ classNameOption, classNameOptionImg, classNameOptionDelete, id, text, img, icon, children, type, onClick, onDelete, disabled, selected, isBtn, _t, data, iconDelete, }: InputSelectOptionProps) => React.JSX.Element;
