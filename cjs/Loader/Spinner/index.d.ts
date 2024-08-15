import React from "react";
export interface LoaderSpinnerBaseProps {
}
export interface LoaderSpinnerClassProps {
    classNameLoaderSpinner?: string;
}
export interface LoaderSpinnerProps extends LoaderSpinnerBaseProps, LoaderSpinnerClassProps {
}
export declare const LoaderSpinner: ({ classNameLoaderSpinner, }: LoaderSpinnerProps) => React.JSX.Element;
