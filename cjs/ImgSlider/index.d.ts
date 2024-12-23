import React from "react";
import { ImgProps } from "../Img";
import { _TProps } from "fenextjs-interface";
export interface ImgSliderBaseProps extends _TProps {
    imgs: ImgProps[];
    defaultStep?: number;
    step?: number;
    setStep?: (e: number) => void;
}
export interface ImgSliderClassProps {
    className?: string;
}
export interface ImgSliderProps extends ImgSliderBaseProps, ImgSliderClassProps {
}
export declare const ImgSlider: ({ className, imgs, defaultStep, setStep: setStepProps, step: stepProps, ...props }: ImgSliderProps) => React.JSX.Element;
