import React, { ReactNode } from "react";
import { useRouter } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
export interface ItemMenuBaseProps extends _TProps {
    url: string;
    text: ReactNode;
    icon?: ReactNode;
    subItems?: Omit<ItemMenuProps, "_t">[];
    defaultActive?: boolean;
    iconArrow?: ReactNode;
    nameNumber?: number;
    typeCollapse?: "radio" | "checkbox";
    isLink?: boolean;
    onClick?: () => void;
    useRouterCustom?: typeof useRouter;
}
export interface ItemMenuClassProps {
    className?: string;
    classNameA?: string;
    classNameText?: string;
    classNameIcon?: string;
}
export interface ItemMenuProps extends ItemMenuBaseProps, ItemMenuClassProps {
}
export declare const ItemMenu: ({ className, classNameA, classNameIcon, classNameText, text, url, icon, subItems, defaultActive, iconArrow, nameNumber, typeCollapse, isLink, onClick, useRouterCustom, ...props }: ItemMenuProps) => React.JSX.Element;
