import React from "react";
import { SwichViewListBaseProps, SwichViewListClassProps } from "../SwichViewList";
export type SwichViewTableType = "fenext-swich-view-table-box" | "fenext-swich-view-table-list";
export interface SwichViewTableBaseProps extends Omit<SwichViewListBaseProps<SwichViewTableType>, "list" | "name"> {
}
export interface SwichViewTableClassProps extends SwichViewListClassProps {
}
export interface SwichViewTableProps extends SwichViewTableBaseProps, SwichViewTableClassProps {
}
export declare const SwichViewTable: ({ className, defaultValue, ...props }: SwichViewTableProps) => React.JSX.Element;
