import React, { PropsWithChildren, ReactNode } from "react";
import { LoaderClassProps } from "../Loader";
import { _TProps } from "fenextjs-interface";
export type ButtonBaseSize = "extra-small" | "small" | "normal" | "strong" | "extra-strong";
export type ButtonOnClick = React.MouseEventHandler<HTMLButtonElement> & React.MouseEventHandler<HTMLDivElement>;
export interface ButtonBaseProps extends PropsWithChildren, _TProps {
    loader?: boolean;
    disabled?: boolean;
    onClick?: ButtonOnClick;
    onClickDisabled?: ButtonOnClick;
    icon?: ReactNode;
    isBtn?: boolean;
    size?: ButtonBaseSize;
    full?: boolean;
}
export interface ButtonClassProps extends LoaderClassProps {
    className?: string;
    classNameDisabled?: string;
}
export interface ButtonProps extends ButtonBaseProps, ButtonClassProps {
}
export declare const Button: ({ className, classNameLoader, classNameDisabled, children, loader, disabled, onClick, onClickDisabled: onClickDisabledProps, icon, isBtn, full, size, ...props }: ButtonProps) => React.JSX.Element;
