import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { LinkProps as LinkNextProps } from "next/link";
import { _TProps } from "fenextjs-interface";
export type LinkTypeOnLink = "history" | "router" | "link" | "none";
export interface LinkBaseProps extends PropsWithChildren, LinkNextProps, Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "referrerPolicy" | "rel">, _TProps {
}
export interface LinkClassProps {
    className?: string;
}
export interface LinkProps extends LinkBaseProps, LinkClassProps {
}
export declare const Link: ({ className, children, ...props }: LinkProps) => React.JSX.Element;
