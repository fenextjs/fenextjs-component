import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Counter component.
 */
export interface CounterBaseProps extends _TProps {
    /**
     * Number show.
     */
    number: number;
    /**
     * Text show.
     * @default undefined
     */
    text?: ReactNode;
    /**
     * Time for increment Number.
     * @default 1000
     */
    time?: number;
    /**
     * N decimal show in Number.
     * @default 2
     */
    decimal?: number;
    /**
     * Format Number.
     * @default parseNumberCount
     */
    parseNumber?: (n: number) => ReactNode;
}
/**
 * Properties for the class of the Counter component.
 */
export interface CounterClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Number.
     */
    classNameNumber?: string;
    /**
     * The class name for the Text.
     */
    classNameText?: string;
}
/**
 * Properties for the Counter component.
 */
export interface CounterProps extends CounterBaseProps, CounterClassProps {
}
export declare const Counter: ({ className, classNameNumber, classNameText, number, text, time, decimal, parseNumber, ...props }: CounterProps) => React.JSX.Element;
