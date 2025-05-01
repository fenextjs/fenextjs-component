import React from "react";
import { useFilter, usePagination } from "fenextjs-hook";
import {
    InputSearch,
    InputSearchBaseProps,
    InputSearchClassProps,
} from "../../Input/Search";
import { _TProps, SearchDataProps } from "fenextjs-interface";

export interface FilterSearchClassProps {
    className?: string;
    classNameSearch?: InputSearchClassProps;
}
export interface FilterSearchProps
    extends Omit<InputSearchBaseProps, "defaultValue" | "onChange">,
        FilterSearchClassProps,
        _TProps {
    defaultValue?: SearchDataProps;
    onChange?: (data: SearchDataProps) => void;
    nameFilter?: string;
}

export const FilterSearch = ({
    className = "",
    classNameSearch = {},

    onChange,
    defaultValue = {},
    nameFilter,

    ...p
}: FilterSearchProps) => {
    const { onChangeData: onChangeDataPagination } = usePagination({
        name: nameFilter,
    });
    const { onChangeData } = useFilter({ name: nameFilter });

    return (
        <>
            <div
                className={`
                    fenext-filter-search  
                    ${className}
                `}
            >
                <InputSearch
                    {...classNameSearch}
                    {...p}
                    defaultValue={defaultValue?.search}
                    onEnterSearch={(search) => {
                        onChangeDataPagination("page")(0);
                        onChangeData("search")(search);
                        onChange?.({ search });
                    }}
                    onClearSearch={() => {
                        onChangeDataPagination("page")(0);
                        onChangeData("search")("");
                        onChange?.({ search: "" });
                    }}
                />
            </div>
        </>
    );
};
