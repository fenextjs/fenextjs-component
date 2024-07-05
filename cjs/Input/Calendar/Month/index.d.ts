import React from "react";
import { _TProps } from "fenextjs-interface";
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
export declare const InputCalendarMonth: ({ type, onPreMonth, onNextMonth, date, selectDate, selectDateRange, setSelectDate, setSelectDateRange, dataNSelect, setDataNSelect, ...props }: InputCalendarMonthProps) => React.JSX.Element;
