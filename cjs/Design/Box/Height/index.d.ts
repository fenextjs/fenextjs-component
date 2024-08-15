import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxHeight component.
 */
export interface DesignBoxHeightProps extends DesignBoxUseDataProps {
    textHeight?: string;
    textMinHeight?: string;
    textMaxHeight?: string;
}
export declare const DesignBoxHeight: ({ textHeight, textMinHeight, textMaxHeight, data, onChangeData, ...props }: DesignBoxHeightProps) => React.JSX.Element;
