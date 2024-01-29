import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import {
    InputSelectOption,
    InputSelectOptionBaseProps,
    InputSelectOptionClassProps,
} from "../SelectOption";
import { Arrow } from "fenextjs-svg/cjs/Arrow";
import { Cancel } from "fenextjs-svg/cjs/cancel";
import { useData } from "fenextjs-hook/cjs/useData";
import { GetSpaceParent } from "fenextjs-functions/cjs/html/GetSpaceParent";
import { ErrorFenextjs } from "fenextjs-error";
import { ErrorCode } from "fenextjs-interface";
import { _tValidate } from "fenextjs-functions";
import { useValidator } from "fenextjs-hook";

export type InputSelectTypeStyle = "normal" | "box" | "list";

/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectClassProps
    extends InputTextClassProps,
        InputSelectOptionClassProps {
    /**
     * CSS class name for the input select.
     */
    classNameSelect?: string;

    /**
     * CSS class name for the list options.
     */
    classNameList?: string;
}

export interface InputSelectItemOptionBaseProps<T = any>
    extends Omit<
        InputSelectOptionBaseProps<T>,
        "onClick" | "type" | "onDelete"
    > {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectBaseProps<T = any>
    extends Omit<
        InputTextBaseProps,
        | "value"
        | "type"
        | "yup"
        | "defaultValue"
        | "value"
        | "onChange"
        | "onBlur"
        | "onEnter"
        | "onChangeValidate"
        | "onChangeValidateBeforeYup"
        | "onChangeValidateAfterYup"
    > {
    /**
     * Options of select.
     */
    options: InputSelectItemOptionBaseProps<T>[];
    /**
     * Options of select.
     */
    filterOptions?: (
        data: InputSelectItemOptionBaseProps<T>[],
    ) => InputSelectItemOptionBaseProps<T>[];
    /**
     * showOptions type of show option select.
     */
    showOptions?: "hover" | "focus" | "focus-hover";
    /**
     * hiddenOptions type of hidden option select.
     */
    hiddenOptions?: "not-hover" | "not-focus" | "not-focus-hover";
    /**
     * Default Options of select.
     */
    defaultValue?: InputSelectItemOptionBaseProps<T>;
    /**
     * Type Select of option.
     */
    typeSelect?: "div" | "select" | "datalist";
    /**
     * Type Select of styles.
     */
    typeSelectStyle?: InputSelectTypeStyle;
    /**
     * Type Select of styles.
     */
    useSwichtypeSelectStyle?: boolean;
    /**
     * Value Options of select.
     */
    value?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Not Result of select.
     */
    noResult?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Selected of select.
     */
    selected?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Create of select.
     */
    create?: InputSelectItemOptionBaseProps<T>;
    /**
     * onCreate of select.
     */
    onCreate?: () => void;
    /**
     * Value of Not Result of select.
     */
    isSelectClearText?: boolean;
    /**
     * is permit change text in input.
     */
    isSelectChangeText?: boolean;
    /**
     * Function to call when the input value changes.
     */
    onChange?: (v?: InputSelectItemOptionBaseProps<T>) => void;
    /**
     * Function to call when the input value changes text.
     */
    onChangeText?: (v?: string) => void;

    /**
     * Function to call for custom input validation.
     */
    onChangeValidate?: (
        e?: InputSelectItemOptionBaseProps<T>,
    ) => Promise<any> | any;
    /**
     * Icon for close options in Movil.
     */
    iconCloseMovil?: any;
    /**
     * ReactNode for clear option in Movil.
     */
    clearContent?: ReactNode;
    /**
     * searchById .
     */
    searchById?: boolean;
}
/**
 * Props interface for the InputSelect component. Extends both InputSelectBaseProps and InputSelectClassProps interfaces.
 */
export interface InputSelectProps<T = any>
    extends InputSelectBaseProps<T>,
        InputSelectClassProps {}

export interface InputSelectValue<T = any> {
    option?: InputSelectItemOptionBaseProps<T>;
    text?: string;
    textSearch?: string;
}

export const InputSelect = <T = any,>({
    classNameSelect = "",
    classNameList = "",

    error = undefined,
    options: optionsProps = [],
    showOptions = "focus",
    hiddenOptions = "not-hover",
    defaultValue = undefined,
    typeSelect = "div",
    typeSelectStyle = "normal",
    value = undefined,
    onChange,
    onChangeText,
    onChangeValidate,
    icon = <Arrow />,
    noResult,
    selected,
    create,
    onCreate,
    isSelectClearText = false,
    iconCloseMovil = <Cancel />,
    filterOptions = undefined,
    clearContent = "Clear",
    isSelectChangeText = true,
    errorWithIsChange = true,
    validator,
    searchById = false,
    useSwichtypeSelectStyle = false,
    _t,
    ...props
}: InputSelectProps<T>) => {
    const options = useMemo(
        () => (filterOptions ? filterOptions(optionsProps) : optionsProps),
        [optionsProps, filterOptions],
    );

    const checkboxClose = useRef<HTMLInputElement | null>(null);
    const btnClose = useRef<HTMLButtonElement | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const [showOptionsUp, setShowOptionsUp] = useState<{
        up: boolean;
        height: number;
    }>({
        up: false,
        height: 0,
    });
    const [dataErrorInput, setErrorInput] = useState<ErrorFenextjs | undefined>(
        undefined,
    );
    const { data, setData, isChange } = useData<
        InputSelectValue<T>,
        InputSelectValue<T>
    >(
        {
            option: value ?? defaultValue,
            text: defaultValue?.text ?? "",
            textSearch: "",
        },
        {
            onChangeDataAfter: (d: InputSelectValue<T>) => {
                onChange?.(d.option ?? undefined);
            },
        },
    );

    const TAG = typeSelect;

    const dataMemo = useMemo(() => {
        if (value) {
            return {
                option: value,
                text: value?.text,
                textSearch: data?.textSearch,
            };
        }
        return data;
    }, [data, value]);

    const validateOption = async () => {
        if (onChangeValidate) {
            setErrorInput(undefined);
            try {
                await onChangeValidate(dataMemo.option);
            } catch (error: any) {
                setErrorInput(
                    new ErrorFenextjs({
                        code: ErrorCode.ERROR,
                        message: `${error.message}`,
                    }),
                );
            }
        }
    };
    useEffect(() => {
        if (isChange) {
            validateOption();
        }
    }, [dataMemo, isChange]);

    const onChangeText_ = (text: string) => {
        if (!isSelectChangeText) {
            return;
        }
        onChangeText?.(text);
        let option: InputSelectItemOptionBaseProps<T> | undefined = undefined;
        if (typeSelect != "div") {
            option = options.find((o) => o.text == text);
        }
        setData({
            option,
            text: isSelectClearText ? "" : text,
            textSearch: text,
        });
    };
    const onClear = () => {
        setData({
            option: undefined,
            text: "",
            textSearch: "",
        });
    };
    const onChangeOption = (option: InputSelectItemOptionBaseProps<T>) => {
        setData({
            option,
            text: isSelectClearText ? "" : option.text,
            textSearch: "",
        });

        setTimeout(() => {
            checkboxClose?.current?.click?.();
            checkboxClose?.current?.focus?.();
        }, 100);
    };

    const OPTIONSSEARCH = useMemo<InputSelectItemOptionBaseProps<T>[]>(() => {
        const textSearch = dataMemo?.textSearch?.toLowerCase() ?? "";
        return options.filter(
            (option) =>
                option.text?.toLowerCase()?.includes(textSearch) ||
                textSearch?.includes(option.text?.toLowerCase()) ||
                (searchById &&
                    (`${option.id}`?.toLowerCase()?.includes(textSearch) ||
                        textSearch?.includes(`${option.id}`?.toLowerCase()))),
        );
    }, [options, dataMemo, searchById]);
    const OPTIONS = useMemo<InputSelectItemOptionBaseProps<T>[]>(() => {
        if (typeSelect == "div") {
            return OPTIONSSEARCH;
        }
        return options;
    }, [typeSelect, OPTIONSSEARCH, options]);

    const onEnter = () => {
        const optionSect = OPTIONSSEARCH[0];
        if (optionSect) {
            onChangeOption(optionSect);
        }
    };
    const onDefOptionsUpDown = (event) => {
        const mouseY = event.clientY;

        const spaceBottomWindow = window.innerHeight - mouseY;
        const spaceTopWindow = mouseY;

        if (selectRef.current) {
            const { spaceBottom: spaceBottomParent, spaceTop: spaceTopParent } =
                GetSpaceParent(selectRef.current);

            const spaceBottom = Math.min(spaceBottomParent, spaceBottomWindow);
            const spaceTop = Math.min(spaceTopParent, spaceTopWindow);

            setShowOptionsUp({
                up: spaceTop > spaceBottom,
                height: Math.max(spaceTop, spaceBottom),
            });
        }
    };

    const { error: errorFenext } = useValidator({
        data: data.option,
        validator,
    });

    const errorInput = useMemo<ErrorFenextjs | undefined>(() => {
        if (errorWithIsChange && !isChange) {
            return undefined;
        }
        return error ?? errorFenext ?? dataErrorInput;
    }, [error, errorFenext, dataErrorInput, errorWithIsChange, isChange]);

    return (
        <>
            <div
                ref={selectRef}
                className={`fenext-select
                    fenext-select-${
                        showOptionsUp?.up ? "options-up" : "options-down"
                    }
                    fenext-select-type-${typeSelect}
                    fenext-select-type-style-${typeSelectStyle}
                    fenext-select-${useSwichtypeSelectStyle ? "use-swich-select-style" : ""}
                    fenext-select-${
                        isSelectChangeText
                            ? "is-change-text"
                            : "is-not-change-text"
                    }
                    ${classNameSelect} ${showOptions}
                    ${hiddenOptions}
                `}
                style={
                    {
                        ["--fenext-select-max-height"]: `${showOptionsUp.height}px`,
                    } as React.CSSProperties
                }
            >
                <input
                    type="checkbox"
                    ref={checkboxClose}
                    className="fenext-select-checkbox-close"
                />
                <div
                    className={`fenext-select-content-search`}
                    onClick={onDefOptionsUpDown}
                >
                    <InputText
                        {...props}
                        _t={_t}
                        icon={icon}
                        onChange={onChangeText_}
                        value={dataMemo?.text ?? ""}
                        onEnter={onEnter}
                        error={errorInput}
                        autoComplete={false}
                        errorWithIsChange={errorWithIsChange}
                        extraInContentInput={
                            <>
                                <button
                                    className={`fenext-select-clear`}
                                    onClick={onClear}
                                >
                                    {_tValidate(clearContent, _t)}
                                </button>
                                {/* {props?.extraInContentInput} */}
                            </>
                        }
                        validator={undefined}
                    />
                    <button ref={btnClose} className={`fenext-select-close`}>
                        {iconCloseMovil}
                    </button>
                </div>
                <TAG
                    id={props?.datalist}
                    className={`fenext-select-list-options fenext-select-list-options-type-${typeSelect}  ${classNameList}`}
                    onChange={(e) => {
                        onChangeText_(e?.target?.value);
                    }}
                >
                    {create && typeSelect == "div" ? (
                        <>
                            <InputSelectOption
                                type={"div"}
                                id={create?.id ?? "create"}
                                text={create?.text ?? "Create"}
                                children={create?.children ?? undefined}
                                _t={_t}
                                isBtn={true}
                                onClick={onCreate}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    {OPTIONS.length != 0 && typeSelect == "select" ? (
                        <>
                            <InputSelectOption
                                type={"option"}
                                id={noResult?.id ?? "selected"}
                                text={
                                    selected?.text ??
                                    props?.placeholder ??
                                    "Select"
                                }
                                children={selected?.children ?? undefined}
                                _t={_t}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    {OPTIONS.map((option, i) => {
                        return (
                            <InputSelectOption<T>
                                key={i}
                                {...option}
                                onClick={onChangeOption}
                                type={typeSelect == "div" ? "div" : "option"}
                                _t={_t}
                            />
                        );
                    })}
                    {OPTIONS.length == 0 ? (
                        <>
                            <InputSelectOption
                                type={typeSelect == "div" ? "div" : "option"}
                                id={noResult?.id ?? "notResult"}
                                text={noResult?.text ?? "Not Result"}
                                children={noResult?.children ?? undefined}
                                classNameOption="fenext-select-option-not-result"
                                _t={_t}
                                disabled={true}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </TAG>
            </div>
        </>
    );
};
