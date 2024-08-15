import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
import { AlertProps as AlertInterface } from "fenextjs-interface";
export interface AlertComponentProps extends _TProps, AlertInterface {
    className?: string;
    iconClose?: ReactNode;
    onClose?: () => void;
}
export declare const Alert: ({ className, message, iconClose, type, data, onClose, ...props }: AlertComponentProps) => React.JSX.Element;
