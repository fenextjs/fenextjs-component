import React, { useMemo } from "react";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
    InputSelectItemOptionBaseProps,
} from "../Select";
import { useCSC, useCSCProps } from "fenextjs-hook/cjs/useCSC";
import { CSCProps } from "fenextjs-interface/cjs/CSC";
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
    defaultValueString = undefined,
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
    const {
        load,
        countrys,
        statesForCountrySelected,
        citysForStateSelected,
        onChangeCSC,
        value,
    } = useCSC({
        defaultValue,
        defaultValueString,
        onChangeDataMemoAfter: onChange,
        ifLoadImgCountry,
    });

    const onChange_ =
        (id: keyof CSCProps) =>
        (v: InputSelectItemOptionBaseProps | undefined) => {
            if (v) {
                onChangeCSC(id)({
                    id: parseInt(`${v?.id}`),
                    text: v?.text ?? "",
                    id_country: v?.data?.id_country,
                    id_state: v?.data?.id_state as any,
                    nameAve: v?.data?.nameAve as any,
                });
            } else {
                if (id == "country") {
                    onChangeCSC("state")(undefined);
                }
                if (id == "state") {
                    onChangeCSC("city")(undefined);
                }
            }
        };

    const CONTENT = useMemo(() => {
        let C = <></>;
        if (load) {
            C = (
                <>
                    <InputSelect
                        {...props}
                        {...country}
                        key={value?.country?.id}
                        options={countrys?.map((e) => {
                            return {
                                ...e,
                                data: e,
                            };
                        })}
                        onChange={onChange_("country")}
                        defaultValue={value?.country}
                        loader={!load}
                    />
                    <InputSelect
                        {...props}
                        {...state}
                        key={value?.state?.id}
                        options={statesForCountrySelected?.map((e) => {
                            return {
                                ...e,
                                data: e,
                            };
                        })}
                        onChange={onChange_("state")}
                        defaultValue={value?.state}
                        loader={!load}
                    />
                    <InputSelect
                        {...props}
                        {...city}
                        key={value?.city?.id}
                        options={citysForStateSelected?.map((e) => {
                            return {
                                ...e,
                                data: e,
                            };
                        })}
                        onChange={onChange_("city")}
                        defaultValue={value?.city}
                        loader={!load}
                    />
                </>
            );
        }
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
        load,
        countrys,
        statesForCountrySelected,
        citysForStateSelected,
        useContainer,
        country,
        state,
        city,
    ]);
    return <>{CONTENT}</>;
};
