import React from "react";
import { CollapseClassProps, CollapseBaseProps } from "../Simple";
export interface CollapseMultipleBaseProps extends Pick<CollapseBaseProps, "name" | "type" | "useActiveForShowChildren"> {
    items?: Omit<CollapseBaseProps, "checkbox" | "name" | "id">[];
    defaultActive?: number | number[];
}
export interface CollapseMultipleClassProps extends CollapseClassProps {
    classNameMultiple?: string;
}
export interface CollapseMultipleProps extends CollapseMultipleBaseProps, CollapseMultipleClassProps {
}
export declare const CollapseMultiple: ({ classNameMultiple, name, items, type, defaultActive, ...props }: CollapseMultipleProps) => React.JSX.Element;
