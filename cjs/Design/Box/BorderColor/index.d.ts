import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxBorderColorProps extends DesignBoxUseDataProps {
    textBorderColor?: string;
}
export declare const DesignBoxBorderColor: ({ textBorderColor, data, onChangeData, ...props }: DesignBoxBorderColorProps) => React.JSX.Element;
