import React, { useCallback, useMemo } from "react";
import {
    InputSelectMultipleClassProps,
    InputSelectMultipleBaseProps,
} from "../SelectMultiple";
import { InputSelectItemOptionBaseProps } from "../Select";
import { useData } from "fenextjs-hook/cjs/useData";
import { InputSelectOption } from "../SelectOption";
import { useValidator } from "fenextjs-hook";
import { use_T } from "fenextjs-hook";
import { ErrorComponent } from "../../Error";
/**
 * Interface that defines CSS class properties for a select-multiple input component.
 */
export interface InputSelectButtonsGroupClassProps extends Pick<InputSelectMultipleClassProps, "classNameLabel" | "classNameError"> {
    /**
     * CSS class name for the input select-multiple.
     */
    classNameSelectButtonsGroup?: string;

    /**
     * CSS class name for the list options.
     */
    classNameSelectButtonsGroupList?: string;
}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectButtonsGroupBaseProps<T = any>
    extends Pick<
        InputSelectMultipleBaseProps<T>,
        "onChange" | "onChangeData" | "value" | "defaultValue" | "options" | "validator" | "validatorData" | "CustomOptionsSelected" | "useTOption" | "label" | "optional" | "optionalText" | "required" | "disabled" | "requiredText" |
        "_t" | "useT"

    > {

}
/**
 * Props interface for the InputSelectButtonsGroup component. Extends both InputSelectButtonsGroupBaseProps and InputSelectButtonsGroupClassProps interfaces.
 */
export interface InputSelectButtonsGroupProps<T = any>
    extends InputSelectButtonsGroupBaseProps<T>,
    InputSelectButtonsGroupClassProps { }

export const InputSelectButtonsGroup = <T = any,>({
    classNameSelectButtonsGroup = "",
    classNameSelectButtonsGroupList = "",
    onChange,
    onChangeData,
    value = undefined,
    defaultValue = [],
    options = [],
    CustomOptionsSelected = undefined,
    validatorData,
    validator,
    useTOption,
    classNameLabel,
    classNameError,
    label,
    disabled,
    optional = false,
    optionalText = "(optional)",
    required = false,
    requiredText = "*",
    _t: _tProps,
    useT
}: InputSelectButtonsGroupProps<T>) => {
    const { _t } = use_T({ _t: _tProps, useT });
    const { data, setDataFunction } = useData<
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
                    fenext-select-buttons-group
                    fenext-select-multiple
                    fenext-select-multiple-checkbox
                    ${classNameSelectButtonsGroup}
                `}
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
                    className={`fenext-select-multiple-list ${classNameSelectButtonsGroupList} `}
                >
                    {options.map((option) => {
                        const OptionTag =
                            CustomOptionsSelected ?? InputSelectOption<T>;
                        return (
                            <OptionTag
                                {...option}
                                type={"multiple"}
                                selected={dataMemo?.find((e) => e.id == option.id) !== undefined}
                                onClick={onAddItemSelect}
                                disabled={disabled ?? option?.disabled}
                                useT={useTOption}
                            />
                        );
                    })}
                </div>
                {(errorFenextVD || error) && (
                    <ErrorComponent
                        error={errorFenextVD ?? error}
                        className={`fenext-input-error ${classNameError}`}
                        _t={_t}
                    />
                )}
            </div>
        </>
    );
};
