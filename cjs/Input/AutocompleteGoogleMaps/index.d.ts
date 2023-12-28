import React from "react";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { AutocompleteProps } from "@react-google-maps/api";
import { AddressGoogle } from "fenextjs-interface/cjs/AddressGoogle";
/**
 * Interface that defines CSS class properties for a AutocompleteGoogleMaps input component.
 */
export interface InputAutocompleteGoogleMapsClassProps extends InputTextClassProps {
}
/**
 * Interface that defines base properties for a AutocompleteGoogleMaps input component.
 */
export interface InputAutocompleteGoogleMapsBaseProps extends Omit<AutocompleteProps, "children">, Omit<InputTextBaseProps, "defaultValue" | "onChange" | "onChangeValidate" | "value"> {
    /**
     * GOOGLE_KEY of Google maps.
     * @default process.env["NEXT_PUBLIC_GOOGLE_KEY"]
     */
    GOOGLE_KEY?: string;
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
 * Interface that defines all properties for a AutocompleteGoogleMaps input component.
 * Extends InputAutocompleteGoogleMapsBaseProps and InputAutocompleteGoogleMapsClassProps.
 */
export interface InputAutocompleteGoogleMapsProps extends InputAutocompleteGoogleMapsBaseProps, InputAutocompleteGoogleMapsClassProps {
}
/**
 * Component that renders a AutocompleteGoogleMaps input.
 * Takes an InputAutocompleteGoogleMapsProps object as props.
 */
export declare const InputAutocompleteGoogleMaps: ({ onChange, defaultValue, GOOGLE_KEY, _t, ...props }: InputAutocompleteGoogleMapsProps) => React.JSX.Element;
