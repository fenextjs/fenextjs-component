import { usePrintData, usePrintDataProps } from "fenextjs-hook";
import React, { ReactNode, useMemo } from "react";

export interface PrintPageComponentProps<T> {
    data: T | undefined;
    load: boolean;
}

/**
 * Properties for the base PrintPage component.
 */
export interface PrintPageBaseProps<T> extends usePrintDataProps {
    /**
     * The class name for the component.
     */
    onComponent: (data: PrintPageComponentProps<T>) => ReactNode;
}

/**
 * Properties for the class of the PrintPage component.
 */
export interface PrintPageClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the PrintPage component.
 */
export interface PrintPageProps<T>
    extends PrintPageBaseProps<T>,
        PrintPageClassProps {}

export const PrintPage = <T,>({
    className = "",
    onComponent,
    ...props
}: PrintPageProps<T>) => {
    const { data, load } = usePrintData<T>(props);
    const COMPONENT = useMemo(
        () => onComponent?.({ data, load }),
        [data, load],
    );
    return (
        <>
            <div className={`fenext-print-page ${className} `}>{COMPONENT}</div>
        </>
    );
};
