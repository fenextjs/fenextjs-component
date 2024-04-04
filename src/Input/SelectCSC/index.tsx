import React, { useMemo } from "react";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
} from "../Select";
import { useCSC, useCSCProps } from "fenextjs-hook/cjs/useCSC";
import {
    CSCProps,
    CountryProps,
    StateProps,
    CityProps,
} from "fenextjs-interface/cjs/CSC";
import { InputTextBaseProps } from "../Text";

/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectCSCClassProps extends InputSelectClassProps {
    /**
     * CSS class name for the input select.
     */
    classNameSelectCSC?: string;
}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectCSCBaseProps
    extends useCSCProps,
        Omit<
            InputSelectBaseProps,
            | "options"
            | "defaultValue"
            | "value"
            | "isSelectClearText"
            | "onChange"
            | "onChangeValidate"
        > {
    /**
     * useContainer for group select in div.
     */
    useContainer?: boolean;
    /**
     * onChange CSC selected.
     */
    onChange?: (data: CSCProps) => void;
    /**
     * country Input Label and Placeholder.
     */
    country?: Pick<InputTextBaseProps, "label" | "placeholder">;
    /**
     * state Input Label and Placeholder.
     */
    state?: Pick<InputTextBaseProps, "label" | "placeholder">;
    /**
     * city Input Label and Placeholder.
     */
    city?: Pick<InputTextBaseProps, "label" | "placeholder">;
    /**
     * ifLoadImgCountry.
     */
    ifLoadImgCountry?: boolean;
}
/**
 * Props interface for the InputSelectCSC component. Extends both InputSelectCSCBaseProps and InputSelectCSCClassProps interfaces.
 */
export interface InputSelectCSCProps
    extends InputSelectCSCBaseProps,
        InputSelectCSCClassProps {}

export const InputSelectCSC = ({
    classNameSelectCSC = "",
    defaultValue = undefined,
    useContainer = true,
    onChange,
    country = {
        label: "Country",
        placeholder: "Country",
    },
    state = {
        label: "State",
        placeholder: "State",
    },
    city = {
        label: "City",
        placeholder: "City",
    },
    ifLoadImgCountry = false,
    ...props
}: InputSelectCSCProps) => {
    const { countrys, states, citys, onChangeCSC, value } = useCSC({
        defaultValue,
        onChange,
        ifLoadImgCountry,
    });

    const CONTENT = useMemo(() => {
        let C = (
            <>
                <InputSelect<CountryProps>
                    {...props}
                    {...country}
                    key={value?.country?.id}
                    options={countrys?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    })}
                    onChangeData={onChangeCSC("country")}
                    defaultValue={value?.country}
                    maxLengthShowOptions={50}
                />
                <InputSelect<StateProps>
                    {...props}
                    {...state}
                    key={value?.state?.id}
                    options={states?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    })}
                    onChangeData={onChangeCSC("state")}
                    defaultValue={value?.state}
                    maxLengthShowOptions={50}
                />
                <InputSelect<CityProps>
                    {...props}
                    {...city}
                    key={value?.city?.id}
                    options={citys?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    })}
                    onChangeData={onChangeCSC("city")}
                    defaultValue={value?.city}
                    maxLengthShowOptions={50}
                />
            </>
        );

        if (useContainer) {
            C = (
                <>
                    <div className={`fenext-select-csc ${classNameSelectCSC}`}>
                        {C}
                    </div>
                </>
            );
        }

        return C;
    }, [value, countrys, states, citys, useContainer, country, state, city]);
    return <>{CONTENT}</>;
};
