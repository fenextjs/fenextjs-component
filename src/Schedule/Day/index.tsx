import React from "react";
import {
    InputDateRange,
    InputDateRangeBaseProps,
    InputDateRangeClassProps,
    InputDateRangeValueType,
} from "../../Input/DateRange";
import { useData } from "fenextjs-hook";
import { Close } from "fenextjs-svg/cjs/close";
import { Button, ButtonProps } from "../../Button";
import { _TProps } from "fenextjs-interface";

export type ScheduleDayValueType = InputDateRangeValueType[];
/**
 * Properties for the base ScheduleDay component.
 */
export interface ScheduleDayBaseProps
    extends Omit<
            InputDateRangeBaseProps,
            "value" | "onChange" | "defaultValue"
        >,
        _TProps {
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
export interface ScheduleDayProps
    extends ScheduleDayBaseProps,
        ScheduleDayClassProps {}

export const ScheduleDay = ({
    className = "",

    defaultValue = [[undefined, undefined]],
    value = undefined,
    onChange,

    propsStart = {
        label: "Start time",
        placeholder: "Start time",
    },
    propsEnd = {
        label: "Final hour",
        placeholder: "Final hour",
    },
    ButtonProps = {
        children: "Add Time Range",
    },
    _t,
    ...props
}: ScheduleDayProps) => {
    const { data, onChangeData, setData, onDeleteData } =
        useData<ScheduleDayValueType>(defaultValue, {
            onChangeDataAfter: onChange,
            onDeleteDataAfter: onChange,
            data: value,
        });

    const onAddTimeRange = () => {
        setData([...data, [undefined, undefined]]);
    };
    return (
        <>
            <div className={`fenext-schedule-day ${className} `}>
                <div className="fenext-schedule-day-content-date-range">
                    {data.map((e, i) => {
                        return (
                            <>
                                <div
                                    key={`${i}-${JSON.stringify(e)}`}
                                    className="fenext-schedule-day-date-range"
                                >
                                    <InputDateRange
                                        type="time"
                                        defaultValue={e}
                                        onChange={onChangeData(i)}
                                        propsStart={propsStart}
                                        propsEnd={propsEnd}
                                        {...props}
                                        _t={_t}
                                    />
                                    <div
                                        className="fenext-schedule-day-date-range-close"
                                        onClick={() => {
                                            onDeleteData(i);
                                        }}
                                    >
                                        <Close />
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="fenext-schedule-day-content-btn">
                    <Button {...ButtonProps} onClick={onAddTimeRange} _t={_t} />
                </div>
            </div>
        </>
    );
};
