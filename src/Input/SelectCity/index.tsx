import React, { useEffect, useState } from "react";
import { InputSelectItemOptionBaseProps } from "../Select";
import {
    getDataCitys,
    getDataCitysByStateAndCountry,
    getDataCitysByCountry,
} from "country-state-city-nextjs";
import { InputSelectT, InputSelectTProps } from "../SelectT";
import { CityProps, CountryProps, StateProps } from "fenextjs-interface";

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCityProps
    extends Omit<
        InputSelectTProps<CityProps>,
        "options" | "onParse" | "useLoader" | "loader"
    > {
    country?: CountryProps;
    state?: StateProps;
}

export const InputSelectCity = ({
    country = undefined,
    state = undefined,
    ...props
}: InputSelectCityProps) => {
    const [loader, setLoader] = useState(true);
    const [options, setOptions] = useState<CityProps[]>([]);
    const onLoad = async () => {
        const getData = async () => {
            if (country && state) {
                return await getDataCitysByStateAndCountry(country, state);
            }
            if (country) {
                return await getDataCitysByCountry(country);
            }
            return await getDataCitys();
        };
        const r = await getData();
        setOptions(r);
        setLoader(false);
    };
    useEffect(() => {
        onLoad();
    }, [country,state]);

    return (
        <>
            <InputSelectT<CityProps>
                {...props}
                useTOption={false}
                options={options}
                onParse={(e) => {
                    const r: InputSelectItemOptionBaseProps<CityProps> = {
                        id: e?.id ?? "",
                        text: e?.text ?? "",
                        data: e,
                    };
                    return r;
                }}
                loader={loader}
                useLoader={true}
            />
        </>
    );
};
