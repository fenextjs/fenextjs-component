import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
/**
 * Properties for the base DesignBoxBackground component.
 */
export interface DesignBoxBackgroundProps extends DesignBoxUseDataProps {
    textBackground?: string;
}
export declare const DesignBoxBackground: ({ _t, textBackground, data, onChangeData, }: DesignBoxBackgroundProps) => React.JSX.Element;
