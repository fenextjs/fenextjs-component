import React, { useMemo } from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { useData } from "fenextjs-hook/cjs/useData";
import { parseNumberCount } from "fenextjs-functions/cjs/parse/NumberCount";
import { parseNumber } from "fenextjs-functions/cjs/parse/Number";
import { useValidator } from "fenextjs-hook";
import { FenextjsValidator, FenextjsValidatorClass } from "fenextjs-validator";
/**
 * Interface that defines CSS class properties for a text input component.
 */
export interface InputNumberCountClassProps extends InputTextClassProps {}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputNumberCountBaseProps
    extends Omit<
        InputTextBaseProps,
        | "type"
        | "defaultValue"
        | "onChange"
        | "onChangeValidate"
        | "value"
        | "validator"
    > {
    /**
     * symbol of money in de Init, default $.
     */
    symbolInit?: string;
    /**
     * symbol of money in the final.
     */
    symbolFinal?: string;
    /**
     * The default value of the input.
     * @default ""
     */
    defaultValue?: number | "";
    /**
     * The value of the input.
     * @default undefined
     */
    value?: number | "";
    /**
     * The callback function that is triggered when the value of the input changes.
     */
    onChange?: (v: number | "") => void;
    /**
     * The minimum value allowed for the input.
     */
    min?: number;
    /**
     * The maximum value allowed for the input.
     */
    max?: number;
    /**
     * The minimum value allowed for the input.
     */
    aplyMin?: boolean;
    /**
     * The maximum value allowed for the input.
     */
    aplyMax?: boolean;
    /**
     * The minimum value allowed for the input.
     */
    minError?: string;
    /**
     * The maximum value allowed for the input.
     */
    maxError?: string;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass<number>;
    /**
     * optionsParseNumber used for input validation.
     */
    optionsParseNumber?: Intl.NumberFormatOptions;
}
/**
 * Props interface for the InputNumberCount component. Extends both InputNumberCountBaseProps and InputNumberCountClassProps interfaces.
 */
export interface InputNumberCountProps
    extends InputNumberCountBaseProps,
        InputNumberCountClassProps {}

export const InputNumberCount = ({
    onChange,
    value: valueProps = undefined,
    defaultValue,

    symbolInit = "$",
    symbolFinal = "",

    validator: validatorProps = undefined,
    min = -Infinity,
    max = Infinity,
    minError,
    maxError,
    optionsParseNumber,
    aplyMax = true,
    aplyMin = false,

    ...props
}: InputNumberCountProps) => {
    const { data, setDataFunction, isChange } = useData<string>(
        `${defaultValue ?? ""}`,
        {
            onChangeDataAfter: (e) => {
                if (e == "") {
                    onChange?.("");
                    return;
                }
                onChange?.(parseNumber(e));
            },
        },
    );
    const value = useMemo(() => valueProps ?? data, [valueProps, data]);

    const validator = useMemo(() => {
        const v = validatorProps ?? FenextjsValidator().isNumber();
        if (!validatorProps) {
            v.isMinOrEqual(min, minError).isMaxOrEqual(max, maxError);
        }
        return v;
    }, [validatorProps, min, max]);

    const { error: errorFenext } = useValidator({
        data: parseNumber(value),
        validator: validator,
    });

    const dataText = useMemo(() => {
        const d = `${value}`;
        if (d == "") {
            return "";
        }
        const n = parseNumberCount(d, optionsParseNumber);
        return `${symbolInit}${n}${d.at(-1) == "." ? "." : symbolFinal}`;
    }, [symbolInit, symbolFinal, value, optionsParseNumber]);

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        props?.onKeyDown?.(event);
        const keyNew = event?.key;

        setDataFunction((old) => {
            let n = `${old}${keyNew}`.replace(/[^0-9.-]/g, "");
            if (keyNew == "Backspace") {
                n = n.slice(0, n.length - 1);
            }
            if (keyNew == "ArrowUp") {
                n = `${parseNumber(n) + 1}`;
            }
            if (keyNew == "ArrowDown") {
                n = `${parseNumber(n) - 1}`;
            }
            if (aplyMax && max != undefined) {
                n = `${Math.min(max, parseNumber(n))}`;
            }
            if (aplyMin && min != undefined) {
                n = `${Math.max(min, parseNumber(n))}`;
            }
            return n;
        });
    };

    return (
        <>
            <InputText
                {...props}
                className={`fenext-input-number-count ${props?.className ?? ""}`}
                // onChange={onChangeNumber}
                type="text"
                value={dataText}
                isChange={isChange}
                onKeyDown={onKeyDown as any}
                validator={undefined}
                error={errorFenext}
                inputMode="numeric"
            />
        </>
    );
};
