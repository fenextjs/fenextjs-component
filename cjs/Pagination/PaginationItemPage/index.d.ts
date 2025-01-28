import React, { ReactNode } from "react";
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
        up?: ReactNode;
        pre?: ReactNode;
        next?: ReactNode;
        down?: ReactNode;
    };
}
export interface PaginationItemPageBaseProps extends _TProps {
    paginationName?: string;
    nItems: number;
    disabled?: boolean;
    hiddenIfNItemsSmallerThanOrEqualNItemsPage?: boolean;
    onChange?: (page: number) => void;
}
export interface PaginationItemPageProps extends PaginationItemPageClassProps, PaginationItemPageBaseProps {
}
export declare const PaginationItemPage: ({ classNameContent, classNameUp, classNamePre, classNameCurrent, classNameCurrentItem, classNameNext, classNameDown, paginationName, icons, nItems, disabled, onChange, hiddenIfNItemsSmallerThanOrEqualNItemsPage, }: PaginationItemPageProps) => React.JSX.Element;
