import { usePrintDataProps } from "fenextjs-hook";
import React, { ReactNode } from "react";
export interface PrintPageComponentProps<T> {
    data: T | undefined;
    load: boolean;
}
export interface PrintPageBaseProps<T> extends usePrintDataProps {
    onComponent: (data: PrintPageComponentProps<T>) => ReactNode;
}
export interface PrintPageClassProps {
    className?: string;
}
export interface PrintPageProps<T> extends PrintPageBaseProps<T>, PrintPageClassProps {
}
export declare const PrintPage: <T>({ className, onComponent, ...props }: PrintPageProps<T>) => React.JSX.Element;
