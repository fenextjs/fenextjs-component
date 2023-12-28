import React, { useEffect, useState } from "react";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
} from "../Select";
import { loadStates } from "country-state-city-nextjs";
/**
 * Interface that defines CSS class properties for a SelectState input component.
 */
export interface InputSelectStateClassProps extends InputSelectClassProps {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectStateBaseProps
    extends Omit<InputSelectBaseProps, "options" | "useLoader" | "loader"> {
    countryId?: number;
}
/**
 * Props interface for the InputSelectState component. Extends both InputSelectStateBaseProps and InputSelectStateClassProps interfaces.
 */
export interface InputSelectStateProps
    extends InputSelectStateBaseProps,
        InputSelectStateClassProps {}

export const InputSelectState = ({
    countryId = undefined,
    ...props
}: InputSelectStateProps) => {
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState<InputSelectBaseProps["options"]>([]);
    const onLoad = async () => {
        let r = await loadStates();
        if (countryId) {
            r = [...r].filter((e) => e.id_country === countryId);
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
