import React from "react";
import { NotificationClassProps } from "../Fixed";
import { useNotificationProps } from "fenextjs-hook/cjs/useNotification";
import { _TProps } from "fenextjs-interface";
export interface NotificationPopBaseProps extends useNotificationProps, _TProps {
    typePop?: "top" | "down";
}
export interface NotificationPopClassProps extends NotificationClassProps {
    classNamePop?: string;
}
export interface NotificationPopProps extends NotificationPopBaseProps, NotificationPopClassProps {
}
export declare const NotificationPop: ({ classNamePop, className, typePop, time, ...props }: NotificationPopProps) => React.JSX.Element;
