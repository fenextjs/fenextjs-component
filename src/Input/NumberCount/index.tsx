import React from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { useData } from "fenextjs-hook/cjs/useData";
import { parseNumberCount } from "fenextjs-functions/cjs/parse/NumberCount";
import { parseNumber } from "fenextjs-functions/cjs/parse/Number";
import { useValidator } from "fenextjs-hook";
import { FenextjsValidator } from "fenextjs-validator";
/**
 * Interface that defines CSS class properties for a text input component.
 */
export interface InputNumberCountClassProps extends InputTextClassProps {
    /**
     * CSS class name for the component.
     */
    classNameNumberCount?: string;
    /**
     * CSS class name for the component.
     */
    classNameNumberCountText?: string;
    /**
     * CSS class name for the component.
     */
    classNameNumberCountNumber?: string;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputNumberCountBaseProps
    extends Omit<
        InputTextBaseProps,
        "type" | "defaultValue" | "onChange" | "onChangeValidate" | "value"
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
}
/**
 * Props interface for the InputNumberCount component. Extends both InputNumberCountBaseProps and InputNumberCountClassProps interfaces.
 */
export interface InputNumberCountProps
    extends InputNumberCountBaseProps,
        InputNumberCountClassProps {}

export const InputNumberCount = ({
    classNameNumberCount = "",
    classNameNumberCountText = "",
    classNameNumberCountNumber = "",

    onChange,
    value = undefined,
    defaultValue,

    symbolInit = "$",
    symbolFinal = "",

    validator = undefined,

    ...props
}: InputNumberCountProps) => {
    const minMaxValue = (v: number) => {
        return Math.max(
            props.min ?? -Infinity,
            Math.min(props.max ?? Infinity, v),
        );
    };
    const { data, dataMemo, onChangeData, isChange } = useData<
        {
            number: number | string;
        },
        {
            number: number | string;
            numberText: string;
        }
    >(
        {
            number: value ?? defaultValue ?? "",
        },
        {
            onMemo: ({ number }) => {
                number = parseNumber(number);
                return {
                    number,
                    numberText:
                        symbolInit +
                        parseNumberCount(value ?? number) +
                        symbolFinal,
                };
            },
            onChangeDataAfter: ({ number }) => {
                number = parseNumber(number);
                onChange?.(number);
            },
        },
    );
    const { error: errorFenext } = useValidator({
        data: dataMemo.number,
        validator: validator ?? FenextjsValidator(),
    });

    const onChangeNumber = (number: number | string) => {
        const n = minMaxValue(parseNumber(number));
        onChangeData("number")(n);
    };

    return (
        <>
            <div
                className={`fenext-input-number-count ${classNameNumberCount}`}
            >
                <div
                    className={`fenext-input-number-count-text ${classNameNumberCountText}`}
                >
                    <InputText
                        {...props}
                        onChange={onChangeNumber}
                        type="text"
                        value={dataMemo.numberText}
                        isChange={isChange}
                        validator={undefined}
                        error={errorFenext}
                    />
                </div>
                <div
                    className={`fenext-input-number-count-number ${classNameNumberCountNumber}`}
                >
                    <InputText
                        label={props?.label}
                        disabled={props?.disabled}
                        loader={props?.loader}
                        onChange={onChangeNumber}
                        type="number"
                        value={`${data.number}`}
                        yup={null}
                        validator={undefined}
                        error={errorFenext}
                    />
                </div>
                <div
                    className={`fenext-input-number-count-number-movil ${classNameNumberCountNumber}`}
                >
                    <InputText
                        label={props?.label}
                        disabled={props?.disabled}
                        loader={props?.loader}
                        onChange={onChangeNumber}
                        type="number"
                        value={`${data.number}`}
                        yup={null}
                        validator={undefined}
                        error={errorFenext}
                    />
                </div>
            </div>
        </>
    );
};
