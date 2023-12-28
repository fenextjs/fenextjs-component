import React from "react";
import { InputSelectBaseProps } from "../../Input/Select";
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
export interface PaginationNPageBaseProps extends Omit<InputSelectBaseProps, "options" | "onChange"> {
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
export interface PaginationNPageProps extends PaginationNPageClassProps, PaginationNPageBaseProps {
}
export declare const PaginationNPage: ({ className, listNpage, onChangeNPage, ...props }: PaginationNPageProps) => React.JSX.Element;
