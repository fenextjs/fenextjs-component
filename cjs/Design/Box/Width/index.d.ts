import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxWidthProps extends DesignBoxUseDataProps {
    textWidth?: string;
    textMinWidth?: string;
    textMaxWidth?: string;
}
export declare const DesignBoxWidth: ({ textWidth, textMinWidth, textMaxWidth, data, onChangeData, ...props }: DesignBoxWidthProps) => React.JSX.Element;
