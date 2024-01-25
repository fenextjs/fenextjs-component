import React from "react";
import {
    SwichViewList,
    SwichViewListBaseItemProps,
    SwichViewListBaseProps,
    SwichViewListClassProps,
} from "../SwichViewList";
import { TableBox } from "fenextjs-svg/cjs/View/TableBox";
import { TableList } from "fenextjs-svg/cjs/View/TableList";

export type SwichViewTableType =
    | "fenext-swich-view-table-box"
    | "fenext-swich-view-table-list";

/**
 * Properties for the base SwichViewTable component.
 */
export interface SwichViewTableBaseProps
    extends Omit<SwichViewListBaseProps<SwichViewTableType>,'list'|'name'> {}

/**
 * Properties for the class of the SwichViewTable component.
 */
export interface SwichViewTableClassProps extends SwichViewListClassProps {}

/**
 * Properties for the SwichViewTable component.
 */
export interface SwichViewTableProps
    extends SwichViewTableBaseProps,
        SwichViewTableClassProps {}

export const SwichViewTable = ({
    className = "",
    defaultValue = 'fenext-swich-view-table-list',
    ...props
}: SwichViewTableProps) => {
    const ITEMS: SwichViewListBaseItemProps<SwichViewTableType>[] = [
        {
            id: "fenext-swich-view-table-box",
            icon: <TableBox />,
        },
        {
            id: "fenext-swich-view-table-list",
            icon: <TableList />,
        },
    ];
    return (
        <SwichViewList<SwichViewTableType>
            {...props}
            name="fenext-swich-view-table"
            className={`fenext-swich-view-table ${className}`}
            list={ITEMS}
            defaultValue={defaultValue}
        />
    );
};
