import React, { ReactNode } from "react";
import { PaginationProps } from "../Pagination";
import { TableActionCheckboxProps } from "../TableActionCheckbox";
import { _TProps } from "fenextjs-interface";
/**
 * Represents the properties that can be passed to a table component to specify CSS class names.
 */
export interface TableClassProps {
    /**
     * A CSS class name for the overall content container of the table.
     */
    classNameContent?: string;
    /**
     * A CSS class name for the table element within the content container.
     */
    classNameContentTable?: string;
    /**
     * A CSS class name for the table element itself.
     */
    classNameTable?: string;
    /**
     * A CSS class name for the table header element.
     */
    classNameTHead?: string;
    /**
     * A CSS class name for the table body element.
     */
    classNameTBody?: string;
    /**
     * A CSS class name for the table row header element.
     */
    classNameThr?: string;
    /**
     * A CSS class name for the table row element.
     */
    classNameTr?: string;
    /**
     * A CSS class name for the table cell header element.
     */
    classNameTh?: string;
    /**
     * A CSS class name for the table cell element.
     */
    classNameTd?: string;
    /**
     * A CSS class name for the content container of the pagination component.
     */
    classNameContentPagination?: string;
    /**
     * A CSS class name for the loader element.
     */
    classNameLoader?: string;
}
/**
 * A type that represents the header of a table component.
 *
 * @template T The type of data that the table contains.
 */
export type TableHeader<T> = {
    /**
     * The property key in the data object that corresponds to this header column.
     */
    id: keyof T;
    /**
     * The label to display in the header column.
     */
    th: React.ReactNode;
    /**
     * A function that can be used to transform the data before displaying it in the table cell.
     * This function takes in the data object for the row and returns the transformed value.
     *
     * @param data The data object for the row.
     * @returns The transformed value to display in the table cell.
     */
    parse?: (data: T) => any;
    /**
     * The columnOptions for table.
     */
    columnOptions?: {
        orderBy?: boolean;
        showHidden?: boolean;
    };
    /**
     * The label to display in the header column.
     */
    defaultShowHidden?: "show" | "hidden";
    /**
     * The column width : 100% in new tr;
     */
    colNewTr?: boolean;
    /**
     * The className of de column;
     */
    className?: string;
}[];
/**
 * Represents the base properties that can be passed to a table component.
 *
 * @template T The type of data that the table contains.
 */
export interface TableBaseProps<T> extends _TProps {
    /**
     * Name the table.
     */
    name: string;
    /**
     * An array of data objects to display in the table.
     */
    items: T[];
    /**
     * The header configuration for the table.
     */
    header: TableHeader<T>;
    /**
     * Optional pagination properties for the table.
     */
    pagination?: PaginationProps;
    /**
     * Whether to display a loader while the table data is being loaded.
     */
    loader?: boolean;
    /**
     * typeLoader for show loader.
     * @default "line"
     */
    typeLoader?: "spinner" | "line";
    /**
     * If use checkbox in table.
     */
    useCheckbox?: boolean;
    /**
     * If on checked items.
     */
    onChecked?: (items: T[]) => void;
    /**
     * onOrderBy table.
     */
    onOrderBy?: (order: {
        id: keyof T;
        order: "ASC" | "DESC";
    }) => void;
    /**
     * onShowHidden table.
     */
    onShowHidden?: (showHidden: {
        id: keyof T;
        showHidden: "SHOW" | "HIDDEN";
    }) => void;
    /**
     * notResult the table.
     */
    notResult?: ReactNode;
    /**
     * If use checkbox in table.
     */
    showPagination?: boolean;
    actionsCheckbox?: Omit<TableActionCheckboxProps<T>, "actionAllCheckbox" | "data">;
    actionsCheckboxSelectAll?: ReactNode;
}
/**
 * Represents the properties that can be passed to a table component.
 *
 * @template T The type of data that the table contains.
 */
export interface TableProps<T> extends TableClassProps, TableBaseProps<T> {
}
export declare const Table: <T>({ classNameContent, classNameContentTable, classNameTable, classNameTHead, classNameTBody, classNameThr, classNameTr, classNameTh, classNameTd, classNameContentPagination, classNameLoader, name, items, header, pagination, showPagination, loader, typeLoader, useCheckbox, onOrderBy, onShowHidden, onChecked, notResult, actionsCheckbox, actionsCheckboxSelectAll, ...props }: TableProps<T>) => React.JSX.Element;
