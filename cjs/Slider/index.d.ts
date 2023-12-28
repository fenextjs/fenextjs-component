import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Slider component.
 */
export interface SliderBaseProps extends _TProps {
    /**
     * Items of slider.
     */
    items?: ReactNode[];
    /**
     * N Items of slider in Desktop.
     */
    nItemsDesktop?: number;
    /**
     * N Items of slider in Table.
     */
    nItemsTable?: number;
    /**
     * N Items of slider in Phone.
     */
    nItemsPhone?: number;
    /**
     * Time of Delay by next move Slider.
     */
    timeDelay?: number;
    /**
     * Time of Dration by animation move Slider.
     */
    timeAnimation?: number;
    /**
     * If loop in Slider.
     */
    loop?: boolean;
    /**
     * Separation in Items Slider.
     */
    separationItems?: number;
}
/**
 * Properties for the class of the Slider component.
 */
export interface SliderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Content slider.
     */
    classNameContent?: string;
    /**
     * The class name for the item slider.
     */
    classNameItem?: string;
    /**
     * The class name for the Dogs slider.
     */
    classNameDogs?: string;
    /**
     * The class name for the Dog slider.
     */
    classNameDog?: string;
    /**
     * The class name for the Arrows slider.
     */
    classNameArrows?: string;
    /**
     * The class name for the Arrow Pre slider.
     */
    classNameArrowPre?: string;
    /**
     * The class name for the Arrow Next slider.
     */
    classNameArrowNext?: string;
}
/**
 * Properties for the Slider component.
 */
export interface SliderProps extends SliderBaseProps, SliderClassProps {
}
export declare const Slider: ({ className, classNameContent, classNameItem, classNameDogs, classNameDog, classNameArrows, classNameArrowPre, classNameArrowNext, items, nItemsDesktop, nItemsTable, nItemsPhone, timeDelay, timeAnimation, loop, separationItems, _t, }: SliderProps) => React.JSX.Element;
