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
export declare const DesignBoxBorderRadius: ({ textBorderRadius, textBorderRadiusTopLeft, textBorderRadiusTopRight, textBorderRadiusBottomLeft, textBorderRadiusBottomRight, data, onChangeData, setDataFunction, ...props }: DesignBoxBorderRadiusProps) => React.JSX.Element;
