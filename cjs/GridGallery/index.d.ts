import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface GridGalleryProps extends _TProps {
    items: ReactNode[];
    className?: string;
    classNameItem?: string;
}
export declare const GridGallery: ({ className, classNameItem, items, ...props }: GridGalleryProps) => React.JSX.Element;
