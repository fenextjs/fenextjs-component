import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type LinkTypeOnLink = "history" | "router" | "link" | "none";

/**
 * Properties for the base Link component.
 */
export interface LinkBaseProps
    extends PropsWithChildren,
        Partial<AnchorHTMLAttributes<HTMLAnchorElement>>,
        _TProps {}

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
export interface LinkProps extends LinkBaseProps, LinkClassProps {}

export const Link = ({
    className = "",

    children = "",

    ...props
}: LinkProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <a {...props} className={`fenext-link ${className}`}>
                <>{_t(children)}</>
            </a>
        </>
    );
};
