import React from "react";
/**
 * Properties for the base ProgressCircle component.
 */
export interface ProgressCircleBaseProps {
    /**
     * Progress Number.
     */
    p: number;
    /**
     * Show Number Progress.
     */
    showP: boolean;
}
/**
 * Properties for the class of the ProgressCircle component.
 */
export interface ProgressCircleClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ProgressCircle component.
 */
export interface ProgressCircleProps extends ProgressCircleBaseProps, ProgressCircleClassProps {
}
export declare const ProgressCircle: ({ className, p, showP, }: ProgressCircleProps) => React.JSX.Element;
