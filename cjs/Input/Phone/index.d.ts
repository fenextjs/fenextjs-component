import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { useJsonStringProps } from "fenextjs-hook/cjs/useJsonString";
/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputPhoneClassProps {
    /**
     * Obj of class name Select Code.
     */
    classNameSelectCode?: InputSelectClassProps;
    /**
     * Obj of class name Input Number.
     */
    classNameInputNumber?: InputTextClassProps;
    /**
     * Class Name Phone.
     */
    classNamePhone?: string;
    /**
     * Class Name Phone Label.
     */
    classNamePhoneLabel?: string;
    /**
     * Class Name Phone Code.
     */
    classNamePhoneCode?: string;
    /**
     * Class Name Phone Number.
     */
    classNamePhoneNumber?: string;
    /**
     * Class Name Error.
     */
    classNameError?: string;
}
/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputPhoneBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue" | "datalist" | "validator">, useJsonStringProps<Partial<PhoneProps>> {
    /**
     * disabled select code.
     */
    disabledSelectCode?: boolean;
    /**
     * Placeholder select code.
     */
    placeholderCode?: string;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass<PhoneProps>;
}
/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputPhoneBaseProps and InputPhoneClassProps.
 */
export interface InputPhoneProps extends InputPhoneBaseProps, InputPhoneClassProps {
}
/**
 * Component that renders a checkbox input.
 * Takes an InputPhoneProps object as props.
 */
export declare const InputPhone: ({ classNameInputNumber, classNameSelectCode, classNamePhone, classNamePhoneCode, classNamePhoneLabel, classNamePhoneNumber, classNameError, disabledSelectCode, disabled, label, loader, yup, placeholderCode, placeholder, validator, _t, optional, optionalText, required, requiredText, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, defaultValueJsonString, valueJsonString, onChangeJsonString, parseJson_to_String, parseString_to_Json, ...props }: InputPhoneProps) => React.JSX.Element;
