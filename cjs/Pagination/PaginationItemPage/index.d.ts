import React from "react";
import { _TProps } from "fenextjs-interface";
export interface PaginationItemPageClassProps {
    classNameContent?: string;
    classNameUp?: string;
    classNamePre?: string;
    classNameCurrent?: string;
    classNameCurrentItem?: string;
    classNameNext?: string;
    classNameDown?: string;
    icons?: {
        up?: any;
        pre?: any;
        next?: any;
        down?: any;
    };
}
export interface PaginationItemPageBaseProps extends _TProps {
    defaultPage?: number;
    nItems: number;
    nItemsPage?: number;
    disabled?: boolean;
    hiddenIfNItemsSmallerThanOrEqualNItemsPage?: boolean;
    onChangePage?: (page: number) => void;
}
export interface PaginationItemPageProps extends PaginationItemPageClassProps, PaginationItemPageBaseProps {
}
export declare const PaginationItemPage: ({ classNameContent, classNameUp, classNamePre, classNameCurrent, classNameCurrentItem, classNameNext, classNameDown, icons, defaultPage, nItems, nItemsPage, disabled, onChangePage, hiddenIfNItemsSmallerThanOrEqualNItemsPage, }: PaginationItemPageProps) => React.JSX.Element;
