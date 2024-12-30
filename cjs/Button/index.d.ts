import React, { PropsWithChildren, ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export type ButtonBaseSize = "extra-small" | "small" | "normal" | "strong" | "extra-strong";
export type ButtonOnClick = React.MouseEventHandler<HTMLButtonElement> & React.MouseEventHandler<HTMLDivElement>;
export interface ButtonBaseProps extends PropsWithChildren, _TProps {
    loader?: boolean;
    invert?: boolean;
    disabled?: boolean;
    onClick?: ButtonOnClick;
    onClickDisabled?: ButtonOnClick;
    icon?: ReactNode;
    iconLoader?: ReactNode;
    isBtn?: boolean;
    size?: ButtonBaseSize;
    full?: boolean;
}
export interface ButtonClassProps {
    className?: string;
    classNameDisabled?: string;
    classNameLoader?: string;
    classNameInvert?: string;
    classNameContentLoaderElement?: string;
    classNameLoaderElement?: string;
}
export interface ButtonProps extends ButtonBaseProps, ButtonClassProps {
}
export declare const Button: ({ className, classNameLoader, classNameInvert, classNameDisabled, classNameContentLoaderElement, classNameLoaderElement, children, loader, invert, disabled, onClick, onClickDisabled: onClickDisabledProps, icon, iconLoader, isBtn, full, size, ...props }: ButtonProps) => React.JSX.Element;
