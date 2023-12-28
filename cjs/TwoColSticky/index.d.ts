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
export interface TwoColStickyProps extends TwoColStickyBaseProps, TwoColStickyClassProps {
}
/**
 * TwoColSticky Component
 *
 * A component that renders two columns: one sticky column and one children column.
 * The sticky column will stay fixed while the children column will be scrollable.
 *
 * @param {TwoColStickyProps} props - The props for the TwoColSticky component.
 * @returns {JSX.Element} - The TwoColSticky JSX Element.
 */
export declare const TwoColSticky: ({ className, classNameChildren, classNameColSticky, children, colSticky, posCol, _t, }: TwoColStickyProps) => React.JSX.Element;
