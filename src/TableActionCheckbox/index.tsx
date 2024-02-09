import { _TProps } from "fenextjs-interface";
import React, { ReactNode, useMemo } from "react";
import { InputCheckbox, InputCheckboxProps } from "../Input/Checkbox";

/**
 * Properties for the base TableActionCheckbox component.
 */
export interface TableActionCheckboxBaseProps<T> extends _TProps {
    /**
     * The actionAllCheckbox for the component.
     */
    actionAllCheckbox?: InputCheckboxProps;

    /**
     * The actions for the component.
     */
    actions?: ((data: T[]) => ReactNode)[];

    /**
     * The data for the component.
     */
    data?: T[];
}

/**
 * Properties for the class of the TableActionCheckbox component.
 */
export interface TableActionCheckboxClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the TableActionCheckbox component.
 */
export interface TableActionCheckboxProps<T>
    extends TableActionCheckboxBaseProps<T>,
        TableActionCheckboxClassProps {}

export const TableActionCheckbox = <T = any,>({
    className = "",
    actionAllCheckbox,
    actions,
    data,
}: TableActionCheckboxProps<T>) => {
    const ACTIONS = useMemo(() => {
        return actions?.map((a) => {
            return (
                <>
                    <div className={`fenext-table-actions-checkbox-action  `}>
                        {a(data ?? [])}
                    </div>
                </>
            );
        });
    }, [data, actions]);
    return (
        <>
            <div className={`fenext-table-actions-checkbox ${className} `}>
                <div className={`fenext-table-actions-checkbox-select  `}>
                    <InputCheckbox {...actionAllCheckbox} />
                </div>
                {ACTIONS}
            </div>
        </>
    );
};
