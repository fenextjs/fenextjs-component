import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export type TooltipPositionX = "center" | "right" | "left";
export type TooltipPositionY = "center" | "top" | "bottom";
export interface TooltipBaseProps extends _TProps {
    children?: ReactNode;
    tooltip?: ReactNode;
    positionX?: TooltipPositionX;
    positionY?: TooltipPositionY;
}
export interface TooltipClassProps {
    className?: string;
}
export interface TooltipProps extends TooltipBaseProps, TooltipClassProps {
}
export declare const Tooltip: ({ className, children, tooltip, positionX, positionY, ...props }: TooltipProps) => React.JSX.Element;
