import React from "react";
import { ItemMenu, ItemMenuProps } from "../ItemMenu";
import { _TProps } from "fenextjs-interface";

/**
 * Properties for the base Menu component.
 */
export interface MenuBaseProps extends _TProps {
    /**
     * The class name for the component.
     */
    items?: ItemMenuProps[];
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
export interface MenuProps extends MenuBaseProps, MenuClassProps {}

export const Menu = ({
    className = "",

    items = [],

    defaultShowSubMenu = false,
    _t,
}: MenuProps) => {
    return (
        <>
            <div className={`fenext-menu ${className}`}>
                {items?.map((item, i) => (
                    <ItemMenu
                        key={i}
                        {...item}
                        defaultActive={item.defaultActive ?? defaultShowSubMenu}
                        _t={_t}
                    />
                ))}
            </div>
        </>
    );
};
