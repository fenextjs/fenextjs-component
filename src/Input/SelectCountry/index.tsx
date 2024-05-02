import React, { useEffect, useState } from "react";
import {
    InputSelectClassProps,
    InputSelectItemOptionBaseProps,
} from "../Select";
import { getDataCountrys, getRuteCountryImg } from "country-state-city-nextjs";
import { CountryProps } from "fenextjs-interface";
import { InputSelectT, InputSelectTProps } from "../SelectT";
/**
 * Interface that defines CSS class properties for a SelectCountry input component.
 */
export interface InputSelectCountryClassProps extends InputSelectClassProps {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCountryBaseProps
    extends Omit<
        InputSelectTProps<CountryProps>,
        "options" | "onParse" | "useLoader" | "loader"
    > {}
/**
 * Props interface for the InputSelectCountry component. Extends both InputSelectCountryBaseProps and InputSelectCountryClassProps interfaces.
 */
export interface InputSelectCountryProps
    extends InputSelectCountryBaseProps,
        InputSelectCountryClassProps {}

export const InputSelectCountry = ({ ...props }: InputSelectCountryProps) => {
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState<CountryProps[]>([]);
    const onLoad = async () => {
        const countrys: CountryProps[] = await getDataCountrys();
        setOptions(countrys);
        setLoader(false);
    };
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <>
            <InputSelectT<CountryProps>
                {...props}
                options={options}
                onParse={(e) => {
                    const r: InputSelectItemOptionBaseProps<CountryProps> = {
                        id: e?.id ?? "",
                        text: e?.text ?? "",
                        img: e ? `${getRuteCountryImg(e)}` : undefined,
                        data: e,
                    };
                    return r;
                }}
                loader={loader}
                useLoader={true}
                maxLengthShowOptions={50}
            />
        </>
    );
};
