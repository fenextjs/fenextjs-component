import React from "react";
import { CollapseBaseProps, CollapseClassProps } from "../Collapse";
/**
 * Properties for the base DropDown component.
 */
export interface DropDownBaseProps extends CollapseBaseProps {
}
/**
 * Properties for the class of the DropDown component.
 */
export interface DropDownClassProps extends CollapseClassProps {
    /**
     * The class name for the component.
     */
    classNameDropDown?: string;
}
/**
 * Properties for the DropDown component.
 */
export interface DropDownProps extends DropDownBaseProps, DropDownClassProps {
}
export declare const DropDown: ({ classNameDropDown, show, ...props }: DropDownProps) => React.JSX.Element;
