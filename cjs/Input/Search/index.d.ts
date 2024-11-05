import React, { ReactNode } from "react";
import { InputSelectOptionProps } from "../SelectOption";
import { InputTextBaseProps, InputTextClassProps } from "../Text";
import { ButtonProps } from "../../Button";
export interface InputSearchTabFilterProps extends Omit<InputSelectOptionProps, "type" | "disabled" | "selected" | "onClick" | "onDelete" | "_t" | "isBtn" | "data" | "iconDelete"> {
}
export interface InputSearchResultProps {
    id: string;
    text: string;
    content?: ReactNode;
    data?: any;
}
export interface InputSearchBaseProps extends Omit<InputTextBaseProps, "type"> {
    onSearch?: (v: string, tabFilter?: InputSearchTabFilterProps[]) => Promise<InputSearchResultProps[]>;
    onEnterSearch?: (v: string) => void;
    onClearSearch?: () => void;
    onClickSearch?: (v: InputSearchResultProps) => void;
    useResult?: boolean;
    useLoadMore?: boolean;
    ButtonLoadMoreProps?: Omit<ButtonProps, "onClick">;
    onLoadMore?: () => void;
    resultList?: InputSearchResultProps[];
    resultEmpty?: ReactNode;
    resultPreSearch?: ReactNode;
    useSearchFixed?: boolean;
    useTabFilter?: boolean;
    selectMultipleTabFilter?: boolean;
    listTabFilter?: InputSearchTabFilterProps[];
    defaultTabFilterSelected?: InputSearchTabFilterProps[];
    onChangeTabFilterSelected?: (v: InputSearchTabFilterProps[]) => void;
    useLoseFocusInEnter?: boolean;
    iconClear?: ReactNode;
}
export interface InputSearchClassProps extends InputTextClassProps {
    classNameSearch?: string;
    classNameSearchBg?: string;
    classNameSearchContentResult?: string;
    classNameSearchResult?: string;
}
export interface InputSearchProps extends InputSearchBaseProps, InputSearchClassProps {
}
export declare const InputSearch: ({ classNameSearch, classNameSearchBg, classNameSearchContentResult, classNameSearchResult, placeholder, icon, iconClear, loader, onSearch, onChange, onClickSearch, onEnterSearch, onClearSearch: onClearSearchProps, useLoseFocusInEnter, defaultValue, value, useResult, useLoadMore, ButtonLoadMoreProps, onLoadMore: onLoadMore_, useSearchFixed, useTabFilter, resultList, resultEmpty, resultPreSearch, listTabFilter, defaultTabFilterSelected, onChangeTabFilterSelected, selectMultipleTabFilter, iconPos, ...props }: InputSearchProps) => React.JSX.Element;
