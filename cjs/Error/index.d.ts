import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
/**
 * Properties for the base ErrorComponent component.
 */
export interface ErrorComponentBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    error?: ErrorFenextjs;
    /**
     * The data-error .
     */
    useDataError?: boolean;
    /**
     * The data-error .
     */
    useErrorInput?: boolean;
}
/**
 * Properties for the class of the ErrorComponent component.
 */
export interface ErrorComponentClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ErrorComponent component.
 */
export interface ErrorComponentProps extends ErrorComponentBaseProps, ErrorComponentClassProps {
}
export declare const ErrorComponent: ({ error, children, className, useDataError, useErrorInput, _t, }: ErrorComponentProps) => React.JSX.Element;
