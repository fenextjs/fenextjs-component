import React from "react";
import {
    InputSelectMultiple,
    InputSelectMultipleProps,
} from "../SelectMultiple";
import { InputSelectItemOptionBaseProps } from "../Select";

export interface InputSelectMultipleTProps<T>
    extends Omit<
        InputSelectMultipleProps<T>,
        "defaultValue" | "value" | "options" | "onChange"
    > {
    /**
     * Default Options of select.
     */
    defaultValue?: T[];
    /**
     * Value Options of select.
     */
    value?: T[];
    /**
     * Options of select.
     */
    options: T[];
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: T[]) => void;
    /**
     * Function for converter T to InputSelectItemOptionBaseProps<T>
     */
    onParse: (v?: T) => InputSelectItemOptionBaseProps<T>;
}

export const InputSelectMultipleT = <T,>({
    defaultValue,
    value,
    options,
    onChange,
    onParse,
    ...props
}: InputSelectMultipleTProps<T>) => {
    return (
        <>
            <InputSelectMultiple<T>
                {...props}
                defaultValue={
                    defaultValue ? defaultValue.map(onParse) : undefined
                }
                value={value ? value.map(onParse) : undefined}
                options={options.map(onParse)}
                onChangeData={onChange}
            />
        </>
    );
};
