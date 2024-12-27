import React, { ReactNode } from "react";
import { useData } from "fenextjs-hook";
import { TextProps } from "../../Text";
import { DropDownClassProps } from "../../DropDown";
import { InputCalendarMonthProps } from "../../Input/Calendar/Month";
import { InputCalendarClassProps } from "../../Input/Calendar";
import { InputSwichClassProps } from "../../Input/Swich";
import { ButtonClassProps } from "../../Button";
import { FenextjsDateFormatOptions } from "fenextjs-date";
import { _TProps } from "fenextjs-interface";
export interface FilterDateDataProps {
    type?: InputCalendarMonthProps["type"];
    date?: Date;
    dateRange?: Date[];
}
export interface FilterDateClassProps {
    className?: string;
    classNameDropDown?: DropDownClassProps;
    classNameCollapse?: InputCalendarClassProps;
    classNameBtnToday?: ButtonClassProps;
    classNameBtnWeek?: ButtonClassProps;
    classNameTextValue?: Pick<TextProps, "tag" | "className">;
    classNameTextSwich?: Pick<TextProps, "tag" | "className">;
    classNameInputSwich?: InputSwichClassProps;
    classNameContentTop?: string;
    classNameLabelSwich?: string;
    classNameClear?: string;
}
export interface FilterDateProps extends FilterDateClassProps, _TProps {
    defaultValue?: FilterDateDataProps;
    onChange?: (data: FilterDateDataProps) => void;
    formatDateOption?: FenextjsDateFormatOptions;
    textValue?: string;
    textFilterByDate?: string;
    textFilterByRange?: string;
    textBtnToday?: string;
    textBtnWeek?: string;
    iconTrash?: ReactNode;
    extraListBtn?: ((data: ReturnType<typeof useData<FilterDateDataProps>>) => ReactNode)[];
    nMonthShow?: number;
}
export declare const FilterDate: ({ onChange, defaultValue, formatDateOption, className, classNameDropDown, classNameCollapse, classNameBtnToday, classNameBtnWeek, classNameTextValue, classNameTextSwich, classNameInputSwich, classNameContentTop, classNameLabelSwich, classNameClear, textValue, textFilterByDate, textFilterByRange, textBtnToday, textBtnWeek, iconTrash, extraListBtn, nMonthShow, ...p }: FilterDateProps) => React.JSX.Element;
