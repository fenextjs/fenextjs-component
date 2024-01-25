import { _TProps } from "fenextjs-interface";
import React, { ReactNode, useMemo } from "react";
import { InputRadio, InputRadioItemProps } from "../../Input/Radio";

/**
 * Properties for the base SwichViewList component.
 */
export interface SwichViewListBaseItemProps<T> {
    id: T;
    icon: ReactNode;
}
/**
 * Properties for the base SwichViewList component.
 */
export interface SwichViewListBaseProps<T> extends _TProps {
    name?: string;
    /**
     * The class name for the component.
     */
    list?: SwichViewListBaseItemProps<T>[];
    /**
     * The class name for the component.
     */
    defaultValue?: T;

    /**
     * The class name for the component.
     */
    onChange?: (e?: T) => void;
}

/**
 * Properties for the class of the SwichViewList component.
 */
export interface SwichViewListClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the SwichViewList component.
 */
export interface SwichViewListProps<T>
    extends SwichViewListBaseProps<T>,
        SwichViewListClassProps {}

export const SwichViewList = <T,>({
    className = "",
    defaultValue,
    onChange,
    list = [],
    name = "fenext-swich-view",
}: SwichViewListProps<T>) => {
    const ITEMS = useMemo<InputRadioItemProps<T>[]>(() => {
        return list.map((e) => {
            return {
                id: `fenext-swich-view-${e.id}`,
                label: (
                    <>
                        <div className={`fenext-swich-view-item`}>{e.icon}</div>
                    </>
                ),
                data: e.id,
            };
        });
    }, [defaultValue, list]);

    return (
        <div className={`fenext-swich-view ${className}`}>
            <InputRadio
                name={name}
                defaultValue={ITEMS.find((e) => e.data == defaultValue)}
                items={ITEMS}
                onChange={(e) => {
                    onChange?.(e?.data);
                }}
            />
        </div>
    );
};
