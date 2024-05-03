import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
import { AlertProps as AlertInterface } from "fenextjs-interface";
/**
 * Properties for the Alert component.
 */
export interface AlertComponentProps extends _TProps, AlertInterface {
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
export declare const Alert: ({ className, message, iconClose, type, data, _t, onClose, }: AlertComponentProps) => React.JSX.Element;
