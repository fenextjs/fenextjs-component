import React from "react";
import { SwichViewListBaseProps, SwichViewListClassProps } from "../SwichViewList";
export type SwichViewSelectType = "fenext-swich-view-select-box" | "fenext-swich-view-select-list" | "fenext-swich-view-select-normal";
export interface SwichViewSelectBaseProps extends Omit<SwichViewListBaseProps<SwichViewSelectType>, "list" | "name"> {
}
export interface SwichViewSelectClassProps extends SwichViewListClassProps {
}
export interface SwichViewSelectProps extends SwichViewSelectBaseProps, SwichViewSelectClassProps {
}
export declare const SwichViewSelect: ({ className, defaultValue, ...props }: SwichViewSelectProps) => React.JSX.Element;
