import React, { ReactNode } from "react";
import { LoaderClassProps } from "../Loader";
import { _TProps } from "fenextjs-interface";
export type BackTypeOnBack = "history" | "router" | "link" | "none";
/**
 * Properties for the base Back component.
 */
export interface BackBaseProps extends _TProps {
    /**
     * Indicates whether the Back is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the Back is disabled or not.
     */
    disabled?: boolean;
    /**
     * The callback function that is called when the Back is clicked.
     */
    onClick?: (e?: any) => void;
    /**
     * The icon to display in the Back.
     */
    icon?: ReactNode;
    /**
     * The icon to display in the Back.
     */
    children?: ReactNode;
    /**
     * The type of onBack in component.
     */
    typeOnBack?: BackTypeOnBack;
    /**
     * The link to redirect if typeOnBack is link.
     */
    link?: string;
    /**
     * useHistoryMinLenght for show back.
     * @default false
     */
    useHistoryMinLenght?: boolean;
    /**
     * minLenght for show back.
     * @default 2
     */
    minLenght?: number;
}
/**
 * Properties for the class of the Back component.
 */
export interface BackClassProps extends LoaderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Disabled Back element.
     */
    classNameDisabled?: string;
    /**
     * The class name for the Icon Back element.
     */
    classNameIcon?: string;
    /**
     * The class name for the Content Back element.
     */
    classNameContent?: string;
}
/**
 * Properties for the Back component.
 */
export interface BackProps extends BackBaseProps, BackClassProps {
}
export declare const Back: ({ className, classNameLoader, classNameDisabled, classNameIcon, classNameContent, children, loader, disabled, onClick, icon, typeOnBack, link, minLenght, useHistoryMinLenght, _t, }: BackProps) => React.JSX.Element;
