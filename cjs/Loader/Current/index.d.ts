import React from "react";
/**
 * Properties for the base Loader component.
 */
export interface LoaderBaseProps {
}
/**
 * Properties for the class of the Loader component.
 */
export interface LoaderClassProps {
    /**
     * The class name for the component.
     */
    classNameLoader?: string;
}
/**
 * Properties for the Loader component.
 */
export interface LoaderProps extends LoaderBaseProps, LoaderClassProps {
}
export declare const Loader: ({ classNameLoader }: LoaderProps) => React.JSX.Element;
