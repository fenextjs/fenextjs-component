import React from "react";
export interface ProgressCircleBaseProps {
    p: number;
    showP: boolean;
}
export interface ProgressCircleClassProps {
    className?: string;
}
export interface ProgressCircleProps extends ProgressCircleBaseProps, ProgressCircleClassProps {
}
export declare const ProgressCircle: ({ className, p, showP, }: ProgressCircleProps) => React.JSX.Element;
