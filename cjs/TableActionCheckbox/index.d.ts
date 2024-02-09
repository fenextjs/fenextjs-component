import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
import { InputCheckboxProps } from "../Input/Checkbox";
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
export interface TableActionCheckboxProps<T> extends TableActionCheckboxBaseProps<T>, TableActionCheckboxClassProps {
}
export declare const TableActionCheckbox: <T = any>({ className, actionAllCheckbox, actions, data, }: TableActionCheckboxProps<T>) => React.JSX.Element;
