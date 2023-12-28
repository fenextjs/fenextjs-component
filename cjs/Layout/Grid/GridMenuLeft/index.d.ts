import React, { PropsWithChildren, ReactNode } from "react";
import { LoaderClassProps } from "../../../Loader";
/**
 * Properties for the base button component.
 */
export interface LayoutGridMenuLeftBaseProps extends PropsWithChildren {
    /**
     * Indicates whether the page is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Menu Left of Layout.
     */
    menuLeft?: ReactNode;
    /**
     * Menu Top of Layout.
     */
    menuLeftActive?: boolean;
    /**
     * Menu Top of Layout.
     */
    menuLeftMovilActive?: boolean;
    /**
     * useHeaderButtonMenu for show menu.
     */
    useHeaderButtonMenu?: boolean;
    /**
     * Use page progress bar.
     */
    usePageProgress?: boolean;
}
/**
 * Properties for the class of the button component.
 */
export interface LayoutGridMenuLeftClassProps extends LoaderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Menu Left element.
     */
    classNameMenuLeft?: string;
    /**
     * The class name for the Menu Left element.
     */
    classNameMenuLeftContent?: string;
    /**
     * The class name for the Content Children element.
     */
    classNameChildren?: string;
}
/**
 * Properties for the button component.
 */
export interface LayoutGridMenuLeftProps extends LayoutGridMenuLeftBaseProps, LayoutGridMenuLeftClassProps {
}
export declare const LayoutGridMenuLeft: ({ className, classNameLoader, classNameChildren, classNameMenuLeft, classNameMenuLeftContent, children, menuLeft, loader, menuLeftActive, menuLeftMovilActive, useHeaderButtonMenu, usePageProgress, ...props }: LayoutGridMenuLeftProps) => React.JSX.Element;
