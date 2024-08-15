import React from "react";
/**
 * Properties for the base LoaderLine component.
 */
export interface LoaderLineBaseProps {
    /**
     * Height of Line.
     */
    height?: number;
}
/**
 * Properties for the class of the LoaderLine component.
 */
export interface LoaderLineClassProps {
    /**
     * The class name for the component.
     */
    classNameLoaderLine?: string;
}
/**
 * Properties for the LoaderLine component.
 */
export interface LoaderLineProps extends LoaderLineBaseProps, LoaderLineClassProps {
}
export declare const LoaderLine: ({ classNameLoaderLine, height, }: LoaderLineProps) => React.JSX.Element;
