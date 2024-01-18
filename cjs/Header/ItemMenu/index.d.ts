import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base ItemMenu component.
 */
export interface ItemMenuBaseProps extends _TProps {
    /**
     * Url of page in Menu Item.
     */
    url: string;
    /**
     * Text of page in Menu Item.
     */
    text: ReactNode;
    /**
     * Icon of page in Menu Item.
     */
    icon?: ReactNode;
    /**
     * Sub page in Menu Item.
     */
    subItems?: Omit<ItemMenuProps, "_t">[];
    /**
     * Indicates whether the Collapse is defaultActive for show.
     */
    defaultActive?: boolean;
    /**
     * iconArrow of Collapse.
     * @default ArrowCollapse
     */
    iconArrow?: ReactNode;
    /**
     * nameNumber of Collapse.
     * @default 1
     */
    nameNumber?: number;
    /**
     * type of collapse.
     */
    typeCollapse?: "radio" | "checkbox";
}
/**
 * Properties for the class of the ItemMenu component.
 */
export interface ItemMenuClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name <a> for the component.
     */
    classNameA?: string;
    /**
     * The class name text for the component.
     */
    classNameText?: string;
    /**
     * The class name icon for the component.
     */
    classNameIcon?: string;
}
/**
 * Properties for the ItemMenu component.
 */
export interface ItemMenuProps extends ItemMenuBaseProps, ItemMenuClassProps {
}
export declare const ItemMenu: ({ className, classNameA, classNameIcon, classNameText, text, url, icon, subItems, defaultActive, iconArrow, nameNumber, typeCollapse, _t, }: ItemMenuProps) => React.JSX.Element;
