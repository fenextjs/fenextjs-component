import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface BreadcrumbLinkProps extends _TProps {
    href: string;
    children: ReactNode;
    onClick?: () => void;
}
export interface BreadcrumbBaseProps extends _TProps {
    links: BreadcrumbLinkProps[];
}
export interface BreadcrumbClassProps {
    className?: string;
    classNameItem?: string;
    classNameLink?: string;
}
export interface BreadcrumbProps extends BreadcrumbBaseProps, BreadcrumbClassProps {
}
export declare const Breadcrumb: ({ className, classNameItem, classNameLink, links, ...props }: BreadcrumbProps) => React.JSX.Element;
