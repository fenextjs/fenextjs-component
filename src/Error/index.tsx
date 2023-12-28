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
    _t,
}: ErrorComponentProps) => {
    const content = useMemo(() => {
        return (
            <>
                {error ? (
                    <>{_tValidate(error.message ?? "", _t)}</>
                ) : (
                    _tValidate(children, _t)
                )}
            </>
        );
    }, [error, _t, children]);
    return (
        <div
            className={`fenext-error ${className} fenext-error-${error?.code}`}
        >
            {content}
        </div>
    );
};
