import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
export interface ButtonMenuBaseProps extends PropsWithChildren, _TProps {
    loader?: boolean;
    disabled?: boolean;
    defaultActive?: boolean;
}
export interface ButtonMenuClassProps {
    className?: string;
    classNameIcon?: string;
    classNameIconBarClose?: string;
    classNameContent?: string;
}
export interface ButtonMenuProps extends ButtonMenuBaseProps, ButtonMenuClassProps {
}
export declare const ButtonMenu: ({ className, classNameIcon, classNameIconBarClose, classNameContent, loader, disabled, defaultActive: defaultActiveProps, children, ...props }: ButtonMenuProps) => React.JSX.Element;
