import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBackground component.
 */
export interface DesignBoxBackgroundProps extends DesignBoxUseDataProps {
    textBackground?: string;
}
export declare const DesignBoxBackground: ({ _t, textBackground, defaultValue, value, onChange, }: DesignBoxBackgroundProps) => React.JSX.Element;
