import React, { useMemo, useState } from "react";

import { InputText, InputTextProps } from "../Text";

import { SVGNumberIncrease, SVGNumberDecrease } from "fenextjs-svg/cjs/Number";
import SVGArrowCollapse from "fenextjs-svg/cjs/arrowCollapse";
import { FenextjsValidator } from "fenextjs-validator";
import { useValidator } from "fenextjs-hook/cjs/useValidator";

/**
 * Props for InputNumber component.
 */
export interface InputNumberProps
    extends Omit<
        InputTextProps,
        "defaultValue" | "onChange" | "onChangeValidate"
    > {
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
}

export const InputNumber = ({
    defaultValue = "",
    onChange,
    useBtnIncreaseDecrease = false,
    validator = undefined,
    ...props
}: InputNumberProps) => {
    const [value, setValue_] = useState<number | "">(defaultValue ?? "");

    const valueInput = useMemo(
        () => (value == "" ? defaultValue : value),
        [value, defaultValue],
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
        data: valueInput,
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
                icon={
                    <>
                        {useBtnIncreaseDecrease ? (
                            <>
                                <span
                                    onClick={addValue(1)}
                                    className={`fenext-input-number-icon-arrow fenext-input-number-icon-increase`}
                                >
                                    <SVGNumberIncrease />
                                </span>
                                <span
                                    onClick={addValue(-1)}
                                    className={`fenext-input-number-icon-arrow fenext-input-number-icon-decrease`}
                                >
                                    <SVGNumberDecrease />
                                </span>
                            </>
                        ) : (
                            <>
                                <div className="fenext-input-number-icon-arrow">
                                    <span
                                        onClick={addValue(1)}
                                        className={`fenext-input-number-icon-arrow-up`}
                                    >
                                        <SVGArrowCollapse />
                                    </span>
                                    <span
                                        onClick={addValue(-1)}
                                        className={`fenext-input-number-icon-arrow-down`}
                                    >
                                        <SVGArrowCollapse />
                                    </span>
                                </div>
                            </>
                        )}
                    </>
                }
                onChangeValidate={(v: string) => {
                    const value = minMaxValue(valueToNumber(v));
                    const s = props?.onChangeValidate?.(value) ?? value;
                    return `${s}`;
                }}
                onChange={(v: string) => {
                    setValue(minMaxValue(valueToNumber(v)));
                }}
            />
        </>
    );
};
