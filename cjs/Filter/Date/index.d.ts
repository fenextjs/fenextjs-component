import React, { ReactNode } from "react";
import { useData } from "fenextjs-hook";
import { TextProps } from "../../Text";
import { DropDownClassProps } from "../../DropDown";
import { InputCalendarClassProps } from "../../Input/Calendar";
import { InputSwichClassProps } from "../../Input/Swich";
import { ButtonClassProps } from "../../Button";
import { FenextjsDateFormatOptions } from "fenextjs-date";
import { _TProps, DateDataProps } from "fenextjs-interface";
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
    defaultValue?: DateDataProps;
    onChange?: (data: DateDataProps) => void;
    formatDateOption?: FenextjsDateFormatOptions;
    textValue?: string;
    textFilterByDate?: string;
    textFilterByRange?: string;
    textBtnToday?: string;
    textBtnWeek?: string;
    iconTrash?: ReactNode;
    extraListBtn?: ((data: ReturnType<typeof useData<DateDataProps>>) => ReactNode)[];
    nMonthShow?: number;
    nameFilter?: string;
}
export declare const FilterDate: ({ onChange, defaultValue, formatDateOption, className, classNameDropDown, classNameCollapse, classNameBtnToday, classNameBtnWeek, classNameTextValue, classNameTextSwich, classNameInputSwich, classNameContentTop, classNameLabelSwich, classNameClear, textValue, textFilterByDate, textFilterByRange, textBtnToday, textBtnWeek, iconTrash, extraListBtn, nMonthShow, nameFilter, ...p }: FilterDateProps) => React.JSX.Element;
