import React, { useState } from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import {
    LoadScript,
    Autocomplete,
    AutocompleteProps,
} from "@react-google-maps/api";
import { Close } from "fenextjs-svg/cjs/close";
import { useData } from "fenextjs-hook/cjs/useData";
import {
    AddressGoogle,
    AutocompleteGoogle,
} from "fenextjs-interface/cjs/AddressGoogle";
import { ErrorComponent } from "../../Error";
import {
    ErrorFenextjs,
    ErrorGoogleKeyInvalid,
    ErrorGoogleKeyNotFound,
} from "fenextjs-error";
/**
 * Interface that defines CSS class properties for a AutocompleteGoogleMaps input component.
 */
export interface InputAutocompleteGoogleMapsClassProps
    extends InputTextClassProps {}

/**
 * Interface that defines base properties for a AutocompleteGoogleMaps input component.
 */
export interface InputAutocompleteGoogleMapsBaseProps
    extends Omit<AutocompleteProps, "children">,
        Omit<
            InputTextBaseProps,
            "defaultValue" | "onChange" | "onChangeValidate" | "value"
        > {
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
export interface InputAutocompleteGoogleMapsProps
    extends InputAutocompleteGoogleMapsBaseProps,
        InputAutocompleteGoogleMapsClassProps {}

/**
 * Component that renders a AutocompleteGoogleMaps input.
 * Takes an InputAutocompleteGoogleMapsProps object as props.
 */
export const InputAutocompleteGoogleMaps = ({
    onChange,
    defaultValue = undefined,
    GOOGLE_KEY = process.env["NEXT_PUBLIC_GOOGLE_KEY"],
    _t = (e) => e,
    ...props
}: InputAutocompleteGoogleMapsProps) => {
    const [valueText, setValueText] = useState(
        defaultValue?.formatted_address ?? "",
    );
    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);

    const { setData } = useData<AddressGoogle | undefined>(defaultValue, {
        onChangeDataAfter: (d) => {
            onChange?.(d);
            setValueText(d?.formatted_address ?? "");
        },
    });

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
            setData(place);
        }
    };

    return (
        <div className={`fenext-input-autocomplete-google-maps`}>
            <div className={`fenext-input-autocomplete-google-maps-content`}>
                <div
                    className={`fenext-input-autocomplete-google-maps-content-input`}
                >
                    <LoadScript
                        googleMapsApiKey={GOOGLE_KEY ?? ""}
                        libraries={["places", "geometry"]}
                        onError={() => {
                            setError(new ErrorGoogleKeyInvalid());
                        }}
                    >
                        <Autocomplete
                            {...props}
                            onLoad={setAutocompleteValue}
                            onPlaceChanged={onPlaceChanged}
                        >
                            <InputText
                                {...props}
                                _t={_t}
                                value={valueText}
                                onChange={setValueText}
                            />
                        </Autocomplete>
                    </LoadScript>
                </div>
                <span className={`fenext-input-autocomplete-google-maps-close`}>
                    <Close />
                </span>
            </div>
            {error && <ErrorComponent error={error} _t={_t} />}
            {(GOOGLE_KEY == "" || !GOOGLE_KEY) && (
                <ErrorComponent error={new ErrorGoogleKeyNotFound()} _t={_t} />
            )}
        </div>
    );
};
