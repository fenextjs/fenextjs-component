import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { FenextjsValidatorClass } from "fenextjs-validator";
export interface InputNumberCountClassProps extends InputTextClassProps {
}
export interface InputNumberCountBaseProps extends Omit<InputTextBaseProps, "type" | "defaultValue" | "onChange" | "onChangeValidate" | "value" | "validator"> {
    symbolInit?: string;
    symbolFinal?: string;
    defaultValue?: number | "";
    value?: number | "";
    onChange?: (v: number | "") => void;
    min?: number;
    max?: number;
    aplyMin?: boolean;
    aplyMax?: boolean;
    minError?: string;
    maxError?: string;
    validator?: FenextjsValidatorClass<number>;
    optionsParseNumber?: Intl.NumberFormatOptions;
    optionsParseNumberDefault?: Intl.NumberFormatOptions;
}
export interface InputNumberCountProps extends InputNumberCountBaseProps, InputNumberCountClassProps {
}
export declare const InputNumberCount: ({ onChange, value: valueProps, defaultValue, symbolInit, symbolFinal, validator: validatorProps, min, max, minError, maxError, optionsParseNumberDefault, optionsParseNumber, aplyMax, aplyMin, ...props }: InputNumberCountProps) => React.JSX.Element;
