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
    ...props
}: AlertHookProps) => {
    const { alert, onClearAlert } = useAlert(configHook);
    return (
        <>
            {alert && (
                <div className={`fenext-alert-hook ${className}`}>
                    <Alert {...props} {...alert} onClose={onClearAlert} />
                </div>
            )}
        </>
    );
};
