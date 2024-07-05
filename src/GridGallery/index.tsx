import { use_T } from "fenextjs-hook";
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
export interface GridGalleryProps
    extends GridGalleryBaseProps,
        GridGalleryClassProps {}

export const GridGallery = ({
    className = "",
    classNameItem = "",
    items,
    ...props
}: GridGalleryProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div className={`fenext-grid-gallery ${className} `}>
                {items.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={`fenext-grid-gallery-item ${classNameItem} `}
                        >
                            {_t(item)}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
