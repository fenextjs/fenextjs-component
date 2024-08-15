import React from "react";
import { InputTextProps } from "../Text";
import { InputCalendarMonthProps } from "./Month";
export interface InputCalendarProps extends Pick<InputTextProps, "label" | "placeholder" | "optional" | "optionalText" | "required" | "requiredText" | "icon" | "iconPos">, Pick<InputCalendarMonthProps, "_t" | "type"> {
    defaultValue?: Date;
    value?: Date;
    defaultValueRange?: Date[];
    valueRange?: Date[];
    onChange?: (d: Date | undefined) => void;
    onChangeRange?: (d: Date[]) => void;
    nMonthShow?: number;
}
export declare const InputCalendar: ({ nMonthShow, icon, type, defaultValue, value, defaultValueRange, valueRange, onChange, onChangeRange, ...props }: InputCalendarProps) => React.JSX.Element;
