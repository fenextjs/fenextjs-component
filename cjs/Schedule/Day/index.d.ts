import React from "react";
import { InputDateRangeBaseProps, InputDateRangeClassProps, InputDateRangeValueType } from "../../Input/DateRange";
import { ButtonProps } from "../../Button";
import { _TProps } from "fenextjs-interface";
export type ScheduleDayValueType = InputDateRangeValueType[];
/**
 * Properties for the base ScheduleDay component.
 */
export interface ScheduleDayBaseProps extends Omit<InputDateRangeBaseProps, "value" | "onChange" | "defaultValue">, _TProps {
    /**
     * The default value of the input field.
     */
    defaultValue?: ScheduleDayValueType;
    /**
     * The current value of the input field.
     */
    value?: ScheduleDayValueType;
    /**
     * A callback function to handle changes to the input field.
     */
    onChange?: (v: ScheduleDayValueType) => void;
    /**
     * props of button of add item.
     */
    ButtonProps?: Omit<ButtonProps, "onClick">;
}
/**
 * Properties for the class of the ScheduleDay component.
 */
export interface ScheduleDayClassProps extends InputDateRangeClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ScheduleDay component.
 */
export interface ScheduleDayProps extends ScheduleDayBaseProps, ScheduleDayClassProps {
}
export declare const ScheduleDay: ({ className, defaultValue, value, onChange, propsStart, propsEnd, ButtonProps, ...props }: ScheduleDayProps) => React.JSX.Element;
