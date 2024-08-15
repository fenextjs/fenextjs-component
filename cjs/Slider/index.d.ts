import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export interface SliderBaseProps extends _TProps {
    items?: ReactNode[];
    nItemsDesktop?: number;
    nItemsTable?: number;
    nItemsPhone?: number;
    timeDelay?: number;
    timeAnimation?: number;
    loop?: boolean;
    separationItems?: number;
}
export interface SliderClassProps {
    className?: string;
    classNameContent?: string;
    classNameItem?: string;
    classNameDogs?: string;
    classNameDog?: string;
    classNameArrows?: string;
    classNameArrowPre?: string;
    classNameArrowNext?: string;
}
export interface SliderProps extends SliderBaseProps, SliderClassProps {
}
export declare const Slider: ({ className, classNameContent, classNameItem, classNameDogs, classNameDog, classNameArrows, classNameArrowPre, classNameArrowNext, items, nItemsDesktop, nItemsTable, nItemsPhone, timeDelay, timeAnimation, loop, separationItems, ...props }: SliderProps) => React.JSX.Element;
