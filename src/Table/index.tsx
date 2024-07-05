import React, { ReactNode, useEffect, useMemo, useState } from "react";

import { Pagination, PaginationProps } from "../Pagination";
import { InputCheckbox } from "../Input/Checkbox";
import { DropDown } from "../DropDown";
import { Loader } from "../Loader";
import { LoaderLine } from "../Loader/Line";
import { InputRadio } from "..";
import {
    TableActionCheckbox,
    TableActionCheckboxProps,
} from "../TableActionCheckbox";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

/**
 * Represents the properties that can be passed to a table component to specify CSS class names.
 */
export interface TableClassProps {
    /**
     * A CSS class name for the overall content container of the table.
     */
    classNameContent?: string;

    /**
     * A CSS class name for the table element within the content container.
     */
    classNameContentTable?: string;

    /**
     * A CSS class name for the table element itself.
     */
    classNameTable?: string;

    /**
     * A CSS class name for the table header element.
     */
    classNameTHead?: string;

    /**
     * A CSS class name for the table body element.
     */
    classNameTBody?: string;

    /**
     * A CSS class name for the table row header element.
     */
    classNameThr?: string;

    /**
     * A CSS class name for the table row element.
     */
    classNameTr?: string;

    /**
     * A CSS class name for the table cell header element.
     */
    classNameTh?: string;

    /**
     * A CSS class name for the table cell element.
     */
    classNameTd?: string;

    /**
     * A CSS class name for the content container of the pagination component.
     */
    classNameContentPagination?: string;

    /**
     * A CSS class name for the loader element.
     */
    classNameLoader?: string;
}
/**
 * A type that represents the header of a table component.
 *
 * @template T The type of data that the table contains.
 */
export type TableHeader<T> = {
    /**
     * The property key in the data object that corresponds to this header column.
     */
    id: keyof T;

    /**
     * The label to display in the header column.
     */
    th: React.ReactNode;

    /**
     * A function that can be used to transform the data before displaying it in the table cell.
     * This function takes in the data object for the row and returns the transformed value.
     *
     * @param data The data object for the row.
     * @returns The transformed value to display in the table cell.
     */
    parse?: (data: T) => any;
    /**
     * The columnOptions for table.
     */
    columnOptions?: {
        orderBy?: boolean;
        showHidden?: boolean;
    };
    /**
     * The label to display in the header column.
     */
    defaultShowHidden?: "show" | "hidden";
    /**
     * The column width : 100% in new tr;
     */
    colNewTr?: boolean;
    /**
     * The className of de column;
     */
    className?: string;
}[];

/**
 * Represents the base properties that can be passed to a table component.
 *
 * @template T The type of data that the table contains.
 */
export interface TableBaseProps<T> extends _TProps {
    /**
     * Name the table.
     */
    name: string;
    /**
     * An array of data objects to display in the table.
     */
    items: T[];

    /**
     * The header configuration for the table.
     */
    header: TableHeader<T>;

    /**
     * Optional pagination properties for the table.
     */
    pagination?: PaginationProps;

    /**
     * Whether to display a loader while the table data is being loaded.
     */
    loader?: boolean;

    /**
     * typeLoader for show loader.
     * @default "line"
     */
    typeLoader?: "spinner" | "line";

    /**
     * If use checkbox in table.
     */
    useCheckbox?: boolean;

    /**
     * If on checked items.
     */
    onChecked?: (items: T[]) => void;

    /**
     * onOrderBy table.
     */
    onOrderBy?: (order: { id: keyof T; order: "ASC" | "DESC" }) => void;

    /**
     * onShowHidden table.
     */
    onShowHidden?: (showHidden: {
        id: keyof T;
        showHidden: "SHOW" | "HIDDEN";
    }) => void;
    /**
     * notResult the table.
     */
    notResult?: ReactNode;

    /**
     * If use checkbox in table.
     */
    showPagination?: boolean;

    actionsCheckbox?: Omit<
        TableActionCheckboxProps<T>,
        "actionAllCheckbox" | "data"
    >;
    actionsCheckboxSelectAll?: ReactNode;
}
/**
 * Represents the properties that can be passed to a table component.
 *
 * @template T The type of data that the table contains.
 */
export interface TableProps<T> extends TableClassProps, TableBaseProps<T> {}

