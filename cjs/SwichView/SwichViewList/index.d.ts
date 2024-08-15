import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface SwichViewListBaseItemProps<T> {
    id: T;
    icon: ReactNode;
}
export interface SwichViewListBaseProps<T> extends _TProps {
    name?: string;
    list?: SwichViewListBaseItemProps<T>[];
    defaultValue?: T;
    onChange?: (e?: T) => void;
}
export interface SwichViewListClassProps {
    className?: string;
}
export interface SwichViewListProps<T> extends SwichViewListBaseProps<T>, SwichViewListClassProps {
}
export declare const SwichViewList: <T>({ className, defaultValue, onChange, list, name, }: SwichViewListProps<T>) => React.JSX.Element;
