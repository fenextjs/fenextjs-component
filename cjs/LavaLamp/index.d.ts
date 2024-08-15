import React, { CSSProperties } from "react";
export interface LavaLampGetNumberRandomProps {
    /**
     * The min number for generator number random.
     */
    min: number;
    /**
     * The max number for generator number random.
     */
    max: number;
}
/**
 * Properties for the base LavaLamp component.
 */
export interface LavaLampRangeStylesProps {
    top?: LavaLampGetNumberRandomProps;
    left?: LavaLampGetNumberRandomProps;
    scale?: LavaLampGetNumberRandomProps;
    moveX?: LavaLampGetNumberRandomProps;
    moveY?: LavaLampGetNumberRandomProps;
    time?: LavaLampGetNumberRandomProps;
}
export type LavaLampStylesElement = Pick<CSSProperties, "borderRadius" | "aspectRatio" | "width" | "background" | "animationTimingFunction">;
/**
 * Properties for the base LavaLamp component.
 */
export interface LavaLampBaseProps {
    /**
     * The number items elements.
     */
    nItems?: number;
    /**
     * The styles of elements.
     */
    styles?: CSSProperties;
    /**
     * The styles of elements.
     */
    ranges?: LavaLampRangeStylesProps;
    /**
     * The styles of elemens.
     */
    stylesElement?: LavaLampStylesElement[];
}
/**
 * Properties for the class of the LavaLamp component.
 */
export interface LavaLampClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the LavaLamp component.
 */
export interface LavaLampProps extends LavaLampBaseProps, LavaLampClassProps {
}
export declare const LavaLamp: ({ className, nItems, styles, stylesElement, ranges, }: LavaLampProps) => React.JSX.Element;
