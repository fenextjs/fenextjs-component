import React, { ReactNode, useRef, useState } from "react";
import { SVGSearch } from "fenextjs-svg/cjs/search";
import { Close } from "fenextjs-svg/cjs/close";
import { useData } from "fenextjs-hook";
import { Title } from "../../Title";
import { InputSelectOption, InputSelectOptionProps } from "../SelectOption";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { Button, ButtonProps } from "../../Button";
import { _tValidate } from "fenextjs-functions";

/**
 * Properties for the base InputSearch component.
 */

export interface InputSearchTabFilterProps
    extends Omit<
        InputSelectOptionProps,
        | "type"
        | "disabled"
        | "selected"
        | "onClick"
        | "onDelete"
        | "_t"
        | "isBtn"
        | "data"
        | "iconDelete"
    > {}

/**
 * Properties for the base InputSearch component.
 */
export interface InputSearchResultProps {
    /**
     * id of Result Search.
     */
    id: string;
    /**
     * text of Result Search.
     */
    text: string;
    /**
     * content of Result Search.
     */
    content?: React.ReactNode;
    /**
     * data of item Search.
     */
    data?: any;
}
/**
 * Properties for the base InputSearch component.
 */
export interface InputSearchBaseProps extends Omit<InputTextBaseProps, "type"> {
    /**
     * onSearch by string.
     */
    onSearch?: (
        v: string,
        tabFilter?: InputSearchTabFilterProps[],
    ) => Promise<InputSearchResultProps[]>;
    /**
     * onEnterSearch by InputSearchResultProps.
     */
    onEnterSearch?: (v: string) => void;
    /**
     * onClearSearch by InputSearchResultProps.
     */
    onClearSearch?: () => void;
    /**
     * onClickSearch by InputSearchResultProps.
     */
    onClickSearch?: (v: InputSearchResultProps) => void;
    /**
     * useResult  show list resut of onSearch.
     * @default false
     */
    useResult?: boolean;
    /**
     * useLoadMore  load more items for list resut of onSearch.
     * @default false
     */
    useLoadMore?: boolean;
    /**
     * ButtonLoadMoreProps  props for btn loadmore.
     *
     */
    ButtonLoadMoreProps?: Omit<ButtonProps, "onClick">;
    /**
     * onLoadMore on click of ButtonLoadMoreProps.
     */
    onLoadMore?: () => void;
    /**
     * resultList  show list resut of onSearch.
     * @default undefined
     */
    resultList?: InputSearchResultProps[];
    /**
     * resultEmpty  show empty if list resut is empty.
     */
    resultEmpty?: ReactNode;
    /**
     * resultPreSearch show empty if list resut is empty.
     */
    resultPreSearch?: ReactNode;
    /**
     * useSearchFixed Search fixed focus.
     * @default false
     */
    useSearchFixed?: boolean;
    /**
     * useTabFilter  show list tab filter of onSearch.
     * @default false
     */
    useTabFilter?: boolean;
    /**
     * selectMultipleTabFilter  of onSearch.
     * @default false
     */
    selectMultipleTabFilter?: boolean;
    /**
     * listTabFilter list tab filter of onSearch.
     * @default []
     */
    listTabFilter?: InputSearchTabFilterProps[];
    /**
     * defaultTabFilterSelected list tab filter of onSearch.
     * @default []
     */
    defaultTabFilterSelected?: InputSearchTabFilterProps[];
    /**
     * onChangeTabFilterSelected by InputSearchTabFilterProps.
     */
    onChangeTabFilterSelected?: (v: InputSearchTabFilterProps[]) => void;
    /**
     * useLoseFocusInEnter .
     * @default true
     */
    useLoseFocusInEnter?: boolean;
}

/**
 * Properties for the class of the InputSearch component.
 */
export interface InputSearchClassProps extends InputTextClassProps {
    /**
     * The class name for the component.
     */
    classNameSearch?: string;
    /**
     * The class name for the component bg.
     */
    classNameSearchBg?: string;
    /**
     * The class name for the component content result.
     */
    classNameSearchContentResult?: string;
    /**
     * The class name for the component result.
     */
    classNameSearchResult?: string;
}

