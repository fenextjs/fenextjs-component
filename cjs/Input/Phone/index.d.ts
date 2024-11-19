import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { useJsonStringProps } from "fenextjs-hook/cjs/useJsonString";
export interface InputPhoneClassProps {
    classNameSelectCode?: InputSelectClassProps;
    classNameInputNumber?: InputTextClassProps;
    classNamePhone?: string;
    classNamePhoneLabel?: string;
    classNamePhoneCode?: string;
    classNamePhoneNumber?: string;
    classNameError?: string;
}
export interface InputPhoneBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue" | "datalist" | "validator">, useJsonStringProps<Partial<PhoneProps>> {
    defaultCode?: string;
    disabledSelectCode?: boolean;
    placeholderCode?: string;
    validator?: FenextjsValidatorClass<PhoneProps>;
    useDynamicValue?: boolean;
}
export interface InputPhoneProps extends InputPhoneBaseProps, InputPhoneClassProps {
}
export declare const InputPhone: ({ classNameInputNumber, classNameSelectCode, classNamePhone, classNamePhoneCode, classNamePhoneLabel, classNamePhoneNumber, classNameError, disabledSelectCode, disabled, label, loader, placeholderCode, placeholder, validator, optional, optionalText, required, requiredText, defaultCode, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, defaultValueJsonString, valueJsonString, onChangeJsonString, parseJson_to_String, parseString_to_Json, useDynamicValue, ...props }: InputPhoneProps) => React.JSX.Element;
