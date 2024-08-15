import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export interface CounterBaseProps extends _TProps {
    number: number;
    text?: ReactNode;
    time?: number;
    decimal?: number;
    parseNumber?: (n: number) => ReactNode;
}
export interface CounterClassProps {
    className?: string;
    classNameNumber?: string;
    classNameText?: string;
}
export interface CounterProps extends CounterBaseProps, CounterClassProps {
}
export declare const Counter: ({ className, classNameNumber, classNameText, number, text, time, decimal, parseNumber, ...props }: CounterProps) => React.JSX.Element;
