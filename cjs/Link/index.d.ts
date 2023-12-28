import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { LinkProps as LinkNextProps } from "next/link";
import { _TProps } from "fenextjs-interface";
export type LinkTypeOnLink = "history" | "router" | "link" | "none";
/**
 * Properties for the base Link component.
 */
export interface LinkBaseProps extends PropsWithChildren, LinkNextProps, Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target">, _TProps {
}
/**
 * Properties for the class of the Link component.
 */
export interface LinkClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Link component.
 */
export interface LinkProps extends LinkBaseProps, LinkClassProps {
}
export declare const Link: ({ className, children, _t, ...props }: LinkProps) => React.JSX.Element;
