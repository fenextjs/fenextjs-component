import React, { useMemo, useState } from "react";

import { InputText, InputTextProps } from "../Text";

import { SvgNumberIncrease, SvgNumberDecrease } from "fenextjs-svg/cjs/Number";
import { SvgArrow } from "fenextjs-svg/cjs/Arrow";
import { FenextjsValidator } from "fenextjs-validator";
import { useValidator } from "fenextjs-hook/cjs/useValidator";
import { parseNumber } from "fenextjs-functions";

/**
 * Props for InputNumber component.
 */
export interface InputNumberProps
    extends Omit<
        InputTextProps,
        "defaultValue" | "onChange" | "onChangeValidate" | "value"
    > {
    /**
     * The default value of the input.
     * @default ""
     */
    value?: number | "";
    /**
     * The default value of the input.
     * @default ""
     */
    defaultValue?: number | "";
    /**
     * The callback function that is triggered when the value of the input changes.
     */
    onChange?: (v: number | "") => void;
    /**
     * The callback function that is triggered when the input loses focus, after the value has been validated.
     */
    onChangeValidate?: (v: number | "") => void;
    /**
     * The minimum value allowed for the input.
     */
    min?: number;
    /**
     * The maximum value allowed for the input.
     */
    max?: number;
    /**
     * The useBtnIncreaseDecrease show btn.
     */
    useBtnIncreaseDecrease?: boolean;
    /**
     * The disabledScroll.
     */
    disabledScroll?: boolean;
}

export const InputNumber = ({
    defaultValue = "",
    onChange,
    useBtnIncreaseDecrease = false,
    validator = undefined,
    value,
    disabledScroll = false,
    ...props
}: InputNumberProps) => {
    const [value_, setValue_] = useState<number | "">(defaultValue ?? "");

    const valueInput = useMemo(
        () => value ?? (value_ == "" ? defaultValue : value_),
        [value_, defaultValue, value],
    );

    const setValue = (v: number) => {
        setValue_(v);
        onChange?.(v);
    };

    const minMaxValue = (v: number) => {
        return Math.max(
            props.min ?? -Infinity,
            Math.min(props.max ?? Infinity, v),
        );
    };

    const valueToNumber = (v: string) => {
        try {
            v = `${v}`.replace?.(/[^\d-]/g, "");
            return parseFloat(v);
        } catch {
            return 0;
        }
    };

    const addValue = (add: number) => () => {
        if (props?.disabled) {
            return;
        }
        const Value = minMaxValue((valueInput == "" ? 0 : valueInput) + add);
        setValue(Value);
    };
    const { error: errorFenext } = useValidator({
        data:
            valueInput != undefined && valueInput != ""
                ? parseNumber(valueInput)
                : undefined,
        validator: validator ?? FenextjsValidator(),
    });

    return (
        <>
            <InputText
                {...props}
                type="number"
                value={`${valueInput ?? ""}`}
                className={`fenext-input-number ${props?.className}`}
                useLoader={false}
                error={errorFenext}
                onWheel={(e) => {
                    if (disabledScroll === true) {
                        e.target.blur();

                        e.stopPropagation();

                        setTimeout(() => {
                            e.target.focus();
                        }, 0);
                    }
                    props?.onWheel?.(e);
                }}
                icon={
                    <>
                        {useBtnIncreaseDecrease ? (
                            <>
                                <span
                                    onClick={addValue(1)}
                                    className={`fenext-input-number-icon-arrow fenext-input-number-icon-increase`}
                                >
                                    <SvgNumberIncrease />
                                </span>
                                <span
                                    onClick={addValue(-1)}
                                    className={`fenext-input-number-icon-arrow fenext-input-number-icon-decrease`}
                                >
                                    <SvgNumberDecrease />
                                </span>
                            </>
                        ) : (
                            <>
                                <div className="fenext-input-number-icon-arrow">
                                    <span
                                        onClick={addValue(1)}
                                        className={`fenext-input-number-icon-arrow-up`}
                                    >
                                        <SvgArrow />
                                    </span>
                                    <span
                                        onClick={addValue(-1)}
                                        className={`fenext-input-number-icon-arrow-down`}
                                    >
                                        <SvgArrow />
                                    </span>
                                </div>
                            </>
                        )}
                    </>
                }
                onChangeValidate={(v: string) => {
                    const v2 = minMaxValue(valueToNumber(v));
                    const s = props?.onChangeValidate?.(v2) ?? v2;
                    return `${s}`;
                }}
                onChange={(v: string) => {
                    setValue(minMaxValue(valueToNumber(v)));
                }}
            />
        </>
    );
};
