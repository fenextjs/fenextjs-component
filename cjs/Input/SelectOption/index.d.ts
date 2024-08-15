import React, { PropsWithChildren, ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
import { ImgProps } from "../../Img";
export interface InputSelectOptionClassProps {
    classNameOption?: string;
    classNameOptionImg?: string;
    classNameOptionDelete?: string;
}
export interface InputSelectOptionBaseProps<T = any> extends PropsWithChildren, _TProps {
    id: string | number;
    text: string;
    img?: string;
    imgComponent?: ImgProps;
    icon?: ReactNode;
    type?: "div" | "option" | "multiple";
    disabled?: boolean;
    selected?: boolean;
    hidden?: boolean;
    onClick?: (item: InputSelectOptionBaseProps) => void;
    onDelete?: (item: InputSelectOptionBaseProps) => void;
    isBtn?: boolean;
    data?: T;
    iconDelete?: ReactNode;
}
export interface InputSelectOptionProps<T = any> extends InputSelectOptionBaseProps<T>, InputSelectOptionClassProps {
}
export declare const InputSelectOption: <T = any>({ classNameOption, classNameOptionImg, classNameOptionDelete, id, text, img, imgComponent, icon, children, type, onClick, onDelete, disabled, selected, hidden, isBtn, data, iconDelete, ...props }: InputSelectOptionProps<T>) => React.JSX.Element;
