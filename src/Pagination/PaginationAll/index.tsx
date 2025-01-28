import React, { useMemo } from "react";

import {
    PaginationItemPage,
    PaginationItemPageProps,
} from "../PaginationItemPage";
import {
    PaginationNPage,
    PaginationNPageDefaultOptions,
    PaginationNPageProps,
} from "../PaginationNPage";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    className?: string;
}
/**
 * The base props for the pagination component
 */
export interface PaginationBaseProps
    extends 
        _TProps {
    showItemPage?: boolean;
    showNPage?: boolean;
    disabled?:boolean


    PaginationItemPageProps:PaginationItemPageProps
    PaginationNPageProps?:PaginationNPageProps
}
/**
 * Props for Pagination component
 */
export interface PaginationProps
    extends PaginationClassProps,
        PaginationBaseProps {}

export const Pagination = ({
    className = "",
    PaginationItemPageProps,
    PaginationNPageProps = {},
    showItemPage = true,
    showNPage = true,
    disabled=false,

    ...props
}: PaginationProps) => {
    const { _t } = use_T({ ...props });
    const minPage = useMemo(() => {
        let m = Infinity;
        (PaginationNPageProps?.options ?? PaginationNPageDefaultOptions )?.forEach((e) => {
            const n = parseInt(`${e ?? ""}`);
            if (n && !Number.isNaN(n)) {
                m = Math.min(m, n);
            }
        });
        return m;
    }, [PaginationNPageProps?.options]);

    return (
        <div className={`fenext-pagination ${className}`}>
            <div className={`fenext-pagination-content-item-page ${className}`}>
                {showItemPage && (
                    <PaginationItemPage
                        {...PaginationItemPageProps}
                        _t={_t}
                        disabled={disabled}
                    />
                )}
            </div>
            <div className={`fenext-pagination-content-n-page ${className}`}>
                {showNPage && minPage < (PaginationItemPageProps?.nItems ?? minPage + 1) && (
                    <PaginationNPage
                        {...PaginationNPageProps}
                        {...props}
                        _t={_t}
                        disabled={disabled}
                    />
                )}
            </div>
        </div>
    );
};
