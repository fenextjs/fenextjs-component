import React from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Steps component.
 */
export interface StepsBaseProps extends _TProps {
    /**
     * Items steps.
     */
    items: {
        /**
         * Item label.
         */
        label: React.ReactNode;
        /**
         * Item icon.
         */
        icon?: React.ReactNode;
        /**
         * Item content.
         */
        content: React.ReactNode;
        /**
         * status Item.
         */
        status?: "none" | "ok" | "error";
    }[];
    /**
     * defaultStep show.
     * @default 0
     */
    defaultStep?: number;
    /**
     * Step show.
     * @default undefined
     */
    step?: number;
    /**
     * useArrowKey.
     * @default true
     */
    useArrowKey?: boolean;
    /**
     * useStep step show.
     * @default false
     */
    useStep?: boolean;
    /**
     * Content of Button previous.
     * @default "Previous"
     */
    btnPrev?: React.ReactNode;
    /**
     * Content of Button next.
     * @default "Next"
     */
    btnNext?: React.ReactNode;
    /**
     * If Disabled Button previous.
     * @default false
     */
    disabledBtnPrev?: boolean;
    /**
     * If Disabled Button next.
     * @default false
     */
    disabledBtnNext?: boolean;
    /**
     * onClick in btn Prev.
     */
    onPrev?: (step: number) => Promise<void> | void;
    /**
     * onClick in btn Next.
     */
    onNext?: (step: number) => Promise<void> | void;
    /**
     * onSetStep.
     */
    onSetStep?: (step: number) => void;
    /**
     * Position of list Step.
     * @default left
     */
    stepPos?: "top" | "left" | "right";
    /**
     * showCurrentStepNStep of list Step.
     * @default false
     */
    showCurrentStepNStep?: boolean;
    /**
     * useDogs of list Step.
     * @default false
     */
    useDogs?: boolean;
}
/**
 * Properties for the class of the Steps component.
 */
export interface StepsClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the content steps.
     */
    classNameContentSteps?: string;
    /**
     * The class name for the content steps.
     */
    classNameListSteps?: string;
    /**
     * The class name for the contents items.
     */
    classNameContentItems?: string;
    /**
     * The class name for the step.
     */
    classNameStep?: string;
    /**
     * The class name for the item.
     */
    classNameItem?: string;
    /**
     * The class name for the step acitve.
     */
    classNameStepActive?: string;
    /**
     * The class name for the item acitve.
     */
    classNameItemActive?: string;
    /**
     * The class name for the step circle.
     */
    classNameStepCircle?: string;
    /**
     * The class name for the step label.
     */
    classNameStepLabel?: string;
    /**
     * The class name for the content btn next and prev.
     */
    classNameContentBtn?: string;
    /**
     * The class name for the btn next and prev.
     */
    classNameBtn?: string;
    /**
     * The class name for the btn next.
     */
    classNameBtnNext?: string;
    /**
     * The class name for the btn prev.
     */
    classNameBtnPrev?: string;
}
/**
 * Properties for the Steps component.
 */
export interface StepsProps extends StepsBaseProps, StepsClassProps {
}
export declare const Steps: ({ className, classNameContentItems, classNameContentSteps, classNameListSteps, classNameItem, classNameItemActive, classNameStep, classNameStepActive, classNameStepCircle, classNameStepLabel, classNameContentBtn, classNameBtn, classNameBtnNext, classNameBtnPrev, defaultStep, step, useStep, items, btnNext, btnPrev, disabledBtnNext, disabledBtnPrev, onNext, onPrev, stepPos, showCurrentStepNStep, useArrowKey, useDogs, onSetStep, ...props }: StepsProps) => React.JSX.Element;
