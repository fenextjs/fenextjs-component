import React, { ReactNode } from "react";
import { DaysEnum } from "fenextjs-interface/cjs/Date";
import { CollapseMultipleProps } from "../../Collapse/Multiple";
import { ScheduleDayValueType, ScheduleDayBaseProps } from "../Day";
import { _TProps } from "fenextjs-interface";
export type ScheduleWeeklyValueType = {
    [id in DaysEnum]?: ScheduleDayValueType;
};
/**
 * Properties for the base ScheduleWeekly component.
 */
export interface ScheduleWeeklyBaseProps extends Omit<ScheduleDayBaseProps, "value" | "onChange" | "defaultValue">, _TProps {
    /**
     * title of ScheduleWeekly.
     */
    title?: ReactNode;
    /**
     * The default value of the input field.
     */
    defaultValue?: ScheduleWeeklyValueType;
    /**
     * The current value of the input field.
     */
    value?: ScheduleWeeklyValueType;
    /**
     * A callback function to handle changes to the input field.
     */
    onChange?: (v: ScheduleWeeklyValueType) => void;
    /**
     * The CollapseMultipleProps of the input field.
     */
    CollapseMultipleProps?: Omit<CollapseMultipleProps, "items">;
    /**
     * A callback function to handle onParseHeaderDay.
     */
    onParseHeaderDay?: (v: DaysEnum) => ReactNode;
}
/**
 * Properties for the class of the ScheduleWeekly component.
 */
export interface ScheduleWeeklyClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the ScheduleWeekly component.
 */
export interface ScheduleWeeklyProps extends ScheduleWeeklyBaseProps, ScheduleWeeklyClassProps {
}
export declare const ScheduleWeekly: ({ title, className, defaultValue, value, onChange, CollapseMultipleProps, onParseHeaderDay, _t, ...props }: ScheduleWeeklyProps) => React.JSX.Element;
