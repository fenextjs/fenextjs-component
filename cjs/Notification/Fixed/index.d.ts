import React, { PropsWithChildren } from "react";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Notification component.
 */
export interface NotificationBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    type?: RequestResultTypeProps | keyof typeof RequestResultTypeProps;
}
/**
 * Properties for the class of the Notification component.
 */
export interface NotificationClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Notification component.
 */
export interface NotificationProps extends NotificationBaseProps, NotificationClassProps {
}
export declare const Notification: ({ className, type, children, _t, }: NotificationProps) => React.JSX.Element;
