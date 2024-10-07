import { useData } from "fenextjs-hook/cjs/useData";
import React, { useMemo } from "react";

/**
 * Properties for the config InputRange component.
 */
export interface InputRangeConfigProps {
    min: number;
    max: number;
    value: number;
    center: number;
}
/**
 * Properties for the base InputRange component.
 */
export interface InputRangeBaseProps {
    /**
     * The value of the input.
     * @default 0
     */
    value?: number;
    /**
     * The valueMin of the input.
     * @default -100
     */
    valueMin?: number;
    /**
     * The valueMax of the input.
     * @default 100
     */
    valueMax?: number;
    /**
     * The default value of the input.
     * @default 0
     */
    defaultValue?: number;
    /**
     * The default value of the input.
     * @default -100
     */
    defaultValueMin?: number;
    /**
     * The default value of the input.
     * @default 100
     */
    defaultValueMax?: number;
    /**
     * The callback function that is triggered when the value of the input changes.
     */
    onChange?: (v: number) => void;
    /**
     * use range min value and max.
     * @default false
     */
    useRange?: boolean;
    /**
     * The callback function that is triggered when the value range of the input changes.
     */
    onChangeRange?: (v: [number, number]) => void;
    /**
     * The minimum value allowed for the input.
     * @default -100
     */
    min?: number;
    /**
     * The maximum value allowed for the input.
     * @default 100
     */
    max?: number;
    /**
     * The step value allowed for the input.
     * @default 1
     */
    step?: number;
    /**
     * The position show Number.
     * @default "top"
     */
    showNumber?: "top" | "bottom" | "none";
}

/**
 * Properties for the class of the InputRange component.
 */
export interface InputRangeClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component content range.
     */
    classNameContentRange?: string;
    /**
     * The class name for the component min.
     */
    classNameMin?: string;
    /**
     * The class name for the component max.
     */
    classNameMax?: string;
    /**
     * The class name for the component current.
     */
    classNameCurrent?: string;
    /**
     * The class name for the component content value.
     */
    classNameContentValue?: string;
    /**
     * The class name for the component value.
     */
    classNameValue?: string;
    /**
     * The class name for the component value min.
     */
    classNameValueMin?: string;
    /**
     * The class name for the component value max.
     */
    classNameValueMax?: string;
    /**
     * The class name for the component content Circle.
     */
    classNameContentCircle?: string;
    /**
     * The class name for the component Circle.
     */
    classNameCircle?: string;
    /**
     * The class name for the component Line.
     */
    classNameLine?: string;
}

/**
 * Properties for the InputRange component.
 */
export interface InputRangeProps
    extends InputRangeBaseProps,
        InputRangeClassProps {}

