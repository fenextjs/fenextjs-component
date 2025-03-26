import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
export type LinkTypeOnLink = "history" | "router" | "link" | "none";
export interface LinkBaseProps extends PropsWithChildren, Partial<AnchorHTMLAttributes<HTMLAnchorElement>>, _TProps {
}
export interface LinkClassProps {
    className?: string;
}
export interface LinkProps extends LinkBaseProps, LinkClassProps {
}
export declare const Link: ({ className, children, ...props }: LinkProps) => React.JSX.Element;
