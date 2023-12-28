import React, { useEffect, useState } from "react";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
} from "../Select";
import { loadCountrys, loadCountrysWidthImg } from "country-state-city-nextjs";
import { CountryProps } from "fenextjs-interface";
/**
 * Interface that defines CSS class properties for a SelectCountry input component.
 */
export interface InputSelectCountryClassProps extends InputSelectClassProps {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCountryBaseProps
    extends Omit<InputSelectBaseProps, "options" | "useLoader" | "loader"> {
    /**
     * ifLoadImgCountry.
     */
    ifLoadImgCountry?: boolean;
}
/**
 * Props interface for the InputSelectCountry component. Extends both InputSelectCountryBaseProps and InputSelectCountryClassProps interfaces.
 */
export interface InputSelectCountryProps
    extends InputSelectCountryBaseProps,
        InputSelectCountryClassProps {}

export const InputSelectCountry = ({
    ifLoadImgCountry = false,
    ...props
}: InputSelectCountryProps) => {
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState<InputSelectBaseProps["options"]>([]);
    const onLoad = async () => {
        let countrys: CountryProps[] = [];
        if (ifLoadImgCountry) {
            countrys = await loadCountrysWidthImg();
        } else {
            countrys = await loadCountrys();
        }
        setOptions(countrys);
        setLoader(false);
    };
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <>
            <InputSelect
                {...props}
                options={options}
                loader={loader}
                useLoader={true}
            />
        </>
    );
};
