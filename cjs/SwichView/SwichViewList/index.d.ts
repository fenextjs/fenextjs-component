import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
/**
 * Properties for the base SwichViewList component.
 */
export interface SwichViewListBaseItemProps<T> {
    id: T;
    icon: ReactNode;
}
/**
 * Properties for the base SwichViewList component.
 */
export interface SwichViewListBaseProps<T> extends _TProps {
    name?: string;
    /**
     * The class name for the component.
     */
    list?: SwichViewListBaseItemProps<T>[];
    /**
     * The class name for the component.
     */
    defaultValue?: T;
    /**
     * The class name for the component.
     */
    onChange?: (e?: T) => void;
}
/**
 * Properties for the class of the SwichViewList component.
 */
export interface SwichViewListClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the SwichViewList component.
 */
export interface SwichViewListProps<T> extends SwichViewListBaseProps<T>, SwichViewListClassProps {
}
export declare const SwichViewList: <T>({ className, defaultValue, onChange, list, name, }: SwichViewListProps<T>) => React.JSX.Element;
