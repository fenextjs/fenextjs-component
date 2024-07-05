import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export type TooltipPositionX = "center" | "right" | "left";
export type TooltipPositionY = "center" | "top" | "bottom";
/**
 * Properties for the base Tooltip component.
 */
export interface TooltipBaseProps extends _TProps {
    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The children for the component.
     */
    tooltip?: ReactNode;
    /**
     * The position x for the component.
     */
    positionX?: TooltipPositionX;
    /**
     * The position y for the component.
     */
    positionY?: TooltipPositionY;
}
/**
 * Properties for the class of the Tooltip component.
 */
export interface TooltipClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Tooltip component.
 */
export interface TooltipProps extends TooltipBaseProps, TooltipClassProps {
}
export declare const Tooltip: ({ className, children, tooltip, positionX, positionY, ...props }: TooltipProps) => React.JSX.Element;
