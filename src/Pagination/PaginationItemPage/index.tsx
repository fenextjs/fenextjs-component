import React, { useMemo, useState } from "react";

import {
    PaginationUp,
    PaginationPre,
    PaginationNext,
    PaginationDown,
} from "fenextjs-svg/cjs/Pagination";
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
export interface PaginationItemPageProps
    extends PaginationItemPageClassProps,
        PaginationItemPageBaseProps {}

export const PaginationItemPage = ({
    classNameContent = "",
    classNameUp = "",
    classNamePre = "",
    classNameCurrent = "",
    classNameCurrentItem = "",
    classNameNext = "",
    classNameDown = "",

    icons = {
        up: <PaginationUp />,
        pre: <PaginationPre />,
        next: <PaginationNext />,
        down: <PaginationDown />,
    },

    defaultPage = 0,

    nItems,
    nItemsPage = 10,

    disabled = false,
    onChangePage,
    hiddenIfNItemsSmallerThanOrEqualNItemsPage = true,
}: PaginationItemPageProps) => {
    const [page, setPage_] = useState(defaultPage);

    const maxPage = useMemo(
        () => Math.ceil(nItems / nItemsPage) - 1,
        [nItems, nItemsPage],
    );

    const minMaxValue = (v: number) => {
        return Math.max(0, Math.min(maxPage, v));
    };
    const setPage = (v: number) => {
        if (disabled) {
            return;
        }
        const Value = minMaxValue(v);
        setPage_(Value);
        onChangePage?.(Value);
    };
    const onSetPage = (e: number) => () => setPage(e);

    const addPage = (add: number) => () => {
        setPage(page + add);
    };

    return (
        <div
            className={`fenext-pagination-item-page ${
                hiddenIfNItemsSmallerThanOrEqualNItemsPage &&
                nItems <= nItemsPage
                    ? "fenext-pagination-item-page-hidden"
                    : ""
            } ${classNameContent} `}
        >
            {page > 0 && (
                <>
                    <div
                        key={`fenext-pagination-item-page-up`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-up ${classNameUp}`}
                        onClick={onSetPage(0)}
                    >
                        {icons.up}
                    </div>
                    <div
                        key={`fenext-pagination-item-page-pre`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-pre ${classNamePre}`}
                        onClick={addPage(-1)}
                    >
                        {icons.pre}
                    </div>
                </>
            )}
            <div
                className={`fenext-pagination-item-page-current ${classNameCurrent}`}
            >
                {page > 2 ? (
                    <>
                        <div
                            key={`fenext-pagination-item-page-current-item-init`}
                            className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-init ${classNameCurrentItem}`}
                            onClick={onSetPage(0)}
                        >
                            {1}
                        </div>
                        <div
                            key={`fenext-pagination-item-page-current-item-init-dog`}
                            className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ${classNameCurrentItem}`}
                        >
                            ...
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {new Array(5).fill(1).map((e, i) => {
                    const n = e * i - 2 + page;
                    if (n < 0 || n > maxPage) {
                        return <></>;
                    }
                    return (
                        <>
                            <div
                                key={`fenext-pagination-item-page-current-item-${i}`}
                                className={`fenext-pagination-item-page-current-item ${
                                    n == page
                                        ? "fenext-pagination-item-page-current-item-active"
                                        : ""
                                } ${classNameCurrentItem}`}
                                onClick={onSetPage(n)}
                            >
                                {n + 1}
                            </div>
                        </>
                    );
                })}
                {page < maxPage - 2 ? (
                    <>
                        <div
                            key={`fenext-pagination-item-page-current-item-final-dog`}
                            className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ${classNameCurrentItem}`}
                        >
                            ...
                        </div>
                        <div
                            key={`fenext-pagination-item-page-current-item-final`}
                            className={`fenext-pagination-item-page-current-item  fenext-pagination-item-page-current-item-final ${classNameCurrentItem}`}
                            onClick={onSetPage(maxPage)}
                        >
                            {maxPage + 1}
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            {page < maxPage && (
                <>
                    <div
                        key={`fenext-pagination-item-page-next`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-next ${classNameNext}`}
                        onClick={addPage(1)}
                    >
                        {icons.next}
                    </div>
                    <div
                        key={`fenext-pagination-item-page-down`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-down ${classNameDown}`}
                        onClick={onSetPage(maxPage)}
                    >
                        {icons.down}
                    </div>
                </>
            )}
        </div>
    );
};
