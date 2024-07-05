import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren, useMemo } from "react";

/**
 * Properties for the base ErrorComponent component.
 */
export interface ErrorComponentBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    error?: ErrorFenextjs;
    /**
     * The data-error .
     */
    useDataError?: boolean;
    /**
     * The data-error .
     */
    useErrorInput?: boolean;
}

/**
 * Properties for the class of the ErrorComponent component.
 */
export interface ErrorComponentClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ErrorComponent component.
 */
export interface ErrorComponentProps
    extends ErrorComponentBaseProps,
        ErrorComponentClassProps {}

export const ErrorComponent = ({
    error,
    children,
    className = "",
    useDataError = true,
    useErrorInput = true,
    ...props
}: ErrorComponentProps) => {
    const { _t } = use_T({ ...props });
    const content = useMemo(() => {
        return (
            <>
                {error ? (
                    <>
                        {_t(error?.msg ?? "")}
                        {useErrorInput && error?.input && (
                            <>
                                {" "}
                                <span className="fenext-error-input">
                                    {_t(`[${error?.input ?? ""}]`)}
                                </span>
                            </>
                        )}
                    </>
                ) : (
                    _t(children)
                )}
            </>
        );
    }, [error, children, useErrorInput]);

    const dataError = useMemo(() => {
        const err = useDataError ? error?.data : undefined;
        return err ? JSON.stringify(error) : undefined;
    }, [useDataError, error]);

    return (
        <div
            className={`fenext-error ${className} fenext-error-${error?.code}`}
            data-error={dataError}
        >
            {content}
        </div>
    );
};
