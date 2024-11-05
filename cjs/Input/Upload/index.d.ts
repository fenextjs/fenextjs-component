import React, { ReactNode } from "react";
import { InputFileBaseProps } from "../File";
import { TitleProps } from "../../Title";
import { ButtonProps } from "../../Button";
import { TextProps } from "../../Text";
import { FileProps } from "fenextjs-interface/cjs/File";
export interface InputUploadBaseProps extends InputFileBaseProps {
    title?: ReactNode;
    text?: ReactNode;
    titleFile?: ReactNode;
    textFile?: ReactNode;
    textPreview?: ReactNode;
    icon?: ReactNode;
    iconFile?: ReactNode;
    btn?: ReactNode;
    tagPreview?: "embed" | "img";
    customPreview?: (data: FileProps) => ReactNode;
    loader?: boolean;
    iconLoader?: ReactNode;
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
