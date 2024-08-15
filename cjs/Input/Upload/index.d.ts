import React from "react";
import { InputFileBaseProps } from "../File";
import { TitleProps } from "../../Title";
import { ButtonProps } from "../../Button";
import { TextProps } from "../../Text";
import { FileProps } from "fenextjs-interface/cjs/File";
export interface InputUploadBaseProps extends InputFileBaseProps {
    title?: React.ReactNode;
    text?: React.ReactNode;
    titleFile?: React.ReactNode;
    textFile?: React.ReactNode;
    textPreview?: React.ReactNode;
    icon?: React.ReactNode;
    iconFile?: React.ReactNode;
    btn?: React.ReactNode;
    tagPreview?: "embed" | "img";
    customPreview?: (data: FileProps) => React.ReactNode;
    loader?: boolean;
    iconLoader?: React.ReactNode;
}
export interface InputUploadClassProps {
    className?: string;
    classNameUp?: string;
    classNameTitle?: Omit<TitleProps, "children">;
    classNameContentIcon?: string;
    classNameBtn?: Omit<ButtonProps, "children">;
    classNameText?: Omit<TextProps, "children">;
    classNameProgress?: string;
    classNamePreview?: string;
    classNameRemove?: string;
}
export interface InputUploadProps extends InputUploadBaseProps, InputUploadClassProps {
}
export declare const InputUpload: ({ className, classNameBtn, classNameContentIcon, classNameText, classNamePreview, classNameTitle, classNameUp, classNameProgress, classNameRemove, btn, icon, text, title, titleFile, textFile, iconFile, textPreview, defaultValue, parseProgress, onChange, tagPreview, loader, iconLoader, customPreview, ...props }: InputUploadProps) => React.JSX.Element;
