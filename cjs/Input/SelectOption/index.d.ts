import React, { PropsWithChildren, ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
import { ImgProps } from "../../Img";
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
export interface InputSelectOptionBaseProps<T = any> extends PropsWithChildren, _TProps {
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
    imgComponent?: ImgProps;
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
     * Selected of option.
     */
    hidden?: boolean;
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
    data?: T;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
}
/**
 * Props interface for the InputSelectOption component. Extends both InputSelectOptionBaseProps and InputSelectOptionClassProps interfaces.
 */
export interface InputSelectOptionProps<T = any> extends InputSelectOptionBaseProps<T>, InputSelectOptionClassProps {
}
export declare const InputSelectOption: <T = any>({ classNameOption, classNameOptionImg, classNameOptionDelete, id, text, img, imgComponent, icon, children, type, onClick, onDelete, disabled, selected, hidden, isBtn, _t, data, iconDelete, }: InputSelectOptionProps<T>) => React.JSX.Element;
