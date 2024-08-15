import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface TwoColStickyBaseProps extends _TProps {
    children?: ReactNode;
    colSticky?: ReactNode;
    posCol?: "left" | "right";
}
export interface TwoColStickyClassProps {
    className?: string;
    classNameChildren?: string;
    classNameColSticky?: string;
}
export interface TwoColStickyProps extends TwoColStickyBaseProps, TwoColStickyClassProps {
}
export declare const TwoColSticky: ({ className, classNameChildren, classNameColSticky, children, colSticky, posCol, ...props }: TwoColStickyProps) => React.JSX.Element;
