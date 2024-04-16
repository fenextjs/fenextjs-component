import { DaysEnum } from "fenextjs-interface";
import React, { useMemo } from "react";
import { InputText, InputTextProps } from "../Text";
import { Date } from "fenextjs-svg/cjs/Date";
import { Collapse } from "@/Collapse";
import { FenextjsDate } from "fenextjs-date";
import { PaginationNext, PaginationPre } from "fenextjs-svg";

/**
 * All props for the InputCalendar component.
 */
export interface InputCalendarProps
    extends Pick<
        InputTextProps,
        | "label"
        | "placeholder"
        | "_t"
        | "optional"
        | "optionalText"
        | "required"
        | "requiredText"
        | "icon"
        | "iconPos"
    > {}

export const InputCalendar = ({
    icon = <Date />,
    ...props
}: InputCalendarProps) => {
    const date = new FenextjsDate();

    const onPreMonth = () => {
        date.addMonth(-1);
    };

    const onNextMonth = () => {
        date.addMonth(1);
    };

    const getMonthCalendar = (DATE?: Date) => {
        return (
            <>
                <div className={`fenext-input-calendar-month`}>
                    <div className={`fenext-input-calendar-top`}>
                        <div
                            className={`fenext-input-calendar-btn`}
                            onClick={onPreMonth}
                        >
                            <PaginationPre />
                        </div>
                        <div className={`fenext-input-calendar-top-info`}>
                            {date?.onFormat({
                                month: "long",
                            })}
                        </div>
                        <div
                            className={`fenext-input-calendar-btn`}
                            onClick={onNextMonth}
                        >
                            <PaginationNext />
                        </div>
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
                                        {(props?._t?.(day) ?? day)[0]}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    {date.onGenerateDateByCalendar(DATE)?.map((d, i) => {
                        return (
                            <>
                                <div
                                    key={i}
                                    data-date={d.getDate()}
                                    data-month={d.getMonth() + 1}
                                    data-year={d.getFullYear()}
                                    className={`fenext-input-calendar-date`}
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

    const CalendarMonth = useMemo(() => {
        return <>{getMonthCalendar(date)}</>;
    }, [date]);
    return (
        <>
            <div className={`fenext-input-calendar`}>
                <Collapse
                    header={
                        <>
                            <InputText {...props} icon={icon} />
                        </>
                    }
                >
                    <div className={`fenext-input-calendar-content`}>
                        {date?.toISOString()}
                        {CalendarMonth}
                    </div>
                </Collapse>
            </div>
        </>
    );
};
