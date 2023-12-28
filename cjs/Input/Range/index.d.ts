import React from "react";
/**
 * Properties for the config InputRange component.
 */
export interface InputRangeConfigProps {
    min: number;
    max: number;
    value: number;
    center: number;
}
/**
 * Properties for the base InputRange component.
 */
export interface InputRangeBaseProps {
    /**
     * The value of the input.
     * @default 0
     */
    value?: number;
    /**
     * The valueMin of the input.
     * @default -100
     */
    valueMin?: number;
    /**
     * The valueMax of the input.
     * @default 100
     */
    valueMax?: number;
    /**
     * use value props in the input.
     * @default false
     */
    useValue?: boolean;
    /**
     * The default value of the input.
     * @default 0
     */
    defaultValue?: number;
    /**
     * The default value of the input.
     * @default -100
     */
    defaultValueMin?: number;
    /**
     * The default value of the input.
     * @default 100
     */
    defaultValueMax?: number;
    /**
     * The callback function that is triggered when the value of the input changes.
     */
    onChange?: (v: number) => void;
    /**
     * use range min value and max.
     * @default false
     */
    useRange?: boolean;
    /**
     * The callback function that is triggered when the value range of the input changes.
     */
    onChangeRange?: (v: [number, number]) => void;
    /**
     * The minimum value allowed for the input.
     * @default -100
     */
    min?: number;
    /**
     * The maximum value allowed for the input.
     * @default 100
     */
    max?: number;
    /**
     * The step value allowed for the input.
     * @default 1
     */
    step?: number;
    /**
     * The position show Number.
     * @default "top"
     */
    showNumber?: "top" | "bottom" | "none";
}
/**
 * Properties for the class of the InputRange component.
 */
export interface InputRangeClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component content range.
     */
    classNameContentRange?: string;
    /**
     * The class name for the component min.
     */
    classNameMin?: string;
    /**
     * The class name for the component max.
     */
    classNameMax?: string;
    /**
     * The class name for the component current.
     */
    classNameCurrent?: string;
    /**
     * The class name for the component content value.
     */
    classNameContentValue?: string;
    /**
     * The class name for the component value.
     */
    classNameValue?: string;
    /**
     * The class name for the component value min.
     */
    classNameValueMin?: string;
    /**
     * The class name for the component value max.
     */
    classNameValueMax?: string;
    /**
     * The class name for the component content Circle.
     */
    classNameContentCircle?: string;
    /**
     * The class name for the component Circle.
     */
    classNameCircle?: string;
    /**
     * The class name for the component Line.
     */
    classNameLine?: string;
}
/**
 * Properties for the InputRange component.
 */
export interface InputRangeProps extends InputRangeBaseProps, InputRangeClassProps {
}
export declare const InputRange: ({ className, classNameContentValue, classNameValue, classNameValueMax, classNameValueMin, classNameContentRange, classNameCurrent, classNameMax, classNameMin, classNameContentCircle, classNameCircle, classNameLine, min, max, defaultValue, defaultValueMin, defaultValueMax, useValue, value, valueMin, valueMax, onChange, onChangeRange, useRange, step, showNumber, }: InputRangeProps) => React.JSX.Element;
