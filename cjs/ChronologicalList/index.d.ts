import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface ChronologicalListItemsProps {
    date: Date;
    children: ReactNode;
    market?: ReactNode;
    className?: string;
}
export interface ChronologicalListBaseProps extends _TProps {
    items: ChronologicalListItemsProps[];
    market?: ReactNode;
    parseDateYYYYMMDD?: (date: Date) => ReactNode;
    parseDateHHMMSS?: (date: Date) => ReactNode;
}
export interface ChronologicalListClassProps {
    className?: string;
}
export interface ChronologicalListProps extends ChronologicalListBaseProps, ChronologicalListClassProps {
}
export declare const ChronologicalList: ({ className, items, market, parseDateHHMMSS: parseDateHHMMSSProps, parseDateYYYYMMDD: parseDateYYYYMMDDProps, ...props }: ChronologicalListProps) => React.JSX.Element;
