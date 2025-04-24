import React from "react";
import { InputSelectMultipleTProps } from "../SelectMultipleT";
export interface InputSelectButtonsGroupClassProps extends Pick<InputSelectMultipleTProps<any>, "classNameLabel" | "classNameError"> {
    classNameSelectButtonsGroup?: string;
    classNameSelectButtonsGroupList?: string;
}
export interface InputSelectButtonsGroupBaseProps<T = any> extends Pick<InputSelectMultipleTProps<T>, "onParse" | "onChange" | "value" | "defaultValue" | "options" | "validator" | "CustomOptionsSelected" | "useTOption" | "label" | "optional" | "optionalText" | "required" | "disabled" | "requiredText" | "_t" | "useT"> {
    isMultiple?: boolean;
}
export interface InputSelectButtonsGroupProps<T = any> extends InputSelectButtonsGroupBaseProps<T>, InputSelectButtonsGroupClassProps {
}
export declare const InputSelectButtonsGroup: <T = any>({ classNameSelectButtonsGroup, classNameSelectButtonsGroupList, onChange, value, defaultValue, options, CustomOptionsSelected, validator, useTOption, classNameLabel, classNameError, label, disabled, optional, optionalText, required, requiredText, isMultiple, _t: _tProps, useT, onParse, }: InputSelectButtonsGroupProps<T>) => React.JSX.Element;
