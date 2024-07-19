import React, { useMemo } from "react";
import {
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
import { InputSelectT } from "../SelectT";

/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectCSCClassProps extends InputSelectClassProps {
    /**
     * CSS class name for the input select.
     */
    classNameSelectCSC?: string;
}

type InputCSCProps = Pick<
    InputSelectProps,
    | "label"
    | "placeholder"
    | "placeholderFocus"
    | "disabled"
    | "classNameSelect"
    | "validator"
    | "validatorData"
    | "filterOptions"
>;

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
        | "validatorData"
        | "filterOptions"
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
    country?: InputCSCProps
    /**
     * state Input Label and Placeholder.
     */
    state?: InputCSCProps
    /**
     * city Input Label and Placeholder.
     */
    city?: InputCSCProps
}
/**
 * Props interface for the InputSelectCSC component. Extends both InputSelectCSCBaseProps and InputSelectCSCClassProps interfaces.
 */
export interface InputSelectCSCProps
    extends InputSelectCSCBaseProps,
    InputSelectCSCClassProps { }

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
                <InputSelectT<CountryProps>
                    {...props}
                    {...country}
                    useTOption={false}
                    options={countrys}
                    onChange={onChangeCSC("country")}
                    defaultValue={value?.country}
                    loader={!loadCountrys}
                    onParse={(e) => {
                        return {
                            ...e,
                            id: e?.id ?? "",
                            text: e?.text ?? "",
                            data: e,
                        };
                    }}
                />
                <InputSelectT<StateProps>
                    {...props}
                    {...state}
                    useTOption={false}
                    key={value?.country?.id}
                    options={states}
                    onChange={onChangeCSC("state")}
                    defaultValue={value?.state}
                    loader={!loadStates}
                    onParse={(e) => {
                        return {
                            ...e,
                            id: e?.id ?? "",
                            text: e?.text ?? "",
                            data: e,
                        };
                    }}
                />
                <InputSelectT<CityProps>
                    {...props}
                    {...city}
                    useTOption={false}
                    key={value?.state?.id}
                    options={citys}
                    onChange={onChangeCSC("city")}
                    defaultValue={value?.city}
                    loader={!loadCitys}
                    onParse={(e) => {
                        return {
                            ...e,
                            id: e?.id ?? "",
                            text: e?.text ?? "",
                            data: e,
                        };
                    }}
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
