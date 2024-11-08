import React, { useMemo, useState } from "react";
import { Img, ImgProps } from "../Img";
import { Steps } from "../Steps";
import {
    SvgPaginationNext,
    SvgPaginationPre,
} from "fenextjs-svg/cjs/Pagination";
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
     * defaultStep of Img.
     */
    defaultStep?: number;
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
export interface ImgSliderProps
    extends ImgSliderBaseProps,
        ImgSliderClassProps {}

export const ImgSlider = ({
    className = "",
    imgs,

    defaultStep = 0,
    setStep: setStepProps,
    step: stepProps,

    ...props
}: ImgSliderProps) => {
    const [step__, setStep__] = useState(defaultStep);

    const setStep = (e: number) => {
        setStep__(e);
        setStepProps?.(e);
    };

    const step = useMemo(() => stepProps ?? step__, [stepProps, step__]);
    return (
        <>
            <div className={`fenext-img-slider ${className} `}>
                <Steps
                    items={imgs.map((e, i) => {
                        return {
                            label: e.name ?? "",
                            content: <Img key={i} {...e} />,
                        };
                    })}
                    stepPos="top"
                    step={step}
                    onSetStep={setStep}
                    btnNext={
                        <>
                            <SvgPaginationNext />
                        </>
                    }
                    btnPrev={
                        <>
                            <SvgPaginationPre />
                        </>
                    }
                    useDogs={true}
                    {...props}
                />
            </div>
        </>
    );
};
