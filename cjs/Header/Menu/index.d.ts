import React, { ReactNode } from "react";
import { ItemMenuProps } from "../ItemMenu";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Menu component.
 */
export interface MenuBaseProps extends _TProps {
    /**
     * The class name for the component.
     */
    items?: ItemMenuProps[];
    /**
     * iconArrow of Collapse.
     * @default ArrowCollapse
     */
    iconArrow?: ReactNode;
    /**
     * type of collapse.
     */
    typeCollapse?: "radio" | "checkbox";
}
/**
 * Properties for the class of the Menu component.
 */
export interface MenuClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * defaultShowSubMenu for the component.
     * @default false
     */
    defaultShowSubMenu?: boolean;
}
/**
 * Properties for the Menu component.
 */
export interface MenuProps extends MenuBaseProps, MenuClassProps {
}
export declare const Menu: ({ className, items, defaultShowSubMenu, iconArrow, typeCollapse, _t, }: MenuProps) => React.JSX.Element;
