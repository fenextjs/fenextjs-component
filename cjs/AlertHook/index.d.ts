import React from "react";
import { _TProps } from "fenextjs-interface";
import { useAlertProps } from "fenextjs-hook";
/**
 * Properties for the AlertHook component.
 */
export interface AlertHookProps extends _TProps {
    className?: string;
    configHook?: useAlertProps;
}
export declare const AlertHook: ({ className, configHook, ...props }: AlertHookProps) => React.JSX.Element;
