import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../../Text";
import { AutocompleteProps } from "@react-google-maps/api";
import { AddressGoogle } from "fenextjs-interface/cjs/AddressGoogle";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { useJsonStringProps } from "fenextjs-hook";
/**
 * Properties for the base InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteBaseProps extends Omit<AutocompleteProps, "children">, Omit<InputTextBaseProps, "defaultValue" | "onChange" | "onChangeValidate" | "value" | "validator">, useJsonStringProps<AddressGoogle | undefined> {
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
export declare const InputGoogleAutocomplete: ({ defaultValueJsonString, valueJsonString, onChangeJsonString, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, parseJson_to_String, parseString_to_Json, className, validator, ...props }: InputGoogleAutocompleteProps) => React.JSX.Element;
