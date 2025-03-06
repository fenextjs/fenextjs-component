import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, ReactNode } from "react";

/**
 * Properties for the Cols component.
 */
export interface ColsProps extends _TProps {
    /**
     * The nCols for the component.
     */
    nCols?: number | string;
    /**
     * The breakInside for the component.
     */
    breakInside?: boolean;

    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The class name for the component.
     */
    className?: string;
}

export const Cols = ({
    className = "",
    children,
    nCols = 2,
    breakInside = true,
    ...props
}: ColsProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`fenext-cols fenext-cols-${
                    breakInside ? "break-inside" : ""
                } ${className} `}
                style={
                    {
                        ["--fenext-cols-columns"]: nCols,
                    } as CSSProperties
                }
            >
                {_t(children)}
            </div>
        </>
    );
};
