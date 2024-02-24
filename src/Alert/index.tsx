import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
import { _tValidate } from "fenextjs-functions";
import { Close } from "fenextjs-svg";
import { AlertProps as AlertInterface } from "fenextjs-interface";

/**
 * Properties for the Alert component.
 */
export interface AlertProps extends _TProps, AlertInterface {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The iconClose for the component.
     */
    iconClose?: ReactNode;
    /**
     * The onClose for the component.
     */
    onClose?: () => void;
}

export const Alert = ({
    className = "",
    message,
    iconClose = <Close />,
    type,
    data,
    _t,
    onClose,
}: AlertProps) => {
    return (
        <>
            <div
                className={`fenext-alert fenext-alert-${type} ${className}`}
                data-type={type}
                meta-data={data}
            >
                <div className={`fenext-alert-content`}>
                    {_tValidate(message, _t)}
                </div>
                <div className={`fenext-alert-close`} onClick={onClose}>
                    {iconClose}
                </div>
            </div>
        </>
    );
};
