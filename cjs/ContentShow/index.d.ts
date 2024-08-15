import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface ContentShowBaseProps extends _TProps {
    children?: ReactNode;
    show?: boolean;
}
export interface ContentShowClassProps {
    className?: string;
}
export interface ContentShowProps extends ContentShowBaseProps, ContentShowClassProps {
}
export declare const ContentShow: ({ className, children, show, ...props }: ContentShowProps) => React.JSX.Element;
