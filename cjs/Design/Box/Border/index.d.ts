import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBorder component.
 */
export interface DesignBoxBorderProps extends DesignBoxUseDataProps {
    textBorder?: string;
    textBorderTop?: string;
    textBorderLeft?: string;
    textBorderRight?: string;
    textBorderBottom?: string;
}
export declare const DesignBoxBorder: ({ _t, textBorder, textBorderBottom, textBorderLeft, textBorderRight, textBorderTop, defaultValue, value, onChange, }: DesignBoxBorderProps) => React.JSX.Element;
