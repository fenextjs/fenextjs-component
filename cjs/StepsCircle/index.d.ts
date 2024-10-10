import React, { ReactNode } from "react";
export interface StepsCircleItemProps {
    children?: ReactNode;
    onClick?: () => void;
}
export interface StepsCircleProps {
    className?: string;
    items?: StepsCircleItemProps[];
    defaultStep?: number;
    valueStep?: number;
    disable?: boolean;
}
export declare const StepsCircle: ({ className, defaultStep, valueStep, disable, items, }: StepsCircleProps) => React.JSX.Element;
