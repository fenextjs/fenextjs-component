import React from "react";
import {
    SwichViewList,
    SwichViewListBaseItemProps,
    SwichViewListBaseProps,
    SwichViewListClassProps,
} from "../SwichViewList";
import { SvgViewSelectBox } from "fenextjs-svg/cjs/View/SelectBox";
import { SvgViewSelectList } from "fenextjs-svg/cjs/View/SelectList";
import { SvgViewSelectNormal } from "fenextjs-svg/cjs/View/SelectNormal";

export type SwichViewSelectType =
    | "fenext-swich-view-select-box"
    | "fenext-swich-view-select-list"
    | "fenext-swich-view-select-normal";

/**
 * Properties for the base SwichViewSelect component.
 */
export interface SwichViewSelectBaseProps
    extends Omit<
        SwichViewListBaseProps<SwichViewSelectType>,
        "list" | "name"
    > {}

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
    defaultValue = "fenext-swich-view-select-normal",
    ...props
}: SwichViewSelectProps) => {
    const ITEMS: SwichViewListBaseItemProps<SwichViewSelectType>[] = [
        {
            id: "fenext-swich-view-select-box",
            icon: <SvgViewSelectBox />,
        },
        {
            id: "fenext-swich-view-select-list",
            icon: <SvgViewSelectList />,
        },
        {
            id: "fenext-swich-view-select-normal",
            icon: <SvgViewSelectNormal />,
        },
    ];
    return (
        <SwichViewList<SwichViewSelectType>
            {...props}
            name="fenext-swich-view-select"
            className={`fenext-swich-view-select ${className}`}
            list={ITEMS}
            defaultValue={defaultValue}
        />
    );
};
