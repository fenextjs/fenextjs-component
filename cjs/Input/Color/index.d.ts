import React from "react";
/**
 * Interface that defines base properties for a swich input swich.
 */
export interface InputColorProps {
    className?: string;
    defaultValue?: string;
    value?: string;
    onChange?: (data: string) => void;
    disabled?: boolean;
}
/**
 * Component that renders a swich input.
 * Takes an InputColorProps object as props.
 */
export declare const InputColor: ({ className, defaultValue, value, onChange, disabled, }: InputColorProps) => React.JSX.Element;
