import React, { ReactNode, useCallback, useMemo } from "react";

import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
} from "../Select";
import { InputSelectItemOptionBaseProps } from "../Select";
import { useData } from "fenextjs-hook/cjs/useData";
import { InputSelectOption } from "../SelectOption";
import { SvgTrash } from "fenextjs-svg";
import { useValidator } from "fenextjs-hook";
import { FenextjsValidatorClass } from "fenextjs-validator";
/**
 * Interface that defines CSS class properties for a select-multiple input component.
 */
export interface InputSelectMultipleClassProps extends InputSelectClassProps {
    /**
     * CSS class name for the input select-multiple.
     */
    classNameSelectMultiple?: string;

    /**
     * CSS class name for the list options.
     */
    classNameSelectMultipleList?: string;
}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectMultipleBaseProps<T = any>
    extends Omit<
        InputSelectBaseProps<T>,
        | "defaultValue"
        | "value"
        | "onChange"
        | "onChangeData"
        | "onChangeValidate"
        | "validator"
        | "validatorData"
    > {
    /**
     * Default Options of select.
     */
    defaultValue?: InputSelectItemOptionBaseProps<T>[];
    /**
     * Default Options of select.
     */
    value?: InputSelectItemOptionBaseProps<T>[];
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: InputSelectItemOptionBaseProps<T>[]) => void;
    /**
     * Function to call when the input value changes.
     */
    onChangeData?: (v?: T[]) => void;

    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;

    typeSelectMultipleStyle?: "normal" | "checkbox";

    CustomOptionsSelected?: typeof InputSelectOption<T>;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass<(typeof InputSelectOption<T>)[]>;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validatorData?: FenextjsValidatorClass<(T | undefined)[]>;
}
/**
 * Props interface for the InputSelectMultiple component. Extends both InputSelectMultipleBaseProps and InputSelectMultipleClassProps interfaces.
 */
export interface InputSelectMultipleProps<T = any>
    extends InputSelectMultipleBaseProps<T>,
        InputSelectMultipleClassProps {}

export const InputSelectMultiple = <T = any,>({
    classNameSelectMultiple = "",
    classNameSelectMultipleList = "",
    onChange,
    onChangeData,
    value = undefined,
    defaultValue = [],
    options = [],
    iconDelete = <SvgTrash />,
    typeSelectMultipleStyle = "normal",
    CustomOptionsSelected = undefined,
    validatorData,
    validator,
    useTOption,
    ...props
}: InputSelectMultipleProps<T>) => {
    const { data, setData, setDataFunction } = useData<
        InputSelectItemOptionBaseProps<T>[]
    >(defaultValue, {
        onChangeDataAfter: (e) => {
            onChange?.(e);
            onChangeData?.(e?.map((e) => e.data as T));
        },
    });

    const dataMemo = useMemo(() => value ?? data, [data, value]);

    const onAddItemSelect = useCallback(
        (newItem: InputSelectItemOptionBaseProps<T> | undefined) => {
            if (newItem) {
                setDataFunction(() => {
                    const old = [...dataMemo];
                    if (old.find((e) => e.id == newItem.id)) {
                        return old.filter((e) => e.id != newItem.id);
                    }
                    return [...old, newItem];
                });
            }
        },
        [dataMemo],
    );

    const onRemoveItemSelect = (deleteItem: InputSelectItemOptionBaseProps) => {
        setData(dataMemo.filter((option) => option.id != deleteItem.id));
    };

    const OPTIONS = useMemo(() => {
        return options.map((option) => {
            const isSelect =
                dataMemo.find((e) => e.id == option.id) != undefined;
            return {
                ...option,
                hidden: isSelect,
                selected: isSelect,
            };
        });
    }, [options, dataMemo]);

    const { error: errorFenextVD } = useValidator({
        data: dataMemo?.map((e) => e?.data),
        validator: validatorData,
    });
    const { error } = useValidator({
        data: dataMemo,
        validator: validator as any,
    });

    return (
        <>
            <div
                className={`
                    fenext-select-multiple
                    fenext-select-multiple-${typeSelectMultipleStyle}
                    ${classNameSelectMultiple}
                `}
            >
                <InputSelect<T>
                    {...props}
                    onChange={onAddItemSelect}
                    options={OPTIONS}
                    error={props?.error ?? errorFenextVD ?? error}
                    isSelectClearText={true}
                    showOptionIconImg={false}
                    useTOption={useTOption}
                    isChange={true}
                />
                <div
                    className={`fenext-select-multiple-list ${classNameSelectMultipleList} `}
                >
                    {dataMemo.map((option) => {
                        const OptionTag =
                            CustomOptionsSelected ?? InputSelectOption<T>;
                        return (
                            <OptionTag
                                {...option}
                                type={"multiple"}
                                onDelete={onRemoveItemSelect}
                                iconDelete={option?.iconDelete ?? iconDelete}
                                disabled={props?.disabled ?? option?.disabled}
                                useT={useTOption}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
