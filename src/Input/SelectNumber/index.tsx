import React from "react";

import { InputSelect, InputSelectProps } from "../..";

export interface InputSelectNumberProps
    extends Omit<InputSelectProps, "options" | "onChange" | "defaultValue"> {
    onChange?: (n: number) => void;
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
    return (
        <>
            <InputSelect
                {...props}
                classNameSelect={`fenext-select-number ${props?.classNameSelect}`}
                defaultValue={
                    defaultValue
                        ? {
                              id: `${defaultValue}`,
                              text: `${defaultValue}`,
                              data: defaultValue,
                          }
                        : undefined
                }
                options={new Array(Math.abs(max - min + 1))
                    .fill(1)
                    .map((e, i) => {
                        const n = e * i + min;
                        return {
                            id: `${n}`,
                            text: parseText(n),
                            data: n,
                        };
                    })}
                onChange={(e) => {
                    onChange?.(e?.data);
                }}
            />
        </>
    );
};
