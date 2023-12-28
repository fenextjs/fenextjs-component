import React, { useMemo } from "react";
import {
    InputTextSelect,
    InputTextSelectBaseProps,
    InputTextSelectClassProps,
} from "../../TextSelect";
import { useData } from "fenextjs-hook";
import { Unit_All, parseUnitToText } from "fenextjs-functions/cjs/parse/Unit";
import { parseNumber } from "fenextjs-functions/cjs/parse/Number";

export interface InputUnitValue {
    value?: number | "";
    unit?: Unit_All;
}
export interface InputUnitValueText {
    value?: string;
    unit?: Unit_All;
}

/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputUnitBaseClassProps extends InputTextSelectClassProps {}

/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputUnitBaseBaseProps
    extends Omit<
        InputTextSelectBaseProps,
        "value" | "onChange" | "defaultValue" | "options"
    > {
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<InputUnitValue>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<InputUnitValue>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<InputUnitValue>) => void;
    /**
     * posSelect of TextSelect.
     */
    options: Unit_All[];
}

/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputUnitBaseBaseProps and InputUnitBaseClassProps.
 */
export interface InputUnitBaseProps
    extends InputUnitBaseBaseProps,
        InputUnitBaseClassProps {}

/**
 * Component that renders a checkbox input.
 * Takes an InputUnitBaseProps object as props.
 */
export const InputUnitBase = ({
    defaultValue = {},
    value: valueProps = undefined,
    onChange,
    options,
    ...props
}: InputUnitBaseProps) => {
    const { data, setData } = useData<Partial<InputUnitValueText>>(
        {
            unit: defaultValue?.unit,
            value: defaultValue?.value ? `${defaultValue?.value}` : undefined,
        },
        {
            onChangeDataAfter: (e) => {
                onChange?.({
                    unit: e.unit,
                    value: e.value ? parseNumber(e.value) : undefined,
                });
            },
        },
    );
    const value = useMemo(() => valueProps ?? data, [valueProps, data]);

    const parseValue = (va: string | number) => {
        const v = `${va}`.replace(/[^0-9.]/g, "");
        const nm = v.split(".");
        const first = `${nm[0]}`;
        let n_ = `${first}`;
        if (nm.length > 1) {
            nm[0] = "";
            n_ += `.${nm.join("")}`;
        }
        if (va[0] == "-") {
            n_ = "-" + n_;
        }
        return n_;
    };

    return (
        <>
            <InputTextSelect
                {...props}
                value={{
                    text: value.value
                        ? parseValue(`${value.value}`)
                        : undefined,
                    select: value.unit
                        ? {
                              id: value.unit,
                              text: parseUnitToText(value.unit),
                          }
                        : undefined,
                }}
                options={options.map((o) => {
                    return {
                        id: o,
                        text: parseUnitToText(o),
                    };
                })}
                onChange={(e) => {
                    setData({
                        unit: e.select?.id as Unit_All,
                        value: e.text,
                    });
                }}
            />
        </>
    );
};
