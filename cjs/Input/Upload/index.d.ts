import React from "react";
import { InputFileBaseProps } from "../File";
import { TitleProps } from "../../Title";
import { ButtonProps } from "../../Button";
import { TextProps } from "../../Text";
import { FileProps } from "fenextjs-interface/cjs/File";
/**
 * Properties for the base InputUpload component.
 */
export interface InputUploadBaseProps extends InputFileBaseProps {
    /**
     * The Title for the component.
     */
    title?: React.ReactNode;
    /**
     * The Text for the component.
     */
    text?: React.ReactNode;
    /**
     * The Title for the component.
     */
    titleFile?: React.ReactNode;
    /**
     * The Text for the component.
     */
    textFile?: React.ReactNode;
    /**
     * The Text for the component.
     */
    textPreview?: React.ReactNode;
    /**
     * The Icon for the component.
     */
    icon?: React.ReactNode;
    /**
     * The Icon for the component.
     */
    iconFile?: React.ReactNode;
    /**
     * The Buton for the component.
     */
    btn?: React.ReactNode;
    /**
     * The tagPreview for the component.
     */
    tagPreview?: "embed" | "img";
    /**
     * The tagPreview for the component.
     */
    customPreview?: (data: FileProps) => React.ReactNode;
    /**
     * The loader for the component.
     */
    loader?: boolean;
    /**
     * The Icon for the component.
     */
    iconLoader?: React.ReactNode;
}
/**
 * Properties for the class of the InputUpload component.
 */
export interface InputUploadClassProps {
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
    classNameBtn?: Omit<ButtonProps, "children">;
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
    classNamePreview?: string;
    /**
     * The class name for the component.
     */
    classNameRemove?: string;
}
/**
 * Properties for the InputUpload component.
 */
export interface InputUploadProps extends InputUploadBaseProps, InputUploadClassProps {
}
export declare const InputUpload: ({ className, classNameBtn, classNameContentIcon, classNameText, classNamePreview, classNameTitle, classNameUp, classNameProgress, classNameRemove, btn, icon, text, title, titleFile, textFile, iconFile, textPreview, defaultValue, parseProgress, onChange, tagPreview, loader, iconLoader, customPreview, ...props }: InputUploadProps) => React.JSX.Element;
