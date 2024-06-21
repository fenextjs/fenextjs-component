import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBorderRadius component.
 */
export interface DesignBoxBorderRadiusProps extends DesignBoxUseDataProps {
    textBorderRadius?: string;
    textBorderRadiusTopLeft?: string;
    textBorderRadiusTopRight?: string;
    textBorderRadiusBottomLeft?: string;
    textBorderRadiusBottomRight?: string;
}
export declare const DesignBoxBorderRadius: ({ _t, textBorderRadius, textBorderRadiusTopLeft, textBorderRadiusTopRight, textBorderRadiusBottomLeft, textBorderRadiusBottomRight, data, onChangeData, setDataFunction, }: DesignBoxBorderRadiusProps) => React.JSX.Element;
