import React from "react";
import { InputSelectMultipleClassProps, InputSelectMultipleBaseProps } from "../SelectMultiple";
export interface InputSelectButtonsGroupClassProps extends Pick<InputSelectMultipleClassProps, "classNameLabel" | "classNameError"> {
    classNameSelectButtonsGroup?: string;
    classNameSelectButtonsGroupList?: string;
}
export interface InputSelectButtonsGroupBaseProps<T = any> extends Pick<InputSelectMultipleBaseProps<T>, "onChange" | "onChangeData" | "value" | "defaultValue" | "options" | "validator" | "validatorData" | "CustomOptionsSelected" | "useTOption" | "label" | "optional" | "optionalText" | "required" | "disabled" | "requiredText" | "_t" | "useT"> {
    isMultiple?: boolean;
}
export interface InputSelectButtonsGroupProps<T = any> extends InputSelectButtonsGroupBaseProps<T>, InputSelectButtonsGroupClassProps {
}
export declare const InputSelectButtonsGroup: <T = any>({ classNameSelectButtonsGroup, classNameSelectButtonsGroupList, onChange, onChangeData, value, defaultValue, options, CustomOptionsSelected, validatorData, validator, useTOption, classNameLabel, classNameError, label, disabled, optional, optionalText, required, requiredText, isMultiple, _t: _tProps, useT, }: InputSelectButtonsGroupProps<T>) => React.JSX.Element;
