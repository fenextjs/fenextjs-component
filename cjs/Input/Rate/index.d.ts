import React from "react";
/**
 * Properties for the base InputRate component.
 */
export interface InputRateBaseProps {
    /**
     * Value of component.
     * @default undefined.
     * @min 0
     * @max 5
     */
    value?: number;
    /**
     * Default Value of component.
     * @default 0.
     * @min 0
     * @max 5
     */
    defaultValue?: number;
    /**
     * if use Value of component.
     * @default false.
     */
    useValue?: boolean;
}
/**
 * Properties for the class of the InputRate component.
 */
export interface InputRateClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the content Star.
     */
    classNameContentStar?: string;
    /**
     * The class name for the Star.
     */
    classNameStar?: string;
    /**
     * The class name for the Star active.
     */
    classNameStarActive?: string;
    /**
     * The class name for the Star number.
     */
    classNameNumber?: string;
    /**
     * onChange value.
     */
    onChange?: (star: number) => void;
}
/**
 * Properties for the InputRate component.
 */
export interface InputRateProps extends InputRateBaseProps, InputRateClassProps {
}
export declare const InputRate: ({ className, classNameContentStar, classNameStar, classNameStarActive, classNameNumber, defaultValue, value, useValue, onChange, }: InputRateProps) => React.JSX.Element;
