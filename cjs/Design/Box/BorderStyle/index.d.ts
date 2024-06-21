import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBorderStyle component.
 */
export interface DesignBoxBorderStyleProps extends DesignBoxUseDataProps {
    textBorderStyle?: string;
    textBorderStyleTop?: string;
    textBorderStyleLeft?: string;
    textBorderStyleRight?: string;
    textBorderStyleBottom?: string;
}
export declare const DesignBoxBorderStyle: ({ _t, textBorderStyle, textBorderStyleTop, textBorderStyleLeft, textBorderStyleRight, textBorderStyleBottom, data, setDataFunction, }: DesignBoxBorderStyleProps) => React.JSX.Element;
