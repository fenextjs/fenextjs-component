import React from "react";
import { InputFileBaseProps } from "../File";
import { TitleProps } from "../../Title";
import { TextProps } from "../../Text";
export interface InputImgBaseProps extends Omit<InputFileBaseProps, "accept"> {
    title?: React.ReactNode;
    text?: React.ReactNode;
    icon?: React.ReactNode;
    onRemove?: () => void;
}
export interface InputImgClassProps {
    className?: string;
    classNameUp?: string;
    classNameTitle?: Omit<TitleProps, "children">;
    classNameContentIcon?: string;
    classNameText?: Omit<TextProps, "children">;
    classNameProgress?: string;
    classNameRemove?: string;
    classNameImg?: string;
}
export interface InputImgProps extends InputImgBaseProps, InputImgClassProps {
}
export declare const InputImg: ({ className, classNameContentIcon, classNameText, classNameTitle, classNameUp, classNameProgress, classNameRemove, classNameImg, icon, text, title, defaultValue, parseProgress, onChange, onRemove, ...props }: InputImgProps) => React.JSX.Element;
