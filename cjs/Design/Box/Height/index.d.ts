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
export declare const DesignBoxHeight: ({ _t, textHeight, textMinHeight, textMaxHeight, defaultValue, value, onChange, }: DesignBoxHeightProps) => React.JSX.Element;
