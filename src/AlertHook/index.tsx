import React from "react";
import { _TProps } from "fenextjs-interface";
import { useAlert, useAlertProps } from "fenextjs-hook";
import { Alert } from "../Alert";

/**
 * Properties for the AlertHook component.
 */
export interface AlertHookProps extends _TProps {
    className?: string;

    configHook?: useAlertProps;
}

export const AlertHook = ({
    className = "",
    configHook = {},
    _t,
}: AlertHookProps) => {
    const { alert, onClearAlert } = useAlert(configHook);
    return (
        <>
            {alert && (
                <div className={`fenext-alert-hook ${className}`}>
                    <Alert _t={_t} {...alert} onClose={onClearAlert} />
                </div>
            )}
        </>
    );
};
