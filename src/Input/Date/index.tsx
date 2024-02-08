import React, { useMemo, useState } from "react";

import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { TypeDate } from "fenextjs-interface/cjs/Date";
import { Date as SVGDate } from "fenextjs-svg/cjs/Date";
import {
    parseDateToText,
    parseTextToDate,
    getMonthValue,
    getWeekValue,
    getTimeValue,
} from "fenextjs-functions/cjs/parse/Date";
import { parseNumberCount } from "fenextjs-functions";
import { useData, useValidator } from "fenextjs-hook";
import { FenextjsValidator } from "fenextjs-validator";
/**
 * Props for the InputDateValueType
 */
export type InputDateValueType = Date | undefined;
/**
 * Props for the base InputDate component
 */
export interface InputDateBaseProps
    extends Omit<
        InputTextBaseProps,
        "type" | "value" | "onChange" | "defaultValue"
    > {
    /**
     * The type of the input field. Should be 'date'.
     */
    type?: TypeDate;
    /**
     * The default value of the input field.
     */
    defaultValue?: InputDateValueType;
    /**
     * The current value of the input field.
     */
    value?: InputDateValueType;
    /**
     * The min Date valid.
     */
    min?: InputDateValueType;
    /**
     * The max Date valid.
     */
    max?: InputDateValueType;
    /**
     * A callback function to handle changes to the input field.
     */
    onChange?: (v: InputDateValueType) => void;
}

/**
 * Props for the InputDate component to customize CSS class names.
 */
export interface InputDateClassProps extends InputTextClassProps {
    /**
     * The CSS class for the input date field.
     */
    classNameInputDate?: string;
}

/**
 * All props for the InputDate component.
 */
export interface InputDateProps
    extends InputDateBaseProps,
        InputDateClassProps {}

export const InputDate = ({
    classNameInputDate = "",

    type = "date",
    defaultValue = undefined,
    value = undefined,
    min = undefined,
    max = undefined,
    onChange,
    icon = <SVGDate />,
    iconPos = "left",
    validator,
    ...props
}: InputDateProps) => {
    const uuid = useMemo(() => new Date().getTime(), []);
    const { data, setData, isChange } = useData<Date | undefined>(defaultValue);
    const d = useMemo(
        () =>
            `${
                defaultValue
                    ? parseDateToText({ date: defaultValue, type })
                    : ""
            }`,
        [defaultValue],
    );
    const [valueString, setValueString] = useState(d);

    const changeInput = (e: any) => {
        const text = e.target.value;
        if (text == "") {
            setValueString("");
            onChange?.(undefined);
            return;
        }

        const nDate = parseTextToDate({
            text,
            type,
        });
        setData(nDate);
        const nText = parseDateToText({ date: nDate, type });

        setValueString(nText);
        onChange?.(nDate);
    };

    const MIN = useMemo(() => {
        if (!min) {
            return undefined;
        }
        if (type == "month") {
            return getMonthValue(min);
        }
        if (type == "week") {
            return getWeekValue(min);
        }
        if (type == "time") {
            return getTimeValue(min);
        }
        return min?.toISOString?.().split?.("T")?.[0];
    }, [min, type]);
    const MAX = useMemo(() => {
        if (!max) {
            return undefined;
        }
        if (type == "month") {
            return getMonthValue(max);
        }
        if (type == "week") {
            return getWeekValue(max);
        }
        if (type == "time") {
            return getTimeValue(max);
        }
        return max?.toISOString?.().split?.("T")?.[0];
    }, [max, type]);
    const DATALIST = useMemo(() => {
        if (type == "time") {
            return (
                <>
                    <datalist id={`input-date-${uuid}`}>
                        {new Array(24).fill(1).map((e, i) => {
                            const h = parseNumberCount(e * i, {
                                minimumIntegerDigits: 2,
                            });
                            return (
                                <>
                                    {new Array(60).fill(1).map((l, j) => {
                                        const m = parseNumberCount(l * j, {
                                            minimumIntegerDigits: 2,
                                        });
                                        return (
                                            <>
                                                <option value={`${h}:${m}`} />
                                            </>
                                        );
                                    })}
                                </>
                            );
                        })}
                    </datalist>
                </>
            );
        }
        return <></>;
    }, [uuid, type]);

    const { error: errorFenext } = useValidator({
        data: data,
        validator: validator ?? FenextjsValidator(),
    });

    return (
        <InputText
            {...props}
            defaultValue={""}
            value={value ? parseDateToText({ date: value, type }) : valueString}
            onChange={() => 1}
            extraInContentInput={
                <>
                    <input
                        type={type}
                        onChange={changeInput}
                        className={`fenext-input-date ${classNameInputDate}`}
                        min={MIN}
                        max={MAX}
                        list={`input-date-${uuid}`}
                    />
                    {DATALIST}
                </>
            }
            iconPos={iconPos}
            icon={<span className={`fenext-input-date-icon `}>{icon}</span>}
            validator={undefined}
            error={errorFenext}
            isChange={isChange}
        />
    );
};
