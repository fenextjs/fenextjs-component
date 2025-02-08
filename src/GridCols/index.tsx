import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, ReactNode } from "react";

/**
 * Properties for the GridCols component.
 */
export interface GridColsProps {

    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    cols?: string;
    colsMin1920?: string;
    colsMin1680?: string;
    colsMin1440?: string;
    colsMin1024?: string;
    colsMin992?: string;
    colsMin768?: string;
    colsMin575?: string;
}

export const GridCols = ({
    className = "",
    children,
    colsMin1920,
    colsMin1680,
    colsMin1440,
    colsMin1024,
    colsMin992,
    colsMin768,
    colsMin575,
    cols = "1fr",
}: GridColsProps) => {
    return (
        <>
            <div
                className={`fenext-grid-cols ${className} `}
                style={
                    {
                        ["--grid-cols-1920"]: colsMin1920,
                        ["--grid-cols-1680"]: colsMin1680,
                        ["--grid-cols-1440"]: colsMin1440,
                        ["--grid-cols-1024"]: colsMin1024,
                        ["--grid-cols-992"]: colsMin992,
                        ["--grid-cols-768"]: colsMin768,
                        ["--grid-cols-575"]: colsMin575,
                        ["--grid-cols"]: cols,
                    } as CSSProperties
                }
            >
                {children}
            </div>
        </>
    );
};
