import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxBorderStyleProps extends DesignBoxUseDataProps {
    textBorderStyle?: string;
    textBorderStyleTop?: string;
    textBorderStyleLeft?: string;
    textBorderStyleRight?: string;
    textBorderStyleBottom?: string;
}
export declare const DesignBoxBorderStyle: ({ textBorderStyle, textBorderStyleTop, textBorderStyleLeft, textBorderStyleRight, textBorderStyleBottom, data, setDataFunction, ...props }: DesignBoxBorderStyleProps) => React.JSX.Element;
