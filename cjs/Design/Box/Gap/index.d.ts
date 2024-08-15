import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxGapProps extends DesignBoxUseDataProps {
    textGap?: string;
    textGapRow?: string;
    textGapColumn?: string;
}
export declare const DesignBoxGap: ({ textGap, textGapRow, textGapColumn, data, onChangeData, setDataFunction, ...props }: DesignBoxGapProps) => React.JSX.Element;
