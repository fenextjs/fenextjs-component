import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export type TooltipPositionX = "center" | "right" | "left";
export type TooltipPositionY = "center" | "top" | "bottom";
export interface TooltipProps extends _TProps {
    className?: string;
    classNameChildren?: string;
    classNameContent?: string;
    children?: ReactNode;
    tooltip?: ReactNode;
    positionX?: TooltipPositionX;
    positionY?: TooltipPositionY;
}
export declare const Tooltip: ({ className, classNameChildren, classNameContent, children, tooltip, positionX, positionY, ...props }: TooltipProps) => React.JSX.Element;
