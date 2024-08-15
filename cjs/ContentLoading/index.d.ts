import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base ContentLoading component.
 */
export interface ContentLoadingBaseProps extends _TProps {
    /**
     * children for the component.
     */
    children?: ReactNode;
    /**
     * componentLoader for the component.
     * @default <LoaderSpinner/>
     */
    componentLoader?: ReactNode;
    /**
     * loader for the component.
     * @default false
     */
    loader?: boolean;
    /**
     * isPage for the component.
     * @default false
     */
    isPage?: boolean;
}
/**
 * Properties for the class of the ContentLoading component.
 */
export interface ContentLoadingClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ContentLoading component.
 */
export interface ContentLoadingProps extends ContentLoadingBaseProps, ContentLoadingClassProps {
}
export declare const ContentLoading: ({ className, children, componentLoader, loader, isPage, ...props }: ContentLoadingProps) => React.JSX.Element;
