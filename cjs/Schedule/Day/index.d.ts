import React from "react";
import { InputDateRangeBaseProps, InputDateRangeClassProps, InputDateRangeValueType } from "../../Input/DateRange";
import { ButtonProps } from "../../Button";
import { _TProps } from "fenextjs-interface";
export type ScheduleDayValueType = InputDateRangeValueType[];
export interface ScheduleDayBaseProps extends Omit<InputDateRangeBaseProps, "value" | "onChange" | "defaultValue">, _TProps {
    defaultValue?: ScheduleDayValueType;
    value?: ScheduleDayValueType;
    onChange?: (v: ScheduleDayValueType) => void;
    ButtonProps?: Omit<ButtonProps, "onClick">;
}
export interface ScheduleDayClassProps extends InputDateRangeClassProps {
    className?: string;
}
export interface ScheduleDayProps extends ScheduleDayBaseProps, ScheduleDayClassProps {
}
export declare const ScheduleDay: ({ className, defaultValue, value, onChange, propsStart, propsEnd, ButtonProps, ...props }: ScheduleDayProps) => React.JSX.Element;
