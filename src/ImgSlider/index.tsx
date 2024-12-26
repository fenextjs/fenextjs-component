import React, { useMemo, useState } from "react";
import { Img, ImgProps } from "../Img";
import { Steps, StepsClassProps } from "../Steps";
import { SvgPaginationNext } from "fenextjs-svg/cjs/PaginationNext";
import { SvgPaginationPre } from "fenextjs-svg/cjs/PaginationPre";
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
export interface ImgSliderClassProps
    extends Omit<StepsClassProps, "className"> {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameSteps?: string;
}

/**
 * Properties for the ImgSlider component.
 */
export interface ImgSliderProps
    extends ImgSliderBaseProps,
        ImgSliderClassProps {}

export const ImgSlider = ({
    className = "",
    classNameStep = "",
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
                    className={classNameStep}
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
