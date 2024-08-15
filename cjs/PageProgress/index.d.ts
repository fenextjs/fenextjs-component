import React from "react";
export interface PageProgressBaseProps {
}
export interface PageProgressClassProps {
    className?: string;
}
export interface PageProgressProps extends PageProgressBaseProps, PageProgressClassProps {
}
export declare const PageProgress: ({ className }: PageProgressProps) => React.JSX.Element;
