import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface ColsBaseProps extends _TProps {
    nCols?: number | string;
    breakInside?: boolean;
    children?: ReactNode;
}
export interface ColsClassProps {
    className?: string;
}
export interface ColsProps extends ColsBaseProps, ColsClassProps {
}
export declare const Cols: ({ className, children, nCols, breakInside, ...props }: ColsProps) => React.JSX.Element;
