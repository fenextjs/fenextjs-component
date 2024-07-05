import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";

/**
 * Properties for the base ContentShow component.
 */
export interface ContentShowBaseProps extends _TProps {
    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The show for the component.
     */
    show?: boolean;
}

/**
 * Properties for the class of the ContentShow component.
 */
export interface ContentShowClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ContentShow component.
 */
export interface ContentShowProps
    extends ContentShowBaseProps,
        ContentShowClassProps {}

export const ContentShow = ({
    className = "",
    children,
    show = true,
    ...props
}: ContentShowProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`fenext-content-show fenext-content-show-${
                    show ? "show" : "hidden"
                } ${className} `}
            >
                {_t(children)}
            </div>
        </>
    );
};
