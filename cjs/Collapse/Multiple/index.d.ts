import React from "react";
import { CollapseClassProps, CollapseBaseProps } from "../Simple";
/**
 * Properties for the base CollapseMultiple component.
 */
export interface CollapseMultipleBaseProps extends Pick<CollapseBaseProps, "name" | "type" | "useActiveForShowChildren"> {
    /**
     * items of Collapse.
     */
    items?: Omit<CollapseBaseProps, "checkbox" | "name" | "id">[];
    /**
     * defaultActive of Collapse.
     */
    defaultActive?: number | number[];
}
/**
 * Properties for the class of the CollapseMultiple component.
 */
export interface CollapseMultipleClassProps extends CollapseClassProps {
    /**
     * The class name for the component.
     */
    classNameMultiple?: string;
}
/**
 * Properties for the CollapseMultiple component.
 */
export interface CollapseMultipleProps extends CollapseMultipleBaseProps, CollapseMultipleClassProps {
}
export declare const CollapseMultiple: ({ classNameMultiple, name, items, type, defaultActive, ...props }: CollapseMultipleProps) => React.JSX.Element;
