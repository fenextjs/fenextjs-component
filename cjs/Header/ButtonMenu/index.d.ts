import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
/**
 * Properties for the base ButtonMenu component.
 */
export interface ButtonMenuBaseProps extends PropsWithChildren, _TProps {
    /**
     * Indicates whether the Collapse is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the Collapse is disabled or not.
     */
    disabled?: boolean;
    /**
     * Indicates whether the Collapse is defaultActive for show.
     */
    defaultActive?: boolean;
}
/**
 * Properties for the class of the ButtonMenu component.
 */
export interface ButtonMenuClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name Icon for the component.
     */
    classNameIcon?: string;
    /**
     * The class name Icon for the component.
     */
    classNameIconBarClose?: string;
    /**
     * The class name for content children.
     */
    classNameContent?: string;
}
/**
 * Properties for the ButtonMenu component.
 */
export interface ButtonMenuProps extends ButtonMenuBaseProps, ButtonMenuClassProps {
}
export declare const ButtonMenu: ({ className, classNameIcon, classNameIconBarClose, classNameContent, loader, disabled, defaultActive: defaultActiveProps, children, _t, }: ButtonMenuProps) => React.JSX.Element;
