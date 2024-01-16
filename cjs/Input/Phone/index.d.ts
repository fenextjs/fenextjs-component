import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { FenextjsValidatorClass } from "fenextjs-validator";
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
export interface InputPhoneBaseProps extends Omit<InputTextBaseProps, "type" | "value" | "onChange" | "defaultValue" | "datalist" | "validator"> {
    /**
     * disabled select code.
     */
    disabledSelectCode?: boolean;
    /**
     * Placeholder select code.
     */
    placeholderCode?: string;
    /**
     * Default Value of Phone.
     */
    defaultValue?: Partial<PhoneProps>;
    /**
     * Value of Phone.
     */
    value?: Partial<PhoneProps>;
    /**
     * onChange of Phone.
     */
    onChange?: (data: Partial<PhoneProps>) => void;
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
export declare const InputPhone: ({ classNameInputNumber, classNameSelectCode, classNamePhone, classNamePhoneCode, classNamePhoneLabel, classNamePhoneNumber, classNameError, disabledSelectCode, disabled, label, loader, yup, placeholderCode, placeholder, defaultValue, value, onChange, validator, _t, ...props }: InputPhoneProps) => React.JSX.Element;
