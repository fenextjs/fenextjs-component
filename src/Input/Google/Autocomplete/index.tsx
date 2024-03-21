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
        > {
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
export interface InputGoogleAutocompleteClassProps
    extends InputTextClassProps {}

/**
 * Properties for the InputGoogleAutocomplete component.
 */
export interface InputGoogleAutocompleteProps
    extends InputGoogleAutocompleteBaseProps,
        InputGoogleAutocompleteClassProps {}

export const InputGoogleAutocomplete = ({
    onChange,
    defaultValue = undefined,
    className = "",
    validator,
    ...props
}: InputGoogleAutocompleteProps) => {
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
                lat:place?.geometry?.location?.lat?.(),
                lng:place?.geometry?.location?.lng?.(),
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
