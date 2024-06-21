import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxPadding component.
 */
export interface DesignBoxPaddingProps extends DesignBoxUseDataProps {
    textPadding?: string;
    textPaddingTop?: string;
    textPaddingLeft?: string;
    textPaddingRight?: string;
    textPaddingBottom?: string;
}
export declare const DesignBoxPadding: ({ _t, textPadding, textPaddingBottom, textPaddingLeft, textPaddingRight, textPaddingTop, data, onChangeData, setDataFunction, }: DesignBoxPaddingProps) => React.JSX.Element;
