import React from "react";
export interface InputRateBaseProps {
    value?: number;
    defaultValue?: number;
    useValue?: boolean;
}
export interface InputRateClassProps {
    className?: string;
    classNameContentStar?: string;
    classNameStar?: string;
    classNameStarActive?: string;
    classNameNumber?: string;
    onChange?: (star: number) => void;
}
export interface InputRateProps extends InputRateBaseProps, InputRateClassProps {
}
export declare const InputRate: ({ className, classNameContentStar, classNameStar, classNameStarActive, classNameNumber, defaultValue, value, useValue, onChange, }: InputRateProps) => React.JSX.Element;
