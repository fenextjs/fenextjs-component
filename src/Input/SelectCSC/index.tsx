import React, { useMemo } from "react";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
    InputSelectProps,
} from "../Select";
import { useCSC, useCSCProps } from "fenextjs-hook/cjs/useCSC";
import {
    CSCProps,
    CountryProps,
    StateProps,
    CityProps,
} from "fenextjs-interface/cjs/CSC";
import {
    parseCSCString_to_CSC,
    parseCSC_to_CSCString,
} from "fenextjs-functions";

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
            | "validator"
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
    country?: Pick<
        InputSelectProps,
        | "label"
        | "placeholder"
        | "disabled"
        | "classNameSelect"
        | "validator"
        | "validatorData"
    >;
    /**
     * state Input Label and Placeholder.
     */
    state?: Pick<
        InputSelectProps,
        | "label"
        | "placeholder"
        | "disabled"
        | "classNameSelect"
        | "validator"
        | "validatorData"
    >;
    /**
     * city Input Label and Placeholder.
     */
    city?: Pick<
        InputSelectProps,
        | "label"
        | "placeholder"
        | "disabled"
        | "classNameSelect"
        | "validator"
        | "validatorData"
    >;
}
/**
 * Props interface for the InputSelectCSC component. Extends both InputSelectCSCBaseProps and InputSelectCSCClassProps interfaces.
 */
export interface InputSelectCSCProps
    extends InputSelectCSCBaseProps,
        InputSelectCSCClassProps {}

export const InputSelectCSC = ({
    classNameSelectCSC = "",
    useContainer = true,
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

    defaultValue: defaultValueProps,
    value: valueProps,
    onChange: onChangeProps,
    defaultValueJsonString,
    valueJsonString,
    onChangeJsonString,
    parseJson_to_String,
    parseString_to_Json,
    ...props
}: InputSelectCSCProps) => {
    const {
        countrys,
        states,
        citys,
        onChangeCSC,
        value,
        loadCitys,
        loadCountrys,
        loadStates,
    } = useCSC({
        defaultValue: defaultValueProps,
        value: valueProps,
        onChange: onChangeProps,
        defaultValueJsonString,
        valueJsonString,
        onChangeJsonString,
        parseJson_to_String: parseJson_to_String ?? parseCSC_to_CSCString,
        parseString_to_Json: parseString_to_Json ?? parseCSCString_to_CSC,
    });

    const CONTENT = useMemo(() => {
        let C = (
            <>
                <InputSelect<CountryProps>
                    {...props}
                    {...country}
                    // key={value?.country?.id}
                    useTOption={false}
                    options={countrys?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    })}
                    onChangeData={onChangeCSC("country")}
                    defaultValue={value?.country}
                    loader={!loadCountrys}
                />
                <InputSelect<StateProps>
                    {...props}
                    {...state}
                    useTOption={false}
                    key={value?.country?.id}
                    options={states?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    })}
                    onChangeData={onChangeCSC("state")}
                    defaultValue={value?.state}
                    loader={!loadStates}
                />
                <InputSelect<CityProps>
                    {...props}
                    {...city}
                    useTOption={false}
                    key={value?.state?.id}
                    options={citys?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    })}
                    onChangeData={onChangeCSC("city")}
                    defaultValue={value?.city}
                    loader={!loadCitys}
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
    }, [
        value,
        countrys,
        states,
        citys,
        useContainer,
        country,
        state,
        city,
        loadCitys,
        loadCountrys,
        loadStates,
    ]);
    return <>{CONTENT}</>;
};
