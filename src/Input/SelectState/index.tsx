import React, { useEffect, useState } from "react";
import { InputSelectItemOptionBaseProps } from "../Select";
import {
    getDataStates,
    getDataStatesByCountry,
} from "country-state-city-nextjs";
import { InputSelectT, InputSelectTProps } from "../SelectT";
import { StateProps, CountryProps } from "fenextjs-interface";

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectStateProps
    extends Omit<
        InputSelectTProps<StateProps>,
        "options" | "onParse" | "useLoader" | "loader"
    > {
    country?: CountryProps;
}

export const InputSelectState = ({
    country = undefined,
    ...props
}: InputSelectStateProps) => {
    const [loader, setLoader] = useState(true);
    const [options, setOptions] = useState<StateProps[]>([]);
    const onLoad = async () => {
        const getData = async () => {
            if (country) {
                return await getDataStatesByCountry(country);
            }
            return await getDataStates();
        };
        const r = await getData();
        setOptions(r);
        setLoader(false);
    };
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <>
            <InputSelectT<StateProps>
                {...props}
                options={options}
                onParse={(e) => {
                    const r: InputSelectItemOptionBaseProps<StateProps> = {
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
