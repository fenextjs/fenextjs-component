import React from "react";
import { InputSelectBaseProps } from "../../Input/Select";
export interface PaginationNPageClassProps {
    className?: string;
}
export interface PaginationNPageBaseProps extends Omit<InputSelectBaseProps, "options" | "onChange" | "nItems"> {
    listNpage?: InputSelectBaseProps["options"];
    onChangeNPage?: InputSelectBaseProps["onChange"];
}
export interface PaginationNPageProps extends PaginationNPageClassProps, PaginationNPageBaseProps {
}
export declare const PaginationNPage: ({ className, defaultValue, listNpage, onChangeNPage, ...props }: PaginationNPageProps) => React.JSX.Element;
