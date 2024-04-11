import React, { useState } from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../../Text";
import { Autocomplete, AutocompleteProps } from "@react-google-maps/api";
import { Close } from "fenextjs-svg/cjs/Close";
import { useData } from "fenextjs-hook/cjs/useData";
import {
    AddressGoogle,
    AutocompleteGoogle,
} from "fenextjs-interface/cjs/AddressGoogle";
import { ErrorFenextjs, ErrorGoogleKeyInvalid } from "fenextjs-error";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { useJsonString, useJsonStringProps } from "fenextjs-hook";
import {
    parseAddress_to_String,
    parseString_to_Address,
} from "fenextjs-functions";

/**
 * Properties for the base InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteBaseProps
    extends Omit<AutocompleteProps, "children">,
        Omit<
            InputTextBaseProps,
            | "defaultValue"
            | "onChange"
            | "onChangeValidate"
            | "value"
            | "validator"
        >,
        useJsonStringProps<AddressGoogle | undefined> {
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass<AddressGoogle>;
}

/**
 * Properties for the class of the InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteClassProps
    extends InputTextClassProps {}

/**
 * Properties for the InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteProps
    extends InputGoogleAutocompleteBaseProps,
        InputGoogleAutocompleteClassProps {}

export const InputGoogleAutocomplete = ({
    defaultValueJsonString,
    valueJsonString,
    onChangeJsonString,

    defaultValue: defaultValueProps = undefined,
    value: valueProps = undefined,
    onChange: onChangeProps,

    parseJson_to_String,
    parseString_to_Json,

    className = "",
    validator,
    ...props
}: InputGoogleAutocompleteProps) => {
    const { defaultValue, onChange } = useJsonString<AddressGoogle | undefined>(
        {
            parseJson_to_String: parseJson_to_String ?? parseAddress_to_String,
            parseString_to_Json: parseString_to_Json ?? parseString_to_Address,
            defaultValueJsonString,
            valueJsonString,
            onChangeJsonString,
            value: valueProps,
            defaultValue: defaultValueProps,
            onChange: onChangeProps,
        },
    );

    const [valueText, setValueText] = useState(
        defaultValue?.formatted_address ?? "",
    );
    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);

    const { setData, isValidData } = useData<AddressGoogle | undefined>(
        defaultValue,
        {
            onChangeDataAfter: (d) => {
                onChange?.(d);
                if (d) {
                    setValueText(d?.formatted_address ?? "");
                }
            },
            validator,
        },
    );

    const [autocompleteValue, setAutocompleteValue] = useState<
        AutocompleteGoogle | undefined
    >(undefined);

    const onPlaceChanged = () => {
        if (autocompleteValue) {
            const place = autocompleteValue?.getPlace?.();
            if (place == undefined) {
                setError(new ErrorGoogleKeyInvalid());
                return;
            }
            setData({
                ...place,
                lat: place?.geometry?.location?.lat?.(),
                lng: place?.geometry?.location?.lng?.(),
            });
        } else {
            setData(undefined);
        }
    };

    return (
        <div className={`fenext-input-google-autocomplete ${className}`}>
            <div className={`fenext-input-google-autocomplete-content`}>
                <div
                    className={`fenext-input-google-autocomplete-content-input`}
                >
                    <Autocomplete
                        {...props}
                        onLoad={setAutocompleteValue}
                        onPlaceChanged={onPlaceChanged}
                    >
                        <InputText
                            {...props}
                            validator={undefined}
                            value={valueText}
                            onChange={(e) => {
                                setValueText(e);
                                setData(undefined);
                            }}
                            error={
                                error ??
                                (isValidData instanceof ErrorFenextjs
                                    ? isValidData
                                    : undefined)
                            }
                        />
                    </Autocomplete>
                </div>
                <span className={`fenext-input-google-autocomplete-close`}>
                    <Close />
                </span>
            </div>
        </div>
    );
};
