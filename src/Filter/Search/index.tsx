import React  from "react";
import {  useFilter } from "fenextjs-hook";
import { InputSearch,InputSearchClassProps} from "../../Input/Search";
import { _TProps, SearchDataProps } from "fenextjs-interface";

export interface FilterSearchClassProps {
    className?: string;
    classNameSearch?:InputSearchClassProps
}
export interface FilterSearchProps extends FilterSearchClassProps, _TProps {
    defaultValue?: SearchDataProps;
    onChange?: (data: SearchDataProps) => void;
    nameFilter?:string
}

export const FilterSearch = ({
    className="",
    classNameSearch={},

    onChange,
    defaultValue = {},
    nameFilter,

    ...p
}: FilterSearchProps) => {
    const { onChangeData } = useFilter({name:nameFilter})

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
                    onEnterSearch={(search)=>{
                        onChangeData("search")(search)
                        onChange?.({search})
                    }}
                />
            </div>
        </>
    );
};
