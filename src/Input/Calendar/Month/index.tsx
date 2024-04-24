import { DaysEnum } from "fenextjs-interface";
import React from "react";
import { PaginationNext, PaginationPre } from "fenextjs-svg";
import { _TProps } from "fenextjs-interface";
import { _tValidate } from "fenextjs-functions";
import { FenextjsDate } from "fenextjs-date";

export interface InputCalendarMonthProps extends _TProps {
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
}
export const InputCalendarMonth = ({
    type = "normal",
    _t,
    onPreMonth,
    onNextMonth,
    date,
    selectDate,
    selectDateRange,
    setSelectDate,
    setSelectDateRange,
    dataNSelect,
    setDataNSelect,
}: InputCalendarMonthProps) => {
    return (
        <>
            <div className={`fenext-input-calendar-month`}>
                <div className={`fenext-input-calendar-top`}>
                    <button
                        className={`fenext-input-calendar-btn`}
                        onClick={onPreMonth}
                    >
                        <PaginationPre />
                    </button>
                    <div className={`fenext-input-calendar-top-info`}>
                        {date?.onFormat({
                            month: "long",
                            year: "numeric",
                        })}
                    </div>
                    <button
                        className={`fenext-input-calendar-btn`}
                        onClick={onNextMonth}
                    >
                        <PaginationNext />
                    </button>
                </div>
                <div className={`fenext-input-calendar-days`}>
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
                                    className={`fenext-input-calendar-day`}
                                >
                                    {_tValidate(day, _t)[0]}
                                </div>
                            </>
                        );
                    })}
                </div>
                {date?.onGenerateDateByCalendar()?.map((d, i) => {
                    return (
                        <>
                            <div
                                key={i}
                                data-date={d.getDate()}
                                data-month={d.getMonth() + 1}
                                data-year={d.getFullYear()}
                                onClick={() => {
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
                                fenext-input-calendar-date-${d.getMonth() == date.date.getMonth() ? "in-month" : "other-month"}
                                fenext-input-calendar-date-${type == "normal" && d.getTime() == selectDate?.getTime() ? "select" : ""}
                                fenext-input-calendar-date-${type == "range" && d.getTime() == selectDateRange[0]?.getTime() ? "select" : ""}
                                fenext-input-calendar-date-${type == "range" && d.getTime() > selectDateRange[0]?.getTime() && d.getTime() < selectDateRange[1]?.getTime() ? "select-range" : ""}
                                fenext-input-calendar-date-${type == "range" && d.getTime() == selectDateRange[1]?.getTime() ? "select" : ""}
                            `}
                            >
                                {d?.getDate()}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};
