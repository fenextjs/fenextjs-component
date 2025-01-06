import { ProgressLineClassProps } from "../Progress/Line";
import React, { ReactNode } from "react";
export interface StepsCircleItemProps {
    children?: ReactNode;
    onClick?: () => void;
}
export interface StepsCircleClassProps {
    className?: string;
    classNameDisabled?: string;
    classNameItem?: string;
    classNameItemCircle?: string;
    classNameItemContent?: string;
    classNameItemActive?: string;
    classNameItemActiveCircle?: string;
    classNameItemActiveContent?: string;
    classNameProgressLine?: ProgressLineClassProps;
}
export interface StepsCircleProps extends StepsCircleClassProps {
    items?: StepsCircleItemProps[];
    defaultStep?: number;
    valueStep?: number;
    disabled?: boolean;
}
export declare const StepsCircle: ({ className, classNameDisabled, classNameItem, classNameItemCircle, classNameItemContent, classNameItemActive, classNameItemActiveCircle, classNameItemActiveContent, classNameProgressLine, defaultStep, valueStep, disabled, items, }: StepsCircleProps) => React.JSX.Element;