export const Table = <T,>({
    classNameContent = "",

    classNameContentTable = "",
    classNameTable = "",
    classNameTHead = "",
    classNameTBody = "",
    classNameThr = "",
    classNameTr = "",
    classNameTh = "",
    classNameTd = "",

    classNameContentPagination = "",

    classNameLoader = "",

    name,
    items,
    header,

    pagination,
    showPagination = true,
    loader = false,
    typeLoader = "line",
    useCheckbox = true,
    onOrderBy,
    onShowHidden,
    onChecked,
    notResult = <div>There is not results</div>,
    actionsCheckbox,
    actionsCheckboxSelectAll = "Select All",
    ...props
}: TableProps<T>) => {
    const { _t } = use_T({ ...props });
    const checkboxItems = useMemo(
        () => items.map((item: T) => ({ ...item, __checkbox: false })),
        [items],
    );
    const [checkbox, setCheckbox] =
        useState<(T & { __checkbox: boolean })[]>(checkboxItems);

    const onCheckedAll = (v: boolean) => {
        const itemsChange = items.map((item: T) => ({
            ...item,
            __checkbox: v,
        }));
        setCheckbox(itemsChange);
        onChecked?.(itemsChange?.filter((e) => e.__checkbox));
    };
    const onCheckedItem = (i: number) => (__checkbox: boolean) => {
        setCheckbox((pre) => {
            const itemsChange = pre.map((e, j) => {
                return {
                    ...e,
                    ...(i == j
                        ? {
                              __checkbox,
                          }
                        : {}),
                };
            });
            onChecked?.(itemsChange?.filter((e) => e.__checkbox));
            return itemsChange;
        });
    };

    useEffect(() => {
        setCheckbox(checkboxItems);
    }, [checkboxItems]);

    const headerNotTr = useMemo(
        () => header.filter((e) => e.colNewTr !== true),
        [header],
    );
    const headerTr = useMemo(
        () => header.filter((e) => e.colNewTr === true),
        [header],
    );

    const CONTENT = useMemo(() => {
        if (loader) {
            if (typeLoader == "spinner") {
                return (
                    <tr
                        className={`fenext-table-content-table-tr ${classNameTr}`}
                    >
                        <td
                            className={`fenext-table-content-table-td ${classNameTd}`}
                            colSpan={999}
                        >
                            <div className={`${classNameLoader}`}>
                                <Loader />
                            </div>
                        </td>
                    </tr>
                );
            }
            return new Array(Math.min(pagination?.nItemsPage ?? 10, 20))
                .fill(1)
                .map((item, i) => (
                    <tr
                        key={i * item}
                        className={`fenext-table-content-table-tr ${classNameTr}`}
                    >
                        {useCheckbox && (
                            <td
                                key={`${i}-checkbox`}
                                className={`fenext-table-content-table-td ${classNameTd}`}
                            >
                                <InputCheckbox value={false} useValue={true} />
                            </td>
                        )}
                        {headerNotTr.map((h, j) => (
                            <td
                                key={`${i}-${j}`}
                                className={`fenext-table-content-table-td ${classNameTd}`}
                                style={
                                    {
                                        ["--fenext-table-head-th"]: `"${h?.th}"`,
                                    } as React.CSSProperties
                                }
                                data-col-id={h?.id}
                                data-col-text={h?.th}
                            >
                                <LoaderLine />
                            </td>
                        ))}
                    </tr>
                ));
        }
        if (items.length == 0) {
            return (
                <tr className={`fenext-table-content-table-tr ${classNameTr}`}>
                    <td
                        className={`fenext-table-content-table-td fenext-table-not-result ${classNameTd}`}
                        colSpan={999}
                    >
                        {_t(notResult)}
                    </td>
                </tr>
            );
        }
        return items.map((item, i) => {
            return (
                <>
                    <tr
                        key={i}
                        className={`fenext-table-content-table-tr ${classNameTr}`}
                    >
                        {useCheckbox && (
                            <td
                                key={`${i}-checkbox`}
                                className={`fenext-table-content-table-td ${classNameTd}`}
                            >
                                <InputCheckbox
                                    onChange={onCheckedItem(i)}
                                    value={checkbox[i]?.__checkbox ?? false}
                                    useValue={true}
                                />
                            </td>
                        )}
                        {headerNotTr.map((h, j) => (
                            <td
                                key={`${i}-${j}`}
                                className={`fenext-table-content-table-td ${classNameTd} ${h?.className ?? ""}`}
                                style={
                                    {
                                        ["--fenext-table-head-th"]: `"${h?.th}"`,
                                    } as React.CSSProperties
                                }
                                data-col-id={h?.id}
                                data-col-text={h?.th}
                            >
                                {h?.parse?.(item) ?? item[h.id] ?? ""}
                            </td>
                        ))}
                    </tr>
                    {headerTr.map((new_tr, j) => {
                        return (
                            <>
                                <tr
                                    key={`${i}_tr_${j}`}
                                    className={`fenext-table-content-table-tr ${classNameTr} ${new_tr?.className ?? ""}`}
                                >
                                    <td
                                        key={`${i}-${j}`}
                                        className={`fenext-table-content-table-td ${classNameTd}`}
                                        style={
                                            {
                                                ["--fenext-table-head-th"]: `"${new_tr?.th}"`,
                                            } as React.CSSProperties
                                        }
                                        colSpan={100}
                                        data-col-id={new_tr?.id}
                                        data-col-text={new_tr?.th}
                                    >
                                        {new_tr?.parse?.(item) ??
                                            item[new_tr.id] ??
                                            ""}
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </>
            );
        });
    }, [
        items,
        header,
        headerNotTr,
        loader,
        classNameTr,
        classNameTd,
        useCheckbox,
        checkbox,
        typeLoader,
        notResult,
        headerTr,
    ]);

    return (
        <>
            <div
                className={`fenext-table ${classNameContent}`}
                style={
                    {
                        ["--fenext-table-name"]: `"${name}"`,
                    } as React.CSSProperties
                }
            >
                {useCheckbox &&
                    checkbox.some((e) => e.__checkbox) &&
                    actionsCheckbox && (
                        <div className={`fenext-table-content-actions`}>
                            <TableActionCheckbox
                                {...actionsCheckbox}
                                actionAllCheckbox={{
                                    label: actionsCheckboxSelectAll,
                                    onChange: onCheckedAll,
                                    value: checkbox.every(
                                        (e) => e?.__checkbox ?? false,
                                    ),
                                    useValue: true,
                                }}
                                data={checkbox.filter((e) => e.__checkbox)}
                            />
                        </div>
                    )}
                <div
                    className={`fenext-table-content ${classNameContentTable}`}
                >
                    <table
                        className={`fenext-table-content-table ${classNameTable}`}
                    >
                        <thead
                            className={`fenext-table-content-table-thead ${classNameTHead}`}
                        >
                            <tr
                                className={`fenext-table-content-table-thr ${classNameThr}`}
                            >
                                {useCheckbox && (
                                    <th
                                        className={`fenext-table-content-table-th ${classNameTh}`}
                                    >
                                        <InputCheckbox
                                            onChange={onCheckedAll}
                                            value={checkbox.every(
                                                (e) => e?.__checkbox ?? false,
                                            )}
                                            useValue={true}
                                            _t={_t}
                                        />
                                    </th>
                                )}
                                {headerNotTr.map((h, i) => (
                                    <th
                                        key={i}
                                        className={`fenext-table-content-table-th ${classNameTh} ${h?.className ?? ""}`}
                                        data-col-id={h?.id}
                                        data-col-text={h?.th}
                                    >
                                        <DropDown header={<>{_t(h.th)}</>}>
                                            {h?.columnOptions?.orderBy ? (
                                                <>
                                                    <div
                                                        onClick={() => {
                                                            onOrderBy?.({
                                                                id: h.id,
                                                                order: "ASC",
                                                            });
                                                        }}
                                                        className={`fenext-table-content-table-th-popup-item fenext-table-content-table-th-order-by`}
                                                    >
                                                        {_t("Order ASC")}
                                                    </div>
                                                    <div
                                                        onClick={() => {
                                                            onOrderBy?.({
                                                                id: h.id,
                                                                order: "DESC",
                                                            });
                                                        }}
                                                        className={`fenext-table-content-table-th-popup-item fenext-table-content-table-th-order-by`}
                                                    >
                                                        {_t("Order DESC")}
                                                    </div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            {h?.columnOptions?.showHidden ? (
                                                <>
                                                    <InputRadio
                                                        name={`${h.th}-${i}-show-hidden`}
                                                        _t={_t}
                                                        items={[
                                                            {
                                                                id: "show",
                                                                label: "Show",
                                                            },
                                                            {
                                                                id: "hidden",
                                                                label: "Hidden",
                                                            },
                                                        ]}
                                                        defaultValue={{
                                                            id: "show",
                                                            label: "Show",
                                                        }}
                                                        labelPosition="right"
                                                        onChange={(e) => {
                                                            onShowHidden?.({
                                                                id: h.id,
                                                                showHidden:
                                                                    e?.id ==
                                                                    "show"
                                                                        ? "SHOW"
                                                                        : "HIDDEN",
                                                            });
                                                        }}
                                                    />
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </DropDown>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody
                            className={`fenext-table-content-table-tbody ${classNameTBody}`}
                        >
                            {CONTENT}
                        </tbody>
                    </table>
                </div>
                {pagination && showPagination && (
                    <div
                        className={`fenext-table-content-pagination ${classNameContentPagination}`}
                    >
                        <Pagination {...pagination} disabled={loader} _t={_t} />
                    </div>
                )}
            </div>
        </>
    );
};
