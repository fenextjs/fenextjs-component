import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, ReactNode } from "react";

/**
 * Properties for the base Cols component.
 */
export interface ColsBaseProps extends _TProps {
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
}

/**
 * Properties for the class of the Cols component.
 */
export interface ColsClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Cols component.
 */
export interface ColsProps extends ColsBaseProps, ColsClassProps {}

export const Cols = ({
    className = "",
    children,
    nCols = 2,
    breakInside = true,
    ...props
}: ColsProps) => {
    const {_t} = use_T({...props})
    return (
        <>
            <div
                className={`fenext-cols fenext-cols-${
                    breakInside ? "break-inside" : ""
                } ${className} `}
                style={
                    {
                        ["--nCols"]: nCols,
                    } as CSSProperties
                }
            >
                {_t(children)}
            </div>
        </>
    );
};
