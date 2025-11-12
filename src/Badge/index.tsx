import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type BadgeType =
    | "pendding"
    | "loader"
    | "completed"
    | "error"
    | "processed";

/**
 * Properties for the Badge component.
 */
export interface BadgeProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    children: ReactNode;

    type: BadgeType;
}

export const Badge = ({
    className = "",
    children,
    type,
    ...props
}: BadgeProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`
                    fenext-badge 
                    fenext-badge-${type}
                    ${className}
                `}
                data-type={type}
            >
                <div className={`fenext-badge-content`}>{_t(children)}</div>
            </div>
        </>
    );
};
