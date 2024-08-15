import React from "react";
/**
 * Properties for the base PageProgress component.
 */
export interface PageProgressBaseProps {
}
/**
 * Properties for the class of the PageProgress component.
 */
export interface PageProgressClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the PageProgress component.
 */
export interface PageProgressProps extends PageProgressBaseProps, PageProgressClassProps {
}
export declare const PageProgress: ({ className }: PageProgressProps) => React.JSX.Element;
