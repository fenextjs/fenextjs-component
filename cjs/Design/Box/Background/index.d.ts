import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxBackgroundProps extends DesignBoxUseDataProps {
    textBackground?: string;
}
export declare const DesignBoxBackground: ({ textBackground, data, onChangeData, ...props }: DesignBoxBackgroundProps) => React.JSX.Element;
