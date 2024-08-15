import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export interface ContentLoadingBaseProps extends _TProps {
    children?: ReactNode;
    componentLoader?: ReactNode;
    loader?: boolean;
    isPage?: boolean;
}
export interface ContentLoadingClassProps {
    className?: string;
}
export interface ContentLoadingProps extends ContentLoadingBaseProps, ContentLoadingClassProps {
}
export declare const ContentLoading: ({ className, children, componentLoader, loader, isPage, ...props }: ContentLoadingProps) => React.JSX.Element;
