import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { CountryProps } from "fenextjs-interface";
import { FenextjsValidatorClass } from "fenextjs-validator";
export interface InputPhoneClassProps {
    classNameSelectCode?: InputSelectClassProps;
    classNameInputNumber?: InputTextClassProps;
    classNamePhone?: string;
    classNamePhoneLabel?: string;
    classNamePhoneCode?: string;
    classNamePhoneNumber?: string;
    classNameError?: string;
}
export interface InputPhoneBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue" | "datalist" | "validator"> {
    disabledSelectCode?: boolean;
    placeholderCode?: string;
    validator?: FenextjsValidatorClass<PhoneProps>;
    parseCountrys?: (data: CountryProps[]) => CountryProps[];
    defaultValue?: Partial<PhoneProps>;
    value?: Partial<PhoneProps>;
    onChange?: (data: Partial<PhoneProps>) => void;
}
export interface InputPhoneProps extends InputPhoneBaseProps, InputPhoneClassProps {
}
export declare const InputPhone: ({ classNameInputNumber, classNameSelectCode, classNamePhone, classNamePhoneCode, classNamePhoneLabel, classNamePhoneNumber, classNameError, disabledSelectCode, disabled, label, loader, placeholderCode, placeholder, validator, optional, optionalText, required, requiredText, defaultValue, value, onChange: onChangeProps, parseCountrys, ...props }: InputPhoneProps) => React.JSX.Element;
