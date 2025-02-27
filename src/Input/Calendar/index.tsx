import React, { useMemo, useState } from "react";
import { InputText, InputTextClassProps, InputTextProps } from "../Text";
import { SvgDate } from "fenextjs-svg/cjs/Date";
import { Collapse, CollapseProps } from "../../Collapse";
import { FenextjsDate } from "fenextjs-date";
import { useDate } from "fenextjs-hook/cjs/useDate";
import { useData, useValidator } from "fenextjs-hook";
import {
    InputCalendarMonth,
    InputCalendarMonthClassProps,
    InputCalendarMonthProps,
} from "./Month";

export interface InputCalendarClassProps {
    className?: string;
    classNameContentCalendar?: string;
    classNameInputText?: InputTextClassProps;
    classNameInputCalendarMonth?: InputCalendarMonthClassProps;
}

/**
 * All props for the InputCalendar component.
 */
export interface InputCalendarProps
    extends Pick<
            InputTextProps,
            | "label"
            | "placeholder"
            | "optional"
            | "optionalText"
            | "required"
            | "requiredText"
            | "icon"
            | "iconPos"
            | "validator"
            | "errorWithIsChange"
        >,
        Pick<InputCalendarMonthProps, "_t" | "type" | "min" | "max">,
        InputCalendarClassProps {
    defaultValue?: Date;
    value?: Date;
    defaultValueRange?: Date[];
    valueRange?: Date[];
    onChange?: (d: Date | undefined) => void;
    onChangeRange?: (d: Date[]) => void;
    nMonthShow?: number;

    collapseProps?: Omit<CollapseProps, "children" | "header">;
}

export const InputCalendar = ({
    nMonthShow = 1,
    icon = <SvgDate />,
    type = "normal",
    defaultValue,
    value,
    defaultValueRange,
    valueRange,
    onChange,
    onChangeRange,
    validator,
    errorWithIsChange = true,
    collapseProps = {},
    className = "",
    classNameContentCalendar = "",
    classNameInputText = {},
    classNameInputCalendarMonth = {},
    ...props
}: InputCalendarProps) => {
    const [isChange, setIsChange] = useState(!errorWithIsChange);
    const { data: dataSelectDate, setData: setSelectDate } = useData<
        Date | undefined
    >(defaultValue, {
        onChangeDataAfter: (e) => {
            setIsChange(true);
            onChange?.(e);
        },
    });
    const selectDate = useMemo(
        () => value ?? dataSelectDate,
        [value, dataSelectDate],
    );

    const [dataNSelect, setDataNSelect] = useState(true);
    const { data: dataSelectDateRange, setDataFunction: setSelectDateRange } =
        useData<Date[]>(defaultValueRange ?? [], {
            onChangeDataAfter: (e) => {
                setIsChange(true);
                onChangeRange?.(e);
            },
        });
    const selectDateRange = useMemo(
        () => valueRange ?? dataSelectDateRange,
        [valueRange, dataSelectDateRange],
    );

    const date = useDate({});

    const onPreMonth = () => {
        date.addMonth(-1);
    };

    const onNextMonth = () => {
        date.addMonth(1);
    };

    const { error: errorFenext } = useValidator({
        data: type == "normal" ? selectDate : selectDateRange,
        validator,
    });

    return (
        <>
            <div className={`fenext-input-calendar ${className}`}>
                <Collapse
                    {...collapseProps}
                    header={
                        <>
                            <InputText
                                {...props}
                                {...classNameInputText}
                                icon={icon}
                                value={
                                    type == "normal"
                                        ? `${selectDate ? date.onFormat({}, selectDate) : ""}`
                                        : `${
                                              selectDateRange &&
                                              selectDateRange.length == 2
                                                  ? `${date.onFormat({}, selectDateRange[0])} - ${date.onFormat({}, selectDateRange[1])}`
                                                  : ""
                                          }`
                                }
                                error={errorFenext}
                                errorWithIsChange={!isChange}
                            />
                        </>
                    }
                >
                    <div
                        className={`fenext-input-calendar-content fenext-input-calendar-content-${nMonthShow > 1 ? "multiple" : ""} ${classNameContentCalendar}`}
                    >
                        <InputCalendarMonth
                            {...classNameInputCalendarMonth}
                            _t={props?._t}
                            type={type}
                            dataNSelect={dataNSelect}
                            selectDate={selectDate}
                            selectDateRange={selectDateRange}
                            setDataNSelect={setDataNSelect}
                            setSelectDate={setSelectDate}
                            setSelectDateRange={setSelectDateRange}
                            date={date}
                            onNextMonth={onNextMonth}
                            onPreMonth={onPreMonth}
                            {...props}
                        />
                        {nMonthShow > 1 && (
                            <>
                                {new Array(nMonthShow - 1)
                                    .fill(1)
                                    .map((e, i) => {
                                        const n = e * i + 1;

                                        const d = new Date(date?.date ?? 0);
                                        d.setDate(1);
                                        d.setMonth(d.getMonth() + n);
                                        const dateN = new FenextjsDate({
                                            defaultDate: d,
                                        });

                                        return (
                                            <>
                                                <InputCalendarMonth
                                                    key={n}
                                                    {...classNameInputCalendarMonth}
                                                    _t={props?._t}
                                                    type={type}
                                                    dataNSelect={dataNSelect}
                                                    selectDate={selectDate}
                                                    selectDateRange={
                                                        selectDateRange
                                                    }
                                                    setDataNSelect={
                                                        setDataNSelect
                                                    }
                                                    setSelectDate={
                                                        setSelectDate
                                                    }
                                                    setSelectDateRange={
                                                        setSelectDateRange
                                                    }
                                                    date={dateN}
                                                    onNextMonth={onNextMonth}
                                                    onPreMonth={onPreMonth}
                                                    {...props}
                                                />
                                            </>
                                        );
                                    })}
                            </>
                        )}
                    </div>
                </Collapse>
            </div>
        </>
    );
};
