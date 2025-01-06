import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";

/**
 * Properties for the ContentScrollLeft component.
 */
export interface ContentScrollLeftProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    className?: string;
    classNameContent?: string;
}

export const ContentScrollLeft = ({
    className = "",
    classNameContent = "",
    children,
    ...props
}: ContentScrollLeftProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`fenext-content-scroll-left ${className}`}
            >
                <div
                    className={`fenext-content-scroll-left-content ${classNameContent}`}>
                    {_t(children)}
                </div>
            </div>
        </>
    );
};
