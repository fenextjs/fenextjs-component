import React from "react";
import { SwichViewListBaseProps, SwichViewListClassProps } from "../SwichViewList";
export type SwichViewSelectType = "fenext-swich-view-select-box" | "fenext-swich-view-select-list" | "fenext-swich-view-select-normal";
/**
 * Properties for the base SwichViewSelect component.
 */
export interface SwichViewSelectBaseProps extends Omit<SwichViewListBaseProps<SwichViewSelectType>, "list" | "name"> {
}
/**
 * Properties for the class of the SwichViewSelect component.
 */
export interface SwichViewSelectClassProps extends SwichViewListClassProps {
}
/**
 * Properties for the SwichViewSelect component.
 */
export interface SwichViewSelectProps extends SwichViewSelectBaseProps, SwichViewSelectClassProps {
}
export declare const SwichViewSelect: ({ className, defaultValue, ...props }: SwichViewSelectProps) => React.JSX.Element;
