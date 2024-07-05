import React, { useMemo } from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
    InputSelectItemOptionBaseProps,
} from "../Select";
import { useData } from "fenextjs-hook/cjs/useData";
import { ErrorComponent } from "../../Error";
import { useValidator } from "fenextjs-hook";
import { FenextjsValidator } from "fenextjs-validator";
import { use_T } from "fenextjs-hook";
import { ErrorFenextjs } from "fenextjs-error";

export interface TextSelectProps {
    text?: string;
    select?: InputSelectItemOptionBaseProps;
}

/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputTextSelectClassProps
    extends InputTextClassProps,
        InputSelectClassProps {}

/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputTextSelectBaseProps
    extends Omit<
            InputTextBaseProps,
            | "type"
            | "value"
            | "onChange"
            | "defaultValue"
            | "datalist"
            | "onChangeValidate"
            | "label"
            | "placeholder"
            | "icon"
        >,
        Omit<
            InputSelectBaseProps,
            | "value"
            | "onChange"
            | "defaultValue"
            | "onChangeValidate"
            | "label"
            | "placeholder"
            | "icon"
        > {
    /**
     * Label text to display for the input.
     */
    label?: any;

    /**
     * Placeholder text to display in the input field.
     */
    placeholderSelect?: string;
    /**
     * Placeholder text to display in the input field.
     */
    placeholderText?: string;
    /**
     * Default Value of TextSelect.
     */
    defaultValue?: Partial<TextSelectProps>;
    /**
     * Value of TextSelect.
     */
    value?: Partial<TextSelectProps>;
    /**
     * onChange of TextSelect.
     */
    onChange?: (data: Partial<TextSelectProps>) => void;
    /**
     * posSelect of TextSelect.
     */
    posSelect?: "left" | "right";
}

/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputTextSelectBaseProps and InputTextSelectClassProps.
 */
export interface InputTextSelectProps
    extends InputTextSelectBaseProps,
        InputTextSelectClassProps {}

/**
 * Component that renders a checkbox input.
 * Takes an InputTextSelectProps object as props.
 */
export const InputTextSelect = ({
    label,
    placeholderSelect,
    placeholderText,
    defaultValue = {},
    value: valueProps = undefined,
    onChange,
    validator = undefined,
    posSelect = "left",
    errorWithIsChange = false,
    error,
    ...props
}: InputTextSelectProps) => {
    const {_t} = use_T({...props})
    const { data, onChangeData, isChange } = useData<
        Partial<TextSelectProps>,
        Partial<TextSelectProps>
    >(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const value = useMemo(() => valueProps ?? data, [valueProps, data]);

    const { error: errorFenext } = useValidator({
        data: data,
        validator: validator ?? FenextjsValidator(),
    });

    const errorInput = useMemo<ErrorFenextjs | undefined>(() => {
        if (errorWithIsChange && !isChange) {
            return undefined;
        }
        return error ?? errorFenext;
    }, [error, errorFenext, errorWithIsChange, isChange]);

    return (
        <>
            <div
                className={`fenext-input-text-select fenext-input-text-select-${posSelect}`}
            >
                <div
                    className={`fenext-input-text-select-label fenext-input-label  `}
                >
                    {_t(label)}
                </div>
                <div className={`fenext-input-text-select-select `}>
                    <InputSelect
                        {...props}
                        placeholder={placeholderSelect}
                        onChange={onChangeData("select")}
                        validator={undefined}
                        value={value.select}
                        _t={_t}
                        parseText={(e) => e}
                    />
                </div>
                <div className={`fenext-input-text-select-text `}>
                    <InputText
                        {...props}
                        placeholder={placeholderText}
                        onChange={onChangeData("text")}
                        validator={undefined}
                        value={value.text}
                        _t={_t}
                    />
                </div>
                {errorInput && (
                    <ErrorComponent
                        error={errorInput}
                        className={`fenext-input-error `}
                        _t={_t}
                    />
                )}
            </div>
        </>
    );
};
