import React from "react";
import {
    SwichViewList,
    SwichViewListBaseItemProps,
    SwichViewListBaseProps,
    SwichViewListClassProps,
} from "../SwichViewList";
import { SvgSelectBox } from "fenextjs-svg/cjs/View/SelectBox";
import { SvgSelectList } from "fenextjs-svg/cjs/View/SelectList";
import { SvgSelectNormal } from "fenextjs-svg/cjs/View/SelectNormal";

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
            icon: <SvgSelectBox />,
        },
        {
            id: "fenext-swich-view-select-list",
            icon: <SvgSelectList />,
        },
        {
            id: "fenext-swich-view-select-normal",
            icon: <SvgSelectNormal />,
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
