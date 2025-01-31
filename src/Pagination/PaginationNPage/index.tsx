import React from "react";

import { InputSelectT } from "../../Input/SelectT";
import { InputSelectClassProps } from "../../Input/Select";
import { usePagination } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";

export const PaginationNPageDefaultOptions = [10, 20, 50, 100];

/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationNPageClassProps extends InputSelectClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    className?: string;
}
/**
 * The base props for the pagination component
 */
export interface PaginationNPageBaseProps extends _TProps {
    /**
     * List NPage for select.
     */
    options?: number[];
    /**
     * onChange of nPage.
     */
    onChange?: (npage: number) => void;

    paginationName?: string;

    disabled?: boolean;
}
/**
 * Props for PaginationNPage component
 */
export interface PaginationNPageProps
    extends PaginationNPageClassProps,
    PaginationNPageBaseProps { }

export const PaginationNPage = ({
    className = "",
    options = PaginationNPageDefaultOptions,
    onChange,
    paginationName,
    disabled,
    ...props
}: PaginationNPageProps) => {
    const {
        setData,
        data: { npage = 10 },
    } = usePagination({
        name: paginationName,
        onChage: (e) => {
            onChange?.(e?.npage ?? 10);
        },
    });
    return (
        <InputSelectT<number>
            {...props}
            className={`fenext-pagination-npage ${className}`}
            useItemMaxLengthShowOptions={false}
            options={options}
            onChange={(e) => {
                setData({
                    page: 0,
                    npage: e
                })
            }}
            isSelectChangeText={false}
            value={npage}
            onParse={(e) => {
                return {
                    id: e ?? "",
                    text: `${e}`,
                    data: e,
                };
            }}
            disabled={disabled}
        />
    );
};
