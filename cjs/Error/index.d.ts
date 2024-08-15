import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
export interface ErrorComponentBaseProps extends PropsWithChildren, _TProps {
    error?: ErrorFenextjs;
    useDataError?: boolean;
    useErrorInput?: boolean;
}
export interface ErrorComponentClassProps {
    className?: string;
}
export interface ErrorComponentProps extends ErrorComponentBaseProps, ErrorComponentClassProps {
}
export declare const ErrorComponent: ({ error, children, className, useDataError, useErrorInput, ...props }: ErrorComponentProps) => React.JSX.Element;
