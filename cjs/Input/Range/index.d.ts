import React from "react";
export interface InputRangeConfigProps {
    min: number;
    max: number;
    value: number;
    center: number;
}
export interface InputRangeBaseProps {
    value?: number;
    valueMin?: number;
    valueMax?: number;
    useValue?: boolean;
    defaultValue?: number;
    defaultValueMin?: number;
    defaultValueMax?: number;
    onChange?: (v: number) => void;
    useRange?: boolean;
    onChangeRange?: (v: [number, number]) => void;
    min?: number;
    max?: number;
    step?: number;
    showNumber?: "top" | "bottom" | "none";
}
export interface InputRangeClassProps {
    className?: string;
    classNameContentRange?: string;
    classNameMin?: string;
    classNameMax?: string;
    classNameCurrent?: string;
    classNameContentValue?: string;
    classNameValue?: string;
    classNameValueMin?: string;
    classNameValueMax?: string;
    classNameContentCircle?: string;
    classNameCircle?: string;
    classNameLine?: string;
}
export interface InputRangeProps extends InputRangeBaseProps, InputRangeClassProps {
}
export declare const InputRange: ({ className, classNameContentValue, classNameValue, classNameValueMax, classNameValueMin, classNameContentRange, classNameCurrent, classNameMax, classNameMin, classNameContentCircle, classNameCircle, classNameLine, min, max, defaultValue, defaultValueMin, defaultValueMax, useValue, value, valueMin, valueMax, onChange, onChangeRange, useRange, step, showNumber, }: InputRangeProps) => React.JSX.Element;
