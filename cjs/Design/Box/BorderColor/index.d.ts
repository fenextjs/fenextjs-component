import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBorderColor component.
 */
export interface DesignBoxBorderColorProps extends DesignBoxUseDataProps {
    textBorderColor?: string;
}
export declare const DesignBoxBorderColor: ({ textBorderColor, data, onChangeData, ...props }: DesignBoxBorderColorProps) => React.JSX.Element;
