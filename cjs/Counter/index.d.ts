import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export interface CounterProps extends _TProps {
    number: number;
    text?: ReactNode;
    time?: number;
    decimal?: number;
    parseNumber?: (n: number) => ReactNode;
    className?: string;
    classNameNumber?: string;
    classNameText?: string;
}
export declare const Counter: ({ className, classNameNumber, classNameText, number, text, time, decimal, parseNumber, ...props }: CounterProps) => React.JSX.Element;
