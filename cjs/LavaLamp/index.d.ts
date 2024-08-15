import React, { CSSProperties } from "react";
export interface LavaLampGetNumberRandomProps {
    min: number;
    max: number;
}
export interface LavaLampRangeStylesProps {
    top?: LavaLampGetNumberRandomProps;
    left?: LavaLampGetNumberRandomProps;
    scale?: LavaLampGetNumberRandomProps;
    moveX?: LavaLampGetNumberRandomProps;
    moveY?: LavaLampGetNumberRandomProps;
    time?: LavaLampGetNumberRandomProps;
}
export type LavaLampStylesElement = Pick<CSSProperties, "borderRadius" | "aspectRatio" | "width" | "background" | "animationTimingFunction">;
export interface LavaLampBaseProps {
    nItems?: number;
    styles?: CSSProperties;
    ranges?: LavaLampRangeStylesProps;
    stylesElement?: LavaLampStylesElement[];
}
export interface LavaLampClassProps {
    className?: string;
}
export interface LavaLampProps extends LavaLampBaseProps, LavaLampClassProps {
}
export declare const LavaLamp: ({ className, nItems, styles, stylesElement, ranges, }: LavaLampProps) => React.JSX.Element;
