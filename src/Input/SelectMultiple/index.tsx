import React, { ReactNode, useEffect, useMemo, useState } from "react";

import {
    InputSelect,
    InputSelectBaseProps,
    InputSelectClassProps,
} from "../Select";
import { InputSelectItemOptionBaseProps } from "../Select";
import { useData } from "fenextjs-hook/cjs/useData";
import { InputSelectOption } from "../SelectOption";
import { ErrorFenextjs } from "fenextjs-error";
import { ErrorCode } from "fenextjs-interface";
import { Trash } from "fenextjs-svg";
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
        "defaultValue" | "value" | "onChange" | "onChangeValidate"
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
     * Function to call for custom input validation.
     */
    onChangeValidate?: (
        e: InputSelectItemOptionBaseProps<T>[],
    ) => Promise<any> | any;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;

    typeSelectMultipleStyle?: "normal" | "checkbox";
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
    value = undefined,
    defaultValue = [],
    onChangeValidate,
    options = [],
    iconDelete = <Trash />,
    typeSelectMultipleStyle = "normal",
    ...props
}: InputSelectMultipleProps<T>) => {
    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);
    const { data, setData, setDataFunction } = useData<
        InputSelectItemOptionBaseProps<T>[]
    >(defaultValue, {
        onChangeDataAfter: (e) => {
            onChange?.(e);
        },
    });

    const dataMemo = useMemo(() => value ?? data, [data]);

    const validateOptions = async () => {
        if (onChangeValidate) {
            setError(undefined);
            try {
                await onChangeValidate(dataMemo);
            } catch (error: any) {
                setError(
                    new ErrorFenextjs({
                        code: ErrorCode.ERROR,
                        message: `${error.message}`,
                    }),
                );
            }
        }
    };
    useEffect(() => {
        validateOptions();
    }, [dataMemo]);
    const onAddItemSelect = (
        newItem: InputSelectItemOptionBaseProps<T> | undefined,
    ) => {
        if (newItem) {
            setDataFunction((old) => {
                if (old.find((e) => e.id == newItem.id)) {
                    return old.filter((e) => e.id != newItem.id);
                }
                return [...old, newItem];
            });
        }
    };

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

    return (
        <>
            <div
                className={`
                    fenext-select-multiple
                    fenext-select-multiple-${typeSelectMultipleStyle}
                    ${classNameSelectMultiple}
                `}
            >
                <InputSelect
                    {...props}
                    onChange={onAddItemSelect}
                    options={OPTIONS}
                    error={props?.error ?? error}
                    isSelectClearText={true}
                    showOptionIconImg={false}
                    extraInLabel={
                        <>
                            <div
                                className={`fenext-select-multiple-list ${classNameSelectMultipleList} `}
                            >
                                {dataMemo.map((option) => {
                                    return (
                                        <InputSelectOption
                                            {...option}
                                            type={"multiple"}
                                            onDelete={onRemoveItemSelect}
                                            iconDelete={
                                                option?.iconDelete ?? iconDelete
                                            }
                                            disabled={
                                                props?.disabled ??
                                                option?.disabled
                                            }
                                        />
                                    );
                                })}
                            </div>
                            {props?.extraInLabel}
                        </>
                    }
                />
            </div>
        </>
    );
};
