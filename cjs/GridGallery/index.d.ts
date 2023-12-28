import { _TProps } from "fenextjs-interface";
import React from "react";
/**
 * Properties for the base GridGallery component.
 */
export interface GridGalleryBaseProps extends _TProps {
    /**
     * The items for the component.
     */
    items: React.ReactNode[];
}
/**
 * Properties for the class of the GridGallery component.
 */
export interface GridGalleryClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for item the component.
     */
    classNameItem?: string;
}
/**
 * Properties for the GridGallery component.
 */
export interface GridGalleryProps extends GridGalleryBaseProps, GridGalleryClassProps {
}
export declare const GridGallery: ({ className, classNameItem, items, _t, }: GridGalleryProps) => React.JSX.Element;
