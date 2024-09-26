import React from "react";
import { _TProps } from "fenextjs-interface";
import { AlertProps } from "fenextjs-interface";
export interface useActionProps<T = any> {
    name: string;
    onActionExecute?: (d?: T) => void;
}
export declare const useAction: <T = any>({ name, onActionExecute, }: useActionProps<T>) => {
    onAction: (detail?: T) => void;
};
export interface useAlertProps {
    name?: string;
}
export declare const useAlert: <T = any>({ name, }: useAlertProps) => {
    alert: AlertProps<T> | undefined;
    setAlert: (detail?: AlertProps<T> | undefined) => void;
    onClearAlert: () => void;
};
export interface AlertHookProps extends _TProps {
    className?: string;
    configHook?: useAlertProps;
}
export declare const AlertHook: ({ className, configHook, ...props }: AlertHookProps) => React.JSX.Element;
