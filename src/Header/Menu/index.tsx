import React, { ReactNode } from "react";
import { ItemMenu, ItemMenuProps } from "../ItemMenu";
import { _TProps } from "fenextjs-interface";
import { SvgArrow } from "fenextjs-svg/cjs/Arrow";
import { useRouter } from "fenextjs-hook";

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
    useRouterCustom?: typeof useRouter;
}

/**
 * Properties for the Menu component.
 */
export interface MenuProps extends MenuBaseProps, MenuClassProps {}

export const Menu = ({
    className = "",

    items = [],

    defaultShowSubMenu = false,
    iconArrow = <SvgArrow />,
    typeCollapse,
    useRouterCustom = useRouter,
    ...props
}: MenuProps) => {
    return (
        <>
            <div className={`fenext-menu ${className}`}>
                {items?.map((item, i) => (
                    <ItemMenu
                        key={i}
                        {...props}
                        {...item}
                        defaultActive={item.defaultActive ?? defaultShowSubMenu}
                        iconArrow={item?.iconArrow ?? iconArrow}
                        typeCollapse={item?.typeCollapse ?? typeCollapse}
                        useRouterCustom={useRouterCustom}
                    />
                ))}
            </div>
        </>
    );
};
