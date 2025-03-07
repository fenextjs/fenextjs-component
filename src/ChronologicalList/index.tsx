import { getTimeToText, parseDateYYYYMMDD } from "fenextjs-functions";
import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode, useMemo } from "react";

/**
 * Properties for the base ChronologicalList component.
 */
export interface ChronologicalListItemsProps {
    date: Date;
    children: ReactNode;
    market?: ReactNode;
    className?: string;
}

/**
 * Properties for the base ChronologicalList component.
 */
export interface ChronologicalListBaseProps extends _TProps {
    /**
     * The list of items for chronological
     */
    items: ChronologicalListItemsProps[];
    /**
     * The market custom for all items
     */
    market?: ReactNode;
    /**
     * Function for parse day, month and year
     */
    parseDateYYYYMMDD?: (date: Date) => ReactNode;
    /**
     * Function for parse hours, minutes and seconds
     */
    parseDateHHMMSS?: (date: Date) => ReactNode;
}

/**
 * Properties for the class of the ChronologicalList component.
 */
export interface ChronologicalListClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ChronologicalList component.
 */
export interface ChronologicalListProps
    extends ChronologicalListBaseProps,
        ChronologicalListClassProps {}

export const ChronologicalList = ({
    className = "",
    items,
    market = undefined,
    parseDateHHMMSS: parseDateHHMMSSProps,
    parseDateYYYYMMDD: parseDateYYYYMMDDProps,
    ...props
}: ChronologicalListProps) => {
    const { _t } = use_T({ ...props });
    const ITEMS = useMemo(() => {
        const i_: {
            [id: string]: {
                [id: string]: ChronologicalListItemsProps[];
            };
        } = {};
        items.forEach((element) => {
            const date = parseDateYYYYMMDD(element?.date);
            const time = getTimeToText(element?.date, {
                days: false,
            });

            i_[date] ??= {};
            i_[date][time] ??= [];
            i_[date][time].push(element);
        });
        return i_;
    }, [items]);

    return (
        <>
            <div className={`fenext-chronological-list ${className} `}>
                {Object.keys(ITEMS).map((key_Day, i) => {
                    const items_day = ITEMS[key_Day];
                    return (
                        <>
                            <div
                                className={`fenext-chronological-list-group`}
                                key={i}
                            >
                                <div
                                    className={`fenext-chronological-list-group-day`}
                                >
                                    {parseDateYYYYMMDDProps
                                        ? parseDateYYYYMMDDProps(
                                              new Date(key_Day),
                                          )
                                        : key_Day}
                                </div>
                                <div
                                    className={`fenext-chronological-list-group-list`}
                                >
                                    {Object.keys(items_day).map(
                                        (key_time, j) => {
                                            const itemsList =
                                                items_day[key_time];
                                            return (
                                                <>
                                                    {itemsList?.map(
                                                        (item, k) => {
                                                            return (
                                                                <>
                                                                    <div
                                                                        key={`${j}-${k}`}
                                                                        className={`fenext-chronological-list-item ${item?.className ?? ""}`}
                                                                    >
                                                                        <div
                                                                            className={`fenext-chronological-list-item-market`}
                                                                        >
                                                                            {item?.market ??
                                                                                market ?? (
                                                                                    <div
                                                                                        className={`fenext-chronological-list-item-market-default`}
                                                                                    />
                                                                                )}
                                                                        </div>

                                                                        <div
                                                                            className={`fenext-chronological-list-item-children`}
                                                                        >
                                                                            {_t(
                                                                                item?.children,
                                                                            )}
                                                                        </div>
                                                                        <div
                                                                            className={`fenext-chronological-list-item-time`}
                                                                        >
                                                                            {parseDateHHMMSSProps
                                                                                ? parseDateHHMMSSProps(
                                                                                      item.date,
                                                                                  )
                                                                                : key_time}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            );
                                                        },
                                                    )}
                                                </>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};
