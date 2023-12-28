import React from "react";
import { InputFileBaseProps } from "../File";
import { TitleProps } from "../../Title";
import { TextProps } from "../../Text";
/**
 * Properties for the base InputImg component.
 */
export interface InputImgBaseProps extends Omit<InputFileBaseProps, "accept"> {
    /**
     * The Title for the component.
     */
    title?: React.ReactNode;
    /**
     * The Text for the component.
     */
    text?: React.ReactNode;
    /**
     * The Icon for the component.
     */
    icon?: React.ReactNode;
    /**
     * on Remove Img for the component.
     */
    onRemove?: () => void;
}
/**
 * Properties for the class of the InputImg component.
 */
export interface InputImgClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameUp?: string;
    /**
     * The class name for the component.
     */
    classNameTitle?: Omit<TitleProps, "children">;
    /**
     * The class name for the component.
     */
    classNameContentIcon?: string;
    /**
     * The class name for the component.
     */
    classNameText?: Omit<TextProps, "children">;
    /**
     * The class name for the component.
     */
    classNameProgress?: string;
    /**
     * The class name for the component.
     */
    classNameRemove?: string;
    /**
     * The class name for the component.
     */
    classNameImg?: string;
}
/**
 * Properties for the InputImg component.
 */
export interface InputImgProps extends InputImgBaseProps, InputImgClassProps {
}
export declare const InputImg: ({ className, classNameContentIcon, classNameText, classNameTitle, classNameUp, classNameProgress, classNameRemove, classNameImg, icon, text, title, defaultValue, parseProgress, onChange, onRemove, _t, ...props }: InputImgProps) => React.JSX.Element;
