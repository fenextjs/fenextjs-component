import React, { useEffect } from "react";
import { NotificationClassProps, Notification } from "../Fixed";
import {
    useNotification,
    useNotificationProps,
} from "fenextjs-hook/cjs/useNotification";
import { _TProps } from "fenextjs-interface";

/**
 * Properties for the base NotificationPop component.
 */
export interface NotificationPopBaseProps
    extends useNotificationProps,
        _TProps {
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
export interface NotificationPopProps
    extends NotificationPopBaseProps,
        NotificationPopClassProps {}

export const NotificationPop = ({
    classNamePop = "",
    className = "",
    typePop = "down",
    time = 2000,
    ...props
}: NotificationPopProps) => {
    const { notification, reset } = useNotification({ time });
    useEffect(() => {
        setTimeout(() => {
            reset();
        }, time);
    }, []);

    return (
        <>
            {notification && (
                <div
                    className={`
                        fenext-notification-pop
                        fenext-notification-pop-${typePop}
                        fenext-notification-pop-${notification?.message != "" ? "active" : ""}
                        ${classNamePop}
                    `}
                >
                    <Notification
                        {...props}
                        className={className}
                        type={notification?.type}
                        children={notification?.message}
                    />
                </div>
            )}
        </>
    );
};