/**
 * Properties for the InputSearch component.
 */
export interface InputSearchProps
    extends InputSearchBaseProps,
        InputSearchClassProps {}

export const InputSearch = ({
    classNameSearch = "",
    classNameSearchBg = "",
    classNameSearchContentResult = "",
    classNameSearchResult = "",

    placeholder = "Search",
    icon = <SVGSearch />,
    loader = false,

    onSearch,
    onChange,
    onClickSearch,
    onEnterSearch,
    onClearSearch: onClearSearchProps,
    useLoseFocusInEnter = true,
    defaultValue = undefined,
    value = undefined,
    useResult = false,
    useLoadMore = true,
    ButtonLoadMoreProps = {
        children: "Load More",
    },
    onLoadMore: onLoadMore_,
    useSearchFixed = false,
    useTabFilter = false,
    resultList = undefined,

    resultEmpty = (
        <>
            <Title tag="h4">Not Results</Title>
        </>
    ),
    resultPreSearch = (
        <>
            <Title tag="h4">Search</Title>
        </>
    ),

    listTabFilter = [],
    defaultTabFilterSelected = [],
    onChangeTabFilterSelected,
    selectMultipleTabFilter = false,
    iconPos = "left",
    _t,

    ...props
}: InputSearchProps) => {
    const SEARCH = useRef<HTMLInputElement>(null);
    const BG = useRef<HTMLInputElement>(null);
    const {
        data: listTabFilterSelected,
        onDeleteData: onDeleteTabFilter,
        onConcatData: onAddTabFilter,
        setData: setTabFilter,
    } = useData<InputSearchTabFilterProps[]>(defaultTabFilterSelected, {
        onChangeDataAfter: (d) => {
            onChangeTabFilterSelected?.(d);
        },
    });
    const [searchText, setSearchText] = useState<string | undefined>(
        defaultValue,
    );
    const [loaderSearch, setLoaderSearch] = useState(false);
    const { dataMemo: resultSearch, setData: setResultSearch } = useData<
        InputSearchResultProps[],
        InputSearchResultProps[]
    >(resultList ?? [], {
        data: resultList,
        onMemo: (d) => {
            return resultList ?? d ?? [];
        },
    });

    const onSearchFetch = async (
        v: string,
        l: InputSearchTabFilterProps[] | undefined = undefined,
    ) => {
        if (onSearch) {
            const r = await onSearch(v, l ?? listTabFilterSelected);
            setResultSearch(r);
        }
    };

    const onSearch_ = async (
        v: string,
        l: InputSearchTabFilterProps[] | undefined = undefined,
    ) => {
        onChange?.(v);
        setSearchText(v);
        if (onSearch) {
            setLoaderSearch(true);
            try {
                await onSearchFetch(v, l);
            } finally {
                setLoaderSearch(false);
            }
        }
    };

    const onSearchTabFilter = async (
        l: InputSearchTabFilterProps[] | undefined = undefined,
    ) => {
        setResultSearch([]);
        await onSearch_("", l);
    };

    const onFocusClickSearch = () => {
        if (SEARCH) {
            const input = SEARCH.current?.querySelector(
                ".fenext-input-content-input",
            ) as HTMLElement;

            input?.click();
            input?.focus();
        }
    };

    const onClickTabFilter = (tab: InputSearchTabFilterProps) => () => {
        if (selectMultipleTabFilter) {
            onAddTabFilter([tab]);
            onSearchTabFilter([...listTabFilterSelected, tab]);
        } else {
            setTabFilter([tab]);
            onSearchTabFilter([tab]);
        }
        onFocusClickSearch();
    };

    const onClickDeleteTabFilter = (i: number) => () => {
        const n = [...listTabFilterSelected];
        onDeleteTabFilter(i);
        onSearchTabFilter(n.filter((e, j) => e && j != i));
        onFocusClickSearch();
    };

    const onClearSearch = () => {
        setTabFilter([]);
        setSearchText("");
        onSearchTabFilter([]);
        onFocusClickSearch();
        onClearSearchProps?.();
    };
    const onLoadMore = () => {
        onLoadMore_?.();
        onFocusClickSearch();
    };

    return (
        <>
            <div
                ref={SEARCH}
                className={`fenext-input-search ${classNameSearch} ${
                    useResult
                        ? "fenext-input-search-use-result"
                        : "fenext-input-search-not-use-result"
                } 
                    ${
                        selectMultipleTabFilter
                            ? "fenext-input-search-multiple-tabs"
                            : "fenext-input-search-single-tabs"
                    }
                
                    ${useSearchFixed ? "fenext-input-search-fixed-focus" : ""}
                `}
            >
                <input
                    type="checkbox"
                    ref={BG}
                    className="fenext-input-search-checkbox"
                />
                <div
                    className={`fenext-input-search-bg ${classNameSearchBg} `}
                />
                <InputText
                    {...props}
                    _t={_t}
                    placeholder={placeholder}
                    iconPos={iconPos}
                    icon={icon}
                    onChange={onSearch_}
                    loader={loaderSearch || loader}
                    value={value ?? searchText}
                    onEnter={() => {
                        onEnterSearch?.(searchText ?? "");
                        if (useLoseFocusInEnter) {
                            BG?.current?.click?.();
                            BG?.current?.focus?.();
                        }
                        props?.onEnter?.();
                    }}
                    extraInContentInput={
                        <>
                            <div className="fenext-input-search-content-tabs fenext-input-search-content-tabs-selected">
                                {listTabFilterSelected.map((item, i) => {
                                    if (!item) {
                                        return <></>;
                                    }
                                    return (
                                        <InputSelectOption
                                            key={`${i}_item_selected_${item.id}`}
                                            onDelete={onClickDeleteTabFilter(i)}
                                            onClick={onFocusClickSearch}
                                            type="multiple"
                                            iconDelete={<Close />}
                                            {...item}
                                            _t={_t}
                                        />
                                    );
                                })}
                            </div>
                            <div
                                className="fenext-input-search-clear"
                                onClick={onClearSearch}
                            >
                                <Close />
                            </div>
                        </>
                    }
                />
                {useResult && (
                    <>
                        <div
                            className={`fenext-input-search-content-result ${classNameSearchContentResult} `}
                        >
                            {useTabFilter ? (
                                <div className="fenext-input-search-content-tabs">
                                    {listTabFilter.map((item, i) => {
                                        const existTab =
                                            listTabFilterSelected.find(
                                                (e) => e && e?.id == item?.id,
                                            ) != undefined;
                                        if (existTab) {
                                            return <></>;
                                        }
                                        return (
                                            <InputSelectOption
                                                key={`${i}_item_${item.id}`}
                                                onClick={onClickTabFilter(item)}
                                                {...item}
                                                _t={_t}
                                            />
                                        );
                                    })}
                                </div>
                            ) : (
                                <></>
                            )}
                            {resultSearch.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`fenext-input-search-result ${classNameSearchResult} `}
                                        onClick={() => {
                                            onClickSearch?.(item);
                                            setSearchText(item.text);
                                        }}
                                    >
                                        {_tValidate(
                                            item?.content ?? item?.text,
                                            _t,
                                        )}
                                    </div>
                                );
                            })}
                            {resultSearch.length == 0 ? (
                                <>
                                    {searchText === undefined ||
                                    loader ||
                                    loaderSearch ? (
                                        <>
                                            <div
                                                className={`fenext-input-search-content-result-pre-search `}
                                            >
                                                {_tValidate(
                                                    resultPreSearch,
                                                    _t,
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className={`fenext-input-search-content-result-empty `}
                                            >
                                                {_tValidate(resultEmpty, _t)}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    {useLoadMore ? (
                                        <>
                                            <div className="fenext-input-search-content-load-more ">
                                                <Button
                                                    {...ButtonLoadMoreProps}
                                                    onClick={onLoadMore}
                                                    _t={_t}
                                                    className={`fenext-input-search-load-more ${
                                                        ButtonLoadMoreProps?.className ??
                                                        ""
                                                    }`}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
