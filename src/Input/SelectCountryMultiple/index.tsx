import React, { useEffect, useState } from "react";
import {
    InputSelectMultipleT,
    InputSelectMultipleTProps
} from "../SelectMultipleT";
import { getDataCountrys, getRuteCountryImg } from "country-state-city-nextjs";
import { CountryProps } from "fenextjs-interface";

export interface InputSelectCountryMultipleProps
    extends Omit<
    InputSelectMultipleTProps<CountryProps>,
        "options" | "useLoader" | "loader" | "onParse"
    > {}
    

export const InputSelectCountryMultiple = ({
    ...props
}: InputSelectCountryMultipleProps) => {
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState<
    CountryProps[]
    >([]);
    const onLoad = async () => {
        const countrys = await getDataCountrys();
        setOptions(
            countrys.map((e) => {
                return {
                    ...e,
                    img: `${getRuteCountryImg(e)}`,
                };
            }),
        );
        setLoader(false);
    };
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <>
            <InputSelectMultipleT<CountryProps>
                {...props}
                options={options}
                loader={loader}
                useLoader={true}
                onParse={e=>({
                    ...e,
                    text:e?.text ?? '',
                    id:e?.id ?? '',
                    data:e
                })}
            />
        </>
    );
};
