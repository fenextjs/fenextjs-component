import React from "react";
/**
 * Properties for the base LoaderLine component.
 */
export interface LoaderLineBaseProps {
    /**
     * Height of Line.
     */
    height?: number;
}

/**
 * Properties for the class of the LoaderLine component.
 */
export interface LoaderLineClassProps {
    /**
     * The class name for the component.
     */
    classNameLoaderLine?: string;
}

/**
 * Properties for the LoaderLine component.
 */
export interface LoaderLineProps
    extends LoaderLineBaseProps,
        LoaderLineClassProps {}

export const LoaderLine = ({
    classNameLoaderLine = "",
    height = 20,
}: LoaderLineProps) => {
    return (
        <>
            <div
                className={`fenext-loader-line ${classNameLoaderLine}`}
                style={
                    {
                        ["--height"]: `${height / 16}rem`,
                    } as React.CSSProperties
                }
            />
        </>
    );
};
