import React from "react";
export interface ProgressLineBaseProps {
    p: number;
    showP: boolean;
}
export interface ProgressLineClassProps {
    className?: string;
    classNameBar?: string;
}
export interface ProgressLineProps extends ProgressLineBaseProps, ProgressLineClassProps {
}
export declare const ProgressLine: ({ className, classNameBar, p, showP, }: ProgressLineProps) => React.JSX.Element;
