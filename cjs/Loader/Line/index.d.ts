import React from "react";
export interface LoaderLineBaseProps {
    height?: number;
}
export interface LoaderLineClassProps {
    classNameLoaderLine?: string;
}
export interface LoaderLineProps extends LoaderLineBaseProps, LoaderLineClassProps {
}
export declare const LoaderLine: ({ classNameLoaderLine, height, }: LoaderLineProps) => React.JSX.Element;
