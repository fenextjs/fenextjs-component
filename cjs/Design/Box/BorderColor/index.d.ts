import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBorderColor component.
 */
export interface DesignBoxBorderColorProps extends DesignBoxUseDataProps {
    textBorderColor?: string;
}
export declare const DesignBoxBorderColor: ({ _t, textBorderColor, data, onChangeData, }: DesignBoxBorderColorProps) => React.JSX.Element;
