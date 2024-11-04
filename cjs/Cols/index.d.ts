import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface ColsProps extends _TProps {
    nCols?: number | string;
    breakInside?: boolean;
    children?: ReactNode;
    className?: string;
}
export declare const Cols: ({ className, children, nCols, breakInside, ...props }: ColsProps) => React.JSX.Element;
