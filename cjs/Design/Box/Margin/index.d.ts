import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxMargin component.
 */
export interface DesignBoxMarginProps extends DesignBoxUseDataProps {
    textMargin?: string;
    textMarginTop?: string;
    textMarginLeft?: string;
    textMarginRight?: string;
    textMarginBottom?: string;
}
export declare const DesignBoxMargin: ({ _t, textMargin, textMarginBottom, textMarginLeft, textMarginRight, textMarginTop, data, onChangeData, setDataFunction, }: DesignBoxMarginProps) => React.JSX.Element;
