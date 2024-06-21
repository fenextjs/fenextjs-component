import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxWidth component.
 */
export interface DesignBoxWidthProps extends DesignBoxUseDataProps {
    textWidth?: string;
    textMinWidth?: string;
    textMaxWidth?: string;
}
export declare const DesignBoxWidth: ({ _t, textWidth, textMinWidth, textMaxWidth, defaultValue, value, onChange, }: DesignBoxWidthProps) => React.JSX.Element;
