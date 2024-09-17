import React from "react";

import { InputSelect, InputSelectBaseProps } from "../../Input/Select";

/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationNPageClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    className?: string;
}
/**
 * The base props for the pagination component
 */
export interface PaginationNPageBaseProps
    extends Omit<InputSelectBaseProps, "options" | "onChange" | "nItems"> {
    /**
     * List NPage for select.
     */
    listNpage?: InputSelectBaseProps["options"];
    /**
     * onChange of nPage.
     */
    onChangeNPage?: InputSelectBaseProps["onChange"];
}
/**
 * Props for PaginationNPage component
 */
export interface PaginationNPageProps
    extends PaginationNPageClassProps,
        PaginationNPageBaseProps {}

export const PaginationNPage = ({
    className = "",
    defaultValue,
    listNpage = [
        {
            id: "10",
            text: "10",
        },
        {
            id: "20",
            text: "20",
        },
        {
            id: "50",
            text: "50",
        },
        {
            id: "100",
            text: "100",
        },
        {
            id: "all",
            text: "All",
        },
    ],
    onChangeNPage,
    ...props
}: PaginationNPageProps) => {
    return (
        <div className={`fenext-pagination-npage ${className}`}>
            <InputSelect
                {...props}
                options={listNpage}
                onChange={onChangeNPage}
                isSelectChangeText={false}
                defaultValue={defaultValue ?? listNpage[0]}
            />
        </div>
    );
};
