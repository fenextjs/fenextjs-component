import { _TProps } from "fenextjs-interface";
import React from "react";
import {
    SwichViewList,
    SwichViewListBaseItemProps,
    SwichViewListBaseProps,
    SwichViewListClassProps,
} from "../SwichViewList";
import { SelectBox } from "fenextjs-svg/cjs/SelectBox";
import { SelectList } from "fenextjs-svg/cjs/SelectList";

export type SwichViewSelectType =
    | "fenext-swich-view-select-box"
    | "fenext-swich-view-select-list";

/**
 * Properties for the base SwichViewSelect component.
 */
export interface SwichViewSelectBaseProps
    extends SwichViewListBaseProps<SwichViewSelectType> {}

/**
 * Properties for the class of the SwichViewSelect component.
 */
export interface SwichViewSelectClassProps extends SwichViewListClassProps {}

/**
 * Properties for the SwichViewSelect component.
 */
export interface SwichViewSelectProps
    extends SwichViewSelectBaseProps,
        SwichViewSelectClassProps {}

export const SwichViewSelect = ({
    className = "",
    ...props
}: SwichViewSelectProps) => {
    const ITEMS: SwichViewListBaseItemProps<SwichViewSelectType>[] = [
        {
            id: "fenext-swich-view-select-box",
            icon: <SelectBox />,
        },
        {
            id: "fenext-swich-view-select-list",
            icon: <SelectList />,
        },
    ];
    return (
        <SwichViewList<SwichViewSelectType>
            {...props}
            name="fenext-swich-view-select"
            className={`fenext-swich-view-select ${className}`}
            list={ITEMS}
        />
    );
};
