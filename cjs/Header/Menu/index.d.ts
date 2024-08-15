import React, { ReactNode } from "react";
import { ItemMenuProps } from "../ItemMenu";
import { _TProps } from "fenextjs-interface";
export interface MenuBaseProps extends _TProps {
    items?: ItemMenuProps[];
    iconArrow?: ReactNode;
    typeCollapse?: "radio" | "checkbox";
}
export interface MenuClassProps {
    className?: string;
    defaultShowSubMenu?: boolean;
}
export interface MenuProps extends MenuBaseProps, MenuClassProps {
}
export declare const Menu: ({ className, items, defaultShowSubMenu, iconArrow, typeCollapse, ...props }: MenuProps) => React.JSX.Element;
