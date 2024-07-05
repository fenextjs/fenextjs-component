import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";

/**
 * Properties for the base TwoColSticky component.
 */
export interface TwoColStickyBaseProps extends _TProps {
    /**
     * children for the component.
     */
    children?: ReactNode;
    /**
     * colSticky for the component.
     */
    colSticky?: ReactNode;
    /**
     *postion of col for the component.
     */
    posCol?: "left" | "right";
}

/**
 * Properties for the class of the TwoColSticky component.
 */
export interface TwoColStickyClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name children for the component.
     */
    classNameChildren?: string;
    /**
     * The class name colSticky for the component.
     */
    classNameColSticky?: string;
}

/**
 * Properties for the TwoColSticky component.
 */
export interface TwoColStickyProps
    extends TwoColStickyBaseProps,
        TwoColStickyClassProps {}

/**
 * TwoColSticky Component
 *
 * A component that renders two columns: one sticky column and one children column.
 * The sticky column will stay fixed while the children column will be scrollable.
 *
 * @param {TwoColStickyProps} props - The props for the TwoColSticky component.
 * @returns {JSX.Element} - The TwoColSticky JSX Element.
 */
export const TwoColSticky = ({
    className = "",
    classNameChildren = "",
    classNameColSticky = "",
    children,
    colSticky,
    posCol = "left",
    ...props
}: TwoColStickyProps) => {
    const {_t} = use_T({...props})
    return (
        <>
            {/* The wrapper div for the TwoColSticky component */}
            <div
                className={`fenext-two-col-sticky fenext-two-col-sticky-pos-${posCol} ${className} `}
            >
                {/* The sticky column */}
                <div
                    className={`fenext-two-col-sticky-col-sticky ${classNameColSticky} `}
                >
                    {_t(colSticky)}
                </div>
                {/* The scrollable children column */}
                <div
                    className={`fenext-two-col-sticky-children ${classNameChildren} `}
                >
                    {_t(children)}
                </div>
            </div>
        </>
    );
};
