import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../../Text";
import { AutocompleteProps as GoogleAutocompleteProps } from "@react-google-maps/api";
import { AddressGoogle } from "fenextjs-interface/cjs/AddressGoogle";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { useJsonStringProps } from "fenextjs-hook";
export interface InputGoogleAutocompleteBaseProps extends Omit<GoogleAutocompleteProps, "children">, Omit<InputTextBaseProps, "defaultValue" | "onChange" | "onChangeValidate" | "value" | "validator">, useJsonStringProps<AddressGoogle | undefined> {
    validator?: FenextjsValidatorClass<AddressGoogle | undefined>;
}
export interface InputGoogleAutocompleteClassProps extends InputTextClassProps {
}
export interface InputGoogleAutocompleteProps extends InputGoogleAutocompleteBaseProps, InputGoogleAutocompleteClassProps {
}
export declare const InputGoogleAutocomplete: ({ defaultValueJsonString, valueJsonString, onChangeJsonString, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, parseJson_to_String, parseString_to_Json, className, validator, ...props }: InputGoogleAutocompleteProps) => React.JSX.Element;
