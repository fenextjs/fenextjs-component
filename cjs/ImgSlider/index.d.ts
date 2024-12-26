import React from "react";
import { ImgProps } from "../Img";
import { StepsClassProps } from "../Steps";
import { _TProps } from "fenextjs-interface";
export interface ImgSliderBaseProps extends _TProps {
    imgs: ImgProps[];
    defaultStep?: number;
    step?: number;
    setStep?: (e: number) => void;
}
export interface ImgSliderClassProps extends Omit<StepsClassProps, "className"> {
    className?: string;
    classNameSteps?: string;
}
export interface ImgSliderProps extends ImgSliderBaseProps, ImgSliderClassProps {
}
export declare const ImgSlider: ({ className, classNameStep, imgs, defaultStep, setStep: setStepProps, step: stepProps, ...props }: ImgSliderProps) => React.JSX.Element;
