import React from "react";
import { ImgProps } from "../Img";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base ImgSlider component.
 */
export interface ImgSliderBaseProps extends _TProps {
    /**
     * List of Img.
     */
    imgs: ImgProps[];
    /**
     * step of Img.
     */
    step?: number;
    /**
     * step of Img.
     */
    setStep?: (e: number) => void;
}
/**
 * Properties for the class of the ImgSlider component.
 */
export interface ImgSliderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ImgSlider component.
 */
export interface ImgSliderProps extends ImgSliderBaseProps, ImgSliderClassProps {
}
export declare const ImgSlider: ({ className, imgs, setStep: setStepProps, step: stepProps, ...props }: ImgSliderProps) => React.JSX.Element;
