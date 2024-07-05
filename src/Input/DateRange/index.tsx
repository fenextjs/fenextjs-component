import React from "react";

import {
    InputDate,
    InputDateBaseProps,
    InputDateClassProps,
    InputDateValueType,
} from "../Date";
import { useData } from "fenextjs-hook/cjs/useData";
import { use_T } from "fenextjs-hook";

/**
 * Props for the InputDateValueType
 */
export type InputDateRangeValueType =
    | [InputDateValueType, InputDateValueType]
    | undefined;
/**
 * Props for the base InputDateRangeData component
 */
export interface InputDateRangeDataProps {
    /**
     * value of Date valueMin
     */
    valueMin?: Date;
    /**
     * value of Date valueMax
     */
    valueMax?: Date;
}

/**
 * Props for the base InputDateRange component
 */
export interface InputDateRangeElementBaseProps
    extends Omit<InputDateBaseProps, "value" | "onChange" | "defaultValue"> {}

/**
 * Props for the base InputDateRange component
 */
export interface InputDateRangeBaseProps
    extends InputDateRangeElementBaseProps {
    /**
     * The default value of the input field.
     */
    defaultValue?: InputDateRangeValueType;
    /**
     * The current value of the input field.
     */
    value?: InputDateRangeValueType;
    /**
     * A callback function to handle changes to the input field.
     */
    onChange?: (v: InputDateRangeValueType) => void;
    /**
     * Props of input date start.
     */
    propsStart?: InputDateRangeElementBaseProps;
    /**
     * Props of input date end.
     */
    propsEnd?: InputDateRangeElementBaseProps;
}

/**
 * Props for the InputDateRange component to customize CSS class names.
 */
export interface InputDateRangeClassProps extends InputDateClassProps {
    /**
     * The CSS class for the input date field.
     */
    classNameInputDateRange?: string;
    /**
     * The CSS class for the input date field.
     */
    classNameInputDateRangeContentInputDate?: string;
}

/**
 * All props for the InputDateRange component.
 */
export interface InputDateRangeProps
    extends InputDateRangeBaseProps,
        InputDateRangeClassProps {}

export const InputDateRange = ({
    classNameInputDateRange = "",
    classNameInputDateRangeContentInputDate = "",
    classNameLabel = "",

    label,
    min,
    max,

    defaultValue = undefined,
    value = undefined,
    onChange,
    optional = false,
    optionalText = "(optional)",
    required = false,
    requiredText = "*",

    propsStart = {},
    propsEnd = {},

    ...props
}: InputDateRangeProps) => {
    const { _t } = use_T({ ...props });
    const { dataMemo: data, onChangeData } = useData<
        InputDateRangeDataProps,
        InputDateRangeDataProps
    >(
        {
            valueMin: value?.[0] ?? defaultValue?.[0],
            valueMax: value?.[1] ?? defaultValue?.[1],
        },
        {
            onMemo: (d) => {
                return {
                    valueMin: value?.[0] ?? d.valueMin,
                    valueMax: value?.[1] ?? d.valueMax,
                };
            },
            onChangeDataAfter: (d) => {
                if (d) {
                    onChange?.([d?.valueMin, d?.valueMax]);
                }
            },
        },
    );
    return (
        <>
            <div
                className={`fenext-input-date-range ${classNameInputDateRange}`}
            >
                <div className={`fenext-input-label ${classNameLabel}`}>
                    {_t(label)}
                    {optional && (
                        <>
                            <small className="fenext-input-optional">
                                {_t(optionalText)}
                            </small>
                        </>
                    )}
                    {required && (
                        <>
                            <small className="fenext-input-required">
                                {_t(requiredText)}
                            </small>
                        </>
                    )}
                </div>
                <div
                    className={`fenext-input-date-range-content-input-date ${classNameInputDateRangeContentInputDate}`}
                >
                    <InputDate
                        {...props}
                        {...propsStart}
                        _t={_t}
                        min={min}
                        max={data?.valueMax ?? max}
                        onChange={onChangeData("valueMin")}
                        value={data.valueMin}
                    />
                </div>
                <div
                    className={`fenext-input-date-range-content-input-date ${classNameInputDateRangeContentInputDate}`}
                >
                    <InputDate
                        {...props}
                        {...propsEnd}
                        _t={_t}
                        max={max}
                        min={data?.valueMin ?? min}
                        onChange={onChangeData("valueMax")}
                        value={data.valueMax}
                    />
                </div>
            </div>
        </>
    );
};
