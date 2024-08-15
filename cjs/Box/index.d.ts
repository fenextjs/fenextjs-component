import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
export interface BoxBaseProps extends PropsWithChildren, _TProps {
}
export interface BoxClassProps {
    className?: string;
}
export interface BoxProps extends BoxBaseProps, BoxClassProps {
}
export declare const Box: ({ className, children }: BoxProps) => React.JSX.Element;
