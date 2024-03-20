import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../../Text";
import { AutocompleteProps } from "@react-google-maps/api";
import { AddressGoogle } from "fenextjs-interface/cjs/AddressGoogle";
import { FenextjsValidatorClass } from "fenextjs-validator";
/**
 * Properties for the base InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteBaseProps extends Omit<AutocompleteProps, "children">, Omit<InputTextBaseProps, "defaultValue" | "onChange" | "onChangeValidate" | "value" | "validator"> {
    /**
     * defaultValue of input.
     * @default undefined
     */
    defaultValue?: AddressGoogle | undefined;
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v: AddressGoogle | undefined) => void;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass<AddressGoogle>;
}
/**
 * Properties for the class of the InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteClassProps extends InputTextClassProps {
}
/**
 * Properties for the InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteProps extends InputGoogleAutocompleteBaseProps, InputGoogleAutocompleteClassProps {
}
export declare const InputGoogleAutocomplete: ({ onChange, defaultValue, className, validator, ...props }: InputGoogleAutocompleteProps) => React.JSX.Element;
