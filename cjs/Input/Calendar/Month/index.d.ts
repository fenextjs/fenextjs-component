import React from "react";
import { _TProps } from "fenextjs-interface";
import { FenextjsDate } from "./test";
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
export interface InputCalendarMonthProps extends InputCalendarMonthClassProps, _TProps {
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
export declare const InputCalendarMonth: ({ type, onPreMonth, onNextMonth, date, selectDate, selectDateRange, setSelectDate, setSelectDateRange, dataNSelect, setDataNSelect, min, max, className, classNameContent, classNameTop, classNameTopBtn, classNameTopBtnPrev, classNameTopBtnNext, classNameTopInfo, classNameDays, classNameDay, classNameDate, classNameDateValid, classNameDateDisabled, classNameDateInMonth, classNameDateOtherMonth, classNameDateSelect, classNameDateSelectRange, ...props }: InputCalendarMonthProps) => React.JSX.Element;
