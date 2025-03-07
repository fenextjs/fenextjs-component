import React, { ReactNode } from "react";
import { SvgTrash } from "fenextjs-svg";
import {
    use_T,
    useData,
    useDate,
    useFilter,
    usePagination,
} from "fenextjs-hook";
import { Text, TextProps } from "../../Text";
import { DropDown, DropDownClassProps } from "../../DropDown";
import { InputCalendar, InputCalendarClassProps } from "../../Input/Calendar";
import { InputSwich, InputSwichClassProps } from "../../Input/Swich";
import { Button, ButtonClassProps } from "../../Button";
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

    extraListBtn?: ((
        data: ReturnType<typeof useData<DateDataProps>>,
    ) => ReactNode)[];

    nMonthShow?: number;

    nameFilter?: string;
}

export const FilterDate = ({
    onChange,
    defaultValue = {},

    formatDateOption = {},

    className = "",
    classNameDropDown = {},
    classNameCollapse = {},
    classNameBtnToday = {},
    classNameBtnWeek = {},
    classNameTextValue = {},
    classNameTextSwich = {},
    classNameInputSwich = {},
    classNameContentTop = "",
    classNameLabelSwich = "",
    classNameClear = "",

    textValue = "Filtrar por fecha:",
    textFilterByDate = "Filtar por fecha",
    textFilterByRange = "Filtar por rango",
    textBtnToday = "Hoy",
    textBtnWeek = "Esta Semana",

    iconTrash = <SvgTrash />,

    extraListBtn = [],

    nMonthShow = 2,

    nameFilter,
    ...p
}: FilterDateProps) => {
    const { _t } = use_T({ ...p });
    const { onChangeData: onChangeDataPagination } = usePagination({
        name: nameFilter,
    });
    const { onChangeData: onChangeDataFilter } = useFilter({
        name: nameFilter,
    });
    const date = useDate({});
    const { data, onChangeData, onConcatData, setData, ...HOOK } =
        useData<DateDataProps>(
            {
                type: "normal",
                ...defaultValue,
            },
            {
                onChangeDataAfter: (e) => {
                    const date = { ...e };
                    if (date.date) {
                        date.date.setHours(0);
                        date.date.setMinutes(0);
                        date.date.setSeconds(0);
                        date.date.setMilliseconds(0);
                    }
                    if (date.dateRange?.[0]) {
                        date.dateRange?.[0].setHours(0);
                        date.dateRange?.[0].setMinutes(0);
                        date.dateRange?.[0].setSeconds(0);
                        date.dateRange?.[0].setMilliseconds(0);
                    }
                    if (date.dateRange?.[1]) {
                        date.dateRange?.[1].setHours(0);
                        date.dateRange?.[1].setMinutes(0);
                        date.dateRange?.[1].setSeconds(0);
                        date.dateRange?.[1].setMilliseconds(0);
                        date.dateRange?.[1].setDate(
                            date.dateRange?.[1]?.getDate() + 1,
                        );
                        date.dateRange?.[1].setSeconds(
                            date.dateRange?.[1]?.getSeconds() - 10,
                        );
                    }

                    if (
                        (date.type == "range" &&
                            date.dateRange?.[0] &&
                            date.dateRange?.[1]) ||
                        (date.type == "normal" && date.date)
                    ) {
                        onChangeDataPagination("page")(0);
                        onChangeDataFilter("date")(date);
                    }

                    onChange?.(date);
                },
            },
        );

    return (
        <>
            <div
                className={`
                    fenext-filter-date  
                    ${className}
                `}
            >
                <DropDown
                    header={
                        <>
                            <Text
                                {...classNameTextValue}
                                className={`fenext-filter-date-text-value ${classNameTextValue?.className ?? ""}`}
                            >
                                {_t(textValue)}{" "}
                                {data.type == "normal" &&
                                    data.date != undefined && (
                                        <>
                                            {date.onFormat(
                                                formatDateOption,
                                                data.date,
                                            )}
                                        </>
                                    )}
                                {data.type == "range" &&
                                    data.dateRange != undefined && (
                                        <>
                                            {date.onFormat(
                                                formatDateOption,
                                                data.dateRange?.[0],
                                            )}{" "}
                                            -
                                            {data.dateRange?.[1] != undefined
                                                ? date.onFormat(
                                                      formatDateOption,
                                                      data.dateRange?.[1],
                                                  )
                                                : ""}
                                        </>
                                    )}
                            </Text>
                        </>
                    }
                    {...classNameDropDown}
                    rotateIcon={false}
                    classNameBody={`
                        fenext-filter-date-dropdown-body
                        ${[classNameDropDown.classNameBody]}
                    `}
                >
                    <div
                        className={`fenext-filter-date-content-top  ${classNameContentTop}`}
                    >
                        <label
                            className={`
                                fenext-filter-date-label-swich    
                                ${classNameLabelSwich}
                            `}
                        >
                            <Text {...classNameTextSwich}>
                                {_t(textFilterByDate)}
                            </Text>
                            <InputSwich
                                value={data.type == "normal"}
                                onChange={(e) => {
                                    onChangeData("type")(
                                        e ? "normal" : "range",
                                    );
                                }}
                                {...classNameInputSwich}
                            />
                        </label>
                        <label
                            className={`
                                fenext-filter-date-label-swich    
                                ${classNameLabelSwich}
                            `}
                        >
                            <Text {...classNameTextSwich}>
                                {_t(textFilterByRange)}
                            </Text>
                            <InputSwich
                                value={data.type == "range"}
                                onChange={(e) => {
                                    onChangeData("type")(
                                        !e ? "normal" : "range",
                                    );
                                }}
                                {...classNameInputSwich}
                            />
                        </label>
                        <div
                            className={`
                                fenext-filter-date-content-btn    
                            `}
                        >
                            <Button
                                {...classNameBtnToday}
                                onClick={() => {
                                    onConcatData({
                                        type: "normal",
                                        date: new Date(),
                                    });
                                }}
                                size="extra-small"
                            >
                                {_t(textBtnToday)}
                            </Button>
                            <Button
                                {...classNameBtnWeek}
                                onClick={() => {
                                    const start = new Date();
                                    start.setDate(
                                        start.getDate() - start.getDay(),
                                    );
                                    const end = new Date();
                                    end.setDate(
                                        end.getDate() + (6 - end.getDay()),
                                    );
                                    onConcatData({
                                        type: "range",
                                        dateRange: [start, end],
                                    });
                                }}
                                size="extra-small"
                            >
                                {_t(textBtnWeek)}
                            </Button>
                            {extraListBtn.map((f) =>
                                f({
                                    data,
                                    onChangeData,
                                    onConcatData,
                                    setData,
                                    ...HOOK,
                                }),
                            )}
                        </div>
                    </div>

                    <InputCalendar
                        onChange={onChangeData("date")}
                        onChangeRange={onChangeData("dateRange")}
                        type={data.type}
                        nMonthShow={nMonthShow}
                        collapseProps={{
                            active: true,
                        }}
                        value={data.date}
                        valueRange={data.dateRange}
                        {...classNameCollapse}
                    />
                </DropDown>
                {((data?.type == "normal" && data?.date != undefined) ||
                    (data?.type == "range" &&
                        data?.dateRange?.[0] != undefined &&
                        data?.dateRange?.[1] != undefined)) && (
                    <div
                        className={`
                            fenext-filter-date-clear
                            ${classNameClear}
                        `}
                        onClick={() => {
                            setData({
                                type: "normal",
                            });
                            onChangeDataFilter("date")({
                                type: "normal",
                            });
                            onChangeDataPagination("page")(0);
                        }}
                    >
                        {iconTrash}
                    </div>
                )}
            </div>
        </>
    );
};
