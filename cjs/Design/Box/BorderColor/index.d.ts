import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBorderColor component.
 */
export interface DesignBoxBorderColorProps extends DesignBoxUseDataProps {
    textBorderColor?: string;
}
export declare const DesignBoxBorderColor: ({ _t, textBorderColor, defaultValue, value, onChange, }: DesignBoxBorderColorProps) => React.JSX.Element;
