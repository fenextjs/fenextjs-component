import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
import { InputCheckboxProps } from "../Input/Checkbox";
export interface TableActionCheckboxBaseProps<T> extends _TProps {
    actionAllCheckbox?: InputCheckboxProps;
    actions?: ((data: T[]) => ReactNode)[];
    data?: T[];
}
export interface TableActionCheckboxClassProps {
    className?: string;
}
export interface TableActionCheckboxProps<T> extends TableActionCheckboxBaseProps<T>, TableActionCheckboxClassProps {
}
export declare const TableActionCheckbox: <T = any>({ className, actionAllCheckbox, actions, data, }: TableActionCheckboxProps<T>) => React.JSX.Element;
