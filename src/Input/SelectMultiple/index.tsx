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
export interface InputSelectMultipleBaseProps
    extends Omit<
        InputSelectBaseProps,
        "defaultValue" | "value" | "onChange" | "onChangeValidate"
    > {
    /**
     * Default Options of select.
     */
    defaultValue?: InputSelectItemOptionBaseProps[];
    /**
     * Default Options of select.
     */
    value?: InputSelectItemOptionBaseProps[];
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: InputSelectItemOptionBaseProps[]) => void;

    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (
        e: InputSelectItemOptionBaseProps[],
    ) => Promise<any> | any;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
}
/**
 * Props interface for the InputSelectMultiple component. Extends both InputSelectMultipleBaseProps and InputSelectMultipleClassProps interfaces.
 */
export interface InputSelectMultipleProps
    extends InputSelectMultipleBaseProps,
        InputSelectMultipleClassProps {}

export const InputSelectMultiple = ({
    classNameSelectMultiple = "",
    classNameSelectMultipleList = "",
    onChange,
    value = undefined,
    defaultValue = [],
    onChangeValidate,
    options = [],
    iconDelete = <Trash />,
    ...props
}: InputSelectMultipleProps) => {
    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);
    const { data, setData } = useData<InputSelectItemOptionBaseProps[]>(
        defaultValue,
        {
            onChangeDataAfter: (e) => {
                onChange?.(e);
            },
        },
    );

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
        newItem: InputSelectItemOptionBaseProps | undefined,
    ) => {
        if (newItem) {
            setData([...dataMemo, newItem]);
        }
    };

    const onRemoveItemSelect = (deleteItem: InputSelectItemOptionBaseProps) => {
        setData(dataMemo.filter((option) => option.id != deleteItem.id));
    };

    const OPTIONS = useMemo(() => {
        return options.filter(
            (option) => dataMemo.find((e) => e.id == option.id) == undefined,
        );
    }, [options, dataMemo]);

    return (
        <>
            <div
                className={`fenext-select-multiple ${classNameSelectMultiple} `}
            >
                <InputSelect
                    {...props}
                    onChange={onAddItemSelect}
                    options={OPTIONS}
                    error={props?.error ?? error}
                    isSelectClearText={true}
                />
                <div
                    className={`fenext-select-multiple-list ${classNameSelectMultipleList} `}
                >
                    {dataMemo.map((option) => {
                        return (
                            <InputSelectOption
                                {...option}
                                type={"multiple"}
                                onDelete={onRemoveItemSelect}
                                iconDelete={option?.iconDelete ?? iconDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
