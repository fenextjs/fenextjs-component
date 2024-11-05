import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface TwoColStickyProps extends _TProps {
    children?: ReactNode;
    colSticky?: ReactNode;
    posCol?: "left" | "right";
    className?: string;
    classNameChildren?: string;
    classNameColSticky?: string;
}
export declare const TwoColSticky: ({ className, classNameChildren, classNameColSticky, children, colSticky, posCol, ...props }: TwoColStickyProps) => React.JSX.Element;
