import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export interface StepsItemProps {
    label: ReactNode;
    icon?: ReactNode;
    content: ReactNode;
    status?: "none" | "ok" | "error";
}
export interface StepsBaseProps extends _TProps {
    items: StepsItemProps[];
    defaultStep?: number;
    step?: number;
    useArrowKey?: boolean;
    btnPrev?: ReactNode;
    btnNext?: ReactNode;
    disabledBtnPrev?: boolean;
    disabledBtnNext?: boolean;
    onPrev?: (step: number) => Promise<void> | void;
    onNext?: (step: number) => Promise<void> | void;
    onPrevDisabled?: () => void;
    onNextDisabled?: () => void;
    onSetStep?: (step: number) => void;
    stepPos?: "top" | "left" | "right";
    showCurrentStepNStep?: boolean;
    useDogs?: boolean;
}
export interface StepsClassProps {
    className?: string;
    classNameContentSteps?: string;
    classNameListSteps?: string;
    classNameContentItems?: string;
    classNameStep?: string;
    classNameItem?: string;
    classNameStepActive?: string;
    classNameItemActive?: string;
    classNameStepCircle?: string;
    classNameStepLabel?: string;
    classNameContentBtn?: string;
    classNameBtn?: string;
    classNameBtnDisabled?: string;
    classNameBtnNext?: string;
    classNameBtnNextDisabled?: string;
    classNameBtnPrev?: string;
    classNameBtnPrevDisabled?: string;
    forceShowBtnPrev?: boolean;
    forceShowBtnNext?: boolean;
    classNameContentDog?: string;
    classNameDog?: string;
    classNameDogCurrent?: string;
}
export interface StepsProps extends StepsBaseProps, StepsClassProps {
}
export declare const Steps: ({ className, classNameContentItems, classNameContentSteps, classNameListSteps, classNameItem, classNameItemActive, classNameStep, classNameStepActive, classNameStepCircle, classNameStepLabel, classNameContentBtn, classNameBtn, classNameBtnDisabled, classNameBtnNext, classNameBtnNextDisabled, classNameBtnPrev, classNameBtnPrevDisabled, classNameContentDog, classNameDog, classNameDogCurrent, defaultStep, step, items, btnNext, btnPrev, disabledBtnNext, disabledBtnPrev, onNext, onPrev, onNextDisabled, onPrevDisabled, stepPos, showCurrentStepNStep, useArrowKey, useDogs, onSetStep, forceShowBtnPrev, forceShowBtnNext, ...props }: StepsProps) => React.JSX.Element;
