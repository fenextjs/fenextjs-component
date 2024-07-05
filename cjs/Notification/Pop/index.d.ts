import React from "react";
import { NotificationClassProps } from "../Fixed";
import { useNotificationProps } from "fenextjs-hook/cjs/useNotification";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base NotificationPop component.
 */
export interface NotificationPopBaseProps extends useNotificationProps, _TProps {
    /**
     * The class name for the component.
     */
    typePop?: "top" | "down";
}
/**
 * Properties for the class of the NotificationPop component.
 */
export interface NotificationPopClassProps extends NotificationClassProps {
    /**
     * The class name for the component.
     */
    classNamePop?: string;
}
/**
 * Properties for the NotificationPop component.
 */
export interface NotificationPopProps extends NotificationPopBaseProps, NotificationPopClassProps {
}
export declare const NotificationPop: ({ classNamePop, className, typePop, time, ...props }: NotificationPopProps) => React.JSX.Element;
