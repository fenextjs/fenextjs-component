import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
/**
 * Properties for the base Cols component.
 */
export interface ColsBaseProps extends _TProps {
    /**
     * The nCols for the component.
     */
    nCols?: number | string;
    /**
     * The breakInside for the component.
     */
    breakInside?: boolean;
    /**
     * The children for the component.
     */
    children?: ReactNode;
}
/**
 * Properties for the class of the Cols component.
 */
export interface ColsClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Cols component.
 */
export interface ColsProps extends ColsBaseProps, ColsClassProps {
}
export declare const Cols: ({ className, children, nCols, breakInside, ...props }: ColsProps) => React.JSX.Element;
