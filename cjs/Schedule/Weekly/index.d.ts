import React, { ReactNode } from "react";
import { DaysEnum } from "fenextjs-interface/cjs/Day";
import { CollapseMultipleProps } from "../../Collapse/Multiple";
import { ScheduleDayValueType, ScheduleDayBaseProps } from "../Day";
import { _TProps } from "fenextjs-interface";
export type ScheduleWeeklyValueType = {
    [id in DaysEnum]?: ScheduleDayValueType;
};
export interface ScheduleWeeklyBaseProps extends Omit<ScheduleDayBaseProps, "value" | "onChange" | "defaultValue">, _TProps {
    title?: ReactNode;
    defaultValue?: ScheduleWeeklyValueType;
    value?: ScheduleWeeklyValueType;
    onChange?: (v: ScheduleWeeklyValueType) => void;
    CollapseMultipleProps?: Omit<CollapseMultipleProps, "items">;
    onParseHeaderDay?: (v: DaysEnum) => ReactNode;
}
export interface ScheduleWeeklyClassProps {
    className?: string;
}
export interface ScheduleWeeklyProps extends ScheduleWeeklyBaseProps, ScheduleWeeklyClassProps {
}
export declare const ScheduleWeekly: ({ title, className, defaultValue, value, onChange, CollapseMultipleProps, onParseHeaderDay, ...props }: ScheduleWeeklyProps) => React.JSX.Element;
