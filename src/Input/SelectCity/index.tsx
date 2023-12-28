import React, { useEffect, useState } from "react";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
} from "../Select";
import { loadCitys } from "country-state-city-nextjs";
/**
 * Interface that defines CSS class properties for a SelectCity input component.
 */
export interface InputSelectCityClassProps extends InputSelectClassProps {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCityBaseProps
    extends Omit<InputSelectBaseProps, "options" | "useLoader" | "loader"> {
    stateId?: number;
}
/**
 * Props interface for the InputSelectCity component. Extends both InputSelectCityBaseProps and InputSelectCityClassProps interfaces.
 */
export interface InputSelectCityProps
    extends InputSelectCityBaseProps,
        InputSelectCityClassProps {}

export const InputSelectCity = ({
    stateId = undefined,
    ...props
}: InputSelectCityProps) => {
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState<InputSelectBaseProps["options"]>([]);
    const onLoad = async () => {
        let r = await loadCitys();
        if (stateId) {
            r = [...r].filter((e) => e.id_state === stateId);
        }
        setOptions(r);
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
