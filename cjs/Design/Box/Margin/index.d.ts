import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxMarginProps extends DesignBoxUseDataProps {
    textMargin?: string;
    textMarginTop?: string;
    textMarginLeft?: string;
    textMarginRight?: string;
    textMarginBottom?: string;
}
export declare const DesignBoxMargin: ({ textMargin, textMarginBottom, textMarginLeft, textMarginRight, textMarginTop, data, onChangeData, setDataFunction, ...props }: DesignBoxMarginProps) => React.JSX.Element;
