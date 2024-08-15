import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxAlign component.
 */
export interface DesignBoxAlignProps extends DesignBoxUseDataProps {
    textAlignItems?: string;
    textJustifyContent?: string;
}
export declare const DesignBoxAlign: ({ textAlignItems, textJustifyContent, data, onChangeData, ...props }: DesignBoxAlignProps) => React.JSX.Element;
