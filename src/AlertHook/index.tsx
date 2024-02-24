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
    const { alert, load, onClearAlert } = useAlert(configHook);
    return (
        <>
            {load && (
                <div className={`fenext-alert-hook ${className}`}>
                    {alert && (
                        <Alert _t={_t} {...alert} onClose={onClearAlert} />
                    )}
                </div>
            )}
        </>
    );
};