export const InputRange = ({
    className = "",
    classNameContentValue = "",
    classNameValue = "",
    classNameValueMax = "",
    classNameValueMin = "",
    classNameContentRange = "",
    classNameCurrent = "",
    classNameMax = "",
    classNameMin = "",
    classNameContentCircle = "",
    classNameCircle = "",
    classNameLine = "",

    min = -100,
    max = 100,
    defaultValue = 0,
    defaultValueMin = -100,
    defaultValueMax = 100,
    value = undefined,
    valueMin = undefined,
    valueMax = undefined,
    onChange,
    onChangeRange,
    useRange = false,
    step = 1,
    showNumber = "top",
}: InputRangeProps) => {
    const onParceData = (d: InputRangeConfigProps): InputRangeConfigProps => {
        const _max =  valueMax ?? d.max;
        const _min =  valueMin ?? d.min;
        const _value =  value ?? d.value;
        return {
            ...d,
            center: (_max - _min) / 2 + _min,
            value: _value,
            min: Math.min(_min , _max - step),
            max: Math.max(_min + step, _max),
        };
    };

    const { dataMemo: _data, onChangeData } = useData<
        InputRangeConfigProps,
        InputRangeConfigProps
    >(
        {
            min: defaultValueMin,
            max: defaultValueMax,
            value: defaultValue,
            center: (defaultValueMax - defaultValueMin) / 2 + defaultValueMin,
        },
        {
            onChangeDataMemoAfter: (d: InputRangeConfigProps) => {
                onChange?.(d.value);
                onChangeRange?.([d.min, d.max]);
            },
            onMemo: onParceData,
        },
    );
    const data = useMemo(
        () => onParceData(_data),
        [_data, value, valueMax, valueMin, step],
    );
    const onChangeItem =
        (id: keyof InputRangeConfigProps) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeData(id)(parseFloat(event.target.value));
        };
    return (
        <>
            <div
                className={`fenext-input-range ${className} ${
                    useRange ? "range" : ""
                } 
                fenext-input-range-show-number-${showNumber}
                `}
                style={
                    {
                        ["--line"]: max - min,
                        ["--min"]: min,
                        ["--max"]: max,
                        ["--minValue"]: data.min,
                        ["--maxValue"]: data.max,
                        ["--value"]: data.value,
                        ["--center"]: data.center,
                        ["--step"]: step,
                        ["--minP"]: `${
                            ((data.min - min) / (max - min)) * 100
                        }%`,
                        ["--maxP"]: `${
                            ((max - data.max) / (max - min)) * 100
                        }%`,
                        ["--valueP"]: `${
                            ((data.value - min) / (max - min)) * 100
                        }%`,
                        ["--centerP"]: `${
                            ((data.center - min) / (max - min)) * 100
                        }%`,
                    } as React.CSSProperties
                }
            >
                <div
                    className={`fenext-input-range-content-value ${classNameContentValue}    `}
                >
                    <div
                        className={`fenext-input-range-value fenext-input-range-value-min ${classNameValueMin}    `}
                    >
                        {data.min}
                    </div>
                    <div
                        className={`fenext-input-range-value-arrow fenext-input-range-value-min ${classNameValueMin}    `}
                    ></div>
                    <div
                        className={`fenext-input-range-value fenext-input-range-value-current ${classNameValue}    `}
                    >
                        {data.value}
                    </div>
                    <div
                        className={`fenext-input-range-value-arrow fenext-input-range-value-current ${classNameValue}    `}
                    ></div>
                    <div
                        className={`fenext-input-range-value fenext-input-range-value-max ${classNameValueMax}    `}
                    >
                        {data.max}
                    </div>
                    <div
                        className={`fenext-input-range-value-arrow fenext-input-range-value-max ${classNameValueMax}    `}
                    ></div>
                </div>
                <div
                    className={`fenext-input-range-content-circle ${classNameContentCircle}    `}
                >
                    <div
                        className={`fenext-input-range-line ${classNameLine}    `}
                    ></div>
                    <div
                        className={`fenext-input-range-circle fenext-input-range-circle-min ${classNameCircle}    `}
                    ></div>
                    <div
                        className={`fenext-input-range-circle fenext-input-range-circle-current ${classNameCircle}    `}
                    ></div>
                    <div
                        className={`fenext-input-range-circle fenext-input-range-circle-max ${classNameCircle}    `}
                    ></div>
                </div>
                <div
                    className={`fenext-input-range-content-range ${classNameContentRange}    `}
                >
                    <input
                        type="range"
                        className={`fenext-input-range-item fenext-input-range-min ${classNameMin} `}
                        min={min}
                        max={max - step}
                        value={data.min}
                        onChange={onChangeItem("min")}
                        step={step}
                    />
                    <input
                        type="range"
                        className={`fenext-input-range-item fenext-input-range-current ${classNameCurrent} `}
                        min={min}
                        max={max}
                        value={data.value}
                        onChange={onChangeItem("value")}
                        step={step}
                    />
                    <input
                        type="range"
                        className={`fenext-input-range-item fenext-input-range-max ${classNameMax} `}
                        min={min + step}
                        max={max}
                        value={data.max}
                        onChange={onChangeItem("max")}
                        step={step}
                    />
                </div>
            </div>
        </>
    );
};
