import { _TProps } from "fenextjs-interface";
import React from "react";
export interface GridGalleryBaseProps extends _TProps {
    items: React.ReactNode[];
}
export interface GridGalleryClassProps {
    className?: string;
    classNameItem?: string;
}
export interface GridGalleryProps extends GridGalleryBaseProps, GridGalleryClassProps {
}
export declare const GridGallery: ({ className, classNameItem, items, ...props }: GridGalleryProps) => React.JSX.Element;
