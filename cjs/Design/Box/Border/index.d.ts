import React from "react";
import { DesignBoxUseDataProps } from "../boxUnit";
export interface DesignBoxBorderProps extends DesignBoxUseDataProps {
    textBorder?: string;
    textBorderTop?: string;
    textBorderLeft?: string;
    textBorderRight?: string;
    textBorderBottom?: string;
}
export declare const DesignBoxBorder: ({ textBorder, textBorderBottom, textBorderLeft, textBorderRight, textBorderTop, data, setDataFunction, onChangeData, ...props }: DesignBoxBorderProps) => React.JSX.Element;
