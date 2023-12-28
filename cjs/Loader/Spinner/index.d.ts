import React from "react";
/**
 * Properties for the base LoaderSpinner component.
 */
export interface LoaderSpinnerBaseProps {
}
/**
 * Properties for the class of the LoaderSpinner component.
 */
export interface LoaderSpinnerClassProps {
    /**
     * The class name for the component.
     */
    classNameLoaderSpinner?: string;
}
/**
 * Properties for the LoaderSpinner component.
 */
export interface LoaderSpinnerProps extends LoaderSpinnerBaseProps, LoaderSpinnerClassProps {
}
export declare const LoaderSpinner: ({ classNameLoaderSpinner, }: LoaderSpinnerProps) => React.JSX.Element;
