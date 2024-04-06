import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";

/**
 * Properties for the base Box component.
 */
export interface BoxBaseProps extends PropsWithChildren, _TProps {}

/**
 * Properties for the class of the Box component.
 */
export interface BoxClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Box component.
 */
export interface BoxProps extends BoxBaseProps, BoxClassProps {}

export const Box = ({ className = "", children }: BoxProps) => {
    return (
        <>
            <div className={`fenext-box ${className} `}>{children}</div>
        </>
    );
};
