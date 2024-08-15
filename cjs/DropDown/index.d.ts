import React from "react";
import { CollapseBaseProps, CollapseClassProps } from "../Collapse";
export interface DropDownBaseProps extends CollapseBaseProps {
}
export interface DropDownClassProps extends CollapseClassProps {
    classNameDropDown?: string;
}
export interface DropDownProps extends DropDownBaseProps, DropDownClassProps {
}
export declare const DropDown: ({ classNameDropDown, show, ...props }: DropDownProps) => React.JSX.Element;
