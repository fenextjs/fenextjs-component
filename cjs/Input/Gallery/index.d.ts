import { FileProps } from "fenextjs-interface/cjs/File";
import { ButtonClassProps } from "../../Button";
import { InputImgBaseProps } from "../Img";
import React from "react";
import { _TProps } from "fenextjs-interface";
export interface InputGalleryBaseProps extends Omit<InputImgBaseProps, "defaultValue" | "onRemove" | "onChange">, _TProps {
    defaultValue?: FileProps[];
    value?: FileProps[];
    textBtn?: string;
    onChange?: (items: FileProps[]) => void;
}
export interface InputGalleryClassProps {
    className?: string;
    classNameContentButton?: string;
    classNameButton?: ButtonClassProps;
}
export interface InputGalleryProps extends InputGalleryBaseProps, InputGalleryClassProps {
}
export declare const InputGallery: ({ className, classNameContentButton, classNameButton, textBtn, defaultValue, value, onChange, ...props }: InputGalleryProps) => React.JSX.Element;
