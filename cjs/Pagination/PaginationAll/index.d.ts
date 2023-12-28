import React from "react";
import { PaginationItemPageBaseProps, PaginationItemPageClassProps } from "../PaginationItemPage";
import { PaginationNPageBaseProps, PaginationNPageClassProps } from "../PaginationNPage";
import { _TProps } from "fenextjs-interface";
/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    className?: string;
    /**
     * Object with className of component classNameNPage.
     */
    classNameItemPage?: PaginationItemPageClassProps;
    /**
     * Object with className of component PaginationNPage.
     */
    classNameNPage?: PaginationNPageClassProps;
}
/**
 * The base props for the pagination component
 */
export interface PaginationBaseProps extends PaginationItemPageBaseProps, PaginationNPageBaseProps, _TProps {
    showItemPage?: boolean;
    showNPage?: boolean;
}
/**
 * Props for Pagination component
 */
export interface PaginationProps extends PaginationClassProps, PaginationBaseProps {
}
export declare const Pagination: ({ className, classNameItemPage, classNameNPage, showItemPage, showNPage, listNpage, _t, ...props }: PaginationProps) => React.JSX.Element;
