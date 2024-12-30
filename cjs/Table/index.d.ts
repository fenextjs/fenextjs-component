import React, { ReactNode } from "react";
import { PaginationProps } from "../Pagination";
import { TableActionCheckboxProps } from "../TableActionCheckbox";
import { _TProps } from "fenextjs-interface";
export interface TableClassProps {
    classNameContent?: string;
    classNameContentTable?: string;
    classNameTable?: string;
    classNameTHead?: string;
    classNameTBody?: string;
    classNameThr?: string;
    classNameTr?: string;
    classNameTh?: string;
    classNameTd?: string;
    classNameContentPagination?: string;
    classNameLoader?: string;
}
export type TableHeader<T> = {
    id: keyof T;
    th: ReactNode;
    thText?: string;
    parse?: (data: T) => any;
    columnOptions?: {
        orderBy?: boolean;
    };
    defaultShowHidden?: "show" | "hidden";
    colNewTr?: boolean;
    className?: string;
}[];
export interface TableBaseProps<T> extends _TProps {
    name: string;
    items: T[];
    header: TableHeader<T>;
    pagination?: PaginationProps;
    loader?: boolean;
    typeLoader?: "spinner" | "line";
    useCheckbox?: boolean;
    onChecked?: (items: T[]) => void;
    onOrderBy?: (order: {
        id: keyof T;
        order: "ASC" | "DESC";
    }) => void;
    notResult?: ReactNode;
    showPagination?: boolean;
    actionsCheckbox?: Omit<TableActionCheckboxProps<T>, "actionAllCheckbox" | "data">;
    actionsCheckboxSelectAll?: ReactNode;
}
export interface TableProps<T> extends TableClassProps, TableBaseProps<T> {
}
export declare const Table: <T>({ classNameContent, classNameContentTable, classNameTable, classNameTHead, classNameTBody, classNameThr, classNameTr, classNameTh, classNameTd, classNameContentPagination, classNameLoader, name, items, header, pagination, showPagination, loader, typeLoader, useCheckbox, onOrderBy, onChecked, notResult, actionsCheckbox, actionsCheckboxSelectAll, ...props }: TableProps<T>) => React.JSX.Element;
