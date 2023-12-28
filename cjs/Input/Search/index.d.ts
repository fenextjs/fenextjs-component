import React, { ReactNode } from "react";
import { InputSelectOptionProps } from "../SelectOption";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { ButtonProps } from "../../Button";
/**
 * Properties for the base InputSearch component.
 */
export interface InputSearchTabFilterProps extends Omit<InputSelectOptionProps, "type" | "disabled" | "selected" | "onClick" | "onDelete" | "_t" | "isBtn" | "data" | "iconDelete"> {
}
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
    onSearch?: (v: string, tabFilter?: InputSearchTabFilterProps[]) => Promise<InputSearchResultProps[]>;
    /**
     * onEnterSearch by InputSearchResultProps.
     */
    onEnterSearch?: (v: string) => void;
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
export interface InputSearchProps extends InputSearchBaseProps, InputSearchClassProps {
}
export declare const InputSearch: ({ classNameSearch, classNameSearchBg, classNameSearchContentResult, classNameSearchResult, placeholder, icon, loader, onSearch, onChange, onClickSearch, onEnterSearch, useLoseFocusInEnter, defaultValue, value, useResult, useLoadMore, ButtonLoadMoreProps, onLoadMore: onLoadMore_, useSearchFixed, useTabFilter, resultList, resultEmpty, resultPreSearch, listTabFilter, defaultTabFilterSelected, onChangeTabFilterSelected, selectMultipleTabFilter, iconPos, _t, ...props }: InputSearchProps) => React.JSX.Element;
