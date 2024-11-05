import React, { PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
export interface TitleProps extends PropsWithChildren, _TProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    loader?: boolean;
    className?: string;
}
export declare const Title: ({ className, tag, loader, children, ...props }: TitleProps) => React.JSX.Element;
