import React, {
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import {
    InputSelectOption,
    InputSelectOptionClassProps,
    InputSelectOptionProps,
} from "../SelectOption";
import { SvgArrow } from "fenextjs-svg/cjs/Arrow";
import { SvgCancel } from "fenextjs-svg/cjs/Cancel";
import { useData } from "fenextjs-hook/cjs/useData";
import { ErrorFenextjs } from "fenextjs-error";
import { ErrorCode } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";
import { useValidator } from "fenextjs-hook";
import { SvgSearch, SvgTrash } from "fenextjs-svg";
import { Img } from "../../Img";
import { useSelectOptionsPos } from "./useSelectOptionsPos";
import { FenextjsValidatorClass } from "fenextjs-validator";

export type InputSelectTypeStyle =
    | "normal"
    | "normal-out"
    | "box"
    | "list"
    | "checkbox";

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
    extends Omit<InputSelectOptionProps<T>, "type" | "onDelete"> {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectBaseProps<T = any>
    extends Omit<
        InputTextBaseProps,
        | "value"
        | "type"
        | "defaultValue"
        | "value"
        | "onChange"
        | "onBlur"
        | "onEnter"
        | "onChangeValidate"
    > {
    idSelectOptions?: string;
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
     * useTOption.
     */
    useTOption?: boolean;
    /**
     * Value Options of select.
     */
    value?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Not Result of select.
     */
    noResult?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Not Result of select.
     */
    loaderOption?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Selected of select.
     */
    selected?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Create of select.
     */
    create?: InputSelectItemOptionBaseProps<T>;
    /**
     * Value of Create of select.
     */
    itemMaxLengthShowOptions?: InputSelectItemOptionBaseProps<T>;
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
     * Function to call when the input value changes.
     */
    onChangeData?: (v?: T) => void;
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
    /**
     * Icon search in select.
     */
    iconSearch?: ReactNode;
    /**
     * changeByFirstOptionInOnBlur in select.
     */
    changeByFirstOptionInOnBlur?: boolean;
    /**
     * maxLengthShowOptions in select.
     */
    maxLengthShowOptions?: number;
    /**
     * useItemMaxLengthShowOptions in select.
     */
    useItemMaxLengthShowOptions?: boolean;
    /**
     * nItems in select.
     */
    nItems?: number;
    /**
     * converterInSearchWithMaxLenght in select.
     */
    converterInSearchWithMaxLenght?: boolean;
    /**
     * showOptionIconImg in select.
     */
    showOptionIconImg?: boolean;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validatorData?: FenextjsValidatorClass<T | undefined>;
    /**
     * forceShowOptionOnLoad
     */
    forceShowOptionOnLoad?: boolean;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
    /**
     * Use component to search when user types on text field.
     */
    useSearch?: boolean;
    /**
     *
     */
    useNowrap?: boolean;
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
    classNameOption = "",
    idSelectOptions,

    error = undefined,
    options: optionsProps = [],
    showOptions = "focus",
    hiddenOptions = "not-hover",
    defaultValue = undefined,
    typeSelect = "div",
    typeSelectStyle = "normal",
    value = undefined,
    onChange,
    onChangeData,
    onChangeText,
    onChangeValidate,
    icon = <SvgArrow />,
    iconSearch = <SvgSearch />,
    noResult,
    loaderOption,
    selected,
    create,
    onCreate,
    isSelectClearText = false,
    iconCloseMovil = <SvgCancel />,
    filterOptions = undefined,
    clearContent = "Clear",
    isSelectChangeText = true,
    errorWithIsChange = true,
    validator,
    searchById = false,
    useSwichtypeSelectStyle = false,
    changeByFirstOptionInOnBlur = false,
    converterInSearchWithMaxLenght = false,
    nItems = undefined,
    useSearch = true,
    useNowrap = false,

    useItemMaxLengthShowOptions = true,
    maxLengthShowOptions = 20,
    itemMaxLengthShowOptions = {
        id: "fenext-item-max-length-show-options",
        text: "There are more elements ...",
    },
    showOptionIconImg = true,
    validatorData,
    useTOption,
    forceShowOptionOnLoad = false,
    iconDelete = <SvgTrash />,
    ...props
}: InputSelectProps<T>) => {
    const { _t } = use_T({ ...props });
    const { _t: _tValue } = use_T({ ...props, useT: useTOption });
    const options = useMemo(
        () => (filterOptions ? filterOptions(optionsProps) : optionsProps),
        [optionsProps, filterOptions],
    );

    const checkboxClose = useRef<HTMLInputElement | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const [dataErrorInput, setErrorInput] = useState<ErrorFenextjs | undefined>(
        undefined,
    );
    const [isChangeTextBlur, setIsChangeTextBlur] = useState(false);
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
                onChangeData?.(d?.option?.data ?? undefined);
            },
        },
    );

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
        setIsChangeTextBlur(true);
        onChangeText?.(text);
        let option: InputSelectItemOptionBaseProps<T> | undefined = undefined;
        if (typeSelect != "div") {
            option = options.find((o) => o.text == text);
        }
        setData({
            option,
            text: text,
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

    const parseTextSearch = (e?: string | number) => {
        return `${e ?? ""}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };
    const OPTIONSSEARCH = useMemo<InputSelectItemOptionBaseProps<T>[]>(() => {
        if (!useSearch) {
            return [...options];
        }
        const textSearch = parseTextSearch(dataMemo?.textSearch);

        if (textSearch == "") {
            return [...options];
        }
        return [...options].filter(
            (option) =>
                parseTextSearch(option.text)?.includes(textSearch) ||
                textSearch?.includes(parseTextSearch(option.text)) ||
                (searchById &&
                    (parseTextSearch(option.id)?.includes(textSearch) ||
                        textSearch?.includes(parseTextSearch(option.id)))),
        );
    }, [options, dataMemo, searchById, useSearch]);
    const { OPTIONS } = useMemo<{
        OPTIONS: InputSelectItemOptionBaseProps<T>[];
        nMax: boolean;
    }>(() => {
        if (props?.disabled) {
            return {
                OPTIONS: [],
                nMax: false,
            };
        }
        let nMax = false;
        let list = [...options];

        if (typeSelect == "div") {
            list = [...OPTIONSSEARCH];
        }
        if (maxLengthShowOptions && useItemMaxLengthShowOptions) {
            nMax =
                list.length > maxLengthShowOptions ||
                (nItems ?? 0) > maxLengthShowOptions;
            list = list.splice(0, maxLengthShowOptions);
            if (nMax && itemMaxLengthShowOptions) {
                list.push({
                    ...itemMaxLengthShowOptions,
                    classNameOption: `fenext-select-option-item-max-lenght-show-options ${itemMaxLengthShowOptions.classNameOption}`,
                    text: `${itemMaxLengthShowOptions.text} (${maxLengthShowOptions ?? 0} / ${nItems})`,
                    children: (
                        <>
                            <div className="fenext-select-option-item-max-lenght-show-options-content">
                                {itemMaxLengthShowOptions.children ??
                                    itemMaxLengthShowOptions.text}
                            </div>
                            {nItems && (
                                <>
                                    <span className="fenext-select-option-item-max-lenght-show-options-maxlegnth-nitems">
                                        ({maxLengthShowOptions ?? 0} / {nItems})
                                    </span>
                                </>
                            )}
                        </>
                    ),
                    disabled: true,
                });
            }
        }
        return {
            OPTIONS: list,
            nMax,
            nItems,
        };
    }, [
        typeSelect,
        OPTIONSSEARCH,
        options,
        useItemMaxLengthShowOptions,
        maxLengthShowOptions,
        props?.disabled,
        itemMaxLengthShowOptions,
        nItems,
    ]);

    const onEnter = useCallback(() => {
        const optionSect = OPTIONSSEARCH[0];
        if (optionSect) {
            onChangeOption(optionSect);
        }
    }, [OPTIONSSEARCH]);

    const { error: errorFenextV } = useValidator({
        data: data.option,
        validator,
    });
    const { error: errorFenextVD } = useValidator({
        data: data?.option?.data,
        validator: validatorData,
    });

    const errorFenext = useMemo(
        () => errorFenextV ?? errorFenextVD,
        [errorFenextV, errorFenextVD],
    );

    const errorInput = useMemo<ErrorFenextjs | undefined>(() => {
        if (errorWithIsChange && !isChange) {
            return undefined;
        }
        return error ?? errorFenext ?? dataErrorInput;
    }, [error, errorFenext, dataErrorInput, errorWithIsChange, isChange]);

    const onBlur = () => {
        if (changeByFirstOptionInOnBlur && isChangeTextBlur) {
            const optionSect = OPTIONS[0];
            if (optionSect) {
                onChangeOption(optionSect);
                setIsChangeTextBlur(false);
            }
        }
    };

    const OPTIONSLENGTH = useMemo(
        () =>
            OPTIONS.filter(
                (e) => (e?.selected ?? false) || !(e?.hidden ?? false),
            )?.length,
        [OPTIONS],
    );

    const TAGLIST = useMemo(() => {
        const TAG = typeSelect;
        return (
            <>
                <TAG
                    id={props?.datalist}
                    className={`fenext-select-list-options fenext-select-list-options-type-${typeSelect} ${useNowrap ? "fenext-select-list-options-use-nowrap" : ""} ${classNameList}`}
                    onChange={(e) => {
                        onChangeText_(e?.target?.value);
                    }}
                    key={props.loader ? "loader" : "load"}
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
                                onClick={create?.onClick ?? onCreate}
                                classNameOption={`${classNameOption} ${create?.classNameOption}`}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    {OPTIONSLENGTH != 0 && typeSelect == "select" ? (
                        <>
                            <InputSelectOption
                                type={"option"}
                                id={noResult?.id ?? "selected"}
                                text={_t(
                                    selected?.text ??
                                        props?.placeholder ??
                                        "Select",
                                )}
                                children={selected?.children ?? undefined}
                                _t={_t}
                                useT={useTOption}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    {OPTIONS.map((option, i) => {
                        return (
                            <InputSelectOption<T>
                                key={i}
                                selected={
                                    data.option?.id != undefined &&
                                    data.option?.id === option?.id
                                }
                                {...option}
                                classNameOption={`${classNameOption} ${option?.classNameOption}`}
                                onClick={(e) => {
                                    onChangeOption(e);
                                    option?.onClick?.(e);
                                }}
                                type={typeSelect == "div" ? "div" : "option"}
                                _t={_t}
                                useT={useTOption}
                            />
                        );
                    })}
                    {props.loader ? (
                        <>
                            <InputSelectOption
                                type={typeSelect == "div" ? "div" : "option"}
                                id={loaderOption?.id ?? "loader"}
                                text={loaderOption?.text ?? "Loading"}
                                children={loaderOption?.children ?? undefined}
                                classNameOption={`${classNameOption} fenext-select-option-loading`}
                                _t={_t}
                                useT={useTOption}
                                disabled={true}
                            />
                        </>
                    ) : (
                        <>
                            {OPTIONSLENGTH == 0 ? (
                                <>
                                    <InputSelectOption
                                        type={
                                            typeSelect == "div"
                                                ? "div"
                                                : "option"
                                        }
                                        id={noResult?.id ?? "notResult"}
                                        text={noResult?.text ?? "Not Result"}
                                        children={
                                            noResult?.children ?? undefined
                                        }
                                        classNameOption={`${classNameOption} fenext-select-option-not-result`}
                                        _t={_t}
                                        useT={useTOption}
                                        disabled={true}
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </TAG>
            </>
        );
    }, [
        typeSelect,
        props?.datalist,
        classNameOption,
        classNameList,
        create,
        onCreate,
        OPTIONSLENGTH,
        noResult,
        selected,
        props?.placeholder,
        OPTIONS,
        data,
        useTOption,
        onChangeOption,

        props.loader,
        loaderOption,
        selectRef,
    ]);

    const [isFocus, setIsFocus] = useState(false);

    const CHILDREN_SELECT = useMemo(() => {
        if (
            typeSelect == "div" &&
            (typeSelectStyle == "normal" || typeSelectStyle == "normal-out")
        ) {
            return (
                <>
                    <div className={`fenext-select-content-search`}>
                        <InputText
                            {...props}
                            _t={_t}
                            icon={
                                <>
                                    <div className="fenext-select-content-icon">
                                        <div className="fenext-select-content-icon-search">
                                            {iconSearch}
                                        </div>
                                    </div>
                                </>
                            }
                            onBlur={onBlur}
                            onChange={onChangeText_}
                            value={_tValue(dataMemo?.text ?? "")}
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
                                        {_t(clearContent)}
                                    </button>
                                </>
                            }
                            validator={undefined}
                        />
                        <button className={`fenext-select-close`}>
                            {iconCloseMovil}
                        </button>
                    </div>
                    {TAGLIST}
                </>
            );
        }
        return <></>;
    }, [
        options,
        isFocus,
        forceShowOptionOnLoad,
        typeSelect,
        props?.datalist,
        classNameList,
        create,
        onCreate,
        OPTIONSLENGTH,
        noResult,
        selected,
        props?.placeholder,
        OPTIONS,
        data,
        useTOption,
        onChangeOption,

        props.loader,
        loaderOption,
        selectRef,
    ]);

    const { onLoadPos, onLoadChildren } = useSelectOptionsPos({
        idSelectOptions,
        children: CHILDREN_SELECT,
        target: selectRef?.current?.querySelector?.(
            "input.fenext-input-content-input",
        ),
    });
    useEffect(() => {
        if (isFocus || forceShowOptionOnLoad) {
            onLoadChildren();
            if (forceShowOptionOnLoad) {
                const ele = selectRef.current?.querySelector<HTMLInputElement>(
                    ".fenext-input-content-input",
                );

                ele?.click();
                ele?.focus();
            }
        }
    }, [
        isFocus,
        forceShowOptionOnLoad,

        CHILDREN_SELECT,

        options,
        typeSelect,
        props?.datalist,
        classNameList,
        create,
        onCreate,
        OPTIONSLENGTH,
        noResult,
        selected,
        props?.placeholder,
        OPTIONS,
        data,
        useTOption,
        onChangeOption,

        props.loader,
        loaderOption,
        selectRef,
    ]);

    return (
        <>
            <div
                ref={selectRef}
                className={`
                    fenext-select
                    fenext-select-${converterInSearchWithMaxLenght && options.length > maxLengthShowOptions ? "search-nmax" : ""}
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
                onMouseLeave={() => {
                    setIsFocus(false);
                }}
            >
                <div
                    className={`fenext-select-content-search`}
                    onClick={() => {
                        setIsFocus(true);
                        onLoadPos?.();
                        if (window?.innerWidth <= 575) {
                            const ele =
                                selectRef.current?.querySelector<HTMLInputElement>(
                                    ".fenext-input-content-input",
                                );

                            ele?.click();
                            ele?.focus();
                        }
                    }}
                    // onMouseEnter={onLoadPos}
                >
                    <InputText
                        {...props}
                        _t={_t}
                        icon={
                            <>
                                <div className="fenext-select-content-icon">
                                    <div className="fenext-select-content-icon-arrow">
                                        {icon}
                                    </div>
                                    <div className="fenext-select-content-icon-search">
                                        {iconSearch}
                                    </div>
                                </div>
                            </>
                        }
                        onBlur={onBlur}
                        onChange={(e) => {
                            onChangeText_(e);
                            onLoadChildren();
                        }}
                        value={
                            typeSelectStyle == "normal-out"
                                ? undefined
                                : _tValue(dataMemo?.text ?? "")
                        }
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
                                    {_t(clearContent)}
                                </button>
                                {showOptionIconImg && (
                                    <>
                                        {dataMemo?.option?.img ? (
                                            <>
                                                <div className="fenext-select-option-selected-img">
                                                    <img
                                                        src={
                                                            dataMemo?.option
                                                                ?.img
                                                        }
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {dataMemo?.option
                                                    ?.imgComponent ? (
                                                    <>
                                                        <div className="fenext-select-option-selected-img">
                                                            <Img
                                                                {...dataMemo
                                                                    ?.option
                                                                    ?.imgComponent}
                                                            />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {dataMemo?.option
                                                            ?.icon && (
                                                            <>
                                                                <div className="fenext-select-option-selected-img">
                                                                    {
                                                                        dataMemo
                                                                            ?.option
                                                                            ?.icon
                                                                    }
                                                                </div>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        }
                        validator={undefined}
                        extraInLabel={
                            <>
                                {typeSelectStyle == "normal-out" &&
                                    dataMemo?.option && (
                                        <>
                                            <div
                                                className={`fenext-select-multiple-list `}
                                            >
                                                <InputSelectOption
                                                    {...dataMemo?.option}
                                                    type={"multiple"}
                                                    onDelete={() => {
                                                        onClear();
                                                    }}
                                                    iconDelete={iconDelete}
                                                    disabled={props?.disabled}
                                                    useT={useTOption}
                                                    classNameOption={`${classNameOption} ${dataMemo?.option?.classNameOption}`}
                                                    selected={true}
                                                />
                                            </div>
                                        </>
                                    )}
                                {props?.extraInLabel}
                            </>
                        }
                    />
                </div>
                {typeSelect == "div" &&
                (typeSelectStyle == "normal" ||
                    typeSelectStyle == "normal-out") &&
                !useSwichtypeSelectStyle ? (
                    <></>
                ) : (
                    <>{TAGLIST}</>
                )}
            </div>
        </>
    );
};
