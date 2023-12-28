import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../../Text";
import { AutocompleteProps } from "@react-google-maps/api";
import { AddressGoogle } from "fenextjs-interface/cjs/AddressGoogle";
/**
 * Properties for the base InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteBaseProps extends Omit<AutocompleteProps, "children">, Omit<InputTextBaseProps, "defaultValue" | "onChange" | "onChangeValidate" | "value"> {
    /**
     * defaultValue of input.
     * @default undefined
     */
    defaultValue?: AddressGoogle | undefined;
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v: AddressGoogle | undefined) => void;
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
export declare const InputGoogleAutocomplete: ({ onChange, defaultValue, className, ...props }: InputGoogleAutocompleteProps) => React.JSX.Element;
