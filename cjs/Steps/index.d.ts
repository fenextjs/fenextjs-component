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
    classNameBtnNext?: string;
    classNameBtnPrev?: string;
    forceShowBtnPrev?: boolean;
    forceShowBtnNext?: boolean;
}
export interface StepsProps extends StepsBaseProps, StepsClassProps {
}
export declare const Steps: ({ className, classNameContentItems, classNameContentSteps, classNameListSteps, classNameItem, classNameItemActive, classNameStep, classNameStepActive, classNameStepCircle, classNameStepLabel, classNameContentBtn, classNameBtn, classNameBtnNext, classNameBtnPrev, defaultStep, step, items, btnNext, btnPrev, disabledBtnNext, disabledBtnPrev, onNext, onPrev, stepPos, showCurrentStepNStep, useArrowKey, useDogs, onSetStep, forceShowBtnPrev, forceShowBtnNext, ...props }: StepsProps) => React.JSX.Element;
