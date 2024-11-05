import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";

/**
 * Properties for the GridGallery component.
 */
export interface GridGalleryProps extends _TProps {
    /**
     * The items for the component.
     */
    items: ReactNode[];
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for item the component.
     */
    classNameItem?: string;
}

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
