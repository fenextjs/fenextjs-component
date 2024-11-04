import { _TProps } from "fenextjs-interface";
import React from "react";
export interface GridGalleryProps extends _TProps {
    items: React.ReactNode[];
    className?: string;
    classNameItem?: string;
}
export declare const GridGallery: ({ className, classNameItem, items, ...props }: GridGalleryProps) => React.JSX.Element;
