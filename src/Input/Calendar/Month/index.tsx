import { DaysEnum } from "fenextjs-interface";
import React from "react";
import { SvgPaginationNext, SvgPaginationPre } from "fenextjs-svg";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";
import { FenextjsDate } from "fenextjs-date";

export interface InputCalendarMonthClassProps {
    className?: string;
    classNameContent?: string;
    classNameTop?: string;
    classNameTopBtn?: string;
    classNameTopBtnPrev?: string;
    classNameTopBtnNext?: string;
    classNameTopInfo?: string;
    classNameDays?: string;
    classNameDay?: string;
    classNameDate?: string;
    classNameDateValid?: string;
    classNameDateDisabled?: string;
    classNameDateInMonth?: string;
    classNameDateOtherMonth?: string;
    classNameDateSelect?: string;
    classNameDateSelectRange?: string;
}

export interface InputCalendarMonthProps
    extends InputCalendarMonthClassProps,
        _TProps {
    type?: "normal" | "range";

    date?: FenextjsDate;
    onPreMonth?: () => void;
    onNextMonth?: () => void;

    selectDate: Date | undefined;
    selectDateRange: Date[];

    setSelectDate: (d: Date) => void;
    setSelectDateRange: (d: (d: Date[]) => Date[]) => void;

    dataNSelect: boolean;
    setDataNSelect: (d: (d: boolean) => boolean) => void;

    min?: Date;
    max?: Date;
}
export const InputCalendarMonth = ({
    type = "normal",

    onPreMonth,
    onNextMonth,
    date,
    selectDate,
    selectDateRange,
    setSelectDate,
    setSelectDateRange,
    dataNSelect,
    setDataNSelect,
    min,
    max,

    className = "",
    classNameContent = "",
    classNameTop = "",
    classNameTopBtn = "",
    classNameTopBtnPrev = "",
    classNameTopBtnNext = "",
    classNameTopInfo = "",
    classNameDays = "",
    classNameDay = "",
    classNameDate = "",
    classNameDateValid = "",
    classNameDateDisabled = "",
    classNameDateInMonth = "",
    classNameDateOtherMonth = "",
    classNameDateSelect = "",
    classNameDateSelectRange = "",

    ...props
}: InputCalendarMonthProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div className={`fenext-input-calendar-month ${className}`}>
                <div
                    className={`fenext-input-calendar-month-content ${classNameContent}`}
                >
                    <div
                        className={`fenext-input-calendar-top ${classNameTop}`}
                    >
                        <button
                            className={`fenext-input-calendar-btn ${classNameTopBtn} ${classNameTopBtnPrev}`}
                            onClick={onPreMonth}
                        >
                            <SvgPaginationPre />
                        </button>
                        <div
                            className={`fenext-input-calendar-top-info ${classNameTopInfo}`}
                        >
                            {date?.onFormat({
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                        <button
                            className={`fenext-input-calendar-btn ${classNameTopBtn} ${classNameTopBtnNext}`}
                            onClick={onNextMonth}
                        >
                            <SvgPaginationNext />
                        </button>
                    </div>
                    <div
                        className={`fenext-input-calendar-days ${classNameDays}`}
                    >
                        {[
                            DaysEnum.Sunday,
                            DaysEnum.Monday,
                            DaysEnum.Tuesday,
                            DaysEnum.Wednesday,
                            DaysEnum.Thursday,
                            DaysEnum.Friday,
                            DaysEnum.Saturday,
                        ].map((day, i) => {
                            return (
                                <>
                                    <div
                                        key={i}
                                        data-day={day}
                                        className={`fenext-input-calendar-day ${classNameDay}`}
                                    >
                                        {_t(day)[0]}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    {date?.onGenerateDateByCalendar()?.map((d, i) => {
                        const isValid = date?.onValidateMinMax({
                            date: d,
                            max,
                            min,
                        });

                        const COMPARE_DATE = date.onCompareDate({
                            date: selectDate,
                            dateCompare: d,
                            compare: {
                                Date: true,
                                Month: true,
                                FullYear: true,
                            },
                        });
                        COMPARE_DATE["=="] =
                            selectDate != undefined && COMPARE_DATE["=="];

                        const COMPARE_DATE_RANGE_0 = date.onCompareDate({
                            date: d,
                            dateCompare: selectDateRange[0],
                            compare: {
                                Date: true,
                                Month: true,
                                FullYear: true,
                            },
                        });
                        const COMPARE_DATE_RANGE_1 = date.onCompareDate({
                            date: d,
                            dateCompare: selectDateRange[1],
                            compare: {
                                Date: true,
                                Month: true,
                                FullYear: true,
                            },
                        });
                        return (
                            <>
                                <div
                                    key={i}
                                    data-date={d.getDate()}
                                    data-month={d.getMonth() + 1}
                                    data-year={d.getFullYear()}
                                    onClick={() => {
                                        if (!isValid) {
                                            return;
                                        }
                                        if (type == "normal") {
                                            setSelectDate(d);
                                        }
                                        if (type == "range") {
                                            if (dataNSelect) {
                                                setSelectDateRange(() => {
                                                    return [d];
                                                });
                                            } else {
                                                setSelectDateRange((old) => {
                                                    return [...old, d].sort(
                                                        (a, b) =>
                                                            a.getTime() -
                                                            b.getTime(),
                                                    );
                                                });
                                            }

                                            setDataNSelect((e) => !e);
                                        }
                                    }}
                                    className={`
                                        fenext-input-calendar-date
                                        fenext-input-calendar-date-${isValid ? `valid ${classNameDateValid}` : `disabled ${classNameDateDisabled}`}
                                        fenext-input-calendar-date-${d.getMonth() == date.date.getMonth() ? `in-month ${classNameDateInMonth}` : `other-month ${classNameDateOtherMonth}`}
                                        fenext-input-calendar-date-${type == "normal" && COMPARE_DATE["=="] ? `select ${classNameDateSelect}` : ""}
                                        fenext-input-calendar-date-${type == "range" && COMPARE_DATE_RANGE_0["=="] ? `select ${classNameDateSelect}` : ""}
                                        fenext-input-calendar-date-${type == "range" && COMPARE_DATE_RANGE_0[">"] && COMPARE_DATE_RANGE_1["<"] ? `select-range ${classNameDateSelectRange}` : ""}
                                        fenext-input-calendar-date-${type == "range" && COMPARE_DATE_RANGE_1["=="] ? `select ${classNameDateSelect}` : ""}

                                        ${classNameDate}
                                    `}
                                >
                                    {d?.getDate()}
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
