import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
import { _tValidate } from "fenextjs-functions";
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
    _t,
}: ErrorComponentProps) => {
    const content = useMemo(() => {
        return (
            <>
                {error ? (
                    <>
                        {_tValidate(error?.msg ?? "", _t)}
                        {useErrorInput && error?.input && (
                            <>
                                {" "}
                                <span className="fenext-error-input">
                                    {_tValidate(`[${error?.input ?? ""}]`, _t)}
                                </span>
                            </>
                        )}
                    </>
                ) : (
                    _tValidate(children, _t)
                )}
            </>
        );
    }, [error, _t, children, useErrorInput]);

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
