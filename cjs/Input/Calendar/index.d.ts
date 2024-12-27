import React from "react";
import { InputTextClassProps, InputTextProps } from "../Text";
import { CollapseProps } from "../../Collapse";
import { InputCalendarMonthClassProps, InputCalendarMonthProps } from "./Month";
export interface InputCalendarProps extends Pick<InputTextProps, "label" | "placeholder" | "optional" | "optionalText" | "required" | "requiredText" | "icon" | "iconPos" | "validator" | "errorWithIsChange">, Pick<InputCalendarMonthProps, "_t" | "type" | "min" | "max"> {
    defaultValue?: Date;
    value?: Date;
    defaultValueRange?: Date[];
    valueRange?: Date[];
    onChange?: (d: Date | undefined) => void;
    onChangeRange?: (d: Date[]) => void;
    nMonthShow?: number;
    collapseProps?: Omit<CollapseProps, "children" | "header">;
    className?: string;
    classNameContentCalendar?: string;
    classNameInputText?: InputTextClassProps;
    classNameInputCalendarMonth?: InputCalendarMonthClassProps;
}
export declare const InputCalendar: ({ nMonthShow, icon, type, defaultValue, value, defaultValueRange, valueRange, onChange, onChangeRange, validator, errorWithIsChange, collapseProps, className, classNameContentCalendar, classNameInputText, classNameInputCalendarMonth, ...props }: InputCalendarProps) => React.JSX.Element;
