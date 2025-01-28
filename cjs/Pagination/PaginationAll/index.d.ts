import React from "react";
import { PaginationItemPageProps } from "../PaginationItemPage";
import { PaginationNPageProps } from "../PaginationNPage";
import { _TProps } from "fenextjs-interface";
export interface PaginationClassProps {
    className?: string;
}
export interface PaginationBaseProps extends _TProps {
    showItemPage?: boolean;
    showNPage?: boolean;
    disabled?: boolean;
    PaginationItemPageProps: Omit<PaginationItemPageProps, "paginationName">;
    PaginationNPageProps?: Omit<PaginationNPageProps, "paginationName">;
    paginationName?: string;
}
export interface PaginationProps extends PaginationClassProps, PaginationBaseProps {
}
export declare const Pagination: ({ className, PaginationItemPageProps, PaginationNPageProps, showItemPage, showNPage, disabled, paginationName, ...props }: PaginationProps) => React.JSX.Element;
