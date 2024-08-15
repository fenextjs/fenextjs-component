import React from "react";
export interface ProgressLineBaseProps {
    p: number;
    showP: boolean;
}
export interface ProgressLineClassProps {
    className?: string;
}
export interface ProgressLineProps extends ProgressLineBaseProps, ProgressLineClassProps {
}
export declare const ProgressLine: ({ className, p, showP, }: ProgressLineProps) => React.JSX.Element;
