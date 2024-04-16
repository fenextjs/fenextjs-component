import React from "react";
import {
    InputSelect,
    InputSelectItemOptionBaseProps,
    InputSelectProps,
} from "../Select";

export interface InputSelectTProps<T>
    extends Omit<
        InputSelectProps<T>,
        "defaultValue" | "value" | "options" | "onChange"
    > {
    /**
     * Default Options of select.
     */
    defaultValue?: T;
    /**
     * Value Options of select.
     */
    value?: T;
    /**
     * Options of select.
     */
    options: T[];
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: T) => void;
    /**
     * Function for converter T to InputSelectItemOptionBaseProps<T>
     */
    onParse: (v?: T) => InputSelectItemOptionBaseProps<T>;
}

export const InputSelectT = <T,>({
    defaultValue,
    value,
    options,
    onChange,
    onParse,
    ...props
}: InputSelectTProps<T>) => {
    return (
        <>
            <InputSelect
                {...props}
                defaultValue={onParse(defaultValue)}
                value={onParse(value)}
                options={options.map(onParse)}
                onChangeData={onChange}
            />
        </>
    );
};
