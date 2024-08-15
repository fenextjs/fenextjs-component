import React from "react";
export interface InputColorProps {
    className?: string;
    defaultValue?: string;
    value?: string;
    onChange?: (data: string) => void;
    disabled?: boolean;
}
export declare const InputColor: ({ className, defaultValue, value, onChange, disabled, }: InputColorProps) => React.JSX.Element;
