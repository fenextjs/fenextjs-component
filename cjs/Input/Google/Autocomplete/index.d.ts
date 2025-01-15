import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../../Text";
import { AutocompleteProps as GoogleAutocompleteProps } from "@react-google-maps/api";
import { AddressGoogle } from "fenextjs-interface/cjs/AddressGoogle";
import { FenextjsValidatorClass } from "fenextjs-validator";
export interface InputGoogleAutocompleteBaseProps extends Omit<GoogleAutocompleteProps, "children">, Omit<InputTextBaseProps, "defaultValue" | "onChange" | "onChangeValidate" | "value" | "validator"> {
    validator?: FenextjsValidatorClass<AddressGoogle | undefined>;
    defaultValue?: AddressGoogle;
    value?: AddressGoogle;
    onChange?: (data?: AddressGoogle) => void;
}
export interface InputGoogleAutocompleteClassProps extends InputTextClassProps {
}
export interface InputGoogleAutocompleteProps extends InputGoogleAutocompleteBaseProps, InputGoogleAutocompleteClassProps {
}
export declare const InputGoogleAutocomplete: ({ defaultValue, value, onChange, className, validator, ...props }: InputGoogleAutocompleteProps) => React.JSX.Element;
