import React from "react";
import { SwichViewListBaseProps, SwichViewListClassProps } from "../SwichViewList";
export type SwichViewTableType = "fenext-swich-view-table-box" | "fenext-swich-view-table-list";
/**
 * Properties for the base SwichViewTable component.
 */
export interface SwichViewTableBaseProps extends Omit<SwichViewListBaseProps<SwichViewTableType>, "list" | "name"> {
}
/**
 * Properties for the class of the SwichViewTable component.
 */
export interface SwichViewTableClassProps extends SwichViewListClassProps {
}
/**
 * Properties for the SwichViewTable component.
 */
export interface SwichViewTableProps extends SwichViewTableBaseProps, SwichViewTableClassProps {
}
export declare const SwichViewTable: ({ className, defaultValue, ...props }: SwichViewTableProps) => React.JSX.Element;
