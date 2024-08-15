import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
/**
 * Properties for the base ChronologicalList component.
 */
export interface ChronologicalListItemsProps {
    date: Date;
    children: ReactNode;
    market?: ReactNode;
    className?: string;
}
/**
 * Properties for the base ChronologicalList component.
 */
export interface ChronologicalListBaseProps extends _TProps {
    /**
     * The list of items for chronological
     */
    items: ChronologicalListItemsProps[];
    /**
     * The market custom for all items
     */
    market?: ReactNode;
    /**
     * Function for parse day, month and year
     */
    parseDateYYYYMMDD?: (date: Date) => string;
    /**
     * Function for parse hours, minutes and seconds
     */
    parseDateHHMMSS?: (date: Date) => string;
}
/**
 * Properties for the class of the ChronologicalList component.
 */
export interface ChronologicalListClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ChronologicalList component.
 */
export interface ChronologicalListProps extends ChronologicalListBaseProps, ChronologicalListClassProps {
}
export declare const ChronologicalList: ({ className, items, market, parseDateHHMMSS: parseDateHHMMSSProps, parseDateYYYYMMDD: parseDateYYYYMMDDProps, ...props }: ChronologicalListProps) => React.JSX.Element;
