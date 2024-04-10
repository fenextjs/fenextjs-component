import React, { useCallback } from "react";

import { InputSelect, InputSelectItemOptionBaseProps, InputSelectProps } from "../..";

export interface InputSelectNumberProps
    extends Omit<
        InputSelectProps,
        "options" | "onChange" | "defaultValue" | "parseText"
    > {
    onChange?: (n?: number) => void;
    defaultValue?: number;
    min?: number;
    max?: number;
    parseText?: (e: number) => string;
}

export const InputSelectNumber = ({
    onChange,
    defaultValue = undefined,
    min = 0,
    max = 100,
    parseText = (e) => `${e}`,
    ...props
}: InputSelectNumberProps) => {
    const parseOption = useCallback(
        (n: number):InputSelectItemOptionBaseProps<number> => {
            return {
                id: `${n}`,
                text: parseText(n),
                data: n,
            };
        },
        [parseText],
    );

    return (
        <>
            <InputSelect<number>
                {...props}
                classNameSelect={`fenext-select-number ${props?.classNameSelect}`}
                defaultValue={
                    defaultValue != undefined
                        ? parseOption(defaultValue)
                        : undefined
                }
                options={new Array(Math.abs(max - min + 1))
                    .fill(1)
                    .map((e, i) => {
                        const n = e * i + min;
                        return parseOption(n);
                    })}
                onChangeData={onChange}
            />
        </>
    );
};
