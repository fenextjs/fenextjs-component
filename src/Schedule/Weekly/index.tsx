import React, { ReactNode } from "react";
import { DaysEnum } from "fenextjs-interface/cjs/Date";
import {
    CollapseMultiple,
    CollapseMultipleProps,
} from "../../Collapse/Multiple";
import { Title } from "../../Title";
import {
    ScheduleDay,
    ScheduleDayValueType,
    ScheduleDayBaseProps,
} from "../Day";
import { useData } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type ScheduleWeeklyValueType = {
    [id in DaysEnum]?: ScheduleDayValueType;
};
/**
 * Properties for the base ScheduleWeekly component.
 */
export interface ScheduleWeeklyBaseProps
    extends Omit<ScheduleDayBaseProps, "value" | "onChange" | "defaultValue">,
        _TProps {
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
export interface ScheduleWeeklyProps
    extends ScheduleWeeklyBaseProps,
        ScheduleWeeklyClassProps {}

export const ScheduleWeekly = ({
    title = "Schedule Weekly",
    className = "",
    defaultValue = {},
    value = undefined,
    onChange,
    CollapseMultipleProps = {
        name: "schedule",
        type: "radio",
        defaultActive: 0,
    },
    onParseHeaderDay,

    ...props
}: ScheduleWeeklyProps) => {
    const { _t } = use_T({ ...props });
    const { data, onChangeData } = useData<ScheduleWeeklyValueType>(
        defaultValue,
        {
            onChangeDataAfter: onChange,
            data: value,
        },
    );

    return (
        <>
            <div className={`fenext-schedule-weekly ${className} `}>
                <Title tag="h4">{_t(title)}</Title>

                <CollapseMultiple
                    {...CollapseMultipleProps}
                    items={Object.keys(DaysEnum).map((e) => {
                        const day = e as DaysEnum;
                        return {
                            children: (
                                <>
                                    <ScheduleDay
                                        {...props}
                                        defaultValue={defaultValue?.[day]}
                                        value={data?.[day]}
                                        onChange={onChangeData(day)}
                                        _t={_t}
                                    />
                                </>
                            ),
                            header: (
                                <>
                                    {(onParseHeaderDay
                                        ? onParseHeaderDay(day)
                                        : day) ?? day}
                                </>
                            ),
                        };
                    })}
                />
            </div>
        </>
    );
};
