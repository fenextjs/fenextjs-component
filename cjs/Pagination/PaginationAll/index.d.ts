import React from "react";
import { PaginationItemPageBaseProps, PaginationItemPageClassProps } from "../PaginationItemPage";
import { PaginationNPageBaseProps, PaginationNPageClassProps } from "../PaginationNPage";
import { _TProps } from "fenextjs-interface";
export interface PaginationClassProps {
    className?: string;
    classNameItemPage?: PaginationItemPageClassProps;
    classNameNPage?: PaginationNPageClassProps;
}
export interface PaginationBaseProps extends PaginationItemPageBaseProps, PaginationNPageBaseProps, _TProps {
    showItemPage?: boolean;
    showNPage?: boolean;
}
export interface PaginationProps extends PaginationClassProps, PaginationBaseProps {
}
export declare const Pagination: ({ className, classNameItemPage, classNameNPage, showItemPage, showNPage, listNpage, ...props }: PaginationProps) => React.JSX.Element;
