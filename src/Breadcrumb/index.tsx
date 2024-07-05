import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import Link from "next/link";
import React, { ReactNode } from "react";

/**
 * Properties for the base Breadcrumb Link component.
 */
export interface BreadcrumbLinkProps {
    /**
     * Url of the redirect.
     */
    href: string;
    /**
     * Content of the Link.
     */
    children: ReactNode;
    /**
     * onClick of the Link.
     */
    onClick?: () => void;
}
/**
 * Properties for the base Breadcrumb component.
 */
export interface BreadcrumbBaseProps extends _TProps {
    /**
     * List of the Links for Breadcrymb.
     */
    links: BreadcrumbLinkProps[];
}

/**
 * Properties for the class of the Breadcrumb component.
 */
export interface BreadcrumbClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Items.
     */
    classNameItem?: string;
    /**
     * The class name for the Link.
     */
    classNameLink?: string;
}

/**
 * Properties for the Breadcrumb component.
 */
export interface BreadcrumbProps
    extends BreadcrumbBaseProps,
        BreadcrumbClassProps {}

export const Breadcrumb = ({
    className = "",
    classNameItem = "",
    classNameLink = "",
    links,
    ...props
}: BreadcrumbProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <ul className={`fenext-breadcrumb ${className} `}>
                {links.map((link, i) => {
                    return (
                        <>
                            <li
                                key={i}
                                className={`fenext-breadcrumb-item ${classNameItem}`}
                            >
                                <Link href={link.href} legacyBehavior>
                                    <a
                                        className={`fenext-breadcrumb-item-link ${classNameLink}`}
                                        onClick={link?.onClick}
                                    >
                                        {_t(link.children)}
                                    </a>
                                </Link>
                            </li>
                        </>
                    );
                })}
            </ul>
        </>
    );
};
