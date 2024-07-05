import React, { PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Title component.
 */
export interface TitleBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * The loader for the component.
     */
    loader?: boolean;
}
/**
 * Properties for the class of the Title component.
 */
export interface TitleClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Title component.
 */
export interface TitleProps extends TitleBaseProps, TitleClassProps {
}
export declare const Title: ({ className, tag, loader, children, ...props }: TitleProps) => React.JSX.Element;
