import React from "react";
export interface LoaderBaseProps {
}
export interface LoaderClassProps {
    classNameLoader?: string;
}
export interface LoaderProps extends LoaderBaseProps, LoaderClassProps {
}
export declare const Loader: ({ classNameLoader }: LoaderProps) => React.JSX.Element;
