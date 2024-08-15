import React, { ReactNode } from "react";
import { InputSelectBaseProps, InputSelectClassProps } from "../Select";
import { InputSelectItemOptionBaseProps } from "../Select";
import { InputSelectOption } from "../SelectOption";
import { FenextjsValidatorClass } from "fenextjs-validator";
export interface InputSelectMultipleClassProps extends InputSelectClassProps {
    classNameSelectMultiple?: string;
    classNameSelectMultipleList?: string;
}
export interface InputSelectMultipleBaseProps<T = any> extends Omit<InputSelectBaseProps<T>, "defaultValue" | "value" | "onChange" | "onChangeData" | "onChangeValidate" | "validatorData"> {
    defaultValue?: InputSelectItemOptionBaseProps<T>[];
    value?: InputSelectItemOptionBaseProps<T>[];
    onChange?: (v?: InputSelectItemOptionBaseProps<T>[]) => void;
    onChangeData?: (v?: T[]) => void;
    onChangeValidate?: (e: InputSelectItemOptionBaseProps<T>[]) => Promise<any> | any;
    iconDelete?: ReactNode;
    typeSelectMultipleStyle?: "normal" | "checkbox";
    CustomOptionsSelected?: typeof InputSelectOption<T>;
    validatorData?: FenextjsValidatorClass<T[]>;
}
export interface InputSelectMultipleProps<T = any> extends InputSelectMultipleBaseProps<T>, InputSelectMultipleClassProps {
}
export declare const InputSelectMultiple: <T = any>({ classNameSelectMultiple, classNameSelectMultipleList, onChange, onChangeData, value, defaultValue, onChangeValidate, options, iconDelete, typeSelectMultipleStyle, CustomOptionsSelected, validatorData, useTOption, ...props }: InputSelectMultipleProps<T>) => React.JSX.Element;
