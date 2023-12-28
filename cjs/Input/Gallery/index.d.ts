import { FileProps } from "fenextjs-interface/cjs/File";
import { ButtonClassProps } from "../../Button";
import { InputImgBaseProps } from "../Img";
import React from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base InputGallery component.
 */
export interface InputGalleryBaseProps extends Omit<InputImgBaseProps, "defaultValue" | "onRemove" | "onChange">, _TProps {
    /**
     * Default value for the input element
     */
    defaultValue?: FileProps[];
    /**
     * Default value for the input element
     */
    value?: FileProps[];
    /**
     * The class name for the component.
     */
    textBtn?: string;
    /**
     * on Remove Img for the component.
     */
    onChange?: (items: FileProps[]) => void;
}
/**
 * Properties for the class of the InputGallery component.
 */
export interface InputGalleryClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameContentButton?: string;
    /**
     * The class name for the component.
     */
    classNameButton?: ButtonClassProps;
}
/**
 * Properties for the InputGallery component.
 */
export interface InputGalleryProps extends InputGalleryBaseProps, InputGalleryClassProps {
}
export declare const InputGallery: ({ className, classNameContentButton, classNameButton, textBtn, defaultValue, value, onChange, _t, ...props }: InputGalleryProps) => React.JSX.Element;
