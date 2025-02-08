import React, { ReactNode } from "react";
export interface GridColsProps {
    children?: ReactNode;
    className?: string;
    cols?: string;
    colsMin1920?: string;
    colsMin1680?: string;
    colsMin1440?: string;
    colsMin1024?: string;
    colsMin992?: string;
    colsMin768?: string;
    colsMin575?: string;
}
export declare const GridCols: ({ className, children, colsMin1920, colsMin1680, colsMin1440, colsMin1024, colsMin992, colsMin768, colsMin575, cols, }: GridColsProps) => React.JSX.Element;
