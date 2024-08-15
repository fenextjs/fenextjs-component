import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxPaddingProps extends DesignBoxUseDataProps {
    textPadding?: string;
    textPaddingTop?: string;
    textPaddingLeft?: string;
    textPaddingRight?: string;
    textPaddingBottom?: string;
}
export declare const DesignBoxPadding: ({ textPadding, textPaddingBottom, textPaddingLeft, textPaddingRight, textPaddingTop, data, onChangeData, setDataFunction, ...props }: DesignBoxPaddingProps) => React.JSX.Element;
