import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxAlign component.
 */
export interface DesignBoxAlignProps extends DesignBoxUseDataProps {
    textAlignItems?: string;
    textJustifyContent?: string;
}
export declare const DesignBoxAlign: ({ _t, textAlignItems, textJustifyContent, defaultValue, value, onChange, }: DesignBoxAlignProps) => React.JSX.Element;
