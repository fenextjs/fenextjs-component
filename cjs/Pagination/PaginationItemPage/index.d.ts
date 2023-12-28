import React from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationItemPageClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    classNameContent?: string;
    /**
     * CSS class for the "Go Up" button.
     */
    classNameUp?: string;
    /**
     * CSS class for the previous button.
     */
    classNamePre?: string;
    /**
     * CSS class for the current page number.
     */
    classNameCurrent?: string;
    /**
     * CSS class for the current item page number.
     */
    classNameCurrentItem?: string;
    /**
     * CSS class for the next button.
     */
    classNameNext?: string;
    /**
     * CSS class for the "Go Down" button.
     */
    classNameDown?: string;
    /**
     * Custom icons for each button of the pagination.
     */
    icons?: {
        /**
         * Custom icon for the "Go Up" button.
         */
        up?: any;
        /**
         * Custom icon for the previous button.
         */
        pre?: any;
        /**
         * Custom icon for the next button.
         */
        next?: any;
        /**
         * Custom icon for the "Go Down" button.
         */
        down?: any;
    };
}
/**
 * The base props for the pagination component
 */
export interface PaginationItemPageBaseProps extends _TProps {
    /**
     * The default page to show when the component is mounted
     */
    defaultPage?: number;
    /**
     * The total number of items to paginate
     */
    nItems: number;
    /**
     * The number of items to display per page
     */
    nItemsPage?: number;
    /**
     * Whether the component is disabled
     */
    disabled?: boolean;
    /**
     * Hidden Pagination of nItems if smaller than or equal of nItemsPages.
     * @default false
     */
    hiddenIfNItemsSmallerThanOrEqualNItemsPage?: boolean;
    /**
     * A callback function that is called when the page changes
     * @param page - The new page number
     */
    onChangePage?: (page: number) => void;
}
/**
 * Props for PaginationItemPage component
 */
export interface PaginationItemPageProps extends PaginationItemPageClassProps, PaginationItemPageBaseProps {
}
export declare const PaginationItemPage: ({ classNameContent, classNameUp, classNamePre, classNameCurrent, classNameCurrentItem, classNameNext, classNameDown, icons, defaultPage, nItems, nItemsPage, disabled, onChangePage, hiddenIfNItemsSmallerThanOrEqualNItemsPage, }: PaginationItemPageProps) => React.JSX.Element;
