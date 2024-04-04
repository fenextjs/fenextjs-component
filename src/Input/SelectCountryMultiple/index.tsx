import React, { useEffect, useState } from "react";
import {
    InputSelectMultiple,
    InputSelectMultipleBaseProps,
    InputSelectMultipleClassProps,
} from "../SelectMultiple";
import { getDataCountrys } from "country-state-city-nextjs";
/**
 * Interface that defines CSS class properties for a SelectCountryMultiple input component.
 */
export interface InputSelectCountryMultipleClassProps
    extends InputSelectMultipleClassProps {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCountryMultipleBaseProps
    extends Omit<
        InputSelectMultipleBaseProps,
        "options" | "useLoader" | "loader"
    > {}
/**
 * Props interface for the InputSelectCountryMultiple component. Extends both InputSelectCountryMultipleBaseProps and InputSelectCountryMultipleClassProps interfaces.
 */
export interface InputSelectCountryMultipleProps
    extends InputSelectCountryMultipleBaseProps,
        InputSelectCountryMultipleClassProps {}

export const InputSelectCountryMultiple = ({
    ...props
}: InputSelectCountryMultipleProps) => {
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState<
        InputSelectMultipleBaseProps["options"]
    >([]);
    const onLoad = async () => {
        const r = await getDataCountrys();
        setOptions(r);
        setLoader(false);
    };
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <>
            <InputSelectMultiple
                {...props}
                options={options}
                loader={loader}
                useLoader={true}
            />
        </>
    );
};
