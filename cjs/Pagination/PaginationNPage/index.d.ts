import React from "react";
import { InputSelectClassProps } from "../../Input/Select";
import { _TProps } from "fenextjs-interface";
export declare const PaginationNPageDefaultOptions: number[];
export interface PaginationNPageClassProps extends InputSelectClassProps {
    className?: string;
}
export interface PaginationNPageBaseProps extends _TProps {
    options?: number[];
    onChange?: (npage: number) => void;
    paginationName?: string;
    disabled?: boolean;
}
export interface PaginationNPageProps extends PaginationNPageClassProps, PaginationNPageBaseProps {
}
export declare const PaginationNPage: ({ className, options, onChange, paginationName, disabled, ...props }: PaginationNPageProps) => React.JSX.Element;
