import React from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Theme component.
 */
export interface ThemeBaseProps extends _TProps {
}
/**
 * Properties for the class of the Theme component.
 */
export interface ThemeClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameItem?: string;
}
/**
 * Properties for the Theme component.
 */
export interface ThemeProps extends ThemeBaseProps, ThemeClassProps {
}
export declare const Theme: ({ className, classNameItem }: ThemeProps) => React.JSX.Element;
