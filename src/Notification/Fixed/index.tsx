import React, { PropsWithChildren } from "react";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
import { Close } from "fenextjs-svg/cjs/Close";
import { useNotification } from "fenextjs-hook";
import { _tValidate } from "fenextjs-functions";
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
export interface NotificationProps
    extends NotificationBaseProps,
        NotificationClassProps {}

export const Notification = ({
    className = "",
    type = RequestResultTypeProps.NORMAL,
    children,
    _t,
}: NotificationProps) => {
    const { reset } = useNotification({});
    return (
        <>
            <div
                className={`fenext-notification fenext-notification-${type.toLowerCase()} ${className} `}
            >
                {_tValidate(children, _t)}
                <div className="fenext-notification-close" onClick={reset}>
                    <Close />
                </div>
            </div>
        </>
    );
};
